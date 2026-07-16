"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { getRestitutionFraming } from "@/lib/deliverable";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function RestitutionPrep() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const activeModule = getModuleById(session.moduleId);
  const { simulation } = activeModule;
  const framing = getRestitutionFraming(activeModule.deliverableType);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
      <section className="glass-panel rounded-lg p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
          {framing.expectationsTitle}
        </p>
        <div className="mt-6 divide-y divide-inkline">
          {simulation.comexExpectations.map((expectation) => (
            <article key={expectation.title} className="py-5 first:pt-0 last:pb-0">
              <h2 className="text-xl font-semibold text-porcelain">
                {expectation.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-mist">
                {expectation.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <aside className="h-fit rounded-lg border border-copper/35 bg-copper/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          {framing.panelEyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-porcelain">
          {framing.panelTitle}
        </h2>
        <p className="mt-4 text-sm leading-7 text-mist">
          {framing.panelBody}
        </p>
        <p className="mt-4 rounded-md border border-brass/30 bg-obsidian/35 p-4 text-sm leading-7 text-mist">
          {framing.panelNote}
        </p>
      </aside>
    </div>
  );
}
