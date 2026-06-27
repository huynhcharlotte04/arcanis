"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { emptyRecommendation, loadRecommendation, saveRecommendation } from "@/lib/storage";

const presets = ["Cabinet Atlas", "Equipe Meridian", "Collectif Nexus", "Mission Orbis"];

export function TeamSelector() {
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    setTeamName(loadRecommendation().teamName);
  }, []);

  function persist(name: string) {
    setTeamName(name);
    const current = loadRecommendation();
    saveRecommendation({ ...emptyRecommendation, ...current, teamName: name });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-panel rounded-lg p-6">
        <label className="text-sm font-semibold text-porcelain" htmlFor="teamName">
          Nom de l&apos;equipe de consultants
        </label>
        <input
          id="teamName"
          value={teamName}
          onChange={(event) => persist(event.target.value)}
          placeholder="Ex. Cabinet Atlas"
          className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain placeholder:text-mist/55"
        />
        <p className="mt-4 text-sm leading-7 text-mist">
          Ce nom apparaitra dans le livrable de synthese. Il reste enregistre
          dans ce navigateur pour la duree de la mission.
        </p>
        <Link
          href="/entreprise"
          className="mt-6 inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Continuer
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {presets.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => persist(preset)}
            className={`rounded-lg border p-5 text-left transition ${
              teamName === preset
                ? "border-brass/70 bg-brass/15"
                : "border-inkline bg-white/[0.03] hover:border-brass/45"
            }`}
          >
            <span className="text-sm font-semibold text-porcelain">
              {preset}
            </span>
            <span className="mt-3 block text-sm leading-6 text-mist">
              Selection rapide pour lancer le mandat sans friction.
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
