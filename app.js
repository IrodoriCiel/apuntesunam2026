/* =====================================================
   APUNTES UNAM 2026 — app.js
   ===================================================== */

// --- PWA: Service Worker ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .catch(err => console.log('SW error:', err));
    });
}

// --- Referencias DOM ---
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');

// =============================================
// MODO OSCURO
// =============================================
function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector('#darkModeToggle i');
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = document.querySelector('#darkModeToggle i');
    if (icon) icon.className = 'fa-solid fa-sun';
}

// =============================================
// SCROLL TO TOP
// =============================================
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (scrollBtn) {
        scrollBtn.classList.toggle('visible', window.scrollY > 350);
    }
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
    studied[classId] = !studied[classId];
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
    document.querySelectorAll('.class-item[data-class-id]').forEach(link => {
        const id = link.dataset.classId;
        link.classList.toggle('studied', !!studied[id]);
    });
}

// =============================================
// BUSCADOR EN MENÚ
// =============================================
function filterMenu(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.subject-wrapper').forEach(wrapper => {
        const items = wrapper.querySelectorAll('.class-item');
        let anyVisible = false;
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            const show = !q || text.includes(q);
            item.parentElement.style.display = show ? '' : 'none';
            if (show) anyVisible = true;
        });
        const subjectBtn = wrapper.querySelector('.subject-item');
        if (items.length > 0) {
            wrapper.style.display = anyVisible || !q ? '' : 'none';
            if (q && anyVisible) {
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
    const parentLink = e.currentTarget;
    const isOpen = submenu.classList.contains('expanded');

    document.querySelectorAll('.sub-menu-list').forEach(list => {
        list.style.maxHeight = null;
        list.classList.remove('expanded');
    });
    document.querySelectorAll('.subject-item').forEach(item => item.classList.remove('open'));

    if (!isOpen) {
        submenu.classList.add('expanded');
        submenu.style.maxHeight = (submenu.scrollHeight + 30) + 'px';
        parentLink.classList.add('open');
    }
}

// =============================================
// RENDER: CLASE
// =============================================
function renderClassContainer(classId) {
    const data = appDatabase[classId];
    if (!data) return '';
    const studied = getStudiedClasses();
    const isStudied = !!studied[classId];

    let html = `
    <div id="${classId}" class="subject-content visible" style="animation:fadeInPage 0.4s ease forwards;">
        <h1 class="title-main" ${data.titleStyle ? `style="${data.titleStyle}"` : ''}>
            <i class="fa-solid ${data.titleIconLeft}"></i> ${data.title} <i class="fa-solid ${data.titleIconRight}"></i>
        </h1>
        <div class="mindmap-container">
            <div class="main-topic ${data.mainTopicClass}" id="${data.mainTopicId}">
                <h2><i class="fa-solid ${data.mainTopicIcon1}"></i> ${data.mainTopicTitle} <i class="fa-solid ${data.mainTopicIcon2}"></i></h2>
                <p>${data.mainTopicSubtitle}</p>
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
                    ${sub.content}${exHtml}
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

    return html;
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
                <div onclick="const g=document.getElementById('global-stats-grid');g.style.display=g.style.display==='none'?'grid':'none';" style="cursor:pointer;">
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
        const optHtml = q.opciones.map((opt, oi) =>
            `<div class="unam-option" id="globalunam-opt-${gi}-${oi}" onclick="selectGlobalOption(${gi},${oi})">
                <span style="font-weight:800;color:#64748b;margin-right:8px;">${String.fromCharCode(65 + oi)})</span><span>${opt}</span>
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
            <button id="globalunam-eval-btn-${gi}" class="unam-eval-btn" onclick="evalGlobalQuestion(${gi},${q.respuesta},'${retroSafe}')" disabled>Evaluar</button>
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

function showSubjectFilter() {
    const div = document.getElementById('subject-filter');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
    const cb = document.getElementById('subject-checkboxes');
    if (cb.innerHTML) return;
    const materias = [...new Set([
        ...Object.keys(unamQuestions).map(k => appDatabase[k]?.mainTopicTitle || k),
        ...Object.keys(practiceQuestions).map(k => appDatabase[k]?.mainTopicTitle || k)
    ])];
    cb.innerHTML = materias.map(m => `
        <label style="display:flex;align-items:center;gap:6px;font-weight:600;cursor:pointer;background:#f8fafc;padding:8px 12px;border-radius:8px;border:2px solid #e2e8f0;">
            <input type="checkbox" value="${m}" checked style="width:16px;height:16px;"> ${m}
        </label>`).join('');
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
    buildQuizSection(SIM_KEY, tempObj, 'sim', `📝 Examen Aleatorio (${currentSimExam.length} preguntas)`, '#2563eb');
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
    const q = prefix === 'sim' ? currentSimExam[qIdx] : (prefix === 'unam' ? unamQuestions[contentId] : practiceQuestions[contentId])[qIdx];
    const renderedIndices = q._shuffledIndices[prefix];
    const origSelected = renderedIndices[selIdx];
    const isCorrect = origSelected === q.respuesta;

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
    }
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

function evalGlobalQuestion(gi, correctIdx, retro) {
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
        'content-simulacro': 'Simulacro | Apuntes'
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
    } else {
        document.getElementById('content-home').classList.remove('visible');
        const da = document.getElementById('dynamic-content-area');
        da.innerHTML = renderClassContainer(contentId);
        window.location.hash = contentId.replace('content-', '');
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
        if (pb) pb.classList.add(parentBtnId === 'btn-espanol' ? 'active-espanol' : 'active');
    }

    setTimeout(() => {
        if (sideMenu?.classList.contains('open')) toggleMenu();
    }, 300);
    window.scrollTo(0, 0);

    // Actualizar badge "estudiado" en menú
    updateStudiedBadges();
}

function renderQuestionsForClass(contentId) {
    if (practiceQuestions?.[contentId]?.length > 0) buildQuizSection(contentId, practiceQuestions, 'prac', '🧠 Preguntas de Práctica', '#3b82f6');
    if (unamQuestions?.[contentId]?.length > 0) buildQuizSection(contentId, unamQuestions, 'unam', '📝 Preguntas de la Guía UNAM', '#f59e0b');

    // Botón de progreso al final
    const container = document.getElementById(contentId);
    if (!container) return;
    const studied = getStudiedClasses();
    const isStudied = !!studied[contentId];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:center;margin:30px 0 10px 0;';
    wrapper.innerHTML = `<button onclick="toggleStudied('${contentId}')" class="btn-mark-studied${isStudied ? ' done' : ''}" id="btn-studied-${contentId}">
        <i class="fa-solid fa-${isStudied ? 'check-circle' : 'circle'}"></i>
        ${isStudied ? 'Clase completada – desmarcar' : 'Marcar como estudiada'}
    </button>`;
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
// INIT
// =============================================
window.addEventListener('DOMContentLoaded', () => {
    updateStudiedBadges();
});
