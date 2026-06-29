import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { DocumentCenter } from "@/components/DocumentCenter";
import { SectionHeader } from "@/components/SectionHeader";

export default function DocumentCenterPage() {
  return (
    <AppShell currentStep="centre-documentaire">
      <SectionHeader eyebrow="Centre documentaire" title="Bibliotheque client">
        Accedez aux documents internes transmis par ARCANIS Industries pour
        preparer votre analyse.
      </SectionHeader>
      <DocumentCenter />
      <div className="mt-8">
        <Link
          href="/messagerie"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Ouvrir la messagerie
        </Link>
      </div>
    </AppShell>
  );
}
