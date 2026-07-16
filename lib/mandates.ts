import type { Mandate } from "@/lib/types";

export function getDefaultMandate(mandates: Mandate[]): Mandate {
  return mandates[0];
}

export function getMandateById(mandates: Mandate[], mandateId: string): Mandate {
  return mandates.find((mandate) => mandate.id === mandateId) ?? getDefaultMandate(mandates);
}

function normalizeCabinetName(cabinetName: string): string {
  return cabinetName
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export function getMandateByCabinetName(
  mandates: Mandate[],
  cabinetName: string
): Mandate {
  const normalizedCabinetName = normalizeCabinetName(cabinetName);

  return (
    mandates.find(
      (mandate) => normalizeCabinetName(mandate.cabinetName) === normalizedCabinetName
    ) ?? getDefaultMandate(mandates)
  );
}

export function hasKnownCabinetName(
  mandates: Mandate[],
  cabinetName: string
): boolean {
  const normalizedCabinetName = normalizeCabinetName(cabinetName);

  return mandates.some(
    (mandate) => normalizeCabinetName(mandate.cabinetName) === normalizedCabinetName
  );
}
