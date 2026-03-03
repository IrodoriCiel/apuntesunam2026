# 🎓 Mis Apuntes UNAM 2026

![UNAM Study App](https://img.shields.io/badge/Status-En%20Desarrollo-blue?style=for-the-badge&logo=github)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-green?style=for-the-badge&logo=pwa)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange?style=for-the-badge)

Una plataforma interactiva de estudio diseñada específicamente para aspirantes al examen de la **UNAM 2026**. Esta aplicación web (SPA) permite repasar contenidos, realizar simulacros y llevar un control detallado del progreso de estudio de forma visual y moderna.

---

## 🚀 Características Principales

### 🧠 Aprendizaje Visual (Mapas Mentales)
- **Navegación Dinámica**: Contenidos organizados en nodos interactivos que permiten expandir y contraer temas para un estudio enfocado.
- **Clases en Video**: Integración directa con YouTube para reforzar los temas con contenido multimedia.

### 📝 Evaluación Interactiva y Repaso
- **Preguntas Guía UNAM**: Sección dedicada con todas las preguntas oficiales de la guía, organizadas por materia.
- **Práctica Nivel 1 y Nivel 2**: Baterías de preguntas de nivel intermedio y avanzado con retroalimentación paso a paso para dominar cada tema.
- **Simulacro Aleatorio**: Generador de exámenes relámpago con filtros personalizados por materia, iconos distintivos y medición de resultados.
- **Flashcards (Repetición Espaciada)**: Sistema de tarjetas de memoria optimizado para celulares, que califica tu retención y adapta la frecuencia de repaso de cada concepto.
- **Historial de Resultados**: Registro de tus últimos intentos y estadísticas globales para medir tu evolución real.

### 🌓 Experiencia de Usuario Premium
- **Modo Oscuro Dinámico**: Interfaz adaptable con paletas de colores específicos por asignatura para estudiar cómodamente de día o de noche sin perder legibilidad.
- **PWA (Progressive Web App)**: Instalable de forma nativa en PC, Android e iOS con soporte para funcionar sin internet.
- **Progreso Persistente y Perfiles**: Marcado automático de clases completadas, avatares seleccionables y datos de estudio guardados de forma segura en tu navegador (IndexedDB y LocalStorage).

### 📱 Diseño y Rendimiento
- **Responsive Design**: Optimizado para celulares, tablets y computadoras.
- **Rápido y Ligero**: Construido con Vanilla JavaScript y CSS puro, sin frameworks pesados, para una carga instantánea.

---

## 🛠️ Tecnologías Utilizadas

- **Core**: HTML5, CSS3 (Variables y Flexbox/Grid), JavaScript (ES6+).
- **Iconografía**: [Font Awesome 6](https://fontawesome.com/).
- **Tipografía**: [Google Fonts (Nunito)](https://fonts.google.com/specimen/Nunito).
- **Mates**: [MathJax](https://www.mathjax.org/) para el renderizado de fórmulas complejas.
- **Hosting**: GitHub Pages.

---

## 💻 Instalación Local

Si deseas clonar este proyecto y ejecutarlo en tu máquina:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Apuntes.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito.
3. (Opcional) Usa una extensión como *Live Server* en VS Code para probar las funciones de PWA.

---

## 📂 Estructura del Proyecto

```text
/
├── index.html        # Estructura principal y plantillas de la Single Page Application.
├── 404.html          # Manejo de rutas para GitHub Pages.
├── manifest.json     # Configuración e íconos para la instalación de PWA.
├── sw.js             # Service Worker para funcionar offline y cachear recursos.
├── css/
│   └── styles.css    # Sistema de diseño integral, overrides por materia y animaciones.
└── js/
    ├── app.js        # Lógica central: interfaz, menús dinámicos, SRS y simulación.
    └── data/
        ├── questions-db.js  # Base de conocimiento (Guía UNAM y simulacros).
        └── flashcards-db.js # Base de datos para el sistema de tarjetas de memoria espaciada.
```

---

## 🤝 Contribuciones

Este es un proyecto personal de estudio. Si encuentras algún error o tienes una idea para mejorar los apuntes, ¡siéntete libre de abrir un *Issue* o enviar un *Pull Request*!

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para tu estudio personal.

_¡El éxito es la suma de pequeños esfuerzos repetidos día tras día!_ 🚀
