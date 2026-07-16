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
  moduleId: string;
  cabinetName: string;
  mandateId: string;
  updatedAt: string;
};

export type TrainerSession = {
  promotionName: string;
  moduleId: string;
  moduleName: string;
  clientCompany: string;
  sessionCode: string;
  createdAt: string;
  updatedAt: string;
};

export type Mandate = {
  id: string;
  cabinetName: string;
  title: string;
  sector: string;
  referential: string;
  objective: string;
  issues: string[];
  comexExpectations: string[];
  specificMessages: MailMessage[];
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

export type DocumentStatus = "Brouillon" | "Valide";

export type DocumentVisibility = "Consultant" | "Formateur" | "Administrateur";

export type DocumentFileType = "PDF" | "DOCX" | "PNG" | "JPG" | "WEBP";

export type DocumentLibraryItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  status: DocumentStatus;
  missions: string[];
  mandateIds?: string[];
  visibility: DocumentVisibility[];
  type: DocumentFileType;
  href: string;
  owner: string;
  date: string;
  classification: "Interne";
};

export type MissionDocument = {
  name: string;
  owner: string;
  type: DocumentFileType;
  date: string;
  classification: "Interne";
  href: string;
  description?: string;
  version?: string;
  status?: DocumentStatus;
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
  messages: MailMessage[];
  preparedEvents: MissionEvent[];
  comexExpectations: ComexExpectation[];
  keyDates: string[];
};

export type DeliverableType =
  | "restitution-comex"
  | "cartographie-annotee"
  | "plan-action";

export type SimulationModule = {
  id: string;
  label: string;
  sessionCodePrefix: string;
  missionId: string;
  company: ClientCompany;
  mandates: Mandate[];
  simulation: SimulationData;
  documentBasePath: string;
  deliverableType: DeliverableType;
};
