/**
 * build-data.js
 * Lee todos los archivos en js/data/materias/ y genera js/data/data-bundle.js
 * con las variables globales que app.js espera (sin ES modules, sin timing issues).
 *
 * Ejecutar: node build-data.js
 * Ejecutar siempre que se modifique cualquier archivo en js/data/materias/
 */

const fs = require('fs');
const path = require('path');

// ─── 1. Cargar cada archivo de materia ─────────────────────────────────────

function loadMateriaFile(filePath) {
    let src = fs.readFileSync(filePath, 'utf8');
    src = src.replace(/^\uFEFF/, ''); // strip BOM
    const origName = src.match(/^export const ([\w-]+)/)[1];
    const safeVar  = origName.replace(/-/g, '_');
    src = src.replace(`export const ${origName}`, `const ${safeVar}`);
    const mod = {};
    (new Function('module', src + `\nmodule.exports = ${safeVar};`))(mod);
    return mod.exports;
}

const MATERIA_DIR = 'js/data/materias';
const materiaFiles = fs.readdirSync(MATERIA_DIR)
    .filter(f => f.endsWith('.js'))
    .sort();

const allMaterias = materiaFiles.map(f => loadMateriaFile(path.join(MATERIA_DIR, f)));

// ─── 1b. Cargar banco de preguntas y mapeo por clase ─────────────────────────
function loadBancoPreguntas() {
    const bancoPath = 'recursos/banco-preguntas.js';
    if (!fs.existsSync(bancoPath)) return { questions: {}, byClase: {} };
    let src = fs.readFileSync(bancoPath, 'utf8');
    src = src.replace('export const bancoPreguntas', 'const bancoPreguntas');
    const mod = {};
    (new Function('module', src + '\nmodule.exports = bancoPreguntas;'))(mod);
    const bp = mod.exports;
    const byClase = bp['_byClase'] || {};
    delete bp['_byClase'];
    return { questions: bp, byClase };
}

const banco = loadBancoPreguntas();
// Indexar preguntas por numero para cada materia
// Limpiar prefijo numérico hardcodeado del texto (ej. "22. ¿Qué tipo..." → "¿Qué tipo...")
const bancoIndex = {};
for (const [subject, qs] of Object.entries(banco.questions)) {
    bancoIndex[subject] = {};
    for (const q of qs) {
        if (q.pregunta) q.pregunta = q.pregunta.replace(/^\d+\.\s*/, '');
        bancoIndex[subject][q.numero] = q;
    }
}

// ─── 2. Ensamblar los objetos globales ─────────────────────────────────────

const appDatabase             = {};
const unamQuestions           = {};
const practiceQuestions       = {};
const practiceLevel2Questions = {};
const bancoQuestions          = {};
const flashcardsDatabase      = [];
const classFlashcards         = {}; // classId → flashcard[] en orden de apuntes

const errors   = [];
const warnings = [];
const seenFlashcardIds = new Set();

for (const materia of allMaterias) {
    for (const clase of materia.clases) {
        const { preguntas, flashcards, id, ...apuntes } = clase;

        // ── Validación de esquema ──────────────────────────────────────────
        if (!id) {
            errors.push(`Clase sin id en materia ${materia.id}`);
            continue;
        }

        // practiceQuestions: exactamente 5
        const n1 = (preguntas.nivel1 || []).length;
        const n2 = (preguntas.nivel2 || []).length;
        if (n1 !== 5) warnings.push(`[${id}] nivel1 tiene ${n1} preguntas (se esperan 5)`);
        if (n2 !== 5) warnings.push(`[${id}] nivel2 tiene ${n2} preguntas (se esperan 5)`);

        // respuesta válida (0-indexed dentro de opciones)
        for (const [bank, qs] of [['unam', preguntas.unam || []], ['nivel1', preguntas.nivel1 || []], ['nivel2', preguntas.nivel2 || []], ['banco', preguntas.banco || []]]) {
            qs.forEach((q, i) => {
                if (q.respuesta < 0 || q.respuesta >= (q.opciones || []).length) {
                    warnings.push(`[${id}/${bank}#${i}] respuesta=${q.respuesta} fuera de rango (${(q.opciones||[]).length} opciones)`);
                }
            });
        }

        // IDs de flashcards únicos
        for (const fc of (flashcards || [])) {
            if (!fc.id) {
                warnings.push(`[${id}] flashcard sin id: "${fc.pregunta?.slice(0, 40)}"`);
            } else if (seenFlashcardIds.has(fc.id)) {
                errors.push(`[${id}] ID de flashcard duplicado: "${fc.id}"`);
            } else {
                seenFlashcardIds.add(fc.id);
            }
        }
        // ──────────────────────────────────────────────────────────────────

        appDatabase[id]                = apuntes;
        unamQuestions[id]              = preguntas.unam   || [];
        practiceQuestions[id]          = preguntas.nivel1 || [];
        practiceLevel2Questions[id]    = preguntas.nivel2 || [];

        // Banco: combinar preguntas inline (si las hay) con las del banco-preguntas.js vía _byClase
        const inlineBanco = preguntas.banco || [];
        const mapping = banco.byClase[id];
        let externalBanco = [];
        if (mapping && bancoIndex[mapping.subject]) {
            const idx = bancoIndex[mapping.subject];
            externalBanco = mapping.nums.map(n => idx[n]).filter(Boolean);
        }
        bancoQuestions[id] = [...inlineBanco, ...externalBanco];

        classFlashcards[id]            = flashcards        || [];
        if (flashcards) flashcardsDatabase.push(...flashcards);
    }
}

// ─── 3. Reportar errores/warnings ───────────────────────────────────────────

if (warnings.length) {
    console.warn('\n⚠️  Advertencias de validación:');
    warnings.forEach(w => console.warn(`   ${w}`));
}
if (errors.length) {
    console.error('\n❌ Errores de validación (el bundle puede estar incompleto):');
    errors.forEach(e => console.error(`   ${e}`));
}

// ─── 4. Generar el bundle (minificado) ──────────────────────────────────────

const materiaNames = materiaFiles.map(f => f.replace('.js', ''));
const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

const bancoTotal = Object.values(bancoQuestions).flat().length;

const bundle = `// js/data/data-bundle.js — AUTO-GENERADO por build-data.js
// NO editar manualmente. Edita los archivos en js/data/materias/ y re-ejecuta build-data.js
// Generado: ${now}
// Materias: ${materiaNames.join(', ')}
// Clases: ${Object.keys(appDatabase).length} | Flashcards: ${flashcardsDatabase.length} | Preguntas: ${
    Object.values(practiceQuestions).flat().length + Object.values(practiceLevel2Questions).flat().length
} | Banco: ${bancoTotal}
const appDatabase=${JSON.stringify(appDatabase)};
const unamQuestions=${JSON.stringify(unamQuestions)};
const practiceQuestions=${JSON.stringify(practiceQuestions)};
const practiceLevel2Questions=${JSON.stringify(practiceLevel2Questions)};
const bancoQuestions=${JSON.stringify(bancoQuestions)};
const flashcardsDatabase=${JSON.stringify(flashcardsDatabase)};
const classFlashcards=${JSON.stringify(classFlashcards)};
`;

const outPath = 'js/data/data-bundle.js';
fs.writeFileSync(outPath, bundle, 'utf8');

// ─── 5. Resumen ─────────────────────────────────────────────────────────────

const sizeKB = (fs.statSync(outPath).size / 1024).toFixed(1);
const status = errors.length ? '❌' : warnings.length ? '⚠️ ' : '✓';
console.log(`\n${status} ${outPath} generado (${sizeKB} KB)`);
console.log(`  Clases     : ${Object.keys(appDatabase).length}`);
console.log(`  Flashcards : ${flashcardsDatabase.length}`);
console.log(`  Preguntas  : unam=${Object.values(unamQuestions).flat().length} nivel1=${Object.values(practiceQuestions).flat().length} nivel2=${Object.values(practiceLevel2Questions).flat().length} banco=${bancoTotal}`);
if (errors.length || warnings.length) {
    console.log(`  Errores    : ${errors.length} | Advertencias: ${warnings.length}`);
}
