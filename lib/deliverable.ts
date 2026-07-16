import type { DeliverableType, Mandate } from "@/lib/types";

// Cadrage d'affichage selon le type de livrable du module.
// La branche "restitution-comex" reproduit a l'identique les textes existants
// du module "Autres referentiels" (aucune regression). "cartographie-annotee"
// fournit le cadrage "revue de direction" de QSEAL13. "plan-action" fournit le
// cadrage "comite de conformite" du module Veille reglementaire.

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
      context: `La direction d'ARCANIS Industries engage la structuration de son management par les processus, a la suite d'une hausse des reclamations sur le traitement des commandes. Votre equipe cartographie le processus ${mandate.sector}, identifie ses points de rupture et propose un plan d'indicateurs.`,
      scope: `Le processus ${mandate.sector} constitue le perimetre confie a votre equipe. Il s'agit de le cartographier tel qu'il fonctionne reellement, sans en sortir, mais en regardant ses interfaces amont et aval.`,
      mandateLine: mandate.title,
      expectationsLabel: "Attentes de la revue de direction",
      presentationLabel: "Restitution en revue de direction"
    };
  }

  if (type === "plan-action") {
    return {
      audienceSuffix: "Comite de conformite",
      context: `A la suite d'un audit ayant revele une detection trop tardive des evolutions applicables, ARCANIS Industries structure sa veille reglementaire et normative. Votre equipe prend en charge la veille du domaine ${mandate.sector} : identifier les exigences applicables, evaluer l'impact des evolutions recentes et proposer un plan de mise en conformite.`,
      scope: `Le domaine ${mandate.sector} constitue le perimetre de veille confie a votre equipe. Il s'agit d'en couvrir les sources, les exigences applicables et les evolutions recentes.`,
      mandateLine: mandate.title,
      expectationsLabel: "Attentes du comite de conformite",
      presentationLabel: "Restitution au comite de conformite"
    };
  }

  return {
    audienceSuffix: "COMEX",
    context: `Le COMEX souhaite explorer l'entree sur le marche ${mandate.sector}. Votre cabinet est mandate pour evaluer la faisabilite de cette trajectoire, identifier les ecarts avec le systeme ISO 9001 actuel et proposer un plan de transition realiste.`,
    scope: `Le referentiel ${mandate.referential} est associe au mandat confie par le COMEX. Il constitue une contrainte de depart, pas une variable d'arbitrage.`,
    mandateLine: `${mandate.title} - ${mandate.referential}`,
    expectationsLabel: "Attentes du COMEX",
    presentationLabel: "Presentation devant le COMEX"
  };
}

export function getDossierFraming(type: DeliverableType): DossierFraming {
  if (type === "cartographie-annotee") {
    return {
      strategicObjective: "Structurer le management par les processus",
      targetsLabel: "Processus cibles",
      missionContext: "Restitution attendue en revue de direction aujourd'hui a 16h30",
      stakeLabel: "Enjeu direction",
      stakeValue: "Reduire les reclamations en embarquant les pilotes de processus",
      frameworkLabel: "Cadre"
    };
  }

  if (type === "plan-action") {
    return {
      strategicObjective: "Structurer la veille reglementaire et normative",
      targetsLabel: "Domaines de veille",
      missionContext: "Restitution attendue au comite de conformite aujourd'hui a 16h30",
      stakeLabel: "Enjeu conformite",
      stakeValue: "Detecter a temps les evolutions applicables et rester en conformite",
      frameworkLabel: "Cadre"
    };
  }

  return {
    strategicObjective: "Diversification vers de nouveaux marches",
    targetsLabel: "Marches cibles",
    missionContext: "Restitution attendue devant le COMEX aujourd'hui a 16h30",
    stakeLabel: "Enjeu COMEX",
    stakeValue: "Arbitrer une trajectoire credible sans surestimer la maturite interne",
    frameworkLabel: "Referentiel"
  };
}

export function getRestitutionFraming(type: DeliverableType): RestitutionFraming {
  if (type === "cartographie-annotee") {
    return {
      navLabel: "Revue",
      pageTitle: "Face a la revue de direction",
      pageSubtitle:
        "Votre equipe prepare maintenant sa cartographie de processus annotee et son plan d'indicateurs.",
      expectationsTitle: "La revue de direction attend",
      panelEyebrow: "Restitution en revue de direction",
      panelTitle: "Preparation hors plateforme",
      panelBody:
        "Votre equipe prepare sa cartographie de processus annotee, son plan d'indicateurs et ses leviers de mobilisation en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
      panelNote:
        "Une cartographie techniquement juste pourra etre challengee si elle ignore les interfaces, les reclamations reelles ou l'adhesion des pilotes."
    };
  }

  if (type === "plan-action") {
    return {
      navLabel: "Conformite",
      pageTitle: "Face au comite de conformite",
      pageSubtitle:
        "Votre equipe prepare maintenant son tableau de veille annote et son plan de mise en conformite.",
      expectationsTitle: "Le comite de conformite attend",
      panelEyebrow: "Restitution au comite de conformite",
      panelTitle: "Preparation hors plateforme",
      panelBody:
        "Votre equipe prepare son tableau de veille, son analyse d'impact et son plan de mise en conformite en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
      panelNote:
        "Un tableau de veille exhaustif pourra etre challenge s'il n'evalue pas l'impact reel des evolutions ni les priorites de mise en conformite."
    };
  }

  return {
    navLabel: "COMEX",
    pageTitle: "Face au COMEX",
    pageSubtitle:
      "Votre cabinet prepare maintenant son evaluation de faisabilite et son support hors plateforme.",
    expectationsTitle: "Le COMEX attend",
    panelEyebrow: "Restitution orale",
    panelTitle: "Preparation hors plateforme",
    panelBody:
      "Votre cabinet prepare son support, ses arbitrages et sa defense en autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.",
    panelNote:
      "Une proposition techniquement pertinente pourra etre challengee si elle est jugee trop couteuse, trop longue ou insuffisamment realiste."
  };
}
