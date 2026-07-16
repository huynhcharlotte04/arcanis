import type { ClientCompany } from "@/lib/types";

// QSEAL13 reutilise ARCANIS Industries (coherence de l'univers pedagogique),
// mais le contexte est recentre sur le management par les processus (approche
// BPM) a la suite d'une hausse des reclamations clients sur le traitement des
// commandes. L'identite de l'entreprise reste identique a l'autre module.
export const company: ClientCompany = {
  name: "ARCANIS Industries",
  monogram: "AI",
  presentation:
    "Groupe industriel francais en croissance, ARCANIS Industries concoit et assemble des equipements techniques pour des clients europeens exigeants. Son organisation s'est construite metier par metier ; la direction souhaite desormais piloter l'entreprise par ses processus pour tenir ses engagements clients.",
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
    "Fonctions commerciale, achats, production et service client encore organisees en silos"
  ],
  certifications: [
    "ISO 9001 depuis 2018",
    "Audit de suivi sans non-conformite majeure",
    "Approche processus formalisee sur le papier mais peu pilotee au quotidien",
    "Indicateurs qualite disponibles par service, rarement consolides de bout en bout"
  ],
  strategicObjectives: [
    "Structurer le management par les processus (approche BPM)",
    "Reduire durablement les reclamations sur le traitement des commandes",
    "Piloter la performance de bout en bout, du devis a la livraison",
    "Mobiliser les pilotes de processus autour d'objectifs partages"
  ],
  mainContact: {
    name: "Claire Martin",
    role: "Directrice qualite",
    email: "claire.martin@arcanis-industries.example"
  },
  mandateIssues: [
    "Cartographier un processus reel et en identifier les points de rupture",
    "Relier les dysfonctionnements aux reclamations clients constatees",
    "Proposer des indicateurs utiles au pilotage, pas seulement au reporting"
  ],
  currentSituation: [
    "Les reclamations clients sur le traitement des commandes ont augmente sur les deux derniers trimestres.",
    "Les processus existent sur le papier, mais les interfaces entre services (commande, achats, production, livraison) sont mal maitrisees.",
    "Chaque service suit ses propres indicateurs ; personne ne pilote la chaine de bout en bout.",
    "La direction qualite veut engager une demarche BPM sans braquer des equipes deja sous tension."
  ],
  constraints: [
    "Charge operationnelle elevee sur toutes les fonctions",
    "Habitudes de travail ancrees, cloisonnement entre services",
    "Resistances au changement de certains pilotes de processus",
    "Peu de temps disponible pour la modelisation et la concertation"
  ],
  risks: [
    "Produire une cartographie theorique, deconnectee du terrain",
    "Empiler des indicateurs sans logique de pilotage",
    "Sous-estimer la dimension humaine et l'adhesion des pilotes",
    "Traiter un processus isolement en oubliant ses interfaces"
  ],
  revenue: "86 M EUR",
  headcount: "420 collaborateurs repartis sur deux sites",
  clients: [
    "Donneurs d'ordre industriels europeens",
    "Integrateurs de solutions automatisees",
    "Clients sensibles aux delais, a la tracabilite et a la conformite"
  ]
};
