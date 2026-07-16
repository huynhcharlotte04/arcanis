"use client";

import { useEffect, useState } from "react";
import { getModuleById } from "@/data/modules-registry";
import { getMandateById } from "@/lib/mandates";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function MissionLetterDocument() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const activeModule = getModuleById(session.moduleId);
  const { simulation } = activeModule;
  const mandate = getMandateById(activeModule.mandates, session.mandateId);
  const closedMissionContext = `Le COMEX souhaite explorer l'entree sur le marche ${mandate.sector}. Votre cabinet est mandate pour evaluer la faisabilite de cette trajectoire, identifier les ecarts avec le systeme ISO 9001 actuel et proposer un plan de transition realiste.`;
  const imposedScope = `Le referentiel ${mandate.referential} est associe au mandat confie par le COMEX. Il constitue une contrainte de depart, pas une variable d'arbitrage.`;
  const letterRows = [
    ["Entreprise cliente", simulation.missionLetter.clientCompany],
    ["Contexte", closedMissionContext],
    ["Objectif", mandate.objective],
    ["Mandat attribue", `${mandate.title} - ${mandate.referential}`],
    ["Perimetre impose", imposedScope],
    ["Enjeux prioritaires", mandate.issues.join(" ")],
    ["Attentes du COMEX", mandate.comexExpectations.join(" ")],
    ["Livrable attendu", simulation.missionLetter.expectedDeliverable],
    ["Presentation devant le COMEX", simulation.missionLetter.presentationDate]
  ];

  return (
    <article className="glass-panel rounded-lg p-6 sm:p-10">
      <div className="border-b border-inkline pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brass">
          ARCANIS Industries - COMEX
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-porcelain">
          Lettre de mission
        </h2>
      </div>

      <div className="divide-y divide-inkline">
        {letterRows.map(([label, value]) => (
          <section key={label} className="grid gap-4 py-6 lg:grid-cols-[0.32fr_0.68fr]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mist">
              {label}
            </h3>
            <p className="text-base leading-8 text-porcelain">{value}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
