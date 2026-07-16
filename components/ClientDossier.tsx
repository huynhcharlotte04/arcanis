"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { getDossierFraming } from "@/lib/deliverable";
import { getMandateById } from "@/lib/mandates";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-inkline bg-obsidian/35 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-mist">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-porcelain">
        {value}
      </p>
    </div>
  );
}

function BriefList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-inkline bg-white/[0.035] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="text-sm leading-7 text-mist">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-inkline pb-3 last:border-b-0 last:pb-0">
      <p className="text-xs uppercase tracking-[0.18em] text-mist">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-porcelain">
        {value}
      </p>
    </div>
  );
}

export function ClientDossier() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const activeModule = getModuleById(session.moduleId);
  const { company, mandates } = activeModule;
  const mandate = getMandateById(mandates, session.mandateId);
  const framing = getDossierFraming(activeModule.deliverableType);

  return (
    <div className="space-y-6">
      <section className="glass-panel overflow-hidden rounded-lg">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-md border border-brass/55 bg-brass/10 text-xl font-bold text-brass">
                {company.monogram}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                  Client Brief
                </p>
                <h2 className="mt-2 text-4xl font-semibold text-porcelain">
                  {company.name}
                </h2>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-mist">
              {company.presentation}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Metric label="Localisation" value={company.location} />
              <Metric label="Secteur" value={company.sector} />
              <Metric label="Effectif" value={company.headcount} />
              <Metric label="Chiffre d'affaires" value={company.revenue} />
            </div>
          </div>

          <div className="border-t border-inkline bg-gradient-to-br from-brass/14 via-white/[0.045] to-obsidian/20 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div className="h-full rounded-lg border border-brass/25 bg-obsidian/30 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Instantane client
              </p>
              <div className="mt-5 space-y-4">
                <SnapshotItem label="Certification actuelle" value="ISO 9001" />
                <SnapshotItem
                  label="Objectif strategique"
                  value={framing.strategicObjective}
                />
                <SnapshotItem
                  label="Marches actuels"
                  value={company.clients.join(", ")}
                />
                <SnapshotItem
                  label={framing.targetsLabel}
                  value={mandates.map((item) => item.sector).join(", ")}
                />
                <SnapshotItem
                  label="Interlocuteur principal"
                  value={`${company.mainContact.name}, ${company.mainContact.role}`}
                />
                <SnapshotItem
                  label="Contexte de mission"
                  value={framing.missionContext}
                />
                <SnapshotItem
                  label={framing.stakeLabel}
                  value={framing.stakeValue}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-lg border border-inkline bg-white/[0.035] p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
            Contact principal
          </h2>
          <p className="mt-4 text-xl font-semibold text-porcelain">
            {company.mainContact.name}
          </p>
          <p className="mt-1 text-sm leading-7 text-mist">
            {company.mainContact.role}
          </p>
          <p className="mt-3 text-sm text-brass">{company.mainContact.email}</p>
        </section>

        <BriefList
          title="Objectif strategique de la mission"
          items={company.strategicObjectives.slice(0, 2)}
        />
      </div>

      <section className="rounded-lg border border-brass/30 bg-brass/10 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
          Mandat confie a votre cabinet
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[0.32fr_0.28fr_1fr]">
          <Metric label="Secteur" value={mandate.sector} />
          <Metric label={framing.frameworkLabel} value={mandate.referential} />
          <div className="rounded-md border border-inkline bg-obsidian/35 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-mist">
              Objectif
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-porcelain">
              {mandate.objective}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <BriefList title="Certifications actuelles" items={company.certifications.slice(0, 3)} />
        <BriefList title="Enjeux du mandat" items={company.mandateIssues} />
      </div>

      <section className="rounded-lg border border-inkline bg-white/[0.035] p-5">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
          Situation actuelle
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {company.currentSituation.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-mist">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
