import type { SimulationModule } from "@/lib/types";
import { company } from "./company";
import { mandates, simulation } from "./mission";

export const qseal11CartographieModule: SimulationModule = {
  id: "qseal11-cartographie",
  label: "Cartographie des processus et parties prenantes",
  accent: "#A687C9",
  sessionCodePrefix: "QSEAL11",
  missionId: "mission-004",
  company,
  mandates,
  simulation,
  documentBasePath: "/documents/qseal11-cartographie",
  deliverableType: "cartographie-parties-prenantes"
};
