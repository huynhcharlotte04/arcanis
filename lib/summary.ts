import { company } from "@/data/company";
import type { Recommendation } from "@/lib/types";

const fallback = "A completer par l'equipe de consultants.";

function value(text: string) {
  return text.trim() || fallback;
}

export function buildMarkdownSummary(recommendation: Recommendation) {
  return `# Livrable ARCANIS

## Equipe
${value(recommendation.teamName)}

## Entreprise
${company.name}

**Secteur :** ${company.sector}
**Effectif :** ${company.headcount}
**Chiffre d'affaires :** ${company.revenue}

## Referentiel recommande
${value(recommendation.referential)}

## Justification
${value(recommendation.justification)}

## Similitudes avec ISO 9001
${value(recommendation.similarities)}

## Differences avec ISO 9001
${value(recommendation.differences)}

## Exigences nouvelles
${value(recommendation.newRequirements)}

## Impacts organisationnels
${value(recommendation.organizationalImpacts)}

## Risques
${value(recommendation.risks)}

## Plan d'action
${value(recommendation.actionPlan)}

## Recommandation au comite de direction
${value(recommendation.executiveRecommendation)}

## Debrief formateur
- Pertinence du referentiel recommande :
- Qualite de la justification :
- Comprehension des ecarts avec ISO 9001 :
- Analyse des impacts organisationnels :
- Prise en compte des risques :
- Clarte de la recommandation au comite de direction :
`;
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
