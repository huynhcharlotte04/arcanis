"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDefaultModule } from "@/data/modules-registry";
import { getMandateByCabinetName, hasKnownCabinetName } from "@/lib/mandates";
import {
  emptyConsultantSession,
  loadConsultantSession,
  saveConsultantSession
} from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function JoinMissionPanel() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);
  const [accessRequired, setAccessRequired] = useState(false);
  const { mandates } = getDefaultModule();
  const canJoin =
    session.sessionCode.trim().length > 0 && session.cabinetName.trim().length > 0;

  useEffect(() => {
    setAccessRequired(new URLSearchParams(window.location.search).get("access") === "required");

    const storedSession = loadConsultantSession();
    const next = storedSession.cabinetName
      ? { ...storedSession, mandateId: getMandateByCabinetName(mandates, storedSession.cabinetName).id }
      : storedSession;

    setSession(next);
    if (storedSession.cabinetName) {
      saveConsultantSession(next);
    }
  }, [mandates]);

  function update(key: keyof ConsultantSession, value: string) {
    const next = { ...session, [key]: value };

    if (key === "cabinetName") {
      next.mandateId = getMandateByCabinetName(mandates, value).id;
    }

    setSession(next);
    saveConsultantSession(next);
  }

  function persistDeducedMandate() {
    const next = {
      ...session,
      mandateId: getMandateByCabinetName(mandates, session.cabinetName).id
    };

    setSession(next);
    saveConsultantSession(next);
  }

  const hasCabinet = session.cabinetName.trim().length > 0;
  const isKnownCabinet = hasKnownCabinetName(mandates, session.cabinetName);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="glass-panel rounded-lg p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
          Acces mission
        </p>
        {accessRequired ? (
          <div className="mt-5 rounded-md border border-brass/35 bg-brass/10 px-4 py-3 text-sm font-semibold leading-6 text-porcelain">
            Rejoignez une mission pour acceder a cet espace.
          </div>
        ) : null}
        <div className="mt-6 space-y-5">
          <label className="block" htmlFor="sessionCode">
            <span className="text-sm font-semibold text-porcelain">
              Code de session
            </span>
            <input
              id="sessionCode"
              value={session.sessionCode}
              onChange={(event) => update("sessionCode", event.target.value)}
              placeholder="Ex. ARCANIS-01"
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain placeholder:text-mist/55"
            />
          </label>

          <label className="block" htmlFor="cabinetName">
            <span className="text-sm font-semibold text-porcelain">
              Nom du cabinet
            </span>
            <input
              id="cabinetName"
              value={session.cabinetName}
              onChange={(event) => update("cabinetName", event.target.value)}
              placeholder="Ex. Cabinet Meridian"
              className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain placeholder:text-mist/55"
            />
          </label>
          {hasCabinet && !isKnownCabinet ? (
            <p className="rounded-md border border-brass/30 bg-brass/10 px-4 py-3 text-sm leading-6 text-mist">
              Cabinet non reconnu dans la session locale. Un mandat par defaut
              sera ouvert et confirme dans la lettre de mission.
            </p>
          ) : null}
        </div>

        {canJoin ? (
          <Link
            href="/lettre-mission"
            onClick={persistDeducedMandate}
            className="mt-7 inline-flex w-full justify-center rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
          >
            Rejoindre la mission
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="mt-7 inline-flex w-full cursor-not-allowed justify-center rounded-md border border-inkline bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-mist/60"
          >
            Rejoindre la mission
          </button>
        )}
      </section>

      <aside className="rounded-lg border border-inkline bg-white/[0.035] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
          Mandat consultant
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-porcelain">
          Vous intervenez pour le COMEX.
        </h2>
        <p className="mt-5 text-base leading-8 text-mist">
          La plateforme vous ouvre le contexte professionnel. Votre cabinet
          prepare ensuite sa position hors plateforme, comme dans une mission
          reelle.
        </p>
        <div className="mt-6 rounded-md border border-brass/25 bg-brass/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Mandat actif
          </p>
          <p className="mt-2 text-sm leading-7 text-mist">
            Le mandat de votre cabinet est prepare en amont. Il sera revele
            dans la lettre de mission.
          </p>
        </div>
      </aside>
    </div>
  );
}
