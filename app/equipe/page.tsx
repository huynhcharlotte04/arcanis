import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamSelector } from "@/components/TeamSelector";

export default function TeamPage() {
  return (
    <AppShell currentStep="equipe">
      <SectionHeader eyebrow="Constitution du mandat" title="Selection d'equipe">
        Identifiez l&apos;equipe de consultants qui portera la recommandation devant
        le comite de direction.
      </SectionHeader>
      <TeamSelector />
    </AppShell>
  );
}
