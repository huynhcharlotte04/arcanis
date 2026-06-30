import { BrandHeader } from "@/components/BrandHeader";
import { MissionAccessGuard } from "@/components/MissionAccessGuard";
import { SimulationNav } from "@/components/SimulationNav";
import type { StepId } from "@/lib/types";

export function AppShell({
  currentStep,
  children
}: {
  currentStep: StepId;
  children: React.ReactNode;
}) {
  if (currentStep === "accueil") {
    return <main>{children}</main>;
  }

  return (
    <main className="min-h-screen">
      <div className="border-b border-inkline bg-obsidian/86">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
          <BrandHeader />
        </div>
      </div>
      <SimulationNav currentStep={currentStep} />
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <MissionAccessGuard currentStep={currentStep}>{children}</MissionAccessGuard>
      </div>
    </main>
  );
}
