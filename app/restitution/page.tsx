import { AppShell } from "@/components/AppShell";
import { RestitutionPrep } from "@/components/RestitutionPrep";
import { SectionHeader } from "@/components/SectionHeader";

export default function RestitutionPage() {
  return (
    <AppShell currentStep="restitution">
      <SectionHeader eyebrow="Preparation de la restitution" title="Face au COMEX">
        Votre cabinet prepare maintenant sa position et son support hors
        plateforme.
      </SectionHeader>
      <RestitutionPrep />
    </AppShell>
  );
}
