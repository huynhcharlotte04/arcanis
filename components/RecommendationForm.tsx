"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { referentials } from "@/data/referentials";
import { emptyRecommendation, loadRecommendation, saveRecommendation } from "@/lib/storage";
import type { Recommendation } from "@/lib/types";

const fields: Array<{
  key: keyof Recommendation;
  label: string;
  hint: string;
  rows: number;
}> = [
  {
    key: "justification",
    label: "Justification",
    hint: "Expliquez pourquoi ce referentiel repond au contexte et aux objectifs de diversification.",
    rows: 5
  },
  {
    key: "similarities",
    label: "Similitudes avec ISO 9001",
    hint: "Identifiez les logiques deja connues : processus, amelioration, pilotage, preuves.",
    rows: 4
  },
  {
    key: "differences",
    label: "Differences avec ISO 9001",
    hint: "Mettez en evidence ce que le referentiel ajoute ou transforme.",
    rows: 4
  },
  {
    key: "newRequirements",
    label: "Exigences nouvelles",
    hint: "Precisez les exigences nouvelles qui pourraient demander des preuves, roles ou methodes supplementaires.",
    rows: 4
  },
  {
    key: "organizationalImpacts",
    label: "Impacts organisationnels",
    hint: "Analysez les impacts sur les processus, responsabilites, competences et rituels de pilotage.",
    rows: 4
  },
  {
    key: "risks",
    label: "Risques",
    hint: "Listez les risques de choix, de deploiement, d'adhesion ou de performance.",
    rows: 4
  },
  {
    key: "actionPlan",
    label: "Plan d'action",
    hint: "Proposez une trajectoire realiste : priorites, jalons, acteurs, preuves attendues.",
    rows: 5
  },
  {
    key: "executiveRecommendation",
    label: "Recommandation au comite de direction",
    hint: "Formulez une decision claire et defendable pour le comite de direction.",
    rows: 5
  }
];

export function RecommendationForm() {
  const [form, setForm] = useState<Recommendation>(emptyRecommendation);

  useEffect(() => {
    setForm(loadRecommendation());
  }, []);

  function update(key: keyof Recommendation, value: string) {
    const next = { ...form, [key]: value };
    setForm(next);
    saveRecommendation(next);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="h-fit rounded-lg border border-inkline bg-white/[0.03] p-5 lg:sticky lg:top-6">
        <p className="text-xs uppercase tracking-[0.24em] text-brass">
          Decision cible
        </p>
        <label className="mt-5 block text-sm font-semibold text-porcelain" htmlFor="referential">
          Referentiel recommande
        </label>
        <select
          id="referential"
          value={form.referential}
          onChange={(event) => update("referential", event.target.value)}
          className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian px-4 py-3 text-porcelain"
        >
          <option value="">Selectionner un referentiel</option>
          {referentials.map((referential) => (
            <option key={referential} value={referential}>
              {referential}
            </option>
          ))}
        </select>
        <label className="mt-5 block text-sm font-semibold text-porcelain" htmlFor="teamName">
          Equipe
        </label>
        <input
          id="teamName"
          value={form.teamName}
          onChange={(event) => update("teamName", event.target.value)}
          className="field-focus mt-3 w-full rounded-md border border-inkline bg-obsidian/70 px-4 py-3 text-porcelain"
        />
        <p className="mt-5 text-sm leading-7 text-mist">
          Les reponses sont sauvegardees automatiquement dans ce navigateur.
        </p>
        <Link
          href="/synthese"
          className="mt-6 inline-flex w-full justify-center rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Generer la synthese
        </Link>
      </aside>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.key} className="glass-panel rounded-lg p-5">
            <label className="text-sm font-semibold text-porcelain" htmlFor={field.key}>
              {field.label}
            </label>
            <p className="mt-2 text-sm leading-6 text-mist">{field.hint}</p>
            <textarea
              id={field.key}
              value={String(form[field.key] ?? "")}
              onChange={(event) => update(field.key, event.target.value)}
              rows={field.rows}
              className="field-focus mt-4 w-full resize-y rounded-md border border-inkline bg-obsidian/72 px-4 py-3 text-sm leading-7 text-porcelain placeholder:text-mist/50"
              placeholder="Saisir l'analyse professionnelle..."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
