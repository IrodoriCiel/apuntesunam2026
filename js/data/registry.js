import { matematicas } from './materias/matematicas.js';
import { historia } from './materias/historia.js';
import { historiaUniversal } from './materias/historia-universal.js';
import { espanol } from './materias/espanol.js';
import { literatura } from './materias/literatura.js';
import { quimica } from './materias/quimica.js';
import { fisica } from './materias/fisica.js';
import { biologia } from './materias/biologia.js';
import { geografia } from './materias/geografia.js';

const allMaterias = [
    matematicas,
    historia,
    historiaUniversal,
    espanol,
    literatura,
    quimica,
    fisica,
    biologia,
    geografia,
];

// Reconstruct window.appDatabase
const appDatabase = {};
// Reconstruct question banks
const unamQuestions = {};
const practiceQuestions = {};
const practiceLevel2Questions = {};
// Reconstruct flashcardsDatabase
const flashcardsDatabase = [];

for (const materia of allMaterias) {
    for (const clase of materia.clases) {
        const id = clase.id;

        // Build appDatabase entry (omit fields added by this module)
        const { id: _id, preguntas, flashcards, ...appEntry } = clase;
        appDatabase[id] = appEntry;

        // Build question banks
        unamQuestions[id] = preguntas.unam;
        practiceQuestions[id] = preguntas.nivel1;
        practiceLevel2Questions[id] = preguntas.nivel2;

        // Collect flashcards from first class of each materia
        if (flashcards && flashcards.length > 0) {
            flashcardsDatabase.push(...flashcards);
        }
    }
}

// Expose as globals for app.js (non-module script)
window.appDatabase = appDatabase;
window.unamQuestions = unamQuestions;
window.practiceQuestions = practiceQuestions;
window.practiceLevel2Questions = practiceLevel2Questions;
window.flashcardsDatabase = flashcardsDatabase;
