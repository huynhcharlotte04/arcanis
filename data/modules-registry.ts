import type { SimulationModule } from "@/lib/types";
import { autresReferentielsModule } from "./modules/autres-referentiels";
import { qseal13BpmModule } from "./modules/qseal13-bpm";
import { veilleReglementaireModule } from "./modules/veille-reglementaire";

// Registre central de tous les modules de simulation disponibles.
// Ajouter un module = importer son dossier et l'ajouter à cette liste.
export const modules: SimulationModule[] = [
  autresReferentielsModule,
  qseal13BpmModule,
  veilleReglementaireModule
];

// Module ouvert par défaut. Toute resolution qui echoue retombe dessus,
// ce qui garantit qu'aucun code de session existant ne casse.
export const DEFAULT_MODULE_ID = "autres-referentiels";

export function getDefaultModule(): SimulationModule {
  return modules.find((module) => module.id === DEFAULT_MODULE_ID) ?? modules[0];
}

export function getModuleById(moduleId: string | undefined): SimulationModule {
  if (!moduleId) {
    return getDefaultModule();
  }

  return modules.find((module) => module.id === moduleId) ?? getDefaultModule();
}

// Le module est encode dans le préfixe du code de session (ex: "QSEAL13-4F2A").
// Préfixe inconnu ou absent => repli sur le module par défaut, ce qui garantit
// qu'aucun code de session déjà distribue ne casse.
export function getModuleByCode(sessionCode: string | undefined): SimulationModule {
  const prefix = (sessionCode ?? "").trim().split("-")[0]?.toUpperCase() ?? "";
  if (!prefix) {
    return getDefaultModule();
  }

  return (
    modules.find((module) => module.sessionCodePrefix.toUpperCase() === prefix) ??
    getDefaultModule()
  );
}

export function generateSessionCode(module: SimulationModule): string {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${module.sessionCodePrefix}-${random}`;
}
