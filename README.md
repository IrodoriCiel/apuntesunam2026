# Mis Apuntes UNAM 2026

![Status](https://img.shields.io/badge/Status-Activo-brightgreen?style=for-the-badge&logo=github)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-181717?style=for-the-badge&logo=github)

Una plataforma interactiva de estudio diseñada específicamente para aspirantes al examen de la **UNAM 2026**. Esta SPA (*Single Page Application*) permite repasar contenidos teóricos en mapas mentales, resolver preguntas estilo UNAM, practicar con flashcards y llevar un control detallado del progreso, todo sin necesidad de internet.

**Demo en vivo:** [irodoriciel.github.io/apuntesunam2026](https://irodoriciel.github.io/apuntesunam2026)

---

## Materias Disponibles

| Materia | Clases |
|---|---|
| **Matemáticas** | Clase 1: El Término Algebraico · Clase 2: Multiplicación y Binomios · Clase 3: Triángulo de Pascal · Clase 4: Raíces y Agrupación · Clase 5: Binomio al Cuadrado · Clase 6: División Algebraica |
| **Español** | Clase 1: Funciones del Lenguaje y Formas del Discurso · Clase 2: Gramática y Descripción |
| **Literatura** | Clase 1: El Texto y la Comunicación · Clase 2: El Periodismo y el Reportaje |
| **Química** | Clase 1: Materia, Mezclas y Cambios de Estado · Clase 2: Átomo, Tabla Periódica y Nomenclatura |
| **Física** | Clase 1: Cinemática · Clase 2: Caída Libre y Movimiento Parabólico |
| **Biología** | Clase 1: La Célula · Clase 2: Genética y Herencia |
| **Geografía** | Clase 1: Geografía Física y Cartografía |
| **Historia de México** | Clase 1: Prehispánico y Conquista · Clase 2: La Colonia e Independencia · Clase 3: México Independiente |
| **Historia Universal** | Clase 1: Prehistoria y Mundo Antiguo · Clase 2: Ilustración y Revolución |

---

## Funcionalidades Principales

### Mapas Mentales Interactivos
- Contenidos organizados en **nodos de ramas expandibles** con animaciones escalonadas de entrada.
- Cada nodo muestra **definiciones, ejemplos y tips de examen** con resaltado visual (`exam-tip`).
- Fórmulas matemáticas renderizadas con **MathJax** directamente en los apuntes.
- Player de **video de YouTube embebido** para cada clase, al pie del mapa mental.

### Evaluación y Práctica
- **Preguntas Guía UNAM** (`unamQuestions`): Preguntas oficiales del banco de la UNAM organizadas por materia, con retroalimentación detallada.
- **Práctica Nivel 1** (`practiceQuestions`): 5 preguntas por clase de complejidad básica/media con explicación de cada respuesta.
- **Práctica Nivel 2** (`practiceLevel2Questions`): 5 preguntas por clase de tipo UNAM avanzado. Más difícil que el Nivel 1.
- Retroalimentación inmediata con resaltado de la opción correcta e incorrecta al responder.
- **Marcado de clases estudiadas**: botón para marcar/desmarcar clases como completadas, con persistencia en LocalStorage.

### StudyTok — Flashcards con Repetición Espaciada (SRS)
- Interfaz estilo TikTok de **scroll vertical**, donde cada tarjeta ocupa la pantalla completa.
- Las tarjetas tienen **anverso (pregunta)** y **reverso (respuesta)**, volteables con click o tap.
- Sistema de calificación de retención: **Fácil / Medio / Difícil** (intervalos: 30 / 7 / 1 día).
- El feed general **solo muestra tarjetas pendientes** (`nextReview ≤ hoy`); las tarjetas al día no aparecen hasta que vence su intervalo.
- Dentro de cada clase, las flashcards siguen el **orden del apunte** (no aleatorio).
- El feed general mezcla aleatoriamente las tarjetas pendientes de todas las materias.
- Filtro por **materia**: selector antes de iniciar la sesión por clase.
- Los resultados se almacenan en **IndexedDB** (SRS – Spaced Repetition System).
- Base de datos con **427+ flashcards** que cubren todas las materias.

### Simulacro de Examen
Tres modos disponibles:

| Modo | Preguntas | Descripción |
|---|---|---|
| **Relámpago** | 20 | Aleatorio, con filtro opcional por materia |
| **Completo** | 120 | Distribución oficial UNAM por materia, con separadores de sección |
| **Reducido** | 60 | Misma proporción que el completo, formato más corto |

- Numeración secuencial (1 al 120) independientemente del número original de la pregunta.
- Historial de intentos guardado para ver evolución.
- Resumen de resultados con aciertos, fallos y porcentaje.

### Búsqueda Global del Menú
- Barra de búsqueda integrada que filtra clases **por título y por contenido** (nodos y subnodos).
- Resultados en tiempo real con resaltado de coincidencias.

### Perfil de Usuario Local
- **Nombre de usuario** y **avatar** personalizados, persistentes en IndexedDB.

### Estadísticas y Progreso
- Panel global: flashcards por dificultad, preguntas respondidas y visitas por clase.
- Indicador visual de clases estudiadas en el menú lateral.

### Experiencia de Usuario
- **Modo Oscuro / Modo Claro** con persistencia.
- **Colores por materia**: identidad visual única por asignatura.
- **PWA**: instalable en PC, Android e iOS. Funciona completamente **sin conexión** gracias al Service Worker.
- Notificación de **"Nueva versión disponible"** cuando el contenido se actualiza.
- Versión de la app visible sutilmente en la pantalla de inicio.

---

## Tecnologías Utilizadas

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 puro — Variables CSS, Flexbox, Grid, Animaciones |
| Lógica | Vanilla JavaScript ES6+ (sin frameworks) |
| Iconografía | [Font Awesome 6](https://fontawesome.com/) |
| Tipografía | [Google Fonts — Nunito](https://fonts.google.com/specimen/Nunito) |
| Fórmulas matemáticas | [MathJax 3](https://www.mathjax.org/) |
| Persistencia local | `localStorage` + `IndexedDB` |
| Offline / PWA | Service Worker (`sw.js`) + `manifest.json` |
| Hosting | [GitHub Pages](https://pages.github.com/) |

---

## Estructura del Proyecto

```text
/
├── index.html              # SPA shell: HTML, navegación y plantillas de UI
├── sw.js                   # Service Worker: cache offline y actualizaciones
├── build-data.js           # Script Node.js: genera data-bundle.js a partir de los archivos de materia
├── manifest.json           # Configuración PWA
├── css/
│   └── styles.css          # Sistema de diseño: tokens, temas, componentes, animaciones
├── js/
│   ├── app.js              # Lógica central: menú, SRS, simulacro, perfil, estadísticas, búsqueda
│   └── data/
│       ├── materias/       # Una fuente de verdad por materia (apuntes + preguntas + flashcards co-localizados)
│       │   ├── matematicas.js
│       │   ├── espanol.js
│       │   ├── literatura.js
│       │   ├── quimica.js
│       │   ├── fisica.js
│       │   ├── biologia.js
│       │   ├── geografia.js
│       │   ├── historia.js
│       │   └── historia-universal.js
│       └── data-bundle.js  # AUTO-GENERADO por build-data.js — no editar manualmente
├── assets/
│   └── images/             # Iconos PWA e imágenes (avatares)
└── recursos/
    ├── AGENTS.md           # Reglas para agentes de IA que contribuyan al proyecto
    └── PreguntasGuiaUnam.txt # Banco oficial de preguntas UNAM
```

---

## Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/IrodoriCiel/apuntesunam2026.git
cd apuntesunam2026

# 2. Abrir en el navegador (o usar Live Server en VS Code para probar PWA)
open index.html

# 3. Después de editar cualquier archivo en js/data/materias/, regenerar el bundle:
node build-data.js
```

> Para probar PWA (Service Worker, cache offline, instalación), sirve con Live Server de VS Code o cualquier servidor local HTTPS.

---

## Guía para Contribuciones

Las reglas completas están en [`recursos/AGENTS.md`](./recursos/AGENTS.md) y en [`CLAUDE.md`](./CLAUDE.md). Incluyen:

- Estructura del objeto de clase (ramas, subnodos, exam-tips, íconos FA6).
- Formato de preguntas (`unamQuestions`, `practiceQuestions`, `practiceLevel2Questions`).
- Reglas de flashcards (1 concepto por tarjeta, sin tips, sin referencias al examen).
- Procedimiento de actualización de versión PWA.

---

## Licencia

MIT — Puedes usar este proyecto libremente para tu estudio personal.

---

_"El éxito es la suma de pequeños esfuerzos repetidos día tras día."_
