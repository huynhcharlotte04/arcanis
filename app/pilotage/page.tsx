import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { TrainerDashboard } from "@/components/TrainerDashboard";

export default function TrainerDashboardPage() {
  return (
    <AppShell currentStep="pilotage">
      <SectionHeader eyebrow="Pilotage formateur" title="Preparer la simulation">
        Creez une mission locale, recuperez le code de session et gardez les
        mandats sous les yeux avant l&apos;ouverture.
      </SectionHeader>
      <TrainerDashboard />
    </AppShell>
  );
}
