import { AppShell } from "@/components/AppShell";
import { RecommendationForm } from "@/components/RecommendationForm";
import { SectionHeader } from "@/components/SectionHeader";

export default function RecommendationPage() {
  return (
    <AppShell currentStep="recommandation">
      <SectionHeader eyebrow="Livrable consultant" title="Formulaire de recommandation">
        Formalisez une position claire, argumentee et exploitable par un comite
        de direction.
      </SectionHeader>
      <RecommendationForm />
    </AppShell>
  );
}
