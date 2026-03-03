# Reglas y Patrones del Proyecto (Mis Apuntes UNAM 2026)

Este documento define las reglas que los agentes deben seguir al momento de realizar cambios en el proyecto web de apuntes. El propósito es mantener la fluidez, la consistencia visual y respetar la estructura de datos establecida.

## 1. Patrón de la Estructura de Datos (`appDatabase`)
Al agregar una nueva clase o materia al sistema dinámico, se debe insertar un nuevo bloque en el objeto `appDatabase` dentro del archivo `.html` (e.g., `index.html`). 
El nuevo bloque **debe** seguir esta estructura:

```javascript
"content-materia-1": {
    title: "Apuntes de Materia",
    titleIconLeft: "fa-icono-izquierdo",
    titleIconRight: "fa-icono-derecho",
    titleStyle: "color: #hex;", // Opcional, para modificar colores en títulos
    mainTopicId: "mainTopicMateria",
    mainTopicClass: "materia-topic", // Clase CSS opcional si requiere colores únicos
    mainTopicTitle: "Nombre de la Materia",
    mainTopicIcon1: "fa-icono-1",
    mainTopicIcon2: "fa-icono-2",
    mainTopicSubtitle: "Clase 1: Título de la Clase",
    branches: [
        {
            id: "nodes-materia-1",
            topicIdx: 1, // Para los estilos CSS predefinidos (1 a 4 max)
            title: "1. Título de la Rama",
            icon: "fa-book",
            subnodes: [
                { 
                    icon: "fa-seedling", // Opcional
                    delay: "0.1s", // Para escalonar la animación de entrada
                    title: "Subtema", 
                    content: "<p>Definición del <b>tema remarcado</b> con texto importante.</p>", 
                    examples: ["Ejemplo 1", "Ejemplo 2"] // Opcional, genera una caja de ejemplos
                }
            ]
        }
    ],
    videoUrl: "https://www.youtube.com/embed/XXXXXXX" // Enlace para YouTube
}
```

## 2. Incorporación de Preguntas Guía y Repaso
Al parsear bancos de preguntas como `PreguntasGuiaUnam.txt` o buscar preguntas referentes para agregarlas a las secciones preexistentes (`unamQuestions`, `practiceQuestions`, y `practiceLevel2Questions`), se debe respetar escrupulosamente el siguiente formato JSON:

```javascript
{
    "numero": 123,
    "pregunta": "Texto de la pregunta. Puede contener <br> o <i>tags</i>",
    "opciones": ["Opción A", "Opción B", "Opción C", "Opción D"],
    "respuesta": 2, // ¡Atención! Es un índice basado en 0 (0=A, 1=B, 2=C, 3=D)
    "retroalimentacion": "Explicación del porqué la respuesta elegida es la correcta."
}
```
**Reglas para Preguntas:**
- **Inclusión Obligatoria (Guía UNAM):** Cada vez que se agregue o actualice el contenido de una clase, el agente *debe* buscar en el archivo base de preguntas (como `PreguntasGuiaUnam.txt` u otros provistos por el usuario) las preguntas que hagan referencia a dicha clase y las debe agregar al objeto `unamQuestions`.
- **Inclusión Obligatoria (Práctica Nivel 1):** Asimismo, el agente también *debe* generar y agregar 5 preguntas de prueba básicas relevantes al nuevo contenido dentro del objeto `practiceQuestions`.
- **Inclusión Obligatoria (Práctica Nivel 2):** Se deben generar y agregar otras 5 preguntas de un nivel avanzado (complejidad tipo UNAM, sin repetir las del Nivel 1) dentro del objeto `practiceLevel2Questions`.
- Las preguntas deben ubicarse bajo la llave (key) del ID de contenido correspondiente (ej. `"content-materia-1"`).
- Siempre deben incluir una explicación detallada de por qué la opción es la correcta dentro de la variable `retroalimentacion`.

## 3. Actualización del Menú Lateral (Sidebar Navigation)
Cuando se agrega una clase nueva, debes actualizar el HTML del menú `<nav class="side-menu">`.
Sigue este patrón:
1. Encuentra el `<ul>` de la materia respectiva (ej. `<ul class="sub-menu-list" id="submenu-materia">`).
2. Agrega dentro el `<li>` con las etiquetas y atributos requeridos:
```html
<li>
    <a href="#" class="class-item" id="link-materia-1"
        onclick="switchClass('content-materia-1', this, 'btn-materia')">
        <i class="fa-solid fa-book-open"></i> Clase 1: Nombre
    </a>
</li>
```
3. Si la materia antes estaba marcada como "Próximamente" (con `pointer-events: none` y `opacity: 0.5`), elimina ese item bloqueado.

## 4. Diseño Visual y Formato (Aesthetics)
- **Uso de etiquetas en el `content`:** Usa la etiqueta `<b>` dentro del contenido de los apuntes para resaltar conceptos clave. Las definiciones largas deben partirse con `<p>` o `<br>`.
- **Tips de Examen (`exam-tip`):** Toda nota, advertencia, o "Tip de Examen" debe ir obligatoriamente dentro de un contenedor con la clase `.exam-tip` para resaltarlo.
  Ejemplo: `<div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Las palabras clave son...</div>`
- **Iconografía (Cero Emojis):** Está **estrictamente prohibido usar emojis** en los apuntes (ej. 🚀, ⚠️). Todo elemento estructural, decorativo o resaltado debe usar, sin excepción, un icono de `FontAwesome 6` (`fa-solid`). Nunca dejes secciones vacías de iconos y jamás incluyas un emoji nativo.
- **Micro-animaciones:** No elimines y mantén las animaciones base definidas en el CSS como `pulseMain`, animaciones de entrada `fadeInDown` y transiciones fluidas de menús y submódulos (revisa los usos de `delay: "0.xs"`).

## 5. Procesamiento de Contenido (¡Importante!)
- **NO SINTETIZAR NI OMITIR INFORMACIÓN:** Cuando el usuario proporcione un texto, apuntes o transcripciones, debes transcribir e integrar **absolutamente todos** los puntos, ejemplos, tips y explicaciones proporcionadas en el JSON correspondiente. Asume que el texto proporcionado por el usuario **ya se encuentra resumido** y listo para su inserción. Omitir o recortar información es un error grave y no se debe hacer bajo ninguna circunstancia.
- **Traducción a Lenguaje Formal (Cero Modismos Académicos):** Aunque la información no se debe omitir, sí debe limpiarse de coloquialismos, modismos o analogías informales ("Tip del Pato Lucas", "Regla de Chapo Guzmán"). Transforma este tipo de nombres a su equivalencia matemática formal (ej. "Monomio por Polinomio (Propiedad Distributiva)", "Regla de las Raíces", etc.) manteniendo siempre intacta la explicación y el método del Tip. Asimismo, omite y elimina frases que hagan referencia al dictado como "el profe mencionó", "el profe enfatizó", o "Analogía de la profa". Redacta los apuntes de forma directa y neutral.

Siguiendo de forma idéntica este documento (el `agents.md`), te aseguras de no romper la SPA dinámica desarrollada y enriquecer la experiencia de usuario.
