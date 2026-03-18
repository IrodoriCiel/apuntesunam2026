const flashcardsDatabase = [
    // ==========================================
    // ESPAÑOL CLASE 1 (22 TARJETAS)
    // ==========================================
    {
        "id": "esp-001",
        "pregunta": "¿Qué es la Función Referencial del lenguaje?",
        "respuesta": "Transmite información objetiva sobre la realidad, usando datos y hechos concretos. Ej: 'El agua hierve a 100°C'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-002",
        "pregunta": "¿Qué es la Función Emotiva del lenguaje?",
        "respuesta": "Expresa los sentimientos, emociones y estados de ánimo del emisor. Ej: '¡Qué alegría verte!'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-003",
        "pregunta": "¿Qué es la Función Apelativa del lenguaje?",
        "respuesta": "Busca influir, dar órdenes, mandatos o realizar peticiones al receptor. Ej: 'Cierre la puerta al salir'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-004",
        "pregunta": "¿Qué es la Función Fática del lenguaje?",
        "respuesta": "Se usa para iniciar, mantener o terminar una conversación y verificar que el canal funcione. Ej: '¿Bueno? ¿Me escuchas?'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-005",
        "pregunta": "¿Qué es la Función Metalingüística del lenguaje?",
        "respuesta": "Se utiliza para hablar de las reglas, términos o conceptos del propio idioma. Ej: 'Casa es un sustantivo'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-006",
        "pregunta": "¿Qué es la Función Poética del lenguaje?",
        "respuesta": "Busca embellecer el mensaje, común en literatura y canciones. Ej: 'Tus ojos son dos luceros'.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp-007",
        "pregunta": "¿Qué es la Narración (Forma del Discurso)?",
        "respuesta": "Relata una secuencia de eventos (inicio, nudo, desenlace) en un tiempo y lugar determinados. Usa verbos de acción.",
        "tema": "Formas del Discurso",
        "asignatura": "Español"
    },
    {
        "id": "esp-008",
        "pregunta": "¿Qué es la Descripción (Forma del Discurso)?",
        "respuesta": "Consiste en 'dibujar con palabras' detallando cómo son los objetos, personas o lugares. Usa muchos adjetivos.",
        "tema": "Formas del Discurso",
        "asignatura": "Español"
    },
    {
        "id": "esp-009",
        "pregunta": "¿Qué es la Exposición (Forma del Discurso)?",
        "respuesta": "Explica o informa un tema de manera clara, objetiva y ordenada, sin incluir opiniones personales.",
        "tema": "Formas del Discurso",
        "asignatura": "Español"
    },
    {
        "id": "esp-010",
        "pregunta": "¿Qué es la Argumentación (Forma del Discurso)?",
        "respuesta": "Defiende una idea o postura (tesis) para convencer y persuadir al receptor mediante razones y argumentos.",
        "tema": "Formas del Discurso",
        "asignatura": "Español"
    },
    {
        "id": "esp-011",
        "pregunta": "¿Qué tipo de palabra es un adverbio y a qué preguntas responde?",
        "respuesta": "Modifica al verbo, adjetivo u otro adverbio. Responde a: ¿Cuándo? (tiempo), ¿Dónde? (lugar), ¿Cómo? (modo), ¿Cuánto? (cantidad).",
        "tema": "Modificadores y Enlaces",
        "asignatura": "Español"
    },
    {
        "id": "esp-012",
        "pregunta": "¿Cuáles son las preposiciones del español (lista tradicional)?",
        "respuesta": "A, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras.",
        "tema": "Modificadores y Enlaces",
        "asignatura": "Español"
    },
    {
        "id": "esp-013",
        "pregunta": "¿Cuál es la función gramatical de las conjunciones?",
        "respuesta": "Enlazan oraciones o elementos de una lista.",
        "tema": "Modificadores y Enlaces",
        "asignatura": "Español"
    },
    {
        "id": "esp-014",
        "pregunta": "¿Qué es una interjección?",
        "respuesta": "Enunciado exclamativo que expresa emociones (¡Ay!, ¡Uf!). No enlaza oraciones; solo expresa.",
        "tema": "Modificadores y Enlaces",
        "asignatura": "Español"
    },
    {
        "id": "esp-019",
        "pregunta": "¿Cuáles son algunas conjunciones comunes?",
        "respuesta": "Y, e, o, u, ni, pero, porque.",
        "tema": "Modificadores y Enlaces",
        "asignatura": "Español"
    },
    {
        "id": "esp-015",
        "pregunta": "¿Qué es el sujeto expreso?",
        "respuesta": "Sujeto que está escrito explícitamente en la oración.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-016",
        "pregunta": "¿Qué es el sujeto simple?",
        "respuesta": "Sujeto con un solo núcleo, aunque el núcleo sea plural.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-020",
        "pregunta": "¿Qué es el sujeto tácito o implícito?",
        "respuesta": "Sujeto que no está escrito, pero se deduce por la conjugación del verbo.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-021",
        "pregunta": "¿Qué es el sujeto compuesto?",
        "respuesta": "Sujeto con dos o más núcleos.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-017",
        "pregunta": "¿Qué es el núcleo del predicado?",
        "respuesta": "Es el verbo conjugado de la oración. En una perífrasis verbal, los dos verbos forman el núcleo; un infinitivo por sí solo no es núcleo.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-018",
        "pregunta": "¿Qué es el predicado nominal?",
        "respuesta": "Predicado cuyo núcleo es un verbo copulativo: Ser, Estar o Parecer. Ej: 'es pintora'.",
        "tema": "La Oración",
        "asignatura": "Español"
    },
    {
        "id": "esp-022",
        "pregunta": "¿Qué es el predicado verbal?",
        "respuesta": "Predicado cuyo núcleo es un verbo de acción. Ej: 'barrió su casa'.",
        "tema": "La Oración",
        "asignatura": "Español"
    },

    // ==========================================
    // HISTORIA DE MÉXICO (14 CONCEPTOS)
    // ==========================================
    {
        "id": "hist-001",
        "pregunta": "¿Qué es Aridoamérica?",
        "respuesta": "Región del norte de México y sur de EE.UU. con clima desértico, habitada por pueblos nómadas (Chichimecas).",
        "tema": "Geografía Prehispánica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-002",
        "pregunta": "¿Qué es Mesoamérica?",
        "respuesta": "Región centro-sur de México, cuna de la agricultura (maíz) y grandes civilizaciones. Concepto dado por Paul Kirchhoff.",
        "tema": "Geografía Prehispánica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-003",
        "pregunta": "¿Qué es Oasisamérica?",
        "respuesta": "Zonas con presencia de agua dentro de áreas desérticas del norte de México.",
        "tema": "Geografía Prehispánica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-004",
        "pregunta": "¿Qué es la religión politeísta?",
        "respuesta": "Creencia religiosa que acepta la existencia de muchos dioses.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-023",
        "pregunta": "¿Qué es un gobierno teocrático?",
        "respuesta": "Sistema de gobierno en el que la religión y los sacerdotes influyen o determinan el poder político.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-005",
        "pregunta": "¿Qué caracteriza a la cultura Olmeca?",
        "respuesta": "Es la 'Cultura Madre' (Tabasco/Veracruz). Ciudades: San Lorenzo, La Venta y Tres Zapotes.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-006",
        "pregunta": "¿Qué aportaron los mayas en matemáticas?",
        "respuesta": "El uso del cero.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-024",
        "pregunta": "¿Qué aportaron los mayas en astronomía?",
        "respuesta": "El estudio de los eclipses.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-007",
        "pregunta": "¿Qué importancia tuvo Teotihuacán?",
        "respuesta": "Fue la primera gran ciudad de Mesoamérica, anterior a Tenochtitlan.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-008",
        "pregunta": "¿Quiénes fueron los toltecas?",
        "respuesta": "Civilización asociada con Tula y los Atlantes.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-025",
        "pregunta": "¿Qué hecho se asocia con los mexicas?",
        "respuesta": "Fundaron Tenochtitlan en 1325.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-009",
        "pregunta": "¿Cuál fue la causa real del descubrimiento de América (1492)?",
        "respuesta": "La búsqueda de nuevas rutas de comercio hacia el oriente.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-010",
        "pregunta": "¿Qué fundó Hernán Cortés al llegar en 1519?",
        "respuesta": "La Villa Rica de la Vera Cruz, el primer puerto comercial y ayuntamiento.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-011",
        "pregunta": "¿Cuál fue el papel de La Malinche en la Conquista?",
        "respuesta": "Funcionó como intérprete y traductora clave para las estrategias de Cortés.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-012",
        "pregunta": "¿Qué ventaja dieron a los españoles las alianzas con los tlaxcaltecas?",
        "respuesta": "Les permitieron contar con apoyo de pueblos enemigos de los mexicas durante la Conquista.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-026",
        "pregunta": "¿Qué factor biológico favoreció a los españoles durante la Conquista?",
        "respuesta": "La pandemia de viruela.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-013",
        "pregunta": "¿En qué fecha cayó definitivamente Tenochtitlan?",
        "respuesta": "El 13 de agosto de 1521.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-014",
        "pregunta": "Menciona un personaje clave de la Conquista de México:",
        "respuesta": "Hernán Cortés.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-029",
        "pregunta": "Menciona un personaje clave de la Conquista de México:",
        "respuesta": "Moctezuma.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-030",
        "pregunta": "Menciona un personaje clave de la Conquista de México:",
        "respuesta": "Cuitláhuac.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-031",
        "pregunta": "Menciona un personaje clave de la Conquista de México:",
        "respuesta": "Cuauhtémoc.",
        "tema": "La Conquista",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-015",
        "pregunta": "¿Quién fue el primer virrey de la Nueva España?",
        "respuesta": "Antonio de Mendoza.",
        "tema": "Virreinato",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-027",
        "pregunta": "¿Quién fue el último virrey de la Nueva España?",
        "respuesta": "Juan O'Donojú (firmó los Tratados de Córdoba).",
        "tema": "Virreinato",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-016",
        "pregunta": "¿Qué función tenía la Real Audiencia?",
        "respuesta": "Impartía justicia y asumía las funciones de gobierno en ausencia o muerte del virrey.",
        "tema": "Virreinato",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-017",
        "pregunta": "¿Qué son los 'Criollos' y por qué son importantes?",
        "respuesta": "Hijos de españoles nacidos en América. Su exclusión de altos cargos fue la principal causa interna de la independencia.",
        "tema": "Sociedad Colonial",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-018",
        "pregunta": "¿Cuál fue la principal actividad económica de la Nueva España?",
        "respuesta": "La Minería (extracción de plata y oro).",
        "tema": "Economía Colonial",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-019",
        "pregunta": "¿Qué fueron las Reformas Borbónicas?",
        "respuesta": "Cambios administrativos y fiscales para modernizar España y aumentar la recaudación; fueron causa externa de la independencia.",
        "tema": "Siglo XVIII",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-020",
        "pregunta": "¿Qué documento redactó Morelos sobre la soberanía y la igualdad?",
        "respuesta": "Sentimientos de la Nación (leído en el Congreso de Chilpancingo).",
        "tema": "Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-021",
        "pregunta": "¿Cuál fue el primer órgano informativo de la insurgencia?",
        "respuesta": "El Despertador Americano, fundado por Miguel Hidalgo en Guadalajara.",
        "tema": "Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-022",
        "pregunta": "Menciona una causa externa de la Independencia de México:",
        "respuesta": "La Independencia de los Estados Unidos (1776).",
        "tema": "Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-028",
        "pregunta": "Menciona una causa externa de la Independencia de México:",
        "respuesta": "La Revolución Francesa (1789).",
        "tema": "Independencia",
        "asignatura": "Historia de México"
    },

    // ==========================================
    // MATEMÁTICAS (40 CONCEPTOS)
    // ==========================================
    {
        "id": "mat-001",
        "pregunta": "¿Qué elementos componen un término algebraico?",
        "respuesta": "Signo, Coeficiente (número grande), Literal (letra) y Exponente (número chiquito).",
        "tema": "Álgebra: El Término",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-002",
        "pregunta": "¿Qué sucede si una literal no tiene coeficiente visible?",
        "respuesta": "Su coeficiente invisible es 1. (Ej: x = 1x).",
        "tema": "Álgebra: El Término",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-003",
        "pregunta": "¿Qué sucede si una literal no tiene exponente visible?",
        "respuesta": "Su exponente invisible es 1. (Ej: x = x¹).",
        "tema": "Álgebra: El Término",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-004",
        "pregunta": "¿Qué elemento separa a los términos en una expresión?",
        "respuesta": "Los signos de suma (+) y resta (-).",
        "tema": "Álgebra: El Término",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-005",
        "pregunta": "¿Qué son los términos semejantes?",
        "respuesta": "Son términos que tienen exactamente las mismas letras y los mismos exponentes.",
        "tema": "Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-006",
        "pregunta": "¿Qué condición se requiere para sumar o restar términos?",
        "respuesta": "Solo se pueden sumar o restar términos semejantes. Si no lo son, se mantienen sin operar en el resultado.",
        "tema": "Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-007",
        "pregunta": "¿Cuál es la regla para sumar números con signos iguales?",
        "respuesta": "Se suman los números y se deja el signo que tienen. (Ej: -5 - 3 = -8).",
        "tema": "Aritmética Algebraica",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-008",
        "pregunta": "¿Cuál es la regla para sumar números con signos diferentes?",
        "respuesta": "Al mayor se le resta el menor y se deja el signo del número más grande. (Ej: -10 + 2 = -8).",
        "tema": "Aritmética Algebraica",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-009",
        "pregunta": "¿Qué sucede con los exponentes en la Multiplicación de Letras Iguales?",
        "respuesta": "Los exponentes SE SUMAN. (Ej: x³ · x⁵ = x⁸).",
        "tema": "Multiplicación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-010",
        "pregunta": "¿Qué sucede en la Multiplicación de Letras Diferentes?",
        "respuesta": "Las letras solo se 'pegan'. (Ej: x · y = xy).",
        "tema": "Multiplicación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-011",
        "pregunta": "¿Qué es un Monomio?",
        "respuesta": "Una expresión algebraica de 1 solo término.",
        "tema": "Polinomios",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-012",
        "pregunta": "¿Qué es un Binomio?",
        "respuesta": "Una expresión algebraica de 2 términos.",
        "tema": "Polinomios",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-013",
        "pregunta": "¿Qué es un Trinomio?",
        "respuesta": "Una expresión algebraica de 3 términos.",
        "tema": "Polinomios",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-014",
        "pregunta": "¿Qué es un Polinomio?",
        "respuesta": "Nombre general para expresiones de varios términos, a partir de dos o más.",
        "tema": "Polinomios",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-015",
        "pregunta": "¿Qué es la Propiedad Distributiva (Monomio por Polinomio)?",
        "respuesta": "El término de afuera multiplica a todos los de adentro, uno por uno.",
        "tema": "Multiplicación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-016",
        "pregunta": "¿Qué son los binomios conjugados?",
        "respuesta": "Son dos binomios idénticos, pero uno suma (+) y el otro resta (-). Ej: (x+2)(x-2).",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-017",
        "pregunta": "¿Cuál es el producto notable de binomios conjugados (a + b)(a - b)?",
        "respuesta": "Diferencia de cuadrados: (a + b)(a - b) = a² - b².",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-018",
        "pregunta": "¿A qué equivale multiplicar dos raíces cuadradas iguales (√x · √x)?",
        "respuesta": "Equivale al número o letra de adentro sin la raíz. (Ej: √x · √x = x).",
        "tema": "Radicales",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-019",
        "pregunta": "¿Cuál es la diferencia crítica de exponentes entre Suma y Multiplicación?",
        "respuesta": "En Suma los exponentes NO cambian. En Multiplicación los exponentes SE SUMAN.",
        "tema": "Álgebra: Reglas",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-020",
        "pregunta": "¿Para qué sirven los coeficientes del Triángulo de Pascal?",
        "respuesta": "Para expandir (a ± b)ⁿ y obtener los coeficientes del desarrollo.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-021",
        "pregunta": "¿Cuál es la regla de formación del Triángulo de Pascal?",
        "respuesta": "Inicia con 1. Los siguientes niveles se obtienen sumando los dos números superiores y cerrando con 1.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-022",
        "pregunta": "¿Cuál es la ley de signos para (a + b)ⁿ en el Triángulo de Pascal?",
        "respuesta": "Todos los signos del resultado son Positivos (+).",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-023",
        "pregunta": "¿Cuál es la ley de signos para (a - b)ⁿ en el Triángulo de Pascal?",
        "respuesta": "Los signos se alternan: (+, -, +, -, ...).",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-024",
        "pregunta": "¿Qué sucede con los exponentes del primer término al expandir un binomio?",
        "respuesta": "Empiezan en la potencia máxima y disminuyen hacia la derecha hasta desaparecer.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-025",
        "pregunta": "¿Qué sucede con los exponentes del segundo término al expandir un binomio?",
        "respuesta": "Empiezan en la potencia máxima a la derecha y disminuyen hacia la izquierda hasta desaparecer.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-026",
        "pregunta": "¿Cuál es la prioridad de operaciones al expandir un binomio con números?",
        "respuesta": "Primero se resuelven las potencias de los números y luego se multiplican por el coeficiente de Pascal.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-027",
        "pregunta": "¿Cuál es el desarrollo del binomio al cubo (a ± b)³?",
        "respuesta": "(a ± b)³ = a³ ± 3a²b + 3ab² ± b³.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-028",
        "pregunta": "¿Qué es la agrupación de términos semejantes?",
        "respuesta": "Es el nombre técnico que recibe la suma y resta de expresiones algebraicas.",
        "tema": "Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-029",
        "pregunta": "¿Cuál es el desarrollo de binomios con término común (x + a)(x + b)?",
        "respuesta": "x² + (a + b)x + ab. Ej: (x+3)(x+5)=x²+8x+15.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-030",
        "pregunta": "¿Cuál es la raíz cuadrada de 169?",
        "respuesta": "13, porque 13² = 169.",
        "tema": "Aritmética",
        "asignatura": "Matemáticas"
    },

    {
        "id": "mat-031",
        "pregunta": "¿Qué condición se requiere para sumar o restar expresiones algebraicas?",
        "respuesta": "Solo se pueden operar términos semejantes (idénticos en literales y exponentes).",
        "tema": "Operaciones Algebraicas y Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-032",
        "pregunta": "¿Qué valor numérico tiene una letra sola sin coeficiente explícito (ej. x)?",
        "respuesta": "Su valor en coeficientes numéricos es siempre '1' (es decir, 1x).",
        "tema": "Operaciones Algebraicas y Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-033",
        "pregunta": "¿Existe restricción de 'términos semejantes' en la multiplicación algebraica?",
        "respuesta": "Falso. En la multiplicación se opera 'todos contra todos' indistintamente.",
        "tema": "Operaciones Algebraicas y Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-034",
        "pregunta": "¿Qué ocurre al dividir fracciones algebraicas con bases iguales?",
        "respuesta": "Los coeficientes se dividen aritméticamente y los exponentes se restan.",
        "tema": "Operaciones Algebraicas y Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-035",
        "pregunta": "¿Cuántos términos debe tener incondicionalmente el desarrollo de cualquier binomio al cubo (a ± b)³?",
        "respuesta": "Exactamente 4 términos.",
        "tema": "Operaciones Algebraicas y Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-036",
        "pregunta": "¿Qué caracteriza a una ecuación?",
        "respuesta": "Tiene signo de igualdad (=).",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-041",
        "pregunta": "¿Qué caracteriza a un polinomio?",
        "respuesta": "Es una expresión algebraica sin signo de igualdad (=).",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-037",
        "pregunta": "¿Cómo se determina el grado de una ecuación?",
        "respuesta": "Por el exponente más grande de la incógnita.",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-038",
        "pregunta": "Al cruzar el igual, ¿qué cambia en un término?",
        "respuesta": "Cambia la operación a la contraria (suma/resta, multiplicación/división).",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-039",
        "pregunta": "En despeje, si un número cruza multiplicando o dividiendo, ¿cambia su signo?",
        "respuesta": "No. El signo se conserva; solo cambia la operación.",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-040",
        "pregunta": "¿Cuál es la propiedad del producto cruzado en una proporción (a/b = c/d)?",
        "respuesta": "En una proporción a/b = c/d se cumple: a·d = c·b.",
        "tema": "Ecuaciones y Despeje",
        "asignatura": "Matemáticas"
    },
    {
        "id": "fis-001",
        "pregunta": "¿Qué es una magnitud escalar?",
        "respuesta": "Magnitud que se describe solo con valor y unidad (sin dirección ni sentido).",
        "tema": "Magnitudes",
        "asignatura": "Física"
    },
    {
        "id": "fis-014",
        "pregunta": "¿Qué es una magnitud vectorial?",
        "respuesta": "Magnitud que se describe con valor, dirección y sentido.",
        "tema": "Magnitudes",
        "asignatura": "Física"
    },
    {
        "id": "fis-002",
        "pregunta": "¿Qué es la distancia (en cinemática)?",
        "respuesta": "Longitud total de la trayectoria recorrida.",
        "tema": "Cinemática Básica",
        "asignatura": "Física"
    },
    {
        "id": "fis-015",
        "pregunta": "¿Qué es el desplazamiento (en cinemática)?",
        "respuesta": "Cambio de posición entre el punto inicial y el final, en línea recta y con dirección.",
        "tema": "Cinemática Básica",
        "asignatura": "Física"
    },
    {
        "id": "fis-003",
        "pregunta": "¿Qué es la rapidez?",
        "respuesta": "Magnitud que indica qué tan rápido ocurre un movimiento (solo magnitud).",
        "tema": "Cinemática Básica",
        "asignatura": "Física"
    },
    {
        "id": "fis-016",
        "pregunta": "¿Qué es la velocidad?",
        "respuesta": "Magnitud que indica rapidez y dirección del movimiento.",
        "tema": "Cinemática Básica",
        "asignatura": "Física"
    },
    {
        "id": "fis-004",
        "pregunta": "¿Cuáles son las tres fórmulas base de MRU?",
        "respuesta": "V=d/t, t=d/V y d=V*t.",
        "tema": "MRU",
        "asignatura": "Física"
    },
    {
        "id": "fis-005",
        "pregunta": "En velocidad relativa, ¿cuándo se suman y cuándo se restan velocidades?",
        "respuesta": "Misma dirección: se restan. Direcciones opuestas: se suman.",
        "tema": "Velocidad Relativa",
        "asignatura": "Física"
    },
    {
        "id": "fis-006",
        "pregunta": "¿Qué es la aceleración?",
        "respuesta": "Cambio de velocidad que experimenta un cuerpo en un tiempo determinado.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-017",
        "pregunta": "¿En qué unidades se mide la aceleración?",
        "respuesta": "En $m/s^2$.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-007",
        "pregunta": "¿Qué significa tener una aceleración de $10\, m/s^2$?",
        "respuesta": "Que la velocidad del cuerpo aumenta 10 m/s por cada segundo que pasa.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-008",
        "pregunta": "¿Cuáles son las 3 fórmulas fundamentales del MRUA?",
        "respuesta": "1) $a=(V_f-V_i)/t$  2) $d=V_i \\cdot t + at^2/2$  3) $V_f^2=V_i^2+2ad$.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-009",
        "pregunta": "Identificación del MRUA en gráficas de movimiento:",
        "respuesta": "Si ves una CURVA en cualquier gráfica de movimiento → MRUA. Línea recta diagonal en v-t → también MRUA.",
        "tema": "Gráficas de Movimiento",
        "asignatura": "Física"
    },
    {
        "id": "fis-010",
        "pregunta": "En gráfica d-t: ¿qué forma tiene MRU vs MRUA?",
        "respuesta": "MRU → línea diagonal recta. MRUA → curva (parábola).",
        "tema": "Gráficas de Movimiento",
        "asignatura": "Física"
    },
    {
        "id": "fis-011",
        "pregunta": "¿Qué es la caída libre y cuál es su fórmula principal?",
        "respuesta": "Caso particular del MRUA por gravedad ($g \\approx 10\, m/s^2$). $V_i=0$. Fórmula: $V=\\sqrt{2gh}$.",
        "tema": "Caída Libre",
        "asignatura": "Física"
    },
    {
        "id": "fis-012",
        "pregunta": "¿Cuáles son los 3 elementos de un vector?",
        "respuesta": "1) Magnitud (valor numérico + unidad), 2) Dirección (ángulo), 3) Sentido (adónde apunta la flecha).",
        "tema": "Vectores y Dinámica",
        "asignatura": "Física"
    },
    {
        "id": "fis-013",
        "pregunta": "Convención de signos para fuerzas vectoriales según la clase:",
        "respuesta": "Derecha → positivo (+). Izquierda → negativo (-). Misma dirección: se restan. Opuestas: se suman.",
        "tema": "Vectores y Dinámica",
        "asignatura": "Física"
    },

    // ==========================================
    
    // ==========================================
    // FÍSICA CLASE 3 (15 CONCEPTOS)
    // ==========================================
    {
        "id": "fis-018",
        "pregunta": "¿Qué diferencia al MRUA del MRU?",
        "respuesta": "En el MRUA la velocidad cambia (hay aceleración); en el MRU la velocidad es constante.",
        "tema": "Cinemática",
        "asignatura": "Física"
    },
    {
        "id": "fis-019",
        "pregunta": "Fórmula principal de la aceleración en MRUA:",
        "respuesta": "$a = (V_f - V_i)/t$.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-020",
        "pregunta": "Interpretación técnica de una aceleración de $10\,m/s^2$:",
        "respuesta": "La velocidad aumenta 10 m/s cada segundo.",
        "tema": "MRUA",
        "asignatura": "Física"
    },
    {
        "id": "fis-021",
        "pregunta": "Método de cálculo rápido para descomposición de vectores (30°, 45°, 60°):",
        "respuesta": "1) Dividir la magnitud a la mitad. 2) Multiplicar por la raíz correspondiente según el ángulo.",
        "tema": "Vectores",
        "asignatura": "Física"
    },
    {
        "id": "fis-022",
        "pregunta": "En $45^\circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
        "respuesta": "Ambas componentes se multiplican por $\sqrt{2}$.",
        "tema": "Vectores",
        "asignatura": "Física"
    },
    {
        "id": "fis-023",
        "pregunta": "En $30^\circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
        "respuesta": "La componente en X se multiplica por $\sqrt{3}$ y la componente en Y no se multiplica por raíz.",
        "tema": "Vectores",
        "asignatura": "Física"
    },
    {
        "id": "fis-024",
        "pregunta": "En $60^\circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
        "respuesta": "La componente en X no se multiplica por raíz y la componente en Y se multiplica por $\sqrt{3}$.",
        "tema": "Vectores",
        "asignatura": "Física"
    },
    {
        "id": "fis-025",
        "pregunta": "Aproximaciones usadas para raíces en el método rápido:",
        "respuesta": "$\sqrt{2}\approx 1.4$ y $\sqrt{3}\approx 1.7$.",
        "tema": "Vectores",
        "asignatura": "Física"
    },
    {
        "id": "fis-026",
        "pregunta": "Identificación de MRU en gráficas d-t y v-t:",
        "respuesta": "En d-t: línea diagonal recta. En v-t: línea horizontal.",
        "tema": "Gráficas de Movimiento",
        "asignatura": "Física"
    },
    {
        "id": "fis-027",
        "pregunta": "Criterio de identificación de MRUA en gráficas de movimiento:",
        "respuesta": "La presencia de una curva indica movimiento con aceleración (MRUA).",
        "tema": "Gráficas de Movimiento",
        "asignatura": "Física"
    },
    {
        "id": "fis-028",
        "pregunta": "¿Qué es la masa y en qué unidad se mide?",
        "respuesta": "Cantidad de materia; se mide en kilogramos (kg).",
        "tema": "Dinámica",
        "asignatura": "Física"
    },
    {
        "id": "fis-029",
        "pregunta": "¿Qué es el peso (W) y en qué unidad se mide?",
        "respuesta": "Es una fuerza asociada a la gravedad; se mide en Newtons (N).",
        "tema": "Dinámica",
        "asignatura": "Física"
    },
    {
        "id": "fis-030",
        "pregunta": "Relación entre masa y peso usando gravedad:",
        "respuesta": "$W = m\cdot g$ (con $g\approx 10\,m/s^2$ para cálculo rápido).",
        "tema": "Dinámica",
        "asignatura": "Física"
    },
    {
        "id": "fis-031",
        "pregunta": "Leyes de Newton (resumen):",
        "respuesta": "1) Inercia. 2) $F=m\cdot a$. 3) Acción-reacción: fuerzas iguales y opuestas.",
        "tema": "Leyes de Newton",
        "asignatura": "Física"
    },
    {
        "id": "fis-032",
        "pregunta": "Condiciones de equilibrio traslacional y rotacional:",
        "respuesta": "Traslacional: suma de fuerzas = 0. Rotacional: suma de torcas = 0.",
        "tema": "Equilibrio",
        "asignatura": "Física"
    },// QUÍMICA (19 CONCEPTOS)
    // ==========================================
    {
        "id": "qui-001",
        "pregunta": "¿Qué describe la ciencia de la Química?",
        "respuesta": "Describe la materia, sus propiedades, sus cambios y las variaciones energéticas asociadas.",
        "tema": "Fundamentos",
        "asignatura": "Química"
    },
    {
        "id": "qui-002",
        "pregunta": "¿Qué es la Materia?",
        "respuesta": "Todo aquello que tiene masa y volumen (ocupa un lugar en el espacio).",
        "tema": "Fundamentos",
        "asignatura": "Química"
    },
    {
        "id": "qui-003",
        "pregunta": "¿Qué es un Elemento?",
        "respuesta": "Sustancia pura formada por un solo tipo de átomo. Se identifica por tener 1 mayúscula o 1 mayúscula + 1 minúscula.",
        "tema": "Sistemas Materiales",
        "asignatura": "Química"
    },
    {
        "id": "qui-004",
        "pregunta": "¿Qué es un Compuesto?",
        "respuesta": "Sustancia pura formada por la unión de dos o más tipos de átomos diferentes. Se identifica por tener 2 o más mayúsculas.",
        "tema": "Sistemas Materiales",
        "asignatura": "Química"
    },
    {
        "id": "qui-005",
        "pregunta": "¿Qué son las Mezclas Homogéneas?",
        "respuesta": "Uniones físicas donde los componentes no se distinguen y forman una sola fase. Ej: Aire, Vino, Perfume.",
        "tema": "Sistemas Materiales",
        "asignatura": "Química"
    },
    {
        "id": "qui-006",
        "pregunta": "¿Qué son las Mezclas Heterogéneas?",
        "respuesta": "Uniones físicas donde los componentes sí se distinguen a simple vista. Ej: Agua con aceite, ensalada.",
        "tema": "Sistemas Materiales",
        "asignatura": "Química"
    },
    {
        "id": "qui-007",
        "pregunta": "¿Qué es un Coloide?",
        "respuesta": "Mezcla heterogénea con partículas tan finas que parecen homogéneas pero se ven al microscopio óptico. Ej: Leche, sangre.",
        "tema": "Coloides",
        "asignatura": "Química"
    },
    {
        "id": "qui-008",
        "pregunta": "¿Qué es el Efecto Tyndall?",
        "respuesta": "Es la dispersión de la luz a través de las partículas de un coloide, lo que permite identificarlo.",
        "tema": "Coloides",
        "asignatura": "Química"
    },
    {
        "id": "qui-009",
        "pregunta": "¿Qué tipo de sistema material es la leche sola y la leche con chocolate?",
        "respuesta": "Leche sola es Coloide. Leche con chocolate se considera Mezcla Homogénea.",
        "tema": "Coloides",
        "asignatura": "Química"
    },
    {
        "id": "qui-010",
        "pregunta": "¿Qué tipo de naturaleza tienen los estados de la materia?",
        "respuesta": "Naturaleza FÍSICA, no química.",
        "tema": "Estados de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui-011",
        "pregunta": "¿Qué caracteriza al estado Sólido?",
        "respuesta": "Fuerza de cohesión alta, forma y volumen definidos. Partículas muy juntas.",
        "tema": "Estados de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui-012",
        "pregunta": "¿Qué caracteriza al estado Líquido?",
        "respuesta": "Fuerza de cohesión baja, volumen definido, pero toma la forma del recipiente.",
        "tema": "Estados de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui-013",
        "pregunta": "¿Qué caracteriza al estado Gaseoso?",
        "respuesta": "Fuerza de cohesión nula, partículas dispersas, volumen indefinido y alta entropía.",
        "tema": "Estados de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui-014",
        "pregunta": "¿Qué es la Fusión?",
        "respuesta": "Cambio por calor de Sólido a Líquido.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },
    {
        "id": "qui-015",
        "pregunta": "¿Qué es la Evaporación?",
        "respuesta": "Cambio por calor de Líquido a Gaseoso.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },
    {
        "id": "qui-016",
        "pregunta": "¿Qué es la Sublimación Directa?",
        "respuesta": "Cambio por calor de Sólido a Gaseoso sin pasar por líquido. Ej: Hielo seco.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },
    {
        "id": "qui-017",
        "pregunta": "¿Qué es la Solidificación?",
        "respuesta": "Cambio por frío de Líquido a Sólido.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },
    {
        "id": "qui-018",
        "pregunta": "¿Qué es la Condensación?",
        "respuesta": "Cambio por frío de Gaseoso a Líquido. Ej: Rocío.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },
    {
        "id": "qui-019",
        "pregunta": "¿Qué es la Sublimación Inversa?",
        "respuesta": "Cambio por frío de Gaseoso a Sólido. Ej: Nieve, granizo.",
        "tema": "Cambios de Estado",
        "asignatura": "Química"
    },

    // ==========================================
    // LITERATURA (16 CONCEPTOS)
    // ==========================================
    {
        "id": "lit-001",
        "pregunta": "¿Cuál es la definición de Texto?",
        "respuesta": "Conjunto de enunciados que forman un mensaje coherente y ordenado con el fin de comunicar.",
        "tema": "El Texto",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-002",
        "pregunta": "¿Cuáles son los 3 elementos básicos de la comunicación?",
        "respuesta": "Emisor (envía), Receptor (recibe) y Canal (medio físico/digital).",
        "tema": "Comunicación",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-003",
        "pregunta": "¿Qué es la Propiedad de Adecuación?",
        "respuesta": "Adaptar el lenguaje al nivel o realidad del receptor (registro lingüístico).",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-004",
        "pregunta": "¿Qué es la Cabalidad en un texto?",
        "respuesta": "Significa que el texto está completo, tiene unidad de sentido y no divaga.",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-005",
        "pregunta": "¿Qué es la Coherencia?",
        "respuesta": "Es la secuencia lógica de los hechos y el sentido de las ideas.",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-006",
        "pregunta": "¿Qué es la Organización Textual?",
        "respuesta": "Se refiere a la estructura interna del texto (Inicio, Desarrollo, Final).",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-007",
        "pregunta": "¿Qué es la Disposición Espacial?",
        "respuesta": "Todo lo visual: márgenes, sangrías, tipografía y distribución de espacios.",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-008",
        "pregunta": "¿Qué propiedad de un texto se relaciona con márgenes, sangrías y tipografía?",
        "respuesta": "La disposición espacial.",
        "tema": "Propiedades Textuales",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-009",
        "pregunta": "¿Qué caracteriza al Modo Narrativo en literatura?",
        "respuesta": "Prevalecen los verbos. Relata historias en tiempo y espacio.",
        "tema": "Modos Discursivos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-010",
        "pregunta": "¿Qué caracteriza al Modo Descriptivo en literatura?",
        "respuesta": "Prevalecen los adjetivos calificativos para detallar cualidades.",
        "tema": "Modos Discursivos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-011",
        "pregunta": "¿Qué caracteriza al Modo Argumentativo en literatura?",
        "respuesta": "Usa conectores causales y primera persona plural para persuadir con razones.",
        "tema": "Modos Discursivos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-012",
        "pregunta": "¿Qué es la Subjetividad (Connotación)?",
        "respuesta": "Uso de opiniones, metáforas y sentimientos. Funciones Poética o Apelativa.",
        "tema": "Objetividad vs Subjetividad",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-013",
        "pregunta": "¿Qué es la Objetividad (Denotación)?",
        "respuesta": "Uso de hechos comprobables y datos técnicos. Función Referencial.",
        "tema": "Objetividad vs Subjetividad",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-014",
        "pregunta": "¿Cuál es el propósito del Texto Periodístico?",
        "respuesta": "Únicamente informar sobre hechos actuales (función referencial).",
        "tema": "Texto Periodístico",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-015",
        "pregunta": "¿Qué es el 'Entrada o Lead' en una noticia?",
        "respuesta": "Primer párrafo que resume: qué, quién, cómo, cuándo, dónde y por qué.",
        "tema": "Texto Periodístico",
        "asignatura": "Literatura"
    },
    {
        "id": "lit-016",
        "pregunta": "¿Qué es el Balazo o Epígrafe en una noticia?",
        "respuesta": "Frase breve antes del título que da contexto adicional.",
        "tema": "Texto Periodístico",
        "asignatura": "Literatura"
    },

    // ==========================================
    // MATEMÁTICAS (5 CONCEPTOS - DIVISION)
    // ==========================================
    {
        "id": "matd-001",
        "pregunta": "¿Cómo se dividen los coeficientes en una división algebraica?",
        "respuesta": "Se dividen de forma aritmética normal y siguen la ley de signos.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "matd-002",
        "pregunta": "¿Qué sucede con los exponentes al dividir literales con bases iguales?",
        "respuesta": "Los exponentes se restan.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "matd-003",
        "pregunta": "¿Cuál es el valor predeterminado del exponente si una literal no tiene ninguno escrito?",
        "respuesta": "El exponente siempre es igual a 1.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "matd-004",
        "pregunta": "¿En qué consiste la Regla de Anulación en fracciones algebraicas?",
        "respuesta": "Si el exponente de una literal arriba y abajo es el mismo, la literal se elimina.",
        "tema": "Tipo 1 (División)",
        "asignatura": "Matemáticas"
    },
    {
        "id": "matd-005",
        "pregunta": "¿Qué propiedad de exponentes se usa al simplificar una fracción con bases iguales (a^m/a^n)?",
        "respuesta": "Se restan los exponentes: a^m/a^n = a^(m-n). Si (m-n) es negativo, equivale a 1/a^(n-m).",
        "tema": "Tipo 1 (División)",
        "asignatura": "Matemáticas"
    },

    // ==========================================
    // ==========================================
    // MATEMÁTICAS CLASE 9 (14 CONCEPTOS)
    // ==========================================
    {
        "id": "mat9-001",
        "pregunta": "¿Qué es un binomio/polinomio en este contexto?",
        "respuesta": "Una expresión algebraica (por ejemplo, 2x + 3y), sin igualdad.",
        "tema": "Ecuación vs. Expresión",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-002",
        "pregunta": "¿Qué define a una ecuación?",
        "respuesta": "La presencia de una igualdad (=) entre dos expresiones.",
        "tema": "Ecuación vs. Expresión",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-003",
        "pregunta": "¿Cómo se determina el grado de una ecuación?",
        "respuesta": "Por el exponente más grande presente.",
        "tema": "Grado",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-004",
        "pregunta": "¿Qué grado tiene 3x^2 + 5y = 10?",
        "respuesta": "Segundo grado (el exponente mayor es 2).",
        "tema": "Grado",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-005",
        "pregunta": "¿Qué grado tiene x + y + z = 6?",
        "respuesta": "Primer grado (el exponente mayor es 1).",
        "tema": "Grado",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-006",
        "pregunta": "¿En qué consiste la verificación por sustitución de incisos en un sistema?",
        "respuesta": "Sustituir los valores propuestos en las ecuaciones y verificar que las igualdades se cumplan.",
        "tema": "Sistemas",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-007",
        "pregunta": "¿Qué condición debe cumplir el inciso correcto en un sistema de ecuaciones?",
        "respuesta": "Satisfacer todas las ecuaciones del sistema, no solo una.",
        "tema": "Sistemas",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-008",
        "pregunta": "Métodos algebraicos largos mencionados como alternativa a la verificación por incisos:",
        "respuesta": "Suma y resta, igualación y Cramer.",
        "tema": "Sistemas",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-009",
        "pregunta": "¿Qué cambia al sustituir un número negativo en una resta (por ejemplo, 2x - y con y negativo)?",
        "respuesta": "La resta se convierte en suma: 2x - (-a) = 2x + a.",
        "tema": "Sustitución y Signos",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-010",
        "pregunta": "Simplifica: 2x - (-1)",
        "respuesta": "2x + 1.",
        "tema": "Sustitución y Signos",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-011",
        "pregunta": "¿Cómo se valida una solución en un sistema 3×3?",
        "respuesta": "Sustituyendo x, y y z en cada ecuación y verificando todas las igualdades.",
        "tema": "Sistemas 3×3",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-012",
        "pregunta": "En el sistema de ejemplo, ¿la terna (2,3,1) es solución?",
        "respuesta": "Sí; al sustituirla se obtienen 6, 2 y 10 en las tres ecuaciones.",
        "tema": "Sistemas 3×3",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-013",
        "pregunta": "Criterio de descarte lógico descrito en clase:",
        "respuesta": "Si una ecuación suma positivos y el resultado es pequeño, se pueden descartar opciones con valores muy altos.",
        "tema": "Estrategias",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat9-014",
        "pregunta": "¿Por qué no se puede 'despejar' una expresión sin igualdad?",
        "respuesta": "Porque no hay una ecuación: sin signo igual no se determinan valores por despeje.",
        "tema": "Ecuación vs. Expresión",
        "asignatura": "Matemáticas"
    },
    // ESPAÑOL CLASE 2 (7 CONCEPTOS)
    // ==========================================
    {
        "id": "esp2-001",
        "pregunta": "¿Qué función del lenguaje verifica o mantiene el canal de comunicación?",
        "respuesta": "La función fática.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp2-008",
        "pregunta": "¿Qué función del lenguaje habla del código o del idioma?",
        "respuesta": "La función metalingüística.",
        "tema": "Funciones del Lenguaje",
        "asignatura": "Español"
    },
    {
        "id": "esp2-002",
        "pregunta": "¿Qué tipo de palabras predominan absolutamente en el Modo Descriptivo?",
        "respuesta": "Los adjetivos calificativos, para crear una 'imagen con palabras'.",
        "tema": "Modos Discursivos",
        "asignatura": "Español"
    },
    {
        "id": "esp2-003",
        "pregunta": "Rasgo característico de un texto argumentativo:",
        "respuesta": "Uso de conectores o nexos causales/justificantes (pero, porque, sin embargo, ya que).",
        "tema": "Modos Discursivos",
        "asignatura": "Español"
    },
    {
        "id": "esp2-004",
        "pregunta": "¿Qué es la 'Etopeya' en la descripción?",
        "respuesta": "Descripción de rasgos psicológicos, morales o costumbres de una persona.",
        "tema": "Tipos de Descripción",
        "asignatura": "Español"
    },
    {
        "id": "esp2-005",
        "pregunta": "¿Para qué sirve un pronombre?",
        "respuesta": "Para sustituir al sustantivo y evitar repeticiones innecesarias.",
        "tema": "Gramática",
        "asignatura": "Español"
    },
    {
        "id": "esp2-006",
        "pregunta": "¿Qué son los Verboides (Verbos Muertos)?",
        "respuesta": "Formas no personales del verbo (Infinitivo, Gerundio, Participio) que NO pueden ser el núcleo del predicado sólamente por sí solas.",
        "tema": "Gramática",
        "asignatura": "Español"
    },
    {
        "id": "esp2-007",
        "pregunta": "¿Qué caracteriza a un verbo conjugado?",
        "respuesta": "Está flexionado en persona, número y tiempo (presente, pasado o futuro).",
        "tema": "El Verbo",
        "asignatura": "Español"
    },

    // ==========================================
    
    // ==========================================
    // ESPAÑOL CLASE 4 (17 CONCEPTOS)
    // ==========================================
    {
        "id": "esp4-001",
        "pregunta": "¿Qué es el núcleo del sujeto (NS)?",
        "respuesta": "El sustantivo o pronombre que funciona como centro del sujeto.",
        "tema": "Sintaxis",
        "asignatura": "Español"
    },
    {
        "id": "esp4-002",
        "pregunta": "¿Qué criterio se usa para identificar el núcleo del sujeto cuando hay artículos y adjetivos?",
        "respuesta": "Se localiza el sustantivo o pronombre del sujeto, descartando artículos y adjetivos que solo lo acompañan.",
        "tema": "Sintaxis",
        "asignatura": "Español"
    },
    {
        "id": "esp4-003",
        "pregunta": "¿Qué es el núcleo del predicado (NP)?",
        "respuesta": "El verbo conjugado de la oración.",
        "tema": "Sintaxis",
        "asignatura": "Español"
    },
    {
        "id": "esp4-004",
        "pregunta": "En una perífrasis verbal, ¿cómo se identifica el núcleo del predicado?",
        "respuesta": "Se considera integrado por los dos verbos que forman la perífrasis.",
        "tema": "Sintaxis",
        "asignatura": "Español"
    },
    {
        "id": "esp4-005",
        "pregunta": "¿Qué es el predicado nominal?",
        "respuesta": "Predicado cuyo verbo principal es copulativo (ser, estar o parecer).",
        "tema": "Predicado",
        "asignatura": "Español"
    },
    {
        "id": "esp4-006",
        "pregunta": "¿Qué es el predicado verbal?",
        "respuesta": "Predicado cuyo núcleo es un verbo no copulativo que expresa una acción o un estado no copulativo.",
        "tema": "Predicado",
        "asignatura": "Español"
    },
    {
        "id": "esp4-007",
        "pregunta": "En una construcción pasiva con 'ser' + participio, ¿qué función cumple 'ser'?",
        "respuesta": "Funciona como auxiliar de una acción expresada por el participio.",
        "tema": "Voz pasiva",
        "asignatura": "Español"
    },
    {
        "id": "esp4-008",
        "pregunta": "¿Qué es el objeto directo (OD)?",
        "respuesta": "Complemento que responde a ¿Qué? + verbo.",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-009",
        "pregunta": "¿Con qué pronombres puede sustituirse el objeto directo (OD)?",
        "respuesta": "Con lo, la, los, las.",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-010",
        "pregunta": "¿Qué es el objeto indirecto (OI)?",
        "respuesta": "Complemento que responde a ¿A quién? o ¿Para quién? + verbo.",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-011",
        "pregunta": "¿Con qué pronombres puede sustituirse el objeto indirecto (OI)?",
        "respuesta": "Con le, les, me, te, se.",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-012",
        "pregunta": "¿Qué es el complemento circunstancial (CC)?",
        "respuesta": "Aporta información adicional sobre la acción (por ejemplo, lugar, tiempo, modo o instrumento) y no siempre es obligatorio.",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-013",
        "pregunta": "Tipos de complemento circunstancial vistos en clase:",
        "respuesta": "Lugar (¿Dónde?), tiempo (¿Cuándo?), modo (¿Cómo?) e instrumento (¿Con qué?).",
        "tema": "Complementos",
        "asignatura": "Español"
    },
    {
        "id": "esp4-014",
        "pregunta": "¿Qué es el complemento agente?",
        "respuesta": "Complemento propio de la voz pasiva que suele introducirse con la preposición 'por'.",
        "tema": "Voz pasiva",
        "asignatura": "Español"
    },
    {
        "id": "esp4-015",
        "pregunta": "¿Qué es la aposición?",
        "respuesta": "Información explicativa del sujeto que suele aparecer entre comas.",
        "tema": "Modificadores del sujeto",
        "asignatura": "Español"
    },
    {
        "id": "esp4-016",
        "pregunta": "¿Qué es el complemento adnominal?",
        "respuesta": "Modificador del sustantivo que inicia con una preposición para calificarlo.",
        "tema": "Modificadores del sujeto",
        "asignatura": "Español"
    },
    {
        "id": "esp4-017",
        "pregunta": "¿Qué es la polisemia?",
        "respuesta": "Propiedad por la cual una palabra o una oración puede tener múltiples significados.",
        "tema": "Semántica",
        "asignatura": "Español"
    },// HISTORIA UNIVERSAL (12 CONCEPTOS)
    // ==========================================
    {
        "id": "univ-001",
        "pregunta": "¿Cuál es un propósito de estudiar la historia?",
        "respuesta": "Conocer las culturas del pasado para entender nuestro presente.",
        "tema": "Fundamentos de Historia",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-002",
        "pregunta": "¿Cuándo comienza formalmente la historia de la humanidad?",
        "respuesta": "Cuando el hombre comienza a vivir en comunidad por necesidad de supervivencia.",
        "tema": "Fundamentos de Historia",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-003",
        "pregunta": "¿Quién es considerado el 'Padre de la Historia'?",
        "respuesta": "El griego Heródoto, autor de 'Los Nueve Libros de la Historia'.",
        "tema": "Fundamentos de Historia",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-004",
        "pregunta": "¿Qué es una Fuente Subjetiva o Directa?",
        "respuesta": "Es aquella creada específicamente con el propósito consciente de dar testimonio o registro de una época (Crónicas, diarios, documentos).",
        "tema": "Fuentes de la Historia",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-005",
        "pregunta": "¿Qué es una Fuente Objetiva o Indirecta?",
        "respuesta": "Son restos materiales (armas, vasijas, ruinas) que NO tenían el fin original de registrar la historia, pero hoy nos dan información comprobable.",
        "tema": "Fuentes de la Historia",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-006",
        "pregunta": "Según la periodización tradicional, el hecho que marca el paso de la Edad Antigua a la Edad Media es:",
        "respuesta": "La caída del Imperio Romano de Occidente (Roma).",
        "tema": "Periodización",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-007",
        "pregunta": "El hito que divide a la Edad Media de la Edad Moderna es:",
        "respuesta": "La toma de Constantinopla o Caída del Imperio Romano de Oriente (1453).",
        "tema": "Periodización",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-008",
        "pregunta": "¿Qué acontecimiento marca el inicio de la Edad Contemporánea?",
        "respuesta": "La Revolución Francesa (1789).",
        "tema": "Periodización",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-009",
        "pregunta": "¿Qué plantea la escuela del Historicismo?",
        "respuesta": "Enfatiza que cada suceso histórico es único e irrepetible; la historia determina el desarrollo humano.",
        "tema": "Corrientes Historiográficas",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-010",
        "pregunta": "¿En qué se enfoca el Positivismo histórico?",
        "respuesta": "Busca la máxima objetividad rigurosa aplicando el método científico, comprobación de pruebas y acumulación de datos exactos.",
        "tema": "Corrientes Historiográficas",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-011",
        "pregunta": "¿Quién es el autor del Materialismo Histórico?",
        "respuesta": "Karl Marx.",
        "tema": "Corrientes Historiográficas",
        "asignatura": "Historia Universal"
    },
    {
        "id": "univ-012",
        "pregunta": "¿Cómo explica la historia el Materialismo Histórico?",
        "respuesta": "Explica la evolución de la humanidad no por sus ideas, sino por sus modos de producción (economía) y su constante lucha de clases socioeconómicas.",
        "tema": "Corrientes Historiográficas",
        "asignatura": "Historia Universal"
    },

    // ==========================================
    // HISTORIA DE MÉXICO - CLASE 3 (10 CONCEPTOS)
    // ==========================================
    {
        "id": "hist3-001",
        "pregunta": "¿Qué fue el Abrazo de Acatempan?",
        "respuesta": "El encuentro entre Vicente Guerrero e Iturbide el 10 de febrero de 1821, que unió fuerzas insurgentes y realistas para consumar la independencia.",
        "tema": "Etapas Finales de la Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-002",
        "pregunta": "¿Qué estableció el Plan de Iguala (Tres Garantías)?",
        "respuesta": "Propuso el igualitarismo racial y el fin del sistema de castas como base del nuevo México independiente.",
        "tema": "Etapas Finales de la Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-003",
        "pregunta": "¿Qué acontecimiento consumó formalmente la Independencia el 27 de septiembre de 1821?",
        "respuesta": "La entrada triunfal del Ejército Trigarante a la Ciudad de México.",
        "tema": "Etapas Finales de la Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-004",
        "pregunta": "¿Qué fue el Plan de Casa Mata y para qué sirvió?",
        "respuesta": "Fue el pronunciamiento militar (Santa Anna y Guerrero) que logró derrocar el Imperio de Agustín de Iturbide (Agustín I).",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-005",
        "pregunta": "¿Quién fue el primer presidente de México y qué años gobernó?",
        "respuesta": "Guadalupe Victoria (1824-1829).",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-006",
        "pregunta": "¿Qué estableció la Constitución de 1824?",
        "respuesta": "El sistema federal, la religión católica como única y los tres poderes: Ejecutivo, Legislativo y Judicial.",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-007",
        "pregunta": "¿Qué fue la Guerra de los Pasteles (1838-1839) y qué implicó para México?",
        "respuesta": "La primera intervención francesa en México. Obligó a México a pagar una indemnización de 600,000 pesos.",
        "tema": "Conflictos Internacionales",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-008",
        "pregunta": "¿Con qué tratado concluye la guerra México-EE.UU. (1846-1848)?",
        "respuesta": "Tratado de Guadalupe Hidalgo (1848). México perdió más de la mitad de su territorio: California, Arizona, Nuevo México, etc.",
        "tema": "Conflictos Internacionales",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-009",
        "pregunta": "¿Qué defendían los liberales (federalistas) en México Independiente?",
        "respuesta": "Poder a los estados y separación Iglesia-Estado.",
        "tema": "Federalismo vs. Centralismo",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-011",
        "pregunta": "¿Qué defendían los conservadores (centralistas) en México Independiente?",
        "respuesta": "Imperio o gobierno central y privilegios para la Iglesia.",
        "tema": "Federalismo vs. Centralismo",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist3-010",
        "pregunta": "¿Qué fue la Constitución de 1836 (Siete Leyes) y quién la impulsó?",
        "respuesta": "Una constitución centralista impulsada por Santa Anna, que concentraba el poder en una sola persona.",
        "tema": "Federalismo vs. Centralismo",
        "asignatura": "Historia de México"
    },

    // ==========================================
    // QUÍMICA CLASE 2 (7 CONCEPTOS)
    // ==========================================
    {
        "id": "qui2-001",
        "pregunta": "¿Qué es un Cambio Físico?",
        "respuesta": "Alteración del estado o apariencia de la materia que NO afecta su composición interna. Es reversible.",
        "tema": "Cambios de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui2-002",
        "pregunta": "¿Qué es un Cambio Químico?",
        "respuesta": "Alteración de la composición interna de la materia para formar nuevas sustancias. Es irreversible en su mayoría.",
        "tema": "Cambios de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui2-003",
        "pregunta": "¿Qué naturaleza tienen los cambios de estado (fusión, evaporación, etc.)?",
        "respuesta": "Son procesos físicos; no cambian la composición de la sustancia.",
        "tema": "Cambios de la Materia",
        "asignatura": "Química"
    },
    {
        "id": "qui2-004",
        "pregunta": "¿Dónde se encuentran los protones y neutrones?",
        "respuesta": "En el núcleo.",
        "tema": "Estructura Atómica",
        "asignatura": "Química"
    },
    {
        "id": "qui2-008",
        "pregunta": "¿Qué característica del átomo determinan principalmente los protones y neutrones?",
        "respuesta": "La masa central del átomo (por ser las partículas más pesadas).",
        "tema": "Estructura Atómica",
        "asignatura": "Química"
    },
    {
        "id": "qui2-005",
        "pregunta": "¿Cuál es el postulado principal del modelo atómico de John Dalton?",
        "respuesta": "El átomo es una esfera sólida, lisa, indivisible e indestructible.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui2-006",
        "pregunta": "¿Qué descubrió J.J. Thomson?",
        "respuesta": "El electrón.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui2-009",
        "pregunta": "¿Mediante qué experimento se descubrió el electrón (J.J. Thomson)?",
        "respuesta": "El experimento de los rayos catódicos.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui2-007",
        "pregunta": "¿Cómo dibujaba Thomson al átomo en su 'Modelo del Budín de Pasas'?",
        "respuesta": "Como una masa de carga positiva con electrones (carga negativa) incrustados en ella.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },

    // ==========================================
    // ==========================================
    // QUÍMICA CLASE 3 (18 CONCEPTOS)
    // ==========================================
    {
        "id": "qui3-001",
        "pregunta": "¿Cuál es la carga del protón ($p^+$)?",
        "respuesta": "Positiva.",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-002",
        "pregunta": "¿Cuál es la carga del neutrón ($n^0$)?",
        "respuesta": "Neutra (sin carga).",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-003",
        "pregunta": "¿Cuál es la carga del electrón ($e^-$)?",
        "respuesta": "Negativa.",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-004",
        "pregunta": "¿Dónde se encuentran protones y neutrones?",
        "respuesta": "En el núcleo.",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-005",
        "pregunta": "¿Dónde se localizan los electrones?",
        "respuesta": "En orbitales alrededor del núcleo.",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-006",
        "pregunta": "¿Cuál es la partícula subatómica más ligera?",
        "respuesta": "El electrón.",
        "tema": "Partículas Subatómicas",
        "asignatura": "Química"
    },
    {
        "id": "qui3-007",
        "pregunta": "¿Quién introdujo la palabra 'átomo' como indivisible?",
        "respuesta": "Demócrito.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-008",
        "pregunta": "¿Qué caracteriza el modelo atómico de Dalton (nombre popular)?",
        "respuesta": "Bola de billar: esfera sólida y hueca (sin estructura interna).",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-009",
        "pregunta": "¿Qué descubrió Thomson?",
        "respuesta": "El electrón.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-010",
        "pregunta": "¿Con qué experimento se asocia Thomson en la clase?",
        "respuesta": "Rayos catódicos.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-011",
        "pregunta": "¿Cómo describe Thomson al átomo en el modelo del budín de pasas?",
        "respuesta": "Como una masa positiva con electrones incrustados.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-012",
        "pregunta": "¿Qué descubrió Rutherford y qué experimento se asocia a su modelo?",
        "respuesta": "El protón y el núcleo; lámina de oro.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-013",
        "pregunta": "¿Qué aportó Bohr según la clase?",
        "respuesta": "Siete niveles de energía (órbitas).",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-014",
        "pregunta": "¿Qué partícula descubrió Chadwick?",
        "respuesta": "El neutrón.",
        "tema": "Modelos Atómicos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-015",
        "pregunta": "¿Qué explicó Schrödinger sobre los orbitales?",
        "respuesta": "Que son zonas de probabilidad (subniveles s, p, d, f).",
        "tema": "Orbitales",
        "asignatura": "Química"
    },
    {
        "id": "qui3-016",
        "pregunta": "¿Cuál es la capacidad máxima de electrones en los subniveles S, P, D y F?",
        "respuesta": "S=2, P=6, D=10, F=14.",
        "tema": "Orbitales",
        "asignatura": "Química"
    },
    {
        "id": "qui3-017",
        "pregunta": "¿Qué indica el número cuántico principal (n) y qué valores toma en la clase?",
        "respuesta": "Indica el nivel de energía o cercanía al núcleo; valores enteros del 1 al 7.",
        "tema": "Números Cuánticos",
        "asignatura": "Química"
    },
    {
        "id": "qui3-018",
        "pregunta": "¿Qué relación letra–valor se usa para el número cuántico azimutal (l)?",
        "respuesta": "s=0, p=1, d=2, f=3.",
        "tema": "Números Cuánticos",
        "asignatura": "Química"
    },
    // BIOLOGÍA CLASE 1 (8 CONCEPTOS)
    // ==========================================
    {
        "id": "bio-001",
        "pregunta": "¿Qué es la célula?",
        "respuesta": "Es la unidad estructural y funcional de los seres vivos.",
        "tema": "Fundamentos Celulares",
        "asignatura": "Biología"
    },
    {
        "id": "bio-002",
        "pregunta": "¿Qué representa la célula en los niveles de organización?",
        "respuesta": "La unidad estructural y funcional de los seres vivos.",
        "tema": "Fundamentos Celulares",
        "asignatura": "Biología"
    },
    {
        "id": "bio-009",
        "pregunta": "¿Qué representa el átomo en los niveles de organización?",
        "respuesta": "La unidad básica de la materia.",
        "tema": "Fundamentos Celulares",
        "asignatura": "Biología"
    },
    {
        "id": "bio-003",
        "pregunta": "¿Quién nombró a la célula y qué observó?",
        "respuesta": "Robert Hooke; observó láminas de corcho con estructuras similares a celdas.",
        "tema": "Historia Celular",
        "asignatura": "Biología"
    },
    {
        "id": "bio-004",
        "pregunta": "¿Qué establece el postulado de origen de la teoría celular?",
        "respuesta": "Toda célula proviene de otra célula preexistente (Rudolf Virchow).",
        "tema": "Teoría Celular",
        "asignatura": "Biología"
    },
    {
        "id": "bio-005",
        "pregunta": "¿Qué significa el acrónimo CHONPS?",
        "respuesta": "Carbono, Hidrógeno, Oxígeno, Nitrógeno, Fósforo y Azufre.",
        "tema": "Bioelementos",
        "asignatura": "Biología"
    },
    {
        "id": "bio-006",
        "pregunta": "¿Cuál es la fórmula de la glucosa?",
        "respuesta": "C6H12O6.",
        "tema": "Carbohidratos",
        "asignatura": "Biología"
    },
    {
        "id": "bio-007",
        "pregunta": "¿Qué tipo de enlace une a los carbohidratos?",
        "respuesta": "El enlace glucosídico.",
        "tema": "Biomoléculas",
        "asignatura": "Biología"
    },
    {
        "id": "bio-008",
        "pregunta": "¿Qué tipo de enlace une a los lípidos?",
        "respuesta": "El enlace éster.",
        "tema": "Biomoléculas",
        "asignatura": "Biología"
    },
    {
        "id": "bio-010",
        "pregunta": "¿Qué tipo de enlace une a las proteínas (aminoácidos)?",
        "respuesta": "El enlace peptídico.",
        "tema": "Biomoléculas",
        "asignatura": "Biología"
    },

    // ==========================================
    // LITERATURA CLASE 2 (8 CONCEPTOS)
    // ==========================================
    {
        "id": "lit2-001",
        "pregunta": "¿Cuál es el propósito principal de un texto periodístico?",
        "respuesta": "Informar de forma clara y jerarquizada sobre un hecho de interés social.",
        "tema": "Texto Periodístico",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-002",
        "pregunta": "¿Qué es el Balazo (antetítulo o epígrafe) en una nota informativa?",
        "respuesta": "Texto breve previo al título que introduce el tema de forma general.",
        "tema": "Estructura de la Noticia",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-003",
        "pregunta": "¿Qué función cumple la Entrada o Lead?",
        "respuesta": "Es la sinopsis inicial que responde qué, quién, cómo, cuándo, dónde y por qué.",
        "tema": "Estructura de la Noticia",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-004",
        "pregunta": "¿Cuáles son los procesos técnicos de la nota informativa?",
        "respuesta": "Selección, jerarquización, omisión y reiteración.",
        "tema": "Procesos Periodísticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-005",
        "pregunta": "¿Qué caracteriza a la editorial (género periodístico)?",
        "respuesta": "Representa al medio y no se firma.",
        "tema": "Géneros Periodísticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-009",
        "pregunta": "¿Qué caracteriza al artículo de opinión (género periodístico)?",
        "respuesta": "Lleva firma individual.",
        "tema": "Géneros Periodísticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-006",
        "pregunta": "¿Qué define al texto dramático?",
        "respuesta": "Está escrito en diálogo y se crea para ser representado en escena ante un público.",
        "tema": "Texto Dramático",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-007",
        "pregunta": "¿Qué es un soliloquio?",
        "respuesta": "Cuando el personaje habla consigo mismo.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-010",
        "pregunta": "¿Qué es un monólogo?",
        "respuesta": "Cuando el personaje habla para otros o para el público.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit2-008",
        "pregunta": "¿Cuál es la secuencia de la acción dramática?",
        "respuesta": "Desarrollo (planteamiento), nudo, clímax y desenlace.",
        "tema": "Acción Dramática",
        "asignatura": "Literatura"
    },

    // ==========================================
    // ==========================================
    // LITERATURA CLASE 3 (20 CONCEPTOS)
    // ==========================================
    {
        "id": "lit3-001",
        "pregunta": "¿Cuál es el objetivo primordial del texto dramático?",
        "respuesta": "La representación ante un público.",
        "tema": "Género Dramático",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-002",
        "pregunta": "¿Qué rasgo técnico distingue al género dramático respecto al narrador?",
        "respuesta": "No tiene narrador; la historia progresa por la interacción de los personajes.",
        "tema": "Género Dramático",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-003",
        "pregunta": "¿Qué es el diálogo en un texto dramático?",
        "respuesta": "Intercambio verbal entre dos o más personajes.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-004",
        "pregunta": "¿Qué es el monólogo en un texto dramático?",
        "respuesta": "El personaje habla solo, pero proyecta su discurso hacia el público para informar o explicar.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-005",
        "pregunta": "¿Qué es el soliloquio en un texto dramático?",
        "respuesta": "El personaje habla consigo mismo (introspección) y exterioriza pensamientos íntimos.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-006",
        "pregunta": "¿Qué son las acotaciones?",
        "respuesta": "Instrucciones del dramaturgo sobre movimientos, tono de voz o escenografía.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-007",
        "pregunta": "¿Cómo se identifican visualmente las acotaciones en un texto dramático?",
        "respuesta": "Suelen ir entre paréntesis o en cursivas.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-008",
        "pregunta": "¿Qué es la exposición/desarrollo en la acción dramática?",
        "respuesta": "Presentación de personajes y contexto (equilibrio inicial).",
        "tema": "Acción Dramática",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-009",
        "pregunta": "¿Qué es el nudo en la acción dramática?",
        "respuesta": "Aparición del conflicto que rompe la estabilidad.",
        "tema": "Acción Dramática",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-010",
        "pregunta": "¿Qué es el clímax en la acción dramática?",
        "respuesta": "Punto álgido o de máxima tensión; momento decisivo antes de la resolución.",
        "tema": "Acción Dramática",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-011",
        "pregunta": "¿Qué es el desenlace en la acción dramática?",
        "respuesta": "Resolución del conflicto y fin de la obra.",
        "tema": "Acción Dramática",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-012",
        "pregunta": "¿Qué es el protagonista?",
        "respuesta": "Centro de la acción; busca alcanzar un objetivo.",
        "tema": "Personajes",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-013",
        "pregunta": "¿Qué es el antagonista?",
        "respuesta": "Fuerza opuesta al protagonista; impide que logre sus deseos.",
        "tema": "Personajes",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-014",
        "pregunta": "¿Qué es un personaje secundario?",
        "respuesta": "Apoya a los personajes principales sin ser el foco de la trama.",
        "tema": "Personajes",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-015",
        "pregunta": "¿Qué es un personaje incidental/ambiental?",
        "respuesta": "Personaje de apoyo que da verosimilitud (por ejemplo, un mesero o transeúnte).",
        "tema": "Personajes",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-016",
        "pregunta": "¿Qué caracteriza a la tragedia como subgénero dramático?",
        "respuesta": "Tono solemne; el protagonista sucumbe ante un destino inevitable; busca la catarsis.",
        "tema": "Subgéneros Dramáticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-017",
        "pregunta": "¿Qué es la catarsis (en tragedia)?",
        "respuesta": "Purificación de emociones.",
        "tema": "Subgéneros Dramáticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-018",
        "pregunta": "¿Qué caracteriza a la comedia como subgénero dramático?",
        "respuesta": "Tono ligero o satírico; critica vicios humanos; termina en final feliz o reconciliación.",
        "tema": "Subgéneros Dramáticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-019",
        "pregunta": "¿Qué caracteriza al drama como subgénero dramático?",
        "respuesta": "Tono realista; mezcla elementos trágicos y cómicos; se asemeja a la vida cotidiana.",
        "tema": "Subgéneros Dramáticos",
        "asignatura": "Literatura"
    },
    {
        "id": "lit3-020",
        "pregunta": "¿Qué marca formal suele indicar organización dialógica en un texto dramático?",
        "respuesta": "Nombres de personajes en mayúsculas seguidos de guion o dos puntos.",
        "tema": "Organización Dialógica",
        "asignatura": "Literatura"
    },
    // HISTORIA DE MÉXICO - CLASE 4 (10 CONCEPTOS)
    // ==========================================
    {
        "id": "hist4-001",
        "pregunta": "¿Con qué zona geográfica colinda la frontera norte de Mesoamérica?",
        "respuesta": "Con Aridoamérica.",
        "tema": "Mesoamérica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-002",
        "pregunta": "¿Qué antropólogo alemán acuñó históricamente el concepto de 'Mesoamérica'?",
        "respuesta": "Paul Kirchhoff.",
        "tema": "Mesoamérica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-003",
        "pregunta": "¿Cuáles fueron los 3 centros ceremoniales más importantes de la cultura Olmeca?",
        "respuesta": "La Venta, San Lorenzo y Tres Zapotes.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-004",
        "pregunta": "Menciona una aportación destacada de los mayas:",
        "respuesta": "El uso matemático del cero.",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-011",
        "pregunta": "Menciona una aportación destacada de los mayas:",
        "respuesta": "La predicción exacta de eclipses (calendarios).",
        "tema": "Culturas Prehispánicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-005",
        "pregunta": "¿Cuál fue la estructura de gobierno predominante de las sociedades mesoamericanas?",
        "respuesta": "El gobierno Teocrático (los dioses regían y validaban a los gobernantes).",
        "tema": "Mesoamérica",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-006",
        "pregunta": "¿Qué actividad impulsó la economía de la Nueva España?",
        "respuesta": "La minería.",
        "tema": "La Nueva España",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-012",
        "pregunta": "¿Qué dinastía implementó las Reformas Borbónicas en el siglo XVIII?",
        "respuesta": "La dinastía Borbón.",
        "tema": "La Nueva España",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-007",
        "pregunta": "Menciona una causa externa del movimiento de Independencia de México:",
        "respuesta": "La Ilustración (priorizaba el pensamiento racional).",
        "tema": "Movimiento de Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-013",
        "pregunta": "Menciona una causa externa del movimiento de Independencia de México:",
        "respuesta": "La Revolución Francesa.",
        "tema": "Movimiento de Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-008",
        "pregunta": "¿En qué se caracterizó fundamentalmente la etapa de Resistencia de la independencia?",
        "respuesta": "En el pronunciado debilitamiento de los insurgentes, en donde la lucha sobrevivió a base de la 'guerra de guerrillas'.",
        "tema": "Movimiento de Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-009",
        "pregunta": "¿Por qué los criollos fueron una pieza central como causa interna para estallar la independencia?",
        "respuesta": "Porque a pesar de ser españoles de sangre, por el hecho de nacer en América estaban relegados del poder y los altos cargos políticos.",
        "tema": "Causas Independencia",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-010",
        "pregunta": "En el tema de primeros gobernantes, ¿qué cargo ocupó Agustín de Iturbide?",
        "respuesta": "Emperador.",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist4-014",
        "pregunta": "En el tema de primeros gobernantes, ¿qué cargo ocupó Guadalupe Victoria?",
        "respuesta": "Primer presidente (República Federal).",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    // ==========================================
    // ==========================================
    // HISTORIA DE MÉXICO - CLASE 5 (30 CONCEPTOS)
    // ==========================================
    {
        "id": "hist5-001",
        "pregunta": "¿Cómo se describe el contexto económico de México tras 1821?",
        "respuesta": "Crisis, baja productividad y deuda externa.",
        "tema": "México Independiente",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-002",
        "pregunta": "¿Qué logia masónica se asocia con conservadores y centralistas?",
        "respuesta": "La Logia Escocesa.",
        "tema": "Logias Masónicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-003",
        "pregunta": "¿Qué logia se asocia con liberales federalistas apoyados por Estados Unidos?",
        "respuesta": "La Logia Yorquina.",
        "tema": "Logias Masónicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-004",
        "pregunta": "¿A qué logia pertenecía Guadalupe Victoria según la clase?",
        "respuesta": "A la Logia Yorquina.",
        "tema": "Logias Masónicas",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-005",
        "pregunta": "¿Qué fue la Revolución de Ayutla (1854) y qué la motivó?",
        "respuesta": "Movimiento contra Santa Anna motivado por su dictadura y la Venta de la Mesilla (1853).",
        "tema": "Reforma Liberal",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-006",
        "pregunta": "¿Qué fue el Plan de Ayutla y cuál fue su objetivo?",
        "respuesta": "Documento para destituir y desterrar a Santa Anna.",
        "tema": "Reforma Liberal",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-007",
        "pregunta": "¿Quiénes proclamaban el Plan de Ayutla según la clase?",
        "respuesta": "Juan Álvarez e Ignacio Comonfort.",
        "tema": "Reforma Liberal",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-008",
        "pregunta": "¿Qué carácter político tiene la Constitución de 1857?",
        "respuesta": "Liberal.",
        "tema": "Constitución de 1857",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-009",
        "pregunta": "¿Qué tipo de república restablece la Constitución de 1857 según la clase?",
        "respuesta": "República federal, representativa y democrática.",
        "tema": "Constitución de 1857",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-010",
        "pregunta": "¿Qué derechos consagra la Constitución de 1857 según la clase?",
        "respuesta": "Garantías o derechos individuales.",
        "tema": "Constitución de 1857",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-011",
        "pregunta": "¿Con qué no debe confundirse la Constitución de 1857?",
        "respuesta": "Con la Constitución de 1917, enfocada en garantías sociales.",
        "tema": "Constitución de 1857",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-012",
        "pregunta": "¿Qué buscaban las Leyes de Reforma en términos generales?",
        "respuesta": "La separación entre Iglesia y Estado.",
        "tema": "Leyes de Reforma",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-013",
        "pregunta": "¿Qué establece la Ley Juárez y quién la impulsa?",
        "respuesta": "Restringe privilegios a Iglesia y militares en asuntos civiles; Benito Juárez.",
        "tema": "Leyes de Reforma",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-014",
        "pregunta": "¿Qué establece la Ley Lerdo y quién la impulsa?",
        "respuesta": "Desamortización de bienes del clero; Sebastián Lerdo de Tejada.",
        "tema": "Leyes de Reforma",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-015",
        "pregunta": "¿Qué establece la Ley Iglesias y quién la impulsa?",
        "respuesta": "Prohíbe el cobro obligatorio de servicios parroquiales; José María Iglesias.",
        "tema": "Leyes de Reforma",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-016",
        "pregunta": "¿Cuál fue la causa inmediata de la Intervención Francesa según la clase?",
        "respuesta": "La suspensión de pagos de la deuda externa decretada por Juárez en 1861.",
        "tema": "Intervención Francesa",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-017",
        "pregunta": "¿Qué fue la Convención (Tratado) de Londres en este contexto?",
        "respuesta": "Alianza de Inglaterra, España y Francia para cobrar la deuda a México.",
        "tema": "Intervención Francesa",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-018",
        "pregunta": "¿Qué ocurrió el 5 de mayo de 1862 y quién lideró el evento?",
        "respuesta": "Batalla de Puebla, liderada por Ignacio Zaragoza.",
        "tema": "Intervención Francesa",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-019",
        "pregunta": "¿Quién gobernó el Segundo Imperio Mexicano?",
        "respuesta": "Maximiliano de Habsburgo.",
        "tema": "Segundo Imperio",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-020",
        "pregunta": "¿Qué se menciona sobre la ideología de Maximiliano en el Segundo Imperio?",
        "respuesta": "Tuvo un perfil liberal: mantuvo las Leyes de Reforma y dio derechos a campesinos.",
        "tema": "Segundo Imperio",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-021",
        "pregunta": "¿Qué fue el Plan de la Noria (1871)?",
        "respuesta": "Levantamiento de Porfirio Díaz contra Juárez bajo la bandera de la no reelección; fracasó.",
        "tema": "República Restaurada",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-022",
        "pregunta": "¿Qué fue el Plan de Tuxtepec (1876) y qué resultado tuvo?",
        "respuesta": "Levantamiento de Porfirio Díaz contra la reelección de Lerdo de Tejada; triunfó, expulsó a Lerdo y Díaz asumió la presidencia.",
        "tema": "Porfiriato",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-023",
        "pregunta": "¿Qué participación se menciona de Porfirio Díaz en la Batalla de Puebla?",
        "respuesta": "Tuvo una participación relevante.",
        "tema": "Intervención Francesa",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-024",
        "pregunta": "¿Qué ocurrió con Maximiliano en 1867 según la clase?",
        "respuesta": "Francia retiró sus tropas, Maximiliano quedó aislado y fue fusilado.",
        "tema": "Segundo Imperio",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-025",
        "pregunta": "¿Qué sucedió tras la caída del Segundo Imperio?",
        "respuesta": "Juárez regresó al poder en la República Restaurada.",
        "tema": "República Restaurada",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-026",
        "pregunta": "¿Qué ocurrió en 1872 con Benito Juárez y quién asumió la presidencia?",
        "respuesta": "Juárez murió por causas naturales y asumió Sebastián Lerdo de Tejada.",
        "tema": "República Restaurada",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-027",
        "pregunta": "¿Qué obra se atribuye a Sebastián Lerdo de Tejada según la clase?",
        "respuesta": "Inauguró la primera línea de ferrocarril Ciudad de México-Veracruz.",
        "tema": "República Restaurada",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-028",
        "pregunta": "¿Qué establece el Tratado de Guadalupe Hidalgo según la clase?",
        "respuesta": "Finaliza la guerra con Estados Unidos y cede los territorios del norte.",
        "tema": "Tratados",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-029",
        "pregunta": "¿Qué fue el Tratado McLane-Ocampo según la clase?",
        "respuesta": "Intento liberal de conceder tránsito a Estados Unidos a cambio de apoyo; no fue ratificado.",
        "tema": "Tratados",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist5-030",
        "pregunta": "¿Qué fue el Tratado Mon-Almonte según la clase?",
        "respuesta": "Acuerdo firmado por conservadores para obtener apoyo de España.",
        "tema": "Tratados",
        "asignatura": "Historia de México"
    },
    // HISTORIA UNIVERSAL - CLASE 2
    // ==========================================
    {
        "id": "hu2-001",
        "pregunta": "¿Qué clase social se fortaleció en la transición del feudalismo al capitalismo?",
        "respuesta": "La burguesía, que buscó poder político y apoyó movimientos culturales para restar fuerza a la realeza y el clero.",
        "tema": "Transición Feudalismo",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-002",
        "pregunta": "¿Cuál es el concepto central del Renacimiento?",
        "respuesta": "El humanismo (antropocentrismo), que revaloró las culturas grecolatinas y puso al hombre en el centro, abandonando el teocentrismo.",
        "tema": "El Renacimiento",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-003",
        "pregunta": "¿Qué es la Ilustración o Siglo de las Luces?",
        "respuesta": "Movimiento del Siglo XVIII fundado en la Razón como herramienta para alcanzar el conocimiento, rechazar el dogma y progresar.",
        "tema": "La Ilustración",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-004",
        "pregunta": "¿Cuál fue la aportación de Montesquieu en la Ilustración?",
        "respuesta": "La división de los poderes (Ejecutivo, Legislativo y Judicial) detallada en su obra 'El espíritu de las leyes'.",
        "tema": "Pensamiento Ilustrado",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-005",
        "pregunta": "¿Cuál fue la aportación de Rousseau en 'El Contrato Social'?",
        "respuesta": "El principio de la Soberanía popular, estableciendo que el poder político original radica y pertenece al pueblo.",
        "tema": "Pensamiento Ilustrado",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-006",
        "pregunta": "¿Qué fue el Despotismo Ilustrado?",
        "respuesta": "Estrategia absolutista dictando 'Todo para el pueblo, pero sin el pueblo'. El rey promovía reformas modernas pero evitaba dar derechos democráticos.",
        "tema": "Despotismo Ilustrado",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-007",
        "pregunta": "¿Cuál es la causa económica prioritaria del estallido de la Independencia de las 13 colonias?",
        "respuesta": "Los excesivos impuestos comerciales (ej. al timbre y al té) y el monopolio forzoso británico sobre territorio americano.",
        "tema": "Las 13 Colonias",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-008",
        "pregunta": "¿Qué motivó la alianza y apoyo francés hacia las 13 colonias contra los ingleses?",
        "respuesta": "La venganza de Francia ante su derrota castigadora contra Gran Bretaña durante la Guerra de los Siete Años.",
        "tema": "Las 13 Colonias",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-009",
        "pregunta": "¿Qué significado histórico directo e inmediato tuvo el éxito de la Independencia de Estados Unidos?",
        "respuesta": "Funcionó como inspiración contundente para desatar la Revolución Francesa y la liberación política de América Latina.",
        "tema": "Las 13 Colonias",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-010",
        "pregunta": "¿Qué es un dogma?",
        "respuesta": "Una verdad absolutista impuesta ciegamente.",
        "tema": "Conceptos Clave",
        "asignatura": "Historia Univ."
    },
    {
        "id": "hu2-011",
        "pregunta": "¿Qué es el oscurantismo?",
        "respuesta": "Bloqueo científico en gran parte atado a la Edad Media.",
        "tema": "Conceptos Clave",
        "asignatura": "Historia Univ."
    },
    // ==========================================
    // GEOGRAFÍA - CLASE 1
    // ==========================================
    {
        "id": "geo1-001",
        "pregunta": "¿Qué es la Geografía según su definición técnica para la UNAM?",
        "respuesta": "Es la ciencia mixta que estudia las interrelaciones o interacciones entre los factores físicos, biológicos (bióticos) y sociales (humanos).",
        "tema": "Conceptos Básicos",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-002",
        "pregunta": "¿Qué caracteriza a un hecho geográfico en el tiempo?",
        "respuesta": "Ocurre lentamente o es de larga duración (ej. montañas).",
        "tema": "Hechos y Fenómenos",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-008",
        "pregunta": "¿Qué caracteriza a un fenómeno geográfico en el tiempo?",
        "respuesta": "Es rápido, corto e impetuoso (ej. huracán, sismo).",
        "tema": "Hechos y Fenómenos",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-003",
        "pregunta": "¿A qué principio metodológico de la geografía corresponde la localización?",
        "respuesta": "A determinar la ubicación exacta de un lugar mediante el uso de coordenadas cartográficas.",
        "tema": "Principios Metodológicos",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-004",
        "pregunta": "¿Qué rama de la geografía estudia exclusivamente procesos naturales como el relieve (Geomorfología) y sin intervención humana?",
        "respuesta": "La Geografía Física.",
        "tema": "Ramas de la Geografía",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-005",
        "pregunta": "¿Qué es un Geoide según el tema de ubicación espacial en la Tierra?",
        "respuesta": "Es la forma técnica de la Tierra: achatada por los polos y ensanchada en el Ecuador por la rotación.",
        "tema": "Ubicación Espacial",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-006",
        "pregunta": "¿A qué corresponden las líneas de Latitud y cuál es su grado base o referencia de cero?",
        "respuesta": "A los Paralelos (líneas horizontales). Su base de 0° es el Ecuador.",
        "tema": "Ubicación Espacial",
        "asignatura": "Geografía"
    },
    {
        "id": "geo1-007",
        "pregunta": "¿A qué corresponden las líneas de Longitud y cuál es su grado base o referencia de cero?",
        "respuesta": "A los Meridianos (líneas verticales). Su base de 0° es el Meridiano de Greenwich.",
        "tema": "Ubicación Espacial",
        "asignatura": "Geografía"
    }
];