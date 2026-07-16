import type { SimulationModule } from "@/lib/types";
import { company } from "./company";
import { mandates, simulation } from "./mission";

export const autresReferentielsModule: SimulationModule = {
  id: "autres-referentiels",
  label: "Autres referentiels",
  sessionCodePrefix: "AR",
  missionId: "mission-001",
  company,
  mandates,
  simulation,
  documentBasePath: "/documents/mission-001",
  deliverableType: "restitution-comex"
};
