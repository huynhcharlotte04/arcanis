import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { simulation } from "@/data/mission";

const letterRows = [
  ["Entreprise cliente", simulation.missionLetter.clientCompany],
  ["Contexte", simulation.missionLetter.context],
  ["Objectif", simulation.missionLetter.objective],
  ["Mandat attribue", simulation.missionLetter.assignedMandate],
  ["Livrable attendu", simulation.missionLetter.expectedDeliverable],
  ["Presentation devant le COMEX", simulation.missionLetter.presentationDate]
];

export default function MissionLetterPage() {
  return (
    <AppShell currentStep="lettre-mission">
      <SectionHeader eyebrow="Lettre de mission" title="Mandat strategique">
        Prenez connaissance du mandat avant d&apos;ouvrir le dossier client.
      </SectionHeader>

      <article className="glass-panel rounded-lg p-6 sm:p-10">
        <div className="border-b border-inkline pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brass">
            ARCANIS Industries - COMEX
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

      <div className="mt-8">
        <Link
          href="/entreprise-cliente"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Ouvrir le dossier client
        </Link>
      </div>
    </AppShell>
  );
}
