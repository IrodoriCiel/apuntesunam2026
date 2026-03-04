const flashcardsDatabase = [
    // ==========================================
    // ESPAÑOL (10 CONCEPTOS)
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
        "pregunta": "¿Cuál es la 'Regla de Oro' de las culturas mesoamericanas?",
        "respuesta": "Religión Politeísta (muchos dioses) y Gobierno Teocrático (gobernados por la religión/sacerdotes).",
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
        "pregunta": "¿Qué aportaron los Mayas?",
        "respuesta": "Dominio de las matemáticas (uso del cero) y la astronomía (estudio de eclipses).",
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
        "pregunta": "¿Quiénes fueron los Toltecas y Mexicas?",
        "respuesta": "Toltecas: Tula y Atlantes. Mexicas: Fundaron Tenochtitlan en 1325; último Tlatoani fue Cuauhtémoc.",
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
        "pregunta": "¿Por qué ganaron los españoles la Conquista?",
        "respuesta": "Por alianzas con los Tlaxcaltecas (enemigos de los Mexicas) y el factor biológico (pandemia de viruela).",
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
        "pregunta": "¿Qué personajes clave debes memorizar de la Conquista?",
        "respuesta": "Hernán Cortés, Moctezuma, Cuitláhuac y Cuauhtémoc.",
        "tema": "Resumen Memorización",
        "asignatura": "Historia de México"
    },
    {
        "id": "hist-015",
        "pregunta": "¿Quién fue el primer y el último virrey de la Nueva España?",
        "respuesta": "Primer virrey: Antonio de Mendoza. Último virrey: Juan O'Donojú (firmó los Tratados de Córdoba).",
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
        "pregunta": "¿Cuáles son las causas EXTERNAS de la Independencia de México?",
        "respuesta": "La Independencia de los Estados Unidos (1776) y la Revolución Francesa (1789), que difundieron los ideales de libertad e inspiraron a los criollos.",
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
        "pregunta": "¿Cuál es la regla de oro para sumar o restar términos?",
        "respuesta": "Solo puedes sumar o restar si son términos semejantes. Si no lo son, se pasan igual al resultado.",
        "tema": "Agrupación",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-007",
        "pregunta": "¿Cómo se suman números con Signos Iguales?",
        "respuesta": "Se suman los números y se deja el signo que tienen. (Ej: -5 - 3 = -8).",
        "tema": "Aritmética Algebraica",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-008",
        "pregunta": "¿Cómo se suman números con Signos Diferentes?",
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
        "pregunta": "¿Cómo se identifican los Binomios Conjugados?",
        "respuesta": "Son dos binomios idénticos, pero uno suma (+) y el otro resta (-). Ej: (x+2)(x-2).",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-017",
        "pregunta": "¿Cuál es el atajo para resolver Binomios Conjugados?",
        "respuesta": "Multiplicar Primero por Primero y Segundo por Segundo. El signo central siempre es negativo.",
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
        "respuesta": "Para elevar un binomio (a ± b) a cualquier potencia rápida y correctamente.",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-021",
        "pregunta": "¿Cómo se construyen los niveles del Triángulo de Pascal?",
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
        "pregunta": "¿Cómo se resuelve rápidamente un binomio al cubo (a ± b)³ en el examen?",
        "respuesta": "Cotejando signos (alternados si es resta) y calculando solo el primer y último término.",
        "tema": "Estrategia de Examen",
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
        "pregunta": "¿Cuál es el resultado de (x + 3)(x + 5)?",
        "respuesta": "x² + 8x + 15 (Binomios con término común).",
        "tema": "Productos Notables",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-030",
        "pregunta": "¿Cuál es la raíz cuadrada de 169?",
        "respuesta": "13. Es una raíz exacta que debes dominar para el examen.",
        "tema": "Aritmética",
        "asignatura": "Matemáticas"
    },

    // ==========================================
    // QUÍMICA (19 CONCEPTOS)
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
        "pregunta": "¿Cuál es la trampa de la leche sola vs leche con chocolate?",
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
        "pregunta": "¿Cuál es la diferencia entre Organización Textual y Disposición Espacial?",
        "respuesta": "Organización es la estructura lógica interna; Disposición es la apariencia visual externa.",
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
        "id": "mat-001",
        "pregunta": "¿Cómo se dividen los coeficientes en una división algebraica?",
        "respuesta": "Se dividen de forma aritmética normal y siguen la ley de signos.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-002",
        "pregunta": "¿Qué sucede con los exponentes al dividir literales con bases iguales?",
        "respuesta": "Los exponentes se restan.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-003",
        "pregunta": "¿Cuál es el valor predeterminado del exponente si una literal no tiene ninguno escrito?",
        "respuesta": "El exponente siempre es igual a 1.",
        "tema": "Reglas de División",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-004",
        "pregunta": "¿En qué consiste la Regla de Anulación en fracciones algebraicas?",
        "respuesta": "Si el exponente de una literal arriba y abajo es el mismo, la literal se elimina.",
        "tema": "Tipo 1 (División)",
        "asignatura": "Matemáticas"
    },
    {
        "id": "mat-005",
        "pregunta": "¿Qué atajo puedes aplicar en fracciones algebraicas para evitar exponentes negativos?",
        "respuesta": "Resta el exponente mayor menos el menor y ubica el resultado donde estaba el mayor.",
        "tema": "Tipo 1 (División)",
        "asignatura": "Matemáticas"
    }
];
