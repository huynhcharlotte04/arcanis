import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { MissionLetterDocument } from "@/components/MissionLetterDocument";
import { SectionHeader } from "@/components/SectionHeader";

export default function MissionLetterPage() {
  return (
    <AppShell currentStep="lettre-mission">
      <SectionHeader eyebrow="Lettre de mission" title="Mandat strategique">
        Prenez connaissance du mandat avant d&apos;ouvrir le dossier client.
      </SectionHeader>

      <MissionLetterDocument />

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
