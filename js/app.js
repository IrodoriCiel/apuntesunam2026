/* =====================================================
   APUNTES UNAM 2026 — app.js
   ===================================================== */

// --- PWA: Service Worker ---
if ('serviceWorker' in navigator) {
    const SW_VERSION = window.__APP_VERSION || '20260303-4';
    const SW_URL = `./sw.js?v=${encodeURIComponent(SW_VERSION)}`;
    let hasRefreshedAfterUpdate = false;

    function showUpdateToast(registration) {
        if (document.getElementById('sw-update-toast')) return;

        const toast = document.createElement('div');
        toast.id = 'sw-update-toast';
        toast.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:18px;z-index:9999;background:#111827;color:#f9fafb;border:1px solid #374151;border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 10px 25px rgba(0,0,0,.25);max-width:92vw;font-family:Nunito,sans-serif;font-weight:700;';
        toast.innerHTML = `<span style="font-size:.92rem;"><i class="fa-solid fa-rotate" style="margin-right:8px;color:#60a5fa;"></i>Nueva versión disponible</span>`;

        const btn = document.createElement('button');
        btn.textContent = 'Actualizar ahora';
        btn.style.cssText = 'border:none;border-radius:10px;padding:8px 12px;background:#2563eb;color:#fff;font-weight:900;cursor:pointer;font-family:inherit;';
        btn.addEventListener('click', () => {
            if (registration?.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            } else {
                window.location.reload();
            }
        });

        toast.appendChild(btn);
        document.body.appendChild(toast);
    }

    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (hasRefreshedAfterUpdate) return;
        hasRefreshedAfterUpdate = true;
        window.location.reload();
    });

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(SW_URL)
            .then(registration => {
                if (registration.waiting) {
                    showUpdateToast(registration);
                }

                registration.addEventListener('updatefound', () => {
                    const installing = registration.installing;
                    if (!installing) return;

                    installing.addEventListener('statechange', () => {
                        if (installing.state === 'installed' && navigator.serviceWorker.controller) {
                            showUpdateToast(registration);
                        }
                    });
                });
            })
            .catch(err => console.log('SW error:', err));
    });
}

// --- PWA: Install Prompt ---
let _deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    _deferredInstallPrompt = e;
    // Mostrar el botón de instalar
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.style.display = 'flex';
});

window.addEventListener('appinstalled', () => {
    _deferredInstallPrompt = null;
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.style.display = 'none';
    console.log('PWA instalada exitosamente.');
});

async function installApp() {
    if (!_deferredInstallPrompt) return;
    _deferredInstallPrompt.prompt();
    const { outcome } = await _deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') {
        const btn = document.getElementById('pwa-install-btn');
        if (btn) btn.style.display = 'none';
    }
    _deferredInstallPrompt = null;
}

// --- Notificaciones Premium (Sin Alerts) ---
window.showToast = function (msg, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const color = type === 'error' ? '#ef4444' : (type === 'warning' ? '#f59e0b' : '#10b981');
    const icon = type === 'error' ? 'fa-circle-xmark' : (type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-check');

    toast.style.cssText = `background:var(--sub-node-bg); color:var(--text-color); border-left:5px solid ${color}; padding:14px 22px; border-radius:16px; box-shadow:var(--shadow); display:flex; align-items:center; gap:12px; font-weight:800; animation:slideInRight 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; min-width:280px; pointer-events:auto; border:1px solid rgba(0,0,0,0.05);`;
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}; font-size:1.3rem;"></i> <span>${msg}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 4500);
};

window.showConfirm = function (msg, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'pm-overlay active';
    overlay.style.zIndex = '5000';

    const card = document.createElement('div');
    card.className = 'pm-card';
    card.style.maxWidth = '380px';
    card.style.padding = '0';

    card.innerHTML = `
        <div class="pm-header" style="padding:30px 20px; background:linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);">
            <i class="fa-solid fa-circle-question" style="font-size:3.5rem; color:rgba(255,255,255,0.9); margin-bottom:15px; display:block;"></i>
            <h2 class="pm-preview-name" style="font-size:1.2rem; text-shadow:none;">Confirmación</h2>
        </div>
        <div class="pm-body" style="padding:25px; text-align:center;">
            <p style="font-weight:700; font-size:1rem; color:var(--text-color); line-height:1.5; margin:0 0 25px 0;">${msg}</p>
            <div style="display:flex; gap:12px;">
                <button id="confirm-cancel" class="btn-class-nav" style="flex:1; padding:12px; border-radius:14px; font-weight:800;">Cancelar</button>
                <button id="confirm-ok" class="btn-mark-studied" style="flex:1; padding:12px; margin:0; border-radius:14px; background:#2563eb; box-shadow:none;">Confirmar</button>
            </div>
        </div>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    const close = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    };

    card.querySelector('#confirm-cancel').onclick = close;
    card.querySelector('#confirm-ok').onclick = () => {
        close();
        callback();
    };
};

// --- Referencias DOM ---
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');

const MENU_STATE_KEY = 'menu-ui-state';
const STUDY_METRICS_KEY = 'study-metrics';
const BACKUP_LAST_AT_KEY = 'backup-last-at';

// --- StudyTools: IndexedDB & Core Logic ---
const ST_DB_NAME = 'study-tools-db';
const ST_DB_VERSION = 1;
let ST_DB = null;

function openSTDB() {
    return new Promise((resolve, reject) => {
        if (ST_DB) return resolve(ST_DB);
        const req = window.indexedDB.open(ST_DB_NAME, ST_DB_VERSION);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('srs')) db.createObjectStore('srs', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('history')) db.createObjectStore('history', { autoIncrement: true });
            if (!db.objectStoreNames.contains('prefs')) db.createObjectStore('prefs', { keyPath: 'key' });
        };
        req.onerror = () => reject(req.error);
        req.onsuccess = () => { ST_DB = req.result; resolve(ST_DB); };
    });
}

async function stDbPut(storeName, value) {
    const db = await openSTDB();
    return new Promise((res, rej) => {
        const tx = db.transaction(storeName, 'readwrite');
        const st = tx.objectStore(storeName);
        const rq = st.put(value);
        rq.onsuccess = () => res(rq.result);
        rq.onerror = () => rej(rq.error);
    });
}

async function stDbAdd(storeName, value) {
    const db = await openSTDB();
    return new Promise((res, rej) => {
        const tx = db.transaction(storeName, 'readwrite');
        const st = tx.objectStore(storeName);
        const rq = st.add(value);
        rq.onsuccess = () => res(rq.result);
        rq.onerror = () => rej(rq.error);
    });
}

async function stDbGetAll(storeName) {
    const db = await openSTDB();
    return new Promise((res, rej) => {
        const tx = db.transaction(storeName, 'readonly');
        const st = tx.objectStore(storeName);
        const rq = st.getAll();
        rq.onsuccess = () => res(rq.result || []);
        rq.onerror = () => rej(rq.error);
    });
}

async function stDbClear(storeName) {
    const db = await openSTDB();
    return new Promise((res, rej) => {
        const tx = db.transaction(storeName, 'readwrite');
        const st = tx.objectStore(storeName);
        const rq = st.clear();
        rq.onsuccess = () => res();
        rq.onerror = () => rej(rq.error);
    });
}

function sampleArray(arr, n) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]];
    }
    return typeof n === 'number' ? a.slice(0, n) : a;
}

function getFlashcardsForMateria(materiaLabel) {
    const db = (typeof flashcardsDatabase !== 'undefined' ? flashcardsDatabase : (window.flashcardsDatabase || []));
    const search = materiaLabel.toLowerCase().trim();
    return db.filter(card => {
        const asig = (card.asignatura || "").toLowerCase();
        return asig.includes(search) || search.includes(asig);
    }).map(card => ({
        id: card.id,
        front: card.pregunta,
        back: card.respuesta,
        tema: card.tema
    }));
}

window.StudyTools = {
    state: {
        flash: { cards: [], idx: 0, classId: null }
    },

    renderFlashPage() {
        const grid = document.getElementById('flashSubjectGrid');
        const hiddenInput = document.getElementById('flashSubjectSelect');
        if (!grid) return;
        grid.innerHTML = '';
        const subjectButtons = Array.from(document.querySelectorAll('.subject-item[id^="btn-"]'));
        const skip = ['btn-inicio', 'btn-todas-unam', 'btn-simulacro', 'btn-guided', 'btn-config'];
        const metaIconMap = window.MATERIA_ICON || {};

        subjectButtons.forEach(btn => {
            if (skip.includes(btn.id)) return;
            // Extraer texto limpio de los nodos de texto directos
            let label = "";
            btn.childNodes.forEach(node => {
                if (node.nodeType === 3) label += node.textContent;
            });
            label = label.trim().replace(/\s+/g, ' ');
            if (!label) return;

            const cards = getFlashcardsForMateria(label);
            if (!cards.length) return;

            const meta = metaIconMap[label] || { icon: 'fa-bookmark', color: '#64748b' };
            const cardEl = document.createElement('div');
            cardEl.className = 'sim-materia-card flash-subject-card unchecked';
            cardEl.innerHTML = `
                <div class="sim-materia-icon" style="color:${meta.color};background:${meta.color}18;">
                    <i class="fa-solid ${meta.icon}"></i>
                </div>
                <span class="sim-materia-name">${label}</span>
                <div style="font-size:0.7rem; font-weight:800; opacity:0.6; margin-top: -2px;">${cards.length} tarjetas</div>
                <span class="sim-materia-check"><i class="fa-solid fa-circle-check"></i></span>
            `;
            cardEl.onclick = () => {
                grid.querySelectorAll('.flash-subject-card').forEach(c => c.classList.add('unchecked'));
                cardEl.classList.remove('unchecked');
                if (hiddenInput) { hiddenInput.value = btn.id; hiddenInput.dataset.label = label; }
            };
            grid.appendChild(cardEl);
        });
        const firstCard = grid.querySelector('.flash-subject-card');
        if (firstCard) setTimeout(() => firstCard.click(), 50);

        document.querySelectorAll('.subject-content').forEach(el => el.classList.remove('visible'));
        const page = document.getElementById('content-flashcards');
        if (page) { page.classList.add('visible'); page.style.display = ''; }
    },

    startFlashcardsSession({ classId, count = 0 } = {}) {
        const sel = document.getElementById('flashSubjectSelect');
        const materiaLabel = sel ? sel.dataset.label : '';
        const pool = getFlashcardsForMateria(materiaLabel);
        const statusEl = document.getElementById('flash-status');
        if (!pool.length) {
            if (statusEl) { statusEl.style.display = ''; statusEl.textContent = 'No hay conceptos disponibles.'; }
            return;
        }
        if (statusEl) statusEl.style.display = 'none';
        this.state.flash.cards = sampleArray(pool, count || pool.length);
        this.state.flash.idx = 0;
        this.state.flash.classId = classId;
        const configArea = document.getElementById('flash-config-area');
        if (configArea) configArea.style.display = 'none';
        const sessionArea = document.getElementById('flash-session-area');
        if (sessionArea) { sessionArea.style.display = ''; sessionArea.scrollIntoView({ behavior: 'smooth' }); }
        const info = document.getElementById('flash-controls-info');
        if (info) info.innerHTML = `<i class='fa-solid fa-brain'></i> Repasando: <b>${materiaLabel}</b>`;
        this.renderCurrentCard();
    },

    renderCurrentCard() {
        const f = this.state.flash; if (!f.cards.length) return;
        const card = f.cards[f.idx];
        const scene = document.getElementById('flashCardScene');
        if (scene) scene.classList.remove('flipped');
        const front = document.getElementById('flashFrontPage'), back = document.getElementById('flashBackPage');
        if (front) front.innerHTML = card.front; if (back) back.innerHTML = card.back;
        const progressText = document.getElementById('flashProgressText');
        if (progressText) progressText.textContent = `${f.idx + 1} / ${f.cards.length}`;
        const progressBar = document.getElementById('flashProgressBar');
        if (progressBar) progressBar.style.width = `${((f.idx + 1) / f.cards.length) * 100}%`;
        if (window.MathJax) window.MathJax.typesetPromise && window.MathJax.typesetPromise();
    },

    flipCurrentCard() { document.getElementById('flashCardScene')?.classList.toggle('flipped'); },

    async markCurrentCard(diff) {
        const f = this.state.flash; const card = f.cards[f.idx];
        const days = diff === 'easy' ? 30 : (diff === 'medium' ? 7 : 1);
        const next = Date.now() + days * 24 * 60 * 60 * 1000;
        try { await stDbPut('srs', { id: `${card.id}`, card, difficulty: diff, nextReview: next }); } catch (e) { }
        try { await stDbAdd('history', { classId: f.classId, q: card, correct: diff !== 'hard', selected: null, at: Date.now() }); } catch (e) { }
        if (f.idx < f.cards.length - 1) { f.idx++; this.renderCurrentCard(); }
        else { showToast('¡Felicidades! Terminaste tu sesión.', 'success'); this.finishFlashcardsSession(true); }
    },

    finishFlashcardsSession(force = false) {
        if (!force && this.state.flash.cards.length > 0 && this.state.flash.idx < this.state.flash.cards.length - 1) {
            showConfirm('¿Quieres finalizar la sesión? El progreso no se guardará.', () => this._doFinish());
            return;
        }
        this._doFinish();
    },
    _doFinish() {
        this.state.flash.cards = []; this.state.flash.idx = 0;
        document.getElementById('flash-session-area').style.display = 'none';
        const configArea = document.getElementById('flash-config-area');
        if (configArea) { configArea.style.display = 'block'; configArea.scrollIntoView({ behavior: 'smooth' }); }
    },

    async renderStatsPage() {
        const metrics = getStudyMetrics();
        const history = await stDbGetAll('history');
        const srs = await stDbGetAll('srs');

        // Resumen Flashcards
        const flashTotal = (typeof flashcardsDatabase !== 'undefined' ? flashcardsDatabase.length : (window.flashcardsDatabase?.length || 0));
        const flashEasy = srs.filter(s => s.difficulty === 'easy').length;
        const flashMedium = srs.filter(s => s.difficulty === 'medium').length;
        const flashHard = srs.filter(s => s.difficulty === 'hard').length;

        const byClass = {};
        history.forEach(h => {
            const id = h.classId || 'unknown'; if (!byClass[id]) byClass[id] = { total: 0, correct: 0 };
            byClass[id].total++; if (h.correct) byClass[id].correct++;
        });
        const container = document.getElementById('statsContainer');
        if (!container) return;

        let html = `
        <div class="guided-summary" style="margin-bottom:25px; grid-template-columns: repeat(4, 1fr);">
            <div class="guided-kpi">
                <div class="guided-kpi-icon" style="background:#e0f2fe; color:#0369a1;"><i class="fa-solid fa-clone"></i></div>
                <b>${flashTotal}</b>
                <span>Total Cards</span>
            </div>
            <div class="guided-kpi">
                <div class="guided-kpi-icon" style="background:#d1fae5; color:#059669;"><i class="fa-solid fa-face-laugh-beam"></i></div>
                <b>${flashEasy}</b>
                <span>Fáciles</span>
            </div>
            <div class="guided-kpi">
                <div class="guided-kpi-icon" style="background:#fef3c7; color:#d97706;"><i class="fa-solid fa-face-smile"></i></div>
                <b>${flashMedium}</b>
                <span>Medio</span>
            </div>
            <div class="guided-kpi">
                <div class="guided-kpi-icon" style="background:#fee2e2; color:#b91c1c;"><i class="fa-solid fa-face-frown"></i></div>
                <b>${flashHard}</b>
                <span>Dificil</span>
            </div>
        </div>
        <table class="stats-table">
            <thead>
                <tr>
                    <th>Materia</th>
                    <th style="text-align:center;">Preguntas <br><small>(OK / Total)</small></th>
                    <th style="text-align:center;">Flashcards <br><small>(F / M / D / Tot)</small></th>
                    <th>Visitas</th>
                </tr>
            </thead>
            <tbody>`;
        const subjects = [];
        document.querySelectorAll('.subject-item[id^="btn-"]').forEach(btn => {
            const skip = ['btn-inicio', 'btn-todas-unam', 'btn-simulacro', 'btn-guided', 'btn-config'];
            if (skip.includes(btn.id)) return;
            let label = "";
            btn.childNodes.forEach(node => { if (node.nodeType === 3) label += node.textContent; });
            label = label.replace(/\s+/g, ' ').trim();
            const subj = { id: btn.id, label: label, total: 0, correct: 0, visits: 0 };
            const submenu = document.getElementById('submenu-' + btn.id.replace('btn-', ''));
            if (submenu) {
                submenu.querySelectorAll('.class-item[data-class-id]').forEach(a => {
                    const cid = a.dataset.classId;
                    const m = byClass[cid] || { total: 0, correct: 0 };
                    subj.total += m.total; subj.correct += m.correct;
                    subj.visits += (metrics[cid]?.visitCount || 0);
                });
            }
            subjects.push(subj);
        });
        const metaIconMap = window.MATERIA_ICON || {};
        const db = (typeof flashcardsDatabase !== 'undefined' ? flashcardsDatabase : (window.flashcardsDatabase || []));

        subjects.forEach(su => {
            const meta = metaIconMap[su.label] || { icon: 'fa-bookmark', color: '#64748b' };
            const pct = su.total ? Math.round(100 * su.correct / su.total) : 0;
            const iconHtml = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:8px; margin-right:8px; font-size: 0.9rem; color:${meta.color}; background:${meta.color}18;"><i class="fa-solid ${meta.icon}"></i></span>`;

            // Stats Flashcards por materia
            const cardsForSubj = db.filter(c => {
                const asig = (c.asignatura || "").toLowerCase().trim();
                const s = su.label.toLowerCase().trim();
                return asig.includes(s) || s.includes(asig);
            });
            const fTotal = cardsForSubj.length;
            const srsForSubj = srs.filter(s => {
                const asig = (s.card?.asignatura || "").toLowerCase().trim();
                const search = su.label.toLowerCase().trim();
                return asig.includes(search) || search.includes(asig);
            });
            const fEasy = srsForSubj.filter(s => s.difficulty === 'easy').length;
            const fMed = srsForSubj.filter(s => s.difficulty === 'medium').length;
            const fHard = srsForSubj.filter(s => s.difficulty === 'hard').length;

            const flashHtml = fTotal > 0 ? `
            <div style="display:flex; gap:4px; justify-content:center; align-items:center; font-size:0.85rem;">
                <span title="Fácil" style="color:#059669; font-weight:800;">${fEasy}</span>/
                <span title="Medio" style="color:#d97706; font-weight:800;">${fMed}</span>/
                <span title="Difícil" style="color:#b91c1c; font-weight:800;">${fHard}</span>
                <small style="opacity:0.5; margin-left:4px; font-weight:800;">(${fTotal})</small>
            </div>` : '<div style="text-align:center; opacity:0.3;">-</div>';

            html += `<tr>
            <td><div style="display:flex; align-items:center;">${iconHtml}<span style="font-weight:700;">${su.label}</span></div></td>
            <td style="text-align:center;">
                <div style="font-weight:700;">${su.correct}/${su.total}</div>
                <div style="font-size:0.75rem; font-weight:900; color:${pct >= 70 ? '#10b981' : (pct >= 40 ? '#f59e0b' : '#ef4444')}">${pct}%</div>
            </td>
            <td>${flashHtml}</td>
            <td style="text-align:center; font-weight:800;">${su.visits}</td>
        </tr>`;
        });
        container.innerHTML = html + `</tbody></table>`;
        document.querySelectorAll('.subject-content').forEach(el => el.classList.remove('visible'));
        const page = document.getElementById('content-stats'); if (page) { page.classList.add('visible'); page.style.display = ''; }
    }
};

let menuFilterTimer = null;
const SEARCH_CACHE = new Map();
const CLASS_RENDER_CACHE = new Map();

function normalizeStr(str) {
    return str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() : '';
}

// Basic HTML sanitizer allowing a small whitelist of tags and stripping events/styles
function sanitizeHTML(input) {
    if (!input) return '';
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(input, 'text/html');
        const allowed = new Set(['B', 'I', 'BR', 'P', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'SPAN', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SUB', 'SUP']);

        const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT, null, false);
        const removeList = [];
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!allowed.has(node.tagName)) {
                // remove scripts, iframes, imgs and unsafe nodes
                if (['SCRIPT', 'IFRAME', 'IMG', 'STYLE', 'LINK'].includes(node.tagName)) {
                    removeList.push(node);
                    continue;
                }
                // unwrap unknown but harmless tags by moving children up
                const parent = node.parentNode;
                while (node.firstChild) parent.insertBefore(node.firstChild, node);
                parent.removeChild(node);
                continue;
            }

            // strip event handlers and style attributes
            Array.from(node.attributes).forEach(attr => {
                const name = attr.name.toLowerCase();
                if (name.startsWith('on') || name === 'style') node.removeAttribute(attr.name);
                if ((name === 'href' || name === 'src') && attr.value.trim().toLowerCase().startsWith('javascript:')) node.removeAttribute(attr.name);
            });
        }
        removeList.forEach(n => n.remove());
        return doc.body.innerHTML;
    } catch (err) {
        console.warn('sanitizeHTML failed', err);
        return input.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    }
}

// Validate the appDatabase structure and warn for missing fields (non-intrusive)
function validateAppDatabase() {
    if (typeof appDatabase === 'undefined') return;
    Object.keys(appDatabase).forEach(key => {
        const node = appDatabase[key];
        if (!node.title || !node.mainTopicTitle || !Array.isArray(node.branches)) {
            console.warn(`appDatabase: entrada '${key}' falta keys obligatorias (title/mainTopicTitle/branches)`);
        } else {
            node.branches.forEach((b, i) => {
                if (!b.id || !b.title || !Array.isArray(b.subnodes)) {
                    console.warn(`appDatabase.${key}.branches[${i}] incompleto (id/title/subnodes)`);
                }
            });
        }
    });

    // Validate questions mapping
    ['unamQuestions', 'practiceQuestions'].forEach(qobj => {
        if (typeof window[qobj] !== 'undefined') {
            Object.keys(window[qobj]).forEach(k => {
                if (!appDatabase[k]) console.warn(`${qobj} tiene preguntas para clave desconocida: ${k}`);
            });
        }
    });
}

// Ensure there is a menu link for each class defined in appDatabase; if missing, append it to the parent submenu
function ensureSidebarLinksFromAppDatabase() {
    if (typeof appDatabase === 'undefined') return;
    Object.keys(appDatabase).forEach(contentId => {
        // already exists?
        if (document.querySelector(`.class-item[data-class-id="${contentId}"]`)) return;

        const parentBtnId = getParentBtnIdForClass(contentId);
        const submenuId = `submenu-${parentBtnId.replace('btn-', '')}`;
        const submenu = document.getElementById(submenuId);
        if (!submenu) return; // can't insert if parent submenu not present in DOM

        const data = appDatabase[contentId];
        const slug = contentId.replace('content-', '');
        const li = document.createElement('li');
        li.innerHTML = `<a href="javascript:void(0)" class="class-item" id="link-${slug}" onclick="switchClass('${contentId}', this, '${parentBtnId}')" data-class-id="${contentId}"><i class="fa-solid fa-book-open"></i> ${(data && (data.mainTopicSubtitle || data.title)) || slug} <span class="done-badge"><i class="fa-solid fa-check"></i></span></a>`;
        submenu.appendChild(li);
    });
}

// Best-effort parser for the provided PreguntasGuiaUnam.txt file. It will try to assign questions
// to appDatabase keys by looking for subject keywords. This is a non-destructive, optional enhancement.
function guessContentKey(block) {
    if (!block) return Object.keys(appDatabase)[0] || 'content-home';
    const text = block.toLowerCase();
    for (const key of Object.keys(appDatabase)) {
        const cd = appDatabase[key];
        const checks = [(cd.mainTopicTitle || ''), (cd.mainTopicSubtitle || ''), (cd.title || '')].join(' ').toLowerCase();
        if (!checks) continue;
        const tokens = checks.split(/[^a-záéíóúñ]+/).filter(Boolean).slice(0, 5);
        if (tokens.some(t => t && text.includes(t))) return key;
    }
    // fallback: try to detect some known subject words
    if (text.includes('matem') || text.includes('binom') || text.includes('triángulo')) return Object.keys(appDatabase).find(k => k.startsWith('content-matematicas')) || Object.keys(appDatabase)[0];
    if (text.includes('química') || text.includes('molécula') || text.includes('ácido')) return Object.keys(appDatabase).find(k => k.startsWith('content-quimica')) || Object.keys(appDatabase)[0];
    if (text.includes('historia') || text.includes('conquista') || text.includes('tenochtitlan')) return Object.keys(appDatabase).find(k => k.startsWith('content-historia')) || Object.keys(appDatabase)[0];
    if (text.includes('español') || text.includes('texto') || text.includes('narraci')) return Object.keys(appDatabase).find(k => k.startsWith('content-espanol')) || Object.keys(appDatabase)[0];
    if (text.includes('literatur') || text.includes('texto period')) return Object.keys(appDatabase).find(k => k.startsWith('content-literatura')) || Object.keys(appDatabase)[0];
    return Object.keys(appDatabase)[0] || 'content-home';
}

function parseQuestionsFromText(raw) {
    const out = {};
    try {
        // Split blocks by question number (e.g. "12. ...")
        const qRegex = /(?:\n|^)(\d{1,3})\.\s*([\s\S]*?)(?=(?:\n\d{1,3}\.\s)|$)/g;
        let m;
        while ((m = qRegex.exec(raw)) !== null) {
            const num = parseInt(m[1], 10);
            const block = m[2].trim();
            // Extract options like "A) text"
            const optRegex = /(?:\n|^)\s*([A-D])\)\s*([^\n]+)/g;
            const opts = [];
            let o;
            while ((o = optRegex.exec(block)) !== null) opts.push(o[2].trim());
            if (opts.length >= 2) {
                const preguntaLine = block.split(/\n/)[0].trim();
                const key = guessContentKey(block);
                if (!out[key]) out[key] = [];
                out[key].push({ numero: num, pregunta: preguntaLine, opciones: opts, respuesta: 0, retroalimentacion: '' });
            }
        }
    } catch (err) {
        console.warn('parseQuestionsFromText failed', err);
    }
    return out;
}

function loadPreguntasGuiaTxt() {
    // Only attempt if unamQuestions is empty-ish
    if (typeof unamQuestions !== 'undefined' && Object.keys(unamQuestions).length > 0) return;
    fetch('./PreguntasGuiaUnam.txt').then(r => r.text()).then(txt => {
        const parsed = parseQuestionsFromText(txt);
        Object.keys(parsed).forEach(k => {
            if (!window.unamQuestions) window.unamQuestions = {};
            window.unamQuestions[k] = (window.unamQuestions[k] || []).concat(parsed[k]);
        });
        // Rebuild search cache for new questions
        Object.keys(parsed).forEach(id => buildSearchTextForClass(id));
        console.log('PreguntasGuiaUnam.txt parsed: added questions for', Object.keys(parsed));
    }).catch(err => console.warn('No se pudo cargar PreguntasGuiaUnam.txt', err));
}

function getMenuState() {
    return JSON.parse(localStorage.getItem(MENU_STATE_KEY) || '{}');
}

function saveMenuState(nextState = {}) {
    const prev = getMenuState();
    localStorage.setItem(MENU_STATE_KEY, JSON.stringify({ ...prev, ...nextState }));
}

function setOpenSubmenu(submenuId = null) {
    document.querySelectorAll('.sub-menu-list').forEach(list => {
        list.style.maxHeight = null;
        list.classList.remove('expanded');
    });
    document.querySelectorAll('.subject-item').forEach(item => item.classList.remove('open'));

    if (!submenuId) {
        saveMenuState({ openSubmenuId: null });
        return;
    }

    const submenu = document.getElementById(submenuId);
    if (!submenu) return;
    submenu.classList.add('expanded');
    submenu.style.maxHeight = (submenu.scrollHeight + 30) + 'px';
    const wrapper = submenu.closest('.subject-wrapper');
    const subjectBtn = wrapper?.querySelector('.subject-item');
    if (subjectBtn) subjectBtn.classList.add('open');
    saveMenuState({ openSubmenuId: submenuId });
}

function saveMenuScroll() {
    if (!sideMenu) return;
    saveMenuState({ scrollTop: sideMenu.scrollTop });
}

function getStudyMetrics() {
    return JSON.parse(localStorage.getItem(STUDY_METRICS_KEY) || '{}');
}

function saveStudyMetrics(metrics) {
    localStorage.setItem(STUDY_METRICS_KEY, JSON.stringify(metrics));
}

function registerClassVisit(classId) {
    if (!classId || !appDatabase[classId]) return;
    const metrics = getStudyMetrics();
    const prev = metrics[classId] || {};
    metrics[classId] = {
        ...prev,
        lastVisitedAt: Date.now(),
        visitCount: (prev.visitCount || 0) + 1
    };
    saveStudyMetrics(metrics);
}

function registerQuestionResult(classId, isCorrect) {
    if (!classId || !appDatabase[classId]) return;
    const metrics = getStudyMetrics();
    const prev = metrics[classId] || {};

    const wrongAnswered = (prev.wrongAnswered || 0) + (isCorrect ? 0 : 1);
    const correctAnswered = (prev.correctAnswered || 0) + (isCorrect ? 1 : 0);
    const weakScore = isCorrect
        ? Math.max(0, (prev.weakScore || 0) - 1)
        : (prev.weakScore || 0) + 1;

    metrics[classId] = {
        ...prev,
        wrongAnswered,
        correctAnswered,
        weakScore,
        lastQuestionAt: Date.now(),
        ...(isCorrect ? { lastCorrectAt: Date.now() } : { lastWrongAt: Date.now() })
    };

    saveStudyMetrics(metrics);
}

// =============================================
// MODO OSCURO
// =============================================
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Actualizar todos los iconos/toggles de dark mode en la página
    document.querySelectorAll('.cfg-theme-icon').forEach(icon => {
        icon.className = 'fa-solid ' + (isDark ? 'fa-sun' : 'fa-moon') + ' cfg-theme-icon';
    });
    document.querySelectorAll('.cfg-theme-toggle').forEach(btn => {
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
    document.querySelectorAll('.cfg-theme-label').forEach(lbl => {
        lbl.textContent = isDark ? 'Modo Oscuro activo' : 'Modo Claro activo';
    });
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// =============================================
// SCROLL TO TOP
// =============================================
const scrollBtn = document.getElementById('scrollToTopBtn');
// Visibilidad PWA unificada
function updatePwaVisibility() {
    const pwaBtn = document.getElementById('pwa-install-btn');
    if (!pwaBtn) return;
    const isScrollDown = window.scrollY > 10;
    const isMenuOpen = sideMenu?.classList.contains('open');
    pwaBtn.classList.toggle('hidden-scroll', isScrollDown || isMenuOpen);
}

window.addEventListener('scroll', () => {
    // Scroll To Top
    if (scrollBtn) {
        scrollBtn.classList.toggle('visible', window.scrollY > 350);
    }
    updatePwaVisibility();
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// =============================================
// PROGRESO / ESTUDIO
// =============================================
function getStudiedClasses() {
    return JSON.parse(localStorage.getItem('studied-classes') || '{}');
}
function toggleStudied(classId) {
    const studied = getStudiedClasses();
    const metrics = getStudyMetrics();
    studied[classId] = !studied[classId];
    const nextDone = !!studied[classId];

    metrics[classId] = {
        ...(metrics[classId] || {}),
        ...(nextDone ? { lastStudiedAt: Date.now() } : { lastStudiedAt: null })
    };
    saveStudyMetrics(metrics);

    if (!studied[classId]) delete studied[classId]; // limpia false del objeto
    localStorage.setItem('studied-classes', JSON.stringify(studied));
    updateStudiedBadges();
    // Actualizar el botón dinámicamente
    const btn = document.getElementById('btn-studied-' + classId);
    if (btn) {
        const isDone = !!studied[classId];
        btn.className = 'btn-mark-studied' + (isDone ? ' done' : '');
        btn.innerHTML = `<i class="fa-solid fa-${isDone ? 'check-circle' : 'circle'}"></i> ${isDone ? 'Clase completada – desmarcar' : 'Marcar como estudiada'}`;
    }
}
function updateStudiedBadges() {
    const studied = getStudiedClasses();

    // Actualizar badge ✓ en cada clase individual
    document.querySelectorAll('.class-item[data-class-id]').forEach(link => {
        const id = link.dataset.classId;
        link.classList.toggle('studied', !!studied[id]);
    });

    // Actualizar badge de pendientes por materia
    document.querySelectorAll('.subject-pending-badge').forEach(badge => {
        const btnId = badge.closest('.subject-item')?.id; // e.g. "btn-espanol"
        if (!btnId) return;
        const submenuId = 'submenu-' + btnId.replace('btn-', '');
        const submenu = document.getElementById(submenuId);
        if (!submenu) return;

        // Solo clases reales (con data-class-id, no las bloqueadas)
        const classLinks = [...submenu.querySelectorAll('.class-item[data-class-id]')];
        const total = classLinks.length;
        if (total === 0) { badge.classList.remove('visible'); return; }

        const completadas = classLinks.filter(l => !!studied[l.dataset.classId]).length;
        const pendientes = total - completadas;

        badge.classList.add('visible');
        // Forzar re-animación al cambiar
        badge.style.animation = 'none';
        badge.offsetHeight; // reflow
        badge.style.animation = '';

        if (pendientes === 0) {
            badge.classList.add('all-done');
            badge.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            badge.classList.remove('all-done');
            badge.textContent = pendientes;
        }
    });

    if (typeof updateProfileProgress === 'function') {
        updateProfileProgress();
    }
}

// =============================================
// BUSCADOR EN MENÚ
// =============================================
function filterMenu(query) {
    if (menuFilterTimer) clearTimeout(menuFilterTimer);
    menuFilterTimer = setTimeout(() => applyMenuFilter(query), 120);
}

function buildSearchTextForClass(classId) {
    if (SEARCH_CACHE.has(classId)) return SEARCH_CACHE.get(classId);

    let allText = '';
    if (typeof appDatabase !== 'undefined' && appDatabase[classId]) {
        const cd = appDatabase[classId];
        allText += `${cd.title || ''} ${cd.mainTopicTitle || ''} ${cd.mainTopicSubtitle || ''} `;
        (cd.branches || []).forEach(b => {
            allText += `${b.title || ''} `;
            (b.subnodes || []).forEach(sn => {
                allText += `${sn.title || ''} ${sn.content || ''} `;
            });
        });
    }
    if (typeof practiceQuestions !== 'undefined' && practiceQuestions[classId]) {
        practiceQuestions[classId].forEach(pq => {
            allText += `${pq.pregunta || ''} ${(pq.opciones || []).join(' ')} ${pq.retroalimentacion || ''} `;
        });
    }
    if (typeof unamQuestions !== 'undefined' && unamQuestions[classId]) {
        unamQuestions[classId].forEach(uq => {
            allText += `${uq.pregunta || ''} ${(uq.opciones || []).join(' ')} ${uq.retroalimentacion || ''} `;
        });
    }

    const cleanText = normalizeStr(allText.replace(/<[^>]*>?/gm, ' '));
    SEARCH_CACHE.set(classId, cleanText);
    return cleanText;
}

function fuzzyWordExists(token, sourceText) {
    if (token.length < 4) return false;
    const words = sourceText.split(/\s+/).filter(w => Math.abs(w.length - token.length) <= 1);
    return words.some(word => {
        let mismatch = 0;
        let i = 0;
        let j = 0;
        while (i < token.length && j < word.length) {
            if (token[i] === word[j]) {
                i++;
                j++;
                continue;
            }
            mismatch++;
            if (mismatch > 1) return false;
            if (token.length > word.length) i++;
            else if (token.length < word.length) j++;
            else {
                i++;
                j++;
            }
        }
        mismatch += (token.length - i) + (word.length - j);
        return mismatch <= 1;
    });
}

function highlightClassText(item, query) {
    const labelNode = item.querySelector('.class-item-label');
    if (!labelNode) return;
    if (!query) {
        labelNode.innerHTML = labelNode.dataset.originalLabel || labelNode.textContent;
        return;
    }

    const originalLabel = labelNode.dataset.originalLabel || labelNode.textContent;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const rx = new RegExp(`(${escaped})`, 'ig');
    labelNode.innerHTML = originalLabel.replace(rx, '<mark class="menu-hit">$1</mark>');
}

function ensureClassLabelsWrapped() {
    document.querySelectorAll('.class-item').forEach(item => {
        const existingLabel = item.querySelector('.class-item-label');
        const clone = item.cloneNode(true);
        clone.querySelectorAll('i, .done-badge, .class-item-label').forEach(el => el.remove());
        const fallbackLabelText = clone.textContent.replace(/\s+/g, ' ').trim();
        const doneBadge = item.querySelector('.done-badge');

        Array.from(item.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                item.removeChild(node);
            }
        });

        if (existingLabel) {
            if (!existingLabel.dataset.originalLabel) {
                existingLabel.dataset.originalLabel = existingLabel.textContent.trim() || fallbackLabelText;
            }
            return;
        }

        const span = document.createElement('span');
        span.className = 'class-item-label';
        span.dataset.originalLabel = fallbackLabelText;
        span.textContent = fallbackLabelText;
        if (doneBadge) {
            item.insertBefore(span, doneBadge);
        } else {
            item.appendChild(span);
        }
    });
}

function applyMenuFilter(query) {
    const q = normalizeStr(query).trim();
    saveMenuState({ searchQuery: query || '' });

    ensureClassLabelsWrapped();

    if (!q) {
        document.querySelectorAll('.subject-wrapper').forEach(wrapper => {
            wrapper.style.display = '';

            wrapper.querySelectorAll('.class-item').forEach(item => {
                if (item.parentElement) item.parentElement.style.display = '';
            });

            const submenu = wrapper.querySelector('.sub-menu-list');
            if (submenu) {
                submenu.classList.remove('expanded');
                submenu.style.maxHeight = null;
            }

            const subjectBtn = wrapper.querySelector('.subject-item');
            if (subjectBtn) subjectBtn.classList.remove('open');

            wrapper.querySelectorAll('.class-item').forEach(item => highlightClassText(item, ''));
        });
        saveMenuState({ openSubmenuId: null });
        return;
    }

    const qTokens = q.split(/\s+/).filter(Boolean);

    document.querySelectorAll('.subject-wrapper').forEach(wrapper => {
        const items = wrapper.querySelectorAll('.class-item');
        let anyVisible = false;

        items.forEach(item => {
            const text = normalizeStr(item.textContent);
            const classId = item.getAttribute('data-class-id');

            const textMatch = qTokens.every(token => text.includes(token) || fuzzyWordExists(token, text));
            let contentMatched = false;

            if (q && classId) {
                const cleanText = buildSearchTextForClass(classId);
                contentMatched = qTokens.every(token => cleanText.includes(token) || fuzzyWordExists(token, cleanText));
            }

            const show = textMatch || contentMatched;
            item.parentElement.style.display = show ? '' : 'none';
            if (show) anyVisible = true;

            const firstToken = qTokens[0] || '';
            highlightClassText(item, firstToken);
        });

        const subjectBtn = wrapper.querySelector('.subject-item');
        if (items.length > 0) {
            wrapper.style.display = anyVisible ? '' : 'none';
            if (anyVisible) {
                const submenu = wrapper.querySelector('.sub-menu-list');
                if (submenu) {
                    submenu.classList.add('expanded');
                    submenu.style.maxHeight = submenu.scrollHeight + 50 + 'px';
                    if (subjectBtn) subjectBtn.classList.add('open');
                }
            }
        }
    });
}

// =============================================
// HASH / DEEP LINKING
// =============================================
let isInternalNav = false;

function handleHash() {
    if (isInternalNav) return;
    const hash = window.location.hash.substring(1).split('?')[0];
    if (!hash || hash === 'home') {
        switchClass('content-home', document.getElementById('link-inicio'), 'btn-inicio');
        return;
    }
    const targetLink = document.getElementById('link-' + hash) ||
        document.getElementById('btn-' + hash);
    if (targetLink) {
        const onclickAttr = targetLink.getAttribute('onclick') || '';
        const parts = onclickAttr.split("'");
        const contentId = parts[1] || ('content-' + hash);
        const parentId = parts[3] || null;
        switchClass(contentId, targetLink, parentId);
    } else if (hash === 'todas-unam') {
        switchClass('content-todas-unam', document.getElementById('btn-todas-unam'), 'btn-todas-unam');
    } else if (hash === 'simulacro') {
        switchClass('content-simulacro', document.getElementById('btn-simulacro'), 'btn-simulacro');
    } else if (hash === 'guided') {
        switchClass('content-guided', document.getElementById('btn-guided'), 'btn-guided');
    } else if (hash === 'config') {
        switchClass('content-config', document.getElementById('btn-config'), 'btn-config');
    } else if (hash === 'studytok') {
        switchClass('content-studytok', document.getElementById('link-studytok'), 'btn-studytok');
    }
}

window.addEventListener('hashchange', handleHash);
window.addEventListener('load', () => { if (window.location.hash) handleHash(); });

// =============================================
// MENÚ LATERAL
// =============================================
function toggleMenu() {
    menuBtn.classList.toggle('open');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');

    updatePwaVisibility();

    if (window.innerWidth > 900) {
        mainContent.style.paddingLeft = sideMenu.classList.contains('open') ? '320px' : '0';
    } else {
        document.body.style.overflow = sideMenu.classList.contains('open') ? 'hidden' : '';
    }
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function toggleSubMenu(e, submenuId) {
    e.preventDefault();
    const submenu = document.getElementById(submenuId);
    const isOpen = submenu.classList.contains('expanded');
    if (isOpen) setOpenSubmenu(null);
    else setOpenSubmenu(submenuId);
}

// =============================================
// RENDER: CLASE
// =============================================
function renderClassContainer(classId) {
    if (CLASS_RENDER_CACHE.has(classId)) return CLASS_RENDER_CACHE.get(classId);
    const data = appDatabase[classId];
    if (!data) return '';

    let html = `
    <div id="${classId}" class="subject-content visible" style="animation:fadeInPage 0.4s ease forwards;">
        <h1 class="title-main" ${data.titleStyle ? `style="${data.titleStyle}"` : ''}>
            <i class="fa-solid ${data.titleIconLeft}"></i> ${data.title} <i class="fa-solid ${data.titleIconRight}"></i>
        </h1>
        <div class="mindmap-container">
            <div class="main-topic ${data.mainTopicClass}" id="${data.mainTopicId}">
                <h2>
                    <span class="main-topic-title-icon"><i class="fa-solid ${data.mainTopicIcon1}"></i></span>
                    <span class="main-topic-title-text">${data.mainTopicTitle}</span>
                    <span class="main-topic-title-icon"><i class="fa-solid ${data.mainTopicIcon2}"></i></span>
                </h2>
                <p>${sanitizeHTML(data.mainTopicSubtitle)}</p>
            </div>
            <div class="branches">
    `;

    data.branches.forEach(branch => {
        html += `
            <div class="branch-col">
                <div class="topic-node topic-${branch.topicIdx}" onclick="toggleNodes('${branch.id}', this)">
                    <h2><i class="fa-solid ${branch.icon}"></i> ${branch.title}</h2>
                    <span class="click-hint"><i class="fa-solid fa-hand-pointer"></i> Clic para contraer</span>
                </div>
                <div class="sub-nodes-container" id="${branch.id}">
        `;
        branch.subnodes.forEach(sub => {
            const exHtml = sub.examples ? `<div class="example-box"><ul>${sub.examples.map(e => `<li>${e}</li>`).join('')}</ul></div>` : '';
            html += `
                <div class="sub-node topic-${branch.topicIdx}-sub" style="animation-delay:${sub.delay};">
                    <h3>${sub.icon ? `<div><i class="fa-solid ${sub.icon}"></i> ${sub.title}</div>` : sub.title}</h3>
                    ${sanitizeHTML(sub.content)}${exHtml}
                </div>
            `;
        });
        html += `</div></div>`;
    });

    html += `
            </div>
        </div>
        ${data.videoUrl ? `
        <div class="video-section">
            <div class="video-header" onclick="toggleVideo(this)" style="margin-bottom:0;border-bottom:none;">
                <h2><i class="fa-brands fa-youtube"></i> Clase en Video</h2>
                <button class="unam-toggle-btn">Mostrar / Ocultar</button>
            </div>
            <div class="video-container-responsive" style="display:none;">
                <iframe src="${data.videoUrl}" title="Video" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
        </div>` : ''}
    </div>`;

    CLASS_RENDER_CACHE.set(classId, html);
    return html;
}

function getGuidedStudyPlan() {
    if (typeof appDatabase === 'undefined') return { nextClass: null, dueReview: [], pending: [], recent: [] };
    const studied = getStudiedClasses();
    const metrics = getStudyMetrics();
    const classIds = Object.keys(appDatabase);
    const now = Date.now();
    const reviewMs = 5 * 24 * 60 * 60 * 1000;

    const pending = classIds.filter(id => !studied[id]);
    const timeDueClasses = classIds
        .filter(id => !!studied[id])
        .filter(id => {
            const t = metrics[id]?.lastStudiedAt;
            if (!t) return true;
            return (now - t) >= reviewMs;
        });

    const dueReview = classIds
        .filter(id => {
            const weakScore = metrics[id]?.weakScore || 0;
            if (weakScore > 0) return true;

            if (!studied[id]) return false;
            const t = metrics[id]?.lastStudiedAt;
            if (!t) return true;
            return (now - t) >= reviewMs;
        })
        .sort((a, b) => {
            const weakDiff = (metrics[b]?.weakScore || 0) - (metrics[a]?.weakScore || 0);
            if (weakDiff !== 0) return weakDiff;

            const wrongTimeDiff = (metrics[b]?.lastWrongAt || 0) - (metrics[a]?.lastWrongAt || 0);
            if (wrongTimeDiff !== 0) return wrongTimeDiff;

            return (metrics[a]?.lastStudiedAt || 0) - (metrics[b]?.lastStudiedAt || 0);
        });

    const recent = classIds
        .filter(id => !!metrics[id]?.lastVisitedAt)
        .sort((a, b) => (metrics[b]?.lastVisitedAt || 0) - (metrics[a]?.lastVisitedAt || 0))
        .slice(0, 6);

    const urgentByMistake = dueReview.find(id => (metrics[id]?.weakScore || 0) > 0) || null;
    const nextClass = urgentByMistake || pending[0] || dueReview[0] || recent[0] || classIds[0] || null;
    return { nextClass, dueReview, pending, recent, timeDueClasses };
}

function getTimedReviewSubjects() {
    const plan = getGuidedStudyPlan();
    const orderedSubjects = [];
    plan.timeDueClasses.forEach(id => {
        const materia = appDatabase[id]?.mainTopicTitle;
        if (!materia) return;
        if (!orderedSubjects.includes(materia)) orderedSubjects.push(materia);
    });
    return orderedSubjects;
}

function startTimedReviewExam() {
    const materias = getTimedReviewSubjects();
    if (!materias.length) {
        showToast('Aún no hay materias vencidas por tiempo para repaso.', 'warning');
        return;
    }
    switchClass('content-simulacro', document.getElementById('btn-simulacro'), 'btn-simulacro');
    setTimeout(() => startSimulacro(materias), 80);
}

function renderGuidedStudyPage() {
    const plan = getGuidedStudyPlan();
    const total = Object.keys(appDatabase || {}).length;
    const done = total - plan.pending.length;
    const timedSubjects = getTimedReviewSubjects();

    const mkList = (ids, defaultIcon, emptyText) => {
        if (!ids.length) return `<p class="guided-empty">${emptyText}</p>`;
        const metaIconMap = window.MATERIA_ICON || {};
        return `<div class="guided-list">${ids.map(id => {
            const data = appDatabase[id];
            if (!data) return '';
            const slug = id.replace('content-', '');
            const materiaLabel = data.mainTopicTitle || '';
            const meta = metaIconMap[materiaLabel] || { icon: defaultIcon, color: '#64748b' };

            return `<button class="guided-item" onclick="switchClass('${id}', document.getElementById('link-${slug}'), '${getParentBtnIdForClass(id)}')" style="border-left-color: ${meta.color};">
                        <span class="guided-item-icon" style="color:${meta.color}; background:${meta.color}18;"><i class="fa-solid ${meta.icon}"></i></span>
                        <span class="guided-item-text">${data.mainTopicSubtitle || data.title || id}</span>
                        <i class="fa-solid fa-chevron-right guided-item-arrow" style="color:${meta.color};"></i>
                    </button>`;
        }).join('')}</div>`;
    };

    const nextData = plan.nextClass ? appDatabase[plan.nextClass] : null;
    const nextSlug = plan.nextClass ? plan.nextClass.replace('content-', '') : '';
    const nextParent = plan.nextClass ? getParentBtnIdForClass(plan.nextClass) : '';

    return `
        <div id="content-guided" class="subject-content visible" style="animation:fadeInPage 0.4s ease forwards;">
            <h1 class="title-main" style="color:#0f766e;">
                <i class="fa-solid fa-route"></i> Estudio Guiado <i class="fa-solid fa-compass"></i>
            </h1>
            <div class="guided-wrap">
                <div class="guided-summary">
                    <div class="guided-kpi" style="border-top: 4px solid #10b981;">
                        <span class="guided-kpi-icon" style="color: #10b981; background: #10b98118;"><i class="fa-solid fa-check-double"></i></span>
                        <b>${done}</b><span>Completadas</span>
                    </div>
                    <div class="guided-kpi" style="border-top: 4px solid #f59e0b;">
                        <span class="guided-kpi-icon" style="color: #f59e0b; background: #f59e0b18;"><i class="fa-solid fa-hourglass-half"></i></span>
                        <b>${plan.pending.length}</b><span>Pendientes</span>
                    </div>
                    <div class="guided-kpi" style="border-top: 4px solid #ec4899;">
                        <span class="guided-kpi-icon" style="color: #ec4899; background: #ec489918;"><i class="fa-solid fa-rotate-left"></i></span>
                        <b>${plan.dueReview.length}</b><span>Repaso Hoy</span>
                    </div>
                </div>

                <div class="guided-next-card">
                    <h3><i class="fa-solid fa-bolt"></i> Siguiente recomendada</h3>
                    <p>${nextData ? (nextData.mainTopicSubtitle || nextData.title) : 'Sin clases disponibles por ahora.'}</p>
                    ${nextData ? `<button class="guided-next-btn" onclick="switchClass('${plan.nextClass}', document.getElementById('link-${nextSlug}'), '${nextParent}')"><i class="fa-solid fa-play"></i> Estudiar ahora</button>` : ''}
                </div>

                <div class="guided-next-card guided-next-card-time">
                    <h3><i class="fa-solid fa-stopwatch"></i> Simulacro sugerido por tiempo</h3>
                    <p>${timedSubjects.length ? `Materias vencidas para repaso: ${timedSubjects.join(', ')}.` : 'No hay materias vencidas por tiempo en este momento.'}</p>
                    ${timedSubjects.length ? `<button class="guided-next-btn" style="background:#2563eb;" onclick="startTimedReviewExam()"><i class="fa-solid fa-file-signature"></i> Iniciar simulacro sugerido</button>` : ''}
                </div>

                <div class="guided-grid">
                    <section class="guided-col">
                        <h4><i class="fa-solid fa-list-check"></i> Pendientes</h4>
                        ${mkList(plan.pending.slice(0, 8), 'fa-hourglass-half', '¡Vas al día! No hay clases pendientes.')}
                    </section>
                    <section class="guided-col">
                        <h4><i class="fa-solid fa-rotate"></i> Repaso sugerido</h4>
                        ${mkList(plan.dueReview.slice(0, 8), 'fa-rotate-left', 'Aún no hay repasos vencidos.')}
                    </section>
                    <section class="guided-col">
                        <h4><i class="fa-solid fa-clock-rotate-left"></i> Vistas recientemente</h4>
                        ${mkList(plan.recent, 'fa-book-open-reader', 'Abre una clase para empezar tu historial de estudio.')}
                    </section>
                </div>
            </div>
        </div>`;
}

function getParentBtnIdForClass(contentId) {
    if (contentId.startsWith('content-espanol')) return 'btn-espanol';
    if (contentId.startsWith('content-matematicas')) return 'btn-matematicas';
    if (contentId.startsWith('content-quimica')) return 'btn-quimica';
    if (contentId.startsWith('content-historia')) return 'btn-historia';
    if (contentId.startsWith('content-literatura')) return 'btn-literatura';
    return 'btn-inicio';
}

function getClassNavigationTargets(contentId) {
    const parentBtnId = getParentBtnIdForClass(contentId);
    if (!parentBtnId || parentBtnId === 'btn-inicio') return { parentBtnId, prevId: null, nextId: null };

    const submenuId = `submenu-${parentBtnId.replace('btn-', '')}`;
    const submenu = document.getElementById(submenuId);
    if (!submenu) return { parentBtnId, prevId: null, nextId: null };

    const ids = [...submenu.querySelectorAll('.class-item[data-class-id]')]
        .map(link => link.dataset.classId)
        .filter(Boolean);

    const idx = ids.indexOf(contentId);
    if (idx === -1) return { parentBtnId, prevId: null, nextId: null };

    return {
        parentBtnId,
        prevId: idx > 0 ? ids[idx - 1] : null,
        nextId: idx < ids.length - 1 ? ids[idx + 1] : null
    };
}

async function createBackupPayload() {
    const srs = await stDbGetAll('srs').catch(() => []);
    const history = await stDbGetAll('history').catch(() => []);
    const prefs = await stDbGetAll('prefs').catch(() => []);

    return {
        meta: {
            app: 'Mis Apuntes UNAM 2026',
            exportedAt: new Date().toISOString(),
            version: 1
        },
        data: {
            profile: localStorage.getItem('user-profile') || '{}',
            studied: localStorage.getItem('studied-classes') || '{}',
            simHistory: localStorage.getItem('sim-history') || '[]',
            theme: localStorage.getItem('theme') || 'light',
            studyMetrics: localStorage.getItem(STUDY_METRICS_KEY) || '{}',
            menuState: localStorage.getItem(MENU_STATE_KEY) || '{}',
            stDb: { srs, history, prefs }
        }
    };
}

async function exportProgressBackup() {
    try {
        const payload = await createBackupPayload();
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const stamp = new Date().toISOString().replace(/[:.]/g, '-');
        a.href = url;
        a.download = `apuntes-backup-${stamp}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        localStorage.setItem(BACKUP_LAST_AT_KEY, String(Date.now()));
        updateBackupStatusLabel();
    } catch (err) {
        console.error('Error exportProgressBackup:', err);
        showToast('Error al procesar el archivo local. Inténtalo de nuevo.', 'error');
    }
}

function importProgressBackup(input) {
    const file = input?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
        try {
            const parsed = JSON.parse(String(reader.result || '{}'));
            if (!parsed.data) throw new Error('Formato inválido');

            const data = parsed.data;
            localStorage.setItem('user-profile', data.profile || '{}');
            localStorage.setItem('studied-classes', data.studied || '{}');
            localStorage.setItem('sim-history', data.simHistory || '[]');
            localStorage.setItem('theme', data.theme || 'light');
            localStorage.setItem(STUDY_METRICS_KEY, data.studyMetrics || '{}');
            localStorage.setItem(MENU_STATE_KEY, data.menuState || '{}');
            localStorage.setItem(BACKUP_LAST_AT_KEY, String(Date.now()));

            if (data.stDb) {
                await stDbClear('srs').catch(e => console.warn(e));
                await stDbClear('history').catch(e => console.warn(e));
                await stDbClear('prefs').catch(e => console.warn(e));

                if (data.stDb.srs) {
                    for (const item of data.stDb.srs) await stDbPut('srs', item).catch(e => console.warn(e));
                }
                if (data.stDb.history) {
                    for (const item of data.stDb.history) await stDbAdd('history', item).catch(e => console.warn(e));
                }
                if (data.stDb.prefs) {
                    for (const item of data.stDb.prefs) await stDbPut('prefs', item).catch(e => console.warn(e));
                }
            }

            if ((data.theme || 'light') === 'dark') document.body.classList.add('dark-mode');
            else document.body.classList.remove('dark-mode');

            loadProfile();
            updateStudiedBadges();
            updateBackupStatusLabel();
            showToast('Respaldo importado correctamente.', 'success');
        } catch (err) {
            console.error(err);
            showToast('No se pudo importar el archivo. Verifica el formato del respaldo.', 'error');
        } finally {
            input.value = '';
        }
    };
    reader.readAsText(file);
}

function updateBackupStatusLabel() {
    const label = document.getElementById('cfgBackupStatus');
    if (!label) return;
    const ts = Number(localStorage.getItem(BACKUP_LAST_AT_KEY) || 0);
    if (!ts) {
        label.textContent = 'Sin respaldos recientes.';
        return;
    }
    const when = new Date(ts).toLocaleString('es-MX', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    label.textContent = `Último respaldo: ${when}`;
}

// =============================================
// RENDER: TODAS LAS PREGUNTAS UNAM
// =============================================
function renderAllUnamQuestionsPage() {
    const iconMap = { 'Español': 'fa-language', 'Matemáticas': 'fa-calculator', 'Física': 'fa-atom', 'Química': 'fa-flask', 'Biología': 'fa-dna', 'Historia Universal': 'fa-globe', 'Historia de México': 'fa-earth-americas', 'Literatura': 'fa-book', 'Geografía': 'fa-map' };
    const unamExpected = { 'Física': 12, 'Literatura': 10, 'Química': 13, 'Geografía': 10, 'Matemáticas': 24, 'Español': 18, 'Biología': 13, 'Historia Universal': 10, 'Historia de México': 10 };
    let currentCounts = Object.fromEntries(Object.keys(unamExpected).map(k => [k, 0]));
    let allQuestions = [], totalAvailable = 0;
    Object.keys(unamQuestions).forEach(key => {
        const materia = appDatabase[key]?.mainTopicTitle || 'General';
        const temaRaw = appDatabase[key]?.mainTopicSubtitle || 'General';
        const tema = temaRaw.includes(': ') ? temaRaw.split(': ').slice(1).join(': ') : temaRaw;
        unamQuestions[key].forEach(q => {
            allQuestions.push({ ...q, materia, tema, originalKey: key });
            if (currentCounts[materia] !== undefined) currentCounts[materia]++;
            totalAvailable++;
        });
    });
    allQuestions.sort((a, b) => a.numero - b.numero);
    const totalExpected = 120;
    const totalPct = Math.round((totalAvailable / totalExpected) * 100);

    let html = `
    <div id="content-todas-unam" class="subject-content visible" style="animation:fadeInPage 0.4s ease forwards;">
        <h1 class="title-main" style="color:#ea580c;">
            <i class="fa-solid fa-file-contract"></i> Preguntas Guía UNAM <i class="fa-solid fa-pen-clip"></i>
        </h1>
        <div style="max-width:900px;margin:0 auto;padding-bottom:50px;">
            <div class="unam-dashboard-container">
                <div onclick="document.getElementById('global-stats-grid').classList.toggle('open');" style="cursor:pointer;">
                    <h3 class="unam-dashboard-header">
                        <div><i class="fa-solid fa-chart-pie" style="color:#f59e0b;"></i> Progreso de la Guía UNAM</div>
                        <span class="unam-dashboard-badge" style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;">${totalAvailable} / ${totalExpected} (${totalPct}%)</span>
                    </h3>
                    <div class="unam-dashboard-progress-bar-bg">
                        <div class="unam-dashboard-progress-bar-fill" style="background:linear-gradient(90deg,#3b82f6 0%,#10b981 100%);width:${totalPct}%;"></div>
                    </div>
                </div>
                <div id="global-stats-grid" class="unam-dashboard-grid">
                ${Object.keys(unamExpected).map(materia => {
        const exp = unamExpected[materia], cur = currentCounts[materia];
        const pct = Math.round((cur / exp) * 100);
        const icon = iconMap[materia] || 'fa-bookmark';
        const anchor = `materia-anchor-${materia.replace(/\s+/g, '-')}`;
        return `<div class="unam-dashboard-item" onclick="document.getElementById('${anchor}')?.scrollIntoView({behavior:'smooth'});">
                        <div class="unam-dashboard-item-header">
                            <span class="unam-dashboard-item-title"><i class="fa-solid ${icon}" style="color:#94a3b8;margin-right:4px;"></i>${materia}</span>
                            <span class="unam-dashboard-item-count" style="color:${pct === 100 ? '#059669' : pct > 0 ? '#0284c7' : '#94a3b8'}">${cur}/${exp}</span>
                        </div>
                        <div class="unam-dashboard-item-progress-bg">
                            <div class="unam-dashboard-item-progress-fill" style="background:${pct === 100 ? '#10b981' : pct > 0 ? '#3b82f6' : 'transparent'};width:${pct}%;height:100%;"></div>
                        </div>
                    </div>`;
    }).join('')}
                </div>
            </div>`;

    let currentMateria = '';
    allQuestions.forEach((q, gi) => {
        if (q.materia !== currentMateria) {
            currentMateria = q.materia;
            const icon = iconMap[currentMateria] || 'fa-bookmark';
            const anchor = `materia-anchor-${currentMateria.replace(/\s+/g, '-')}`;
            html += `<div id="${anchor}" class="unam-subject-header">
                <div class="unam-subject-header-left">
                    <div class="unam-subject-header-indicator"></div>
                    <h2 class="unam-subject-header-title"><i class="fa-solid ${icon}" style="color:#3b82f6;margin-right:5px;"></i>${currentMateria}</h2>
                </div>
                <button onclick="window.scrollTo({top:0,behavior:'smooth'});" class="btn-subir"><i class="fa-solid fa-arrow-up"></i> Subir</button>
            </div>`;
        }
        let indices = q.opciones.length === 4 ? [0, 1, 2, 3] : [...Array(q.opciones.length).keys()];
        indices.sort(() => Math.random() - 0.5);
        let correctRendIdx = indices.indexOf(q.respuesta);

        const optHtml = indices.map((origIdx, rendIdx) =>
            `<div class="unam-option" id="globalunam-opt-${gi}-${rendIdx}" onclick="selectGlobalOption(${gi},${rendIdx})">
                <span style="font-weight:800;color:#64748b;margin-right:8px;">${String.fromCharCode(65 + rendIdx)})</span><span>${q.opciones[origIdx]}</span>
            </div>`
        ).join('');
        const retroSafe = q.retroalimentacion.replace(/'/g, "\\'");
        html += `<div class="unam-question-card" style="margin-top:25px;">
            <div class="unam-question-card-inner-header">
                <div class="unam-question-card-badges">
                    <span class="badge-dark"><i class="fa-solid fa-hashtag"></i> ${q.numero}</span>
                    <span class="badge-orange">${q.materia}</span>
                    <span class="badge-blue">${q.tema}</span>
                </div>
                <a href="javascript:void(0)" onclick="document.getElementById('link-${q.originalKey.replace('content-', '')}')?.click();" class="btn-repasar-clase"><i class="fa-solid fa-arrow-up-right-from-square"></i> Repasar</a>
            </div>
            <p class="unam-question-text">${q.pregunta}</p>
            <div class="unam-options">${optHtml}</div>
            <button id="globalunam-eval-btn-${gi}" class="unam-eval-btn" onclick="evalGlobalQuestion(${gi},${correctRendIdx},'${retroSafe}','${q.originalKey}')" disabled>Evaluar</button>
            <div id="globalunam-feedback-${gi}" class="unam-feedback"></div>
        </div>`;
    });

    if (allQuestions.length === 0) html += `<div style="text-align:center;padding:60px;color:#64748b;"><i class="fa-solid fa-inbox fa-3x" style="opacity:.3;"></i><br>Sin preguntas disponibles aún.</div>`;
    html += `</div></div>`;
    return html;
}

// =============================================
// RENDER: SIMULACRO
// =============================================
function renderSimulacroPage() {
    const history = getSimHistory();
    let histHtml = '';
    if (history.length > 0) {
        histHtml = `<div style="margin-top:20px;">
            <h4 style="color:#64748b;margin-bottom:10px;"><i class="fa-solid fa-clock-rotate-left"></i> Historial reciente</h4>
            <div class="sim-history-list">
                ${history.slice(0, 5).map(h => `<div class="sim-history-item">
                    <span class="sim-history-score">${h.correct}/${h.total}</span>
                    <span>${h.correct >= h.total * 0.7 ? '✅' : '❌'} ${Math.round((h.correct / h.total) * 100)}%</span>
                    <span class="sim-history-date">${new Date(h.date).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>`).join('')}
            </div>
        </div>`;
    }
    return `
        <div id="content-simulacro" class="subject-content visible" style="animation:fadeInPage 0.4s ease forwards;">
            <h1 class="title-main" style="color:#2563eb;">
                <i class="fa-solid fa-graduation-cap"></i> Simulacro Aleatorio <i class="fa-solid fa-clock"></i>
            </h1>
            <div id="simulacro-setup" class="unam-dashboard-container" style="text-align:center;padding:40px;max-width:600px;margin:0 auto;">
                <h3>¿Listo para un examen relámpago?</h3>
                <p>Generaremos hasta 20 preguntas aleatorias de todas las materias.</p>
                <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
                    <button onclick="startSimulacro('all')" style="background:#2563eb;color:#fff;border:none;border-radius:12px;padding:14px 28px;font-size:1.1rem;font-weight:900;cursor:pointer;font-family:inherit;">
                        <i class="fa-solid fa-play"></i> Todas las materias
                    </button>
                    <button onclick="showSubjectFilter()" style="background:#f1f5f9;color:#334155;border:2px solid #cbd5e1;border-radius:12px;padding:14px 22px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;">
                        <i class="fa-solid fa-filter"></i> Filtrar por materia
                    </button>
                </div>
                <div id="subject-filter" style="display:none;margin-top:20px;text-align:left;">
                    <p style="font-weight:700;margin-bottom:10px;">Selecciona materias:</p>
                    <div id="subject-checkboxes" style="display:flex;flex-wrap:wrap;gap:10px;"></div>
                    <button onclick="startSimulacroFiltered()" style="margin-top:15px;background:#2563eb;color:#fff;border:none;border-radius:10px;padding:12px 24px;font-weight:900;cursor:pointer;font-family:inherit;font-size:1rem;">
                        <i class="fa-solid fa-play"></i> Iniciar con selección
                    </button>
                </div>
                ${histHtml}
            </div>
            <div id="simulacro-questions" style="max-width:900px;margin:0 auto;width:100%;"></div>
        </div>`;
}

// Mapa de icono y color por materia (reutilizado en toda la app)
window.MATERIA_ICON = {
    'Español': { icon: 'fa-language', color: '#2563eb' },
    'Matemáticas': { icon: 'fa-calculator', color: '#7c3aed' },
    'Física': { icon: 'fa-atom', color: '#0891b2' },
    'Química': { icon: 'fa-flask', color: '#16a34a' },
    'Biología': { icon: 'fa-dna', color: '#d97706' },
    'Historia Universal': { icon: 'fa-globe', color: '#dc2626' },
    'Historia de México': { icon: 'fa-earth-americas', color: '#b45309' },
    'Literatura': { icon: 'fa-book', color: '#9333ea' },
    'Geografía': { icon: 'fa-map', color: '#0d9488' },
};

function showSubjectFilter() {
    const div = document.getElementById('subject-filter');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
    const cb = document.getElementById('subject-checkboxes');
    if (cb.innerHTML) return;

    // Materias disponibles (con preguntas)
    const disponibles = new Set([
        ...Object.keys(unamQuestions).map(k => appDatabase[k]?.mainTopicTitle || k),
        ...Object.keys(practiceQuestions).map(k => appDatabase[k]?.mainTopicTitle || k),
        ...Object.keys(practiceLevel2Questions || {}).map(k => appDatabase[k]?.mainTopicTitle || k)
    ]);

    // Ordenar igual que el menú (orden de MATERIA_ICON)
    const materias = Object.keys(MATERIA_ICON).filter(m => disponibles.has(m));
    // Agregar al final cualquier materia que no esté en el mapa
    disponibles.forEach(m => { if (!MATERIA_ICON[m]) materias.push(m); });

    let html = `
        <div class="sim-filter-actions">
            <button onclick="toggleAllMaterias(true)" type="button"><i class="fa-solid fa-check-double"></i> Todas</button>
            <button onclick="toggleAllMaterias(false)" type="button"><i class="fa-solid fa-xmark"></i> Ninguna</button>
        </div>
    `;

    html += materias.map(m => {
        const meta = MATERIA_ICON[m] || { icon: 'fa-bookmark', color: '#64748b' };
        return `
        <label class="sim-materia-card" data-materia="${m}">
            <input type="checkbox" value="${m}" checked hidden>
            <div class="sim-materia-icon" style="color:${meta.color};background:${meta.color}18;">
                <i class="fa-solid ${meta.icon}"></i>
            </div>
            <span class="sim-materia-name">${m}</span>
            <span class="sim-materia-check"><i class="fa-solid fa-circle-check"></i></span>
        </label>`;
    }).join('');

    cb.innerHTML = html;

    // Toggle visual al hacer click en la tarjeta
    cb.querySelectorAll('.sim-materia-card').forEach(card => {
        card.addEventListener('click', () => {
            const input = card.querySelector('input');
            input.checked = !input.checked;
            card.classList.toggle('unchecked', !input.checked);
        });
    });
}

function toggleAllMaterias(select) {
    document.querySelectorAll('.sim-materia-card').forEach(card => {
        const input = card.querySelector('input');
        input.checked = select;
        card.classList.toggle('unchecked', !select);
    });
}

function startSimulacroFiltered() {
    const checked = [...document.querySelectorAll('#subject-checkboxes input:checked')].map(i => i.value);
    startSimulacro(checked);
}

let currentSimExam = [];
let simCorrect = 0;

function startSimulacro(filterMaterias = 'all') {
    const qContainer = document.getElementById('simulacro-questions');
    const setupDiv = document.getElementById('simulacro-setup');
    if (setupDiv) setupDiv.style.display = 'none';
    qContainer.innerHTML = '';
    simCorrect = 0;

    let pool = [];
    const addFromObj = (obj) => {
        Object.keys(obj).forEach(key => {
            const materia = appDatabase[key]?.mainTopicTitle || key;
            if (filterMaterias === 'all' || filterMaterias.includes(materia)) {
                obj[key].forEach(q => pool.push({ ...q, originalKey: key }));
            }
        });
    };
    addFromObj(unamQuestions);
    addFromObj(practiceQuestions);

    pool.sort(() => Math.random() - 0.5);
    currentSimExam = pool.slice(0, Math.min(20, pool.length));

    if (currentSimExam.length === 0) {
        qContainer.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px;">No hay preguntas para las materias seleccionadas.</p>';
        if (setupDiv) setupDiv.style.display = 'block';
        return;
    }

    const SIM_KEY = 'simulacro-questions';
    const tempObj = { [SIM_KEY]: currentSimExam };
    buildQuizSection(SIM_KEY, tempObj, 'sim', `<i class="fa-solid fa-file-signature"></i> Examen Aleatorio (${currentSimExam.length} preguntas)`, '#2563eb');
    const questionsContainer = qContainer.querySelector('.unam-questions-container');
    if (questionsContainer) {
        questionsContainer.style.display = 'flex';
        // Botón de resultados al final
        const finBtn = document.createElement('button');
        finBtn.className = 'btn-new-sim';
        finBtn.style.cssText = 'background:#2563eb;color:#fff;margin:10px auto;';
        finBtn.innerHTML = '<i class="fa-solid fa-flag-checkered"></i> Ver Resultados';
        finBtn.onclick = showSimResults;
        questionsContainer.appendChild(finBtn);
    }

    if (window.MathJax) window.MathJax.typesetPromise([qContainer]).catch(console.log);
}

function showSimResults() {
    const total = currentSimExam.length;
    let correct = 0;
    currentSimExam.forEach((q, idx) => {
        const feedback = document.getElementById(`sim-feedback-simulacro-questions-${idx}`);
        if (feedback && feedback.classList.contains('correct-feedback')) correct++;
    });
    const pct = Math.round((correct / total) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';

    // Guardar en historial
    saveSimHistory({ correct, total, date: Date.now() });

    const qContainer = document.getElementById('simulacro-questions');
    const panel = document.createElement('div');
    panel.className = 'sim-results-panel';
    panel.innerHTML = `
        <h2>${emoji} Resultados del Examen</h2>
        <div class="sim-score-circle">
            ${correct}<span>de ${total}</span>
        </div>
        <div class="sim-results-grid">
            <div class="sim-stat-box"><div class="stat-num">${correct}</div><div class="stat-label">Correctas ✅</div></div>
            <div class="sim-stat-box"><div class="stat-num">${total - correct}</div><div class="stat-label">Incorrectas ❌</div></div>
            <div class="sim-stat-box"><div class="stat-num">${pct}%</div><div class="stat-label">Calificación</div></div>
        </div>
        <p style="opacity:.85;margin-bottom:15px;">${pct >= 80 ? '¡Excelente! Estás bien preparado.' : pct >= 60 ? 'Buen progreso. ¡Sigue repasando!' : '¡No te rindas! Repasa y vuelve a intentarlo.'}</p>
        <button class="btn-new-sim" onclick="switchClass('content-simulacro', document.getElementById('btn-simulacro'), 'btn-simulacro')">
            <i class="fa-solid fa-rotate-right"></i> Nuevo Simulacro
        </button>`;
    qContainer.insertBefore(panel, qContainer.firstChild);
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Historial de simulacros ---
function getSimHistory() { return JSON.parse(localStorage.getItem('sim-history') || '[]'); }
function saveSimHistory(entry) {
    const h = getSimHistory();
    h.unshift(entry);
    localStorage.setItem('sim-history', JSON.stringify(h.slice(0, 10)));
}

// =============================================
// QUIZ: BUILD / SELECT / EVAL
// =============================================
let userAnswers = {};

function buildQuizSection(contentId, questionsObj, prefix, titleHtml, borderColor) {
    const container = document.getElementById(contentId);
    if (!container) return;
    const questions = questionsObj[contentId];
    if (!questions || questions.length === 0) return;

    const section = document.createElement('div');
    section.className = 'unam-questions-section';
    if (borderColor) section.style.borderTopColor = borderColor;

    let questionsHtml = questions.map((q, idx) => {
        let indices = q.opciones.length === 4 ? [0, 1, 2, 3] : [...Array(q.opciones.length).keys()];
        indices.sort(() => Math.random() - 0.5);
        if (!q._shuffledIndices) q._shuffledIndices = {};
        q._shuffledIndices[prefix] = indices;

        const optHtml = indices.map((origIdx, rendIdx) => `
            <div class="unam-option" id="${prefix}-opt-${contentId}-${idx}-${rendIdx}" onclick="selectOption('${prefix}','${contentId}',${idx},${rendIdx})">
                <span style="font-weight:800;color:#64748b;margin-right:8px;">${String.fromCharCode(65 + rendIdx)})</span>
                <span>${q.opciones[origIdx]}</span>
            </div>`).join('');

        return `
            <div class="unam-question-card" id="${prefix}-qcard-${contentId}-${idx}">
                <p class="unam-question-text">${q.numero ? q.numero + '. ' : ''}${q.pregunta}</p>
                <div class="unam-options">${optHtml}</div>
                <button id="${prefix}-eval-btn-${contentId}-${idx}" class="unam-eval-btn" onclick="evalQuestion('${prefix}','${contentId}',${idx})" disabled>Evaluar</button>
                <div id="${prefix}-feedback-${contentId}-${idx}" class="unam-feedback"></div>
            </div>`;
    }).join('');

    section.innerHTML = `
        <div class="unam-header" onclick="toggleUnamQuestions(this)" style="margin-bottom:0;border-bottom:none;">
            <h2>${titleHtml}</h2>
            <button class="unam-toggle-btn">Mostrar / Ocultar</button>
        </div>
        <div class="unam-questions-container" style="display:none;">${questionsHtml}</div>`;

    container.appendChild(section);
}

function toggleUnamQuestions(header) {
    const c = header.nextElementSibling;
    if (c.style.display === 'none' || !c.style.display) {
        c.style.display = 'flex';
        header.style.marginBottom = '25px';
        header.style.borderBottom = '2px solid #f1f5f9';
    } else {
        c.style.display = 'none';
        header.style.marginBottom = '0';
        header.style.borderBottom = 'none';
    }
}

function toggleVideo(header) {
    const c = header.nextElementSibling;
    if (c.style.display === 'none' || !c.style.display) {
        c.style.display = 'block';
        header.style.marginBottom = '25px';
        header.style.borderBottom = '2px solid #f1f5f9';
    } else {
        c.style.display = 'none';
        header.style.marginBottom = '0';
        header.style.borderBottom = 'none';
    }
}

function selectOption(prefix, contentId, qIdx, optIdx) {
    const opts = document.querySelectorAll(`[id^="${prefix}-opt-${contentId}-${qIdx}-"]`);
    opts.forEach(o => o.classList.remove('selected'));
    const evalBtn = document.getElementById(`${prefix}-eval-btn-${contentId}-${qIdx}`);
    if (evalBtn && evalBtn.style.display === 'none') return;
    const sel = document.getElementById(`${prefix}-opt-${contentId}-${qIdx}-${optIdx}`);
    if (sel) { sel.classList.add('selected'); userAnswers[`${prefix}-${contentId}-${qIdx}`] = optIdx; }
    if (evalBtn) evalBtn.disabled = false;
}

function evalQuestion(prefix, contentId, qIdx) {
    const selIdx = userAnswers[`${prefix}-${contentId}-${qIdx}`];
    if (selIdx === undefined) return;
    const q = prefix === 'sim' ? currentSimExam[qIdx] :
        (prefix === 'unam' ? unamQuestions[contentId] :
            (prefix === 'prac2' ? practiceLevel2Questions[contentId] : practiceQuestions[contentId]))[qIdx];
    const renderedIndices = q._shuffledIndices[prefix];
    const origSelected = renderedIndices[selIdx];
    const isCorrect = origSelected === q.respuesta;
    const sourceClassId = prefix === 'sim' ? q.originalKey : contentId;

    document.querySelectorAll(`[id^="${prefix}-opt-${contentId}-${qIdx}-"]`).forEach((opt, idx) => {
        opt.style.pointerEvents = 'none';
        if (renderedIndices[idx] === q.respuesta) opt.classList.add('correct');
        else if (idx === selIdx && !isCorrect) opt.classList.add('incorrect');
    });

    const btn = document.getElementById(`${prefix}-eval-btn-${contentId}-${qIdx}`);
    if (btn) btn.style.display = 'none';
    const fb = document.getElementById(`${prefix}-feedback-${contentId}-${qIdx}`);
    if (fb) {
        fb.style.display = 'flex';
        fb.className = `unam-feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
        fb.innerHTML = `<div style="font-weight:900;font-size:1.1rem;"><i class="fa-solid fa-${isCorrect ? 'circle-check' : 'circle-xmark'}"></i> ${isCorrect ? '¡Correcto!' : 'Incorrecto'}</div><div>${q.retroalimentacion}</div>`;
        if (window.MathJax) window.MathJax.typesetPromise([fb]).catch(console.log);
    }

    registerQuestionResult(sourceClassId, isCorrect);
}

// --- Preguntas globales UNAM ---
function selectGlobalOption(gi, oi) {
    document.querySelectorAll(`[id^="globalunam-opt-${gi}-"]`).forEach(o => o.classList.remove('selected'));
    const evalBtn = document.getElementById(`globalunam-eval-btn-${gi}`);
    if (evalBtn?.style.display === 'none') return;
    document.getElementById(`globalunam-opt-${gi}-${oi}`)?.classList.add('selected');
    userAnswers[`globalunam-${gi}`] = oi;
    if (evalBtn) evalBtn.disabled = false;
}

function evalGlobalQuestion(gi, correctIdx, retro, originalKey) {
    const selIdx = userAnswers[`globalunam-${gi}`];
    if (selIdx === undefined) return;
    const isCorrect = selIdx === correctIdx;
    document.querySelectorAll(`[id^="globalunam-opt-${gi}-"]`).forEach((opt, idx) => {
        opt.style.pointerEvents = 'none';
        if (idx === correctIdx) opt.classList.add('correct');
        else if (idx === selIdx && !isCorrect) opt.classList.add('incorrect');
    });
    document.getElementById(`globalunam-eval-btn-${gi}`).style.display = 'none';
    const fb = document.getElementById(`globalunam-feedback-${gi}`);
    fb.style.display = 'flex';
    fb.className = `unam-feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`;
    fb.innerHTML = `<div style="font-weight:900;font-size:1.1rem;"><i class="fa-solid fa-${isCorrect ? 'circle-check' : 'circle-xmark'}"></i> ${isCorrect ? '¡Correcto!' : 'Incorrecto'}</div><div>${retro}</div>`;
    if (window.MathJax) window.MathJax.typesetPromise([fb]).catch(console.log);

    registerQuestionResult(originalKey, isCorrect);
}

// =============================================
// SWITCH CLASS (navegación principal)
// =============================================
function switchClass(contentId, classLinkElement, parentBtnId) {
    if (!contentId) return;

    // Actualizar título del tab
    const titleMap = {
        'content-home': 'Apuntes UNAM 2026',
        'content-todas-unam': 'Preguntas UNAM | Apuntes',
        'content-simulacro': 'Simulacro | Apuntes',
        'content-guided': 'Estudio Guiado | Apuntes',
        'content-config': 'Configuración | Apuntes',
        'content-studytok': 'StudyTok | Apuntes'
    };
    document.title = titleMap[contentId] ||
        (appDatabase[contentId] ? `${appDatabase[contentId].mainTopicSubtitle} | Apuntes UNAM` : 'Apuntes UNAM 2026');

    document.querySelectorAll('.subject-content').forEach(el => el.classList.remove('visible'));

    isInternalNav = true;
    if (contentId === 'content-home') {
        document.getElementById('content-home').classList.add('visible');
        document.getElementById('dynamic-content-area').innerHTML = '';
        window.location.hash = '';
    } else if (contentId === 'content-todas-unam') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderAllUnamQuestionsPage();
        window.location.hash = 'todas-unam';
        setTimeout(() => { if (window.MathJax) window.MathJax.typesetPromise([da]).catch(console.log); }, 50);
    } else if (contentId === 'content-simulacro') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderSimulacroPage();
        window.location.hash = 'simulacro';
    } else if (contentId === 'content-config') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderSettingsPage();
        window.location.hash = 'config';
        setTimeout(updateBackupStatusLabel, 50);
    } else if (contentId === 'content-guided') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderGuidedStudyPage();
        window.location.hash = 'guided';
    } else if (contentId === 'content-flashcards') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = '';
        window.location.hash = 'flashcards';
        // delegate render to StudyTools if available
        setTimeout(() => { if (window.StudyTools && typeof window.StudyTools.renderFlashPage === 'function') window.StudyTools.renderFlashPage(); }, 50);
    } else if (contentId === 'content-stats') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = '';
        window.location.hash = 'stats';
        setTimeout(() => { if (window.StudyTools && typeof window.StudyTools.renderStatsPage === 'function') window.StudyTools.renderStatsPage(); }, 50);
    } else if (contentId === 'content-studytok') {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = '';
        window.location.hash = 'studytok';
        setTimeout(() => renderStudyTokFeed(), 50);
    } else {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderClassContainer(contentId);
        window.location.hash = contentId.replace('content-', '');
        registerClassVisit(contentId);
        setTimeout(() => {
            renderQuestionsForClass(contentId);
            if (window.MathJax) window.MathJax.typesetPromise([da]).catch(console.log);
        }, 50);
        da.querySelectorAll('.main-topic').forEach(t => {
            t.addEventListener('click', function () {
                this.style.transform = 'scale(0.9)';
                setTimeout(() => this.style.transform = 'scale(1.05)', 150);
            });
        });
    }
    setTimeout(() => { isInternalNav = false; }, 100);

    // Actualizar estilos del menú
    document.querySelectorAll('.class-item').forEach(el => el.classList.remove('active-class'));
    document.querySelectorAll('.subject-item').forEach(el => {
        el.classList.remove('active', 'active-espanol');
    });
    if (classLinkElement) classLinkElement.classList.add('active-class');
    if (parentBtnId) {
        const pb = document.getElementById(parentBtnId);
        if (pb) pb.classList.add('active');
        if (parentBtnId.startsWith('btn-') && parentBtnId !== 'btn-inicio' && parentBtnId !== 'btn-todas-unam' && parentBtnId !== 'btn-simulacro' && parentBtnId !== 'btn-guided' && parentBtnId !== 'btn-config') {
            const submenuId = `submenu-${parentBtnId.replace('btn-', '')}`;
            setOpenSubmenu(submenuId);
        }
    }

    saveMenuState({ lastContentId: contentId });

    setTimeout(() => {
        if (sideMenu?.classList.contains('open')) toggleMenu();
    }, 300);
    window.scrollTo(0, 0);

    // Actualizar badge "estudiado" en menú
    updateStudiedBadges();
}

function renderQuestionsForClass(contentId) {
    if (practiceQuestions?.[contentId]?.length > 0) buildQuizSection(contentId, practiceQuestions, 'prac', '<i class="fa-solid fa-brain" style="color: #ec4899;"></i> Preguntas de Práctica', '#ec4899');
    if (practiceLevel2Questions?.[contentId]?.length > 0) buildQuizSection(contentId, practiceLevel2Questions, 'prac2', '<i class="fa-solid fa-star" style="color: #8b5cf6;"></i> Preguntas de Práctica Nivel 2', '#8b5cf6');
    if (unamQuestions?.[contentId]?.length > 0) buildQuizSection(contentId, unamQuestions, 'unam', '<i class="fa-solid fa-file-pen"></i> Preguntas de la Guía UNAM', '#f59e0b');

    // Botón de progreso al final
    const container = document.getElementById(contentId);
    if (!container) return;
    const studied = getStudiedClasses();
    const isStudied = !!studied[contentId];
    const nav = getClassNavigationTargets(contentId);
    const prevSlug = nav.prevId ? nav.prevId.replace('content-', '') : '';
    const nextSlug = nav.nextId ? nav.nextId.replace('content-', '') : '';

    const wrapper = document.createElement('div');
    wrapper.className = 'class-nav-actions';
    wrapper.innerHTML = `
        ${nav.prevId ? `<button class="btn-class-nav btn-class-prev" onclick="switchClass('${nav.prevId}', document.getElementById('link-${prevSlug}'), '${nav.parentBtnId}')">
            <i class="fa-solid fa-arrow-left"></i> Clase anterior
        </button>` : '<span class="btn-class-nav-spacer"></span>'}

        <button onclick="toggleStudied('${contentId}')" class="btn-mark-studied${isStudied ? ' done' : ''}" id="btn-studied-${contentId}">
            <i class="fa-solid fa-${isStudied ? 'check-circle' : 'circle'}"></i>
            ${isStudied ? 'Clase completada – desmarcar' : 'Marcar como estudiada'}
        </button>

        ${nav.nextId ? `<button class="btn-class-nav btn-class-next" onclick="switchClass('${nav.nextId}', document.getElementById('link-${nextSlug}'), '${nav.parentBtnId}')">
            Siguiente clase <i class="fa-solid fa-arrow-right"></i>
        </button>` : '<span class="btn-class-nav-spacer"></span>'}
    `;
    container.appendChild(wrapper);
}

// =============================================
// TOGGLE NODES (mapa mental)
// =============================================
function toggleNodes(containerId, el) {
    const container = document.getElementById(containerId);
    const hint = el?.querySelector('.click-hint');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        if (hint) hint.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Clic para contraer';
        container.querySelectorAll('.sub-node').forEach((node, i) => {
            node.style.animation = 'none';
            node.offsetHeight;
            node.style.animation = `fadeInRight 0.5s ease forwards ${(i + 1) * 0.1}s`;
        });
    } else {
        container.classList.add('hidden');
        if (hint) hint.innerHTML = '<i class="fa-solid fa-hand-pointer"></i> Clic para explorar';
    }
}

// =============================================
// PERFIL LOCAL (v2)
// =============================================
function getProfile() {
    return JSON.parse(localStorage.getItem('user-profile') || '{"name":"","avatar":""}');
}

function loadProfile() {
    const profile = getProfile();

    // --- Widget en sidebar ---
    const nameEl = document.getElementById('navUserName');
    const avatarEl = document.getElementById('navAvatarContainer');
    if (nameEl) nameEl.textContent = profile.name || '¡Crea tu perfil!';
    if (avatarEl) {
        avatarEl.className = 'pw-avatar' + (profile.avatar ? ' ' + profile.avatar : '');
        const dinoImg = document.getElementById('navDinoImg');
        if (dinoImg) {
            dinoImg.src = profile.avatar === 'pink' ? './assets/images/dino-pink.png' : './assets/images/dino-blue.png';
        }
    }

    // --- Pre-llenar modal ---
    const nameInput = document.getElementById('profileNameInput');
    if (nameInput) {
        nameInput.value = profile.name || '';
        const charCount = document.getElementById('pmCharCount');
        if (charCount) charCount.textContent = (profile.name || '').length + '/25';
    }

    if (profile.avatar) {
        const rad = document.querySelector(`input[name="profileAvatar"][value="${profile.avatar}"]`);
        if (rad) rad.checked = true;
    }

    // --- Preview del avatar en el modal ---
    _syncModalAvatar(profile.avatar);

    // --- Preview del nombre en el modal ---
    const previewName = document.getElementById('pmPreviewName');
    if (previewName) {
        previewName.textContent = profile.name ? `¡Hola, ${profile.name}!` : '¡Tú eres increíble!';
    }

    updateProfileProgress();
}

function saveProfile() {
    const nameInput = document.getElementById('profileNameInput');
    const name = nameInput ? nameInput.value.trim() : '';
    const avatarOpt = document.querySelector('input[name="profileAvatar"]:checked');
    const avatar = avatarOpt ? avatarOpt.value : '';

    localStorage.setItem('user-profile', JSON.stringify({ name, avatar }));
    loadProfile();

    // Feedback visual en botón "Guardado"
    const btn = document.getElementById('pmSaveBtn');
    if (btn) {
        btn.classList.add('saved');
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>¡Guardado!</span>';
        setTimeout(() => {
            btn.classList.remove('saved');
            btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i><span>Guardar perfil</span>';
            closeProfileModal();
        }, 1200);
    }
}

function openProfileModal() {
    loadProfile(); // Sincroniza el modal con los datos actuales
    const overlay = document.getElementById('profileModalOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProfileModal() {
    const overlay = document.getElementById('profileModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleProfileOverlayClick(e) {
    // Cierra si se hace clic en el fondo oscuro (no dentro de la tarjeta)
    if (e.target === document.getElementById('profileModalOverlay')) {
        closeProfileModal();
    }
}

/** Se llama desde el oninput del input de nombre */
function onProfileNameInput(val) {
    const charCount = document.getElementById('pmCharCount');
    if (charCount) charCount.textContent = val.length + '/25';

    const previewName = document.getElementById('pmPreviewName');
    if (previewName) {
        previewName.textContent = val.trim() ? `¡Hola, ${val.trim()}!` : '¡Tú eres increíble!';
    }
}

/** Se llama cuando el usuario cambia el avatar en el modal */
function onAvatarChange(color) {
    _syncModalAvatar(color);
}

function _syncModalAvatar(color) {
    const preview = document.getElementById('pmAvatarPreview');
    if (!preview) return;
    preview.className = 'pm-avatar-preview' + (color ? ' ' + color : '');
    const dinoImg = document.getElementById('pmDinoImg');
    if (dinoImg) {
        dinoImg.src = color === 'pink' ? './assets/images/dino-pink.png' : './assets/images/dino-blue.png';
    }
}

function updateProfileProgress() {
    if (typeof appDatabase === 'undefined') return;
    const studied = getStudiedClasses();

    // --- Mapa de materias con sus clases ---
    const SUBJ_MAP = [
        {
            key: 'espanol', label: 'Español', icon: 'fa-language', color: '#2563eb',
            classes: Object.keys(appDatabase).filter(k => k.startsWith('content-espanol'))
        },
        {
            key: 'matematicas', label: 'Matemáticas', icon: 'fa-calculator', color: '#7c3aed',
            classes: Object.keys(appDatabase).filter(k => k.startsWith('content-matematicas'))
        },
        {
            key: 'quimica', label: 'Química', icon: 'fa-flask', color: '#16a34a',
            classes: Object.keys(appDatabase).filter(k => k.startsWith('content-quimica'))
        },
        {
            key: 'historia', label: 'Historia Méx.', icon: 'fa-earth-americas', color: '#b45309',
            classes: Object.keys(appDatabase).filter(k => k.startsWith('content-historia'))
        },
        {
            key: 'literatura', label: 'Literatura', icon: 'fa-book', color: '#9333ea',
            classes: Object.keys(appDatabase).filter(k => k.startsWith('content-literatura'))
        },
    ];

    const totalClasses = Object.keys(appDatabase).length;
    let completadas = 0;
    for (const id in studied) { if (studied[id] && appDatabase[id]) completadas++; }
    const pendientes = totalClasses - completadas;
    const pct = totalClasses === 0 ? 0 : Math.round((completadas / totalClasses) * 100);
    const safePct = Math.min(pct, 100);

    // --- Widget sidebar ---
    const fill = document.getElementById('navProgressFill');
    const txt = document.getElementById('navUserProgress');
    if (fill) fill.style.width = safePct + '%';
    if (txt) txt.textContent = completadas + ' clase' + (completadas !== 1 ? 's' : '') + ' completada' + (completadas !== 1 ? 's' : '');

    // --- Modal: porcentaje + círculo ---
    const pmPct = document.getElementById('pmProgressPct');
    if (pmPct) pmPct.textContent = safePct + '%';

    const circFill = document.getElementById('pmCircleFill');
    if (circFill) {
        const circumference = 213.6;
        circFill.style.strokeDashoffset = circumference - (circumference * safePct / 100);
        // Gradiente inline para el círculo
        const svg = circFill.closest('svg');
        if (svg && !svg.querySelector('#circleGrad')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            defs.innerHTML = `<linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#2563eb"/>
                <stop offset="100%" stop-color="#10b981"/>
            </linearGradient>`;
            svg.insertBefore(defs, svg.firstChild);
        }
    }

    // --- Modal: tarjetas ---
    const pmDone = document.getElementById('pmStatDone');
    const pmPending = document.getElementById('pmStatPending');
    if (pmDone) pmDone.textContent = completadas;
    if (pmPending) pmPending.textContent = pendientes;

    // --- Modal: barra global ---
    const pmBar = document.getElementById('pmProgressBar');
    const pmDetail = document.getElementById('pmProgressDetail');
    if (pmBar) pmBar.style.width = safePct + '%';
    if (pmDetail) pmDetail.textContent = `${completadas} de ${totalClasses} clases completadas`;

    // --- Modal: desglose por materia ---
    const breakdown = document.getElementById('pmSubjectBreakdown');
    if (!breakdown) return;

    breakdown.innerHTML = SUBJ_MAP.map(subj => {
        const total = subj.classes.length;
        if (total === 0) return '';
        const done = subj.classes.filter(id => !!studied[id]).length;
        const subjPct = Math.round((done / total) * 100);
        const pctColor = subjPct === 100 ? '#10b981' : subjPct > 0 ? subj.color : '#94a3b8';
        return `
        <div class="pm-subj-row">
            <div class="pm-subj-info">
                <span class="pm-subj-name">
                    <span class="pm-subj-icon" style="color:${subj.color}">
                        <i class="fa-solid ${subj.icon}"></i>
                    </span>
                    ${subj.label}
                </span>
                <span class="pm-subj-count">${done}/${total}</span>
                <span class="pm-subj-pct" style="color:${pctColor}">${subjPct}%</span>
            </div>
            <div class="pm-subj-track">
                <div class="pm-subj-fill" style="width:${subjPct}%;background:${pctColor}"></div>
            </div>
        </div>`;
    }).join('');
}


// =============================================
// PÁGINA DE CONFIGURACIÓN
// =============================================
function renderSettingsPage() {
    const profile = JSON.parse(localStorage.getItem('user-profile') || '{}');
    const name = profile.name || '';
    const avatar = profile.avatar || 'blue';
    const isDark = document.body.classList.contains('dark-mode');

    return `
    <div class="cfg-page">

        <div class="cfg-page-header">
            <span class="cfg-page-icon"><i class="fa-solid fa-gear"></i></span>
            <div>
                <h1 class="cfg-page-title">Configuración</h1>
                <p class="cfg-page-subtitle">Personaliza tu experiencia de estudio</p>
            </div>
        </div>

        <!-- Sección: Perfil -->
        <div class="cfg-card">
            <div class="cfg-card-header">
                <i class="fa-solid fa-id-card"></i>
                <span>Tu Perfil</span>
            </div>

            <div class="cfg-field">
                <label class="cfg-label" for="cfgNameInput">Nombre de usuario</label>
                <div class="cfg-input-row">
                    <input type="text" id="cfgNameInput" class="cfg-input"
                        placeholder="Ej. Miguel García" maxlength="25"
                        value="${name.replace(/"/g, '&quot;')}"
                        oninput="document.getElementById('cfgCharCount').textContent = this.value.length + '/25'">
                    <span class="cfg-char-count" id="cfgCharCount">${name.length}/25</span>
                </div>
            </div>

            <div class="cfg-field">
                <label class="cfg-label">Elige tu avatar</label>
                <div class="cfg-avatar-grid">
                    <label class="cfg-av-opt ${avatar === 'blue' ? 'selected' : ''}" id="cfgOptBlue">
                        <input type="radio" name="cfgAvatar" value="blue" ${avatar === 'blue' ? 'checked' : ''}
                            onchange="document.querySelectorAll('.cfg-av-opt').forEach(o=>o.classList.remove('selected')); this.closest('.cfg-av-opt').classList.add('selected')">
                        <div class="cfg-av-circle cfg-av-blue">
                            <img src="./assets/images/dino-blue.png" alt="Dino Azul" class="cfg-av-img">
                        </div>
                        <span class="cfg-av-label">Dino Azul</span>
                        <span class="cfg-av-check"><i class="fa-solid fa-circle-check"></i></span>
                    </label>
                    <label class="cfg-av-opt ${avatar === 'pink' ? 'selected' : ''}" id="cfgOptPink">
                        <input type="radio" name="cfgAvatar" value="pink" ${avatar === 'pink' ? 'checked' : ''}
                            onchange="document.querySelectorAll('.cfg-av-opt').forEach(o=>o.classList.remove('selected')); this.closest('.cfg-av-opt').classList.add('selected')">
                        <div class="cfg-av-circle cfg-av-pink">
                            <img src="./assets/images/dino-pink.png" alt="Dino Rosa" class="cfg-av-img">
                        </div>
                        <span class="cfg-av-label">Dino Rosa</span>
                        <span class="cfg-av-check"><i class="fa-solid fa-circle-check"></i></span>
                    </label>
                </div>
            </div>

            <button class="cfg-save-btn" onclick="saveSettingsProfile()">
                <i class="fa-solid fa-floppy-disk"></i>
                Guardar perfil
            </button>
            <p class="cfg-feedback" id="cfgFeedback"></p>
        </div>

        <!-- Sección: Apariencia -->
        <div class="cfg-card">
            <div class="cfg-card-header">
                <i class="fa-solid fa-palette"></i>
                <span>Apariencia</span>
            </div>

            <div class="cfg-theme-row">
                <div class="cfg-theme-info">
                    <i class="fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} cfg-theme-icon"></i>
                    <div>
                        <span class="cfg-theme-name">Tema de la app</span>
                        <span class="cfg-theme-label">${isDark ? 'Modo Oscuro activo' : 'Modo Claro activo'}</span>
                    </div>
                </div>
                <button class="cfg-toggle-btn cfg-theme-toggle"
                    aria-pressed="${isDark}"
                    onclick="toggleDarkMode()"
                    title="Cambiar tema">
                    <span class="cfg-toggle-track">
                        <span class="cfg-toggle-thumb"></span>
                    </span>
                </button>
            </div>
        </div>

        <div class="cfg-card">
            <div class="cfg-card-header">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span>Respaldo y Progreso (PWA)</span>
            </div>

            <div class="cfg-field">
                <label class="cfg-label">Respaldo local de tu avance</label>
                <div class="cfg-backup-actions">
                    <button class="cfg-save-btn" type="button" onclick="exportProgressBackup()">
                        <i class="fa-solid fa-download"></i>
                        Exportar respaldo
                    </button>
                    <label class="cfg-import-btn" for="cfgImportBackupInput">
                        <i class="fa-solid fa-upload"></i>
                        Importar respaldo
                    </label>
                    <input id="cfgImportBackupInput" type="file" accept="application/json" onchange="importProgressBackup(this)">
                </div>
                <p class="cfg-backup-status" id="cfgBackupStatus">Sin respaldos recientes.</p>
            </div>
        </div>

    </div>`;
}

function saveSettingsProfile() {
    const nameInput = document.getElementById('cfgNameInput');
    const avatarInput = document.querySelector('input[name="cfgAvatar"]:checked');
    if (!nameInput) return;
    const name = nameInput.value.trim();
    const avatar = avatarInput ? avatarInput.value : 'blue';
    const profile = { name, avatar };
    localStorage.setItem('user-profile', JSON.stringify(profile));
    loadProfile();
    const fb = document.getElementById('cfgFeedback');
    if (fb) {
        fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> ¡Perfil guardado!';
        fb.style.color = '#10b981';
        setTimeout(() => { fb.textContent = ''; }, 2500);
    }
}

// =============================================
// STUDYTOK: DOOMSCROLL FEED
// =============================================
function renderStudyTokFeed() {
    const feed = document.getElementById('stok-feed');
    if (!feed) return;

    const page = document.getElementById('content-studytok');
    if (page) {
        document.querySelectorAll('.subject-content').forEach(el => el.classList.remove('visible'));
        page.classList.add('visible');
        page.style.display = '';
    }

    // Use ALL flashcards without any filtering
    const db = (typeof flashcardsDatabase !== 'undefined' ? flashcardsDatabase : (window.flashcardsDatabase || []));
    if (!db.length) {
        feed.innerHTML = `<div class="stok-end"><i class="fa-solid fa-inbox"></i><h2>Sin tarjetas disponibles</h2><p>No se encontraron flashcards en la base de datos.</p></div>`;
        return;
    }

    // Shuffle for variety each session
    const shuffled = [...db].sort(() => Math.random() - 0.5);

    const metaIconMap = window.MATERIA_ICON || {};

    const cardsHtml = shuffled.map((card, idx) => {
        const meta = metaIconMap[card.asignatura] || { icon: 'fa-bookmark', color: '#e11d48' };
        return `
        <div class="stok-card" id="stok-card-${idx}">
            <span class="stok-subject-badge" style="background:${meta.color}18; color:${meta.color};">
                <i class="fa-solid ${meta.icon}"></i>
                ${card.asignatura || 'General'}
            </span>
            <span class="stok-counter">${idx + 1} / ${shuffled.length}</span>

            <div class="stok-inner">
                <div class="stok-topic">
                    <i class="fa-solid fa-tag" style="color:${meta.color};"></i>
                    ${card.tema || ''}
                </div>
                <div class="stok-question">${card.pregunta}</div>
                <div class="stok-divider"></div>
                <div class="stok-answer">${card.respuesta}</div>
            </div>

            <div class="stok-scroll-hint"><i class="fa-solid fa-chevron-down"></i></div>

            <div class="stok-actions">
                <button class="stok-btn stok-btn-easy" onclick="stokRate('${card.id}', 'easy', ${idx})" title="Fácil - Lo recuerdo bien">
                    <i class="fa-solid fa-face-laugh-beam"></i> Fácil
                </button>
                <button class="stok-btn stok-btn-mid" onclick="stokRate('${card.id}', 'medium', ${idx})" title="Medio - Algo confuso">
                    <i class="fa-solid fa-face-smile"></i> Medio
                </button>
                <button class="stok-btn stok-btn-hard" onclick="stokRate('${card.id}', 'hard', ${idx})" title="Difícil - No lo recuerdo">
                    <i class="fa-solid fa-face-frown"></i> Difícil
                </button>
            </div>
        </div>`;
    }).join('');

    feed.innerHTML = cardsHtml + `
    <div class="stok-end">
        <i class="fa-solid fa-fire-flame-curved"></i>
        <h2>¡Lo lograste! 🎉</h2>
        <p>Repasaste las ${shuffled.length} tarjetas del feed.</p>
        <button class="stok-restart-btn" onclick="renderStudyTokFeed()">
            <i class="fa-solid fa-rotate-right"></i> Volver a repasar
        </button>
    </div>`;

    feed.scrollTo({ top: 0, behavior: 'instant' });
}

async function stokRate(cardId, difficulty, cardIdx) {
    const db = (typeof flashcardsDatabase !== 'undefined' ? flashcardsDatabase : (window.flashcardsDatabase || []));
    const card = db.find(c => c.id === cardId);
    if (!card) return;

    const days = difficulty === 'easy' ? 30 : (difficulty === 'medium' ? 7 : 1);
    const next = Date.now() + days * 24 * 60 * 60 * 1000;

    try { await stDbPut('srs', { id: cardId, card, difficulty, nextReview: next }); } catch (e) { }
    try { await stDbAdd('history', { classId: 'studytok', q: card, correct: difficulty !== 'hard', selected: null, at: Date.now() }); } catch (e) { }

    // Visual feedback: mark rated button and scroll to next
    const cardEl = document.getElementById(`stok-card-${cardIdx}`);
    if (cardEl) {
        const btns = cardEl.querySelectorAll('.stok-btn');
        btns.forEach(b => { b.style.opacity = '0.4'; b.style.pointerEvents = 'none'; });
        const labelMap = { easy: '¡Bien!', medium: 'Anotado', hard: 'Lo repasaré' };
        const colorMap = { easy: '#065f46', medium: '#92400e', hard: '#991b1b' };
        const toast = document.createElement('div');
        toast.style.cssText = `position:absolute;bottom:98px;left:50%;transform:translateX(-50%);background:${colorMap[difficulty]};color:#fff;font-weight:900;font-size:0.82rem;padding:6px 20px;border-radius:99px;opacity:1;transition:opacity 0.6s ease;pointer-events:none;z-index:20;`;
        toast.textContent = labelMap[difficulty];
        cardEl.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; }, 900);

        // Scroll to next card
        const feed = document.getElementById('stok-feed');
        const nextCard = document.getElementById(`stok-card-${cardIdx + 1}`) || feed?.querySelector('.stok-end');
        if (nextCard) setTimeout(() => nextCard.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
    }
}

// =============================================
window.addEventListener('DOMContentLoaded', () => {
    updateStudiedBadges();
    loadProfile();
    validateAppDatabase();
    loadPreguntasGuiaTxt();
    ensureSidebarLinksFromAppDatabase();
    ensureClassLabelsWrapped();

    const menuState = getMenuState();
    const searchInput = document.getElementById('menuSearchInput');
    if (searchInput && menuState.searchQuery) {
        searchInput.value = menuState.searchQuery;
        applyMenuFilter(menuState.searchQuery);
    } else if (menuState.openSubmenuId) {
        setOpenSubmenu(menuState.openSubmenuId);
    }
    if (typeof menuState.scrollTop === 'number' && sideMenu) sideMenu.scrollTop = menuState.scrollTop;
    sideMenu?.addEventListener('scroll', saveMenuScroll, { passive: true });

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            Object.keys(appDatabase || {}).forEach(id => buildSearchTextForClass(id));
        }, { timeout: 1200 });
    }

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProfileModal(); });

    // StudyTools Inits
    openSTDB().catch(() => { });
    document.addEventListener('click', (e) => {
        if (e.target?.id === 'flashStartBtn') {
            const sel = document.getElementById('flashSubjectSelect');
            const count = parseInt(document.getElementById('flashCount').value || '0', 10) || 0;
            StudyTools.startFlashcardsSession({ classId: sel?.value, count });
        }
        if (e.target?.id === 'flashEasyBtn') StudyTools.markCurrentCard('easy');
        if (e.target?.id === 'flashMediumBtn') StudyTools.markCurrentCard('medium');
        if (e.target?.id === 'flashHardBtn') StudyTools.markCurrentCard('hard');
    });
});

