import type { SimulationModule } from "@/lib/types";
import { autresReferentielsModule } from "./modules/autres-referentiels";

// Registre central de tous les modules de simulation disponibles.
// Ajouter un module = importer son dossier et l'ajouter a cette liste.
export const modules: SimulationModule[] = [autresReferentielsModule];

// Module ouvert par defaut. Toute resolution qui echoue retombe dessus,
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
