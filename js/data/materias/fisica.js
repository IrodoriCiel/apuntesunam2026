export const fisica = {
    "id": "fisica",
    "nombre": "Física",
    "clases": [
        {
            "title": "Apuntes de Física",
            "titleIconLeft": "fa-atom",
            "titleIconRight": "fa-arrows-to-dot",
            "titleStyle": "color: #0e7490;",
            "mainTopicId": "mainTopicFisica1",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Física",
            "mainTopicIcon1": "fa-ruler-combined",
            "mainTopicIcon2": "fa-gauge-high",
            "mainTopicSubtitle": "Clase 1: Magnitudes, MRU y Velocidad Relativa",
            "branches": [
                {
                    "id": "nodes-fis1-1",
                    "topicIdx": 1,
                    "title": "1. Magnitudes Escalares y Vectoriales",
                    "icon": "fa-ruler",
                    "subnodes": [
                        {
                            "icon": "fa-circle-info",
                            "delay": "0.1s",
                            "title": "Diferencia Clave",
                            "content": "<p>Para el examen, la diferencia principal entre magnitudes es la <b>dirección</b>.</p>"
                        },
                        {
                            "icon": "fa-1",
                            "delay": "0.2s",
                            "title": "Magnitudes Escalares",
                            "content": "<p>No tienen dirección. Si agregas una dirección (norte, sur, derecha), la expresión se vuelve ilógica.</p>",
                            "examples": [
                                "Masa (kg)",
                                "Tiempo (s)",
                                "Temperatura (°C)",
                                "Energía (W)"
                            ]
                        },
                        {
                            "icon": "fa-location-arrow",
                            "delay": "0.3s",
                            "title": "Magnitudes Vectoriales",
                            "content": "<p>Sí tienen dirección y sentido. Se representan con flechas (vectores).</p>",
                            "examples": [
                                "Fuerza (N)",
                                "Desplazamiento (m)",
                                "Velocidad (m/s)"
                            ]
                        }
                    ]
                },
                {
                    "id": "nodes-fis1-2",
                    "topicIdx": 2,
                    "title": "2. Distancia vs. Desplazamiento",
                    "icon": "fa-route",
                    "subnodes": [
                        {
                            "icon": "fa-road",
                            "delay": "0.1s",
                            "title": "Distancia (Escalar)",
                            "content": "<p>Es toda la trayectoria recorrida (el procedimiento). Aunque se mida en metros, no requiere dirección única.</p>"
                        },
                        {
                            "icon": "fa-arrow-right-long",
                            "delay": "0.2s",
                            "title": "Desplazamiento (Vectorial)",
                            "content": "<p>Es la línea recta entre el punto inicial y el final (el resultado). Tiene dirección única.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis1-3",
                    "topicIdx": 3,
                    "title": "3. Rapidez vs. Velocidad",
                    "icon": "fa-gauge-high",
                    "subnodes": [
                        {
                            "icon": "fa-stopwatch",
                            "delay": "0.1s",
                            "title": "Rapidez (Escalar)",
                            "content": "<p>Solo indica qué tan rápido se mueve un objeto.</p>",
                            "examples": [
                                "100 km/h"
                            ]
                        },
                        {
                            "icon": "fa-compass",
                            "delay": "0.2s",
                            "title": "Velocidad (Vectorial)",
                            "content": "<p>Indica qué tan rápido y hacia dónde se mueve el objeto.</p>",
                            "examples": [
                                "100 km/h hacia el norte"
                            ]
                        },
                        {
                            "icon": "fa-brain",
                            "delay": "0.3s",
                            "title": "Tip de Memoria",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-lightbulb'></i> <b>MEMORIA RÁPIDA:</b><br>Velocidad = Vectorial (ambas inician con V).<br>Rapidez = Escalar.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis1-4",
                    "topicIdx": 4,
                    "title": "4. Movimiento Rectilíneo Uniforme (MRU)",
                    "icon": "fa-arrows-left-right-to-line",
                    "subnodes": [
                        {
                            "icon": "fa-diagram-project",
                            "delay": "0.1s",
                            "title": "Definición",
                            "content": "<p>Es un movimiento en línea recta con <b>velocidad constante</b>; no aumenta ni disminuye.</p>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "Interpretación de la Unidad",
                            "content": "<p>Si un objeto tiene 5 m/s, recorre 5 metros cada segundo.</p>"
                        },
                        {
                            "icon": "fa-triangle-exclamation",
                            "delay": "0.3s",
                            "title": "Triángulo de Fórmulas",
                            "content": "<p>Para reducir errores de despeje:</p><div style='display:flex; justify-content:center; margin:10px 0;'><svg width='260' height='220' viewBox='0 0 260 220' role='img' aria-label='Triángulo de fórmulas MRU'><svg height=220 viewBox='0 0 260 220'width=260><polygon fill=none points='130,10 10,210 250,210'stroke=black stroke-width=3 /><line stroke=black stroke-width=3 x1=50 x2=210 y1=130 y2=130 /><line stroke=black stroke-width=3 x1=130 x2=130 y1=130 y2=210 /><text x=130 y=80 font-style='italic'>d</text><text x=95 y=170 font-style='italic'>v</text><text x=165 y=170 font-style='italic'>t</text></div><ul><li><b>Velocidad:</b> $V = d/t$</li><li><b>Tiempo:</b> $t = d/V$</li><li><b>Distancia:</b> $d = V \\cdot t$</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis1-5",
                    "topicIdx": 1,
                    "title": "5. Velocidad Relativa y Tips UNAM",
                    "icon": "fa-flag-checkered",
                    "subnodes": [
                        {
                            "icon": "fa-car-side",
                            "delay": "0.1s",
                            "title": "Dos Objetos en Movimiento",
                            "content": "<ul><li><b>Misma dirección:</b> las velocidades se restan.</li><li><b>Direcciones opuestas:</b> las velocidades se suman.</li></ul>"
                        },
                        {
                            "icon": "fa-chart-area",
                            "delay": "0.2s",
                            "title": "Gráficas Velocidad-Tiempo",
                            "content": "<p>Si preguntan quién recorrió mayor distancia en una gráfica v-t, gana el objeto con <b>área más grande</b> bajo su línea y sobre el eje del tiempo.</p>"
                        },
                        {
                            "icon": "fa-train",
                            "delay": "0.3s",
                            "title": "Lectura de Gráficas Posición-Tiempo",
                            "content": "<p><b>Nota de estudio:</b> en una gráfica posición-tiempo, la pendiente (inclinación) representa la velocidad.</p><ol><li>Si la línea mantiene la <b>misma inclinación</b> durante todo el tramo, la velocidad es constante.</li><li>Si la inclinación <b>cambia</b> entre tramos, la velocidad también cambia.</li></ol><p>Para deducir la respuesta en un reactivo, primero observa si la pendiente es única o si varía por secciones.</p>",
                            "examples": [
                                "Línea recta con inclinación fija: velocidad constante.",
                                "Pendiente diferente por tramos: velocidad variable."
                            ]
                        },
                        {
                            "icon": "fa-earth-americas",
                            "delay": "0.3s",
                            "title": "Sistema de Unidades",
                            "content": "<p>La UNAM trabaja con Sistema Internacional: metros, kilómetros, segundos y horas.</p>"
                        },
                        {
                            "icon": "fa-filter",
                            "delay": "0.4s",
                            "title": "Descarte en Incisos",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-list-check'></i> <b>TIP DE EXAMEN:</b><br>Si dudas en una respuesta, identifica si la magnitud pedida debe ser escalar o vectorial y descarta opciones con o sin dirección según corresponda.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/9xxBgVgSfWc",
            "id": "content-fisica-1",
            "preguntas": {
                "unam": [
                    {
                        "numero": 1,
                        "pregunta": "El desplazamiento de un ferrocarril se describe en la siguiente gráfica (posición x – tiempo t). A partir de los datos mostrados se puede deducir que el movimiento es rectilíneo con",
                        "opciones": [
                            "aceleración constante.",
                            "aceleración variable.",
                            "velocidad constante.",
                            "velocidad variable."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Forma rápida de resolverla: en una gráfica posición-tiempo, la pendiente equivale a velocidad. Si la gráfica es una recta con la misma inclinación durante todo el intervalo, la velocidad se mantiene constante. Por eso la opción correcta es velocidad constante."
                    }
                ],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál de las siguientes magnitudes es vectorial?",
                        "opciones": [
                            "Tiempo",
                            "Masa",
                            "Temperatura",
                            "Fuerza"
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "La fuerza es vectorial porque requiere magnitud, dirección y sentido. Tiempo, masa y temperatura son escalares."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Un auto recorre 200 m y regresa 80 m sobre la misma línea. ¿Cuál es su desplazamiento?",
                        "opciones": [
                            "280 m",
                            "120 m",
                            "200 m",
                            "80 m"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El desplazamiento es la diferencia entre posición final e inicial sobre la recta: 200 m de ida menos 80 m de regreso, igual a 120 m en el sentido inicial."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Qué expresión representa correctamente la velocidad en MRU?",
                        "opciones": [
                            "$V = t/d$",
                            "$V = d \\cdot t$",
                            "$V = d/t$",
                            "$V = d - t$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "En MRU, la velocidad se calcula dividiendo distancia entre tiempo: $V=d/t$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Dos móviles avanzan en la misma dirección con 18 m/s y 11 m/s. ¿Qué operación aplica para velocidad relativa?",
                        "opciones": [
                            "Se suman",
                            "Se restan",
                            "Se multiplican",
                            "Se promedian"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Cuando ambos móviles van en la misma dirección, la velocidad relativa se obtiene restando sus velocidades."
                    },
                    {
                        "numero": 5,
                        "pregunta": "En una gráfica velocidad-tiempo, ¿qué representa el área bajo la curva?",
                        "opciones": [
                            "Aceleración",
                            "Distancia recorrida",
                            "Masa",
                            "Fuerza"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El área bajo una gráfica v-t corresponde al desplazamiento/distancia recorrida en ese intervalo de tiempo."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Un objeto se mueve 30 s con velocidad constante de 6 m/s en línea recta. ¿Qué distancia recorre?",
                        "opciones": [
                            "5 m",
                            "180 m",
                            "36 m",
                            "24 m"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Se aplica $d=V \\cdot t$. Entonces $d=6 \\cdot 30=180$ m."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Si un corredor avanza 400 m al este y luego 150 m al oeste, su distancia total y su desplazamiento son:",
                        "opciones": [
                            "250 m y 550 m",
                            "550 m y 250 m al este",
                            "550 m y 400 m",
                            "250 m y 150 m al oeste"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La distancia suma todo el recorrido: $400+150=550$ m. El desplazamiento es la diferencia vectorial: $400-150=250$ m al este."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Dos autos van en direcciones opuestas con 22 m/s y 18 m/s. ¿Cuál es su rapidez relativa?",
                        "opciones": [
                            "4 m/s",
                            "40 m/s",
                            "396 m/s",
                            "20 m/s"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En sentidos opuestos, la velocidad relativa se obtiene sumando magnitudes: $22+18=40$ m/s."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Un móvil mantiene 12 m/s durante 10 s y luego 4 m/s durante 5 s. ¿Qué distancia total recorre?",
                        "opciones": [
                            "100 m",
                            "140 m",
                            "160 m",
                            "170 m"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Se calcula por tramos: $d_1=12\\cdot10=120$ m y $d_2=4\\cdot5=20$ m. Distancia total: $120+20=140$ m."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuál opción describe una velocidad y no una rapidez?",
                        "opciones": [
                            "90 km/h",
                            "12 m/s",
                            "50 km/h hacia el sur",
                            "4 m/s en promedio"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La velocidad exige magnitud y dirección. Solo la tercera opción incluye dirección (hacia el sur)."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Física",
            "titleIconLeft": "fa-atom",
            "titleIconRight": "fa-car-burst",
            "titleStyle": "color: #0e7490;",
            "mainTopicId": "mainTopicFisica2",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Física",
            "mainTopicIcon1": "fa-gauge-high",
            "mainTopicIcon2": "fa-arrow-trend-up",
            "mainTopicSubtitle": "Clase 2: MRUA, Caída Libre y Dinámica Vectorial",
            "branches": [
                {
                    "id": "nodes-fis2-1",
                    "topicIdx": 1,
                    "title": "1. Movimiento Rectilíneo Uniformemente Acelerado (MRUA)",
                    "icon": "fa-car-side",
                    "subnodes": [
                        {
                            "icon": "fa-circle-info",
                            "delay": "0.1s",
                            "title": "Definición y Diferencia con MRU",
                            "content": "<p>A diferencia del MRU (velocidad constante), en el MRUA existen <b>cambios de velocidad</b>. La aceleración (<b>$a$</b>) es el cambio de velocidad que experimenta un cuerpo en un tiempo determinado.</p><p><b>Unidades:</b> Se mide en $m/s^2$.</p>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "Significado Técnico de la Aceleración",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-lightbulb'></i> <b>PREGUNTA DE EXAMEN:</b><br>Si un objeto tiene una aceleración de $10\\, m/s^2$, significa que su velocidad <b>aumenta $10\\, m/s$ cada segundo</b>. Es la interpretación directa que busca la UNAM.</div>"
                        },
                        {
                            "icon": "fa-square-root-variable",
                            "delay": "0.3s",
                            "title": "Fórmulas de MRUA",
                            "content": "<p>Las tres fórmulas fundamentales del MRUA son:</p><ul><li><b>Aceleración:</b> $a = \\dfrac{V_f - V_i}{t}$</li><li><b>Distancia:</b> $d = V_i \\cdot t + \\dfrac{a \\cdot t^2}{2}$</li><li><b>Velocidad Final:</b> $V_f^2 = V_i^2 + 2ad$</li></ul><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>La mayoría de los problemas de la UNAM se resuelven con la primera fórmula: $a = (V_f - V_i) / t$. No te compliques con despejes largos.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis2-2",
                    "topicIdx": 2,
                    "title": "2. Interpretación de Gráficas de Movimiento",
                    "icon": "fa-chart-line",
                    "subnodes": [
                        {
                            "icon": "fa-table",
                            "delay": "0.1s",
                            "title": "Tabla Comparativa MRU vs MRUA",
                            "content": "<p>Para identificar el tipo de movimiento en una gráfica, usa este criterio:</p><ul><li><b>Gráfica Distancia-Tiempo ($d$-$t$):</b><br>&#8226; MRU: <b>Línea diagonal recta.</b><br>&#8226; MRUA: <b>Curva (Parábola).</b></li><li><b>Gráfica Velocidad-Tiempo ($v$-$t$):</b><br>&#8226; MRU: <b>Línea horizontal plana.</b><br>&#8226; MRUA: <b>Línea diagonal recta.</b></li></ul>"
                        },
                        {
                            "icon": "fa-star",
                            "delay": "0.2s",
                            "title": "Regla de Oro de Gráficas",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-star'></i> <b>REGLA DE ORO:</b><br>Siempre que veas una <b>curva en cualquier gráfica de movimiento</b>, se trata de un <b>MRUA (aceleración)</b>. Si es línea recta, analiza su posición (horizontal o diagonal) según la gráfica que sea.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis2-3",
                    "topicIdx": 3,
                    "title": "3. Caída Libre",
                    "icon": "fa-apple-whole",
                    "subnodes": [
                        {
                            "icon": "fa-circle-info",
                            "delay": "0.1s",
                            "title": "Definición",
                            "content": "<p>Es un caso particular del MRUA donde un objeto <b>desciende por efecto de la gravedad</b>. La gravedad ($g$) es una aceleración cuyo valor es $9.81\\, m/s^2$.</p>"
                        },
                        {
                            "icon": "fa-calculator",
                            "delay": "0.2s",
                            "title": "Atajo para el Examen",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Redondea $g$ a <b>$10\\, m/s^2$</b> para agilizar los cálculos mentales. Los resultados en los incisos de la UNAM siempre serán muy cercanos a este valor redondeado.</div>"
                        },
                        {
                            "icon": "fa-equals",
                            "delay": "0.3s",
                            "title": "Condición Inicial y Fórmula",
                            "content": "<ul><li><b>Velocidad Inicial ($V_i$):</b> Siempre es $0$ porque el objeto parte del reposo.</li><li><b>Fórmula principal:</b> $V = \\sqrt{2g \\cdot h}$</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis2-4",
                    "topicIdx": 4,
                    "title": "4. Vectores y Dinámica",
                    "icon": "fa-arrow-up-right-dots",
                    "subnodes": [
                        {
                            "icon": "fa-circle-info",
                            "delay": "0.1s",
                            "title": "Los 3 Elementos de un Vector",
                            "content": "<p>Un vector se representa con una flecha y tiene tres elementos fundamentales:</p><ul><li><b>Magnitud:</b> El valor numérico y la unidad (ej. $20\\,N$).</li><li><b>Dirección:</b> El ángulo de inclinación respecto al eje (medido con transportador).</li><li><b>Sentido:</b> Hacia dónde apunta la punta de la flecha (positivo o negativo).</li></ul>"
                        },
                        {
                            "icon": "fa-plus-minus",
                            "delay": "0.2s",
                            "title": "Suma de Fuerzas y Regla de Signos",
                            "content": "<p>Si se aplican varias fuerzas sobre un objeto, la <b>fuerza resultante es la suma vectorial</b> de todas.</p><ul><li><b>Hacia la Derecha:</b> Positivo ($+$).</li><li><b>Hacia la Izquierda:</b> Negativo ($-$).</li><li><b>Misma dirección:</b> Se restan las magnitudes.</li><li><b>Direcciones opuestas:</b> Se suman las magnitudes.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis2-5",
                    "topicIdx": 2,
                    "title": "5. Tips Adicionales para el Reactivo UNAM",
                    "icon": "fa-bullseye",
                    "subnodes": [
                        {
                            "icon": "fa-ruler",
                            "delay": "0.1s",
                            "title": "Sistema de Unidades",
                            "content": "<p>La UNAM utiliza casi exclusivamente el <b>Sistema Internacional</b> ($m, s, kg, N$). Ignora pies, pulgadas u onzas si aparecen en otros materiales de estudio.</p>"
                        },
                        {
                            "icon": "fa-drafting-compass",
                            "delay": "0.2s",
                            "title": "Ángulos Clave para el Examen",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-drafting-compass'></i> <b>ÁNGULOS CLAVE:</b><br>Los únicos ángulos que vienen para calcular (descomposición de vectores) sin calculadora son <b>$30°$, $45°$ y $60°$</b>. Si el ángulo dado es alguno de estos, úsalo con los valores trigonométricos de memoria.</div>"
                        },
                        {
                            "icon": "fa-equals",
                            "delay": "0.3s",
                            "title": "Despejes Rápidos",
                            "content": "<p>Recuerda que si un número está <b>multiplicando o dividiendo</b> y pasa al otro lado de la igualdad, su <b>signo NO cambia; solo cambia la operación</b> (de multiplicar a dividir o viceversa).</p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/CUzpmtQc9rw",
            "id": "content-fisica-2",
            "preguntas": {
                "unam": [
                    {
                        "numero": 3,
                        "pregunta": "Sobre un objeto de 100 kg se aplican dos fuerzas (una de 20 N y otra de 30 N) con la misma dirección pero de sentido contrario; ¿cuál es la magnitud de la aceleración del objeto?",
                        "opciones": [
                            "$0.1\\, m/s^2$",
                            "$0.2\\, m/s^2$",
                            "$0.3\\, m/s^2$",
                            "$0.5\\, m/s^2$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Cuando dos fuerzas actúan en sentido contrario, se restan: 30 N - 20 N = 10 N (fuerza neta). Luego se aplica $a = F/m = 10/100 = 0.1\\, m/s^2$. La regla de signos de la clase indica que fuerzas en direcciones opuestas se restan."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Un objeto se suelta desde el reposo a una altura $H$ sobre el suelo. Determina la relación matemática que permita obtener la rapidez que tendrá el objeto al momento que ha caído una cierta distancia $h$.",
                        "opciones": [
                            "$v = \\sqrt{2gh}$",
                            "$v = \\sqrt{2g(H-h)}$",
                            "$v = \\sqrt{2gH}$",
                            "$v = \\sqrt{2g(h-H)}$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "La fórmula de caída libre es $V = \\sqrt{2g \\cdot h}$, donde $h$ es la distancia caída (no la altura total $H$). Como el objeto parte del reposo ($V_i = 0$), solo se necesita la distancia recorrida $h$ para obtener la rapidez en ese punto."
                    }
                ],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es la principal diferencia entre el MRU y el MRUA?",
                        "opciones": [
                            "En el MRU hay aceleración, en el MRUA no.",
                            "En el MRUA la velocidad cambia; en el MRU la velocidad es constante.",
                            "El MRUA solo aplica en caída libre.",
                            "El MRU y el MRUA son lo mismo, solo cambia el nombre."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La diferencia fundamental es que en el MRUA existen cambios de velocidad (aceleración), mientras que en el MRU la velocidad es constante y no cambia en ningún momento del movimiento."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Un cuerpo tiene una aceleración de $5\\, m/s^2$. ¿Qué significa esto físicamente?",
                        "opciones": [
                            "El cuerpo recorre 5 metros cada segundo.",
                            "El cuerpo tiene una velocidad de 5 m/s.",
                            "La velocidad del cuerpo aumenta 5 m/s cada segundo.",
                            "El cuerpo tarda 5 segundos en detenerse."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La aceleración indica el cambio de velocidad por unidad de tiempo. Si $a = 5\\, m/s^2$, la velocidad del cuerpo aumenta $5\\, m/s$ por cada segundo transcurrido. Esta es la interpretación técnica directa que exige la UNAM."
                    },
                    {
                        "numero": 3,
                        "pregunta": "En caída libre, ¿cuál es el valor de la velocidad inicial ($V_i$) de un objeto que se suelta desde el reposo?",
                        "opciones": [
                            "$9.81\\, m/s$",
                            "$10\\, m/s$",
                            "$0\\, m/s$",
                            "Depende de la altura desde la que se suelta."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "En caída libre, el objeto parte del reposo absoluto, por lo tanto su velocidad inicial es siempre $V_i = 0$. La gravedad ($g$) actúa como aceleración, no como velocidad inicial."
                    },
                    {
                        "numero": 4,
                        "pregunta": "En una gráfica de distancia vs. tiempo ($d$-$t$), ¿qué forma tiene la línea si el movimiento es MRUA (con aceleración)?",
                        "opciones": [
                            "Línea horizontal plana.",
                            "Línea diagonal recta.",
                            "Curva o parábola.",
                            "Línea vertical."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Por la Regla de Oro: una curva en cualquier gráfica de movimiento indica MRUA. En la gráfica $d$-$t$, el MRU produce una línea recta diagonal y el MRUA produce una curva (parábola)."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Dos fuerzas actúan sobre el mismo objeto: una de $15\\,N$ hacia la derecha y otra de $10\\,N$ hacia la izquierda. ¿Cuál es la fuerza resultante?",
                        "opciones": [
                            "$25\\,N$ hacia la derecha.",
                            "$5\\,N$ hacia la derecha.",
                            "$25\\,N$ hacia la izquierda.",
                            "$5\\,N$ hacia la izquierda."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Por la regla de signos: hacia la derecha es positivo (+15 N), hacia la izquierda es negativo (-10 N). La suma vectorial es: $+15 + (-10) = +5\\,N$. El signo positivo indica que la fuerza resultante va hacia la derecha."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Un auto parte del reposo y alcanza una velocidad de $30\\,m/s$ en $6\\,s$. ¿Cuál es su aceleración?",
                        "opciones": [
                            "$180\\,m/s^2$",
                            "$5\\,m/s^2$",
                            "$0.2\\,m/s^2$",
                            "$36\\,m/s^2$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Se aplica la fórmula base del MRUA: $a = (V_f - V_i)/t = (30 - 0)/6 = 5\\,m/s^2$. El auto parte del reposo, entonces $V_i = 0$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Un objeto cae libremente desde una altura de $20\\,m$. Usando $g = 10\\,m/s^2$, ¿cuál es su velocidad al llegar al suelo?",
                        "opciones": [
                            "$10\\,m/s$",
                            "$200\\,m/s$",
                            "$20\\,m/s$",
                            "$2\\,m/s$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Se aplica la fórmula de caída libre: $V = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\cdot 10 \\cdot 20} = \\sqrt{400} = 20\\,m/s$. Siempre se usa $g \\approx 10\\,m/s^2$ para agilizar el cálculo."
                    },
                    {
                        "numero": 3,
                        "pregunta": "En una gráfica de velocidad vs. tiempo ($v$-$t$), se observa una línea inclinada (diagonal) de pendiente positiva. ¿Qué tipo de movimiento describe?",
                        "opciones": [
                            "MRU, porque hay una línea recta.",
                            "MRUA, porque la línea diagonal en $v$-$t$ indica velocidad que cambia (aceleración).",
                            "Reposo, porque la línea no es horizontal.",
                            "Caída libre exclusivamente."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En la gráfica $v$-$t$: MRU produce línea HORIZONTAL (velocidad constante), mientras MRUA produce línea DIAGONAL (velocidad que aumenta o disminuye). Una diagonal en $v$-$t$ siempre significa aceleración (MRUA)."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Sobre un objeto actúan tres fuerzas: $+40\\,N$, $-15\\,N$ y $+5\\,N$ (signos según la convención de la clase). ¿Cuál es la fuerza resultante?",
                        "opciones": [
                            "$60\\,N$ positivos.",
                            "$20\\,N$ positivos.",
                            "$30\\,N$ positivos.",
                            "$-20\\,N$ negativos."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Se suman algebraicamente según los signos: $+40 + (-15) + (+5) = 40 - 15 + 5 = 30\\,N$. El resultado positivo indica que la fuerza neta va hacia la derecha (positivo)."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Un vehículo viaja a $20\\,m/s$ y frena uniformemente hasta detenerse en $4\\,s$. ¿Cuál es la magnitud de su desaceleración?",
                        "opciones": [
                            "$80\\,m/s^2$",
                            "$5\\,m/s^2$",
                            "$0.2\\,m/s^2$",
                            "$16\\,m/s^2$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Se usa $a = (V_f - V_i)/t = (0 - 20)/4 = -5\\,m/s^2$. El signo negativo indica desaceleración (frenado). La magnitud de la desaceleración es $5\\,m/s^2$."
                    }
                ]
            },
            "flashcards": [
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
                    "pregunta": "¿Qué significa tener una aceleración de $10, m/s^2$?",
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
                    "respuesta": "Caso particular del MRUA por gravedad ($g \\approx 10, m/s^2$). $V_i=0$. Fórmula: $V=\\sqrt{2gh}$.",
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
                {
                    "id": "fis-019",
                    "pregunta": "Fórmula principal de la aceleración en MRUA:",
                    "respuesta": "$a = (V_f - V_i)/t$.",
                    "tema": "MRUA",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-020",
                    "pregunta": "Interpretación técnica de una aceleración de $10,m/s^2$:",
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
                    "pregunta": "En $45^circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
                    "respuesta": "Ambas componentes se multiplican por $sqrt{2}$.",
                    "tema": "Vectores",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-023",
                    "pregunta": "En $30^circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
                    "respuesta": "La componente en X se multiplica por $sqrt{3}$ y la componente en Y no se multiplica por raíz.",
                    "tema": "Vectores",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-024",
                    "pregunta": "En $60^circ$, ¿qué ocurre con las componentes del vector en X y Y en el método rápido?",
                    "respuesta": "La componente en X no se multiplica por raíz y la componente en Y se multiplica por $sqrt{3}$.",
                    "tema": "Vectores",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-025",
                    "pregunta": "Aproximaciones usadas para raíces en el método rápido:",
                    "respuesta": "$sqrt{2}approx 1.4$ y $sqrt{3}approx 1.7$.",
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
                }
            ]
        },
        {
            "title": "Apuntes de Física",
            "titleIconLeft": "fa-atom",
            "titleIconRight": "fa-person-running",
            "titleStyle": "color: #0e7490;",
            "mainTopicId": "mainTopicFisica3",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Física",
            "mainTopicIcon1": "fa-car-side",
            "mainTopicIcon2": "fa-scale-balanced",
            "mainTopicSubtitle": "Clase 3: Cinemática y Dinámica (procedimientos rápidos)",
            "branches": [
                {
                    "id": "nodes-fis3-1",
                    "topicIdx": 1,
                    "title": "1. MRUA: Aceleración",
                    "icon": "fa-arrow-trend-up",
                    "subnodes": [
                        {
                            "icon": "fa-circle-info",
                            "delay": "0.1s",
                            "title": "MRU vs. MRUA",
                            "content": "<p>En el <b>MRU</b> la velocidad se mantiene constante. En el <b>MRUA</b> la velocidad <b>sí cambia</b>; a ese cambio se le llama <b>aceleración</b>.</p>"
                        },
                        {
                            "icon": "fa-gauge-high",
                            "delay": "0.2s",
                            "title": "Aceleración ($a$)",
                            "content": "<p><b>Unidad:</b> $m/s^2$.</p><p><b>Significado:</b> si un objeto tiene $a=10\\,m/s^2$, su velocidad aumenta $10\\,m/s$ <b>cada segundo</b>.</p>"
                        },
                        {
                            "icon": "fa-square-root-variable",
                            "delay": "0.3s",
                            "title": "Fórmula principal",
                            "content": "<p>La expresión principal para calcular aceleración es:</p><p>$a = \\frac{V_f - V_i}{t}$</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis3-2",
                    "topicIdx": 2,
                    "title": "2. Descomposición de Vectores",
                    "icon": "fa-location-arrow",
                    "subnodes": [
                        {
                            "icon": "fa-diagram-project",
                            "delay": "0.1s",
                            "title": "Método de la mitad",
                            "content": "<p>Para los ángulos de $45^\\circ$, $30^\\circ$ y $60^\\circ$ se utiliza un procedimiento de cálculo rápido:</p><ol><li><b>Dividir</b> la magnitud del vector a la mitad.</li><li><b>Multiplicar</b> por la raíz correspondiente según el ángulo.</li></ol>"
                        },
                        {
                            "icon": "fa-table",
                            "delay": "0.2s",
                            "title": "Tabla de componentes",
                            "content": "<table class='table'><thead><tr><th>Ángulo</th><th>Componente en X</th><th>Componente en Y</th><th>Valor aproximado</th></tr></thead><tbody><tr><td>$45^\\circ$</td><td>Se multiplica por $\\sqrt{2}$</td><td>Se multiplica por $\\sqrt{2}$</td><td>$\\sqrt{2}\\approx 1.4$</td></tr><tr><td>$30^\\circ$</td><td>Se multiplica por $\\sqrt{3}$</td><td>No se multiplica por raíz</td><td>$\\sqrt{3}\\approx 1.7$</td></tr><tr><td>$60^\\circ$</td><td>No se multiplica por raíz</td><td>Se multiplica por $\\sqrt{3}$</td><td>$\\sqrt{3}\\approx 1.7$</td></tr></tbody></table>"
                        },
                        {
                            "icon": "fa-weight-hanging",
                            "delay": "0.3s",
                            "title": "Peso en un sistema de vectores",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-bullseye'></i> <b>TIP DE EXAMEN:</b><br>Si se solicita el <b>peso (P)</b> en un sistema de vectores, se consideran únicamente las <b>componentes en Y</b> y se suman. El peso se representa como una flecha <b>hacia abajo</b>, es decir, con signo <b>negativo</b> en el eje $y$.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis3-3",
                    "topicIdx": 3,
                    "title": "3. Gráficas de Movimiento",
                    "icon": "fa-chart-line",
                    "subnodes": [
                        {
                            "icon": "fa-road",
                            "delay": "0.1s",
                            "title": "MRU (velocidad constante)",
                            "content": "<p><b>Distancia-Tiempo:</b> línea diagonal recta.</p><p><b>Velocidad-Tiempo:</b> línea horizontal.</p>"
                        },
                        {
                            "icon": "fa-bezier-curve",
                            "delay": "0.2s",
                            "title": "MRUA (aceleración)",
                            "content": "<p>Si una gráfica de movimiento presenta una <b>curva</b>, corresponde a un movimiento con aceleración (MRUA).</p>"
                        },
                        {
                            "icon": "fa-star",
                            "delay": "0.3s",
                            "title": "Criterio de identificación rápida",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-magnifying-glass'></i> <b>REGLA:</b><br>En ejercicios de identificación, el rasgo decisivo es la forma: <b>curva</b> implica aceleración; <b>recta</b> implica movimiento uniforme.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis3-4",
                    "topicIdx": 4,
                    "title": "4. Dinámica, Masa/Peso y Newton",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-weight-scale",
                            "delay": "0.1s",
                            "title": "Masa vs. peso",
                            "content": "<p><b>Masa:</b> cantidad de materia; se mide en <b>kilogramos (kg)</b>.</p><p><b>Peso (W):</b> es una <b>fuerza</b>; se mide en <b>Newtons (N)</b>.</p><div class='exam-tip'><i class='fa-solid fa-calculator'></i> <b>APROXIMACIÓN:</b><br>Para cálculos rápidos se considera $g=10\\,m/s^2$.</div>"
                        },
                        {
                            "icon": "fa-arrow-up-right-dots",
                            "delay": "0.2s",
                            "title": "Conversión rápida con $g=10$",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-bolt'></i> <b>PROCEDIMIENTO RÁPIDO:</b><br>Si se tiene masa y se requiere peso: $W=m\\cdot g$ (con $g=10$). Ejemplo: $60\\,kg \\rightarrow 600\\,N$.<br>Si se tiene peso y se requiere masa: $m=W/g$. Ejemplo: $500\\,N \\rightarrow 50\\,kg$.</div>"
                        },
                        {
                            "icon": "fa-hand-fist",
                            "delay": "0.3s",
                            "title": "Leyes de Newton (ideas base)",
                            "content": "<ul><li><b>Inercia:</b> un cuerpo permanece en reposo o con velocidad constante si no actúa una fuerza neta.</li><li><b>Fuerza:</b> $F=m\\cdot a$.</li><li><b>Acción-reacción:</b> a toda fuerza se opone otra de igual magnitud y sentido opuesto.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-fis3-5",
                    "topicIdx": 1,
                    "title": "5. Equilibrio y Torcas",
                    "icon": "fa-arrows-rotate",
                    "subnodes": [
                        {
                            "icon": "fa-balance-scale",
                            "delay": "0.1s",
                            "title": "Condiciones de equilibrio",
                            "content": "<p><b>Equilibrio traslacional:</b> suma de fuerzas igual a cero.</p><p><b>Equilibrio rotacional:</b> suma de torcas igual a cero.</p>"
                        },
                        {
                            "icon": "fa-lever",
                            "delay": "0.2s",
                            "title": "Regla de la palanca",
                            "content": "<p>Para que una palanca esté en equilibrio:</p><p>$F_1\\cdot d_1 = F_2\\cdot d_2$</p>"
                        },
                        {
                            "icon": "fa-arrows-to-dot",
                            "delay": "0.3s",
                            "title": "Procedimiento de cálculo rápido",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-draw-polygon'></i> <b>PROCEDIMIENTO:</b><br>Se acomodan tres datos, se trazan correspondencias y se multiplica el par que se encuentra en el mismo lado para dividir entre el dato restante. Es un uso directo de proporcionalidad en el equilibrio de la palanca.</div>"
                        },
                        {
                            "icon": "fa-fire",
                            "delay": "0.4s",
                            "title": "Reglas finales",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-plus-minus'></i> <b>SIGNOS EN VECTORES:</b><br>Derecha/arriba se consideran positivos; izquierda/abajo se consideran negativos.</div><div class='exam-tip'><i class='fa-solid fa-arrow-down'></i> <b>CAÍDA LIBRE:</b><br>La velocidad inicial es $v_0=0$ cuando el objeto se suelta desde el reposo. Para rapidez se puede usar $v=\\sqrt{2gh}$ con $g=10$ para facilitar la raíz (por ejemplo, $\\sqrt{400}=20$).</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/joFPI-Tr-Bw",
            "id": "content-fisica-3",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "En el MRUA, la velocidad se caracteriza porque:",
                        "opciones": [
                            "Se mantiene constante.",
                            "Cambia con el tiempo.",
                            "Siempre es cero.",
                            "No tiene unidades."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En el MRUA la velocidad no permanece constante: cambia con el tiempo. Esa variación es lo que define la presencia de aceleración."
                    },
                    {
                        "numero": 2,
                        "pregunta": "La aceleración se mide en:",
                        "opciones": [
                            "$m/s$",
                            "$m/s^2$",
                            "$N$",
                            "$kg$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La aceleración es cambio de velocidad por unidad de tiempo, por eso sus unidades son metros por segundo al cuadrado ($m/s^2$)."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Cuál expresión permite calcular la aceleración a partir de velocidades y tiempo?",
                        "opciones": [
                            "$a = (V_f - V_i)/t$",
                            "$a = d/t$",
                            "$a = mcdot g$",
                            "$a = V_f + V_i$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "La fórmula principal del MRUA es $a=(V_f-V_i)/t$, donde se usa el cambio de velocidad dividido entre el tiempo."
                    },
                    {
                        "numero": 4,
                        "pregunta": "La masa y el peso se diferencian porque:",
                        "opciones": [
                            "Ambas se miden en Newtons.",
                            "La masa es fuerza y el peso es materia.",
                            "La masa se mide en kg y el peso es una fuerza en N.",
                            "El peso no depende de la gravedad."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La masa es cantidad de materia (kg). El peso es una fuerza (N) asociada a la gravedad."
                    },
                    {
                        "numero": 5,
                        "pregunta": "En una gráfica velocidad-tiempo ($v$-$t$), una línea horizontal representa:",
                        "opciones": [
                            "MRU (velocidad constante).",
                            "MRUA (aceleración).",
                            "Caída libre exclusivamente.",
                            "Equilibrio rotacional."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "En una gráfica $v$-$t$, una línea horizontal significa velocidad constante; por lo tanto describe MRU."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Un objeto cambia su velocidad de $5,m/s$ a $25,m/s$ en $4,s$. ¿Cuál es su aceleración?",
                        "opciones": [
                            "$5,m/s^2$",
                            "$20,m/s^2$",
                            "$30,m/s^2$",
                            "$80,m/s^2$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Se aplica $a=(V_f-V_i)/t=(25-5)/4=20/4=5,m/s^2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Usando $g=10,m/s^2$, ¿cuál es el peso aproximado de una masa de $70,kg$?",
                        "opciones": [
                            "$70,N$",
                            "$700,N$",
                            "$7,N$",
                            "$7000,N$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El peso es una fuerza: $W=mcdot g=70cdot 10=700,N$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "En una palanca en equilibrio, $F_1=40,N$ actúa a $d_1=0.5,m$. Si el otro brazo tiene $d_2=0.2,m$, ¿cuánto vale $F_2$?",
                        "opciones": [
                            "$16,N$",
                            "$80,N$",
                            "$100,N$",
                            "$200,N$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Equilibrio de torcas: $F_1 d_1=F_2 d_2$. Entonces $F_2=(40cdot0.5)/0.2=100,N$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Un vector de magnitud 10 N forma $45^circ$ con el eje X. Usando el método de la mitad y $sqrt{2}approx 1.4$, ¿cuáles son sus componentes aproximadas (X, Y)?",
                        "opciones": [
                            "(7 N, 7 N)",
                            "(5 N, 5 N)",
                            "(10 N, 0 N)",
                            "(8.5 N, 1.5 N)"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Se divide a la mitad: 10/2=5. En $45^circ$, ambas componentes se multiplican por $sqrt{2}$: $5cdot1.4approx7$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Según la regla de identificación rápida, si una gráfica de movimiento presenta una curva, entonces el movimiento es:",
                        "opciones": [
                            "MRUA (hay aceleración).",
                            "MRU (velocidad constante).",
                            "Equilibrio traslacional.",
                            "Acción-reacción."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El criterio indica que una curva en una gráfica de movimiento implica aceleración; por eso corresponde a MRUA."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "fis-018",
                    "pregunta": "¿Qué diferencia al MRUA del MRU?",
                    "respuesta": "En el MRUA la velocidad cambia (hay aceleración); en el MRU la velocidad es constante.",
                    "tema": "Cinemática",
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
                    "respuesta": "$W = mcdot g$ (con $gapprox 10,m/s^2$ para cálculo rápido).",
                    "tema": "Dinámica",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-031",
                    "pregunta": "Leyes de Newton (resumen):",
                    "respuesta": "1) Inercia. 2) $F=mcdot a$. 3) Acción-reacción: fuerzas iguales y opuestas.",
                    "tema": "Leyes de Newton",
                    "asignatura": "Física"
                },
                {
                    "id": "fis-032",
                    "pregunta": "Condiciones de equilibrio traslacional y rotacional:",
                    "respuesta": "Traslacional: suma de fuerzas = 0. Rotacional: suma de torcas = 0.",
                    "tema": "Equilibrio",
                    "asignatura": "Física"
                }
            ]
        }
    ]
};
