export const quimica = {
    "id": "quimica",
    "nombre": "Química",
    "clases": [
        {
            "title": "Apuntes de Química",
            "titleIconLeft": "fa-flask",
            "titleIconRight": "fa-atom",
            "titleStyle": "color: #059669;",
            "mainTopicId": "mainTopicQuimica",
            "mainTopicClass": "topic-2",
            "mainTopicTitle": "Química",
            "mainTopicIcon1": "fa-vial",
            "mainTopicIcon2": "fa-vials",
            "mainTopicSubtitle": "Clase 1: Fundamentos y Materia",
            "branches": [
                {
                    "id": "nodes-qui-1",
                    "topicIdx": 1,
                    "title": "1. Info del Examen",
                    "icon": "fa-clipboard-list",
                    "subnodes": [
                        {
                            "icon": "fa-triangle-exclamation",
                            "delay": "0.1s",
                            "title": "Nota de Examen",
                            "content": "<p><b>No necesitas memorizarla toda.</b> El examen te proporcionará todos los datos necesarios (número atómico, masa, protones, etc.) dentro del mismo reactivo para realizar los ejercicios.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui-2",
                    "topicIdx": 2,
                    "title": "2. Conceptos Fundamentales",
                    "icon": "fa-microscope",
                    "subnodes": [
                        {
                            "icon": "fa-flask",
                            "delay": "0.1s",
                            "title": "¿Qué es la Química?",
                            "content": "<p><b>Definición:</b> Es la ciencia que describe la materia y sus propiedades, los cambios que experimenta y los cambios energéticos asociados.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Las palabras clave para identificar el concepto son <b>'ciencia'</b> y <b>'describe la materia/propiedades'</b>.</div>"
                        },
                        {
                            "icon": "fa-cube",
                            "delay": "0.2s",
                            "title": "¿Qué es la Materia?",
                            "content": "<p><b>Definición:</b> Todo aquello que tiene masa y volumen (ocupa un lugar en el espacio). Está compuesta por átomos y partículas subatómicas.</p><p><b>Propiedades:</b> Color, sabor, dureza, elasticidad, temperatura y densidad.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui-3",
                    "topicIdx": 3,
                    "title": "3. Sistemas Materiales",
                    "icon": "fa-gem",
                    "subnodes": [
                        {
                            "icon": "fa-a",
                            "delay": "0.1s",
                            "title": "Sustancias Puras",
                            "content": "<p><b>Elementos:</b> Un solo tipo de átomo (sustancia pura). Hay 118 y están en la tabla periódica.</p><p><b>Compuestos:</b> Combinación de dos o más tipos de átomos (elementos) que crean sustancias nuevas (ej. H<sub>2</sub>O).</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br><b>Elemento:</b> Símbolo con 1 mayúscula (ej. K, N) o 1 mayúscula + 1 minúscula (ej. Li, Na, Mg).<br><b>Compuesto:</b> Símbolo con 2 o más letras mayúsculas juntas (ej. NaOH, HCl). ¡Esta es la trampa!</div>"
                        },
                        {
                            "icon": "fa-blender",
                            "delay": "0.2s",
                            "title": "Mezclas (Uniones Físicas)",
                            "content": "<p><b>Homogéneas:</b> Sus componentes no se distinguen a simple vista (forman una sola fase).<br><b>Ejemplos:</b> Aire, bronce (aleación), perfumes, agua con sal, vino.</p><p><b>Heterogéneas:</b> Composición no uniforme; sus componentes se distinguen a simple vista (forman fases físicas distintas).<br><b>Ejemplos:</b> Agua con aceite, ensalada, pizza, pozole.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui-4",
                    "topicIdx": 4,
                    "title": "4. Coloides (El Limbo)",
                    "icon": "fa-droplet",
                    "subnodes": [
                        {
                            "icon": "fa-eye-slash",
                            "delay": "0.1s",
                            "title": "Definición",
                            "content": "<p>Son mezclas <b>heterogéneas</b> donde las partículas son tan finas que se distribuyen uniformemente, pareciendo homogéneas a simple vista.</p><p><b>Dato de examen:</b> Sus componentes solo se ven bajo un <b>microscopio óptico</b>.</p><p><b>Ejemplos de cajón:</b> Sangre, leche, mayonesa, niebla, humo, gelatina, vidrios de colores.</p>"
                        },
                        {
                            "icon": "fa-skull-crossbones",
                            "delay": "0.2s",
                            "title": "<i class='fa-solid fa-triangle-exclamation'></i> La Trampa de la UNAM",
                            "content": "<p>Suelen mezclar coloides con mezclas homogéneas en los incisos para confundirte.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Si en el examen dice <b>'leche sola'</b>, es un coloide. Si dice <b>'leche con chocolate'</b>, ya se considera una mezcla homogénea (porque ya estás uniendo dos sustancias de forma uniforme).</div>"
                        },
                        {
                            "icon": "fa-lightbulb",
                            "delay": "0.3s",
                            "title": "Efecto Tyndall",
                            "content": "<p>Es la <b>dispersión de la luz</b> a través de las partículas.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Si te preguntan cómo <b>identificar o hacer visible</b> un sistema coloidal, la respuesta es gracias al Efecto Tyndall.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui-5",
                    "topicIdx": 1,
                    "title": "5. Estados Físicos",
                    "icon": "fa-temperature-half",
                    "subnodes": [
                        {
                            "icon": "fa-circle-exclamation",
                            "delay": "0.1s",
                            "title": "Nota Importante",
                            "content": "<p>Los estados de la materia son formas <b>FÍSICAS</b>, no químicas. ¡Ojo con esa palabra en los incisos!</p>"
                        },
                        {
                            "icon": "fa-icicles",
                            "delay": "0.2s",
                            "title": "Sólido",
                            "content": "<p><b>Fuerza de Cohesión (Atracción):</b> Alta (Partículas muy juntas).<br><b>Características:</b> Forma y volumen definido. No se comprimen.<br><b>Analogía:</b> Metro en la mañana (unidos todos).</p>"
                        },
                        {
                            "icon": "fa-water",
                            "delay": "0.3s",
                            "title": "Líquido",
                            "content": "<p><b>Fuerza de Cohesión:</b> Baja (Partículas algo separadas).<br><b>Características:</b> Volumen definido; forma del recipiente. Fluidos.<br><b>Analogía:</b> Metro a las 3 PM (hay espacio pero te topas).</p>"
                        },
                        {
                            "icon": "fa-cloud",
                            "delay": "0.4s",
                            "title": "Gaseoso",
                            "content": "<p><b>Fuerza de Cohesión:</b> Nula (Partículas dispersas).<br><b>Características:</b> Volumen indefinido. Alta entropía (desorden).<br><b>Analogía:</b> Niños de secundaria / Metro de noche.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui-6",
                    "topicIdx": 2,
                    "title": "6. Cambios de Estado",
                    "icon": "fa-fire",
                    "subnodes": [
                        {
                            "icon": "fa-thermometer-half",
                            "delay": "0.1s",
                            "title": "Tip General",
                            "content": "<p>Todos dependen de cambios en la <b>temperatura</b> y la <b>presión</b>.</p>"
                        },
                        {
                            "icon": "fa-sun",
                            "delay": "0.2s",
                            "title": "Cambios por Calor",
                            "content": "<p><b>Fusión:</b> Sólido → Líquido (Hielo derritiéndose).</p><p><b>Evaporación:</b> Líquido → Gaseoso (Agua hirviendo).</p><p><b>Sublimación Directa:</b> Sólido → Gaseoso (Sin pasar por líquido). <i>Ejemplos: Hielo seco, pastillas aromatizantes de baño.</i></p>"
                        },
                        {
                            "icon": "fa-snowflake",
                            "delay": "0.3s",
                            "title": "Cambios por Frío",
                            "content": "<p><b>Solidificación:</b> Líquido → Sólido (Hacer hielos / Cera de vela enfriándose).</p><p><b>Condensación:</b> Gaseoso → Líquido (Lentes empañados / Vaho al hablar en el frío). <i>Ojo: Requiere temperaturas bajas.</i></p><p><b>Sublimación Inversa:</b> Gaseoso → Sólido. <i>Ejemplos: Granizo, nieve.</i></p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/HiDDPOqpLGk",
            "id": "content-quimica-1",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "Si un reactivo tiene la fórmula 'NaOH', estamos hablando de:",
                        "opciones": [
                            "Una mezcla homogénea.",
                            "Un elemento.",
                            "Un coloide.",
                            "Un compuesto."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "Si tiene dos o más letras mayúsculas se trata de un compuesto que está uniendo químicamente distintos elementos."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Cuál es el nombre del fenómeno físico que hace visible un sistema coloidal mediante la dispersión de la luz?",
                        "opciones": [
                            "Efecto Invernadero.",
                            "Efecto Doppler.",
                            "Efecto Tyndall.",
                            "Entropía."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El Efecto Tyndall es exactamente la dispersión de la luz que permite identificar o hacer visible las partículas de un coloide (como la niebla iluminada por faros)."
                    },
                    {
                        "numero": 3,
                        "pregunta": "El estado de la materia que típicamente presenta volumen indefinido y alta fuerza de repulsión (entropía/desorden) es:",
                        "opciones": [
                            "Plasma.",
                            "Líquido.",
                            "Sólido.",
                            "Gaseoso."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "En el estado gaseoso, la fuerza de cohesión es prácticamente nula y las partículas están muy dispersas, causando que el gas ocupe todo el volumen que pueda."
                    },
                    {
                        "numero": 4,
                        "pregunta": "El proceso en el que el hielo seco pasa de estado sólido directamente a estado gaseoso se llama:",
                        "opciones": [
                            "Evaporación.",
                            "Sublimación.",
                            "Condensación.",
                            "Fusión."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La sublimación directa es el cambio de sólido a gaseoso omitiendo pasar por la fase líquida (como ocurre con el hielo seco o pastillas de baño)."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Identifica un ejemplo de cambio químico en la vida cotidiana:",
                        "opciones": [
                            "Evaporación de agua.",
                            "Quema de papel (combustión).",
                            "Disolución de azúcar.",
                            "Cortar metal."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La combustión es un cambio químico porque altera la naturaleza interna de la materia, transformando el papel en cenizas y gases (CO2)."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "El bronce es un ejemplo de:",
                        "opciones": [
                            "Elemento químico.",
                            "Compuesto químico.",
                            "Mezcla homogénea.",
                            "Mezcla heterogénea."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El bronce es una aleación (mezcla sólida homogénea). La clase lo menciona explícitamente como ejemplo de mezcla homogénea, junto con el aire y el agua con sal."
                    },
                    {
                        "numero": 2,
                        "pregunta": "La clase menciona que si te preguntan cómo identificar o hacer visible un sistema coloidal, la respuesta es gracias al:",
                        "opciones": [
                            "Efecto Invernadero.",
                            "Efecto Doppler.",
                            "Efecto Tyndall.",
                            "Microscopio electrónico."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El Efecto Tyndall es la dispersión de la luz a través de las partículas del coloide. La clase lo señala como la respuesta exacta ante cualquier pregunta de identificación de coloides."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Es el cambio de estado de la materia que ocurre cuando una sustancia sólida pasa directamente a gas, omitiendo el estado líquido:",
                        "opciones": [
                            "Condensación.",
                            "Fusión.",
                            "Sublimación directa.",
                            "Evaporación."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La sublimación directa (Sólido → Gaseoso) salta el estado líquido. La clase menciona como ejemplos: el hielo seco y las pastillas aromatizantes de baño."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Según la clase, ¿cuál de los siguientes cambios de estado requiere frío y va de estado gaseoso a estado líquido?",
                        "opciones": [
                            "Fusión.",
                            "Sublimación directa.",
                            "Evaporación.",
                            "Condensación."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "La condensación (Gaseoso → Líquido) requiere temperaturas bajas. La clase da como ejemplos: los lentes empañados y el vaho al hablar en el frío."
                    },
                    {
                        "numero": 5,
                        "pregunta": "La clase explica que la trampa de la UNAM es mezclar coloides con mezclas homogéneas. Si el examen te da la opción 'leche con chocolate', ¿cómo la clasificarías?",
                        "opciones": [
                            "Coloide, porque la leche siempre es coloide.",
                            "Mezcla heterogénea, porque se ven dos fases.",
                            "Mezcla homogénea, porque ya se están uniendo dos sustancias de forma uniforme.",
                            "Elemento, porque no tiene reacción química."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La clase dice exactamente: si dice 'leche sola', es coloide. Pero si dice 'leche con chocolate', ya se considera una mezcla homogénea porque estás uniendo dos sustancias de forma uniforme."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Química",
            "titleIconLeft": "fa-flask",
            "titleIconRight": "fa-atom",
            "titleStyle": "color: #059669;",
            "mainTopicId": "mainTopicQuimica2",
            "mainTopicClass": "topic-2",
            "mainTopicTitle": "Química",
            "mainTopicIcon1": "fa-atom",
            "mainTopicIcon2": "fa-microscope",
            "mainTopicSubtitle": "Clase 2: Cambios Físicos, Químicos y Estructura Atómica",
            "branches": [
                {
                    "id": "nodes-qui2-1",
                    "topicIdx": 1,
                    "title": "1. Cambios Físicos",
                    "icon": "fa-icicles",
                    "subnodes": [
                        {
                            "icon": "fa-book",
                            "delay": "0.1s",
                            "title": "Definición y Características",
                            "content": "<p><b>Definición:</b> Alteran solo el estado o la apariencia, pero <b>no</b> la composición interna. No se forman sustancias nuevas.</p><p><b>Características:</b> Son procesos reversibles (la materia puede volver a su estado original).</p>"
                        },
                        {
                            "icon": "fa-list-check",
                            "delay": "0.2s",
                            "title": "Ejemplos de Examen",
                            "content": "<p>Cortar papel, disolver azúcar o sal en agua, y todos los cambios de estado (evaporación, fusión, sublimación).</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui2-2",
                    "topicIdx": 2,
                    "title": "2. Cambios Químicos",
                    "icon": "fa-fire",
                    "subnodes": [
                        {
                            "icon": "fa-book",
                            "delay": "0.1s",
                            "title": "Definición y Características",
                            "content": "<p><b>Definición:</b> Alteran la composición interna de la materia. Los átomos se reorganizan para formar sustancias nuevas con propiedades distintas.</p><p><b>Características:</b> Son procesos irreversibles en su mayoría.</p>"
                        },
                        {
                            "icon": "fa-list-check",
                            "delay": "0.2s",
                            "title": "Ejemplos de Examen",
                            "content": "<p>Combustión (quemar algo), digestión, oxidación (un clavo oxidado), putrefacción y fotosíntesis.</p><div class='exam-tip'><i class='fa-solid fa-triangle-exclamation'></i> <b>TRAMPA DEL LENGUAJE:</b><br>En los incisos, fíjate si dice \"forma física\" o \"forma química\". Los estados de la materia (sólido, líquido, gas) son siempre formas <b>físicas</b>.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui2-3",
                    "topicIdx": 3,
                    "title": "3. Estructura Atómica",
                    "icon": "fa-atom",
                    "subnodes": [
                        {
                            "icon": "fa-microscope",
                            "delay": "0.1s",
                            "title": "El Átomo y el Núcleo",
                            "content": "<p>El átomo es la unidad más pequeña de la materia que conserva sus propiedades.</p><p><b>Núcleo:</b> Es el centro del átomo y la parte más pesada. Contiene protones y neutrones.</p><p><b>Orbitales (Órbitas):</b> Regiones alrededor del núcleo donde se mueven los electrones. Su número depende de la energía y posición del elemento en la tabla.</p>"
                        },
                        {
                            "icon": "fa-scale-balanced",
                            "delay": "0.2s",
                            "title": "Partículas Subatómicas",
                            "content": "<ul><li><b>Protón ($p^+$):</b> Carga positiva. Se ubica en el núcleo. <b>Define al elemento.</b></li><li><b>Neutrón ($n^0$):</b> Carga neutra. Se ubica en el núcleo. Actúa como \"pegamento\" o comodín.</li><li><b>Electrón ($e^-$):</b> Carga negativa. Se ubica en los orbitales. Es la partícula más ligera.</li></ul><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>REGLA MNEMOTÉCNICA:</b><br>El núcleo es la parte más pesada del átomo (donde están protones y neutrones). Los electrones se quedan afuera por ser los más ligeros.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui2-4",
                    "topicIdx": 4,
                    "title": "4. Modelos Atómicos",
                    "icon": "fa-timeline",
                    "subnodes": [
                        {
                            "icon": "fa-cubes",
                            "delay": "0.1s",
                            "title": "1. John Dalton",
                            "content": "<p><b>Concepto:</b> El átomo es una esfera sólida, lisa, indivisible e indestructible.</p><p><b>Aporte principal:</b> Fue el primer científico en fundamentar la teoría atómica con bases experimentales.</p><p><b>Dato:</b> Según Dalton, todos los átomos de un mismo elemento son idénticos entre sí.</p>"
                        },
                        {
                            "icon": "fa-cookie-bite",
                            "delay": "0.2s",
                            "title": "2. J.J. Thomson",
                            "content": "<p><b>Aporte principal:</b> Descubrió el electrón ($e^-$) mediante el experimento de los <b>Rayos Catódicos</b>.</p><p><b>Modelo (Budín de Pasas):</b> Describe al átomo como una gran masa de carga positiva con electrones incrustados negativamente (como chispas en una galleta).</p>"
                        },
                        {
                            "icon": "fa-flask",
                            "delay": "0.3s",
                            "title": "Dato Adicional de Examen",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-brain'></i> <b>ELEMENTO VS COMPUESTO:</b><br>Recuerda que el <b>Antimonio ($Sb$)</b> es un elemento de la tabla periódica (número atómico 51), no un compuesto químico.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/gTedF1q6gPk",
            "id": "content-quimica-2",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Qué ocurre a nivel molecular durante un cambio físico?",
                        "opciones": [
                            "Los átomos se reorganizan formando algo nuevo.",
                            "La composición interna no se altera.",
                            "Se vuelve un proceso siempre irreversible.",
                            "Ocurre una combustión acelerada."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En un cambio físico, solo se altera el estado o la apariencia de la materia, pero nunca su composición interna."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿La fusión del hielo es un ejemplo de cambio químico o físico?",
                        "opciones": [
                            "Químico, porque altera su temperatura.",
                            "Físico, porque solo es un cambio de estado reversible.",
                            "Químico, porque genera una reacción.",
                            "Físico, porque crea nuevas sustancias."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Todos los cambios de estado (como la fusión) son cambios físicos, ya que la materia solo cambia su apariencia y puede regresar a su estado original (son reversibles)."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿A qué científico se le atribuye el primer modelo atómico con bases experimentales, describiendo al átomo como una esfera sólida?",
                        "opciones": [
                            "J.J. Thomson.",
                            "Niels Bohr.",
                            "John Dalton.",
                            "Rutherford."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "John Dalton fue pionero en fundamentar la teoría atómica, conceptualizando al átomo como una esfera lisa, indivisible e indestructible."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Identifica la carga eléctrica de un neutrón ($n^0$):",
                        "opciones": [
                            "Carga positiva.",
                            "Carga neutra.",
                            "Carga negativa.",
                            "Carga alternada."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Como su nombre indica y gracias a la mnemotécnica de clase, el neutrón ($n^0$) posee una carga neutra y actúa como 'pegamento' en el núcleo."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Con qué nombre se popularizó el modelo atómico de J.J. Thomson?",
                        "opciones": [
                            "Modelo Planetario.",
                            "Esfera Indestructible.",
                            "Nube de Electrones.",
                            "Budín de Pasas."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "Thomson ilustró al átomo como una gran masa positiva con los electrones incrustados ordenadamente en ella, similar a un budín de pasas."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "De acuerdo con la nota de clase, ¿cuál de los siguientes fenómenos constituye explícitamente un cambio químico por ser mayoritariamente irreversible?",
                        "opciones": [
                            "Evaporar alcohol etílico.",
                            "Disolver azúcar en agua caliente.",
                            "La putrefacción de una manzana.",
                            "Romper una hoja de papel."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Los cambios químicos alteran la composición interna y son mayoritariamente irreversibles. La putrefacción, la combustión, digestión y oxidación son los clásicos ejemplos de examen."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Al analizar la estructura de un átomo desconocido, el científico debe localizar los protones. ¿A qué región deberá observar y qué característica define a esa región?",
                        "opciones": [
                            "A los orbitales, porque son la parte más pesada del átomo.",
                            "Al núcleo, que es la parte más ligera.",
                            "A los orbitales, porque es donde se mueve el electrón.",
                            "Al núcleo, que es la parte central y más pesada del átomo."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "La regla mnemotécnica de la clase especifica: El núcleo es el centro del átomo y la región con mayor peso, ya que ahí se alojan protones y neutrones."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Qué afirmación es congruente respecto a los postulados del modelo de John Dalton?",
                        "opciones": [
                            "Confirmó que el átomo presentaba electrones en órbitas.",
                            "Postuló que todos los átomos de un mismo elemento son idénticos entre sí.",
                            "Demostró la existencia del núcleo mediante rayos catódicos.",
                            "Rechazó la existencia de la materia como algo indivisible."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Uno de los datos experimentales más puntuales aportados por Dalton es que el átomo era indivisible y, además, los átomos del mismo elemento compartían exactamente las mismas propiedades."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Qué aportación puntual se logró gracias al experimento de los Rayos Catódicos documentado en clase?",
                        "opciones": [
                            "El hallazgo de la carga neutra.",
                            "El descubrimiento del núcleo del átomo.",
                            "El descubrimiento del electrón ($e^-$).",
                            "La división del átomo."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "J.J. Thomson efectuó el famoso experimento de los Rayos Catódicos para demostrar contundentemente el descubrimiento de la partícula más ligera: el electrón."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Si un inciso de examen te pregunta por un compuesto químico y entre las opciones se encuentra el Antimonio ($Sb$), de acuerdo con la trampa de la clase, ¿qué debes inferir del Antimonio?",
                        "opciones": [
                            "Es una mezcla homogénea.",
                            "Es un compuesto complejo.",
                            "Es un elemento puro de la tabla periódica.",
                            "Es un isótopo del bismuto."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Como se señaló en la sección de datos adicionales: el Antimonio (Sb) apareció en simulacros reales y es vital recordar que NO es un compuesto, sino un elemento puro (número atómico 51)."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Química",
            "titleIconLeft": "fa-flask",
            "titleIconRight": "fa-atom",
            "titleStyle": "color: #059669;",
            "mainTopicId": "mainTopicQuimica3",
            "mainTopicClass": "topic-2",
            "mainTopicTitle": "Química",
            "mainTopicIcon1": "fa-atom",
            "mainTopicIcon2": "fa-book-open",
            "mainTopicSubtitle": "Clase 3: Partículas Subatómicas, Modelos Atómicos y Números Cuánticos",
            "branches": [
                {
                    "id": "nodes-qui3-1",
                    "topicIdx": 1,
                    "title": "1. Partículas Subatómicas y Cargas",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-plus",
                            "delay": "0.1s",
                            "title": "Protón ($p^+$)",
                            "content": "<p><b>Carga:</b> Positiva.</p><p><b>Ubicación:</b> Núcleo (la región más pesada).</p>"
                        },
                        {
                            "icon": "fa-circle-minus",
                            "delay": "0.2s",
                            "title": "Neutrón ($n^0$)",
                            "content": "<p><b>Carga:</b> Neutra (sin carga).</p><p><b>Ubicación:</b> Núcleo, junto con los protones.</p>"
                        },
                        {
                            "icon": "fa-minus",
                            "delay": "0.3s",
                            "title": "Electrón ($e^-$)",
                            "content": "<p><b>Carga:</b> Negativa.</p><p><b>Ubicación:</b> En orbitales alrededor del núcleo.</p><div class='exam-tip'><i class='fa-solid fa-feather'></i> <b>NOTA DE MEMORIA:</b><br>El electrón es la partícula más ligera; por ello se localiza fuera del núcleo.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui3-2",
                    "topicIdx": 2,
                    "title": "2. Cronología de Modelos Atómicos",
                    "icon": "fa-timeline",
                    "subnodes": [
                        {
                            "icon": "fa-scroll",
                            "delay": "0.1s",
                            "title": "Demócrito (Grecia)",
                            "content": "<p><b>Aporte:</b> Introdujo el término <b>átomo</b> (indivisible). Fue una propuesta filosófica, no científica.</p>"
                        },
                        {
                            "icon": "fa-circle",
                            "delay": "0.2s",
                            "title": "Dalton",
                            "content": "<p><b>Primer modelo con bases científicas.</b></p><p><b>Modelo (Bola de billar):</b> Esfera sólida y hueca (sin estructura interna).</p>"
                        },
                        {
                            "icon": "fa-cookie-bite",
                            "delay": "0.3s",
                            "title": "Thomson",
                            "content": "<p><b>Aporte:</b> Descubrió el electrón.</p><p><b>Experimento:</b> Rayos catódicos.</p><p><b>Modelo (Budín de pasas):</b> Masa positiva con electrones incrustados (analogía: galleta con chispas).</p>"
                        },
                        {
                            "icon": "fa-bullseye",
                            "delay": "0.4s",
                            "title": "Rutherford",
                            "content": "<p><b>Aporte:</b> Descubrió el protón y el núcleo.</p><p><b>Experimento:</b> Lámina de oro.</p><p><b>Modelo:</b> Sistema planetario.</p>"
                        },
                        {
                            "icon": "fa-sun",
                            "delay": "0.5s",
                            "title": "Bohr",
                            "content": "<p><b>Aporte:</b> Introdujo 7 niveles de energía (órbitas).</p><p><b>Modelo:</b> Sistema solar.</p>"
                        },
                        {
                            "icon": "fa-circle-dot",
                            "delay": "0.6s",
                            "title": "Chadwick",
                            "content": "<p><b>Aporte:</b> Descubrió el neutrón, completando el núcleo del modelo de Bohr.</p>"
                        },
                        {
                            "icon": "fa-cloud",
                            "delay": "0.7s",
                            "title": "Schrödinger",
                            "content": "<p><b>Aporte:</b> Explicó los orbitales ($s, p, d, f$) como zonas de probabilidad.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui3-3",
                    "topicIdx": 3,
                    "title": "3. Orbitales Atómicos (Subniveles)",
                    "icon": "fa-house-chimney",
                    "subnodes": [
                        {
                            "icon": "fa-house",
                            "delay": "0.1s",
                            "title": "Definición",
                            "content": "<p>Los <b>orbitales</b> son regiones donde se localizan los electrones. Se identifican con las letras <b>S, P, D, F</b>.</p>"
                        },
                        {
                            "icon": "fa-users",
                            "delay": "0.2s",
                            "title": "Capacidad de electrones",
                            "content": "<p><b>Patrón:</b> Van de 4 en 4.</p><ul><li><b>S:</b> 2 electrones.</li><li><b>P:</b> 6 electrones.</li><li><b>D:</b> 10 electrones.</li><li><b>F:</b> 14 electrones.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui3-4",
                    "topicIdx": 4,
                    "title": "4. Números Cuánticos (Identidad del Electrón)",
                    "icon": "fa-hashtag",
                    "subnodes": [
                        {
                            "icon": "fa-1",
                            "delay": "0.1s",
                            "title": "Principal ($n$)",
                            "content": "<p><b>Qué indica:</b> Nivel de energía o cercanía al núcleo.</p><p><b>Valores:</b> Enteros del 1 al 7.</p>"
                        },
                        {
                            "icon": "fa-shapes",
                            "delay": "0.2s",
                            "title": "Secundario / Azimutal ($l$)",
                            "content": "<p><b>Qué indica:</b> La forma geométrica del orbital.</p><p><b>Valores según la letra:</b> $s = 0$, $p = 1$, $d = 2$, $f = 3$.</p>"
                        },
                        {
                            "icon": "fa-arrows-left-right",
                            "delay": "0.3s",
                            "title": "Magnético ($m$)",
                            "content": "<p><b>Qué indica:</b> La orientación en el espacio (izquierda, derecha, céntrico).</p><div class='exam-tip'><i class='fa-solid fa-diagram-project'></i> <b>MÉTODO OPERATIVO:</b><br>Escribe el <b>0</b> al centro. Hacia la derecha coloca los positivos ($+1, +2, +3$) y hacia la izquierda los negativos ($-1, -2, -3$), según el máximo permitido por $l$.</div>"
                        },
                        {
                            "icon": "fa-list-check",
                            "delay": "0.4s",
                            "title": "Notas de repaso",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-brain'></i> <b>IDENTIFICACIÓN VISUAL:</b><br>Si se habla de niveles de energía (órbitas), referencia a <b>Bohr</b>.<br>Si se habla de electrones incrustados en una masa positiva, referencia a <b>Thomson</b>.</div><div class='exam-tip'><i class='fa-solid fa-circle-info'></i> <b>DATO:</b><br>El Antimonio (Sb) es un elemento (número atómico 51), no un compuesto.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/m2NDUERKVxA",
            "id": "content-quimica-3",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es la carga del electrón ($e^-$)?",
                        "opciones": [
                            "Positiva.",
                            "Neutra.",
                            "Negativa.",
                            "Variable."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El electrón ($e^-$) tiene carga negativa y se localiza en los orbitales alrededor del núcleo."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿En qué región del átomo se encuentran protones y neutrones?",
                        "opciones": [
                            "En el núcleo.",
                            "En los orbitales.",
                            "En la nube externa.",
                            "En el vacío."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Protones y neutrones se ubican en el núcleo, que es la región más pesada del átomo."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Qué científico descubrió el electrón mediante el experimento de rayos catódicos?",
                        "opciones": [
                            "Dalton.",
                            "Thomson.",
                            "Bohr.",
                            "Chadwick."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Thomson descubrió el electrón mediante el experimento de rayos catódicos."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Cuál es la capacidad de electrones del subnivel D?",
                        "opciones": [
                            "2.",
                            "6.",
                            "10.",
                            "14."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La capacidad de electrones aumenta de 4 en 4: S=2, P=6, D=10, F=14."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Según la relación letra–valor del número cuántico azimutal ($l$), el subnivel p corresponde a:",
                        "opciones": [
                            "$l=0$",
                            "$l=1$",
                            "$l=2$",
                            "$l=3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Según la clase: s=0, p=1, d=2, f=3."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Si un subnivel tiene $l=2$, ¿qué letra le corresponde y cuál es su capacidad de electrones?",
                        "opciones": [
                            "p y 6.",
                            "d y 10.",
                            "f y 14.",
                            "s y 2."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El mapeo de la clase indica: d=2 y su capacidad es 10 electrones."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Para un subnivel f ($l=3$), ¿qué valores puede tomar el número cuántico magnético ($m$)?",
                        "opciones": [
                            "$m=0,pm1$",
                            "$m=-3,-2,-1,0,+1,+2,+3$",
                            "$m=1,2,3$",
                            "$m=-1,0,+1,+2$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El valor máximo lo determina $l$. Para $l=3$, los valores van desde -3 hasta +3, incluyendo el 0."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Qué científico se asocia al experimento de la lámina de oro y al descubrimiento del núcleo?",
                        "opciones": [
                            "Thomson.",
                            "Rutherford.",
                            "Bohr.",
                            "Demócrito."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Rutherford realizó el experimento de la lámina de oro y estableció la existencia del núcleo."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Si un modelo menciona 7 niveles de energía (órbitas), ¿a quién corresponde según la cronología de la clase?",
                        "opciones": [
                            "Bohr.",
                            "Dalton.",
                            "Schrödinger.",
                            "Chadwick."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El modelo de Bohr introduce 7 niveles de energía u órbitas."
                    },
                    {
                        "numero": 5,
                        "pregunta": "El Antimonio (Sb), con número atómico 51, se clasifica como:",
                        "opciones": [
                            "Compuesto.",
                            "Elemento.",
                            "Mezcla.",
                            "Coloide."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La nota de repaso indica que el Antimonio (Sb) es un elemento de la tabla periódica (Z=51), no un compuesto."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        }
        ,
        {
            "title": "Apuntes de Química",
            "titleIconLeft": "fa-flask",
            "titleIconRight": "fa-book",
            "titleStyle": "color: #7c3aed;",
            "mainTopicId": "topic-qui-4",
            "mainTopicClass": "topic-title",
            "mainTopicTitle": "Química",
            "mainTopicIcon1": "fa-atom",
            "mainTopicIcon2": "fa-table-cells",
            "mainTopicSubtitle": "Clase 4: Spin, Diagrama de Müller, Kernel e Iones",
            "branches": [
                {
                    "id": "nodes-qui4-1",
                    "topicIdx": 1,
                    "title": "1. Spin y Número Atómico",
                    "icon": "fa-rotate",
                    "subnodes": [
                        {
                            "icon": "fa-arrows-up-down",
                            "delay": "0.1s",
                            "title": "Número Cuántico de Spin ($s$)",
                            "content": "<p>Describe el giro del electrón sobre su propio eje. Se representa con flechas:</p><ul><li>Flecha hacia arriba ↑: valor <b>$+1/2$</b></li><li>Flecha hacia abajo ↓: valor <b>$-1/2$</b></li></ul><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Un orbital solo puede contener <b>máximo 2 electrones</b> y siempre deben tener <b>espines opuestos</b> (uno ↑ y uno ↓).</div>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "Número Atómico ($Z$) vs. Masa Atómica ($A$)",
                            "content": "<p><b>Número Atómico ($Z$)</b>: valor entero (ej. Carbono = 6). Indica la cantidad de <b>protones</b> y, en un átomo neutro, también la de <b>electrones</b>. Es el dato clave para la configuración electrónica.</p><p><b>Masa Atómica ($A$)</b>: valor con punto decimal (ej. Carbono = 12.01). Indica el peso del núcleo.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui4-2",
                    "topicIdx": 2,
                    "title": "2. Diagrama de Müller (Regla de las Diagonales)",
                    "icon": "fa-diagram-project",
                    "subnodes": [
                        {
                            "icon": "fa-house",
                            "delay": "0.1s",
                            "title": "Capacidad de los Subniveles",
                            "content": "<p>Cada subnivel tiene una capacidad máxima de electrones:</p><table style='width:100%;border-collapse:collapse;font-size:0.9em'><tr style='background:var(--card-bg)'><th style='padding:4px 8px;border:1px solid var(--border-color)'>Subnivel</th><th style='padding:4px 8px;border:1px solid var(--border-color)'>Capacidad</th><th style='padding:4px 8px;border:1px solid var(--border-color)'>Niveles</th></tr><tr><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'><b>S</b></td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>$2e^-$</td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>1 al 7</td></tr><tr><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'><b>P</b></td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>$6e^-$</td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>2 al 7</td></tr><tr><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'><b>D</b></td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>$10e^-$</td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>3 al 6</td></tr><tr><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'><b>F</b></td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>$14e^-$</td><td style='padding:4px 8px;border:1px solid var(--border-color);text-align:center'>4 al 5</td></tr></table>"
                        },
                        {
                            "icon": "fa-arrow-right-arrow-left",
                            "delay": "0.2s",
                            "title": "Orden de Llenado (No es Lineal)",
                            "content": "<p>Las diagonales del diagrama de Müller indican el orden correcto:</p><p style='line-height:2'>1s &rarr; 2s &rarr; 2p &rarr; 3s &rarr; 3p &rarr; <b>4s</b> &rarr; <b>3d</b> &rarr; 4p &rarr; 5s &rarr; 4d &rarr; 5p &rarr; 6s &rarr; 4f &rarr; 5d...</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>El <b>4s va ANTES que el 3d</b>. Este salto es el error más frecuente en el examen.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui4-3",
                    "topicIdx": 3,
                    "title": "3. Método de Kernel (Configuración Simplificada)",
                    "icon": "fa-boxes-stacked",
                    "subnodes": [
                        {
                            "icon": "fa-list-check",
                            "delay": "0.1s",
                            "title": "Cómo Aplicar el Método de Kernel",
                            "content": "<p>Permite abreviar configuraciones largas usando un <b>Gas Noble como base</b>:</p><ol><li>Busca el Gas Noble con $Z$ más cercano al elemento pero que <b>no se pase</b>.</li><li>Colócalo entre corchetes <b>$[X]$</b>.</li><li>Completa los electrones restantes siguiendo el orden de Müller.</li></ol>"
                        },
                        {
                            "icon": "fa-gas-pump",
                            "delay": "0.2s",
                            "title": "Gases Nobles de Referencia",
                            "content": "<p>Los cinco gases nobles usados como base de Kernel con su número de electrones:</p><ul><li><b>$[He] = 2$</b></li><li><b>$[Ne] = 10$</b></li><li><b>$[Ar] = 18$</b></li><li><b>$[Kr] = 36$</b></li><li><b>$[Xe] = 54$</b></li></ul><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Memoriza estos cinco valores. Son la base de todas las configuraciones simplificadas.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-qui4-4",
                    "topicIdx": 4,
                    "title": "4. Iones y Tips para el Examen",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-circle-minus",
                            "delay": "0.1s",
                            "title": "Anión (Carga $-$): Gana Electrones",
                            "content": "<p>Un <b>anión</b> es un átomo que <b>ganó electrones</b>, por eso tiene carga negativa.</p><p><b>Procedimiento:</b> $Z +$ carga (valor absoluto) = total de electrones a configurar.</p><p><b>Ejemplo:</b> $O^{-2}$ ($Z=8$): $8 + 2 = 10$ electrones. Configurar para 10 $e^-$.</p>"
                        },
                        {
                            "icon": "fa-circle-plus",
                            "delay": "0.2s",
                            "title": "Catión (Carga $+$): Pierde Electrones",
                            "content": "<p>Un <b>catión</b> es un átomo que <b>perdió electrones</b>, por eso tiene carga positiva.</p><p><b>Procedimiento:</b> $Z -$ carga = total de electrones a configurar.</p><p><b>Ejemplo:</b> $Al^{+3}$ ($Z=13$): $13 - 3 = 10$ electrones. Configurar para 10 $e^-$.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Siempre haz la suma/resta de electrones <b>primero</b> y luego aplica el diagrama de Müller sobre el total resultante.</div>"
                        },
                        {
                            "icon": "fa-ban",
                            "delay": "0.3s",
                            "title": "Subniveles que No Existen",
                            "content": "<p>Para identificar opciones incorrectas en el examen, recuerda que ciertos subniveles <b>no existen</b>:</p><ul><li><b>$1p$</b> — no existe (p inicia en nivel 2)</li><li><b>$2d$</b> — no existe (d inicia en nivel 3)</li><li><b>$3f$</b> — no existe (f inicia en nivel 4)</li></ul><p>Si ves alguno de estos en las opciones, descártalo de inmediato.</p>"
                        },
                        {
                            "icon": "fa-sigma",
                            "delay": "0.4s",
                            "title": "Verificación por Sumatoria",
                            "content": "<p>Para confirmar que una configuración es correcta, suma todos los exponentes de los subniveles. El resultado debe coincidir con el número total de electrones del átomo o ion a configurar.</p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/RwDLUd72KCo",
            "id": "content-quimica-4",
            "preguntas": {
                "unam": [
                    {
                        "numero": 23,
                        "pregunta": "El elemento con un número atómico 17 y configuración electrónica 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> se ubica en la familia",
                        "opciones": [
                            "III A",
                            "III B",
                            "II A",
                            "VII A"
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "El último subnivel es $3p^5$: tiene 5 electrones en el subnivel p de valencia, lo que corresponde a la familia VII A (halógenos). Suma de exponentes: 2+2+6+2+5 = 17, confirma Z=17 (Cloro)."
                    }
                ],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Qué valores puede tomar el número cuántico de spin ($s$)?",
                        "opciones": [
                            "$0$ y $1$.",
                            "$+1/2$ y $-1/2$.",
                            "$-1$, $0$ y $+1$.",
                            "$1$ y $2$."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El spin describe el giro del electrón: flecha arriba (↑) corresponde a $+1/2$ y flecha abajo (↓) corresponde a $-1/2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Cuántos electrones caben como máximo en un orbital y qué condición deben cumplir?",
                        "opciones": [
                            "1 electrón; sin condición.",
                            "2 electrones; deben tener espines iguales.",
                            "2 electrones; deben tener espines opuestos.",
                            "4 electrones; deben tener espines opuestos."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Un orbital contiene máximo 2 electrones y siempre deben tener espines opuestos: uno con $+1/2$ y otro con $-1/2$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "En el diagrama de Müller, ¿qué subnivel se llena primero: $4s$ o $3d$?",
                        "opciones": [
                            "$3d$, porque su nivel principal es menor.",
                            "$4s$, porque las diagonales del diagrama lo indican así.",
                            "Se llenan al mismo tiempo.",
                            "$4s$, solo si el átomo tiene más de 20 electrones."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El diagrama de Müller establece que el $4s$ se llena antes que el $3d$. El orden no es lineal; siempre se siguen las diagonales."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Para obtener la configuración electrónica del anión $S^{-2}$ ($Z=16$), ¿con cuántos electrones se trabaja?",
                        "opciones": [
                            "14.",
                            "16.",
                            "18.",
                            "32."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Un anión gana electrones: $16 + 2 = 18$ electrones totales. Se configura el subnivel para 18 $e^-$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Usando el método de Kernel, el Gas Noble $[Ar]$ representa una base de _____ electrones.",
                        "opciones": [
                            "2.",
                            "10.",
                            "18.",
                            "36."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Los Gases Nobles de Kernel son: [He]=2, [Ne]=10, [Ar]=18, [Kr]=36, [Xe]=54."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "El catión $Fe^{+3}$ tiene $Z=26$. ¿Cuántos electrones se usan para su configuración y cuál es el subnivel de mayor energía al que llegarías siguiendo el diagrama de Müller?",
                        "opciones": [
                            "29 electrones; $4p$.",
                            "26 electrones; $4s$.",
                            "23 electrones; $3d$.",
                            "23 electrones; $4s$."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Catión pierde electrones: $26 - 3 = 23$. Configurando para 23 $e^-$ con Müller: $[Ar]3d^5$. El último subnivel ocupado es $3d$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Un estudiante escribe la siguiente configuración electrónica: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 2d<sup>3</sup>. ¿Cuál es el error?",
                        "opciones": [
                            "El 2p<sup>6</sup> debería ser 2p<sup>4</sup>.",
                            "El subnivel 2d no existe; el subnivel d inicia en el nivel 3.",
                            "Se excede la capacidad del subnivel 2s.",
                            "El orden debería empezar con 2s antes que 1s."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El subnivel d inicia en el nivel de energía 3, no en el 2. $2d$ no existe. Si aparece en una opción del examen, descártala de inmediato."
                    },
                    {
                        "numero": 3,
                        "pregunta": "El potasio ($K$, $Z=19$) usa el Kernel $[Ar]$. ¿Cuántos electrones quedan por distribuir después del Kernel y en qué subnivel se ubican siguiendo el orden de Müller?",
                        "opciones": [
                            "1 electrón en $3d$.",
                            "1 electrón en $4s$.",
                            "2 electrones en $4s$.",
                            "1 electrón en $4p$."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "$[Ar] = 18$ electrones. Quedan $19 - 18 = 1$ electrón. Siguiendo Müller, el siguiente subnivel disponible después de $3p$ es $4s$. Por tanto: $[Ar]4s^1$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Dos átomos distintos, uno neutro y otro como ion, terminan teniendo exactamente 10 electrones. El neutro tiene $Z=10$ y el ion tiene $Z=8$ con carga $-2$. ¿Qué tienen en común según su configuración electrónica?",
                        "opciones": [
                            "Son isótopos del mismo elemento.",
                            "Tienen la misma configuración electrónica.",
                            "Tienen el mismo número de protones.",
                            "Tienen el mismo número de neutrones."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El Neón ($Z=10$) neutro tiene 10 $e^-$. El Oxígeno $O^{-2}$ ($Z=8$, gana 2) también tiene $8+2=10$ $e^-$. Ambos comparten la configuración $1s^2\\ 2s^2\\ 2p^6$. Son isoelectrónicos."
                    },
                    {
                        "numero": 5,
                        "pregunta": "En el examen te muestran cuatro configuraciones. ¿Cuál es la CORRECTA para el elemento con $Z=11$ (Sodio)?",
                        "opciones": [
                            "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 2d<sup>1</sup>",
                            "1s<sup>2</sup> 2s<sup>2</sup> 1p<sup>6</sup> 3s<sup>1</sup>",
                            "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>",
                            "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> 3s<sup>2</sup>"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La opción A usa 2d (no existe). La B usa 1p (no existe). La D suma 11 pero el orden es incorrecto (viola las reglas de llenado). La C es correcta: sigue el orden de Müller y la suma de exponentes da 2+2+6+1=11."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "qui4-001",
                    "pregunta": "¿Qué valores puede tomar el número cuántico de spin ($s$)?",
                    "respuesta": "$+1/2$ (flecha ↑) o $-1/2$ (flecha ↓).",
                    "tema": "Números Cuánticos",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-002",
                    "pregunta": "¿Cuántos electrones caben en un orbital y qué condición deben cumplir?",
                    "respuesta": "Máximo 2 electrones, con espines opuestos (uno ↑ y uno ↓).",
                    "tema": "Números Cuánticos",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-003",
                    "pregunta": "¿Qué diferencia al Número Atómico ($Z$) de la Masa Atómica ($A$)?",
                    "respuesta": "$Z$: valor entero, indica cantidad de protones (y electrones en átomo neutro). $A$: valor decimal, indica el peso del núcleo.",
                    "tema": "Tabla Periódica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-004",
                    "pregunta": "¿Para qué sirve el diagrama de Müller?",
                    "respuesta": "Para conocer el orden en que se llenan los orbitales (subniveles) con electrones.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-005",
                    "pregunta": "¿Cuál es la capacidad máxima de electrones de los subniveles S, P, D y F?",
                    "respuesta": "S=2, P=6, D=10, F=14.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-006",
                    "pregunta": "En el diagrama de Müller, ¿qué subnivel se llena antes: $4s$ o $3d$?",
                    "respuesta": "$4s$ se llena antes que $3d$. El orden de llenado no es lineal.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-007",
                    "pregunta": "¿Qué es el método de Kernel y cómo se aplica?",
                    "respuesta": "Simplifica la configuración usando el Gas Noble más cercano (sin pasarse) entre corchetes, y se completa lo que falta con el orden de Müller.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-008",
                    "pregunta": "¿Cuántos electrones representan los Gases Nobles $[He]$, $[Ne]$ y $[Ar]$?",
                    "respuesta": "$[He]=2$, $[Ne]=10$, $[Ar]=18$.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-009",
                    "pregunta": "¿Cuántos electrones representan los Gases Nobles $[Kr]$ y $[Xe]$?",
                    "respuesta": "$[Kr]=36$, $[Xe]=54$.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-010",
                    "pregunta": "¿Qué es un anión y cómo afecta la cantidad de electrones?",
                    "respuesta": "Átomo con carga negativa que ganó electrones. Se suma la carga al $Z$ para obtener el total de electrones.",
                    "tema": "Iones",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-011",
                    "pregunta": "¿Qué es un catión y cómo afecta la cantidad de electrones?",
                    "respuesta": "Átomo con carga positiva que perdió electrones. Se resta la carga al $Z$ para obtener el total de electrones.",
                    "tema": "Iones",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-012",
                    "pregunta": "¿Cuántos electrones tiene el ion $O^{-2}$ ($Z=8$) para su configuración?",
                    "respuesta": "$8 + 2 = 10$ electrones.",
                    "tema": "Iones",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-013",
                    "pregunta": "¿Cuáles son los tres subniveles que NO existen en la tabla periódica?",
                    "respuesta": "$1p$, $2d$ y $3f$ no existen. P inicia en nivel 2, D en nivel 3, F en nivel 4.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                },
                {
                    "id": "qui4-014",
                    "pregunta": "¿Cómo verificas que una configuración electrónica es correcta?",
                    "respuesta": "Sumando todos los exponentes de los subniveles; el total debe coincidir con el número de electrones del átomo o ion.",
                    "tema": "Configuración Electrónica",
                    "asignatura": "Química"
                }
            ]
        }
    ]
};
