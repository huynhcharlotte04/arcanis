import type { ClientCompany } from "@/lib/types";

// Veille reglementaire et normative — reutilise ARCANIS Industries. Le contexte
// est recentre sur un defaut de veille : l'entreprise detecte trop tard les
// evolutions reglementaires et normatives applicables, ce qui l'expose a des
// non-conformites. L'identite de l'entreprise reste identique aux autres
// modules.
export const company: ClientCompany = {
  name: "ARCANIS Industries",
  monogram: "AI",
  presentation:
    "Groupe industriel francais en croissance, ARCANIS Industries concoit et assemble des equipements techniques pour des clients europeens exigeants. Son activite est soumise a un cadre reglementaire et normatif dense, qu'elle peine aujourd'hui a suivre de facon structuree.",
  location: "Lyon, Auvergne-Rhone-Alpes, France",
  headquartersVisual: "Siege social et centre de coordination industrielle",
  sector:
    "Conception et fabrication d'equipements industriels pour environnements techniques exigeants",
  products: [
    "Modules de pilotage pour lignes automatisees",
    "Sous-ensembles mecaniques a forte contrainte documentaire",
    "Solutions d'integration pour sites industriels sensibles"
  ],
  organization: [
    "Direction generale basee au siege de Lyon",
    "Deux sites industriels : assemblage et essais",
    "Direction qualite rattachee aux operations",
    "Veille reglementaire aujourd'hui dispersee entre plusieurs services, sans dispositif commun"
  ],
  certifications: [
    "ISO 9001 depuis 2018",
    "Audit de suivi ayant pointe une detection tardive des evolutions applicables",
    "Obligations environnementales et sante-securite suivies de facon inegale",
    "Exigences produit et normes sectorielles peu tracees dans le temps"
  ],
  strategicObjectives: [
    "Structurer la veille reglementaire et normative",
    "Detecter a temps les evolutions applicables a l'entreprise",
    "Evaluer l'impact des evolutions et prioriser la mise en conformite",
    "Perenniser un dispositif de veille avec des responsabilites claires"
  ],
  mainContact: {
    name: "Claire Martin",
    role: "Directrice qualite",
    email: "claire.martin@arcanis-industries.example"
  },
  mandateIssues: [
    "Identifier les exigences reglementaires et normatives applicables au domaine",
    "Evaluer l'impact des evolutions recentes sur l'entreprise",
    "Proposer un dispositif de veille et un plan de mise en conformite realiste"
  ],
  currentSituation: [
    "Un audit recent a montre qu'ARCANIS Industries detecte trop tard certaines evolutions reglementaires applicables.",
    "La veille existe de maniere informelle, mais elle est dispersee et depend de quelques personnes.",
    "Aucun tableau de veille consolide ne relie les exigences, leurs sources et leur impact.",
    "La direction veut un dispositif structure, sans alourdir inutilement le fonctionnement des equipes."
  ],
  constraints: [
    "Cadre reglementaire dense et evolutif sur plusieurs domaines",
    "Ressources limitees pour assurer une veille continue",
    "Information dispersee entre services et sources multiples",
    "Besoin de prioriser sans tout traiter en meme temps"
  ],
  risks: [
    "Passer a cote d'une evolution applicable et tomber en non-conformite",
    "Produire un tableau de veille exhaustif mais inexploitable",
    "Sous-estimer l'impact reel d'une evolution sur l'organisation",
    "Mettre en place un dispositif trop lourd, vite abandonne"
  ],
  revenue: "86 M EUR",
  headcount: "420 collaborateurs repartis sur deux sites",
  clients: [
    "Donneurs d'ordre industriels europeens",
    "Integrateurs de solutions automatisees",
    "Clients sensibles aux delais, a la tracabilite et a la conformite"
  ]
};
