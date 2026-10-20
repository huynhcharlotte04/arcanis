import type { ClientCompany } from "@/lib/types";

// QSEAL11 reutilise Montrel Industries (cohérence de l'univers pédagogique :
// mêmes effectifs, mêmes sites, même COMEX que les autres modules). Le
// contexte est recentre sur la cartographie des processus et l'intégration
// des parties prenantes, à la suite d'une hausse des réclamations et avant un
// audit client. Une première cartographie existe déjà ("version 0"), mais
// elle cumule les défauts : c'est le point de départ de la mission.
export const company: ClientCompany = {
  name: "Montrel Industries",
  monogram: "MI",
  presentation:
    "Groupe industriel français en croissance, Montrel Industries conçoit et fabrique des équipements industriels pour des clients européens exigeants. Chaque service a construit ses propres habitudes de travail ; la direction veut désormais une cartographie des processus qui serve vraiment à piloter l'entreprise, pas un schéma de plus dans un classeur.",
  location: "Lyon, Auvergne-Rhône-Alpes, France",
  headquartersVisual: "Siège social et centre de coordination industrielle",
  sector:
    "Conception et fabrication d'équipements industriels pour environnements techniques exigeants",
  products: [
    "Modules de pilotage pour lignes automatisées",
    "Sous-ensembles mécaniques à forte contrainte documentaire",
    "Solutions d'intégration pour sites industriels sensibles"
  ],
  organization: [
    "Direction générale basée au siège de Lyon",
    "Deux sites industriels : Lyon (siège) et le site secondaire",
    "Direction qualité rattachée aux opérations",
    "Une première cartographie des processus existe, mais elle n'a jamais été reprise ni validée par la direction"
  ],
  certifications: [
    "ISO 9001 depuis 2018",
    "ISO 14001 et ISO 45001 engagés sur le site secondaire",
    "Quatre référentiels en parallèle (ISO 9001, 14001, 45001, exigences clients), sans vue d'ensemble commune",
    "Audit de certification client annoncé dans 6 mois, portant sur la maîtrise des processus (ISO 9001, art. 4.4)"
  ],
  strategicObjectives: [
    "Refondre la cartographie des processus en intégrant réellement les parties prenantes",
    "Faire baisser durablement les réclamations clients (+18 % en 12 mois)",
    "Sélectionner les processus clés sur des critères objectifs, pas sur des habitudes",
    "Préparer une cartographie assez solide pour servir de preuve à l'audit client dans 6 mois"
  ],
  mainContact: {
    name: "Camille Ferrand",
    role: "Responsable qualité groupe",
    email: "camille.ferrand@montrel-industries.example"
  },
  mandateIssues: [
    "Reprendre une cartographie existante pleine de défauts, sans repartir de zéro",
    "Intégrer les parties prenantes à chaque niveau de la carte, pas seulement en façade",
    "Sélectionner des processus clés justifiés, défendables devant la direction"
  ],
  currentSituation: [
    "Les réclamations clients ont augmenté de 18 % sur les douze derniers mois.",
    "Une cartographie « version 0 » existe depuis deux ans, mais elle n'a jamais été revue : processus nommés par service, aucune famille de management, aucun pilote désigné.",
    "Les quatre référentiels de l'entreprise (ISO 9001, 14001, 45001, exigences clients) avancent chacun de leur côté, sans vue commune.",
    "Un audit de certification client est annoncé dans 6 mois ; il portera sur la maîtrise réelle des processus et de leurs interactions."
  ],
  constraints: [
    "Trente-quatre cases sur la carte actuelle, sans hiérarchie ni lien avec la stratégie",
    "Des pilotes pressentis mais jamais formellement mandatés",
    "Des équipes déjà sollicitées par la hausse des réclamations",
    "Un calendrier serré avant l'audit client dans 6 mois"
  ],
  risks: [
    "Refaire une cartographie théorique, déconnectée du terrain",
    "Oublier une partie prenante clé et laisser une exigence non couverte",
    "Sélectionner des processus clés par habitude plutôt que par un critère objectif",
    "Présenter un constat à la direction sans décision précise à l'appui"
  ],
  revenue: "86 M EUR",
  headcount: "420 collaborateurs répartis sur deux sites",
  clients: [
    "Donneurs d'ordre industriels européens",
    "Intégrateurs de solutions automatisées",
    "Clients sensibles aux délais, à la traçabilité et à la conformité"
  ]
};
