import type { ConsultantSession } from "@/lib/types";

export function hasMissionAccess(session: ConsultantSession): boolean {
  return (
    session.sessionCode.trim().length > 0 &&
    session.cabinetName.trim().length > 0 &&
    session.mandateId.trim().length > 0
  );
}
