import type { ClientCompany } from "@/lib/types";

// Veille réglementaire et normative — reutilise Montrel Industries. Le contexte
// est recentre sur un défaut de veille : l'entreprise détecte trop tard les
// évolutions réglementaires et normatives applicables, ce qui l'expose à des
// non-conformités. L'identite de l'entreprise reste identique aux autres
// modules.
export const company: ClientCompany = {
  name: "Montrel Industries",
  monogram: "MI",
  presentation:
    "Groupe industriel français en croissance, Montrel Industries conçoit et assemble des équipements techniques pour des clients européens exigeants. Son activité est soumise à un cadre réglementaire et normatif dense, qu'elle peine aujourd'hui à suivre de façon structurée.",
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
    "Veille réglementaire aujourd'hui dispersée entre plusieurs services, sans dispositif commun"
  ],
  certifications: [
    "ISO 9001 depuis 2018",
    "Audit de suivi ayant pointe une détection tardive des évolutions applicables",
    "Obligations environnementales et santé-sécurité suivies de façon inegale",
    "Exigences produit et normes sectorielles peu tracées dans le temps"
  ],
  strategicObjectives: [
    "Structurer la veille réglementaire et normative",
    "Détecter à temps les évolutions applicables à l'entreprise",
    "Évaluer l'impact des évolutions et prioriser la mise en conformité",
    "Pérenniser un dispositif de veille avec des responsabilités claires"
  ],
  mainContact: {
    name: "Claire Martin",
    role: "Directrice qualité",
    email: "claire.martin@montrel-industries.example"
  },
  mandateIssues: [
    "Identifier les exigences réglementaires et normatives applicables au domaine",
    "Évaluer l'impact des évolutions récentes sur l'entreprise",
    "Proposer un dispositif de veille et un plan de mise en conformité réaliste"
  ],
  currentSituation: [
    "Un audit récent a montré qu'Montrel Industries détecte trop tard certaines évolutions réglementaires applicables.",
    "La veille existe de manière informelle, mais elle est dispersée et depend de quelques personnes.",
    "Aucun tableau de veille consolidé ne relie les exigences, leurs sources et leur impact.",
    "La direction veut un dispositif structure, sans alourdir inutilement le fonctionnement des équipes."
  ],
  constraints: [
    "Cadre réglementaire dense et evolutif sur plusieurs domaines",
    "Ressources limitées pour assurer une veille continue",
    "Information dispersée entre services et sources multiples",
    "Besoin de prioriser sans tout traiter en même temps"
  ],
  risks: [
    "Passer à côté d'une évolution applicable et tomber en non-conformité",
    "Produire un tableau de veille exhaustif mais inexploitable",
    "Sous-estimer l'impact réel d'une évolution sur l'organisation",
    "Mettre en place un dispositif trop lourd, vite abandonne"
  ],
  revenue: "86 M EUR",
  headcount: "420 collaborateurs répartis sur deux sites",
  clients: [
    "Donneurs d'ordre industriels européens",
    "Intégrateurs de solutions automatisées",
    "Clients sensibles aux délais, à la traçabilité et à la conformité"
  ]
};
