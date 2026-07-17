import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { BrandHeader } from "@/components/BrandHeader";
import { MontrelMark } from "@/components/MontrelMark";

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
                Une entreprise virtuelle ou les consultants vivent une mission
                QSE complète, depuis le mandat jusqu&apos;a la restitution devant le
                COMEX.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/rejoindre"
                  className="inline-flex items-center justify-center rounded-md bg-brass px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-porcelain"
                >
                  Demarrer une mission
                </Link>
                <Link
                  href="/pilotage"
                  className="inline-flex items-center justify-center rounded-md border border-inkline px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-porcelain transition hover:border-brass/60 hover:text-brass"
                >
                  Pilotage formateur
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
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-brass/55 bg-brass/10 text-brass">
                    <MontrelMark size={34} title="Emblème Montrel Industries" />
                  </div>
                  <div>
                    <p className="text-sm text-mist">Entreprise</p>
                    <p className="mt-1 text-2xl font-semibold text-porcelain">
                      Montrel Industries
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Secteur", "Équipements industriels"],
                    ["Enjeu", "Diversification"],
                    ["Instance", "COMEX"],
                    ["Format", "Mission consultant"]
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
                  Objectif : comprendre le client, analyser les signaux et
                  préparer une position défendable devant la direction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
