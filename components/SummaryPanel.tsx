"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { buildMarkdownSummary, downloadTextFile } from "@/lib/summary";
import { emptyRecommendation, loadRecommendation } from "@/lib/storage";
import type { Recommendation } from "@/lib/types";

const rows: Array<{ label: string; key: keyof Recommendation }> = [
  { label: "Referentiel recommande", key: "referential" },
  { label: "Justification", key: "justification" },
  { label: "Similitudes avec ISO 9001", key: "similarities" },
  { label: "Differences avec ISO 9001", key: "differences" },
  { label: "Exigences nouvelles", key: "newRequirements" },
  { label: "Impacts organisationnels", key: "organizationalImpacts" },
  { label: "Risques", key: "risks" },
  { label: "Plan d'action", key: "actionPlan" },
  { label: "Recommandation au comite de direction", key: "executiveRecommendation" }
];

const debrief = [
  "Pertinence du referentiel recommande",
  "Qualite de la justification",
  "Comprehension des ecarts avec ISO 9001",
  "Analyse des impacts organisationnels",
  "Prise en compte des risques",
  "Clarte de la recommandation au comite de direction"
];

function display(text: string) {
  return text.trim() || "A completer dans la recommandation.";
}

export function SummaryPanel() {
  const [recommendation, setRecommendation] = useState<Recommendation>(emptyRecommendation);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setRecommendation(loadRecommendation());
  }, []);

  const markdown = useMemo(
    () => buildMarkdownSummary(recommendation),
    [recommendation]
  );

  async function copySummary() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-lg p-6">
        <div className="flex flex-col justify-between gap-5 border-b border-inkline pb-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass">
              Livrable de mission
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-porcelain">
              {display(recommendation.teamName)}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={copySummary}
              className="rounded-md border border-brass/55 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brass transition hover:bg-brass/10"
            >
              {copied ? "Copie effectuee" : "Copier"}
            </button>
            <button
              type="button"
              onClick={() => downloadTextFile("arcanis-livrable.md", markdown)}
              className="rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
            >
              Export markdown
            </button>
          </div>
        </div>

        <div className="divide-y divide-inkline">
          {rows.map((row) => (
            <section key={row.key} className="grid gap-4 py-6 lg:grid-cols-[0.36fr_0.64fr]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mist">
                {row.label}
              </h3>
              <p className="whitespace-pre-wrap text-base leading-8 text-porcelain">
                {display(String(recommendation[row.key] ?? ""))}
              </p>
            </section>
          ))}
        </div>
      </div>

      <section className="rounded-lg border border-copper/35 bg-copper/10 p-6">
        <div className="flex flex-col gap-3 border-b border-copper/25 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass">
              Feedback qualitatif
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-porcelain">
              Debrief formateur
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-mist">
            Grille non chiffree pour appuyer l&apos;echange professionnel et
            qualifier la solidite du livrable.
          </p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {debrief.map((item) => (
            <div key={item} className="rounded-md border border-copper/25 bg-obsidian/35 p-4">
              <p className="text-sm font-medium text-porcelain">{item}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-mist">
                <span className="rounded border border-inkline px-2 py-2">A renforcer</span>
                <span className="rounded border border-inkline px-2 py-2">Solide</span>
                <span className="rounded border border-inkline px-2 py-2">Tres convaincant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/recommandation"
          className="rounded-md border border-inkline px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-porcelain transition hover:border-brass/55 hover:text-brass"
        >
          Ajuster la recommandation
        </Link>
        <Link
          href="/ressources"
          className="rounded-md border border-inkline px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-porcelain transition hover:border-brass/55 hover:text-brass"
        >
          Revoir les ressources
        </Link>
      </div>
    </div>
  );
}
