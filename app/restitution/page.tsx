import { AppShell } from "@/components/AppShell";
import { RestitutionHeader } from "@/components/RestitutionHeader";
import { RestitutionPrep } from "@/components/RestitutionPrep";

export default function RestitutionPage() {
  return (
    <AppShell currentStep="restitution">
      <RestitutionHeader />
      <RestitutionPrep />
    </AppShell>
  );
}
