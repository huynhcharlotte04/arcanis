import { simulation } from "@/data/mission";

export function RestitutionPrep() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
      <section className="glass-panel rounded-lg p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
          Le COMEX attend
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
          Restitution orale
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-porcelain">
          Preparation hors plateforme
        </h2>
        <p className="mt-4 text-sm leading-7 text-mist">
          Votre cabinet prepare son support, ses arbitrages et sa defense en
          autonomie. ARCANIS fournit le contexte professionnel, pas le livrable.
        </p>
        <p className="mt-4 rounded-md border border-brass/30 bg-obsidian/35 p-4 text-sm leading-7 text-mist">
          Une proposition techniquement pertinente pourra etre challengee si
          elle est jugee trop couteuse, trop longue ou insuffisamment realiste.
        </p>
      </aside>
    </div>
  );
}
