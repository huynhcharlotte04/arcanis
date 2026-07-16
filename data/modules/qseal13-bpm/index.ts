import type { SimulationModule } from "@/lib/types";
import { company } from "./company";
import { mandates, simulation } from "./mission";

export const qseal13BpmModule: SimulationModule = {
  id: "qseal13-bpm",
  label: "Management des processus QSE — Approche BPM",
  sessionCodePrefix: "QSEAL13",
  missionId: "mission-002",
  company,
  mandates,
  simulation,
  documentBasePath: "/documents/qseal13-bpm",
  deliverableType: "cartographie-annotee"
};
