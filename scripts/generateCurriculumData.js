const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const inputPath = path.join(rootDir, "PLANNER_EXPANDIDO.md");
const outputPath = path.join(rootDir, "src", "data", "expandedCurriculum.js");

const content = fs.readFileSync(inputPath, "utf8");
const lines = content.split(/\r?\n/);

const areaAliases = {
  "Matemática e suas Tecnologias": "matematica",
  "Ciências da Natureza e suas Tecnologias": "natureza",
  "Linguagens, Códigos e suas Tecnologias": "linguagens",
  "Ciências Humanas e suas Tecnologias": "humanas",
  Redação: "redacao"
};

const areaDescriptions = {
  matematica: "Roadmap granular de matemática com foco em TRI, modelagem, grandezas, geometria, funções, estatística e probabilidade.",
  natureza: "Roadmap granular de Física, Química e Biologia aplicado a energia, matéria, vida, ambiente e tecnologia.",
  linguagens: "Roadmap granular de leitura, língua portuguesa, literatura, artes, educação física e língua estrangeira.",
  humanas: "Roadmap granular de História, Geografia, Filosofia e Sociologia para leitura crítica e repertório.",
  redacao: "Roadmap granular para texto dissertativo-argumentativo, competências da redação e prática orientada."
};

const priorityRank = {
  Crítico: 4,
  Alto: 3,
  Médio: 2,
  Baixo: 1
};

function clean(value) {
  return value
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .trim();
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseMinutes(value) {
  const text = clean(value);
  const hourMatch = text.match(/(\d+)h(?:(\d+))?/);
  const minuteMatch = text.match(/(\d+)min/);

  if (hourMatch) {
    return Number(hourMatch[1]) * 60 + Number(hourMatch[2] || 0);
  }

  if (minuteMatch) {
    return Number(minuteMatch[1]);
  }

  return null;
}

function parseList(value) {
  return clean(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getOrCreateArea(areas, title) {
  const normalizedTitle = title.replace(/^\d+\.\s*/, "").trim();
  const id = areaAliases[normalizedTitle] || slugify(normalizedTitle);
  let area = areas.find((item) => item.id === id);

  if (!area) {
    area = {
      id,
      name: normalizedTitle,
      description: areaDescriptions[id] || normalizedTitle,
      disciplines: []
    };
    areas.push(area);
  }

  return area;
}

function getOrCreateDiscipline(area, name) {
  const id = `${area.id}-${slugify(name)}`;
  let discipline = area.disciplines.find((item) => item.id === id);

  if (!discipline) {
    discipline = {
      id,
      name,
      contents: []
    };
    area.disciplines.push(discipline);
  }

  return discipline;
}

function getOrCreateContent(discipline, name, defaults) {
  const id = defaults.id || `${discipline.id}-${slugify(name)}`;
  let mainContent = discipline.contents.find((item) => item.id === id || item.name === name);

  if (!mainContent) {
    mainContent = {
      id,
      name,
      description: defaults.description || name,
      category: "conteúdo principal",
      hierarchyLevel: 3,
      prerequisites: defaults.prerequisites || [],
      priority: defaults.priority || "Médio",
      historicalFrequency: defaults.historicalFrequency || "Não informada",
      difficulty: defaults.difficulty || "Média",
      studyTimeMinutes: defaults.studyTimeMinutes || null,
      reviewTimeMinutes: defaults.reviewTimeMinutes || null,
      initialStatus: "não iniciado",
      subcontents: []
    };
    discipline.contents.push(mainContent);
  }

  return mainContent;
}

function getOrCreateSubcontent(mainContent, name) {
  const id = `${mainContent.id}-${slugify(name)}`;
  let subcontent = mainContent.subcontents.find((item) => item.id === id || item.name === name);

  if (!subcontent) {
    subcontent = {
      id,
      name,
      category: "subconteúdo",
      hierarchyLevel: 4,
      prerequisites: [mainContent.id],
      priority: mainContent.priority,
      historicalFrequency: mainContent.historicalFrequency,
      difficulty: mainContent.difficulty,
      studyTimeMinutes: null,
      reviewTimeMinutes: null,
      initialStatus: "não iniciado",
      microcontents: []
    };
    mainContent.subcontents.push(subcontent);
  }

  return subcontent;
}

function applyPriorityRollup(parent, childPriority) {
  if ((priorityRank[childPriority] || 0) > (priorityRank[parent.priority] || 0)) {
    parent.priority = childPriority;
  }
}

function parseMetadata(startIndex) {
  const metadata = {};

  for (let index = startIndex; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.startsWith("- **")) {
      break;
    }

    const match = line.match(/^- \*\*(.+?):\*\*\s*(.+)$/);
    if (!match) {
      continue;
    }

    const key = match[1];
    const value = clean(match[2]);

    if (key === "Prioridade") metadata.priority = value;
    if (key === "Frequência histórica") metadata.historicalFrequency = value;
    if (key === "Dificuldade") metadata.difficulty = value;
    if (key === "Tempo de estudo") metadata.studyTimeMinutes = parseMinutes(value);
    if (key === "Tempo de revisão") metadata.reviewTimeMinutes = parseMinutes(value);
    if (key === "Pré-requisitos") metadata.prerequisites = parseList(value);
    if (key === "Descrição curta") metadata.description = value;
  }

  return metadata;
}

function parseTableRow(line) {
  if (!line.startsWith("| `")) {
    return null;
  }

  const cells = line
    .slice(1, -1)
    .split("|")
    .map(clean);

  if (cells.length < 13) {
    return null;
  }

  return {
    id: cells[0],
    path: cells[1],
    hierarchyLevel: Number(cells[2]),
    priority: cells[3],
    historicalFrequency: cells[4],
    difficulty: cells[5],
    studyTimeMinutes: parseMinutes(cells[6]),
    reviewTimeMinutes: parseMinutes(cells[7]),
    prerequisites: parseList(cells[8]),
    enemAppearance: cells[9],
    competencies: parseList(cells[10]),
    commonErrors: parseList(cells[11]),
    connections: parseList(cells[12]),
    initialStatus: cells[13] || "não iniciado"
  };
}

const areas = [];
let currentArea = null;
let currentDiscipline = null;
let currentContent = null;
let pendingContentDefaults = null;

lines.forEach((line, index) => {
  const areaMatch = line.match(/^# \d+\. (.+)$/);
  if (areaMatch) {
    currentArea = getOrCreateArea(areas, areaMatch[1]);
    currentDiscipline = null;
    currentContent = null;
    pendingContentDefaults = null;
    return;
  }

  const disciplineMatch = line.match(/^## \d+\.\d+ (.+)$/);
  if (disciplineMatch && currentArea) {
    currentDiscipline = getOrCreateDiscipline(currentArea, disciplineMatch[1].trim());
    currentContent = null;
    pendingContentDefaults = null;
    return;
  }

  const mathContentMatch = line.match(/^#### `([^`]+)` \| (.+)$/);
  if (mathContentMatch && currentDiscipline) {
    pendingContentDefaults = parseMetadata(index + 2);
    currentContent = getOrCreateContent(currentDiscipline, clean(mathContentMatch[2]), {
      id: clean(mathContentMatch[1]),
      ...pendingContentDefaults
    });
    return;
  }

  const row = parseTableRow(line);
  if (!row || !currentArea || !currentDiscipline) {
    return;
  }

  const pathParts = row.path.split(">").map((part) => part.trim()).filter(Boolean);
  let mainName = currentContent ? currentContent.name : pathParts[0];
  let subName = currentContent ? pathParts[0] : pathParts[1];
  let microName = currentContent ? pathParts.slice(1).join(" > ") : pathParts.slice(2).join(" > ");

  if (!microName) {
    microName = subName || mainName;
    subName = "Checklist";
  }

  const mainContent = currentContent && currentContent.name === mainName
    ? currentContent
    : getOrCreateContent(currentDiscipline, mainName, {
      id: row.id.split("-").slice(0, 3).join("-"),
      priority: row.priority,
      historicalFrequency: row.historicalFrequency,
      difficulty: row.difficulty,
      studyTimeMinutes: row.studyTimeMinutes,
      reviewTimeMinutes: row.reviewTimeMinutes,
      prerequisites: row.prerequisites
    });

  const subcontent = getOrCreateSubcontent(mainContent, subName || "Checklist");
  const microcontent = {
    id: row.id,
    name: microName,
    description: row.enemAppearance,
    category: "microconteúdo",
    hierarchyLevel: row.hierarchyLevel,
    prerequisites: row.prerequisites,
    priority: row.priority,
    historicalFrequency: row.historicalFrequency,
    difficulty: row.difficulty,
    studyTimeMinutes: row.studyTimeMinutes,
    reviewTimeMinutes: row.reviewTimeMinutes,
    enemAppearance: row.enemAppearance,
    competencies: row.competencies,
    commonErrors: row.commonErrors,
    connections: row.connections,
    initialStatus: row.initialStatus || "não iniciado"
  };

  subcontent.microcontents.push(microcontent);
  applyPriorityRollup(subcontent, microcontent.priority);
  applyPriorityRollup(mainContent, microcontent.priority);
});

const output = `(function (window) {
  "use strict";

  window.EnemData = window.EnemData || {};
  window.EnemData.expandedCurriculum = ${JSON.stringify(areas, null, 2)};
})(window);
`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`Generated ${outputPath}`);
console.log(`Areas: ${areas.length}`);
console.log(`Microcontents: ${areas.flatMap((area) => area.disciplines.flatMap((discipline) => discipline.contents.flatMap((contentItem) => contentItem.subcontents.flatMap((subcontent) => subcontent.microcontents)))).length}`);
