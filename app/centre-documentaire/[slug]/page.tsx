import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";

export default function DocumentComingSoonPage() {
  return (
    <AppShell currentStep="centre-documentaire">
      <SectionHeader eyebrow="Centre documentaire" title="Dossier à venir">
        Ce dossier sera ouvert dans une prochaine version de la simulation.
      </SectionHeader>
      <section className="glass-panel rounded-lg p-8">
        <p className="max-w-2xl text-base leading-8 text-mist">
          Pour ce sprint, la bibliotheque installe le cadre professionnel. Les
          contenus detailles seront ajoutes module par module.
        </p>
        <Link
          href="/centre-documentaire"
          className="mt-7 inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Retour aux documents
        </Link>
      </section>
    </AppShell>
  );
}
