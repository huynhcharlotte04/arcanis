import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { TrainerDashboard } from "@/components/TrainerDashboard";

export default function TrainerDashboardPage() {
  return (
    <AppShell currentStep="pilotage">
      <SectionHeader eyebrow="Pilotage formateur" title="Préparer la simulation">
        Créez une mission locale, récupérez le code de session et gardez les
        mandats sous les yeux avant l&apos;ouverture.
      </SectionHeader>
      <TrainerDashboard />
    </AppShell>
  );
}
