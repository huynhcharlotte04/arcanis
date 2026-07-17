import type { ClientCompany } from "@/lib/types";

// QSEAL13 reutilise Montrel Industries (cohérence de l'univers pédagogique),
// mais le contexte est recentre sur le management par les processus (approche
// BPM) à la suite d'une hausse des réclamations clients sur le traitement des
// commandes. L'identite de l'entreprise reste identique à l'autre module.
export const company: ClientCompany = {
  name: "Montrel Industries",
  monogram: "MI",
  presentation:
    "Groupe industriel français en croissance, Montrel Industries conçoit et assemble des équipements techniques pour des clients européens exigeants. Son organisation s'est construite métier par métier ; la direction souhaite désormais piloter l'entreprise par ses processus pour tenir ses engagements clients.",
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
    "Deux sites industriels : assemblage et essais",
    "Direction qualité rattachée aux opérations",
    "Fonctions commerciale, achats, production et service client encore organisées en silos"
  ],
  certifications: [
    "ISO 9001 depuis 2018",
    "Audit de suivi sans non-conformité majeure",
    "Approche processus formalisée sur le papier mais peu pilotée au quotidien",
    "Indicateurs qualité disponibles par service, rarement consolidés de bout en bout"
  ],
  strategicObjectives: [
    "Structurer le management par les processus (approche BPM)",
    "Réduire durablement les réclamations sur le traitement des commandes",
    "Piloter la performance de bout en bout, du devis à la livraison",
    "Mobiliser les pilotes de processus autour d'objectifs partagés"
  ],
  mainContact: {
    name: "Claire Martin",
    role: "Directrice qualité",
    email: "claire.martin@montrel-industries.example"
  },
  mandateIssues: [
    "Cartographier un processus réel et en identifier les points de rupture",
    "Relier les dysfonctionnements aux réclamations clients constatées",
    "Proposer des indicateurs utiles au pilotage, pas seulement au reporting"
  ],
  currentSituation: [
    "Les réclamations clients sur le traitement des commandes ont augmenté sur les deux derniers trimestres.",
    "Les processus existent sur le papier, mais les interfaces entre services (commande, achats, production, livraison) sont mal maîtrisées.",
    "Chaque service suit ses propres indicateurs ; personne ne pilote la chaîne de bout en bout.",
    "La direction qualité veut engager une démarche BPM sans braquer des équipes déjà sous tension."
  ],
  constraints: [
    "Charge opérationnelle élevée sur toutes les fonctions",
    "Habitudes de travail ancrées, cloisonnement entre services",
    "Résistances au changement de certains pilotes de processus",
    "Peu de temps disponible pour la modélisation et la concertation"
  ],
  risks: [
    "Produire une cartographie théorique, deconnectée du terrain",
    "Empiler des indicateurs sans logique de pilotage",
    "Sous-estimer la dimension humaine et l'adhésion des pilotes",
    "Traiter un processus isolément en oubliant ses interfaces"
  ],
  revenue: "86 M EUR",
  headcount: "420 collaborateurs répartis sur deux sites",
  clients: [
    "Donneurs d'ordre industriels européens",
    "Intégrateurs de solutions automatisées",
    "Clients sensibles aux délais, à la traçabilité et à la conformité"
  ]
};
