import type { DeliverableType, Mandate } from "@/lib/types";

// Cadrage d'affichage selon le type de livrable du module.
// La branche "restitution-comex" reproduit à l'identique les textes existants
// du module "Autres référentiels" (aucune regression). "cartographie-annotee"
// fournit le cadrage "revue de direction" de QSEAL13. "plan-action" fournit le
// cadrage "comité de conformité" du module Veille réglementaire.

export type LetterFraming = {
  audienceSuffix: string;
  context: string;
  scope: string;
  mandateLine: string;
  expectationsLabel: string;
  presentationLabel: string;
};

export type DossierFraming = {
  strategicObjective: string;
  targetsLabel: string;
  missionContext: string;
  stakeLabel: string;
  stakeValue: string;
  frameworkLabel: string;
};

export type RestitutionFraming = {
  navLabel: string;
  pageTitle: string;
  pageSubtitle: string;
  expectationsTitle: string;
  panelEyebrow: string;
  panelTitle: string;
  panelBody: string;
  panelNote: string;
};

export function getLetterFraming(
  type: DeliverableType,
  mandate: Mandate
): LetterFraming {
  if (type === "cartographie-annotee") {
    return {
      audienceSuffix: "Revue de direction",
      context: `La direction de Montrel Industries engage la structuration de son management par les processus, à la suite d'une hausse des réclamations sur le traitement des commandes. Votre équipe cartographie le processus ${mandate.sector}, identifie ses points de rupture et propose un plan d'indicateurs.`,
      scope: `Le processus ${mandate.sector} constitue le périmètre confié à votre équipe. Il s'agit de le cartographier tel qu'il fonctionne réellement, sans en sortir, mais en regardant ses interfaces amont et aval.`,
      mandateLine: mandate.title,
      expectationsLabel: "Attentes de la revue de direction",
      presentationLabel: "Restitution en revue de direction"
    };
  }

  if (type === "plan-action") {
    return {
      audienceSuffix: "Comité de conformité",
      context: `À la suite d'un audit ayant révélé une détection trop tardive des évolutions applicables, Montrel Industries structure sa veille réglementaire et normative. Votre équipe prend en charge la veille du domaine ${mandate.sector} : identifier les exigences applicables, évaluer l'impact des évolutions récentes et proposer un plan de mise en conformité.`,
      scope: `Le domaine ${mandate.sector} constitue le périmètre de veille confié à votre équipe. Il s'agit d'en couvrir les sources, les exigences applicables et les évolutions récentes.`,
      mandateLine: mandate.title,
      expectationsLabel: "Attentes du comité de conformité",
      presentationLabel: "Restitution au comité de conformité"
    };
  }

  return {
    audienceSuffix: "COMEX",
    context: `Le COMEX souhaite explorer l'entrée sur le marché ${mandate.sector}. Votre cabinet est mandaté pour évaluer la faisabilité de cette trajectoire, identifier les écarts avec le système ISO 9001 actuel et proposer un plan de transition réaliste.`,
    scope: `Le référentiel ${mandate.referential} est associé au mandat confié par le COMEX. Il constitue une contrainte de départ, pas une variable d'arbitrage.`,
    mandateLine: `${mandate.title} - ${mandate.referential}`,
    expectationsLabel: "Attentes du COMEX",
    presentationLabel: "Présentation devant le COMEX"
  };
}

export function getDossierFraming(type: DeliverableType): DossierFraming {
  if (type === "cartographie-annotee") {
    return {
      strategicObjective: "Structurer le management par les processus",
      targetsLabel: "Processus cibles",
      missionContext: "Restitution attendue en revue de direction aujourd'hui à 16h30",
      stakeLabel: "Enjeu direction",
      stakeValue: "Réduire les réclamations en embarquant les pilotes de processus",
      frameworkLabel: "Cadre"
    };
  }

  if (type === "plan-action") {
    return {
      strategicObjective: "Structurer la veille réglementaire et normative",
      targetsLabel: "Domaines de veille",
      missionContext: "Restitution attendue au comité de conformité aujourd'hui à 16h30",
      stakeLabel: "Enjeu conformité",
      stakeValue: "Détecter à temps les évolutions applicables et rester en conformité",
      frameworkLabel: "Cadre"
    };
  }

  return {
    strategicObjective: "Diversification vers de nouveaux marchés",
    targetsLabel: "Marchés cibles",
    missionContext: "Restitution attendue devant le COMEX aujourd'hui à 16h30",
    stakeLabel: "Enjeu COMEX",
    stakeValue: "Arbitrer une trajectoire crédible sans surestimer la maturité interne",
    frameworkLabel: "Référentiel"
  };
}

export function getRestitutionFraming(type: DeliverableType): RestitutionFraming {
  if (type === "cartographie-annotee") {
    return {
      navLabel: "Revue",
      pageTitle: "Face à la revue de direction",
      pageSubtitle:
        "Votre équipe prépare maintenant sa cartographie de processus annotée et son plan d'indicateurs.",
      expectationsTitle: "La revue de direction attend",
      panelEyebrow: "Restitution en revue de direction",
      panelTitle: "Préparation hors plateforme",
      panelBody:
        "Votre équipe prépare sa cartographie de processus annotée, son plan d'indicateurs et ses leviers de mobilisation en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
      panelNote:
        "Une cartographie techniquement juste pourra être challengée si elle ignore les interfaces, les réclamations réelles ou l'adhésion des pilotes."
    };
  }

  if (type === "plan-action") {
    return {
      navLabel: "Conformité",
      pageTitle: "Face au comité de conformité",
      pageSubtitle:
        "Votre équipe prépare maintenant son tableau de veille annoté et son plan de mise en conformité.",
      expectationsTitle: "Le comité de conformité attend",
      panelEyebrow: "Restitution au comité de conformité",
      panelTitle: "Préparation hors plateforme",
      panelBody:
        "Votre équipe prépare son tableau de veille, son analyse d'impact et son plan de mise en conformité en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
      panelNote:
        "Un tableau de veille exhaustif pourra être challenge s'il n'evalue pas l'impact réel des évolutions ni les priorités de mise en conformité."
    };
  }

  return {
    navLabel: "COMEX",
    pageTitle: "Face au COMEX",
    pageSubtitle:
      "Votre cabinet prépare maintenant son évaluation de faisabilité et son support hors plateforme.",
    expectationsTitle: "Le COMEX attend",
    panelEyebrow: "Restitution orale",
    panelTitle: "Préparation hors plateforme",
    panelBody:
      "Votre cabinet prépare son support, ses arbitrages et sa défense en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
    panelNote:
      "Une proposition techniquement pertinente pourra être challengée si elle est jugée trop coûteuse, trop longue ou insuffisamment réaliste."
  };
}
