# Checklist ENEM

Aplicativo offline de checklist para organizar estudos do ENEM com uma arvore curricular granular por area, disciplina, conteudo, subconteudo e microconteudo.

O projeto foi criado em HTML, CSS e JavaScript puro, sem dependencias de runtime. O progresso do estudante e salvo no proprio navegador usando `localStorage`.

## Funcionalidades

- Checklist com 5 areas do ENEM: Linguagens, Matematica, Ciencias da Natureza, Ciencias Humanas e Redacao.
- Curriculo detalhado com 185 microconteudos.
- Progresso geral e progresso por area.
- Busca por topico, prioridade, competencia, erro comum ou conexao.
- Filtros por status: todos, pendentes e concluidos.
- Dados de estudo por microconteudo: prioridade, frequencia historica, dificuldade, tempo de estudo, tempo de revisao, aparicao no ENEM, competencias, erros comuns e conexoes.
- Persistencia offline via `localStorage`.
- Arquitetura limpa em JavaScript puro.

## Como Rodar

### Opcao 1: Abrir direto no navegador

Essa e a forma mais simples.

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` no navegador.

No Windows, o caminho local fica parecido com:

```txt
C:\Enem\index.html
```

Como o app nao depende de servidor, ele funciona offline.

### Opcao 2: Rodar com servidor local

Use essa opcao se quiser testar como uma pagina servida por HTTP.

Com Python instalado:

```bash
cd C:\Enem
python -m http.server 8000
```

Depois acesse:

```txt
http://localhost:8000
```

Se estiver usando PowerShell:

```powershell
cd C:\Enem
python -m http.server 8000
```

## Estrutura Do Projeto

```txt
.
├── index.html
├── ARCHITECTURE.md
├── PLANNER.md
├── PLANNER_EXPANDIDO.md
├── README.md
├── scripts
│   └── generateCurriculumData.js
└── src
    ├── application
    │   └── checklistUseCases.js
    ├── data
    │   ├── expandedCurriculum.js
    │   └── studyAreas.js
    ├── domain
    │   └── checklistDomain.js
    ├── infrastructure
    │   └── progressRepository.js
    ├── presentation
    │   └── checklistView.js
    └── main.js
```

## Arquitetura Limpa

O app separa responsabilidades em camadas:

- `src/domain`: regras puras do checklist, como calculo de progresso, filtros e listagem de topicos.
- `src/application`: casos de uso, como selecionar area, buscar, filtrar, marcar topico e limpar progresso.
- `src/infrastructure`: persistencia em `localStorage`.
- `src/presentation`: renderizacao da interface e eventos do DOM.
- `src/data`: dados curriculares usados pelo app.
- `src/main.js`: composicao das dependencias.

Fluxo principal:

```txt
presentation -> application -> domain
application -> infrastructure
```

A camada de dominio nao conhece DOM, navegador ou `localStorage`.

## Atualizando O Curriculo

O curriculo granular fica documentado em:

```txt
PLANNER_EXPANDIDO.md
```

O arquivo usado pelo app e gerado em:

```txt
src/data/expandedCurriculum.js
```

Para regenerar os dados apos editar o planner:

```bash
node scripts/generateCurriculumData.js
```

Depois abra novamente o `index.html`.

## Validacao Basica

Para checar a sintaxe dos scripts:

```bash
node --check src/data/expandedCurriculum.js
node --check src/domain/checklistDomain.js
node --check src/application/checklistUseCases.js
node --check src/infrastructure/progressRepository.js
node --check src/presentation/checklistView.js
node --check src/main.js
```

Para regenerar e validar a quantidade de dados:

```bash
node scripts/generateCurriculumData.js
```

O resultado esperado atualmente e:

```txt
Areas: 5
Microcontents: 185
```

## Fontes Curriculares

O conteudo foi estruturado a partir de:

- Matriz de Referencia ENEM do Inep.
- Cartilha de Redacao do ENEM 2025 do Inep.
- Planejamento curricular local em `PLANNER.md` e `PLANNER_EXPANDIDO.md`.

## Observacoes

- O app nao precisa de instalacao de pacotes.
- O progresso fica salvo apenas no navegador usado pelo estudante.
- Para limpar o progresso, use o botao `Limpar progresso` dentro do app.
- Se trocar de navegador ou limpar dados do site, o progresso salvo pode ser perdido.
