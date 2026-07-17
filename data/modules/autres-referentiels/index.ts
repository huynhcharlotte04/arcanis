import type { SimulationModule } from "@/lib/types";
import { company } from "./company";
import { mandates, simulation } from "./mission";

export const autresReferentielsModule: SimulationModule = {
  id: "autres-referentiels",
  label: "Autres référentiels",
  accent: "#E0BE7C",
  sessionCodePrefix: "AR",
  missionId: "mission-001",
  company,
  mandates,
  simulation,
  documentBasePath: "/documents/mission-001",
  deliverableType: "restitution-comex"
};
