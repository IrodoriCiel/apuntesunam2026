# 🎓 Mis Apuntes UNAM 2026

![Status](https://img.shields.io/badge/Status-Activo-brightgreen?style=for-the-badge&logo=github)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange?style=for-the-badge)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-181717?style=for-the-badge&logo=github)

Una plataforma interactiva de estudio diseñada específicamente para aspirantes al examen de la **UNAM 2026**. Esta SPA (*Single Page Application*) permite repasar contenidos teóricos en mapas mentales, resolver preguntas estilo UNAM, practicar con flashcards y llevar un control detallado del progreso, todo sin necesidad de internet.

🌐 **Demo en vivo:** [irodoriciel.github.io/apuntesunam2026](https://irodoriciel.github.io/apuntesunam2026)

---

## � Materias Disponibles

| Materia | Clases |
|---|---|
| **Historia de México** | Clase 1: Prehispánico y Conquista · Clase 2: La Colonia e Independencia · Clase 3: México Independiente |
| **Historia Universal** | Clase 1: Introducción a la Historia |
| **Español** | Clase 1: Funciones del Lenguaje y Formas del Discurso · Clase 2: Gramática y Descripción |
| **Literatura** | Clase 1: El Texto y la Comunicación |
| **Química** | Clase 1: Materia, Mezclas y Cambios de Estado |
| **Matemáticas** | Clase 1: El Término Algebraico · Clase 2: Multiplicación y Binomios · Clase 3: Triángulo de Pascal · Clase 4: Raíces y Agrupación · Clase 5: Binomio al Cuadrado · Clase 6: División Algebraica |
| **Biología** | *Próximamente* |
| **Geografía** | *Próximamente* |

---

## 🚀 Funcionalidades Principales

### 🧠 Mapas Mentales Interactivos
- Contenidos organizados en **nodos de ramas expandibles** con animaciones escalonadas de entrada.
- Cada nodo muestra **definiciones, ejemplos y tips de examen** con resaltado visual (`exam-tip`).
- Fórmulas matemáticas renderizadas con **MathJax** directamente en los apuntes.
- Player de **video de YouTube embebido** para cada clase, al pie del mapa mental.

### 📝 Evaluación y Práctica
- **Preguntas Guía UNAM** (`unamQuestions`): Preguntas oficiales del banco de la UNAM organizadas por materia, con retroalimentación detallada.
- **Práctica Nivel 1** (`practiceQuestions`): 5 preguntas por clase de complejidad básica/media con explicación de cada respuesta.
- **Práctica Nivel 2** (`practiceLevel2Questions`): 5 preguntas por clase de tipo UNAM avanzado, basadas exclusivamente en el contenido de la clase. Más difícil que el Nivel 1.
- Retroalimentación inmediata con resaltado de la opción correcta e incorrecta al responder.
- **Marcado de clases estudiadas**: botón para marcar/desmarcar clases como completadas, con persistencia en LocalStorage.

### 🃏 StudyTok – Flashcards (Repetición Espaciada)
- Interfaz estilo TikTok de **scroll vertical**, donde cada tarjeta ocupa la pantalla completa.
- Un swipe por vez (sin saltarse tarjetas con gestos rápidos).
- Las tarjetas tienen **anverso (pregunta)** y **reverso (respuesta)**, volteables con click o tap.
- Sistema de calificación de retención: **Fácil / Medio / Difícil**, que determina cuándo reaparcerá la tarjeta (30 / 7 / 1 día).
- Filtro por **materia**: selector de asignatura antes de iniciar la sesión.
- Progreso visual con **barra de avance** y contador `X / Total`.
- Los resultados se almacenan en **IndexedDB** (SRS – Spaced Repetition System).
- Base de datos con más de **100+ flashcards** que cubren todas las materias activas.

### 🎯 Simulacro de Examen
- Generador de **exámenes aleatorios** con preguntas mezcladas de todas las materias.
- **Filtro por materia**: selección de asignatura(s) específica(s) para el simulacro.
- Temporizador y resumen de resultados al finalizar.
- Historial de intentos guardado para ver la evolución a lo largo del tiempo.

### 🔍 Búsqueda Global del Menú
- Barra de búsqueda integrada en el menú lateral que filtra clases **por título y por contenido** (nodos y subnodos).
- Los resultados se muestran en tiempo real mientras se escribe.
- Resaltado de coincidencias y apertura automática del submenú correspondiente.

### 👤 Perfil de Usuario Local
- Ingreso de **nombre de usuario** persistente.
- Selección de **avatar** personalizado (varios estilos disponibles).
- Tarjeta de perfil premium visible en el menú lateral.

### 📊 Estadísticas y Progreso
- Panel de **estadísticas globales**: total de flashcards, calificadas fácil / medio / difícil.
- Tabla detallada por materia con: preguntas respondidas (correctas/total), flashcards (F/M/D/Total) y visitas.
- Contador de **visitas por clase** y registro del último acceso.

### 🌓 Experiencia de Usuario
- **Modo Oscuro / Modo Claro**: toggle accesible desde el menú y la configuración, con persistencia.
- **Colores por materia**: cada asignatura tiene su identidad visual única en el menú, badges e iconos.
- **PWA – Progressive Web App**: instalable en PC, Android e iOS. Funciona completamente **sin conexión a internet** gracias al Service Worker con cache-first.
- Notificación de **"Nueva versión disponible"** cuando el contenido se actualiza, activable con un botón.
- Botón **"Volver arriba"** flotante que aparece al deslizar la página.
- Botón de **instalación PWA** visible solo cuando el navegador lo permite.
- Sistema de **toasts** (notificaciones no invasivas) para confirmaciones y errores.
- **Dialogs de confirmación** personalizados (sin `alert()` nativo).

---

## 🛠️ Tecnologías Utilizadas

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

## 📂 Estructura del Proyecto

```text
/
├── index.html              # SPA principal: estructura HTML, plantillas y appDatabase (JSON de contenidos)
├── 404.html                # Fallback de rutas para GitHub Pages
├── manifest.json           # Configuración e íconos PWA (192x192, 512x512)
├── sw.js                   # Service Worker: cache offline y notificación de actualizaciones
├── css/
│   └── styles.css          # Sistema de diseño: tokens, temas, componentes y animaciones
├── js/
│   ├── app.js              # Lógica central: menú, SRS, simulacro, perfil, estadísticas, búsqueda
│   └── data/
│       ├── questions-db.js   # Bancos de preguntas (unamQuestions, practiceQuestions, practiceLevel2Questions)
│       └── flashcards-db.js  # Base de datos de flashcards (100+ tarjetas por materia)
├── assets/
│   └── images/             # Iconos PWA e imágenes (avatares, dinosaurios)
└── recursos/
    ├── agents.md           # Guía de reglas para agentes de IA que contribuyan al proyecto
    └── PreguntasGuiaUnam.txt # Banco de preguntas raw de la Guía oficial UNAM
```

---

## 💻 Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/IrodoriCiel/apuntesunam2026.git

# 2. Entrar al directorio
cd apuntesunam2026

# 3. Abrir en el navegador (o usar Live Server en VS Code para probar PWA)
open index.html
```

> **Nota:** Para probar la funcionalidad de PWA (Service Worker, cache offline, instalación), se recomienda servir con un servidor local HTTPS o con la extensión **Live Server** de VS Code.

---

## 🤖 Guía para Contribuciones (IA / Manual)

Las reglas para agregar nuevas clases, preguntas y flashcards de forma consistente están documentadas en [`recursos/agents.md`](./recursos/agents.md). Incluye:

- Estructura del objeto `appDatabase` (ramas, subnodos, exam-tips, íconos FA6).
- Formato JSON de preguntas (`unamQuestions`, `practiceQuestions`, `practiceLevel2Questions`).
- Reglas de redacción (sin emojis, sin modismos, sin sintetizar contenido del usuario).
- Patrón de actualización del menú lateral (sidebar navigation).
- Procedimiento obligatorio de actualización de versión PWA (`sw.js` + `app.js`).

---

## 🤝 Contribuciones

Este es un proyecto personal de estudio activo. Si encuentras un error en el contenido, una pregunta mal redactada o tienes una propuesta de mejora, ¡abre un *Issue* o envía un *Pull Request*!

---

## 📝 Licencia

MIT — Puedes usar este proyecto libremente para tu estudio personal.

---

_"El éxito es la suma de pequeños esfuerzos repetidos día tras día."_
