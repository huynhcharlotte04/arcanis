import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { MailInbox } from "@/components/MailInbox";
import { SectionHeader } from "@/components/SectionHeader";

export default function MessagingPage() {
  return (
    <AppShell currentStep="messagerie">
      <SectionHeader eyebrow="Messagerie" title="Signaux de mission">
        Les messages de l&apos;entreprise et de son écosystème précisent les enjeux
        à intégrer avant la restitution.
      </SectionHeader>
      <MailInbox />
      <div className="mt-8">
        <Link
          href="/restitution"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Préparer la restitution
        </Link>
      </div>
    </AppShell>
  );
}
