import { mandates } from "@/data/mission";
import type { Mandate } from "@/lib/types";

export function getDefaultMandate(): Mandate {
  return mandates[0];
}

export function getMandateById(mandateId: string): Mandate {
  return mandates.find((mandate) => mandate.id === mandateId) ?? getDefaultMandate();
}

function normalizeCabinetName(cabinetName: string): string {
  return cabinetName
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export function getMandateByCabinetName(cabinetName: string): Mandate {
  const normalizedCabinetName = normalizeCabinetName(cabinetName);

  return (
    mandates.find(
      (mandate) => normalizeCabinetName(mandate.cabinetName) === normalizedCabinetName
    ) ?? getDefaultMandate()
  );
}

export function hasKnownCabinetName(cabinetName: string): boolean {
  const normalizedCabinetName = normalizeCabinetName(cabinetName);

  return mandates.some(
    (mandate) => normalizeCabinetName(mandate.cabinetName) === normalizedCabinetName
  );
}
