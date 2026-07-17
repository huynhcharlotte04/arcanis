import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ClientDossier } from "@/components/ClientDossier";
import { SectionHeader } from "@/components/SectionHeader";

export default function ClientCompanyPage() {
  return (
    <AppShell currentStep="entreprise-cliente">
      <SectionHeader eyebrow="Client Brief" title="Montrel Industries">
        Une synthèse courte pour situer le client avant d&apos;ouvrir l&apos;espace
        documentaire.
      </SectionHeader>
      <ClientDossier />
      <div className="mt-8">
        <Link
          href="/centre-documentaire"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Accéder aux documents
        </Link>
      </div>
    </AppShell>
  );
}
