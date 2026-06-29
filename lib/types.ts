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
  monogram: string;
  presentation: string;
  location: string;
  headquartersVisual: string;
  sector: string;
  products: string[];
  organization: string[];
  certifications: string[];
  strategicObjectives: string[];
  mainContact: {
    name: string;
    role: string;
    email: string;
  };
  mandateIssues: string[];
  currentSituation: string[];
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

export type MissionDocument = {
  name: string;
  owner: string;
  type: "PDF";
  date: string;
  classification: "Interne";
  href: string;
};

export type DocumentFolder = {
  name: string;
  documents: MissionDocument[];
};

export type MailMessage = {
  id: string;
  sender: string;
  role: string;
  subject: string;
  preview: string;
  receivedAt: string;
  body: string[];
  isNew?: boolean;
};

export type ComexExpectation = {
  title: string;
  detail: string;
};

export type MissionEvent = {
  id: string;
  triggerTitle: string;
  sender: string;
  role: string;
  simulatedTime: string;
  summary: string;
  subject: string;
  body: string[];
};

export type SimulationData = {
  missionLetter: MissionLetter;
  documentFolders: DocumentFolder[];
  messages: MailMessage[];
  preparedEvents: MissionEvent[];
  comexExpectations: ComexExpectation[];
  keyDates: string[];
};
