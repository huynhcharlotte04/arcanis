export type StepId =
  | "accueil"
  | "equipe"
  | "entreprise"
  | "mission"
  | "ressources"
  | "recommandation"
  | "synthese";

export type Recommendation = {
  teamName: string;
  referential: string;
  justification: string;
  similarities: string;
  differences: string;
  newRequirements: string;
  organizationalImpacts: string;
  risks: string;
  actionPlan: string;
  executiveRecommendation: string;
  updatedAt: string;
};

export type CompanyProfile = {
  name: string;
  sector: string;
  headcount: string;
  revenue: string;
  clients: string[];
  objectives: string[];
  constraints: string[];
  risks: string[];
  context: string;
};
