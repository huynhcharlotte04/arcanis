"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { MontrelMark } from "@/components/MontrelMark";
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
    ["Mandat attribué", framing.mandateLine],
    ["Périmètre imposé", framing.scope],
    ["Enjeux prioritaires", mandate.issues.join(" ")],
    [framing.expectationsLabel, mandate.comexExpectations.join(" ")],
    ["Livrable attendu", simulation.missionLetter.expectedDeliverable],
    [framing.presentationLabel, simulation.missionLetter.presentationDate]
  ];

  return (
    <article className="glass-panel relative overflow-hidden rounded-lg p-6 sm:p-10">
      <MontrelMark
        size={280}
        className="pointer-events-none absolute -right-10 -top-10 text-porcelain/[0.04]"
      />
      <div className="relative flex items-start justify-between gap-6 border-b border-inkline pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brass">
            {simulation.missionLetter.clientCompany} - {framing.audienceSuffix}
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-porcelain">
            Lettre de mission
          </h2>
        </div>
        <div className="hidden shrink-0 flex-col items-center gap-2 text-brass sm:flex">
          <MontrelMark size={44} title={`Emblème ${simulation.missionLetter.clientCompany}`} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
            {simulation.missionLetter.clientCompany}
          </span>
        </div>
      </div>

      <div className="relative divide-y divide-inkline">
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
