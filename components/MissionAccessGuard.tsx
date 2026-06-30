"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hasMissionAccess } from "@/lib/access";
import { loadConsultantSession } from "@/lib/storage";
import type { StepId } from "@/lib/types";

const publicSteps: StepId[] = ["accueil", "pilotage", "rejoindre"];

export function MissionAccessGuard({
  currentStep,
  children
}: {
  currentStep: StepId;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(!publicSteps.includes(currentStep));

  useEffect(() => {
    if (publicSteps.includes(currentStep)) {
      setIsChecking(false);
      return;
    }

    const session = loadConsultantSession();
    if (!hasMissionAccess(session)) {
      router.replace("/rejoindre?access=required");
      return;
    }

    setIsChecking(false);
  }, [currentStep, router]);

  if (isChecking) {
    return (
      <div className="rounded-lg border border-inkline bg-white/[0.035] p-6 text-sm leading-7 text-mist">
        Rejoignez une mission pour acceder a cet espace.
      </div>
    );
  }

  return <>{children}</>;
}
