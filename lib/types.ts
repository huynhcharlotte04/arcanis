export type StepId =
  | "accueil"
  | "pilotage"
  | "rejoindre"
  | "lettre-mission"
  | "entreprise-cliente"
  | "centre-documentaire"
  | "messagerie"
  | "restitution";

export type ConsultantSession = {
  sessionCode: string;
  cabinetName: string;
  updatedAt: string;
};

export type TrainerSession = {
  promotionName: string;
  moduleName: string;
  clientCompany: string;
  sessionCode: string;
  createdAt: string;
  updatedAt: string;
};

export type Mandate = {
  cabinetName: string;
  referential: string;
};

export type ClientCompany = {
  name: string;
  presentation: string;
  sector: string;
  products: string[];
  organization: string[];
  certifications: string[];
  strategicObjectives: string[];
  constraints: string[];
  risks: string[];
  revenue: string;
  headcount: string;
  clients: string[];
};

export type MissionLetter = {
  clientCompany: string;
  context: string;
  objective: string;
  assignedMandate: string;
  expectedDeliverable: string;
  presentationDate: string;
};

export type DocumentCategory = {
  title: string;
  description: string;
  status: string;
};

export type MailMessage = {
  id: string;
  sender: string;
  role: string;
  subject: string;
  preview: string;
  receivedAt: string;
  body: string[];
};

export type ComexExpectation = {
  title: string;
  detail: string;
};

export type SimulationData = {
  missionLetter: MissionLetter;
  documentCategories: DocumentCategory[];
  messages: MailMessage[];
  comexExpectations: ComexExpectation[];
  keyDates: string[];
};
