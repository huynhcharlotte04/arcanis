import Link from "next/link";
import type { StepId } from "@/lib/types";

const steps: Array<{ id: StepId; label: string; href: string }> = [
  { id: "equipe", label: "Equipe", href: "/equipe" },
  { id: "entreprise", label: "Entreprise", href: "/entreprise" },
  { id: "mission", label: "Mission", href: "/mission" },
  { id: "ressources", label: "Ressources", href: "/ressources" },
  { id: "recommandation", label: "Recommandation", href: "/recommandation" },
  { id: "synthese", label: "Synthese", href: "/synthese" }
];

export function MissionProgress({ currentStep }: { currentStep: StepId }) {
  if (currentStep === "accueil") {
    return null;
  }

  const activeIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <nav className="border-b border-inkline bg-obsidian/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isPast = index < activeIndex;

          return (
            <Link
              key={step.id}
              href={step.href}
              className={`whitespace-nowrap rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                isActive
                  ? "border-brass/70 bg-brass/15 text-brass"
                  : isPast
                    ? "border-inkline bg-white/[0.03] text-porcelain hover:border-brass/50"
                    : "border-transparent text-mist hover:text-porcelain"
              }`}
            >
              {step.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
