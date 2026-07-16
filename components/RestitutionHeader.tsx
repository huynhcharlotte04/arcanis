"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { getRestitutionFraming } from "@/lib/deliverable";
import { SectionHeader } from "@/components/SectionHeader";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function RestitutionHeader() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const framing = getRestitutionFraming(getModuleById(session.moduleId).deliverableType);

  return (
    <SectionHeader eyebrow="Preparation de la restitution" title={framing.pageTitle}>
      {framing.pageSubtitle}
    </SectionHeader>
  );
}
