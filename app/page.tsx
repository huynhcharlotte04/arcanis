import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { BrandHeader } from "@/components/BrandHeader";

export default function HomePage() {
  return (
    <AppShell currentStep="accueil">
      <section className="relative min-h-[calc(100vh-112px)] overflow-hidden">
        <div className="page-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 lg:px-12">
          <BrandHeader />

          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl pb-8">
              <p className="mb-5 text-sm uppercase tracking-[0.34em] text-brass">
                Academy of Professional Judgment
              </p>
              <h1 className="text-5xl font-semibold tracking-normal text-porcelain sm:text-7xl lg:text-8xl">
                ARCANIS
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-mist sm:text-2xl">
                Where professionals are forged.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-mist">
                Une immersion de decision pour consultants QSE charges
                d&apos;accompagner ARCANIS Industries dans une strategie de
                diversification exigeante.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/equipe"
                  className="inline-flex items-center justify-center rounded-md bg-brass px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-porcelain"
                >
                  Demarrer la mission
                </Link>
                <Link
                  href="/entreprise"
                  className="inline-flex items-center justify-center rounded-md border border-inkline px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-porcelain transition hover:border-brass/60 hover:text-brass"
                >
                  Voir le contexte
                </Link>
              </div>
            </div>

            <div className="glass-panel mb-8 rounded-lg p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-inkline pb-4">
                <span className="text-xs uppercase tracking-[0.24em] text-mist">
                  Mandat actif
                </span>
                <span className="rounded-full border border-copper/50 px-3 py-1 text-xs text-brass">
                  QSE
                </span>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-mist">Entreprise</p>
                  <p className="mt-1 text-2xl font-semibold text-porcelain">
                    ARCANIS Industries
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Secteur", "Equipements industriels"],
                    ["Enjeu", "Diversification"],
                    ["Decision", "Referentiel cible"],
                    ["Livrable", "Recommandation CODIR"]
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-md border border-inkline bg-white/[0.03] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-mist">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-porcelain">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-copper/35 bg-copper/10 p-4 text-sm leading-7 text-porcelain">
                  Objectif : transformer une analyse de referentiels en
                  recommandation exploitable par un comite de direction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
