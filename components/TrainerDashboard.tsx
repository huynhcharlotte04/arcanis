"use client";

import { useEffect, useState } from "react";
import { mandates } from "@/data/mission";
import {
  defaultTrainerSession,
  loadTrainerSession,
  saveTrainerSession
} from "@/lib/storage";
import type { TrainerSession } from "@/lib/types";

function generateSessionCode() {
  return `AR-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function TrainerDashboard() {
  const [session, setSession] = useState<TrainerSession>(defaultTrainerSession);
  const hasSession = session.sessionCode.trim().length > 0;

  useEffect(() => {
    setSession(loadTrainerSession());
  }, []);

  function update(key: keyof TrainerSession, value: string) {
    const next = { ...session, [key]: value };
    setSession(next);
    saveTrainerSession(next);
  }

  function createSession() {
    const now = new Date().toISOString();
    const next = {
      ...session,
      sessionCode: generateSessionCode(),
      createdAt: session.createdAt || now,
      updatedAt: now
    };
    setSession(next);
    saveTrainerSession(next);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <section className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5 border-b border-inkline pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Preparation locale
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

          <label className="block" htmlFor="moduleName">
            <span className="text-sm font-semibold text-porcelain">
              Module
            </span>
            <input
              id="moduleName"
              value={session.moduleName}
              onChange={(event) => update("moduleName", event.target.value)}
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain"
            />
          </label>

          <label className="block" htmlFor="clientCompany">
            <span className="text-sm font-semibold text-porcelain">
              Entreprise cliente
            </span>
            <input
              id="clientCompany"
              value={session.clientCompany}
              onChange={(event) => update("clientCompany", event.target.value)}
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={createSession}
          className="mt-7 inline-flex w-full justify-center rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Creer la mission
        </button>
      </section>

      <section className="rounded-lg border border-inkline bg-white/[0.035] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
          Mandats disponibles
        </p>
        <div className="mt-5 divide-y divide-inkline">
          {mandates.map((mandate) => (
            <article
              key={mandate.cabinetName}
              className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <h3 className="text-lg font-semibold text-porcelain">
                {mandate.cabinetName}
              </h3>
              <p className="rounded-md border border-copper/35 bg-copper/10 px-3 py-2 text-sm font-semibold text-brass">
                {mandate.referential}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-md border border-inkline bg-obsidian/35 p-4 text-sm leading-7 text-mist">
          Les mandats sont statiques pour cette release. La mission reste
          pilotee localement depuis ce navigateur.
        </div>
      </section>
    </div>
  );
}
