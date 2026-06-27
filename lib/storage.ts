"use client";

import type { Recommendation } from "@/lib/types";

const STORAGE_KEY = "arcanis:v0:recommendation";

export const emptyRecommendation: Recommendation = {
  teamName: "",
  referential: "",
  justification: "",
  similarities: "",
  differences: "",
  newRequirements: "",
  organizationalImpacts: "",
  risks: "",
  actionPlan: "",
  executiveRecommendation: "",
  updatedAt: ""
};

export function loadRecommendation(): Recommendation {
  if (typeof window === "undefined") {
    return emptyRecommendation;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return emptyRecommendation;
    }

    return { ...emptyRecommendation, ...JSON.parse(raw) };
  } catch {
    return emptyRecommendation;
  }
}

export function saveRecommendation(recommendation: Recommendation) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...recommendation, updatedAt: new Date().toISOString() })
  );
}

export function clearRecommendation() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}
