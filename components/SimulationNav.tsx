"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hasMissionAccess } from "@/lib/access";
import { loadConsultantSession } from "@/lib/storage";
import type { StepId } from "@/lib/types";

const steps: Array<{ id: StepId; label: string; href: string }> = [
  { id: "rejoindre", label: "Mission", href: "/rejoindre" },
  { id: "lettre-mission", label: "Lettre", href: "/lettre-mission" },
  { id: "entreprise-cliente", label: "Client", href: "/entreprise-cliente" },
  { id: "centre-documentaire", label: "Documents", href: "/centre-documentaire" },
  { id: "messagerie", label: "Messagerie", href: "/messagerie" },
  { id: "restitution", label: "COMEX", href: "/restitution" }
];

export function SimulationNav({ currentStep }: { currentStep: StepId }) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    setHasAccess(hasMissionAccess(loadConsultantSession()));
  }, []);

  if (currentStep === "accueil") {
    return null;
  }

  return (
    <nav className="border-b border-inkline bg-[#12100d]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isAccessible = step.id === "rejoindre" || hasAccess;
          const className = `whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
            isActive
              ? "bg-brass text-obsidian"
              : isAccessible
                ? "text-mist hover:bg-white/[0.05] hover:text-porcelain"
                : "cursor-not-allowed border border-inkline/70 text-mist/35"
          }`;

          if (!isAccessible) {
            return (
              <span key={step.id} className={className} title="Rejoignez une mission pour acceder a cet espace.">
                {step.label}
              </span>
            );
          }

          return (
            <Link
              key={step.id}
              href={step.href}
              className={className}
            >
              {step.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
