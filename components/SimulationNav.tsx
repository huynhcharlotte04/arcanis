"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { hasMissionAccess } from "@/lib/access";
import { getRestitutionFraming } from "@/lib/deliverable";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession, StepId } from "@/lib/types";

const steps: Array<{ id: StepId; label: string; href: string }> = [
  { id: "rejoindre", label: "Mission", href: "/rejoindre" },
  { id: "lettre-mission", label: "Lettre", href: "/lettre-mission" },
  { id: "entreprise-cliente", label: "Client", href: "/entreprise-cliente" },
  { id: "centre-documentaire", label: "Documents", href: "/centre-documentaire" },
  { id: "messagerie", label: "Messagerie", href: "/messagerie" },
  { id: "restitution", label: "COMEX", href: "/restitution" }
];

export function SimulationNav({ currentStep }: { currentStep: StepId }) {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const hasAccess = hasMissionAccess(session);
  const activeModule = getModuleById(session.moduleId);
  const restitutionLabel = getRestitutionFraming(activeModule.deliverableType).navLabel;

  // Teinte la plateforme avec l'accent du module actif (variable CSS globale).
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", activeModule.accent);
  }, [activeModule.accent]);

  if (currentStep === "accueil") {
    return null;
  }

  return (
    <nav className="border-b border-inkline bg-[#12100d]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isAccessible = step.id === "rejoindre" || hasAccess;
          const label = step.id === "restitution" ? restitutionLabel : step.label;
          const className = `whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
            isActive
              ? "bg-accent text-obsidian"
              : isAccessible
                ? "text-mist hover:bg-white/[0.05] hover:text-porcelain"
                : "cursor-not-allowed border border-inkline/70 text-mist/55"
          }`;

          if (!isAccessible) {
            return (
              <span key={step.id} className={className} title="Rejoignez une mission pour accéder à cet espace.">
                {label}
              </span>
            );
          }

          return (
            <Link
              key={step.id}
              href={step.href}
              className={className}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
