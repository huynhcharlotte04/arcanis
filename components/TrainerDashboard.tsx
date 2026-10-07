"use client";

import { useEffect, useState } from "react";
import {
  generateSessionCode,
  getModuleById,
  modules
} from "@/data/modules-registry";
import {
  defaultTrainerSession,
  loadTrainerSession,
  saveTrainerSession
} from "@/lib/storage";
import type { TrainerSession } from "@/lib/types";

export function TrainerDashboard() {
  const [session, setSession] = useState<TrainerSession>(defaultTrainerSession);
  const [copied, setCopied] = useState(false);
  const selectedModule = getModuleById(session.moduleId);
  const { mandates } = selectedModule;
  const hasSession = session.sessionCode.trim().length > 0;
  const shareLink = hasSession
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/rejoindre?code=${session.sessionCode}`
    : "";

  useEffect(() => {
    setSession(loadTrainerSession());
  }, []);

  function update(key: keyof TrainerSession, value: string) {
    const next = { ...session, [key]: value };
    setSession(next);
    saveTrainerSession(next);
  }

  function selectModule(moduleId: string) {
    const nextModule = getModuleById(moduleId);
    const next = {
      ...session,
      moduleId: nextModule.id,
      moduleName: nextModule.label,
      clientCompany: nextModule.company.name
    };
    setSession(next);
    saveTrainerSession(next);
  }

  function createSession() {
    const now = new Date().toISOString();
    const next = {
      ...session,
      sessionCode: generateSessionCode(selectedModule),
      createdAt: session.createdAt || now,
      updatedAt: now
    };
    setSession(next);
    saveTrainerSession(next);
    setCopied(false);
  }

  async function copyShareLink() {
    if (!shareLink) {
      return;
    }

    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <section className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5 border-b border-inkline pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Préparation locale
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-porcelain">
              Nouvelle mission
            </h2>
          </div>
          {hasSession ? (
            <div className="rounded-md border border-brass/45 bg-brass/10 px-4 py-3 text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-mist">
                Code
              </p>
              <p className="mt-1 text-xl font-semibold text-brass">
                {session.sessionCode}
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-6 space-y-5">
          <label className="block" htmlFor="promotionName">
            <span className="text-sm font-semibold text-porcelain">
              Nom de la promotion
            </span>
            <input
              id="promotionName"
              value={session.promotionName}
              onChange={(event) => update("promotionName", event.target.value)}
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain"
            />
          </label>

          <label className="block" htmlFor="moduleId">
            <span className="flex items-center gap-2 text-sm font-semibold text-porcelain">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: selectedModule.accent }}
                aria-hidden
              />
              Module
            </span>
            <select
              id="moduleId"
              value={session.moduleId}
              onChange={(event) => selectModule(event.target.value)}
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain"
            >
              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.label}
                </option>
              ))}
            </select>
          </label>

          <div>
            <span className="text-sm font-semibold text-porcelain">
              Entreprise cliente
            </span>
            <p className="mt-3 w-full rounded-md border border-inkline bg-obsidian/40 px-4 py-3 text-porcelain">
              {selectedModule.company.name}
            </p>
            <span className="mt-2 block text-xs leading-6 text-mist">
              Déterminée par le module sélectionné.
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={createSession}
          className="mt-7 inline-flex w-full justify-center rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Créer la mission
        </button>

        {hasSession ? (
          <div className="mt-6 rounded-md border border-brass/30 bg-obsidian/35 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Lien de session
            </p>
            <p className="mt-2 text-sm leading-6 text-mist">
              Partagez ce lien : la bonne simulation s&apos;ouvre automatiquement,
              sans saisie du code.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                readOnly
                value={shareLink}
                onFocus={(event) => event.target.select()}
                className="field-focus w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-2 text-sm text-porcelain"
              />
              <button
                type="button"
                onClick={copyShareLink}
                className="whitespace-nowrap rounded-md border border-brass/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brass transition hover:bg-brass hover:text-obsidian"
              >
                {copied ? "Copié" : "Copier"}
              </button>
            </div>
          </div>
        ) : null}
        </section>

        <section className="rounded-lg border border-inkline bg-white/[0.035] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
            Attribution des mandats
          </p>
          <div className="mt-5 overflow-hidden rounded-md border border-inkline">
            <div className="grid grid-cols-[0.75fr_1fr_0.48fr_0.36fr] gap-3 bg-obsidian/45 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-mist">
              <span>Cabinet</span>
              <span>Mandat</span>
              <span>Référentiel</span>
              <span>Statut</span>
            </div>
            <div className="divide-y divide-inkline">
              {mandates.map((mandate) => (
                <article
                  key={mandate.id}
                  className="grid grid-cols-[0.75fr_1fr_0.48fr_0.36fr] items-center gap-3 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-porcelain">
                    {mandate.cabinetName}
                  </p>
                  <p className="text-sm leading-6 text-mist">{mandate.title}</p>
                  <p className="text-sm font-semibold text-brass">
                    {mandate.referential}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass">
                    Attribué
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-md border border-inkline bg-obsidian/35 p-4 text-sm leading-7 text-mist">
            Les attributions sont preparées avant la mission. Chaque cabinet
            ouvre automatiquement son mandat depuis son nom.
          </div>
        </section>
      </div>
    </div>
  );
}
