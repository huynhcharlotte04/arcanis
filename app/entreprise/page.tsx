import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { CompanyProfilePanel } from "@/components/CompanyProfile";
import { SectionHeader } from "@/components/SectionHeader";

export default function CompanyPage() {
  return (
    <AppShell currentStep="entreprise">
      <SectionHeader eyebrow="Contexte d'entreprise" title="ARCANIS Industries">
        Prenez connaissance du contexte strategique, des objectifs et des
        contraintes qui encadrent la decision attendue.
      </SectionHeader>
      <CompanyProfilePanel />
      <div className="mt-8">
        <Link
          href="/mission"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Ouvrir le brief mission
        </Link>
      </div>
    </AppShell>
  );
}
