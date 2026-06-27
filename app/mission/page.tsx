import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { mission } from "@/data/mission";

export default function MissionPage() {
  return (
    <AppShell currentStep="mission">
      <SectionHeader eyebrow="Brief strategique" title={mission.title}>
        {mission.subtitle}
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <section className="glass-panel rounded-lg p-6">
          <p className="text-lg leading-9 text-porcelain">{mission.mandate}</p>
          <div className="mt-8 rounded-md border border-brass/35 bg-brass/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              Livrable attendu
            </p>
            <p className="mt-3 text-base leading-8 text-mist">
              Une recommandation argumentee permettant au comite de direction de
              decider quel referentiel engager, dans quel ordre et sous quelles
              conditions de reussite.
            </p>
          </div>
        </section>

        <aside className="rounded-lg border border-inkline bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
            Criteres de decision
          </h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-mist">
            {mission.decisionCriteria.map((criterion) => (
              <li key={criterion} className="border-l border-brass/35 pl-3">
                {criterion}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-8">
        <Link
          href="/ressources"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Consulter les ressources
        </Link>
      </div>
    </AppShell>
  );
}
