const CACHE_NAME = 'apuntes-unam-v3';
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './404.html',
    'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalar: precachear assets estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activar: eliminar caches viejos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: cache-first para assets estáticos, network-first para CDN de MathJax
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Ignorar esquemas no soportados por Cache API
    if (!['http:', 'https:'].includes(url.protocol)) return;

    // Ignorar solicitudes de extensiones del navegador
    if (url.hostname === 'localhost' && event.request.url.includes('chrome-extension')) return;

    // MathJax: network-first (cambia frecuente)
    if (url.hostname.includes('jsdelivr') || url.hostname.includes('mathjax')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache-first para todo lo demás
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request).then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            }))
    );
});
