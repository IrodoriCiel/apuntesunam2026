export const matematicas = {
    "id": "matematicas",
    "nombre": "Matemáticas",
    "clases": [
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-infinity",
            "mainTopicSubtitle": "Clase 1: El Término y Reglas Algebraicas",
            "branches": [
                {
                    "id": "nodes-mat-1",
                    "topicIdx": 1,
                    "title": "1. El Término: Anatomía",
                    "icon": "fa-puzzle-piece",
                    "subnodes": [
                        {
                            "icon": "fa-cubes",
                            "delay": "0.1s",
                            "title": "Estructura Base",
                            "content": "<p>Un término tiene <b>coeficiente</b> (número grande), <b>literal</b> (letra) y <b>exponente</b> (número chiquito).</p>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "Coeficiente (Número Grande)",
                            "content": "<p>Se comportan como en la primaria: Si es suma, sumas normal; si es división, divides normal ($100 / 50 = 2$).</p><div class='exam-tip'><i class='fa-solid fa-circle-exclamation'></i> <b>TIP DE EXAMEN:</b><br>Si una letra está sola (ej. $x$), su coeficiente invisible es <b>1</b>. Siempre dale valor, si lo ignoras, el resultado estará mal.</div>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.3s",
                            "title": "Exponente (Número Chiquito)",
                            "content": "<p>No funcionan como los de la primaria; tienen reglas especiales según la operación. Si una letra no tiene exponente visible, su valor es <b>1</b>.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat-2",
                    "topicIdx": 2,
                    "title": "2. Formación",
                    "icon": "fa-layer-group",
                    "subnodes": [
                        {
                            "icon": "fa-list-ol",
                            "delay": "0.1s",
                            "title": "¿Cómo contar términos?",
                            "content": "<p>Lo que separa a los términos son <b>los signos</b> ($+$ y $-$).</p><div class='exam-tip'><i class='fa-solid fa-triangle-exclamation'></i> <b>PREGUNTA DE EXAMEN (La Trampa):</b><br>$2x^3y^5m^4$ es <b>UN</b> solo término (no hay signos en medio).<br><br><b>Ejemplo normal:</b> $a + b - 2$ son <b>tres</b> términos.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat-3",
                    "topicIdx": 3,
                    "title": "3. Suma y Resta",
                    "icon": "fa-plus-minus",
                    "subnodes": [
                        {
                            "icon": "fa-scale-balanced",
                            "delay": "0.1s",
                            "title": "Términos Semejantes",
                            "content": "<p><b>Regla de oro:</b> Solo puedes sumar o restar si son términos semejantes.</p><p><b>¿Qué es semejante?:</b> Misma letra <b>Y</b> mismo exponente. Si algo falla (ej. $x$ vs $x^2$), no se pueden tocar, se pasan igual al resultado.</p><div class='exam-tip'><i class='fa-solid fa-lightbulb'></i> <b>TIP:</b><br>El orden de las letras no importa ($xy$ es lo mismo que $yx$). El examen de la UNAM suele respetar el orden alfabético al poner opciones.</div>"
                        },
                        {
                            "icon": "fa-skull-crossbones",
                            "delay": "0.2s",
                            "title": "Suma y Resta de Signos",
                            "content": "<p><b>Nota importante:</b> En suma y resta <b>NO</b> se usa la \"Ley de los Signos\" (eso de menos por menos es más). Eso es solo para multiplicar.</p><div class='exam-tip'><i class='fa-solid fa-check-double'></i> <b>REGLA PARA NO FALLAR:</b><br><b>Signos iguales:</b> Se suman los números y se deja el mismo signo (ej. $-5 - 3 = -8$).<br><b>Signos diferentes:</b> Al número más grande le quitas el chico y dejas el signo del más fuerte (ej. $-10 + 2 = -8$).</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat-4",
                    "topicIdx": 4,
                    "title": "4. Multiplicación",
                    "icon": "fa-xmark",
                    "subnodes": [
                        {
                            "icon": "fa-handshake",
                            "delay": "0.1s",
                            "title": "Regla General",
                            "content": "<p>Aquí es \"todos contra todos\", no importa si son semejantes. Se siguen tres casos principales:</p>"
                        },
                        {
                            "icon": "fa-equals",
                            "delay": "0.2s",
                            "title": "1. Letras Iguales",
                            "content": "<p>Los exponentes <b>SE SUMAN</b>. ($x^3 \\cdot x^5 = x^8$).</p>"
                        },
                        {
                            "icon": "fa-not-equal",
                            "delay": "0.3s",
                            "title": "2. Letras Diferentes",
                            "content": "<p>Solo se <b>\"pegan\"</b>. ($x \\cdot y = xy$).</p>"
                        },
                        {
                            "icon": "fa-object-group",
                            "delay": "0.4s",
                            "title": "3. Combinadas",
                            "content": "<p>Sumas los exponentes de las que son iguales y pegas las que son diferentes. ($x^2 \\cdot x^3y = x^5y$).</p><div class='exam-tip'><i class='fa-solid fa-shield-halved'></i> <b>NOTA DE SUPERVIVENCIA:</b><br>Nunca olvides que $a \\cdot a = a^2$ (porque sumas los exponentes invisibles $1 + 1$).</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/pcp5EiQtwag",
            "id": "content-matematicas-1",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuántos términos algebraicos tiene la expresión $5x^2y^3 + 2xy - 8$?",
                        "opciones": [
                            "1",
                            "2",
                            "3",
                            "4"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Los términos se separan únicamente por los signos de suma (+) y resta (-). En este caso, $5x^2y^3$, $2xy$ y $-8$ componen exactamente 3 términos distintos."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Al simplificar la expresión $-7 + 4 - 2$, el resultado final es:",
                        "opciones": [
                            "$-5$",
                            "$5$",
                            "$-9$",
                            "$-1$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Primero agrupamos signos iguales (se suman): $-7 - 2 = -9$. Luego operamos los diferentes (se restan y queda el signo del mayor): $-9 + 4 = -5$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Cuál es el resultado simplificado de multiplicar algebraicamente $(2x^3)(3x^4)$?",
                        "opciones": [
                            "$5x^7$",
                            "$6x^{12}$",
                            "$6x^7$",
                            "$5x^{12}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "En la multiplicación, los coeficientes se multiplican normalmente (2 \\cdot 3 = 6) y, como son letras iguales, los exponentes se suman (3 + 4 = 7)."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Simplifica los términos semejantes de la siguiente expresión: $3a^2 + 5a - 2a^2 + a$",
                        "opciones": [
                            "$a^2 + 6a$",
                            "$5a^2 + 4a$",
                            "$a^2 + 4a$",
                            "$5a^2 + 6a$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Solo se operan términos semejantes. Las $a^2$: $3 - 2 = 1a^2$. Las $a$: recuerden que la $a$ sola vale $1a$, por lo tanto $5 + 1 = 6a$. Resultado ordenado: $a^2 + 6a$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuál es el resultado de simplificar la expresión $5x - 3x + 2x$?",
                        "opciones": [
                            "$x$",
                            "$2x$",
                            "$4x$",
                            "$5x$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Agrupamos operando los coeficientes y conservando la literal: $5 - 3 + 2 = 4$. El resultado es $4x$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál de los siguientes pares de términos son seméjantes y pueden operarse directamente?",
                        "opciones": [
                            "$3x^2$ y $3x^3$: misma letra, diferente exponente.",
                            "$5xy$ y $5x$: diferente cantidad de literales.",
                            "$-7a^2b$ y $4a^2b$: misma letra Y mismo exponente.",
                            "$2x$ y $2y$: diferente letra."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La regla de la clase: términos seméjantes deben tener la MISMA letra Y el MISMO exponente. Solo $-7a^2b$ y $4a^2b$ cumplen ambas, por lo que $-7a^2b + 4a^2b = -3a^2b$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Simplifica agrupando términos seméjantes: $5x^2 - 3x + 2x^2 + x - x^2$",
                        "opciones": [
                            "$6x^2 - 2x$",
                            "$7x^2 + 2x$",
                            "$6x^2 + 2x$",
                            "$8x^2 - 2x$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Agrupamos los $x^2$: $5 + 2 - 1 = 6x^2$ (el $-x^2$ es $-1x^2$). Agrupamos los $x$: $-3 + 1 = -2x$. Resultado: $6x^2 - 2x$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Cuál es el resultado de multiplicar $(-3x^2)(5x^3)$?",
                        "opciones": [
                            "$-15x^5$",
                            "$15x^5$",
                            "$-15x^6$",
                            "$2x^5$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Coeficientes con ley de signos: $-3 \\times 5 = -15$. Letras iguales, exponentes se suman: $x^2 \\cdot x^3 = x^5$. Resultado: $-15x^5$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Simplifica agrupando términos seméjantes: $7m - 5n + 2m + 3n$",
                        "opciones": [
                            "$9m - 2n$",
                            "$5m - 2n$",
                            "$9m + 8n$",
                            "$5m + 8n$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Agrupamos los $m$: $7 + 2 = 9m$. Los $n$: signos diferentes, el mayor es $-5$ al que le quitamos 3: $-5 + 3 = -2n$. Resultado: $9m - 2n$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Resultado de multiplicar $(-2x^2)(3xy^3)(-x)$:",
                        "opciones": [
                            "$6x^4y^3$",
                            "$-6x^3y^3$",
                            "$6x^3y^3$",
                            "$-6x^4y^3$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Signos: $(-) \\cdot (+) \\cdot (-) = +$. Coeficientes: $2 \\cdot 3 \\cdot 1 = 6$. Exponentes de $x$: $2 + 1 + 1 = 4$. Variable $y$: queda $y^3$."
                    }
                ]
            },
            "flashcards": [
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
                    "id": "mat-019",
                    "pregunta": "¿Cuál es la diferencia crítica de exponentes entre Suma y Multiplicación?",
                    "respuesta": "En Suma los exponentes NO cambian. En Multiplicación los exponentes SE SUMAN.",
                    "tema": "Álgebra: Reglas",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-028",
                    "pregunta": "¿Qué es la agrupación de términos semejantes?",
                    "respuesta": "Es el nombre técnico que recibe la suma y resta de expresiones algebraicas.",
                    "tema": "Agrupación",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas2",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-infinity",
            "mainTopicSubtitle": "Clase 2: Multiplicación y Binomios",
            "branches": [
                {
                    "id": "nodes-mat2-1",
                    "topicIdx": 1,
                    "title": "1. Multiplicación Algebraica",
                    "icon": "fa-xmark",
                    "subnodes": [
                        {
                            "icon": "fa-handshake",
                            "delay": "0.1s",
                            "title": "Las Reglas",
                            "content": "<p>En la multiplicación no importa si los términos son semejantes; aquí es <b>\"todos contra todos\"</b>.</p>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "Coeficientes (Números grandes)",
                            "content": "<p>Se multiplican normal, como en la primaria ($3 \\cdot 5 = 15$). Se aplica la ley de signos (+ por - = -, etc.).</p>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.3s",
                            "title": "Exponentes (Números chiquitos)",
                            "content": "<p><b>Letras iguales:</b> Los exponentes <b>SE SUMAN</b> ($x^2 \\cdot x^3 = x^5$).<br><b>Letras diferentes:</b> Solo se <b>\"pegan\"</b> ($x \\cdot y = xy$).</p><div class='exam-tip'><i class='fa-solid fa-file-pen'></i> <b>NOTA DE EXAMEN:</b><br>El número 1 es invisible tanto en coeficientes como en exponentes. Si ves una $x$ sola, recuerda que es $1x^1$.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat2-2",
                    "topicIdx": 2,
                    "title": "2. Polinomios",
                    "icon": "fa-tags",
                    "subnodes": [
                        {
                            "icon": "fa-font",
                            "delay": "0.1s",
                            "title": "Nombres de los Polinomios",
                            "content": "<p>Aunque el examen no te pida los nombres, te sirven para entender las instrucciones:</p><ul><li><b>Monomio:</b> 1 término.</li><li><b>Binomio:</b> 2 términos.</li><li><b>Trinomio:</b> 3 términos.</li><li><b>Cuatrinomio:</b> 4 términos.</li><li><b>Polinomio:</b> Nombre general para todos.</li></ul>"
                        },
                        {
                            "icon": "fa-crow",
                            "delay": "0.2s",
                            "title": "Monomio por Polinomio",
                            "content": "<p><b>(Propiedad Distributiva)</b></p><p>Cuando multiplicas un término chiquito por uno grande (ej. $2x(3x - 5y)$), el término de afuera se multiplica contra todos los de adentro, uno por uno.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>EJEMPLO:</b><br>$2x \\cdot 3x = 6x^2$<br>$2x \\cdot -5y = -10xy$<br><b>Resultado:</b> $6x^2 - 10xy$.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat2-3",
                    "topicIdx": 3,
                    "title": "3. Binomios Conjugados",
                    "icon": "fa-gem",
                    "subnodes": [
                        {
                            "icon": "fa-key",
                            "delay": "0.1s",
                            "title": "Diferencia de Cuadrados",
                            "content": "<p>¡TEMA CLAVE DE EXAMEN! Identificarlos es el 50% del éxito.</p><p><b>¿Cómo se ven?:</b> Es lo mismo por lo mismo, pero uno suma y el otro resta. Ej: $(2m + 3y)(2m - 3y)$.</p>"
                        },
                        {
                            "icon": "fa-bolt",
                            "delay": "0.2s",
                            "title": "Atajo (Ley Universal)",
                            "content": "<p>No hagas toda la multiplicación. Solo haz: <b>Primero por Primero</b> y <b>Segundo por Segundo</b>.</p><p>$(2m \\cdot 2m) = 4m^2$<br>$(3y \\cdot -3y) = -9y^2$<br><b>Resultado:</b> $4m^2 - 9y^2$.</p><div class='exam-tip'><i class='fa-solid fa-circle-exclamation'></i> <b>NOTA IMPORTANTE:</b><br>El signo que separa el resultado <b>SIEMPRE</b> será negativo.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat2-4",
                    "topicIdx": 4,
                    "title": "4. Casos Especiales y Tips",
                    "icon": "fa-star",
                    "subnodes": [
                        {
                            "icon": "fa-icicles",
                            "delay": "0.1s",
                            "title": "Tip de Raíces",
                            "content": "<p><b>(Regla de la Raíz)</b></p><p>A la UNAM le encanta poner los binomios conjugados con raíces.</p><p><b>Ley Universal:</b> Raíz igual por raíz igual = el número de adentro sin raíz.</p><div class='exam-tip'><i class='fa-solid fa-scale-balanced'></i> <b>EJEMPLO DE EXAMEN:</b><br>$(\\sqrt{x} + 3)(\\sqrt{x} - 3)$<br><br>$\\sqrt{x} \\cdot \\sqrt{x} = x$<br>$3 \\cdot -3 = -9$<br><b>Resultado:</b> $x - 9$.<br><br>Otro ejemplo (2025): $(5 - \\sqrt{2y})(5 + \\sqrt{2y}) = 25 - 2y$.</div>"
                        },
                        {
                            "icon": "fa-triangle-exclamation",
                            "delay": "0.2s",
                            "title": "Diferencia Crítica",
                            "content": "<p><b>Suma vs. Multiplicación</b>:</p><div class='exam-tip'><i class='fa-solid fa-eye'></i> <b>REGLA:</b><br><b>En la Suma ($x + x$):</b> Los exponentes NO cambian (son \"tu ex\"). Resultado: $2x$.<br><b>En la Multiplicación ($x \\cdot x$):</b> Los exponentes SE SUMAN. Resultado: $x^2$.</div>"
                        },
                        {
                            "icon": "fa-thumbtack",
                            "delay": "0.3s",
                            "title": "Otros Tips de Examen",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-list-ol'></i> <b>ORDEN:</b> No te pelees con el orden alfabético. La UNAM suele poner los resultados en los incisos respetando el mismo orden en que te dieron los términos en el problema.<br><br><i class='fa-solid fa-book-open'></i> <b>INSTRUCCIONES:</b> Si dice \"Desarrolla el producto\" o \"Simplifica el siguiente polinomio\", fíjate si tiene el formato de binomio conjugado para usar el atajo de \"primero por primero\".</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/ycK839SkxIo",
            "id": "content-matematicas-2",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "Identifica el resultado de desarrollar el siguiente binomio conjugado: $(4x + 5y)(4x - 5y)$",
                        "opciones": [
                            "$16x^2 + 25y^2$",
                            "$16x^2 - 10y^2$",
                            "$8x^2 - 10y^2$",
                            "$16x^2 - 25y^2$"
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "Siguiendo la ley universal de los binomios conjugados, multiplicamos primero por primero ($4x \\cdot 4x = 16x^2$) y segundo por segundo ($5y \\cdot -5y = -25y^2$). El signo entre ellos siempre es negativo."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Simplifica la siguiente expresión: $(\\sqrt{x} + 7)(\\sqrt{x} - 7)$",
                        "opciones": [
                            "$x - 14$",
                            "$x^2 - 49$",
                            "$x - 49$",
                            "$x + 49$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Por la regla de raíces, $\\sqrt{x} \\cdot \\sqrt{x} = x$ (sale de la raíz). Y $7 \\cdot -7 = -49$. Por ende, el resultado es $x - 49$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Desarrolla el siguiente producto: $3a(2a^2 - 4b)$",
                        "opciones": [
                            "$6a^3 - 12ab$",
                            "$5a^3 - 7ab$",
                            "$6a^2 - 12ab$",
                            "$6a^3 - 12a$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Aplicando la propiedad distributiva (un monomio por un polinomio), multiplicamos el término exterior por cada uno del interior: $3a \\cdot 2a^2 = 6a^3$ y $3a \\cdot -4b = -12ab$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿En qué operación los exponentes SÍ se suman?",
                        "opciones": [
                            "En la suma ($x^2 + x^2$)",
                            "En la división ($\\frac{x^3}{x}$)",
                            "En la multiplicación ($x^2 \\cdot x^3$)",
                            "En la resta ($x^3 - x^2$)"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "En la multiplicación los exponentes se suman (ej. $x \\cdot x = x^2$). En la suma y resta, los exponentes nunca cambian ('son tu ex')."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Identifica el resultado de $(x+4)(x-4)$",
                        "opciones": [
                            "$x^2 + 16$",
                            "$x^2 - 16$",
                            "$x^2 - 8$",
                            "$x^2 + 8x - 16$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Es un binomio conjugado, se resuelve elevando el primero al cuadrado menos el cuadrado del segundo: $(x)^2 - (4)^2 = x^2 - 16$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Desarrolla el producto aplicando la propiedad distributiva (monomio por polinomio): $4x(2x^2 - 3y + 1)$",
                        "opciones": [
                            "$8x^3 - 12xy + 4x$",
                            "$8x^3 + 12xy - 4x$",
                            "$8x^2 - 12xy + 4x$",
                            "$6x^3 - 7xy + 5x$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El monomio $4x$ se multiplica con cada término interior: $4x \\cdot 2x^2 = 8x^3$, $4x \\cdot (-3y) = -12xy$, $4x \\cdot 1 = 4x$. Resultado: $8x^3 - 12xy + 4x$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Cuál es el resultado de $(\\sqrt{3x} + 2)(\\sqrt{3x} - 2)$?",
                        "opciones": [
                            "$3x - 2$",
                            "$3x - 4$",
                            "$9x - 4$",
                            "$3x + 4$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Binomio conjugado: $(\\sqrt{3x})^2 - (2)^2 = 3x - 4$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Identifica el resultado correcto del binomio conjugado $(5a - 3b)(5a + 3b)$:",
                        "opciones": [
                            "$25a^2 + 9b^2$",
                            "$10a^2 - 6b^2$",
                            "$25a^2 - 9b^2$",
                            "$25a^2 - 15b^2$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Ley universal del conjugado: primero por primero ($5a \\cdot 5a = 25a^2$) y segundo por segundo ($3b \\cdot -3b = -9b^2$). El signo entre ellos SIEMPRE es negativo. Resultado: $25a^2 - 9b^2$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Desarrolla el producto usando la propiedad distributiva: $-3m(2m^2 + 5n - 4)$",
                        "opciones": [
                            "$-6m^3 - 15mn + 12m$",
                            "$-6m^3 + 15mn - 12m$",
                            "$6m^3 - 15mn + 12m$",
                            "$-6m^3 - 15mn - 12m$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El monomio $-3m$ se distribuye: $-3m \\cdot 2m^2 = -6m^3$, $-3m \\cdot 5n = -15mn$, $-3m \\cdot (-4) = +12m$. Resultado: $-6m^3 - 15mn + 12m$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuál es el resultado del binomio conjugado $(\\sqrt{2a} - \\sqrt{5b})(\\sqrt{2a} + \\sqrt{5b})$?",
                        "opciones": [
                            "$2a + 5b$",
                            "$4a - 25b$",
                            "$2a - 5b$",
                            "$\\sqrt{10ab}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Por la regla de raíces de la clase: raíz igual por raíz igual = el número sin raíz. $\\sqrt{2a} \\cdot \\sqrt{2a} = 2a$ y $\\sqrt{5b} \\cdot (-\\sqrt{5b}) = -5b$. Resultado: $2a - 5b$."
                    }
                ]
            },
            "flashcards": [
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
                    "id": "mat-029",
                    "pregunta": "¿Cuál es el desarrollo de binomios con término común (x + a)(x + b)?",
                    "respuesta": "x² + (a + b)x + ab. Ej: (x+3)(x+5)=x²+8x+15.",
                    "tema": "Productos Notables",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas3",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-infinity",
            "mainTopicSubtitle": "Clase 3: Triángulo de Pascal y Reglas de Expansión",
            "branches": [
                {
                    "id": "nodes-mat3-1",
                    "topicIdx": 1,
                    "title": "1. El Triángulo de Pascal",
                    "icon": "fa-caret-up",
                    "subnodes": [
                        {
                            "icon": "fa-bolt",
                            "delay": "0.1s",
                            "title": "Función Principal",
                            "content": "<p>Para elevar un binomio $(a \\pm b)^n$ de forma rápida, se utilizan los coeficientes del Triángulo de Pascal.</p>"
                        },
                        {
                            "icon": "fa-hammer",
                            "delay": "0.2s",
                            "title": "Construcción",
                            "content": "<p>Se inicia con un $1$ en la punta. En el siguiente nivel se colocan dos $1$. Los niveles posteriores se obtienen sumando los dos números superiores inmediatos y cerrando siempre los extremos con un $1$.</p><div style='text-align: center; overflow-x: auto; margin-top: 15px;'>$$ \\begin{matrix} & & & & 1 \\\\ & & & 1 & & 1 \\\\ & & 1 & & 2 & & 1 \\\\ & 1 & & 3 & & 3 & & 1 \\\\ 1 & & 4 & & 6 & & 4 & & 1 \\end{matrix} $$</div>"
                        },
                        {
                            "icon": "fa-layer-group",
                            "delay": "0.3s",
                            "title": "Identificación del Nivel",
                            "content": "<p>El exponente del binomio te indica qué fila del triángulo usar.</p><ul><li>Si es $(a + b)^3$, usas el nivel 3 ($1, 3, 3, 1$).</li><li>Si es $(a + b)^4$, usas el nivel 4 ($1, 4, 6, 4, 1$).</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat3-2",
                    "topicIdx": 2,
                    "title": "2. Reglas de Expansión",
                    "icon": "fa-wrench",
                    "subnodes": [
                        {
                            "icon": "fa-arrow-right",
                            "delay": "0.1s",
                            "title": "1. Distribución de Literales (Letras)",
                            "content": "<p><b>Primer término ($a$):</b> Se coloca al principio elevado a la potencia máxima del binomio y su exponente disminuye en cada término hacia la derecha hasta desaparecer.</p><p><b>Segundo término ($b$):</b> Se coloca al final elevado a la potencia máxima y disminuye su exponente hacia la izquierda hasta desaparecer.</p><div class='exam-tip'><i class='fa-solid fa-lightbulb'></i> <b>NOTA DE EXAMEN:</b><br>Si la letra ya tiene un exponente original (ej. $x^2$), debes multiplicar ese exponente por la potencia externa para obtener el primer término del resultado.<br><b>Ejemplo:</b> $(x^2 \\dots)^3 \\rightarrow x^{2 \\cdot 3} = x^6$.</div>"
                        },
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.2s",
                            "title": "2. Manejo de Coeficientes (Números)",
                            "content": "<p>Si el binomio tiene números (ej. $2a + 3$), estos se tratan como términos completos y se elevan a la potencia correspondiente <b>antes</b> de multiplicarlos por el coeficiente del Triángulo de Pascal.</p><p><b>Proceso:</b> (Coeficiente del Triángulo) $\\cdot$ (Número del término elevado a su potencia actual).</p><div class='exam-tip'><i class='fa-solid fa-calculator'></i> <b>EJEMPLO:</b><br>En $(2a + 1)^3$: El primer término es $1 \\cdot (2a)^3 = 1 \\cdot 8a^3 = 8a^3$.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat3-3",
                    "topicIdx": 3,
                    "title": "3. Ley de Signos Universal",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-plus",
                            "delay": "0.1s",
                            "title": "Caso Positivo $(a + b)^n$",
                            "content": "<p>Todos los signos del resultado son positivos ($+$).</p>"
                        },
                        {
                            "icon": "fa-plus-minus",
                            "delay": "0.2s",
                            "title": "Caso Negativo $(a - b)^n$",
                            "content": "<p>Los signos se alternan, empezando siempre por positivo (el cual es invisible al principio): $(+, -, +, -, \\dots)$.</p>"
                        },
                        {
                            "icon": "fa-bolt",
                            "delay": "0.3s",
                            "title": "Importancia",
                            "content": "<p>Esta es la forma más rápida de descartar opciones incorrectas en el examen de la UNAM.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat3-4",
                    "topicIdx": 4,
                    "title": "4. Resolución Veloz",
                    "icon": "fa-bullseye",
                    "subnodes": [
                        {
                            "icon": "fa-stopwatch",
                            "delay": "0.1s",
                            "title": "Eliminación Rápida",
                            "content": "<p>En el examen de opción múltiple, muchas veces no necesitas desarrollar toda la operación:</p><div class='exam-tip'><i class='fa-solid fa-check-double'></i> <b>ESTRATEGIA PARA EL EXAMEN:</b><br><b>Regla de los Signos:</b> Si el binomio es negativo, busca en los incisos cuál cumple con la alternancia $(+, -, +, -)$. Esto elimina el 80% de las opciones falsas.<br><b>Primer y Último Término:</b> Calcula rápidamente el primer término y el último. Generalmente, solo una opción de respuesta coincide con ambos.<br><b>Variables Invisibles:</b> Recuerda que los coeficientes 1 y exponentes 1 no se escriben. $1x^1$ se ve como $x$.</div>"
                        },
                        {
                            "icon": "fa-pen-to-square",
                            "delay": "0.2s",
                            "title": "Ejemplo Tipo Examen (2025)",
                            "content": "<p><b>Desarrolla $(y - 2)^3$</b></p><ul><li><b>Nivel de Pascal (3):</b> Coeficientes $1, 3, 3, 1$.</li><li><b>Signos:</b> Alternados $(+, -, +, -)$.</li></ul> <div class='exam-tip'><i class='fa-solid fa-list-ol'></i> <b>DESARROLLO MENTAL:</b><br><b>Primer término:</b> $1 \\cdot y^3 = y^3$.<br><b>Segundo término:</b> $3 \\cdot (y^2) \\cdot (2^1) = 6y^2$.<br><b>Tercer término:</b> $3 \\cdot (y^1) \\cdot (2^2) = 12y$.<br><b>Cuarto término:</b> $1 \\cdot 2^3 = 8$.<br><b>Resultado final:</b> $y^3 - 6y^2 + 12y - 8$.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/fff86JMN_aI",
            "id": "content-matematicas-3",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Qué coeficientes del Triángulo de Pascal corresponden a un binomio elevado a la cuarta potencia $(a+b)^4$?",
                        "opciones": [
                            "$1, 3, 3, 1$",
                            "$1, 4, 4, 1$",
                            "$1, 4, 6, 4, 1$",
                            "$1, 5, 10, 10, 5, 1$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El nivel 4 del triángulo se obtiene al sumar los términos del nivel 3 ($1, 3, 3, 1$), dando como resultado $1, 4, 6, 4, 1$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Identifica rápidamente los signos correctos para desarrollar el binomio $(2x - 3y)^5$:",
                        "opciones": [
                            "Todos positivos $(+, +, +, +, +, +)$",
                            "Todos negativos $(-, -, -, -, -, -)$",
                            "Alternados empezando por menos $(-, +, -, +, -, +)$",
                            "Alternados empezando por más $(+, -, +, -, +, -)$"
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "Por la regla universal, si el binomio interior es una diferencia, los signos del resultado se alternan comenzando siempre por un signo positivo (aunque sea invisible en el primer término)."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Al desarrollar el binomio $(3a + 2b)^3$, ¿cuál es el primer y último término respectivamente?",
                        "opciones": [
                            "$9a^3$ y $4b^3$",
                            "$27a^3$ y $8b^3$",
                            "$3a^3$ y $2b^3$",
                            "$27a^3$ y $6b^3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El primer término se eleva a la máxima potencia del binomio: $(3a)^3 = 27a^3$. Ocurre lo mismo para el último término, que se ubicará al final de la expresión: $(2b)^3 = 8b^3$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Cuál es el resultado simplificado de desarrollar el binomio $(x^2 - 1)^3$?",
                        "opciones": [
                            "$x^6 - 3x^4 + 3x^2 - 1$",
                            "$x^5 - 3x^3 + 3x - 1$",
                            "$x^6 + 3x^4 + 3x^2 + 1$",
                            "$x^6 - 1$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Utilizando los coeficientes de Pascal $1, 3, 3, 1$ y sabiendo que el signo se alterna $(+, -, +, -)$. El exponente primario del primer término es $2$, por lo que se multiplicará por $3$: $(x^2)^3 = x^6$. Evaluando las opciones, su desarrollo formal coincide únicamente con la primera."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuántos términos tendrá el desarrollo de $(2a + 3b)^5$?",
                        "opciones": [
                            "4 términos",
                            "5 términos",
                            "6 términos",
                            "7 términos"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La regla universal indica que para un binomio elevado a la potencia $n$, el desarrollo tendrá $n+1$ términos. Como $n=5$, tendrá $5+1=6$ términos."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es el tercer término de $(x - y)^5$ usando el Triángulo de Pascal?",
                        "opciones": [
                            "$10x^3y^2$",
                            "$5x^3y^2$",
                            "$-10x^2y^3$",
                            "$-5x^4y$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Nivel 5 de Pascal: $1, 5, 10, 10, 5, 1$. Signos alternados $(+, -, +, ...)$. El tercer término es positivo y tiene el coeficiente $10$: $10x^3y^2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "En el desarrollo de $(2x + 1)^3$, ¿cuál es el valor del segundo término?",
                        "opciones": [
                            "$6x^2$",
                            "$12x^2$",
                            "$4x^2$",
                            "$8x^3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Fórmula: $3(2x)^2(1) = 3(4x^2) = 12x^2$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "¿Cuántos términos tiene el resultado final de expandir $(a + b)^9$?",
                        "opciones": [
                            "9",
                            "10",
                            "18",
                            "81"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En un binomio elevado a la potencia $n$, el número de términos es siempre $n + 1$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Determina el coeficiente de $x^2y^2$ en el desarrollo de $(x + y)^4$:",
                        "opciones": [
                            "4",
                            "6",
                            "1",
                            "12"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Nivel 4 de Pascal: $1, 4, 6, 4, 1$. El término central $(x^2y^2)$ corresponde al coeficiente $6$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Al desarrollar $(-x + 2)^3$ el primer término es:",
                        "opciones": [
                            "$-x^3$",
                            "$x^3$",
                            "$-3x^2$",
                            "$-8$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Elevamos el primer término al cubo: $(-x)^3 = -x^3$."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "mat-042",
                    "pregunta": "¿Cuántos términos tiene el desarrollo de un binomio $(a \\pm b)^n$?",
                    "respuesta": "Siempre n + 1 términos.",
                    "tema": "Triángulo de Pascal",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-043",
                    "pregunta": "¿Qué fila del Triángulo de Pascal se usa para $(a+b)^3$?",
                    "respuesta": "El nivel 3: coeficientes 1, 3, 3, 1.",
                    "tema": "Triángulo de Pascal",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-044",
                    "pregunta": "¿Qué fila del Triángulo de Pascal se usa para $(a+b)^4$?",
                    "respuesta": "El nivel 4: coeficientes 1, 4, 6, 4, 1.",
                    "tema": "Triángulo de Pascal",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-045",
                    "pregunta": "Si la literal tiene exponente interno al expandir un binomio (ej. $x^2$ en $(x^2+b)^3$), ¿cómo se obtiene el exponente del primer término?",
                    "respuesta": "Se multiplica el exponente interno por la potencia externa: $(x^2)^3 = x^{2 \\cdot 3} = x^6$.",
                    "tema": "Reglas de Expansión",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-046",
                    "pregunta": "En la expansión de un binomio con coeficientes numéricos, ¿cuál es el orden de operaciones?",
                    "respuesta": "Primero se elevan los números a la potencia correspondiente, luego se multiplican por el coeficiente del Triángulo de Pascal.",
                    "tema": "Reglas de Expansión",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas4",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-infinity",
            "mainTopicSubtitle": "Clase 4: Álgebra, Radicación y Productos Notables",
            "branches": [
                {
                    "id": "nodes-mat4-1",
                    "topicIdx": 1,
                    "title": "1. Agrupación de Términos Semejantes",
                    "icon": "fa-layer-group",
                    "subnodes": [
                        {
                            "icon": "fa-book-open",
                            "delay": "0.1s",
                            "title": "Definición Técnica",
                            "content": "<p><b>Suma y resta algebraica:</b> Es el nombre que recibe la agrupación de términos semejantes.</p><div class='exam-tip'><i class='fa-solid fa-triangle-exclamation'></i> <b>TÉRMINOS SEMEJANTES:</b><br>Para que dos o más términos puedan agruparse, deben compartir exactamente las mismas letras y los mismos exponentes.</div>"
                        },
                        {
                            "icon": "fa-pencil",
                            "delay": "0.2s",
                            "title": "Ejemplos de Reactivos",
                            "content": "<ul><li>$8m + m - 5m = \\mathbf{4m}$ (Recordar: $m = 1m$).</li><li>$-4a + 9a - 2a = \\mathbf{3a}$.</li><li>$10y - 3y + y = \\mathbf{8y}$.</li><li>$6x^2 + 4x^2 - x^2 = \\mathbf{9x^2}$.</li><li>$7k - k = \\mathbf{6k}$.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat4-2",
                    "topicIdx": 2,
                    "title": "2. Multiplicación y Productos Notables",
                    "icon": "fa-xmark",
                    "subnodes": [
                        {
                            "icon": "fa-cube",
                            "delay": "0.1s",
                            "title": "Binomio al Cubo",
                            "content": "<p>Se evaluó intensivamente la estructura $(a \\pm b)^3$.</p><div class='exam-tip'><i class='fa-solid fa-check-double'></i> <b>PRIORIDAD DE OPERACIONES:</b><br>En el desarrollo de binomios, primero se resuelven las potencias de los coeficientes y luego se multiplican por el número obtenido del Triángulo de Pascal.</div>"
                        },
                        {
                            "icon": "fa-list",
                            "delay": "0.2s",
                            "title": "Ejercicios Resueltos",
                            "content": "<ul><li><b>Ejercicio 1:</b> $(x + 2)^3 = \\mathbf{x^3 + 6x^2 + 12x + 8}$.</li><li><b>Ejercicio 2:</b> $(2y + 1)^3 = \\mathbf{8y^3 + 12y^2 + 6y + 1}$.</li><li><b>Ejercicio 3 (signos alternados):</b> $(a - 3)^3 = \\mathbf{a^3 - 9a^2 + 27a - 27}$.</li></ul>"
                        },
                        {
                            "icon": "fa-handshake",
                            "delay": "0.3s",
                            "title": "Binomios con Término Común",
                            "content": "<p><b>Ejercicio:</b> $(x + 3)(x + 5) = \\mathbf{x^2 + 8x + 15}$.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat4-3",
                    "topicIdx": 3,
                    "title": "3. Radicales y Conteo de Términos",
                    "icon": "fa-hashtag",
                    "subnodes": [
                        {
                            "icon": "fa-bolt",
                            "delay": "0.1s",
                            "title": "Raíces",
                            "content": "<p><b>Raíces exactas:</b> Se deben dominar raíces básicas para agilizar cálculos (ej. $\\sqrt{169} = 13$).</p><div class='exam-tip'><i class='fa-solid fa-star'></i> <b>REGLA DE RAÍCES EN PRODUCTOS:</b><br>Multiplicar raíces cuadradas idénticas elimina el radical ($\\sqrt{x} \\cdot \\sqrt{x} = x$).</div>"
                        },
                        {
                            "icon": "fa-magnifying-glass",
                            "delay": "0.2s",
                            "title": "Identificación de Términos",
                            "content": "<p>Una expresión <b>sin</b> signos de suma o resta intermedios cuenta como un solo término.<br><b>Ejemplo:</b> $-3px^4$ es un solo monomio.</p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/FlZGfHj98o4",
            "id": "content-matematicas-4",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es el resultado de agrupar los siguientes términos semejantes: $6x^2 + 4x^2 - x^2$?",
                        "opciones": [
                            "$10x^2$",
                            "$9x^2$",
                            "$11x^2$",
                            "$9x^4$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Los términos semejantes se operan directamente sobre los coeficientes respetando la suma/resta: $6+4-1 = 9$. La literal y el exponente $x^2$ se mantienen idénticos (recordando que $-x^2$ es equivalente a $-1x^2$)."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Cuántos términos conforman la expresión matemática $-3px^4$?",
                        "opciones": [
                            "1 término",
                            "2 términos",
                            "3 términos",
                            "4 términos"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "No hay ningún signo de suma algebraíca ($+$ o $-$) que separe las variables subsecuentes al primer coeficiente negativo, por lo que toda la expresión completa cuenta como un solo término (un monomio)."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Identifica la opción que corresponda a una raíz cuadrada exacta para agilizar cálculos:",
                        "opciones": [
                            "$\\sqrt{125} = 5$",
                            "$\\sqrt{169} = 13$",
                            "$\\sqrt{144} = 14$",
                            "$\\sqrt{200} = 20$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "El único cálculo exacto es $\\sqrt{169} = 13$ ya que $13 \\cdot 13 = 169$. Saber raíces comunes de memoria ahorra tiempo valioso el día del examen."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Identifica el resultado correcto del siguiente desarrollo de trinomio: $(x + 3)(x + 5)$",
                        "opciones": [
                            "$x^2 + 15x + 8$",
                            "$x^2 + 8x + 15$",
                            "$x^2 + 8x + 8$",
                            "$x^2 + 2x + 15$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Se trata de binomios con un término común. Primero se eleva el común al cuadrado ($x^2$), luego se suman los no comunes y se multiplican por el común ($3+5=8 \\rightarrow 8x$), y al final se multiplican los no comunes ($3 \\cdot 5 = 15$). Resultado: $x^2 + 8x + 15$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuál es la expresión equivalente a $\\sqrt{x \\cdot x}$?",
                        "opciones": [
                            "$x^2$",
                            "$2x$",
                            "$x$",
                            "$\\sqrt{2x}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Al multiplicar $x \\cdot x$ obtenemos $x^2$. La raíz cuadrada de un elemento al cuadrado se cancela arrojando la literal base, que es simplemente $x$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Calcula el valor de $\\sqrt{12^2 + 5^2}$:",
                        "opciones": [
                            "17",
                            "13",
                            "144",
                            "25"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "$\\sqrt{144 + 25} = \\sqrt{169} = 13$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Simplifica: $3x^2y - (2xy^2 - 4x^2y) + 5xy^2$",
                        "opciones": [
                            "$7x^2y + 3xy^2$",
                            "$-x^2y + 3xy^2$",
                            "$7x^2y - 7xy^2$",
                            "$x^2y + 3xy^2$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Distribuimos menos: $3x^2y - 2xy^2 + 4x^2y + 5xy^2$. Agrupamos: $(3+4)x^2y + (-2+5)xy^2 = 7x^2y + 3xy^2$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "El resultado de $\\sqrt{18}$ simplificado es:",
                        "opciones": [
                            "$9\\sqrt{2}$",
                            "$2\\sqrt{3}$",
                            "$3\\sqrt{2}$",
                            "$6\\sqrt{3}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "$\\sqrt{18} = \\sqrt{9 \\cdot 2} = \\sqrt{9} \\cdot \\sqrt{2} = 3\\sqrt{2}$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Valor de la expresión $2a - [3b - (a + b)]$:",
                        "opciones": [
                            "$3a - 2b$",
                            "$a - 4b$",
                            "$3a + 2b$",
                            "$a - 2b$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "$2a - [3b - a - b] = 2a - [2b - a] = 2a - 2b + a = 3a - 2b$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Si $\\sqrt{x} = 5$, ¿cuál es el valor de $x^2$?",
                        "opciones": [
                            "10",
                            "25",
                            "625",
                            "125"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Si $\\sqrt{x}=5$, entonces $x=25$. Por lo tanto $x^2 = 25^2 = 625$."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas5",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-infinity",
            "mainTopicSubtitle": "Clase 5: Binomios a Potencia \"n\" y Atajos",
            "branches": [
                {
                    "id": "nodes-mat5-1",
                    "topicIdx": 1,
                    "title": "1. Binomios a Potencia \"n\" (Pascal)",
                    "icon": "fa-layer-group",
                    "subnodes": [
                        {
                            "icon": "fa-book-open",
                            "delay": "0.1s",
                            "title": "Identificación del Nivel",
                            "content": "<p>El exponente del binomio determina qué fila del triángulo usar para los coeficientes.<br><b>Potencia 3:</b> 1, 3, 3, 1<br><b>Potencia 4:</b> 1, 4, 6, 4, 1</p>"
                        },
                        {
                            "icon": "fa-bolt",
                            "delay": "0.2s",
                            "title": "Regla de los Exponentes",
                            "content": "<p>Si la letra tiene un exponente interno (ej. $x^2$), se multiplica por la potencia de afuera para obtener el primer término ($x^{2 \\cdot 3} = x^6$).<br>En cada \"salto\" hacia la derecha, el término pierde el valor del exponente original.</p>"
                        },
                        {
                            "icon": "fa-scale-balanced",
                            "delay": "0.3s",
                            "title": "Ley de Signos (Tip de Oro)",
                            "content": "<p><b>Si el binomio es positivo ($+$):</b> Todos los signos del resultado son positivos.<br><b>Si el binomio es negativo ($-$):</b> Los signos se alternan empezando por el primero como positivo: $(+, -, +, -)$.</p><div class='exam-tip'><i class='fa-solid fa-triangle-exclamation'></i> <b>PREGUNTA DE EXAMEN:</b><br>En la UNAM, el nivel máximo que suelen preguntar es a la potencia 4.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat5-2",
                    "topicIdx": 2,
                    "title": "2. Atajo para $(a \\pm b)^2$",
                    "icon": "fa-bolt-lightning",
                    "subnodes": [
                        {
                            "icon": "fa-list-ol",
                            "delay": "0.1s",
                            "title": "Pasos (3 términos)",
                            "content": "<ol><li><b>Primer término:</b> Eleva el primer término al cuadrado.</li><li><b>Término central:</b> Duplica el segundo coeficiente y multiplícalo por el primero. Pega todas las letras y sus exponentes originales sin sumar nada.</li><li><b>Tercer término:</b> Eleva el segundo término al cuadrado.</li></ol>"
                        },
                        {
                            "icon": "fa-pen-to-square",
                            "delay": "0.2s",
                            "title": "Ejemplo Práctico",
                            "content": "<p>$(7m^3 - 2y^5)^2$</p><ul><li><b>1º al m²:</b> $(7 \\cdot 7)(m^3 \\cdot m^3) = 49m^6$</li><li><b>Doble 2º por 1º:</b> $(2 \\cdot -2) \\cdot 7 = -28$, letras: $m^3y^5 \\rightarrow -28m^3y^5$</li><li><b>2º al m²:</b> $(-2 \\cdot -2)(y^5 \\cdot y^5) = +4y^{10}$</li></ul><p><b>Resultado:</b> $49m^6 - 28m^3y^5 + 4y^{10}$</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat5-3",
                    "topicIdx": 3,
                    "title": "3. Tips Flash (Resolución en 5s)",
                    "icon": "fa-stopwatch",
                    "subnodes": [
                        {
                            "icon": "fa-eye",
                            "delay": "0.1s",
                            "title": "Descarte por Signos",
                            "content": "<p>Si el binomio es negativo $(x - y)^n$, elimina de inmediato cualquier opción que no tenga signos alternados $(+, -, +, -)$.</p>"
                        },
                        {
                            "icon": "fa-1",
                            "delay": "0.2s",
                            "title": "El Valor del \"1\"",
                            "content": "<p>Recuerda que una letra sola siempre vale 1. En un binomio como $(x + 2)^3$, el coeficiente de la $x$ es 1.</p>"
                        },
                        {
                            "icon": "fa-brain",
                            "delay": "0.3s",
                            "title": "Potencias de Números",
                            "content": "<p>Memoriza potencias básicas para el tercer o último término (ej. $3^3 = 27$, $2^4 = 16$).</p><div class='exam-tip'><i class='fa-solid fa-clock-rotate-left'></i> <b>GESTIÓN DEL TIEMPO:</b><br>Tienes aprox. 1.5 minutos por pregunta. Si identificas el primer y el último término, usualmente ya encontraste la respuesta correcta.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat5-4",
                    "topicIdx": 4,
                    "title": "4. Notas Técnicas Importantes",
                    "icon": "fa-triangle-exclamation",
                    "subnodes": [
                        {
                            "icon": "fa-xmark",
                            "delay": "0.1s",
                            "title": "Suma vs Multiplicación",
                            "content": "<p>Al elevar una potencia (multiplicar letras iguales), los exponentes <b>SE SUMAN</b>. No los multipliques (ej. $m^3 \\cdot m^3 = m^6$, NO $m^9$).</p>"
                        },
                        {
                            "icon": "fa-sort",
                            "delay": "0.2s",
                            "title": "Orden en los incisos",
                            "content": "<p>La UNAM suele poner las respuestas en el mismo orden en que aparecen los términos en el problema original. No pierdas tiempo reacomodando alfabéticamente si no es necesario.</p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/1znciwcwQyo",
            "id": "content-matematicas-5",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es el término central al desarrollar el binomio $(3m^2 - 4y^3)^2$ usando el atajo?",
                        "opciones": [
                            "$-24m^2y^3$",
                            "$24m^2y^3$",
                            "$-12m^2y^3$",
                            "$12m^2y^3$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El atajo para el término central de un binomio al cuadrado nos dice: duplica el segundo coeficiente (-4 * 2 = -8) y multiplícalo por el primero (-8 * 3 = -24). Luego añade las letras con sus exponentes originales: $-24m^2y^3$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Si desarrollas el binomio $(a - b)^5$, ¿cómo serán los signos de sus términos?",
                        "opciones": [
                            "Todos positivos.",
                            "Alternados $(+, -, +, -, +, -)$.",
                            "Todos negativos.",
                            "Alternados $(-, +, -, +, -, +)$."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Por la ley de los signos para binomios, cuando el binomio tiene un signo negativo interno, los signos del resultado siempre se alternan comenzando por positivo."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Al usar el triángulo de Pascal para un binomio a la potencia 4, ¿qué fila de coeficientes utilizas?",
                        "opciones": [
                            "1, 3, 3, 1",
                            "1, 4, 6, 4, 1",
                            "1, 5, 10, 10, 5, 1",
                            "1, 2, 1"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La fila correspondiente a la potencia 4 siempre tiene los números: 1, 4, 6, 4, 1."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Al elevar el primer término $(x^3)^4$, ¿qué le sucede a los exponentes según las notas técnicas?",
                        "opciones": [
                            "Se suman, obteniendo $x^7$.",
                            "Se restan, obteniendo $x^{-1}$.",
                            "Se multiplican, obteniendo $x^{12}$.",
                            "Se dividen, obteniendo $x^{3/4}$."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Cuando una letra con exponente se eleva a otra potencia, los exponentes se multiplican ($3 \\cdot 4 = 12$). A diferencia de cuando multiplicas letras iguales, donde sí se suman."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Qué valor o coeficiente asumes oculto si una letra está completamente sola, como la variable 'x' en un binomio?",
                        "opciones": [
                            "Valor de cero.",
                            "Valor de infinito.",
                            "Valor de 1.",
                            "Valor de potencia 2."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Una letra sola (sin número u coeficiente escrito a la izquierda) siempre toma un valor implícito de 1. Es decir, $x = 1x$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Resuelve visualmente el primer y último término de $(5x - 2)^3$:",
                        "opciones": [
                            "$125x^3$ y $-8$",
                            "$25x^3$ y $-6$",
                            "$125x^3$ y $8$",
                            "$15x^3$ y $-8$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El primer término se eleva directamente a la máxima potencia: $(5x)^3 = 125x^3$. Lo mismo para el último término: $(-2)^3 = -8$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Al elevar el binomio $(y^2 + 3)^4$, ¿Cuál correspondería a su primer término?",
                        "opciones": [
                            "$y^6$",
                            "$y^8$",
                            "$4y^2$",
                            "$y^4$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Debemos tomar el primer elemento y elevarlo a la potencia externa: $(y^2)^4 = y^{2 \\cdot 4} = y^8$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Usando el atajo para el binomio al cuadrado $(4x^5 + 5y^2)^2$, ¿cuál es el tercer término de su resultado?",
                        "opciones": [
                            "$25y^4$",
                            "$10y^4$",
                            "$25y^2$",
                            "$10y^2$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El tercer término del atajo es simplemente elevar el segundo término al cuadrado: $(5y^2)^2 = 25y^4$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Cuál de las opciones correspondería al desarrollo correcto de $(2a - 3b)^3$ basándote únicamente en el descarte rápido por signos?",
                        "opciones": [
                            "$8a^3 + 36a^2b + 54ab^2 + 27b^3$",
                            "$8a^3 - 36a^2b + 54ab^2 - 27b^3$",
                            "$8a^3 - 36a^2b - 54ab^2 - 27b^3$",
                            "$-8a^3 + 36a^2b - 54ab^2 + 27b^3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Al ser un binomio negativo, sabemos que la regla indica alternancia precisa: $+$, $-$, $+$, $-$. La única opción que cumple con dicho patrón es la segunda."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Si en el examen encuentras el desarrollo de un binomio negativo $(x - y)^4$, y las opciones presentan patrón de signos $+, +, -, +$; ¿qué concluyes inmediatamente?",
                        "opciones": [
                            "Que es sin duda la respuesta correcta.",
                            "Que es falso porque no alterna estrictamente $(+, -, +, -, +)$.",
                            "Que debes calcularlo completo de todos modos.",
                            "Que puede ser una excepción por la potencia."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "La alternancia en los binomios negativos nunca falla ni tiene excepciones. Si un inciso presenta un rompe-patrón como $+,+$, queda descartado directo en tu descarte visual."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "mat-047",
                    "pregunta": "¿Cuáles son los 3 pasos del atajo para $(a \\pm b)^2$?",
                    "respuesta": "1) Elevar el primer término al cuadrado. 2) Duplicar el segundo coeficiente y multiplicarlo por el primero (pegar letras originales). 3) Elevar el segundo término al cuadrado.",
                    "tema": "Atajo para Binomio al Cuadrado",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-048",
                    "pregunta": "Al elevar una potencia a otra potencia (ej. $(x^3)^4$), ¿qué se hace con los exponentes?",
                    "respuesta": "Se multiplican: $(x^3)^4 = x^{3 \\cdot 4} = x^{12}$.",
                    "tema": "Notas Técnicas",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-049",
                    "pregunta": "¿Cuál es la potencia máxima que la UNAM suele preguntar en binomios elevados?",
                    "respuesta": "A la potencia 4.",
                    "tema": "Binomios a Potencia n",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-divide",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas6",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-percent",
            "mainTopicIcon2": "fa-superscript",
            "mainTopicSubtitle": "Clase 6: Reglas de la División y Atajos",
            "branches": [
                {
                    "id": "nodes-mat6-1",
                    "topicIdx": 1,
                    "title": "1. Reglas Fundamentales de la División",
                    "icon": "fa-divide",
                    "subnodes": [
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.1s",
                            "title": "Coeficientes (Números grandes)",
                            "content": "<p>Se dividen de forma aritmética normal (ej. $8 / 2 = 4$). Siguen estricatamente la ley de signos de la multiplicación/división (+ $\\cdot$ - = -, etc.).</p>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.2s",
                            "title": "Exponentes (Números pequeños)",
                            "content": "<p>Cuando las bases son iguales, los exponentes se restan.</p>",
                            "examples": [
                                "$\\frac{x^8}{x^2} = x^{8-2} = x^6$"
                            ]
                        },
                        {
                            "icon": "fa-ghost",
                            "delay": "0.3s",
                            "title": "Variables Invisibles",
                            "content": "<p>Si una letra no tiene exponente o un paréntesis no tiene potencia, el valor es 1.</p><div class='exam-tip'><i class='fa-solid fa-circle-exclamation'></i> <b>TIP DE EXAMEN:</b><br>La UNAM asume que dominas este concepto y no escribirá el \"1\" en las opciones de respuesta.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat6-2",
                    "topicIdx": 2,
                    "title": "2. Tipo 1: Fracciones con Bases Iguales",
                    "icon": "fa-equals",
                    "subnodes": [
                        {
                            "icon": "fa-magnifying-glass",
                            "delay": "0.1s",
                            "title": "Identificación",
                            "content": "<p>Lo que está arriba es idéntico a lo que está abajo, variando solo la potencia (Monomios y Binomios).</p>"
                        },
                        {
                            "icon": "fa-arrow-down-up-across-line",
                            "delay": "0.2s",
                            "title": "Atajo para evitar exponentes negativos",
                            "content": "<p>Resta el exponente mayor menos el menor y coloca el resultado en la posición (arriba o abajo) donde estaba el exponente más grande.</p><ul><li><b>Caso arriba:</b> $\\frac{x^{10}}{x^2} = x^8$</li><li><b>Caso abajo:</b> $\\frac{x^2}{x^{10}} = \\frac{1}{x^8}$ (Si todo queda abajo, coloca un 1 arriba).</li></ul>"
                        },
                        {
                            "icon": "fa-eraser",
                            "delay": "0.3s",
                            "title": "Regla de anulación",
                            "content": "<p>Si el exponente arriba y abajo es exactamente el mismo (ej. $\\frac{m^3}{m^3}$), la literal se elimina del resultado.</p>"
                        },
                        {
                            "icon": "fa-puzzle-piece",
                            "delay": "0.4s",
                            "title": "Con Fracciones",
                            "content": "<p>Si los exponentes son fracciones, aplica el método de productos cruzados para la resta.</p>",
                            "examples": [
                                "$\\frac{3}{2} - 1 = \\frac{1}{2}$"
                            ]
                        }
                    ]
                },
                {
                    "id": "nodes-mat6-3",
                    "topicIdx": 3,
                    "title": "3. Tipo 2: Polinomio entre Monomio",
                    "icon": "fa-layer-group",
                    "subnodes": [
                        {
                            "icon": "fa-sitemap",
                            "delay": "0.1s",
                            "title": "Procedimiento Distributivo",
                            "content": "<p>Se identifica porque hay varios términos arriba sumando o restando, pero solo uno abajo. El término de abajo divide a cada uno de los términos de arriba por separado.</p>"
                        },
                        {
                            "icon": "fa-list-ol",
                            "delay": "0.2s",
                            "title": "Pasos",
                            "content": "<ol><li><b>Divide</b> signos y coeficientes.</li><li><b>Resta</b> los exponentes de las letras iguales.</li><li><b>Traslada:</b> Si una letra de arriba no tiene pareja abajo, se pasa igual al resultado.</li></ol>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat6-4",
                    "topicIdx": 4,
                    "title": "4. Tipo 3: División de Polinomios (Atajo Técnico)",
                    "icon": "fa-bolt-lightning",
                    "subnodes": [
                        {
                            "icon": "fa-star",
                            "delay": "0.1s",
                            "title": "Atajo de Eliminación",
                            "content": "<p>Ideal para ejercicios complejos (ej. trinomio entre binomio). En lugar de usar la división larga o factorización, aplica este procedimiento exclusivo para exámenes de opción múltiple.</p><ol><li><b>Selección:</b> Elige una literal que aparezca en la expresión (ej. $x$).</li><li><b>Eliminación:</b> Ignora (\"elimina\") todos los términos que contengan esa literal en toda la fracción.</li><li><b>Operación residual:</b> Divide los números que quedaron (los que no tenían la literal elegida).</li><li><b>Verificación:</b> Ve a los incisos del examen, elimina la misma literal en ellos y busca cuál coincide con tu resultado anterior.</li></ol>"
                        },
                        {
                            "icon": "fa-triangle-exclamation",
                            "delay": "0.2s",
                            "title": "Nota Comparativa Universitaria",
                            "content": "<p>Este atajo es infalible para la UNAM, pero en exámenes como el del Politécnico suele pedirse el procedimiento de factorización, por lo que ahí es mejor identificar el caso correspondiente.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat6-5",
                    "topicIdx": 1,
                    "title": "5. Diferencias Críticas para el Examen",
                    "icon": "fa-triangle-exclamation",
                    "subnodes": [
                        {
                            "icon": "fa-scale-balanced",
                            "delay": "0.1s",
                            "title": "Reglas de los Exponentes según Operación",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-lightbulb'></i> <b>NO CONFUNDIR:</b><br><ul><li><b>Suma/Resta:</b> Los exponentes no cambian (términos semejantes).</li><li><b>Multiplicación:</b> Los exponentes de bases iguales se suman.</li><li><b>División:</b> Los exponentes de bases iguales se restan.</li></ul></div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/jlqFi2r8ixM",
            "id": "content-matematicas-6",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cómo se operan los coeficientes en una división algebraica?",
                        "opciones": [
                            "Se restan.",
                            "Se suman.",
                            "Se multiplican.",
                            "Se dividen de forma aritmética normal con ley de signos."
                        ],
                        "respuesta": 3,
                        "retroalimentacion": "Los números grandes (coeficientes) siguen reglas de aritmética normal (ej: $8 / 2 = 4$) y obedecen la ley de signos ($+ \\cdot - = -$)."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Al dividir literales con bases iguales, ¿qué operación se realiza con los exponentes?",
                        "opciones": [
                            "Se suman.",
                            "Se restan.",
                            "Se multiplican.",
                            "Se dividen."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En la división algebraica, siempre que haya literales idénticas agrupadas arriba y abajo, sus potencias se deben restar."
                    },
                    {
                        "numero": 3,
                        "pregunta": "En la división de un polinomio entre un monomio (Tipo 2), ¿cuál es el procedimiento fundamental?",
                        "opciones": [
                            "El monomio de abajo divide únicamente al primer término de arriba.",
                            "Se suman los exponentes de todos.",
                            "El término único de abajo divide a cada uno de los términos de arriba por separado.",
                            "Aplicar la regla de productos cruzados."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "En el Tipo 2 se aplica la propiedad distributiva: el monomio inferior funciona como un divisor independiente para cada uno de los términos del polinomio superior."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Al resolver $\\frac{x^4}{x^4}$, aplicando la regla de anulación, el resultado algebraico que obtienes es:",
                        "opciones": [
                            "$x$",
                            "$0$",
                            "$1$",
                            "$x^8$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Las literales con el mismo exponente arriba y abajo se eliminan visualmente para la respuesta final. Matemáticamente equivale a $x^0 = 1$. Se coloca 1 cuando todo lo de arriba o abajo desaparece."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Para evitar tener exponentes negativos en tu respuesta, según el atajo de la clase, ¿cómo acomodas el resultado de tu resta en fracción?",
                        "opciones": [
                            "Siempre arriba.",
                            "Siempre abajo para mayor orden.",
                            "Lo colocas en la posición (numerador o denominador) donde originalmente estaba el exponente más grande.",
                            "Cambias el signo multiplicando por menos uno."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Restar el mayor exponente menos el menor y colocar el resultado en la posición inicial del mayor te ayuda a evitar lidiar con la engorrosa notación de potencias negativas dictada por UNAM."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Simplifica la siguiente expresión dividiendo el polinomio entre el monomio: $\\frac{12x^4 - 8x^3 + 4x^2}{4x^2}$",
                        "opciones": [
                            "$3x^2 - 2x + 1$",
                            "$3x^2 - 2x$",
                            "$12x^2 - 8x + 4$",
                            "$3x^2 - 2x + 0$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El término inferior (divisor) parte a cada numerador: $\\frac{12x^4}{4x^2} = 3x^2$; $\\frac{-8x^3}{4x^2} = -2x$; $\\frac{4x^2}{4x^2} = 1$. Resultado final $3x^2 - 2x + 1$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Utilizando el atajo de eliminación técnica, deduce el término guía residual al eliminar la literal 'y' en la fracción $\\frac{x^2 - y^2}{x - y}$ para tu comprobación en el examen:",
                        "opciones": [
                            "$x$",
                            "$-x$",
                            "$x^2$",
                            "$y$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El atajo en ejercicios complejos dice: elimina todos los términos con una literal. Eliminando los términos con 'y' te queda $\\frac{x^2}{x}$. Restas exponentes ($2-1=1$) y tu término residual es $x$. Revisa incisos con solo esa variable."
                    },
                    {
                        "numero": 3,
                        "pregunta": "La división de fracciones polinómicas frecuentemente requiere el atajo de eliminación en la UNAM. Identifica el residual si eliminas todo lo que contenga la literal 'n' en $\\frac{4m^2 - 9n^2}{2m + 3n}$:",
                        "opciones": [
                            "$2m^2$",
                            "$2m$",
                            "$4m$",
                            "$2n$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Siguiendo el atajo, al eliminar o ignorar 'n' la fracción se reduce a $\\frac{4m^2}{2m}$. Coeficientes ($4/2 = 2$). Literal ($m^2 / m = m^1$). Residual directo: $2m$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Qué resultado simplificado obtienes al dividir los siguientes monomios con exponentes fraccionarios $\\frac{x^{3/2}}{x^{1/2}}$?",
                        "opciones": [
                            "$x^3$",
                            "$x^2$",
                            "$x$",
                            "$x^{-1/2}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "De acuerdo a las reglas de bases iguales con fracciones, cruzas o restas directo dada la base doble 2: $\\frac{3}{2} - \\frac{1}{2} = \\frac{2}{2} = 1$. Todo exponente uno es invisible: se expresa como $x$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Aplica las reglas fundamentales y simplifica la siguiente expresión (Tipo 1): $\\frac{-15a^5b^3c}{-3a^2b^3}$",
                        "opciones": [
                            "$5a^3c$",
                            "$-5a^3c$",
                            "$5a^3bc$",
                            "$12a^3c$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Signos (- / - = +). Coeficientes (15 / 3 = 5). Letra $a$ ($5 - 2 = 3$). Letra $b$ se anula por la Regla de Anulación ($3 - 3 = 0$). Letra $c$ simplemente se traslada de arriba por carecer de base abajo. Resultado: $5a^3c$."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-square-root-variable",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas7",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-plus-minus",
            "mainTopicIcon2": "fa-superscript",
            "mainTopicSubtitle": "Clase 7: Agrupación y Binomios",
            "branches": [
                {
                    "id": "nodes-mat7-1",
                    "topicIdx": 1,
                    "title": "1. Agrupación de Términos (Suma y Resta)",
                    "icon": "fa-object-group",
                    "subnodes": [
                        {
                            "icon": "fa-scale-balanced",
                            "delay": "0.1s",
                            "title": "Regla de Oro",
                            "content": "<p>Solo se pueden sumar o restar términos si son <b>idénticos en letras y exponentes</b> (Términos Semejantes).</p>"
                        },
                        {
                            "icon": "fa-1",
                            "delay": "0.2s",
                            "title": "El Coeficiente '1' (El error más común)",
                            "content": "<p>Si ves una letra sola (ej. $m$), su valor es 1.</p>",
                            "examples": [
                                "$8m + m - 5m$<br>8 + 1 - 5 = 4<br><b>Resultado:</b> $4m$"
                            ]
                        },
                        {
                            "icon": "fa-plus-minus",
                            "delay": "0.3s",
                            "title": "Ley de los Signos en Suma/Resta",
                            "content": "<p>En suma y resta <b>no existe</b> 'menos por menos es más'.</p><ul><li><b>Signos iguales:</b> Se suman y mantienen el signo.</li><li><b>Signos diferentes:</b> Se restan y domina el signo del número mayor.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat7-2",
                    "topicIdx": 2,
                    "title": "2. Multiplicación vs. Suma (La Trampa Crítica)",
                    "icon": "fa-triangle-exclamation",
                    "subnodes": [
                        {
                            "icon": "fa-skull-crossbones",
                            "delay": "0.1s",
                            "title": "Pregunta de Examen (Falso/Verdadero)",
                            "content": "<p><i>¿Solo se pueden multiplicar términos semejantes en álgebra?</i> <b>FALSO.</b></p><p>En la multiplicación no importa si los términos son diferentes, todos se multiplican. La restricción de 'términos semejantes' es exclusiva para la suma y la resta.</p>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.2s",
                            "title": "Regla de la Multiplicación",
                            "content": "<p><b>Letras iguales:</b> Los exponentes se suman ($x^2 \\cdot x^3 = x^5$).<br><b>Variables diferentes:</b> Simplemente se 'pegan' en el resultado ($x \\cdot y = xy$).</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat7-3",
                    "topicIdx": 3,
                    "title": "3. División (Fracciones Algebraicas)",
                    "icon": "fa-divide",
                    "subnodes": [
                        {
                            "icon": "fa-hashtag",
                            "delay": "0.1s",
                            "title": "Reglas Básicas",
                            "content": "<ul><li><b>Coeficientes:</b> Se dividen aritméticamente ($10/2 = 5$).</li><li><b>Exponentes:</b> Se restan cuando las letras son iguales.</li><li><b>Simplificación:</b> Si un término está arriba y abajo con el mismo exponente (ej. $y^1 / y^1$), se anulan totalmente.</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat7-4",
                    "topicIdx": 4,
                    "title": "4. Binomios al Cubo $(a \\pm b)^3$",
                    "icon": "fa-cube",
                    "subnodes": [
                        {
                            "icon": "fa-shapes",
                            "delay": "0.1s",
                            "title": "Estructura Base",
                            "content": "<p>Este tema suele quitar mucho tiempo si se desarrolla completo. La clave es el <b>descarte visual</b>:</p><p>La estructura del resultado <b>siempre tendrá 4 términos</b>.</p>"
                        },
                        {
                            "icon": "fa-bolt",
                            "delay": "0.2s",
                            "title": "Tip de Signos (Descarte Rápido)",
                            "content": "<p>Si el binomio es negativo $(x - 3)^3$, el resultado debe tener signos alternados: <b>$(+, -, +, -)$</b>. Si ves una opción con todos negativos o todos positivos, descártala de inmediato.</p>"
                        },
                        {
                            "icon": "fa-stopwatch",
                            "delay": "0.3s",
                            "title": "Cálculo Rápido (Método UNAM)",
                            "content": "<p><b>Ejemplo:</b> $(x + 2)^3$</p><p>El primer término es $x^3$ y el último es $2^3 = 8$. Busca la opción que empiece con $x^3$ y termine con $+8$.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat7-5",
                    "topicIdx": 1,
                    "title": "5. Estrategias para el Examen",
                    "icon": "fa-crosshairs",
                    "subnodes": [
                        {
                            "icon": "fa-clock",
                            "delay": "0.1s",
                            "title": "Gestión del Tiempo",
                            "content": "<p>Dispones de 1.5 minutos por pregunta. No desarrolles operaciones largas si los signos o el primer/último término te dan la respuesta.</p>"
                        },
                        {
                            "icon": "fa-pen",
                            "delay": "0.2s",
                            "title": "Uso de Papel",
                            "content": "<p>Ten siempre una hoja para operaciones rápidas; el cálculo mental en álgebra suele inducir errores de signo bajo presión.</p>"
                        },
                        {
                            "icon": "fa-sort",
                            "delay": "0.3s",
                            "title": "Orden de los Incisos",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-list-ol'></i> <b>DATO CLAVE:</b><br>El examen de la UNAM suele presentar las respuestas en el mismo orden en que aparecen los términos en la operación original. No pierdas tiempo reacomodando alfabéticamente a menos que los incisos sean idénticos.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/ImJgfYK1Jsk",
            "id": "content-matematicas-7",
            "preguntas": {
                "unam": [
                    {
                        "numero": 47,
                        "pregunta": "Al desarrollar $(x^2 - 3y)^3$ se obtiene:",
                        "opciones": [
                            "$x^6 - 9x^4y + 27x^2y^2 + 27y^3$",
                            "$x^6 + 9x^4y - 27x^2y^2 + 27y^3$",
                            "$x^6 - 9x^4y + 27x^2y^2 - 27y^3$",
                            "$x^6 + 9x^4y - 27x^2y^2 - 27y^3$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Aplicando el 'descarte visual' de la clase: un binomio negativo elevado al cubo debe alternar signos (+, -, +, -) incondicionalmente. Solo una opción lo cumple. Además, $(x^2)^3 = x^6$ y $(-3y)^3 = -27y^3$ confirman la opción correcta."
                    }
                ],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es el resultado de la siguiente suma algebraica: $7m^2 + 2m^2 - 4m^2$?",
                        "opciones": [
                            "$5m^2$",
                            "$5m^6$",
                            "$9m^2$",
                            "$9m^6$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Al tener términos semejantes (misma base $m$ y exponente $2$), los exponentes no cambian. Simplemente se opera: $7 + 2 - 4 = 5$. El resultado es $5m^2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Simplifica la siguiente expresión: $12x - x + 3x$",
                        "opciones": [
                            "$14x$",
                            "$15x$",
                            "$14x^3$",
                            "$15$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El error más común es olvidar que una $x$ sola cuenta como $1x$. La operación aritméticamente es $12 - 1 + 3 = 14$. El resultado correcto es $14x$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Encuentra el resultado de multiplicar: $(4a^3)(2a^5)$",
                        "opciones": [
                            "$8a^8$",
                            "$8a^{15}$",
                            "$6a^8$",
                            "$6a^{15}$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "En la multiplicación, los coeficientes se multiplican ($4 \\cdot 2 = 8$) y los exponentes de literales iguales se suman ($3 + 5 = 8$). El resultado es $8a^8$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Realiza la siguiente división algebraica: $\\frac{m^7}{m^3}$",
                        "opciones": [
                            "$m^{10}$",
                            "$m^4$",
                            "$m^{\\frac{7}{3}}$",
                            "$m^{-4}$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "En la división de variables iguales, el exponente de abajo se le resta al de arriba: $7 - 3 = 4$. El resultado es $m^4$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuáles son exclusivamente el primer y último término al desarrollar el binomio $(y - 4)^3$?",
                        "opciones": [
                            "$y^3$ y $-64$",
                            "$y^3$ y $+64$",
                            "$y^3$ y $-12$",
                            "$-y^3$ y $-64$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El primer término es la base del primero al cubo: $y^3$. El último término es el segundo valor al cubo respetando su signo original: $(-4)^3 = -64$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Identifica cuáles de los siguientes términos son semejantes y redúcelos en un solo paso algebraico: $-15x^2y - x^2y + 8x^2y$",
                        "opciones": [
                            "$-8x^2y$",
                            "$-6x^2y$",
                            "$-16x^2y$",
                            "$8x^2y$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El segundo término (sin coeficiente visible) representa un $1$. La operación de los coeficientes es: $-15 - 1 = -16$. Luego sumamos 8 (signos diferentes se restan): $-16 + 8 = -8$. Resultado final: $-8x^2y$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Qué afirmación describe correctamente la regla esencial de la multiplicación algebraica según el análisis impartido en clase?",
                        "opciones": [
                            "Solo se agrupan bases idénticas sumando y unificando sus exponentes para tener un término semejante.",
                            "En la multiplicación todos los exponentes se suman incondicionalmente sin importar si las letras difieren.",
                            "Los términos se multiplican sin importar restricciones de semejanza; los exponentes con base igual se suman y las bases distintas se pegan.",
                            "Se siguen exclusivamente arreglos de signos inversos (menos por más y más por menos) para todos los casos."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La regla universal es 'todos contra todos', ignorando la restricción de 'términos semejantes' requerida en la suma. Bases iguales suman exponentes, letras distintas únicamente se agrupan (pegan) al resultado final."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Evalúa y simplifica combinando las reglas directas de división y multiplicación enseñadas: $\\left(\\frac{15a^4b^3}{3a^2b}\\right)(-2a^3b^2)$",
                        "opciones": [
                            "$-10a^5b^4$",
                            "$-10a^3b^2$",
                            "$10a^5b^4$",
                            "$10a^3b^3$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Primero resuelves la división restando los exponentes de literales análogas y dividiendo coeficientes: queda $(5a^2b^2)$. Luego multiplicas el resultante por $(-2a^3b^2)$. Multiplicando coeficientes $(5 \\cdot -2 = -10)$ y sumando las potencias de las bases idénticas obtienes $-10a^5b^4$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Basándote exclusivamente en la estrategia maestra de descarte visual rápido para binomios al cubo, identifica el resultado de $(4x - 5y)^3$:",
                        "opciones": [
                            "$64x^3 - 240x^2y + 300xy^2 - 125y^3$",
                            "$64x^3 + 240x^2y - 300xy^2 - 125y^3$",
                            "$64x^3 - 240x^2y - 300xy^2 - 125y^3$",
                            "$64x^3 - 240x^2y - 300xy^2 + 125y^3$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El descarte visual dicta dos pasos: 1) Alternancia de signos inquebrantable por ser negativo $(+, -, +, -)$. 2) Primer y último término: $(4x)^3 = 64x^3$, $(-5y)^3 = -125y^3$. La primera opción es la única que obedece al patrón estricto sin necesidad de utilizar la operación de Triángulo de Pascal."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuál de las siguientes igualdades es INCORRECTA según la 'Trampa Crítica' explicada en los apuntes?",
                        "opciones": [
                            "$x^3 + x^3 = 2x^6$",
                            "$x^3 \\cdot x^3 = x^6$",
                            "$m^2 + m^2 = 2m^2$",
                            "$a^5 \\cdot a^2 = a^7$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Como indica la 'Trampa Crítica', en la suma y resta de términos semejantes los exponentes nunca cambian ($x^3 + x^3 = 2x^3$). Sumarlos ($x^6$) es un error gravísimo que mezcla erróneamente las leyes de la multiplicación con las de la suma."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "mat-050",
                    "pregunta": "¿En la suma y resta algebraica existe la regla 'menos por menos es más'?",
                    "respuesta": "No. Esa regla (Ley de los Signos) solo aplica en la multiplicación y división.",
                    "tema": "Agrupación de Términos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-051",
                    "pregunta": "¿Es cierto que solo se pueden multiplicar términos semejantes?",
                    "respuesta": "Falso. En la multiplicación se opera 'todos contra todos'; la restricción de semejanza es exclusiva de la suma y resta.",
                    "tema": "Multiplicación vs. Suma",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-052",
                    "pregunta": "¿Qué ocurre con los exponentes en la división de literales con bases iguales?",
                    "respuesta": "Los exponentes se restan.",
                    "tema": "División Algebraica",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat-053",
                    "pregunta": "¿Cuántos términos tiene siempre el resultado de un binomio al cubo $(a \\pm b)^3$?",
                    "respuesta": "Exactamente 4 términos.",
                    "tema": "Binomios al Cubo",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-equals",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas8",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-equals",
            "mainTopicIcon2": "fa-x",
            "mainTopicSubtitle": "Clase 8: Definición y Grado de una Ecuación",
            "branches": [
                {
                    "id": "nodes-mat8-1",
                    "topicIdx": 1,
                    "title": "1. Definición, Grado y Objetivo de la Ecuación",
                    "icon": "fa-book",
                    "subnodes": [
                        {
                            "icon": "fa-equals",
                            "delay": "0.1s",
                            "title": "La Igualdad",
                            "content": "<p>Lo que define a una ecuación es el signo de igualdad <b>=</b>. Si no existe este signo, la expresión es un polinomio, no una ecuación.</p>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.2s",
                            "title": "Grado de la Ecuación",
                            "content": "<p>El grado está determinado por el exponente más grande de la incógnita.</p><ul><li><b>Exponente 1:</b> Primer grado (lineal).</li><li><b>Exponente 2:</b> Segundo grado (cuadrática).</li></ul>"
                        },
                        {
                            "icon": "fa-bullseye",
                            "delay": "0.3s",
                            "title": "Propósito",
                            "content": "<p>El objetivo de toda ecuación es encontrar el valor de la incógnita (normalmente <b>x</b>) mediante el despeje, es decir, dejarla sola.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat8-2",
                    "topicIdx": 2,
                    "title": "2. Reglas del Despeje (Transposición de Términos)",
                    "icon": "fa-right-left",
                    "subnodes": [
                        {
                            "icon": "fa-border-all",
                            "delay": "0.1s",
                            "title": "Idea Central",
                            "content": "<p>El signo igual funciona como una frontera. Cuando un término cruza al otro lado, cambia su operación por la contraria.</p>"
                        },
                        {
                            "icon": "fa-table",
                            "delay": "0.2s",
                            "title": "Cambios de Operación",
                            "content": "<ul><li><b>Suma (+)</b> al cruzar pasa como <b>resta (-)</b>.</li><li><b>Resta (-)</b> al cruzar pasa como <b>suma (+)</b>.</li><li><b>Multiplicación</b> al cruzar pasa como <b>división</b>.</li><li><b>División</b> al cruzar pasa como <b>multiplicación</b>.</li></ul>"
                        },
                        {
                            "icon": "fa-circle-exclamation",
                            "delay": "0.3s",
                            "title": "Nota Importante de Examen",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-triangle-exclamation'></i> <b>TIP DE EXAMEN:</b><br>Cuando un número pasa multiplicando o dividiendo, <b>el signo del número no cambia</b>. Solo cambia la operación.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat8-3",
                    "topicIdx": 3,
                    "title": "3. Estrategias de Resolución Rápida",
                    "icon": "fa-bolt-lightning",
                    "subnodes": [
                        {
                            "icon": "fa-arrow-up-right-dots",
                            "delay": "0.1s",
                            "title": "Sigue a la literal más grande",
                            "content": "<p>Para reducir errores con signos negativos al final, identifica en qué lado de la igualdad el coeficiente de <b>x</b> es mayor y agrupa ahí las variables.</p>",
                            "examples": [
                                "$7x + 2 = 5x - 7$<br>Como $7x$ es mayor, se agrupan las literales a la izquierda:<br>$7x - 5x = -7 - 2$<br><b>Resultado intermedio:</b> $2x = -9$ (coeficiente positivo)."
                            ]
                        },
                        {
                            "icon": "fa-shuffle",
                            "delay": "0.2s",
                            "title": "Ecuaciones con Fracciones (Productos Cruzados)",
                            "content": "<p>Si una fracción está igualada con otra, el método más rápido para quitar denominadores es multiplicar en cruz.</p>",
                            "examples": [
                                "$\\frac{a}{b} = \\frac{c}{d} \\Rightarrow a(d) = c(b)$",
                                "El denominador izquierdo multiplica a todo el numerador derecho y viceversa.",
                                "Después, se resuelve la multiplicación monomio por binomio resultante."
                            ]
                        }
                    ]
                },
                {
                    "id": "nodes-mat8-4",
                    "topicIdx": 4,
                    "title": "4. Tips para Reactivo UNAM",
                    "icon": "fa-rocket",
                    "subnodes": [
                        {
                            "icon": "fa-divide",
                            "delay": "0.1s",
                            "title": "Resultados en Fracción",
                            "content": "<p>La UNAM suele preferir respuestas en fracción simplificada. Si obtienes un decimal infinito (por ejemplo, $3.333\\dots$), busca la fracción equivalente (por ejemplo, $\\frac{10}{3}$). Solo divide cuando el resultado sea entero exacto.</p>"
                        },
                        {
                            "icon": "fa-vial-circle-check",
                            "delay": "0.2s",
                            "title": "Verificación",
                            "content": "<p>Si tienes duda, sustituye tu resultado en la ecuación original. Si se cumple la igualdad, tu respuesta es correcta.</p>",
                            "examples": [
                                "Si al sustituir obtienes una igualdad verdadera (ej. $5=5$), el resultado es válido."
                            ]
                        },
                        {
                            "icon": "fa-stopwatch",
                            "delay": "0.3s",
                            "title": "Gestión del Tiempo",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-clock'></i> <b>TIP DE TIEMPO:</b><br>En promedio tienes 1.5 minutos por reactivo. Practica sumas y restas de signos para no perder tiempo en el despeje final.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat8-5",
                    "topicIdx": 1,
                    "title": "5. Resumen de Leyes Aplicadas",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-plus-minus",
                            "delay": "0.1s",
                            "title": "Suma y Resta de Signos",
                            "content": "<ul><li><b>Signos iguales:</b> se suman y se conserva el signo.</li><li><b>Signos diferentes:</b> se restan y domina el signo del número mayor.</li></ul>"
                        },
                        {
                            "icon": "fa-xmark",
                            "delay": "0.2s",
                            "title": "Multiplicación y División",
                            "content": "<p>Se aplica la ley de signos de multiplicación/división. Ejemplo base: <b>+ por - = -</b>.</p>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/liinNLr2qt4",
            "id": "content-matematicas-8",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Qué convierte a una expresión en ecuación y no en polinomio?",
                        "opciones": [
                            "Tener letras con exponente.",
                            "Tener al menos dos términos.",
                            "Tener signo de igualdad (=).",
                            "Tener una incógnita x."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Una ecuación se define por la igualdad entre dos expresiones. Sin signo igual, solo tienes una expresión algebraica o polinomio."
                    },
                    {
                        "numero": 2,
                        "pregunta": "En la ecuación $3x + 5 = 20$, ¿cuál es el valor correcto de $x$?",
                        "opciones": [
                            "$x = 5$",
                            "$x = 15$",
                            "$x = 25$",
                            "$x = -5$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Se despeja en dos pasos: $3x = 20 - 5 = 15$ y luego $x = 15/3 = 5$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Al pasar el término $+9$ del lado izquierdo al derecho de la igualdad, cambia a:",
                        "opciones": [
                            "$+9$",
                            "$-9$",
                            "$\\times 9$",
                            "$\\div 9$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Cuando un término cruza el signo igual, cambia su operación por la contraria. Una suma se convierte en resta."
                    },
                    {
                        "numero": 4,
                        "pregunta": "En $\\frac{x+2}{3} = \\frac{5}{2}$, ¿qué igualdad por productos cruzados es correcta?",
                        "opciones": [
                            "$2(x+2) = 15$",
                            "$3(x+2) = 10$",
                            "$x+2 = 15$",
                            "$x+2 = 10$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "En productos cruzados, cada denominador multiplica al numerador contrario. Por eso se obtiene $2(x+2)=3\\cdot5=15$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Según la estrategia de examen, si el resultado es $3.333\\dots$, la opción recomendada es:",
                        "opciones": [
                            "$3.3$",
                            "$3.33$",
                            "$\\frac{10}{3}$",
                            "$\\frac{33}{10}$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Cuando el decimal es infinito periódico, la UNAM suele presentarlo como fracción simplificada. Para $3.333\\dots$, la forma correcta es $10/3$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Resuelve la ecuación aplicando transposición: $7x + 2 = 5x - 7$",
                        "opciones": [
                            "$x = -\\frac{9}{2}$",
                            "$x = \\frac{9}{2}$",
                            "$x = -9$",
                            "$x = 9$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Se agrupan literales del lado mayor: $7x - 5x = -7 - 2$, por lo tanto $2x = -9$ y $x = -9/2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "En la ecuación $-4x + 6 = 2$, ¿qué valor toma $x$?",
                        "opciones": [
                            "$x = 1$",
                            "$x = -1$",
                            "$x = 2$",
                            "$x = -2$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Primero $-4x = 2 - 6 = -4$. Luego se divide entre $-4$: $x = (-4)/(-4) = 1$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Resuelve por productos cruzados: $\\frac{2x-1}{5} = \\frac{3}{2}$",
                        "opciones": [
                            "$x = \\frac{17}{4}$",
                            "$x = \\frac{13}{4}$",
                            "$x = \\frac{7}{2}$",
                            "$x = \\frac{15}{4}$"
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Cruzas: $2(2x-1)=5(3)$. Entonces $4x-2=15$, luego $4x=17$ y por último $x=17/4$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Cuál enunciado es correcto sobre el cruce por multiplicación o división?",
                        "opciones": [
                            "Cambia la operación y también cambia automáticamente el signo del número.",
                            "Solo cambia la operación; el signo del número se conserva.",
                            "No cambia nada al cruzar el igual.",
                            "Siempre se vuelve positivo."
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Regla clave: cuando un término pasa multiplicando o dividiendo, únicamente cambia la operación. El signo original del número no se altera por sí mismo."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Resuelve: $\\frac{x+1}{4} = \\frac{x-2}{2}$",
                        "opciones": [
                            "$x = -5$",
                            "$x = 5$",
                            "$x = -3$",
                            "$x = 3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Productos cruzados: $2(x+1)=4(x-2)$. Se obtiene $2x+2=4x-8$. Transponiendo: $10=2x$, por lo tanto $x=5$."
                    }
                ]
            },
            "flashcards": [
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
                    "id": "mat9-014",
                    "pregunta": "¿Por qué no se puede 'despejar' una expresión sin igualdad?",
                    "respuesta": "Porque no hay una ecuación: sin signo igual no se determinan valores por despeje.",
                    "tema": "Ecuación vs. Expresión",
                    "asignatura": "Matemáticas"
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-calculator",
            "titleIconRight": "fa-scale-balanced",
            "titleStyle": "color: #b91c1c;",
            "mainTopicId": "mainTopicMatematicas9",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-equals",
            "mainTopicIcon2": "fa-arrows-rotate",
            "mainTopicSubtitle": "Clase 9: Sistemas de Ecuaciones (Sustitución por Verificación)",
            "branches": [
                {
                    "id": "nodes-mat9-1",
                    "topicIdx": 1,
                    "title": "1. Ecuación vs. Polinomio",
                    "icon": "fa-scale-balanced",
                    "subnodes": [
                        {
                            "icon": "fa-square-root-variable",
                            "delay": "0.1s",
                            "title": "Expresión (Binomio/Polinomio)",
                            "content": "<p>Un binomio o polinomio es una <b>expresión</b>. Ejemplo: $2x + 3y$.</p>"
                        },
                        {
                            "icon": "fa-equals",
                            "delay": "0.2s",
                            "title": "Ecuación",
                            "content": "<p>Una ecuación contiene una <b>igualdad</b> ($=$). Si no hay igualdad, no se puede despejar ni encontrar valores.</p>"
                        },
                        {
                            "icon": "fa-superscript",
                            "delay": "0.3s",
                            "title": "Grado de la ecuación",
                            "content": "<p>El grado lo determina el <b>exponente más grande</b>.</p><ul><li>$3x^2 + 5y = 10$ (segundo grado).</li><li>$x + y + z = 6$ (primer grado).</li></ul>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat9-2",
                    "topicIdx": 2,
                    "title": "2. Sustitución por Verificación de Incisos",
                    "icon": "fa-list-check",
                    "subnodes": [
                        {
                            "icon": "fa-flag",
                            "delay": "0.1s",
                            "title": "Idea general",
                            "content": "<p>En lugar de usar métodos largos como <b>Suma y Resta</b>, <b>Igualación</b> o <b>Cramer</b>, una estrategia en opción múltiple es probar incisos: se sustituyen los valores propuestos y se verifica qué opción cumple todas las ecuaciones.</p>"
                        },
                        {
                            "icon": "fa-shuffle",
                            "delay": "0.2s",
                            "title": "Pasos",
                            "content": "<ol><li><b>Elegir un inciso:</b> iniciar con el que resulte más sencillo (usualmente el <b>A</b> o el que tenga números enteros).</li><li><b>Sustituir en la primera ecuación.</b></li><li><b>Verificar la igualdad:</b> si no se cumple, descartar.</li><li><b>Probar en todas las ecuaciones:</b> la respuesta correcta debe satisfacer el sistema completo.</li></ol>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat9-3",
                    "topicIdx": 3,
                    "title": "3. Sistemas 3×3 (x, y, z) (Área 1 y 2)",
                    "icon": "fa-cubes",
                    "subnodes": [
                        {
                            "icon": "fa-diagram-project",
                            "delay": "0.1s",
                            "title": "Criterio",
                            "content": "<p>El procedimiento es el mismo, pero se debe validar con cuidado el manejo de signos al sustituir $x$, $y$ y $z$ en cada ecuación.</p>"
                        },
                        {
                            "icon": "fa-code-branch",
                            "delay": "0.2s",
                            "title": "Ejemplo de validación",
                            "content": "<p><b>Sistema:</b></p><p>$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 2 \\\\ 3x + 2y - 2z = 10 \\end{cases}$$</p><p><b>Inciso:</b> $x=2$, $y=3$, $z=1$.</p><ul><li>$2 + 3 + 1 = 6$ (correcto).</li><li>$2(2) - 3 + 1 = 2$ (correcto).</li><li>$3(2) + 2(3) - 2(1) = 10$ (correcto).</li></ul><p>La opción es correcta porque cumple todo el sistema.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat9-4",
                    "topicIdx": 4,
                    "title": "4. Trampa de Signos y Estrategias",
                    "icon": "fa-triangle-exclamation",
                    "subnodes": [
                        {
                            "icon": "fa-plus-minus",
                            "delay": "0.1s",
                            "title": "Ley de signos en sustitución",
                            "content": "<p><b>Error común:</b> ignorar el choque de signos al sustituir.</p><p>Si existe una resta en la ecuación y el valor sustituido es negativo, la operación se convierte en suma.</p><p><b>Ecuación:</b> $2x - y$</p><p><b>Si</b> $y=-1$:</p><p>$2x - (-1) = 2x + 1$.</p>"
                        },
                        {
                            "icon": "fa-bolt",
                            "delay": "0.2s",
                            "title": "Recomendaciones",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-stopwatch'></i> <b>EFICIENCIA:</b><br>En opción múltiple, el objetivo es identificar el inciso correcto: importa el acierto. Si la sustitución toma 30 segundos y un método largo (por ejemplo, suma y resta) toma 3 minutos, se prioriza la sustitución.</div><div class='exam-tip'><i class='fa-solid fa-filter'></i> <b>DESCARTE LÓGICO:</b><br>Si una ecuación suma valores positivos y el resultado es pequeño, se pueden descartar incisos con valores demasiado altos.</div><div class='exam-tip'><i class='fa-solid fa-layer-group'></i> <b>BANCOS DE PREGUNTAS:</b><br>Se repiten tipos de sistemas en años recientes (por ejemplo, 2024 y 2025).</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/embed/eZzHVJofQ40",
            "id": "content-matematicas-9",
            "preguntas": {
                "unam": [
                    {
                        "numero": 51,
                        "pregunta": "Resuelve el siguiente sistema de ecuaciones.<br><br>$3x + 5y = 7$<br>$2x - y = -4$",
                        "opciones": [
                            "x = –2, y = 1",
                            "x = –2, y = –1",
                            "x = –1, y = 2",
                            "x = 1, y = –1"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Por sustitución: de $2x - y = -4$ se obtiene $y = 2x + 4$. Sustituyendo en $3x + 5y = 7$: $3x + 5(2x+4)=7$ → $13x+20=7$ → $x=-1$ y $y=2$."
                    }
                ],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál de las siguientes opciones es una ecuación?",
                        "opciones": [
                            "$2x + 3y$",
                            "$x^2 - 4x + 1$",
                            "$3x^2 + 5y = 10$",
                            "$7a - 2b$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Una ecuación se reconoce porque tiene signo de igualdad (=). La expresión $3x^2 + 5y = 10$ sí es una ecuación."
                    },
                    {
                        "numero": 2,
                        "pregunta": "El grado de una ecuación lo determina:",
                        "opciones": [
                            "El número de variables.",
                            "El coeficiente más grande.",
                            "El exponente más grande.",
                            "La cantidad de términos."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "El grado se determina por el exponente más grande presente en la ecuación."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Para que un inciso sea la solución de un sistema, debe:",
                        "opciones": [
                            "Cumplir solo la primera ecuación.",
                            "Cumplir solo la última ecuación.",
                            "Cumplir todas las ecuaciones del sistema.",
                            "Tener valores enteros."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Una opción puede funcionar en una ecuación y fallar en otra; la solución correcta cumple todas las igualdades del sistema."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Simplifica la sustitución en $2x - y$ si $y=-1$:",
                        "opciones": [
                            "$2x - 1$",
                            "$2x + 1$",
                            "$-2x - 1$",
                            "$-2x + 1$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Al sustituir un negativo en una resta: $2x - (-1) = 2x + 1$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "En el sistema 3×3 de la clase, la terna $(2,3,1)$ es correcta porque:",
                        "opciones": [
                            "Cumple solo $x+y+z=6$.",
                            "Cumple dos ecuaciones y basta.",
                            "Cumple las tres ecuaciones del sistema.",
                            "Tiene valores pequeños."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "Al sustituir $x=2$, $y=3$, $z=1$ se verifican las tres igualdades: 6, 2 y 10."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "Resuelve el sistema: $3x + 5y = 7$ y $2x - y = -4$.",
                        "opciones": [
                            "$x=-2, y=1$",
                            "$x=-2, y=-1$",
                            "$x=-1, y=2$",
                            "$x=1, y=-1$"
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "De $2x-y=-4$ se obtiene $y=2x+4$. Sustituyendo en $3x+5y=7$: $3x+10x+20=7$ → $x=-1$ y $y=2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Un inciso satisface la primera ecuación del sistema pero falla en la segunda. En ese caso:",
                        "opciones": [
                            "Sigue siendo correcto.",
                            "Se acepta si el error es pequeño.",
                            "Se descarta, porque debe cumplir todas las ecuaciones.",
                            "Solo se revisa la primera ecuación."
                        ],
                        "respuesta": 2,
                        "retroalimentacion": "La verificación debe hacerse en todas las ecuaciones; si falla una, el inciso no es solución del sistema."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Identifica el grado de $x + y + z = 6$:",
                        "opciones": [
                            "Grado 1.",
                            "Grado 2.",
                            "Grado 3.",
                            "No tiene grado."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "El exponente mayor es 1, por lo que es una ecuación de primer grado."
                    },
                    {
                        "numero": 4,
                        "pregunta": "Aplica la ley de signos al sustituir en $2x - y$ con $y=-3$:",
                        "opciones": [
                            "$2x - 3$",
                            "$2x + 3$",
                            "$-2x - 3$",
                            "$-2x + 3$"
                        ],
                        "respuesta": 1,
                        "retroalimentacion": "Restar un número negativo equivale a sumar: $2x - (-3) = 2x + 3$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "Criterio de descarte lógico mencionado en clase:",
                        "opciones": [
                            "Si el resultado es pequeño y se suman positivos, descartar valores muy altos.",
                            "Elegir siempre el inciso A.",
                            "Descartar siempre fracciones.",
                            "Solo resolver con Cramer."
                        ],
                        "respuesta": 0,
                        "retroalimentacion": "Si una ecuación suma valores positivos y el resultado es pequeño, incisos con valores demasiado altos pueden descartarse por lógica."
                    }
                ]
            },
            "flashcards": [
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
                }
            ]
        },
        {
            "title": "Apuntes de Matemáticas",
            "titleIconLeft": "fa-square-root-variable",
            "titleIconRight": "fa-calculator",
            "titleStyle": "color: #2563eb;",
            "mainTopicId": "mainTopicMatematicas10",
            "mainTopicClass": "topic-1",
            "mainTopicTitle": "Matemáticas",
            "mainTopicIcon1": "fa-superscript",
            "mainTopicIcon2": "fa-calculator",
            "mainTopicSubtitle": "Clase 10: Factorización de Trinomios y Ecuaciones de Segundo Grado",
            "branches": [
                {
                    "id": "nodes-mat10-1",
                    "topicIdx": 1,
                    "title": "1. Trinomio vs. Ecuación de Segundo Grado",
                    "icon": "fa-not-equal",
                    "subnodes": [
                        {
                            "icon": "fa-square",
                            "delay": "0.1s",
                            "title": "Trinomio Cuadrado",
                            "content": "<p>Es solo la <b>expresión</b>. Ejemplo: $x^2 + 5x + 6$.</p>"
                        },
                        {
                            "icon": "fa-equals",
                            "delay": "0.2s",
                            "title": "Ecuación de Segundo Grado",
                            "content": "<p>Es cuando esa expresión está <b>igualada a cero</b>. Ejemplo: $x^2 + 5x + 6 = 0$.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Identifica visualmente la diferencia: si hay un $= 0$, es una ecuación y debes encontrar raíces.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat10-2",
                    "topicIdx": 2,
                    "title": "2. Método de Factorización (Sin Fórmula General)",
                    "icon": "fa-code-branch",
                    "subnodes": [
                        {
                            "icon": "fa-magnifying-glass",
                            "delay": "0.1s",
                            "title": "Paso 1: Buscar los Números",
                            "content": "<p>Para ecuaciones del tipo $x^2 + bx + c = 0$ (donde la $x^2$ no tiene coeficiente), encontrar dos números que:</p><ul><li><b>Multiplicados</b> den el término independiente ($c$).</li><li><b>Sumados o restados</b> den el término lineal ($b$).</li></ul>"
                        },
                        {
                            "icon": "fa-rotate",
                            "delay": "0.2s",
                            "title": "Paso 2: Invertir Signos (Las Raíces)",
                            "content": "<p>Una vez que tienes los binomios, para encontrar $x_1$ y $x_2$ (las raíces), debes <b>invertir el signo</b> de los números que encontraste.</p><div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>Los incisos suelen traer los números con los signos de la factorización para confundirte. No olvides invertirlos.</div>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat10-3",
                    "topicIdx": 3,
                    "title": "3. Reglas de Signos para los Paréntesis",
                    "icon": "fa-plus-minus",
                    "subnodes": [
                        {
                            "icon": "fa-plus",
                            "delay": "0.1s",
                            "title": "$c$ positivo, $b$ positivo",
                            "content": "<p>Ambos paréntesis son <b>positivos</b>: $(x + \\text{...})(x + \\text{...})$.</p>"
                        },
                        {
                            "icon": "fa-minus",
                            "delay": "0.2s",
                            "title": "$c$ positivo, $b$ negativo",
                            "content": "<p>Ambos paréntesis son <b>negativos</b>: $(x - \\text{...})(x - \\text{...})$.</p>"
                        },
                        {
                            "icon": "fa-right-left",
                            "delay": "0.3s",
                            "title": "$c$ negativo, $b$ positivo",
                            "content": "<p>Signos <b>diferentes</b>; el número más grande lleva signo <b>positivo</b>.</p>"
                        },
                        {
                            "icon": "fa-shuffle",
                            "delay": "0.4s",
                            "title": "$c$ negativo, $b$ negativo",
                            "content": "<p>Signos <b>diferentes</b>; el número más grande lleva signo <b>negativo</b>.</p>"
                        }
                    ]
                },
                {
                    "id": "nodes-mat10-4",
                    "topicIdx": 4,
                    "title": "4. Ejemplos Resueltos",
                    "icon": "fa-pen-to-square",
                    "subnodes": [
                        {
                            "icon": "fa-1",
                            "delay": "0.1s",
                            "title": "Ejemplo: Signos Iguales",
                            "content": "<p>$x^2 - 7x + 10 = 0$</p><p>Números que multiplicados den $10$ y juntados $-7$: $-5$ y $-2$.</p><p>Factorización: $(x - 5)(x - 2) = 0$.</p><p><b>Raíces:</b> $x_1 = 5,\\; x_2 = 2$.</p>"
                        },
                        {
                            "icon": "fa-2",
                            "delay": "0.2s",
                            "title": "Ejemplo: Signos Diferentes",
                            "content": "<p>$x^2 + 3x - 10 = 0$</p><p>Multiplicados den $-10$ y juntados $+3$: $+5$ y $-2$.</p><p>Factorización: $(x + 5)(x - 2) = 0$.</p><p><b>Raíces:</b> $x_1 = -5,\\; x_2 = 2$.</p>"
                        },
                        {
                            "icon": "fa-3",
                            "delay": "0.3s",
                            "title": "Ejemplo: Coeficiente Unitario Implícito",
                            "content": "<p>$x^2 - x - 2 = 0$</p><p>Multiplicados den $-2$ y juntados $-1$ (la $x$ sola vale $1$): $-2$ y $+1$.</p><p>Factorización: $(x - 2)(x + 1) = 0$.</p><p><b>Raíces:</b> $x_1 = 2,\\; x_2 = -1$.</p>"
                        },
                        {
                            "icon": "fa-rocket",
                            "delay": "0.4s",
                            "title": "Tips para el Reactivo",
                            "content": "<div class='exam-tip'><i class='fa-solid fa-rocket'></i> <b>TIP DE EXAMEN:</b><br>El orden de los binomios no importa: $(x+5)(x-2) = (x-2)(x+5)$. Lo importante es que el signo acompañe al número correcto.<br><br>Si te bloqueas buscando los números, toma un valor de los incisos y sustitúyelo en la $x$. Si el resultado da $0$, esa es la respuesta.</div>"
                        }
                    ]
                }
            ],
            "videoUrl": "https://www.youtube.com/watch?v=vTFoUYK-QS4",
            "id": "content-matematicas-10",
            "preguntas": {
                "unam": [],
                "nivel1": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuál es la diferencia entre un trinomio cuadrado y una ecuación de segundo grado?",
                        "opciones": ["No hay diferencia", "El trinomio está igualado a cero", "La ecuación está igualada a cero", "La ecuación no tiene término independiente"],
                        "respuesta": 2,
                        "retroalimentacion": "El trinomio es solo la expresión ($x^2 + bx + c$); la ecuación de segundo grado es cuando está igualada a cero ($x^2 + bx + c = 0$)."
                    },
                    {
                        "numero": 2,
                        "pregunta": "Al factorizar $x^2 + 5x + 6 = 0$, ¿cuáles son las raíces?",
                        "opciones": ["$x_1 = 3,\\; x_2 = 2$", "$x_1 = -3,\\; x_2 = -2$", "$x_1 = 6,\\; x_2 = 1$", "$x_1 = -6,\\; x_2 = -1$"],
                        "respuesta": 1,
                        "retroalimentacion": "Números que multiplicados den $6$ y sumados $5$: $3$ y $2$. Factorización: $(x+3)(x+2)=0$. Raíces (invertir signo): $x_1=-3,\\; x_2=-2$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Si $c$ es positivo y $b$ es negativo en $x^2 + bx + c = 0$, ¿qué signos tienen los paréntesis?",
                        "opciones": ["Ambos positivos", "Ambos negativos", "Signos diferentes, el mayor positivo", "Signos diferentes, el mayor negativo"],
                        "respuesta": 1,
                        "retroalimentacion": "Cuando $c$ es positivo y $b$ es negativo, ambos paréntesis llevan signo negativo: $(x-\\text{...})(x-\\text{...})$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "¿Qué se debe hacer después de factorizar para encontrar las raíces?",
                        "opciones": ["Sumar los números", "Multiplicar los números", "Invertir el signo de cada número", "Elevar al cuadrado"],
                        "respuesta": 2,
                        "retroalimentacion": "Para obtener las raíces a partir de la factorización, se invierten los signos de los números encontrados."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Cuáles son las raíces de $x^2 - 7x + 10 = 0$?",
                        "opciones": ["$x_1 = -5,\\; x_2 = -2$", "$x_1 = 5,\\; x_2 = 2$", "$x_1 = 7,\\; x_2 = 10$", "$x_1 = -5,\\; x_2 = 2$"],
                        "respuesta": 1,
                        "retroalimentacion": "Factorización: $(x-5)(x-2)=0$. Raíces (invertir signo): $x_1=5,\\; x_2=2$."
                    }
                ],
                "nivel2": [
                    {
                        "numero": 1,
                        "pregunta": "¿Cuáles son las raíces de $x^2 + 3x - 10 = 0$?",
                        "opciones": ["$x_1 = 5,\\; x_2 = -2$", "$x_1 = -5,\\; x_2 = 2$", "$x_1 = -5,\\; x_2 = -2$", "$x_1 = 5,\\; x_2 = 2$"],
                        "respuesta": 1,
                        "retroalimentacion": "Multiplicados den $-10$ y juntados $+3$: $+5$ y $-2$. Factorización: $(x+5)(x-2)=0$. Raíces: $x_1=-5,\\; x_2=2$."
                    },
                    {
                        "numero": 2,
                        "pregunta": "¿Cuáles son las raíces de $x^2 - x - 2 = 0$?",
                        "opciones": ["$x_1 = 2,\\; x_2 = 1$", "$x_1 = -2,\\; x_2 = 1$", "$x_1 = 2,\\; x_2 = -1$", "$x_1 = -2,\\; x_2 = -1$"],
                        "respuesta": 2,
                        "retroalimentacion": "Multiplicados den $-2$ y juntados $-1$: $-2$ y $+1$. Factorización: $(x-2)(x+1)=0$. Raíces: $x_1=2,\\; x_2=-1$."
                    },
                    {
                        "numero": 3,
                        "pregunta": "Si al factorizar obtienes $(x - 4)(x + 3) = 0$, ¿cuáles son las raíces?",
                        "opciones": ["$x_1 = -4,\\; x_2 = 3$", "$x_1 = 4,\\; x_2 = -3$", "$x_1 = 4,\\; x_2 = 3$", "$x_1 = -4,\\; x_2 = -3$"],
                        "respuesta": 1,
                        "retroalimentacion": "Se invierten los signos: $(x-4) \\rightarrow x_1=4$ y $(x+3) \\rightarrow x_2=-3$."
                    },
                    {
                        "numero": 4,
                        "pregunta": "En $x^2 - 9x + 20 = 0$, $c$ es positivo y $b$ es negativo. ¿Cuál es la factorización?",
                        "opciones": ["$(x + 5)(x + 4)$", "$(x - 5)(x - 4)$", "$(x + 5)(x - 4)$", "$(x - 5)(x + 4)$"],
                        "respuesta": 1,
                        "retroalimentacion": "$c$ positivo y $b$ negativo: ambos paréntesis negativos. $5 \\times 4 = 20$ y $5 + 4 = 9$. Factorización: $(x-5)(x-4)$."
                    },
                    {
                        "numero": 5,
                        "pregunta": "¿Qué estrategia puedes usar si no encuentras los números para factorizar en el examen?",
                        "opciones": ["Aplicar la fórmula general directamente", "Sustituir los valores de los incisos en la ecuación y ver cuál da cero", "Derivar la ecuación", "Multiplicar todos los coeficientes"],
                        "respuesta": 1,
                        "retroalimentacion": "Si te bloqueas, puedes tomar un valor de los incisos y sustituirlo en la $x$. Si el resultado da $0$, esa es la respuesta correcta."
                    }
                ]
            },
            "flashcards": [
                {
                    "id": "mat10-001",
                    "pregunta": "¿Cuál es la diferencia entre un trinomio cuadrado y una ecuación de segundo grado?",
                    "respuesta": "El trinomio es la expresión ($x^2 + bx + c$); la ecuación es esa expresión igualada a cero ($= 0$).",
                    "tema": "Ecuaciones de Segundo Grado",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-002",
                    "pregunta": "En el método de factorización, ¿qué dos condiciones deben cumplir los números buscados?",
                    "respuesta": "Multiplicados deben dar $c$ (término independiente) y sumados/restados deben dar $b$ (término lineal).",
                    "tema": "Factorización",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-003",
                    "pregunta": "Después de factorizar, ¿cómo se obtienen las raíces ($x_1$ y $x_2$)?",
                    "respuesta": "Se invierte el signo de cada número encontrado en los binomios.",
                    "tema": "Factorización",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-004",
                    "pregunta": "Si $c$ es positivo y $b$ es positivo, ¿qué signos llevan los paréntesis?",
                    "respuesta": "Ambos positivos: $(x + \\text{...})(x + \\text{...})$.",
                    "tema": "Reglas de Signos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-005",
                    "pregunta": "Si $c$ es positivo y $b$ es negativo, ¿qué signos llevan los paréntesis?",
                    "respuesta": "Ambos negativos: $(x - \\text{...})(x - \\text{...})$.",
                    "tema": "Reglas de Signos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-006",
                    "pregunta": "Si $c$ es negativo, ¿qué signos llevan los paréntesis?",
                    "respuesta": "Signos diferentes. Si $b$ es positivo, el mayor es positivo; si $b$ es negativo, el mayor es negativo.",
                    "tema": "Reglas de Signos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-007",
                    "pregunta": "Factoriza y resuelve: $x^2 - 7x + 10 = 0$.",
                    "respuesta": "$(x-5)(x-2)=0$. Raíces: $x_1=5,\\; x_2=2$.",
                    "tema": "Ejemplos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-008",
                    "pregunta": "Factoriza y resuelve: $x^2 + 3x - 10 = 0$.",
                    "respuesta": "$(x+5)(x-2)=0$. Raíces: $x_1=-5,\\; x_2=2$.",
                    "tema": "Ejemplos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-009",
                    "pregunta": "En $x^2 - x - 2 = 0$, ¿cuánto vale el coeficiente de $x$?",
                    "respuesta": "Vale $1$ (la $x$ sola tiene coeficiente implícito de $1$, con signo negativo: $-1$).",
                    "tema": "Ejemplos",
                    "asignatura": "Matemáticas"
                },
                {
                    "id": "mat10-010",
                    "pregunta": "¿Qué estrategia de respaldo puedes usar si no encuentras los números para factorizar?",
                    "respuesta": "Sustituir los valores de los incisos en la ecuación; si el resultado da $0$, esa es la respuesta.",
                    "tema": "Estrategias",
                    "asignatura": "Matemáticas"
                }
            ]
        }
    ]
};
