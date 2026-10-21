import type { ClientCompany } from "@/lib/types";

// QSEAL11 : chaque cabinet traite une entreprise cliente différente (voir
// mission.ts, champ `company` de chaque mandat) — Keryos Médical, Arvano
// Conseil, Virel Semiconducteurs, Haranis Construction. Cette entrée
// "module" n'est qu'un repli générique, utilisé avant qu'un mandat ne soit
// résolu (ex. tableau de bord formateur avant attribution des cabinets) :
// elle ne représente aucune entreprise réelle de la simulation.
export const company: ClientCompany = {
  name: "4 entreprises indépendantes",
  monogram: "Q11",
  presentation:
    "Ce module confie à chaque cabinet une entreprise cliente différente, dans un secteur différent (dispositifs médicaux, conseil, semi-conducteurs, BTP). Le détail de chaque entreprise apparaît une fois le cabinet rejoint.",
  location: "Quatre sites, France",
  headquartersVisual: "Une entreprise différente par cabinet",
  sector: "Quatre secteurs distincts",
  products: ["Dispositifs médicaux", "Conseil", "Semi-conducteurs", "BTP"],
  organization: [
    "Cabinet Horizon : Keryos Médical (dispositifs médicaux)",
    "Cabinet Polaris : Arvano Conseil (conseil)",
    "Cabinet Meridian : Virel Semiconducteurs (semi-conducteurs)",
    "Cabinet Nova : Haranis Construction (BTP)"
  ],
  certifications: ["Variable selon l'entreprise attribuée à chaque cabinet"],
  strategicObjectives: [
    "Cartographier une entreprise en intégrant réellement ses parties prenantes",
    "Donner à chaque cabinet un cas distinct, pour une restitution croisée utile"
  ],
  mainContact: {
    name: "Secrétariat de la simulation",
    role: "Direction de la simulation",
    email: "simulation@arcanis.example"
  },
  mandateIssues: [
    "Chaque cabinet reçoit une entreprise et un secteur différents",
    "Le détail complet (organigramme, documents, messagerie) dépend du cabinet rejoint"
  ],
  currentSituation: [
    "Ce module compare 4 entreprises indépendantes plutôt qu'une seule entreprise vue sous 4 angles.",
    "Rejoignez votre cabinet pour découvrir l'entreprise qui vous est confiée."
  ],
  constraints: ["Propres à chaque entreprise, détaillées après attribution du cabinet"],
  risks: ["Propres à chaque entreprise, détaillées après attribution du cabinet"],
  revenue: "Variable selon l'entreprise",
  headcount: "Variable selon l'entreprise",
  clients: ["Variable selon l'entreprise"]
};
