import { AppShell } from "@/components/AppShell";
import { JoinMissionPanel } from "@/components/JoinMissionPanel";
import { SectionHeader } from "@/components/SectionHeader";

export default function JoinMissionPage() {
  return (
    <AppShell currentStep="rejoindre">
      <SectionHeader eyebrow="Rejoindre une mission" title="Accès cabinet">
        Saisissez le code communique par la direction de simulation et le nom
        de votre cabinet.
      </SectionHeader>
      <JoinMissionPanel />
    </AppShell>
  );
}
