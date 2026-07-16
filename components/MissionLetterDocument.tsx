"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { getLetterFraming } from "@/lib/deliverable";
import { getMandateById } from "@/lib/mandates";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function MissionLetterDocument() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const activeModule = getModuleById(session.moduleId);
  const { simulation } = activeModule;
  const mandate = getMandateById(activeModule.mandates, session.mandateId);
  const framing = getLetterFraming(activeModule.deliverableType, mandate);
  const letterRows = [
    ["Entreprise cliente", simulation.missionLetter.clientCompany],
    ["Contexte", framing.context],
    ["Objectif", mandate.objective],
    ["Mandat attribue", framing.mandateLine],
    ["Perimetre impose", framing.scope],
    ["Enjeux prioritaires", mandate.issues.join(" ")],
    [framing.expectationsLabel, mandate.comexExpectations.join(" ")],
    ["Livrable attendu", simulation.missionLetter.expectedDeliverable],
    [framing.presentationLabel, simulation.missionLetter.presentationDate]
  ];

  return (
    <article className="glass-panel rounded-lg p-6 sm:p-10">
      <div className="border-b border-inkline pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brass">
          {simulation.missionLetter.clientCompany} - {framing.audienceSuffix}
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-porcelain">
          Lettre de mission
        </h2>
      </div>

      <div className="divide-y divide-inkline">
        {letterRows.map(([label, value]) => (
          <section key={label} className="grid gap-4 py-6 lg:grid-cols-[0.32fr_0.68fr]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mist">
              {label}
            </h3>
            <p className="text-base leading-8 text-porcelain">{value}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
