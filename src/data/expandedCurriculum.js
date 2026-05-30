(function (window) {
  "use strict";

  window.EnemData = window.EnemData || {};
  window.EnemData.expandedCurriculum = [
  {
    "id": "matematica",
    "name": "Matemática e suas Tecnologias",
    "description": "Roadmap granular de matemática com foco em TRI, modelagem, grandezas, geometria, funções, estatística e probabilidade.",
    "disciplines": [
      {
        "id": "matematica-matematica",
        "name": "Matemática",
        "contents": [
          {
            "id": "MAT-GM-ESC",
            "name": "Escalas, razão e proporção",
            "description": "Escalas, razão e proporção",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "operações básicas",
              "frações",
              "unidades de medida."
            ],
            "priority": "Crítico",
            "historicalFrequency": "14,2%",
            "difficulty": "Baixa a Média",
            "studyTimeMinutes": 240,
            "reviewTimeMinutes": 50,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-GM-ESC-razao-entre-grandezas",
                "name": "Razão entre grandezas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-01",
                    "name": "identificar parte-todo e parte-parte",
                    "description": "M C1/C3; H1-H5, H10-H14",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "comparação de densidade",
                      "rendimento",
                      "consumo",
                      "população"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C3; H1-H5, H10-H14",
                    "competencies": [
                      "inverter numerador e denominador"
                    ],
                    "commonErrors": [
                      "porcentagem",
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-ESC-escala-cartografica",
                "name": "Escala cartográfica",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-02",
                    "name": "converter distância no mapa para distância real",
                    "description": "M C3; H10-H12",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "mapas",
                      "plantas",
                      "rotas",
                      "maquetes"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C3; H10-H12",
                    "competencies": [
                      "esquecer conversão cm-m-km"
                    ],
                    "commonErrors": [
                      "geografia/cartografia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-ESC-escala-grafica-e-numerica",
                "name": "Escala gráfica e numérica",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-03",
                    "name": "escolher escala adequada",
                    "description": "M C3; H10-H14",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura de mapas",
                      "gráficos técnicos e desenhos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C3; H10-H14",
                    "competencies": [
                      "tratar escala como porcentagem"
                    ],
                    "commonErrors": [
                      "geometria plana"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-ESC-proporcao-direta",
                "name": "Proporção direta",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-04",
                    "name": "montar igualdade entre razões",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "receitas",
                      "misturas",
                      "mapas",
                      "velocidade constante"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "aplicar regra de três sem verificar relação"
                    ],
                    "commonErrors": [
                      "física",
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-ESC-proporcao-inversa",
                "name": "Proporção inversa",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-05",
                    "name": "reconhecer relação contrária",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "produtividade",
                      "tempo",
                      "quantidade de trabalhadores"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "resolver como direta"
                    ],
                    "commonErrors": [
                      "funções",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-ESC-questoes-tipicas-enem",
                "name": "Questões típicas ENEM",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-ESC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,2%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-ESC-06",
                    "name": "decidir se usa razão, escala ou proporção",
                    "description": "Eixos SP/CA",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "problemas contextualizados com dados misturados"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "Eixos SP/CA",
                    "competencies": [
                      "pular a análise da unidade pedida"
                    ],
                    "commonErrors": [
                      "todos os blocos quantitativos"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-GM-REG",
            "name": "Grandezas proporcionais e regra de três",
            "description": "Grandezas proporcionais e regra de três",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "MAT-GM-ESC-01",
              "MAT-GM-ESC-04",
              "MAT-GM-ESC-05."
            ],
            "priority": "Crítico",
            "historicalFrequency": "14,0%",
            "difficulty": "Baixa a Média",
            "studyTimeMinutes": 210,
            "reviewTimeMinutes": 45,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-GM-REG-regra-de-tres-simples",
                "name": "Regra de três simples",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-REG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-REG-01",
                    "name": "montar tabela de duas grandezas",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "consumo",
                      "custo",
                      "produção",
                      "deslocamento"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "alinhar dados em colunas erradas"
                    ],
                    "commonErrors": [
                      "química",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-REG-regra-de-tres-inversa",
                "name": "Regra de três inversa",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-REG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-REG-02",
                    "name": "identificar aumento e diminuição opostos",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tempo de execução",
                      "vazão",
                      "equipes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "multiplicar cruzado sem inverter"
                    ],
                    "commonErrors": [
                      "funções"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-REG-regra-de-tres-composta",
                "name": "Regra de três composta",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-REG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-REG-03",
                    "name": "separar grandezas independentes",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "produtividade",
                      "máquinas",
                      "tempo e unidades"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "50min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "não fixar a grandeza-alvo"
                    ],
                    "commonErrors": [
                      "física",
                      "economia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-REG-taxas-unitarias",
                "name": "Taxas unitárias",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-REG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-REG-04",
                    "name": "calcular por unidade",
                    "description": "M C1/C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "preço por kg",
                      "km/L",
                      "kWh",
                      "habitantes/km²"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C4",
                    "competencies": [
                      "comparar valores em unidades diferentes"
                    ],
                    "commonErrors": [
                      "estatística",
                      "geografia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GM-REG-proporcionalidade-em-graficos",
                "name": "Proporcionalidade em gráficos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GM-REG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GM-REG-05",
                    "name": "reconhecer reta pela origem",
                    "description": "M C5/C6",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "gráficos de consumo",
                      "custo e distância"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5/C6",
                    "competencies": [
                      "confundir crescimento linear com proporcionalidade"
                    ],
                    "commonErrors": [
                      "funções afim"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-AR-POR",
            "name": "Porcentagem e matemática financeira",
            "description": "Porcentagem e matemática financeira",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "frações",
              "razão",
              "regra de três."
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 300,
            "reviewTimeMinutes": 60,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-AR-POR-percentual-basico",
                "name": "Percentual básico",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-01",
                    "name": "converter fração, decimal e porcentagem",
                    "description": "M C1; H1-H5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "descontos",
                      "pesquisas",
                      "indicadores sociais"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1; H1-H5",
                    "competencies": [
                      "mover vírgula incorretamente"
                    ],
                    "commonErrors": [
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-POR-aumentos-e-descontos",
                "name": "Aumentos e descontos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-02",
                    "name": "usar fator multiplicativo",
                    "description": "M C1/C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "promoções",
                      "reajustes",
                      "inflação"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C4",
                    "competencies": [
                      "somar percentuais sucessivos diretamente"
                    ],
                    "commonErrors": [
                      "funções exponenciais"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-POR-variacao-percentual",
                "name": "Variação percentual",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-03",
                    "name": "comparar valor inicial e final",
                    "description": "M C1/C6",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "crescimento populacional",
                      "produção",
                      "preços"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C6",
                    "competencies": [
                      "dividir pelo valor final em vez do inicial"
                    ],
                    "commonErrors": [
                      "gráficos"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-POR-juros-simples",
                "name": "Juros simples",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-04",
                    "name": "calcular montante linear",
                    "description": "M C1/C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "empréstimos simples e aplicações curtas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C5",
                    "competencies": [
                      "usar taxa mensal como anual"
                    ],
                    "commonErrors": [
                      "funções afim"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-POR-juros-compostos",
                "name": "Juros compostos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-05",
                    "name": "interpretar crescimento acumulado",
                    "description": "M C5; H19-H23",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "investimentos",
                      "dívidas",
                      "inflação acumulada"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "55min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5; H19-H23",
                    "competencies": [
                      "aplicar juros simples em períodos sucessivos"
                    ],
                    "commonErrors": [
                      "função exponencial"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-POR-descontos-sucessivos",
                "name": "Descontos sucessivos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-POR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-POR-06",
                    "name": "calcular efeito acumulado",
                    "description": "M C1/C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "promoções combinadas e impostos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/C4",
                    "competencies": [
                      "somar descontos como se fossem independentes"
                    ],
                    "commonErrors": [
                      "progressões"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-AR-OPS",
            "name": "Operações básicas, frações e MDC/MMC",
            "description": "Operações básicas, frações e MDC/MMC",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "tabuada",
              "valor posicional",
              "leitura cuidadosa."
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,8%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 240,
            "reviewTimeMinutes": 60,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-AR-OPS-operacoes-com-inteiros",
                "name": "Operações com inteiros",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-01",
                    "name": "sinais, prioridade e parênteses",
                    "description": "M C1; H1-H5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cálculos intermediários em quase toda a prova"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1; H1-H5",
                    "competencies": [
                      "erro de sinal e ordem de operações"
                    ],
                    "commonErrors": [
                      "física",
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-OPS-fracoes-equivalentes",
                "name": "Frações equivalentes",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-02",
                    "name": "simplificar e comparar",
                    "description": "M C1",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "razões",
                      "probabilidades",
                      "escalas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1",
                    "competencies": [
                      "comparar só numeradores"
                    ],
                    "commonErrors": [
                      "proporção"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-OPS-operacoes-com-fracoes",
                "name": "Operações com frações",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-03",
                    "name": "soma, produto e divisão",
                    "description": "M C1",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "mistura",
                      "taxa",
                      "probabilidade"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1",
                    "competencies": [
                      "somar numerador com numerador e denominador com denominador"
                    ],
                    "commonErrors": [
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-OPS-multiplos-e-divisores",
                "name": "Múltiplos e divisores",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-04",
                    "name": "reconhecer padrões",
                    "description": "M C1",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ciclos",
                      "embalagens",
                      "sincronização"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1",
                    "competencies": [
                      "confundir múltiplo com divisor"
                    ],
                    "commonErrors": [
                      "MMC/MDC"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-OPS-mmc-e-mdc",
                "name": "MMC e MDC",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-05",
                    "name": "escolher mínimo comum ou máximo divisor",
                    "description": "M C1/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "repartições",
                      "encontros periódicos",
                      "agrupamentos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C1/SP",
                    "competencies": [
                      "usar MMC quando o problema pede maior tamanho comum"
                    ],
                    "commonErrors": [
                      "combinatória"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-AR-OPS-estimativa-e-arredondamento",
                "name": "Estimativa e arredondamento",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-AR-OPS"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,8%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-AR-OPS-06",
                    "name": "checar plausibilidade",
                    "description": "Eixo SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "eliminar alternativas absurdas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "Eixo SP",
                    "competencies": [
                      "confiar em conta longa sem validar ordem de grandeza"
                    ],
                    "commonErrors": [
                      "todas as áreas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-GEO-PLA",
            "name": "Geometria plana",
            "description": "Geometria plana",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "operações",
              "proporção",
              "unidades de medida."
            ],
            "priority": "Crítico",
            "historicalFrequency": "12,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 360,
            "reviewTimeMinutes": 75,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-GEO-PLA-perimetro",
                "name": "Perímetro",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-01",
                    "name": "somar contornos em figuras compostas",
                    "description": "M C2/C3; H6-H14",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cercas",
                      "molduras",
                      "trajetos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Baixa",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2/C3; H6-H14",
                    "competencies": [
                      "usar fórmula de área no lugar de perímetro"
                    ],
                    "commonErrors": [
                      "escalas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-PLA-areas-basicas",
                "name": "Áreas básicas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-02",
                    "name": "retângulo, triângulo, trapézio e círculo",
                    "description": "M C2; H7-H9",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pisos",
                      "terrenos",
                      "placas",
                      "embalagens"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2; H7-H9",
                    "competencies": [
                      "esquecer dividir por 2 em triângulo/trapézio"
                    ],
                    "commonErrors": [
                      "geometria espacial"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-PLA-figuras-compostas",
                "name": "Figuras compostas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-03",
                    "name": "decompor e recompor áreas",
                    "description": "M C2/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "plantas e regiões sombreadas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2/SP",
                    "competencies": [
                      "tentar fórmula única inexistente"
                    ],
                    "commonErrors": [
                      "escalas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-PLA-circulo-e-circunferencia",
                "name": "Círculo e circunferência",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-04",
                    "name": "raio, diâmetro, arco e setor",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "rodas",
                      "pistas",
                      "irrigação",
                      "setores circulares"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "confundir área com comprimento"
                    ],
                    "commonErrors": [
                      "trigonometria"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-PLA-triangulos",
                "name": "Triângulos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-05",
                    "name": "soma angular, Pitágoras e semelhança",
                    "description": "M C2; H8-H9",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "rampas",
                      "sombras",
                      "mapas",
                      "estruturas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "70min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2; H8-H9",
                    "competencies": [
                      "aplicar Pitágoras em triângulo não retângulo"
                    ],
                    "commonErrors": [
                      "trigonometria",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-PLA-poligonos",
                "name": "Polígonos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-PLA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-PLA-06",
                    "name": "ângulos, diagonais e regularidade",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ladrilhamento e formas arquitetônicas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "decorar fórmula sem entender n"
                    ],
                    "commonErrors": [
                      "artes",
                      "geometria espacial"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-GEO-ESP",
            "name": "Geometria espacial",
            "description": "Geometria espacial",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "geometria plana",
              "unidades cúbicas",
              "proporção."
            ],
            "priority": "Crítico",
            "historicalFrequency": "10,0%",
            "difficulty": "Média a Alta",
            "studyTimeMinutes": 330,
            "reviewTimeMinutes": 60,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-GEO-ESP-prismas-e-paralelepipedos",
                "name": "Prismas e paralelepípedos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-01",
                    "name": "calcular volume e área",
                    "description": "M C2/C3",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "caixas",
                      "reservatórios",
                      "construções"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2/C3",
                    "competencies": [
                      "misturar cm² com cm³"
                    ],
                    "commonErrors": [
                      "física",
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-ESP-cilindros",
                "name": "Cilindros",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-02",
                    "name": "volume, área lateral e capacidade",
                    "description": "M C2/C3",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "latas",
                      "caixas d'água",
                      "tubulações"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2/C3",
                    "competencies": [
                      "usar diâmetro como raio"
                    ],
                    "commonErrors": [
                      "química/soluções"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-ESP-cones-e-piramides",
                "name": "Cones e pirâmides",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-03",
                    "name": "volume com fator 1/3",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "embalagens",
                      "objetos cônicos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "esquecer o fator 1/3"
                    ],
                    "commonErrors": [
                      "semelhança"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-ESP-esferas",
                "name": "Esferas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-04",
                    "name": "volume e área em contextos reais",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "bolas",
                      "reservatórios e estimativas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Alta",
                    "difficulty": "45min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "erro com raio ao cubo"
                    ],
                    "commonErrors": [
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-ESP-planificacoes",
                "name": "Planificações",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-05",
                    "name": "relacionar sólido e molde",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "embalagens e construção de objetos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "contar faces duplicadas ou ausentes"
                    ],
                    "commonErrors": [
                      "artes/desenho técnico"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-GEO-ESP-semelhanca-espacial",
                "name": "Semelhança espacial",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-GEO-ESP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "10,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-GEO-ESP-06",
                    "name": "razão linear, de área e de volume",
                    "description": "M C2/C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "maquetes",
                      "ampliação/redução de recipientes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "55min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2/C4",
                    "competencies": [
                      "elevar razão errada ao quadrado/cubo"
                    ],
                    "commonErrors": [
                      "escalas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-TRI-RAZ",
            "name": "Razões trigonométricas e ciclo trigonométrico",
            "description": "Razões trigonométricas e ciclo trigonométrico",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "triângulo retângulo",
              "Pitágoras",
              "proporção."
            ],
            "priority": "Alto",
            "historicalFrequency": "3,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 210,
            "reviewTimeMinutes": 40,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-TRI-RAZ-triangulo-retangulo",
                "name": "Triângulo retângulo",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-TRI-RAZ"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-TRI-RAZ-01",
                    "name": "identificar catetos e hipotenusa",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "altura inacessível",
                      "rampas e sombras"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Baixa",
                    "difficulty": "25min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "trocar cateto oposto e adjacente"
                    ],
                    "commonErrors": [
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-TRI-RAZ-seno-cosseno-e-tangente",
                "name": "Seno, cosseno e tangente",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-TRI-RAZ"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-TRI-RAZ-02",
                    "name": "escolher razão correta",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "inclinação",
                      "distância e altura"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "decorar sem vincular ao ângulo"
                    ],
                    "commonErrors": [
                      "geometria plana"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-TRI-RAZ-angulos-notaveis",
                "name": "Ângulos notáveis",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-TRI-RAZ"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-TRI-RAZ-03",
                    "name": "30°, 45° e 60°",
                    "description": "M C2",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "questões diretas com tabela ou figura"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C2",
                    "competencies": [
                      "inverter valores de seno/cosseno"
                    ],
                    "commonErrors": [
                      "física/ondas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-TRI-RAZ-ciclo-trigonometrico",
                "name": "Ciclo trigonométrico",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-TRI-RAZ"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-TRI-RAZ-04",
                    "name": "sinais e simetrias básicas",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "aparece pouco e geralmente de forma contextual"
                    ],
                    "priority": "Baixo",
                    "historicalFrequency": "Alta",
                    "difficulty": "45min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "estudar funções trigonométricas avançadas demais"
                    ],
                    "commonErrors": [
                      "ondas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-ALG-EQI",
            "name": "Equações e inequações do 1º e 2º grau",
            "description": "Equações e inequações do 1º e 2º grau",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "operações",
              "frações",
              "produtos notáveis básicos."
            ],
            "priority": "Crítico",
            "historicalFrequency": "17,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 360,
            "reviewTimeMinutes": 75,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-ALG-EQI-equacao-do-1-grau",
                "name": "Equação do 1º grau",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-01",
                    "name": "isolar incógnita com equivalência",
                    "description": "M C5; H19-H23",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "problemas de preço",
                      "idade",
                      "consumo"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5; H19-H23",
                    "competencies": [
                      "mudar termo de lado sem trocar operação"
                    ],
                    "commonErrors": [
                      "funções afim"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-ALG-EQI-sistemas-lineares-simples",
                "name": "Sistemas lineares simples",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-02",
                    "name": "resolver por substituição ou adição",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "mistura de produtos",
                      "ingressos",
                      "pacotes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "montar duas equações inconsistentes"
                    ],
                    "commonErrors": [
                      "química",
                      "economia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-ALG-EQI-equacao-do-2-grau",
                "name": "Equação do 2º grau",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-03",
                    "name": "reconhecer a, b e c",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "áreas e trajetórias modeladas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "classificar equação incompleta de forma errada"
                    ],
                    "commonErrors": [
                      "função quadrática"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-ALG-EQI-bhaskara-e-raizes",
                "name": "Bhaskara e raízes",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-04",
                    "name": "calcular e interpretar soluções",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "problemas com duas possibilidades"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "55min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "erro no discriminante e no sinal de b"
                    ],
                    "commonErrors": [
                      "geometria",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-ALG-EQI-inequacoes",
                "name": "Inequações",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-05",
                    "name": "resolver e interpretar intervalo solução",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "limites",
                      "condições mínimas e máximas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "não inverter sinal ao multiplicar por negativo"
                    ],
                    "commonErrors": [
                      "funções"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-ALG-EQI-modelagem-algebrica",
                "name": "Modelagem algébrica",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-ALG-EQI"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-ALG-EQI-06",
                    "name": "transformar texto em expressão",
                    "description": "Eixos SP/CA; M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "enunciados longos com dados relevantes e distratores"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "65min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "Eixos SP/CA; M C5",
                    "competencies": [
                      "resolver antes de definir variável"
                    ],
                    "commonErrors": [
                      "todas as exatas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-FUN-AQE",
            "name": "Funções afim, quadrática e exponencial",
            "description": "Funções afim, quadrática e exponencial",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "equações",
              "plano cartesiano",
              "porcentagem."
            ],
            "priority": "Crítico",
            "historicalFrequency": "5,7%",
            "difficulty": "Média a Alta",
            "studyTimeMinutes": 420,
            "reviewTimeMinutes": 90,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-FUN-AQE-conceito-de-funcao",
                "name": "Conceito de função",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-01",
                    "name": "relacionar entrada, saída e lei",
                    "description": "M C5/C6",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tabelas",
                      "máquinas",
                      "tarifas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5/C6",
                    "competencies": [
                      "confundir variável independente e dependente"
                    ],
                    "commonErrors": [
                      "física",
                      "economia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-AQE-funcao-afim",
                "name": "Função afim",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-02",
                    "name": "coeficientes, raiz e crescimento",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tarifa fixa + variável",
                      "distância-tempo"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "confundir coeficiente angular com linear"
                    ],
                    "commonErrors": [
                      "regra de três"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-AQE-interpretacao-grafica",
                "name": "Interpretação gráfica",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-03",
                    "name": "ler interceptos e inclinação",
                    "description": "M C6/C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "gráficos socioeconômicos e científicos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "55min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C6/C5",
                    "competencies": [
                      "calcular fórmula quando bastava ler o gráfico"
                    ],
                    "commonErrors": [
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-AQE-funcao-quadratica",
                "name": "Função quadrática",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-04",
                    "name": "parábola, concavidade e raízes",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "lucro",
                      "área máxima",
                      "trajetórias"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "ignorar sinal de a"
                    ],
                    "commonErrors": [
                      "geometria",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-AQE-vertice-da-parabola",
                "name": "Vértice da parábola",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-05",
                    "name": "máximo e mínimo",
                    "description": "M C5/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "otimização de área",
                      "custo e lucro"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "55min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5/SP",
                    "competencies": [
                      "usar raiz no lugar do vértice"
                    ],
                    "commonErrors": [
                      "estatística",
                      "economia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-AQE-funcao-exponencial",
                "name": "Função exponencial",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-AQE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "5,7%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-AQE-06",
                    "name": "crescimento/decrescimento multiplicativo",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "juros",
                      "população",
                      "meia-vida",
                      "epidemias"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "60min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "tratar como crescimento linear"
                    ],
                    "commonErrors": [
                      "biologia",
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-FUN-LOG",
            "name": "Logaritmos e funções logarítmicas",
            "description": "Logaritmos e funções logarítmicas",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "potenciação",
              "função exponencial."
            ],
            "priority": "Alto",
            "historicalFrequency": "3,0%",
            "difficulty": "Alta",
            "studyTimeMinutes": 180,
            "reviewTimeMinutes": 40,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-FUN-LOG-definicao-de-logaritmo",
                "name": "Definição de logaritmo",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-LOG"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-LOG-01",
                    "name": "converter log em potência",
                    "description": "M C5/C6",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pH",
                      "terremotos",
                      "som",
                      "crescimento"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5/C6",
                    "competencies": [
                      "esquecer restrições da base"
                    ],
                    "commonErrors": [
                      "química",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-LOG-propriedades-operatorias",
                "name": "Propriedades operatórias",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-LOG"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-LOG-02",
                    "name": "produto, quociente e potência",
                    "description": "M C5",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "simplificação quando o item fornece propriedades"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Alta",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C5",
                    "competencies": [
                      "decorar sem conferir condições"
                    ],
                    "commonErrors": [
                      "exponencial"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-FUN-LOG-escalas-logaritmicas",
                "name": "Escalas logarítmicas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-FUN-LOG"
                ],
                "priority": "Alto",
                "historicalFrequency": "3,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-FUN-LOG-03",
                    "name": "interpretar variações em ordens de grandeza",
                    "description": "M C6/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pH",
                      "decibel",
                      "Richter"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C6/SP",
                    "competencies": [
                      "achar que diferença 1 significa aumento linear de 1 unidade"
                    ],
                    "commonErrors": [
                      "química",
                      "física"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-EST-GRA",
            "name": "Leitura e interpretação de gráficos e tabelas",
            "description": "Leitura e interpretação de gráficos e tabelas",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "porcentagem",
              "razão",
              "leitura atenta."
            ],
            "priority": "Crítico",
            "historicalFrequency": "9,1%",
            "difficulty": "Baixa a Média",
            "studyTimeMinutes": 240,
            "reviewTimeMinutes": 60,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-EST-GRA-tabelas",
                "name": "Tabelas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-GRA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "9,1%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-GRA-01",
                    "name": "localizar dado e cruzar linha/coluna",
                    "description": "M C6/C7; H24-H30",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "questões rápidas com dados de pesquisa"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "25min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C6/C7; H24-H30",
                    "competencies": [
                      "pegar linha ou coluna errada"
                    ],
                    "commonErrors": [
                      "humanas",
                      "natureza"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-GRA-grafico-de-barras-colunas",
                "name": "Gráfico de barras/colunas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-GRA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "9,1%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-GRA-02",
                    "name": "comparar categorias",
                    "description": "M C6/C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "distribuição por grupo",
                      "produto",
                      "região"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C6/C7",
                    "competencies": [
                      "ignorar escala do eixo"
                    ],
                    "commonErrors": [
                      "geografia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-GRA-grafico-de-linhas",
                "name": "Gráfico de linhas",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-GRA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "9,1%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-GRA-03",
                    "name": "identificar tendência e variação",
                    "description": "M C6/C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "séries temporais",
                      "produção",
                      "temperatura"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C6/C7",
                    "competencies": [
                      "confundir maior valor com maior crescimento"
                    ],
                    "commonErrors": [
                      "funções"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-GRA-grafico-de-setores",
                "name": "Gráfico de setores",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-GRA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "9,1%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-GRA-04",
                    "name": "relacionar ângulo, fração e percentual",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pesquisas de opinião e composição"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "somar setores incorretamente"
                    ],
                    "commonErrors": [
                      "porcentagem"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-GRA-infograficos",
                "name": "Infográficos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-GRA"
                ],
                "priority": "Crítico",
                "historicalFrequency": "9,1%",
                "difficulty": "Baixa a Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-GRA-05",
                    "name": "separar informação visual útil de distração",
                    "description": "Eixos DL/SP/CA",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "itens contextualizados com vários dados"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "Eixos DL/SP/CA",
                    "competencies": [
                      "usar dado visual sem verificar unidade"
                    ],
                    "commonErrors": [
                      "linguagens"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-EST-MTC",
            "name": "Média, mediana e moda",
            "description": "Média, mediana e moda",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "operações",
              "ordenação",
              "leitura de tabelas."
            ],
            "priority": "Crítico",
            "historicalFrequency": "6,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 240,
            "reviewTimeMinutes": 50,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-EST-MTC-media-aritmetica-simples",
                "name": "Média aritmética simples",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-MTC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-MTC-01",
                    "name": "somar e dividir pelo total",
                    "description": "M C7; H27-H30",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "notas",
                      "renda",
                      "consumo médio"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7; H27-H30",
                    "competencies": [
                      "dividir pelo valor errado"
                    ],
                    "commonErrors": [
                      "física",
                      "química"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-MTC-media-ponderada",
                "name": "Média ponderada",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-MTC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-MTC-02",
                    "name": "usar pesos corretamente",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "notas",
                      "índice composto",
                      "SISU"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "somar pesos como notas"
                    ],
                    "commonErrors": [
                      "planejamento de estudos"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-MTC-mediana",
                "name": "Mediana",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-MTC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-MTC-03",
                    "name": "ordenar e escolher posição central",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "distribuição de renda e dados assimétricos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "calcular média quando pedem mediana"
                    ],
                    "commonErrors": [
                      "sociologia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-MTC-moda",
                "name": "Moda",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-MTC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-MTC-04",
                    "name": "identificar valor mais frequente",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pesquisas e amostras"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Baixa",
                    "difficulty": "25min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "inventar moda quando não há repetição"
                    ],
                    "commonErrors": [
                      "probabilidade"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-EST-MTC-escolha-da-medida-adequada",
                "name": "Escolha da medida adequada",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-EST-MTC"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-EST-MTC-05",
                    "name": "decidir melhor resumo dos dados",
                    "description": "M C7/CA",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "itens conceituais sobre representatividade"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7/CA",
                    "competencies": [
                      "usar média em conjunto com outlier forte"
                    ],
                    "commonErrors": [
                      "redação",
                      "humanas"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-PRO-COM",
            "name": "Análise combinatória",
            "description": "Análise combinatória",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "multiplicação",
              "fatorial",
              "organização de casos."
            ],
            "priority": "Crítico",
            "historicalFrequency": "4,0%",
            "difficulty": "Alta",
            "studyTimeMinutes": 270,
            "reviewTimeMinutes": 50,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-PRO-COM-principio-multiplicativo",
                "name": "Princípio multiplicativo",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-COM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "4,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-COM-01",
                    "name": "construir árvore de possibilidades",
                    "description": "M C4; H15-H18",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "senhas",
                      "rotas",
                      "cardápios",
                      "placas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "45min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4; H15-H18",
                    "competencies": [
                      "somar possibilidades independentes"
                    ],
                    "commonErrors": [
                      "probabilidade"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-COM-permutacao",
                "name": "Permutação",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-COM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "4,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-COM-02",
                    "name": "ordenar todos os elementos",
                    "description": "M C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "filas",
                      "anagramas simples"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4",
                    "competencies": [
                      "usar combinação quando a ordem importa"
                    ],
                    "commonErrors": [
                      "probabilidade"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-COM-arranjo",
                "name": "Arranjo",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-COM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "4,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-COM-03",
                    "name": "escolher e ordenar parte dos elementos",
                    "description": "M C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "pódios",
                      "senhas sem repetição"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "Alta",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4",
                    "competencies": [
                      "confundir com combinação"
                    ],
                    "commonErrors": [
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-COM-combinacao",
                "name": "Combinação",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-COM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "4,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-COM-04",
                    "name": "escolher sem importar ordem",
                    "description": "M C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "grupos",
                      "comissões",
                      "equipes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "50min",
                    "studyTimeMinutes": 12,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4",
                    "competencies": [
                      "contar o mesmo grupo várias vezes"
                    ],
                    "commonErrors": [
                      "probabilidade"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-COM-restricoes",
                "name": "Restrições",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-COM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "4,0%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-COM-05",
                    "name": "tratar casos proibidos por complemento",
                    "description": "M C4/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "problemas com condições específicas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "55min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C4/SP",
                    "competencies": [
                      "listar casos de forma incompleta"
                    ],
                    "commonErrors": [
                      "lógica"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "MAT-PRO-PRO",
            "name": "Probabilidade e eventos condicionais",
            "description": "Probabilidade e eventos condicionais",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "frações",
              "combinatória",
              "leitura de tabelas."
            ],
            "priority": "Crítico",
            "historicalFrequency": "6,0%",
            "difficulty": "Média a Alta",
            "studyTimeMinutes": 270,
            "reviewTimeMinutes": 60,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "MAT-PRO-PRO-espaco-amostral",
                "name": "Espaço amostral",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-PRO-01",
                    "name": "listar possibilidades",
                    "description": "M C7/C4",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "sorteios",
                      "dados",
                      "urnas",
                      "cartas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Baixa",
                    "difficulty": "30min",
                    "studyTimeMinutes": 8,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7/C4",
                    "competencies": [
                      "contar possibilidades impossíveis"
                    ],
                    "commonErrors": [
                      "combinatória"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-PRO-probabilidade-simples",
                "name": "Probabilidade simples",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-PRO-02",
                    "name": "favoráveis sobre possíveis",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "jogos",
                      "sorteios",
                      "risco"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "inverter numerador/denominador"
                    ],
                    "commonErrors": [
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-PRO-eventos-complementares",
                "name": "Eventos complementares",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-PRO-03",
                    "name": "usar 1 - P(evento)",
                    "description": "M C7/SP",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "\"pelo menos um\"",
                      "\"nenhum\"",
                      "falhas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "35min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7/SP",
                    "competencies": [
                      "calcular todos os casos difíceis diretamente"
                    ],
                    "commonErrors": [
                      "combinatória"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-PRO-eventos-independentes",
                "name": "Eventos independentes",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-PRO-04",
                    "name": "multiplicar probabilidades",
                    "description": "M C7",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "repetição de experimento"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Média",
                    "difficulty": "40min",
                    "studyTimeMinutes": 10,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7",
                    "competencies": [
                      "somar probabilidades de eventos simultâneos"
                    ],
                    "commonErrors": [
                      "estatística"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "MAT-PRO-PRO-probabilidade-condicional",
                "name": "Probabilidade condicional",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "MAT-PRO-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "6,0%",
                "difficulty": "Média a Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "MAT-PRO-PRO-05",
                    "name": "atualizar espaço amostral",
                    "description": "M C7/CA",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "testes",
                      "diagnósticos",
                      "seleção por perfil"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "Alta",
                    "difficulty": "50min",
                    "studyTimeMinutes": 15,
                    "reviewTimeMinutes": null,
                    "enemAppearance": "M C7/CA",
                    "competencies": [
                      "manter denominador original após condição"
                    ],
                    "commonErrors": [
                      "biologia",
                      "sociologia"
                    ],
                    "connections": [
                      "não iniciado"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "natureza",
    "name": "Ciências da Natureza e suas Tecnologias",
    "description": "Roadmap granular de Física, Química e Biologia aplicado a energia, matéria, vida, ambiente e tecnologia.",
    "disciplines": [
      {
        "id": "natureza-fisica",
        "name": "Física",
        "contents": [
          {
            "id": "NAT-FIS-CIN",
            "name": "Cinemática",
            "description": "Cinemática",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "função afim"
            ],
            "priority": "Alto",
            "historicalFrequency": "12,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-CIN-mu",
                "name": "MU",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-CIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "12,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-CIN-01",
                    "name": "interpretar posição, velocidade e tempo",
                    "description": "gráficos s x t e v x t, deslocamento urbano",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "função afim"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "gráficos s x t e v x t, deslocamento urbano",
                    "competencies": [
                      "CN energia/movimento; SP"
                    ],
                    "commonErrors": [
                      "confundir distância e deslocamento"
                    ],
                    "connections": [
                      "funções",
                      "gráficos"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "NAT-FIS-CIN-muv",
                "name": "MUV",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-CIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "12,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-CIN-02",
                    "name": "usar aceleração e equações essenciais",
                    "description": "frenagem, queda livre, segurança no trânsito",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "equação do 2º grau"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "frenagem, queda livre, segurança no trânsito",
                    "competencies": [
                      "CN fenômenos mecânicos"
                    ],
                    "commonErrors": [
                      "sinal de aceleração errado"
                    ],
                    "connections": [
                      "matemática/função quadrática"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "NAT-FIS-CIN-movimento-circular",
                "name": "movimento circular",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-CIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "12,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-CIN-03",
                    "name": "período, frequência e velocidade angular",
                    "description": "rodas, satélites, engrenagens",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "círculo",
                      "proporção"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "rodas, satélites, engrenagens",
                    "competencies": [
                      "CN movimento/tecnologia"
                    ],
                    "commonErrors": [
                      "misturar rpm",
                      "Hz e rad/s"
                    ],
                    "connections": [
                      "trigonometria"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-DIN",
            "name": "Dinâmica",
            "description": "Dinâmica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "vetores simples"
            ],
            "priority": "Alto",
            "historicalFrequency": "10,7%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-DIN-leis-de-newton",
                "name": "leis de Newton",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-DIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "10,7%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-DIN-01",
                    "name": "identificar forças no diagrama",
                    "description": "elevadores, blocos, transporte",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "vetores simples"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "10,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "elevadores, blocos, transporte",
                    "competencies": [
                      "CN leis do movimento"
                    ],
                    "commonErrors": [
                      "somar forças escalares sem direção"
                    ],
                    "connections": [
                      "mecânica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "NAT-FIS-DIN-atrito",
                "name": "atrito",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-DIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "10,7%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-DIN-02",
                    "name": "diferenciar atrito estático e cinético",
                    "description": "pneus, rampas, segurança",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "força normal"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "10,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "pneus, rampas, segurança",
                    "competencies": [
                      "CN movimento/tecnologia"
                    ],
                    "commonErrors": [
                      "achar que atrito sempre atrapalha"
                    ],
                    "connections": [
                      "energia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "NAT-FIS-DIN-forca-centripeta",
                "name": "força centrípeta",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-DIN"
                ],
                "priority": "Alto",
                "historicalFrequency": "10,7%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-DIN-03",
                    "name": "relacionar curva, velocidade e raio",
                    "description": "curvas, pistas, satélites",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "movimento circular"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "10,7%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "curvas, pistas, satélites",
                    "competencies": [
                      "CN movimento"
                    ],
                    "commonErrors": [
                      "tratar centrípeta como força extra independente"
                    ],
                    "connections": [
                      "cinemática"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-ENE",
            "name": "Trabalho e energia",
            "description": "Trabalho e energia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "produto",
              "cosseno básico"
            ],
            "priority": "Crítico",
            "historicalFrequency": "8,2%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-ENE-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-ENE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "8,2%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-ENE-01",
                    "name": "trabalho de uma força",
                    "description": "máquinas, transporte, esforço",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "produto",
                      "cosseno básico"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "8,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "máquinas, transporte, esforço",
                    "competencies": [
                      "CN energia; SP"
                    ],
                    "commonErrors": [
                      "usar deslocamento errado"
                    ],
                    "connections": [
                      "dinâmica"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-ENE-02",
                    "name": "energia cinética, potencial e conservação",
                    "description": "montanhas-russas, quedas, sistemas mecânicos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "equações",
                      "unidades"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "montanhas-russas, quedas, sistemas mecânicos",
                    "competencies": [
                      "CN energia"
                    ],
                    "commonErrors": [
                      "esquecer dissipação"
                    ],
                    "connections": [
                      "termologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-ENE-03",
                    "name": "potência e rendimento",
                    "description": "eletrodomésticos, motores, consumo energético",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "razão",
                      "porcentagem"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "eletrodomésticos, motores, consumo energético",
                    "competencies": [
                      "CN tecnologia/energia"
                    ],
                    "commonErrors": [
                      "confundir energia com potência"
                    ],
                    "connections": [
                      "eletrodinâmica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-ELE",
            "name": "Eletrodinâmica",
            "description": "Eletrodinâmica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "razão"
            ],
            "priority": "Crítico",
            "historicalFrequency": "17,6%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-ELE-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-ELE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "17,6%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-ELE-01",
                    "name": "corrente, tensão e resistência",
                    "description": "circuitos residenciais e aparelhos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "razão"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "17,6%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "circuitos residenciais e aparelhos",
                    "competencies": [
                      "CN energia elétrica"
                    ],
                    "commonErrors": [
                      "trocar A",
                      "V e Ω"
                    ],
                    "connections": [
                      "matemática/proporção"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-ELE-02",
                    "name": "Leis de Ohm",
                    "description": "dimensionamento de resistores",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "equação do 1º grau"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "17,6%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "dimensionamento de resistores",
                    "competencies": [
                      "CN circuitos"
                    ],
                    "commonErrors": [
                      "decorar V=RI sem interpretar proporcionalidade"
                    ],
                    "connections": [
                      "funções"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-ELE-03",
                    "name": "associação de resistores",
                    "description": "circuitos em série/paralelo",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "frações"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "17,6%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 65,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "circuitos em série/paralelo",
                    "competencies": [
                      "CN circuitos"
                    ],
                    "commonErrors": [
                      "aplicar regra de série em paralelo"
                    ],
                    "connections": [
                      "aritmética"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-POT",
            "name": "Potência elétrica",
            "description": "Potência elétrica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "Leis de Ohm"
            ],
            "priority": "Crítico",
            "historicalFrequency": "8,2%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-POT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-POT"
                ],
                "priority": "Crítico",
                "historicalFrequency": "8,2%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-POT-01",
                    "name": "P=VI, P=RI² e P=V²/R",
                    "description": "chuveiro, lâmpada, aquecimento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Leis de Ohm"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "chuveiro, lâmpada, aquecimento",
                    "competencies": [
                      "CN energia elétrica"
                    ],
                    "commonErrors": [
                      "escolher fórmula sem dados compatíveis"
                    ],
                    "connections": [
                      "eletrodinâmica"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-POT-02",
                    "name": "kWh e custo mensal",
                    "description": "conta de luz, eficiência, economia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "regra de três"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "conta de luz, eficiência, economia",
                    "competencies": [
                      "CN tecnologia/sociedade"
                    ],
                    "commonErrors": [
                      "confundir kW com kWh"
                    ],
                    "connections": [
                      "porcentagem"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-OND",
            "name": "Ondulatória",
            "description": "Ondulatória",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "proporção"
            ],
            "priority": "Crítico",
            "historicalFrequency": "12,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-OND-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-OND"
                ],
                "priority": "Crítico",
                "historicalFrequency": "12,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-OND-01",
                    "name": "velocidade, frequência e comprimento de onda",
                    "description": "som, luz, telecomunicações",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "proporção"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "som, luz, telecomunicações",
                    "competencies": [
                      "CN ondas/sinais"
                    ],
                    "commonErrors": [
                      "confundir período com frequência"
                    ],
                    "connections": [
                      "trigonometria"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-OND-02",
                    "name": "reflexão, refração, difração e interferência",
                    "description": "fibra óptica, rádio, ondas na água",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "conceito de onda"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "fibra óptica, rádio, ondas na água",
                    "competencies": [
                      "CN tecnologias de comunicação"
                    ],
                    "commonErrors": [
                      "decorar sem reconhecer fenômeno no contexto"
                    ],
                    "connections": [
                      "óptica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-ACU",
            "name": "Acústica",
            "description": "Acústica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "frequência/amplitude"
            ],
            "priority": "Alto",
            "historicalFrequency": "6,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-ACU-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-ACU"
                ],
                "priority": "Alto",
                "historicalFrequency": "6,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-ACU-01",
                    "name": "altura, intensidade e timbre",
                    "description": "instrumentos, audição, poluição sonora",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "frequência/amplitude"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "6,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "instrumentos, audição, poluição sonora",
                    "competencies": [
                      "CN saúde/ondas"
                    ],
                    "commonErrors": [
                      "confundir altura com volume"
                    ],
                    "connections": [
                      "biologia/sistema auditivo"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-ACU-02",
                    "name": "efeito Doppler",
                    "description": "sirenes, radares, astronomia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "movimento relativo"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "6,0%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 35,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "sirenes, radares, astronomia",
                    "competencies": [
                      "CN ondas/movimento"
                    ],
                    "commonErrors": [
                      "inverter aproximação e afastamento"
                    ],
                    "connections": [
                      "cinemática"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-TER",
            "name": "Termologia",
            "description": "Termologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "unidades"
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,0%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-TER-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-TER"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-TER-01",
                    "name": "calor, temperatura e equilíbrio térmico",
                    "description": "sensação térmica, materiais e clima",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "unidades"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "sensação térmica, materiais e clima",
                    "competencies": [
                      "CN energia térmica"
                    ],
                    "commonErrors": [
                      "dizer que corpo \"tem calor\""
                    ],
                    "connections": [
                      "química",
                      "geografia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-TER-02",
                    "name": "calorimetria e mudanças de estado",
                    "description": "aquecimento de água, alimentos, indústria",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "equações",
                      "massa"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "aquecimento de água, alimentos, indústria",
                    "competencies": [
                      "CN energia/matéria"
                    ],
                    "commonErrors": [
                      "esquecer calor latente"
                    ],
                    "connections": [
                      "química"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-TER-03",
                    "name": "máquinas térmicas e rendimento",
                    "description": "motores, eficiência energética",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "porcentagem"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "motores, eficiência energética",
                    "competencies": [
                      "CN tecnologia/energia"
                    ],
                    "commonErrors": [
                      "achar rendimento maior que 100%"
                    ],
                    "connections": [
                      "sustentabilidade"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-FIS-OPT",
            "name": "Óptica geométrica",
            "description": "Óptica geométrica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "geometria"
            ],
            "priority": "Médio",
            "historicalFrequency": "5,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-FIS-OPT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-FIS-OPT"
                ],
                "priority": "Médio",
                "historicalFrequency": "5,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-FIS-OPT-01",
                    "name": "reflexão e espelhos",
                    "description": "retrovisores, espelhos, segurança",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "geometria"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "5,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "retrovisores, espelhos, segurança",
                    "competencies": [
                      "CN luz/visão"
                    ],
                    "commonErrors": [
                      "confundir imagem real e virtual"
                    ],
                    "connections": [
                      "geometria"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-FIS-OPT-02",
                    "name": "refração e lentes",
                    "description": "óculos, câmeras, fibra óptica",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ondas",
                      "ângulos"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "5,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "óculos, câmeras, fibra óptica",
                    "competencies": [
                      "CN tecnologia/saúde"
                    ],
                    "commonErrors": [
                      "ignorar mudança de meio"
                    ],
                    "connections": [
                      "biologia/visão"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "natureza-quimica",
        "name": "Química",
        "contents": [
          {
            "id": "NAT-QUI-ATO",
            "name": "Atomística",
            "description": "Atomística",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "aritmética"
            ],
            "priority": "Crítico",
            "historicalFrequency": "20,4%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-ATO-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-ATO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "20,4%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-ATO-01",
                    "name": "partículas subatômicas e número atômico/massa",
                    "description": "isótopos, radioatividade, identificação de elementos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "aritmética"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "20,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "isótopos, radioatividade, identificação de elementos",
                    "competencies": [
                      "CN matéria"
                    ],
                    "commonErrors": [
                      "confundir Z e A"
                    ],
                    "connections": [
                      "física nuclear"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-ATO-02",
                    "name": "famílias, períodos e propriedades periódicas",
                    "description": "propriedades e previsões de reatividade",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "atomística"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "20,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "propriedades e previsões de reatividade",
                    "competencies": [
                      "CN matéria/tecnologia"
                    ],
                    "commonErrors": [
                      "decorar sem entender tendência"
                    ],
                    "connections": [
                      "ligações"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-LIG",
            "name": "Ligações químicas",
            "description": "Ligações químicas",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "tabela periódica"
            ],
            "priority": "Crítico",
            "historicalFrequency": "20,4%",
            "difficulty": "Média",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-LIG-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-LIG"
                ],
                "priority": "Crítico",
                "historicalFrequency": "20,4%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-LIG-01",
                    "name": "iônica, covalente e metálica",
                    "description": "materiais, sais, metais, polímeros",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tabela periódica"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "20,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "materiais, sais, metais, polímeros",
                    "competencies": [
                      "CN propriedades da matéria"
                    ],
                    "commonErrors": [
                      "classificar ligação só pelo nome da substância"
                    ],
                    "connections": [
                      "orgânica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-INT",
            "name": "Forças intermoleculares",
            "description": "Forças intermoleculares",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "polaridade"
            ],
            "priority": "Alto",
            "historicalFrequency": "13,4%",
            "difficulty": "Alta",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-INT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-INT"
                ],
                "priority": "Alto",
                "historicalFrequency": "13,4%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-INT-01",
                    "name": "dipolo, hidrogênio e London",
                    "description": "ponto de ebulição, solubilidade, detergentes",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "polaridade"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "13,4%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "ponto de ebulição, solubilidade, detergentes",
                    "competencies": [
                      "CN propriedades físicas"
                    ],
                    "commonErrors": [
                      "confundir ligação química com força intermolecular"
                    ],
                    "connections": [
                      "biologia/membranas"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-INT-02",
                    "name": "geometria molecular e solubilidade",
                    "description": "mistura água/óleo, extração, cosméticos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ligações"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "13,4%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "mistura água/óleo, extração, cosméticos",
                    "competencies": [
                      "CN misturas"
                    ],
                    "commonErrors": [
                      "achar que toda molécula com ligação polar é polar"
                    ],
                    "connections": [
                      "soluções"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-SOL",
            "name": "Soluções",
            "description": "Soluções",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "regra de três",
              "mol"
            ],
            "priority": "Crítico",
            "historicalFrequency": "7,3%",
            "difficulty": "Média",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-SOL-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-SOL"
                ],
                "priority": "Crítico",
                "historicalFrequency": "7,3%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-SOL-01",
                    "name": "concentração comum, molaridade e ppm",
                    "description": "água, medicamentos, poluição",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "regra de três",
                      "mol"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "7,3%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "água, medicamentos, poluição",
                    "competencies": [
                      "CN matéria/ambiente"
                    ],
                    "commonErrors": [
                      "trocar g/L",
                      "mol/L e ppm"
                    ],
                    "connections": [
                      "biologia",
                      "geografia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-SOL-02",
                    "name": "conservar quantidade de soluto",
                    "description": "preparo de soluções, laboratório",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "concentração"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "7,3%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "preparo de soluções, laboratório",
                    "competencies": [
                      "CN práticas científicas"
                    ],
                    "commonErrors": [
                      "somar volumes sem considerar concentração"
                    ],
                    "connections": [
                      "estequiometria"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-EQP",
            "name": "Cinética",
            "description": "Cinética",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "reação química"
            ],
            "priority": "Crítico",
            "historicalFrequency": "15,2%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-EQP-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-EQP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "15,2%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-EQP-01",
                    "name": "fatores que alteram velocidade",
                    "description": "catalisador, temperatura, superfície",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "reação química"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "15,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "catalisador, temperatura, superfície",
                    "competencies": [
                      "CN transformações"
                    ],
                    "commonErrors": [
                      "achar que catalisador altera rendimento final"
                    ],
                    "connections": [
                      "biologia/enzimas"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-EQP-02",
                    "name": "Le Chatelier qualitativo",
                    "description": "processos industriais, hemoglobina, ambiente",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "reações reversíveis"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "15,2%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "processos industriais, hemoglobina, ambiente",
                    "competencies": [
                      "CN sistemas químicos"
                    ],
                    "commonErrors": [
                      "prever deslocamento no sentido errado"
                    ],
                    "connections": [
                      "biologia",
                      "física"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-PH",
            "name": "pH e pOH",
            "description": "pH e pOH",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "logaritmos básicos"
            ],
            "priority": "Crítico",
            "historicalFrequency": "15,2%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-PH-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-PH"
                ],
                "priority": "Crítico",
                "historicalFrequency": "15,2%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-PH-01",
                    "name": "acidez, basicidade e escala logarítmica",
                    "description": "chuva ácida, solo, sangue, limpeza",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "logaritmos básicos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "15,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "chuva ácida, solo, sangue, limpeza",
                    "competencies": [
                      "CN saúde/ambiente"
                    ],
                    "commonErrors": [
                      "tratar pH como escala linear"
                    ],
                    "connections": [
                      "matemática/log"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-ELE",
            "name": "Eletroquímica",
            "description": "Eletroquímica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "ligações"
            ],
            "priority": "Crítico",
            "historicalFrequency": "8,5%",
            "difficulty": "Alta",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-ELE-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-ELE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "8,5%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-ELE-01",
                    "name": "oxidação, redução e número de oxidação",
                    "description": "corrosão, pilhas, baterias",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ligações"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "corrosão, pilhas, baterias",
                    "competencies": [
                      "CN energia/matéria"
                    ],
                    "commonErrors": [
                      "inverter agente oxidante/redutor"
                    ],
                    "connections": [
                      "física/eletrodinâmica"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-ELE-02",
                    "name": "fluxo de elétrons e potencial",
                    "description": "celular, carro elétrico, descarte",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "redox"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "8,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "celular, carro elétrico, descarte",
                    "competencies": [
                      "CN tecnologia/ambiente"
                    ],
                    "commonErrors": [
                      "confundir polo positivo em pilha e eletrólise"
                    ],
                    "connections": [
                      "sustentabilidade"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-EST",
            "name": "Estequiometria",
            "description": "Estequiometria",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "conservação de massa"
            ],
            "priority": "Crítico",
            "historicalFrequency": "8,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-EST-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-EST"
                ],
                "priority": "Crítico",
                "historicalFrequency": "8,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-EST-01",
                    "name": "balanceamento de equações",
                    "description": "combustão, indústria, laboratório",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "conservação de massa"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "combustão, indústria, laboratório",
                    "competencies": [
                      "CN quantitativo"
                    ],
                    "commonErrors": [
                      "alterar índice da fórmula para balancear"
                    ],
                    "connections": [
                      "matemática/proporção"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-EST-02",
                    "name": "mol, massa molar e proporção reacional",
                    "description": "rendimento, pureza, reagente limitante",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "regra de três"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "8,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 65,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "rendimento, pureza, reagente limitante",
                    "competencies": [
                      "CN matéria/SP"
                    ],
                    "commonErrors": [
                      "usar massa como se fosse mol"
                    ],
                    "connections": [
                      "física/química ambiental"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-ORG",
            "name": "Orgânica",
            "description": "Orgânica",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "ligações covalentes"
            ],
            "priority": "Alto",
            "historicalFrequency": "14,8%",
            "difficulty": "Média",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-ORG-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-ORG"
                ],
                "priority": "Alto",
                "historicalFrequency": "14,8%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-ORG-01",
                    "name": "cadeias carbônicas e funções orgânicas",
                    "description": "combustíveis, alimentos, fármacos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ligações covalentes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "14,8%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "combustíveis, alimentos, fármacos",
                    "competencies": [
                      "CN compostos de carbono"
                    ],
                    "commonErrors": [
                      "decorar nomes sem identificar grupo funcional"
                    ],
                    "connections": [
                      "biologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-QUI-ORG-02",
                    "name": "isomeria constitucional e geométrica básica",
                    "description": "propriedades diferentes com mesma fórmula",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "funções orgânicas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "14,8%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "propriedades diferentes com mesma fórmula",
                    "competencies": [
                      "CN propriedades"
                    ],
                    "commonErrors": [
                      "confundir isômero com mesma estrutura desenhada diferente"
                    ],
                    "connections": [
                      "biologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-REA",
            "name": "Reações orgânicas",
            "description": "Reações orgânicas",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "funções orgânicas"
            ],
            "priority": "Médio",
            "historicalFrequency": "11,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-REA-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-REA"
                ],
                "priority": "Médio",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-REA-01",
                    "name": "esterificação e saponificação",
                    "description": "sabões, biodiesel, aromas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "funções orgânicas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "sabões, biodiesel, aromas",
                    "competencies": [
                      "CN tecnologia/química"
                    ],
                    "commonErrors": [
                      "decorar mecanismo avançado desnecessário"
                    ],
                    "connections": [
                      "meio ambiente"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-QUI-AMB",
            "name": "Química ambiental",
            "description": "Química ambiental",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "soluções",
              "orgânica"
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-QUI-AMB-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-QUI-AMB"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-QUI-AMB-01",
                    "name": "combustíveis, poluição e tratamento de água",
                    "description": "saneamento, emissões, energia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "soluções",
                      "orgânica"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "saneamento, emissões, energia",
                    "competencies": [
                      "CN ambiente/sociedade"
                    ],
                    "commonErrors": [
                      "ignorar trade-offs ambientais"
                    ],
                    "connections": [
                      "geografia",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "natureza-biologia",
        "name": "Biologia",
        "contents": [
          {
            "id": "NAT-BIO-ECO",
            "name": "Ecologia",
            "description": "Ecologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "leitura de diagramas"
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,0%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-ECO-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-ECO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,0%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-ECO-01",
                    "name": "cadeias e teias alimentares",
                    "description": "fluxo de energia e relações tróficas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura de diagramas"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "fluxo de energia e relações tróficas",
                    "competencies": [
                      "CN ambiente/ecologia"
                    ],
                    "commonErrors": [
                      "dizer que energia recicla"
                    ],
                    "connections": [
                      "química/ciclos"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-ECO-02",
                    "name": "ciclos do carbono, nitrogênio e água",
                    "description": "clima, agricultura, poluição",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "química ambiental"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "clima, agricultura, poluição",
                    "competencies": [
                      "CN ciclos naturais"
                    ],
                    "commonErrors": [
                      "confundir fluxo de energia com ciclo de matéria"
                    ],
                    "connections": [
                      "geografia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-ECO-03",
                    "name": "relações ecológicas",
                    "description": "parasitismo, mutualismo, competição",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ecossistemas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "parasitismo, mutualismo, competição",
                    "competencies": [
                      "CN interações"
                    ],
                    "commonErrors": [
                      "classificar só por exemplo memorizado"
                    ],
                    "connections": [
                      "sociologia/ambiente"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-AMB",
            "name": "Impactos ambientais",
            "description": "Impactos ambientais",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "ecologia",
              "química"
            ],
            "priority": "Crítico",
            "historicalFrequency": "19,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-AMB-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-AMB"
                ],
                "priority": "Crítico",
                "historicalFrequency": "19,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-AMB-01",
                    "name": "poluição, eutrofização e bioacumulação",
                    "description": "rios, agrotóxicos, saneamento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ecologia",
                      "química"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "19,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "rios, agrotóxicos, saneamento",
                    "competencies": [
                      "CN ambiente/sociedade"
                    ],
                    "commonErrors": [
                      "confundir eutrofização com simples sujeira"
                    ],
                    "connections": [
                      "química ambiental"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-AMB-02",
                    "name": "mudanças climáticas e biomas",
                    "description": "aquecimento global, conservação, desmatamento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ciclos biogeoquímicos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "19,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "aquecimento global, conservação, desmatamento",
                    "competencies": [
                      "CN ambiente"
                    ],
                    "commonErrors": [
                      "reduzir clima a temperatura local"
                    ],
                    "connections": [
                      "geografia",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-CIT",
            "name": "Citologia",
            "description": "Citologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "química/polaridade"
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-CIT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-CIT"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-CIT-01",
                    "name": "membrana plasmática e transportes",
                    "description": "osmose, soro, células em solução",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "química/polaridade"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "osmose, soro, células em solução",
                    "competencies": [
                      "CN célula"
                    ],
                    "commonErrors": [
                      "confundir difusão e osmose"
                    ],
                    "connections": [
                      "química/soluções"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-CIT-02",
                    "name": "organelas e funções celulares",
                    "description": "metabolismo e especialização celular",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "célula básica"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "metabolismo e especialização celular",
                    "competencies": [
                      "CN célula"
                    ],
                    "commonErrors": [
                      "decorar sem relacionar função"
                    ],
                    "connections": [
                      "fisiologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-CIT-03",
                    "name": "respiração celular e fotossíntese",
                    "description": "produtividade, energia, plantas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "energia",
                      "química"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "produtividade, energia, plantas",
                    "competencies": [
                      "CN energia nos seres vivos"
                    ],
                    "commonErrors": [
                      "achar que planta não respira"
                    ],
                    "connections": [
                      "ecologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-FIS",
            "name": "Fisiologia",
            "description": "Fisiologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "citologia"
            ],
            "priority": "Alto",
            "historicalFrequency": "11,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-FIS-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-FIS"
                ],
                "priority": "Alto",
                "historicalFrequency": "11,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-FIS-01",
                    "name": "sistemas digestório, respiratório e circulatório",
                    "description": "saúde, exercício, alimentação",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "citologia"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "saúde, exercício, alimentação",
                    "competencies": [
                      "CN corpo humano/saúde"
                    ],
                    "commonErrors": [
                      "estudar sistemas isolados sem integração"
                    ],
                    "connections": [
                      "química",
                      "física"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-FIS-02",
                    "name": "sistema nervoso e endócrino",
                    "description": "drogas, hormônios, homeostase",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "membrana celular"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "drogas, hormônios, homeostase",
                    "competencies": [
                      "CN saúde"
                    ],
                    "commonErrors": [
                      "confundir neurotransmissor e hormônio"
                    ],
                    "connections": [
                      "química orgânica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-IMO",
            "name": "Imunologia",
            "description": "Imunologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "fisiologia"
            ],
            "priority": "Crítico",
            "historicalFrequency": "11,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-IMO-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-IMO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "11,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-IMO-01",
                    "name": "vacina, soro e resposta imune",
                    "description": "campanhas, epidemias, saúde pública",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "fisiologia"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "11,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "campanhas, epidemias, saúde pública",
                    "competencies": [
                      "CN saúde/sociedade"
                    ],
                    "commonErrors": [
                      "achar que vacina cura doença instalada"
                    ],
                    "connections": [
                      "redação",
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-GEN",
            "name": "Genética",
            "description": "Genética",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "citologia"
            ],
            "priority": "Alto",
            "historicalFrequency": "11,2%",
            "difficulty": "Alta",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-GEN-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-GEN"
                ],
                "priority": "Alto",
                "historicalFrequency": "11,2%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-GEN-01",
                    "name": "DNA, RNA e síntese proteica",
                    "description": "mutações, biotecnologia, hereditariedade",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "citologia"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "11,2%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "mutações, biotecnologia, hereditariedade",
                    "competencies": [
                      "CN informação genética"
                    ],
                    "commonErrors": [
                      "trocar transcrição e tradução"
                    ],
                    "connections": [
                      "química/orgânica"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-GEN-02",
                    "name": "Mendelismo e heredogramas",
                    "description": "doenças hereditárias, cruzamentos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "probabilidade"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "11,2%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "doenças hereditárias, cruzamentos",
                    "competencies": [
                      "CN hereditariedade"
                    ],
                    "commonErrors": [
                      "ignorar dominância/recessividade no enunciado"
                    ],
                    "connections": [
                      "matemática/probabilidade"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "NAT-BIO-BIO",
            "name": "Biotecnologia",
            "description": "Biotecnologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "DNA/proteínas"
            ],
            "priority": "Alto",
            "historicalFrequency": "8,1%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "NAT-BIO-BIO-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "NAT-BIO-BIO"
                ],
                "priority": "Alto",
                "historicalFrequency": "8,1%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "NAT-BIO-BIO-01",
                    "name": "transgênicos e DNA recombinante",
                    "description": "alimentos, agricultura, indústria",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "DNA/proteínas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "8,1%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "alimentos, agricultura, indústria",
                    "competencies": [
                      "CN tecnologia/vida"
                    ],
                    "commonErrors": [
                      "tratar transgênico como sinônimo de clone"
                    ],
                    "connections": [
                      "química",
                      "geografia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "NAT-BIO-BIO-02",
                    "name": "PCR, clonagem e testes genéticos",
                    "description": "diagnóstico, forense, epidemias",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "DNA"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "8,1%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "diagnóstico, forense, epidemias",
                    "competencies": [
                      "CN tecnologia/saúde"
                    ],
                    "commonErrors": [
                      "decorar siglas sem função"
                    ],
                    "connections": [
                      "estatística"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "linguagens",
    "name": "Linguagens, Códigos e suas Tecnologias",
    "description": "Roadmap granular de leitura, língua portuguesa, literatura, artes, educação física e língua estrangeira.",
    "disciplines": [
      {
        "id": "linguagens-portugues",
        "name": "Português",
        "contents": [
          {
            "id": "LIN-POR-INT",
            "name": "Interpretação textual",
            "description": "Interpretação textual",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "leitura ativa"
            ],
            "priority": "Crítico",
            "historicalFrequency": "33,3%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-POR-INT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-POR-INT"
                ],
                "priority": "Crítico",
                "historicalFrequency": "33,3%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-POR-INT-01",
                    "name": "tese, tema e finalidade",
                    "description": "textos jornalísticos, campanhas, crônicas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura ativa"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "33,3%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "textos jornalísticos, campanhas, crônicas",
                    "competencies": [
                      "L C1/C7; H1-H4/H21-H24"
                    ],
                    "commonErrors": [
                      "responder por opinião própria"
                    ],
                    "connections": [
                      "redação",
                      "humanas"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-POR-INT-02",
                    "name": "inferência e implícitos",
                    "description": "ironia, pressupostos, subentendidos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tese/finalidade"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "33,3%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "ironia, pressupostos, subentendidos",
                    "competencies": [
                      "L C1/C7"
                    ],
                    "commonErrors": [
                      "extrapolar além do texto"
                    ],
                    "connections": [
                      "filosofia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-POR-INT-03",
                    "name": "efeitos de sentido",
                    "description": "escolhas lexicais, pontuação, humor",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "recursos linguísticos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "33,3%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "escolhas lexicais, pontuação, humor",
                    "competencies": [
                      "L C1"
                    ],
                    "commonErrors": [
                      "procurar gramática isolada sem sentido global"
                    ],
                    "connections": [
                      "literatura"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-POR-VAR",
            "name": "Variação linguística",
            "description": "Variação linguística",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "noção de norma"
            ],
            "priority": "Alto",
            "historicalFrequency": "12,0%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-POR-VAR-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-POR-VAR"
                ],
                "priority": "Alto",
                "historicalFrequency": "12,0%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-POR-VAR-01",
                    "name": "social, regional e histórica",
                    "description": "tirinhas, falas populares, textos literários",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "noção de norma"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "tirinhas, falas populares, textos literários",
                    "competencies": [
                      "L C8; H25-H27"
                    ],
                    "commonErrors": [
                      "tratar variação como erro"
                    ],
                    "connections": [
                      "sociologia",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-POR-VAR-02",
                    "name": "adequação ao contexto",
                    "description": "e-mails, anúncios, entrevistas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "registro formal/informal"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "e-mails, anúncios, entrevistas",
                    "competencies": [
                      "L C8"
                    ],
                    "commonErrors": [
                      "achar que norma padrão é sempre melhor"
                    ],
                    "connections": [
                      "redação C1"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-POR-FUN",
            "name": "Funções da linguagem",
            "description": "Funções da linguagem",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "finalidade textual"
            ],
            "priority": "Alto",
            "historicalFrequency": "13,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-POR-FUN-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-POR-FUN"
                ],
                "priority": "Alto",
                "historicalFrequency": "13,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-POR-FUN-01",
                    "name": "referencial, emotiva, conativa, fática, metalinguística e poética",
                    "description": "propaganda, poema, verbete, conversa",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "finalidade textual"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "13,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "propaganda, poema, verbete, conversa",
                    "competencies": [
                      "L C1"
                    ],
                    "commonErrors": [
                      "memorizar nomes sem identificar intenção"
                    ],
                    "connections": [
                      "artes",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-POR-TIP",
            "name": "Tipologia textual",
            "description": "Tipologia textual",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "gêneros textuais"
            ],
            "priority": "Crítico",
            "historicalFrequency": "19,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-POR-TIP-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-POR-TIP"
                ],
                "priority": "Crítico",
                "historicalFrequency": "19,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-POR-TIP-01",
                    "name": "narração, descrição, injunção, exposição e argumentação",
                    "description": "receitas, editoriais, reportagens, manuais",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "gêneros textuais"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "19,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "receitas, editoriais, reportagens, manuais",
                    "competencies": [
                      "L C7"
                    ],
                    "commonErrors": [
                      "confundir gênero com tipo textual"
                    ],
                    "connections": [
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-POR-TIP-02",
                    "name": "suporte, público e circulação",
                    "description": "meme, artigo, campanha, charge",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "finalidade textual"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "19,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "meme, artigo, campanha, charge",
                    "competencies": [
                      "L C1/C7"
                    ],
                    "commonErrors": [
                      "ignorar suporte e interlocutor"
                    ],
                    "connections": [
                      "tecnologias digitais"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-POR-COE",
            "name": "Coesão e coerência",
            "description": "Coesão e coerência",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "períodos simples"
            ],
            "priority": "Crítico",
            "historicalFrequency": "14,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-POR-COE-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-POR-COE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "14,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-POR-COE-01",
                    "name": "conectivos e relações lógicas",
                    "description": "causa, contraste, conclusão, explicação",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "períodos simples"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "14,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "causa, contraste, conclusão, explicação",
                    "competencies": [
                      "L C1; Red C4"
                    ],
                    "commonErrors": [
                      "decorar conectivo sem sentido lógico"
                    ],
                    "connections": [
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-POR-COE-02",
                    "name": "concordância e referência pronominal",
                    "description": "ambiguidades e retomadas textuais",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "classes de palavras"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "14,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "ambiguidades e retomadas textuais",
                    "competencies": [
                      "L C1; Red C1/C4"
                    ],
                    "commonErrors": [
                      "analisar frase fora do contexto"
                    ],
                    "connections": [
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "linguagens-literatura-artes-e-educacao-fisica",
        "name": "Literatura, Artes e Educação Física",
        "contents": [
          {
            "id": "LIN-LIT-MOD",
            "name": "Modernismo brasileiro",
            "description": "Modernismo brasileiro",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "contexto histórico"
            ],
            "priority": "Alto",
            "historicalFrequency": "28,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-LIT-MOD-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-LIT-MOD"
                ],
                "priority": "Alto",
                "historicalFrequency": "28,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-LIT-MOD-01",
                    "name": "Semana de 22 e ruptura estética",
                    "description": "poemas, manifestos, obras visuais",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "contexto histórico"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "28,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "poemas, manifestos, obras visuais",
                    "competencies": [
                      "L C5; H15-H17"
                    ],
                    "commonErrors": [
                      "decorar autores sem ler marcas do texto"
                    ],
                    "connections": [
                      "história do Brasil"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-LIT-MOD-02",
                    "name": "fases, autores e temas sociais",
                    "description": "identidade nacional, regionalismo, crítica social",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "modernismo inicial"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "28,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "identidade nacional, regionalismo, crítica social",
                    "competencies": [
                      "L C5"
                    ],
                    "commonErrors": [
                      "associar obra a escola só por data"
                    ],
                    "connections": [
                      "redação/repertório"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-LIT-VAN",
            "name": "Vanguardas europeias",
            "description": "Vanguardas europeias",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "arte moderna"
            ],
            "priority": "Médio",
            "historicalFrequency": "28,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-LIT-VAN-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-LIT-VAN"
                ],
                "priority": "Médio",
                "historicalFrequency": "28,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-LIT-VAN-01",
                    "name": "futurismo, cubismo, dadaísmo e surrealismo",
                    "description": "relações texto-imagem e inovação",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "arte moderna"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "28,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "relações texto-imagem e inovação",
                    "competencies": [
                      "L C5"
                    ],
                    "commonErrors": [
                      "listar vanguardas sem reconhecer efeito"
                    ],
                    "connections": [
                      "artes"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-ART-CONT",
            "name": "Arte contemporânea",
            "description": "Arte contemporânea",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "leitura de imagem"
            ],
            "priority": "Alto",
            "historicalFrequency": "60,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-ART-CONT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-ART-CONT"
                ],
                "priority": "Alto",
                "historicalFrequency": "60,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-ART-CONT-01",
                    "name": "instalação, performance e intervenção urbana",
                    "description": "obras com crítica social e política",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura de imagem"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "60,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "obras com crítica social e política",
                    "competencies": [
                      "L C4; H12-H14"
                    ],
                    "commonErrors": [
                      "procurar beleza clássica como critério"
                    ],
                    "connections": [
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-ART-PAT",
            "name": "Patrimônio cultural",
            "description": "Patrimônio cultural",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cultura"
            ],
            "priority": "Alto",
            "historicalFrequency": "60,0%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-ART-PAT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-ART-PAT"
                ],
                "priority": "Alto",
                "historicalFrequency": "60,0%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-ART-PAT-01",
                    "name": "material, imaterial e memória",
                    "description": "festas, museus, tradições, tombamento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cultura"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "60,0%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "festas, museus, tradições, tombamento",
                    "competencies": [
                      "L C4/C5"
                    ],
                    "commonErrors": [
                      "confundir patrimônio com monumento antigo apenas"
                    ],
                    "connections": [
                      "história",
                      "geografia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-EDF-COR",
            "name": "Cultura corporal",
            "description": "Cultura corporal",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "leitura de texto"
            ],
            "priority": "Médio",
            "historicalFrequency": "29,0%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 35,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-EDF-COR-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-EDF-COR"
                ],
                "priority": "Médio",
                "historicalFrequency": "29,0%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-EDF-COR-01",
                    "name": "esporte, saúde e lazer",
                    "description": "inclusão, lazer, práticas corporais",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura de texto"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "29,0%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 35,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "inclusão, lazer, práticas corporais",
                    "competencies": [
                      "L C3"
                    ],
                    "commonErrors": [
                      "responder com senso comum moralizante"
                    ],
                    "connections": [
                      "biologia/saúde"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-EDF-MID",
            "name": "Corpo e mídia",
            "description": "Corpo e mídia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cultura corporal"
            ],
            "priority": "Médio",
            "historicalFrequency": "29,0%",
            "difficulty": "Média",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-EDF-MID-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-EDF-MID"
                ],
                "priority": "Médio",
                "historicalFrequency": "29,0%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-EDF-MID-01",
                    "name": "padrões corporais, espetáculo e consumo",
                    "description": "publicidade, redes sociais, esporte espetáculo",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cultura corporal"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "29,0%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "publicidade, redes sociais, esporte espetáculo",
                    "competencies": [
                      "L C3"
                    ],
                    "commonErrors": [
                      "ignorar crítica social do texto"
                    ],
                    "connections": [
                      "sociologia",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "linguagens-lingua-estrangeira",
        "name": "Língua Estrangeira",
        "contents": [
          {
            "id": "LIN-ING-LEI",
            "name": "Inglês",
            "description": "Inglês",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cognatos"
            ],
            "priority": "Alto",
            "historicalFrequency": "51,3%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-ING-LEI-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-ING-LEI"
                ],
                "priority": "Alto",
                "historicalFrequency": "51,3%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-ING-LEI-01",
                    "name": "leitura instrumental e skimming",
                    "description": "identificar tema e objetivo do texto",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cognatos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "51,3%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "identificar tema e objetivo do texto",
                    "competencies": [
                      "L C2; H5-H8"
                    ],
                    "commonErrors": [
                      "traduzir palavra por palavra"
                    ],
                    "connections": [
                      "português/leitura"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-ING-LEI-02",
                    "name": "scanning e localização de informação",
                    "description": "localizar dado específico em anúncio, música, notícia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura instrumental"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "51,3%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 35,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "localizar dado específico em anúncio, música, notícia",
                    "competencies": [
                      "L C2"
                    ],
                    "commonErrors": [
                      "ignorar palavras-chave do comando"
                    ],
                    "connections": [
                      "gráficos/textos digitais"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-ING-VOC-01",
                    "name": "vocabulário em contexto e falsos cognatos",
                    "description": "inferir sentido por contexto",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura básica"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "51,3%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "inferir sentido por contexto",
                    "competencies": [
                      "L C2"
                    ],
                    "commonErrors": [
                      "confiar em falso cognato"
                    ],
                    "connections": [
                      "redação/repertório"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "LIN-ESP-LEI",
            "name": "Espanhol",
            "description": "Espanhol",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cognatos"
            ],
            "priority": "Alto",
            "historicalFrequency": "52,2%",
            "difficulty": "Baixa",
            "studyTimeMinutes": 40,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "LIN-ESP-LEI-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "LIN-ESP-LEI"
                ],
                "priority": "Alto",
                "historicalFrequency": "52,2%",
                "difficulty": "Baixa",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "LIN-ESP-LEI-01",
                    "name": "compreensão textual e heterossemânticos",
                    "description": "textos curtos, notícias, campanhas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cognatos"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "52,2%",
                    "difficulty": "Baixa",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "textos curtos, notícias, campanhas",
                    "competencies": [
                      "L C2"
                    ],
                    "commonErrors": [
                      "traduzir pelo português sem contexto"
                    ],
                    "connections": [
                      "português"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "LIN-ESP-COE-01",
                    "name": "marcadores de coesão e referência",
                    "description": "relações de causa, oposição e conclusão",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "52,2%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 40,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "relações de causa, oposição e conclusão",
                    "competencies": [
                      "L C2"
                    ],
                    "commonErrors": [
                      "ignorar conectivo central"
                    ],
                    "connections": [
                      "redação/coerência"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "humanas",
    "name": "Ciências Humanas e suas Tecnologias",
    "description": "Roadmap granular de História, Geografia, Filosofia e Sociologia para leitura crítica e repertório.",
    "disciplines": [
      {
        "id": "humanas-historia",
        "name": "História",
        "contents": [
          {
            "id": "HUM-HIS-BRA",
            "name": "Brasil República",
            "description": "Brasil República",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "República Velha"
            ],
            "priority": "Alto",
            "historicalFrequency": "23,4%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-HIS-BRA-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-HIS-BRA"
                ],
                "priority": "Alto",
                "historicalFrequency": "23,4%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-HIS-BRA-01",
                    "name": "Era Vargas e trabalhismo",
                    "description": "direitos trabalhistas, Estado e propaganda",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "República Velha"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "23,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "direitos trabalhistas, Estado e propaganda",
                    "competencies": [
                      "H C3/C4"
                    ],
                    "commonErrors": [
                      "decorar datas sem entender projeto político"
                    ],
                    "connections": [
                      "sociologia/trabalho"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-HIS-BRA-02",
                    "name": "populismo e democracia de 1946",
                    "description": "participação política e desenvolvimento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Era Vargas"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "23,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "participação política e desenvolvimento",
                    "competencies": [
                      "H C3"
                    ],
                    "commonErrors": [
                      "reduzir populismo a carisma"
                    ],
                    "connections": [
                      "geografia/economia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-HIS-BRA-03",
                    "name": "regime militar e redemocratização",
                    "description": "censura, direitos, movimentos sociais",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Guerra Fria"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "23,4%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "censura, direitos, movimentos sociais",
                    "competencies": [
                      "H C3/C5"
                    ],
                    "commonErrors": [
                      "tratar ditadura como evento isolado"
                    ],
                    "connections": [
                      "redação/democracia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-HIS-COL",
            "name": "Brasil Colonial",
            "description": "Brasil Colonial",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "colonização"
            ],
            "priority": "Alto",
            "historicalFrequency": "12,7%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-HIS-COL-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-HIS-COL"
                ],
                "priority": "Alto",
                "historicalFrequency": "12,7%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-HIS-COL-01",
                    "name": "economia açucareira, mineração e ciclos",
                    "description": "trabalho, território, exploração",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "colonização"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "trabalho, território, exploração",
                    "competencies": [
                      "H C3"
                    ],
                    "commonErrors": [
                      "estudar ciclos sem relações sociais"
                    ],
                    "connections": [
                      "geografia agrária"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-HIS-COL-02",
                    "name": "escravidão e resistências",
                    "description": "quilombos, cultura afro-brasileira, cidadania",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "economia colonial"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "12,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "quilombos, cultura afro-brasileira, cidadania",
                    "competencies": [
                      "H C1/C3"
                    ],
                    "commonErrors": [
                      "invisibilizar agência dos escravizados"
                    ],
                    "connections": [
                      "sociologia",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-HIS-GER",
            "name": "Idade Contemporânea",
            "description": "Idade Contemporânea",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "absolutismo/iluminismo"
            ],
            "priority": "Alto",
            "historicalFrequency": "17,7%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-HIS-GER-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-HIS-GER"
                ],
                "priority": "Alto",
                "historicalFrequency": "17,7%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-HIS-GER-01",
                    "name": "Revoluções Industrial e Francesa",
                    "description": "cidadania, trabalho, capitalismo",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "absolutismo/iluminismo"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "17,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "cidadania, trabalho, capitalismo",
                    "competencies": [
                      "H C3/C4"
                    ],
                    "commonErrors": [
                      "memorizar sequência sem causas/consequências"
                    ],
                    "connections": [
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-HIS-GER-02",
                    "name": "imperialismo, guerras e Guerra Fria",
                    "description": "conflitos, geopolítica, tecnologia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "industrialização"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "17,7%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "conflitos, geopolítica, tecnologia",
                    "competencies": [
                      "H C2/C3"
                    ],
                    "commonErrors": [
                      "confundir imperialismo antigo e neocolonialismo"
                    ],
                    "connections": [
                      "geografia/geopolítica"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "humanas-geografia",
        "name": "Geografia",
        "contents": [
          {
            "id": "HUM-GEO-AMB",
            "name": "Ambiental",
            "description": "Ambiental",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cartografia básica"
            ],
            "priority": "Alto",
            "historicalFrequency": "15,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-GEO-AMB-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-GEO-AMB"
                ],
                "priority": "Alto",
                "historicalFrequency": "15,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-GEO-AMB-01",
                    "name": "clima, biomas e domínios morfoclimáticos",
                    "description": "mapas, impactos e ocupação do território",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cartografia básica"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "15,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "mapas, impactos e ocupação do território",
                    "competencies": [
                      "H C6"
                    ],
                    "commonErrors": [
                      "confundir clima com tempo"
                    ],
                    "connections": [
                      "biologia/ecologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-GEO-AMB-02",
                    "name": "problemas ambientais globais",
                    "description": "aquecimento, desertificação, recursos hídricos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "clima/biomas"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "15,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "aquecimento, desertificação, recursos hídricos",
                    "competencies": [
                      "H C6"
                    ],
                    "commonErrors": [
                      "resposta moralizante sem processo físico-social"
                    ],
                    "connections": [
                      "redação",
                      "química"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-GEO-URB",
            "name": "Humana",
            "description": "Humana",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "industrialização"
            ],
            "priority": "Alto",
            "historicalFrequency": "20,8%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-GEO-URB-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-GEO-URB"
                ],
                "priority": "Alto",
                "historicalFrequency": "20,8%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-GEO-URB-01",
                    "name": "urbanização e rede urbana",
                    "description": "metropolização, mobilidade, moradia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "industrialização"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "20,8%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "metropolização, mobilidade, moradia",
                    "competencies": [
                      "H C2"
                    ],
                    "commonErrors": [
                      "confundir crescimento urbano com desenvolvimento"
                    ],
                    "connections": [
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-GEO-URB-02",
                    "name": "industrialização e infraestrutura",
                    "description": "transporte, energia, produção, desigualdade",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Revolução Industrial"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "20,8%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "transporte, energia, produção, desigualdade",
                    "competencies": [
                      "H C2/C4"
                    ],
                    "commonErrors": [
                      "estudar indústria sem espaço geográfico"
                    ],
                    "connections": [
                      "física/energia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-GEO-AGR",
            "name": "Agrária",
            "description": "Agrária",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "Brasil colonial"
            ],
            "priority": "Alto",
            "historicalFrequency": "18,1%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-GEO-AGR-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-GEO-AGR"
                ],
                "priority": "Alto",
                "historicalFrequency": "18,1%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-GEO-AGR-01",
                    "name": "estrutura fundiária e concentração de terras",
                    "description": "conflitos no campo e reforma agrária",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Brasil colonial"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "18,1%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "conflitos no campo e reforma agrária",
                    "competencies": [
                      "H C2/C3"
                    ],
                    "commonErrors": [
                      "tratar campo como atraso homogêneo"
                    ],
                    "connections": [
                      "história",
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-GEO-AGR-02",
                    "name": "agronegócio, agricultura familiar e impactos",
                    "description": "produção, exportação, tecnologia e ambiente",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "economia agrária"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "18,1%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "produção, exportação, tecnologia e ambiente",
                    "competencies": [
                      "H C2/C6"
                    ],
                    "commonErrors": [
                      "ignorar diferença entre produtividade e distribuição"
                    ],
                    "connections": [
                      "biologia/ecologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "humanas-filosofia-e-sociologia",
        "name": "Filosofia e Sociologia",
        "contents": [
          {
            "id": "HUM-FIL-ETI",
            "name": "Filosofia",
            "description": "Filosofia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "leitura argumentativa"
            ],
            "priority": "Alto",
            "historicalFrequency": "37,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-FIL-ETI-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-FIL-ETI"
                ],
                "priority": "Alto",
                "historicalFrequency": "37,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-FIL-ETI-01",
                    "name": "ética e justiça",
                    "description": "dilemas, direitos, valores",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "leitura argumentativa"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "37,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "dilemas, direitos, valores",
                    "competencies": [
                      "H C1/C5"
                    ],
                    "commonErrors": [
                      "responder com opinião pessoal sem autor/texto"
                    ],
                    "connections": [
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-FIL-POL",
            "name": "Filosofia política",
            "description": "Filosofia política",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "ética"
            ],
            "priority": "Alto",
            "historicalFrequency": "37,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-FIL-POL-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-FIL-POL"
                ],
                "priority": "Alto",
                "historicalFrequency": "37,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-FIL-POL-01",
                    "name": "Estado, democracia e cidadania",
                    "description": "contrato social, poder, participação",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "ética"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "37,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "contrato social, poder, participação",
                    "competencies": [
                      "H C3/C5"
                    ],
                    "commonErrors": [
                      "confundir Estado",
                      "governo e nação"
                    ],
                    "connections": [
                      "história"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-FIL-ANT",
            "name": "Filosofia antiga",
            "description": "Filosofia antiga",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "Grécia antiga"
            ],
            "priority": "Médio",
            "historicalFrequency": "37,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 10,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-FIL-ANT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-FIL-ANT"
                ],
                "priority": "Médio",
                "historicalFrequency": "37,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-FIL-ANT-01",
                    "name": "razão, pólis e virtude",
                    "description": "textos de Platão/Aristóteles e cidadania",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Grécia antiga"
                    ],
                    "priority": "Médio",
                    "historicalFrequency": "37,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 10,
                    "enemAppearance": "textos de Platão/Aristóteles e cidadania",
                    "competencies": [
                      "H C1"
                    ],
                    "commonErrors": [
                      "decorar autor sem interpretar trecho"
                    ],
                    "connections": [
                      "literatura"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-SOC-TRA",
            "name": "Sociologia",
            "description": "Sociologia",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "Revolução Industrial"
            ],
            "priority": "Alto",
            "historicalFrequency": "50,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 55,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-SOC-TRA-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-SOC-TRA"
                ],
                "priority": "Alto",
                "historicalFrequency": "50,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-SOC-TRA-01",
                    "name": "mundo do trabalho e capitalismo",
                    "description": "fordismo, toyotismo, precarização",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "Revolução Industrial"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "50,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "fordismo, toyotismo, precarização",
                    "competencies": [
                      "H C4"
                    ],
                    "commonErrors": [
                      "trocar conceitos de Marx",
                      "Durkheim e Weber"
                    ],
                    "connections": [
                      "geografia/indústria"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "HUM-SOC-CON",
            "name": "Sociologia contemporânea",
            "description": "Sociologia contemporânea",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "cultura"
            ],
            "priority": "Alto",
            "historicalFrequency": "50,5%",
            "difficulty": "Média",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 12,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "HUM-SOC-CON-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "HUM-SOC-CON"
                ],
                "priority": "Alto",
                "historicalFrequency": "50,5%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "HUM-SOC-CON-01",
                    "name": "cultura, mídia e identidade",
                    "description": "redes sociais, consumo, identidade",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cultura"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "50,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 12,
                    "enemAppearance": "redes sociais, consumo, identidade",
                    "competencies": [
                      "H C1/C5"
                    ],
                    "commonErrors": [
                      "generalizar sem base no texto"
                    ],
                    "connections": [
                      "linguagens",
                      "redação"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "HUM-SOC-MOV-01",
                    "name": "movimentos sociais e direitos",
                    "description": "lutas sociais, inclusão, políticas públicas",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cidadania"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "50,5%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 55,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "lutas sociais, inclusão, políticas públicas",
                    "competencies": [
                      "H C3/C5"
                    ],
                    "commonErrors": [
                      "reduzir movimento social a protesto pontual"
                    ],
                    "connections": [
                      "redação/intervenção"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "redacao",
    "name": "Redação",
    "description": "Roadmap granular para texto dissertativo-argumentativo, competências da redação e prática orientada.",
    "disciplines": [
      {
        "id": "redacao-redacao-enem",
        "name": "Redação ENEM",
        "contents": [
          {
            "id": "RED-C1-NOR",
            "name": "Competência 1",
            "description": "Competência 1",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "gramática aplicada"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Média",
            "studyTimeMinutes": 60,
            "reviewTimeMinutes": 20,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-C1-NOR-norma-formal",
                "name": "norma formal",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C1-NOR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C1-NOR-01",
                    "name": "concordância, regência e pontuação",
                    "description": "todo texto é avaliado de 0 a 200 nesta competência",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "gramática aplicada"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "todo texto é avaliado de 0 a 200 nesta competência",
                    "competencies": [
                      "Red C1"
                    ],
                    "commonErrors": [
                      "revisar só ortografia e ignorar sintaxe"
                    ],
                    "connections": [
                      "português/coesão"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "RED-C1-NOR-repertorio-gramatical",
                "name": "repertório gramatical",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C1-NOR"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C1-NOR-02",
                    "name": "períodos bem construídos",
                    "description": "maturidade linguística na construção dos parágrafos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "concordância"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "maturidade linguística na construção dos parágrafos",
                    "competencies": [
                      "Red C1"
                    ],
                    "commonErrors": [
                      "frases longas sem controle sintático"
                    ],
                    "connections": [
                      "linguagens"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "RED-C2-TEM",
            "name": "Competência 2",
            "description": "Competência 2",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "interpretação textual"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Alta",
            "studyTimeMinutes": 50,
            "reviewTimeMinutes": 20,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-C2-TEM-compreensao-do-tema",
                "name": "compreensão do tema",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C2-TEM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C2-TEM-01",
                    "name": "recorte temático",
                    "description": "evitar fuga ou tangenciamento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "interpretação textual"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "evitar fuga ou tangenciamento",
                    "competencies": [
                      "Red C2"
                    ],
                    "commonErrors": [
                      "escrever sobre assunto próximo",
                      "mas não o tema"
                    ],
                    "connections": [
                      "linguagens"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "RED-C2-TEM-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C2-TEM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C2-REP-01",
                    "name": "repertório sociocultural produtivo",
                    "description": "usar conhecimento externo legitimado e conectado ao argumento",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "humanas/linguagens"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "usar conhecimento externo legitimado e conectado ao argumento",
                    "competencies": [
                      "Red C2"
                    ],
                    "commonErrors": [
                      "citar autor sem explicar relação com o tema"
                    ],
                    "connections": [
                      "humanas",
                      "literatura"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "RED-C2-EST-01",
                    "name": "estrutura dissertativo-argumentativa",
                    "description": "introdução, desenvolvimento e conclusão",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tese",
                      "argumentação"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "introdução, desenvolvimento e conclusão",
                    "competencies": [
                      "Red C2"
                    ],
                    "commonErrors": [
                      "narrar ou expor sem defender ponto de vista"
                    ],
                    "connections": [
                      "português/tipologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "RED-C3-PRO",
            "name": "Competência 3",
            "description": "Competência 3",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "tema",
              "repertório"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Alta",
            "studyTimeMinutes": 70,
            "reviewTimeMinutes": 20,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-C3-PRO-projeto-de-texto",
                "name": "projeto de texto",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C3-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C3-PRO-01",
                    "name": "tese e linha argumentativa",
                    "description": "coerência global e progressão argumentativa",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "tema",
                      "repertório"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 70,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "coerência global e progressão argumentativa",
                    "competencies": [
                      "Red C3"
                    ],
                    "commonErrors": [
                      "tese vaga que não guia os argumentos"
                    ],
                    "connections": [
                      "filosofia/sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "RED-C3-PRO-selecao-de-argumentos",
                "name": "seleção de argumentos",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C3-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C3-ARG-01",
                    "name": "causa, consequência e exemplo",
                    "description": "dois desenvolvimentos com argumentos diferentes e articulados",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "projeto de texto"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 60,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "dois desenvolvimentos com argumentos diferentes e articulados",
                    "competencies": [
                      "Red C3"
                    ],
                    "commonErrors": [
                      "listar exemplos sem análise"
                    ],
                    "connections": [
                      "humanas",
                      "natureza"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              },
              {
                "id": "RED-C3-PRO-analise-critica",
                "name": "análise crítica",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C3-PRO"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C3-ANA-01",
                    "name": "explicar por que o argumento prova a tese",
                    "description": "diferencia redação mediana de redação forte",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "seleção de argumentos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 65,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "diferencia redação mediana de redação forte",
                    "competencies": [
                      "Red C3"
                    ],
                    "commonErrors": [
                      "repertório decorado sem autoria"
                    ],
                    "connections": [
                      "filosofia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "RED-C4-COE",
            "name": "Competência 4",
            "description": "Competência 4",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "conectivos"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Média",
            "studyTimeMinutes": 45,
            "reviewTimeMinutes": 15,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-C4-COE-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C4-COE"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C4-COE-01",
                    "name": "coesão interparagráfica",
                    "description": "liga introdução, desenvolvimentos e conclusão",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "conectivos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "liga introdução, desenvolvimentos e conclusão",
                    "competencies": [
                      "Red C4"
                    ],
                    "commonErrors": [
                      "começar parágrafos sem relação lógica"
                    ],
                    "connections": [
                      "português/coesão"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "RED-C4-COE-02",
                    "name": "coesão intraparagráfica",
                    "description": "progressão dentro do parágrafo",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "períodos",
                      "pronomes"
                    ],
                    "priority": "Alto",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "progressão dentro do parágrafo",
                    "competencies": [
                      "Red C4"
                    ],
                    "commonErrors": [
                      "repetir termos ou usar conectivo incompatível"
                    ],
                    "connections": [
                      "linguagens"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "RED-C5-INT",
            "name": "Competência 5",
            "description": "Competência 5",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "problema e argumentos"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Média",
            "studyTimeMinutes": 70,
            "reviewTimeMinutes": 20,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-C5-INT-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-C5-INT"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Média",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-C5-INT-01",
                    "name": "agente, ação, meio, finalidade e detalhamento",
                    "description": "proposta de intervenção completa",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "problema e argumentos"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 70,
                    "reviewTimeMinutes": 20,
                    "enemAppearance": "proposta de intervenção completa",
                    "competencies": [
                      "Red C5"
                    ],
                    "commonErrors": [
                      "faltar detalhamento ou finalidade"
                    ],
                    "connections": [
                      "sociologia/políticas públicas"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "RED-C5-DH-01",
                    "name": "direitos humanos e viabilidade",
                    "description": "proposta precisa respeitar direitos humanos",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "cidadania"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 45,
                    "reviewTimeMinutes": 15,
                    "enemAppearance": "proposta precisa respeitar direitos humanos",
                    "competencies": [
                      "Red C5"
                    ],
                    "commonErrors": [
                      "sugerir medida punitivista ou discriminatória"
                    ],
                    "connections": [
                      "filosofia",
                      "sociologia"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          },
          {
            "id": "RED-PRT-SIM",
            "name": "Prática",
            "description": "Prática",
            "category": "conteúdo principal",
            "hierarchyLevel": 3,
            "prerequisites": [
              "competências 1 a 5"
            ],
            "priority": "Crítico",
            "historicalFrequency": "100%",
            "difficulty": "Alta",
            "studyTimeMinutes": 90,
            "reviewTimeMinutes": 30,
            "initialStatus": "não iniciado",
            "subcontents": [
              {
                "id": "RED-PRT-SIM-checklist",
                "name": "Checklist",
                "category": "subconteúdo",
                "hierarchyLevel": 4,
                "prerequisites": [
                  "RED-PRT-SIM"
                ],
                "priority": "Crítico",
                "historicalFrequency": "100%",
                "difficulty": "Alta",
                "studyTimeMinutes": null,
                "reviewTimeMinutes": null,
                "initialStatus": "não iniciado",
                "microcontents": [
                  {
                    "id": "RED-PRT-SIM-01",
                    "name": "redação em 65 minutos",
                    "description": "simula condição real do segundo dia",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "competências 1 a 5"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Alta",
                    "studyTimeMinutes": 90,
                    "reviewTimeMinutes": 30,
                    "enemAppearance": "simula condição real do segundo dia",
                    "competencies": [
                      "Red C1-C5"
                    ],
                    "commonErrors": [
                      "passar tempo demais no rascunho"
                    ],
                    "connections": [
                      "matemática/gestão de tempo"
                    ],
                    "initialStatus": "não iniciado"
                  },
                  {
                    "id": "RED-PRT-REV-01",
                    "name": "revisão orientada por rubrica",
                    "description": "transformar correção em checklist de erro",
                    "category": "microconteúdo",
                    "hierarchyLevel": 5,
                    "prerequisites": [
                      "redação escrita"
                    ],
                    "priority": "Crítico",
                    "historicalFrequency": "100%",
                    "difficulty": "Média",
                    "studyTimeMinutes": 50,
                    "reviewTimeMinutes": 25,
                    "enemAppearance": "transformar correção em checklist de erro",
                    "competencies": [
                      "Red C1-C5"
                    ],
                    "commonErrors": [
                      "reescrever sem diagnosticar causa do erro"
                    ],
                    "connections": [
                      "gamificação/progresso"
                    ],
                    "initialStatus": "não iniciado"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
})(window);
