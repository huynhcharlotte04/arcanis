import type { SimulationModule } from "@/lib/types";
import { company } from "./company";
import { mandates, simulation } from "./mission";

export const veilleReglementaireModule: SimulationModule = {
  id: "veille-reglementaire",
  label: "Veille reglementaire et normative",
  sessionCodePrefix: "VRN",
  missionId: "mission-003",
  company,
  mandates,
  simulation,
  documentBasePath: "/documents/veille-reglementaire",
  deliverableType: "plan-action"
};
