(function (window) {
  "use strict";

  const studyAreas = [
    {
      id: "linguagens",
      name: "Linguagens",
      description: "Leitura, interpretacao, lingua portuguesa, literatura, linguas estrangeiras, artes, educacao fisica e tecnologias da comunicacao.",
      subjects: [
        {
          name: "Lingua Portuguesa",
          topics: [
            ["Generos textuais", "Reconhecer finalidade, suporte, publico e contexto de circulacao."],
            ["Sequencias discursivas", "Narracao, descricao, injuncao, exposicao e argumentacao."],
            ["Interpretacao de textos", "Inferencias, ideias centrais, tese e efeitos de sentido."],
            ["Funcoes da linguagem", "Identificar usos predominantes em situacoes de comunicacao."],
            ["Variacao linguistica", "Norma padrao, registros, regionalismos e adequacao ao contexto."],
            ["Coesao e coerencia", "Referencia, progressao textual, conectivos e relacoes logicas."],
            ["Argumentacao", "Tese, argumentos, estrategias persuasivas e ponto de vista."]
          ]
        },
        {
          name: "Literatura",
          topics: [
            ["Texto literario e contexto", "Relacionar obras a momentos historicos, sociais e politicos."],
            ["Escolas literarias", "Principais movimentos, autores e marcas esteticas."],
            ["Intertextualidade", "Dialogos entre textos, artes, culturas e epocas."],
            ["Patrimonio literario", "Valores sociais, humanos e culturais na literatura brasileira."]
          ]
        },
        {
          name: "Ingles ou Espanhol",
          topics: [
            ["Leitura instrumental", "Compreender tema, objetivo e informacoes explicitas."],
            ["Vocabulario em contexto", "Associar palavras e expressoes ao tema do texto."],
            ["Funcao social do texto", "Reconhecer genero, interlocutores e contexto cultural."],
            ["Estruturas linguisticas", "Relacionar formas gramaticais ao sentido produzido."]
          ]
        },
        {
          name: "Artes e Educacao Fisica",
          topics: [
            ["Linguagens artisticas", "Artes visuais, musica, teatro e danca como producao cultural."],
            ["Arte e diversidade", "Identidade, multiculturalidade, patrimonio e preconceitos."],
            ["Praticas corporais", "Esporte, jogos, lutas, dancas, lazer e autonomia."],
            ["Corpo e sociedade", "Saude, expressao, identidade juvenil e padroes corporais."]
          ]
        },
        {
          name: "Tecnologias da Comunicacao",
          topics: [
            ["Generos digitais", "Impacto, suporte, interlocutores e recursos linguisticos."],
            ["Midias e sociedade", "Funcao social, criticidade e efeitos das tecnologias."],
            ["Sistemas de informacao", "Linguagens, recursos expressivos e circulacao de informacoes."]
          ]
        }
      ]
    },
    {
      id: "matematica",
      name: "Matematica",
      description: "Resolucao de problemas com numeros, geometria, medidas, algebra, graficos, estatistica e probabilidade.",
      subjects: [
        {
          name: "Numeros e Operacoes",
          topics: [
            ["Conjuntos numericos", "Naturais, inteiros, racionais, irracionais e reais."],
            ["Operacoes e propriedades", "Calculo, estimativa, fatoracao e divisibilidade."],
            ["Razao e proporcao", "Escalas, regra de tres e relacoes proporcionais."],
            ["Porcentagem e juros", "Aumentos, descontos, juros simples e compostos."],
            ["Sequencias e progressoes", "Padroes, PA, PG e recorrencias."]
          ]
        },
        {
          name: "Geometria e Medidas",
          topics: [
            ["Figuras planas", "Angulos, poligonos, circunferencia, areas e perimetros."],
            ["Geometria espacial", "Solidos, volumes, areas e planificacoes."],
            ["Semelhanca e congruencia", "Triangulos, Teorema de Tales e relacoes metricas."],
            ["Trigonometria no triangulo", "Seno, cosseno, tangente e aplicacoes."],
            ["Grandezas e unidades", "Conversoes, escalas, medidas e razoabilidade."]
          ]
        },
        {
          name: "Algebra e Funcoes",
          topics: [
            ["Expressoes algebricas", "Modelagem de situacoes e manipulacao de expressoes."],
            ["Equacoes e sistemas", "Resolucao e interpretacao de solucoes."],
            ["Funcoes", "Afim, quadratica, exponencial, logaritmica e suas representacoes."],
            ["Graficos cartesianos", "Leitura, variacao, crescimento e pontos importantes."],
            ["Modelagem de problemas", "Traduzir situacoes reais para linguagem matematica."]
          ]
        },
        {
          name: "Estatistica e Probabilidade",
          topics: [
            ["Tabelas e graficos", "Leitura de barras, linhas, setores, histogramas e pictogramas."],
            ["Medidas de tendencia", "Media, mediana e moda em diferentes contextos."],
            ["Dispersao", "Amplitude, variancia, desvio padrao e interpretacao."],
            ["Probabilidade", "Eventos, espaco amostral, combinatoria e frequencia."],
            ["Analise de dados", "Inferencias e argumentos com informacoes quantitativas."]
          ]
        }
      ]
    },
    {
      id: "natureza",
      name: "Natureza",
      description: "Fisica, Quimica e Biologia aplicadas a tecnologia, ambiente, saude, energia e situacoes-problema.",
      subjects: [
        {
          name: "Fisica",
          topics: [
            ["Mecanica", "Movimento, forcas, leis de Newton, equilibrio e quantidade de movimento."],
            ["Hidrostatica", "Pressao, empuxo, Pascal, Arquimedes e Stevin."],
            ["Energia e trabalho", "Conservacao, potencia, rendimento e transformacoes."],
            ["Eletricidade", "Carga, corrente, tensao, resistencia, potencia e circuitos."],
            ["Magnetismo", "Campo magnetico, imas e relacao com corrente eletrica."],
            ["Ondas e optica", "Reflexao, refracao, lentes, espelhos, frequencia e comprimento de onda."],
            ["Termologia", "Calor, temperatura, dilatacao, gases, maquinas termicas e termodinamica."]
          ]
        },
        {
          name: "Quimica",
          topics: [
            ["Estrutura atomica", "Modelos atomicos, isotopos, tabela periodica e propriedades."],
            ["Ligacoes quimicas", "Ionicas, covalentes, metalicas, polaridade e forcas intermoleculares."],
            ["Reacoes e estequiometria", "Balanceamento, leis ponderais, mol e calculos quimicos."],
            ["Solucoes", "Solubilidade, concentracao, coloides, suspensoes e propriedades coligativas."],
            ["Acidos, bases, sais e oxidos", "Classificacao, nomenclatura, pH e neutralizacao."],
            ["Termoquimica e eletroquimica", "Entalpia, Lei de Hess, pilhas, eletrolise e Faraday."],
            ["Cinetica e equilibrio", "Velocidade, catalisador, constantes e deslocamento de equilibrio."],
            ["Quimica organica", "Funcoes organicas, hidrocarbonetos, oxigenados, nitrogenados e polimeros."],
            ["Quimica ambiental", "Poluicao, agua, atmosfera, combustiveis, industria e impactos."]
          ]
        },
        {
          name: "Biologia",
          topics: [
            ["Citologia", "Membrana, organelas, nucleo, divisao celular e metabolismo."],
            ["Bioquimica celular", "Proteinas, carboidratos, lipidios, acidos nucleicos e enzimas."],
            ["Genetica", "Hereditariedade, DNA, sintese proteica, variabilidade e biotecnologia."],
            ["Evolucao", "Darwinismo, sintese moderna, selecao natural e diversidade."],
            ["Ecologia", "Ecossistemas, teias alimentares, ciclos biogeoquimicos e biomas."],
            ["Meio ambiente", "Mudancas climaticas, poluicao, conservacao, saneamento e legislacao."],
            ["Fisiologia humana", "Sistemas do corpo, homeostase, saude e reproducao."],
            ["Qualidade de vida", "Doencas, prevencao, drogas, obesidade, exercicio e desenvolvimento humano."]
          ]
        }
      ]
    },
    {
      id: "humanas",
      name: "Humanas",
      description: "Historia, Geografia, Sociologia e Filosofia para compreender cultura, poder, cidadania, economia, trabalho e ambiente.",
      subjects: [
        {
          name: "Historia",
          topics: [
            ["Cultura e patrimonio", "Memoria, diversidade cultural, cultura material e imaterial."],
            ["America colonial", "Conquista, escravidao, resistencias indigenas e africanas."],
            ["Formacao do Brasil", "Povos indigenas, africanos, colonizacao, imperio e republica."],
            ["Revolucoes modernas", "Revolucoes sociais e politicas na Europa e nas Americas."],
            ["Imperialismo e guerras", "Ocupacao da Africa e Asia, Guerras Mundiais e Guerra Fria."],
            ["Totalitarismos e ditaduras", "Nazifascismo, stalinismo, Estado Novo e ditaduras latino-americanas."]
          ]
        },
        {
          name: "Geografia",
          topics: [
            ["Cartografia", "Projecoes, mapas tematicos, tecnologias e leitura espacial."],
            ["Territorio brasileiro", "Formacao territorial, regioes e politicas de ordenamento."],
            ["Urbanizacao", "Redes urbanas, hierarquia, pobreza e segregacao espacial."],
            ["Espaco agrario", "Agronegocio, agricultura familiar, estrutura fundiaria e conflitos."],
            ["Industrializacao", "Revolucao Industrial, fordismo, toyotismo e producao brasileira."],
            ["Globalizacao", "Fluxos, tecnologias, economia e reorganizacao internacional."],
            ["Natureza e ambiente", "Relevo, solos, clima, vegetacao, recursos hidricos e energia."],
            ["Questoes ambientais", "Efeito estufa, chuva acida, unidades de conservacao e sustentabilidade."]
          ]
        },
        {
          name: "Sociologia e Filosofia",
          topics: [
            ["Cidadania e democracia", "Direitos civis, sociais, politicos, humanos e politicas afirmativas."],
            ["Estado e poder", "Instituicoes, legitimidade, representacao e participacao coletiva."],
            ["Movimentos sociais", "Conflitos, conquistas, inclusao social e transformacao historica."],
            ["Trabalho e sociedade", "Capitalismo, socialismo, novas tecnologias e mundo do trabalho."],
            ["Etica e politica", "Valores, justica, vida social e fundamentos da democracia."],
            ["Cultura e identidade", "Diversidade, preconceito, midia e producao de sentido."]
          ]
        }
      ]
    },
    {
      id: "redacao",
      name: "Redacao",
      description: "Treino do texto dissertativo-argumentativo e das cinco competencias avaliadas na redacao do ENEM.",
      subjects: [
        {
          name: "Estrutura do Texto",
          topics: [
            ["Tema e recorte", "Compreender a proposta e manter o desenvolvimento dentro do tema."],
            ["Tese", "Definir ponto de vista claro desde a introducao."],
            ["Argumentos", "Selecionar fatos, dados, exemplos e repertorios pertinentes."],
            ["Desenvolvimento", "Organizar paragrafos com progressao, analise e defesa da tese."],
            ["Conclusao", "Retomar a discussao e encaminhar a proposta de intervencao."]
          ]
        },
        {
          name: "Competencias da Redacao",
          topics: [
            ["Competencia I", "Dominar a modalidade escrita formal da lingua portuguesa."],
            ["Competencia II", "Aplicar conhecimentos de varias areas ao texto dissertativo-argumentativo."],
            ["Competencia III", "Selecionar, relacionar, organizar e interpretar argumentos."],
            ["Competencia IV", "Usar mecanismos linguisticos para construir argumentacao coesa."],
            ["Competencia V", "Elaborar proposta de intervencao respeitando direitos humanos."]
          ]
        },
        {
          name: "Pratica e Revisao",
          topics: [
            ["Repertorio produtivo", "Usar conhecimentos autorais e conectados ao tema."],
            ["Coesao", "Variar conectivos e evitar repeticoes sem funcao."],
            ["Norma formal", "Revisar concordancia, regencia, pontuacao e ortografia."],
            ["Proposta completa", "Incluir agente, acao, meio, finalidade e detalhamento."],
            ["Simulados", "Escrever em ate 30 linhas e controlar tempo de producao."]
          ]
        }
      ]
    }
  ];

  window.EnemData = {
    studyAreas
  };
})(window);
