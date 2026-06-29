import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ClientDossier } from "@/components/ClientDossier";
import { SectionHeader } from "@/components/SectionHeader";

export default function ClientCompanyPage() {
  return (
    <AppShell currentStep="entreprise-cliente">
      <SectionHeader eyebrow="Entreprise cliente" title="Dossier ARCANIS Industries">
        Lisez le client comme le ferait un cabinet avant une reunion de
        direction.
      </SectionHeader>
      <ClientDossier />
      <div className="mt-8">
        <Link
          href="/centre-documentaire"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Acceder aux documents
        </Link>
      </div>
    </AppShell>
  );
}
