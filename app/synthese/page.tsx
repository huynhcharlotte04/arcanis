import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";
import { SummaryPanel } from "@/components/SummaryPanel";

export default function SummaryPage() {
  return (
    <AppShell currentStep="synthese">
      <SectionHeader eyebrow="Synthese" title="Recommandation consolidee">
        Retrouvez les decisions et arguments du groupe sous forme de livrable
        partageable.
      </SectionHeader>
      <SummaryPanel />
    </AppShell>
  );
}
