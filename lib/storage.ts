"use client";

import type { ConsultantSession, TrainerSession } from "@/lib/types";

const CONSULTANT_STORAGE_KEY = "arcanis:v1:consultant-session";
const TRAINER_STORAGE_KEY = "arcanis:v1:trainer-session";

export const emptyConsultantSession: ConsultantSession = {
  sessionCode: "",
  cabinetName: "",
  updatedAt: ""
};

export const defaultTrainerSession: TrainerSession = {
  promotionName: "MS QSE",
  moduleName: "Autres referentiels",
  clientCompany: "ARCANIS Industries",
  sessionCode: "",
  createdAt: "",
  updatedAt: ""
};

export function loadConsultantSession(): ConsultantSession {
  if (typeof window === "undefined") {
    return emptyConsultantSession;
  }

  try {
    const raw = window.localStorage.getItem(CONSULTANT_STORAGE_KEY);
    if (!raw) {
      return emptyConsultantSession;
    }

    return { ...emptyConsultantSession, ...JSON.parse(raw) };
  } catch {
    return emptyConsultantSession;
  }
}

export function saveConsultantSession(session: ConsultantSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    CONSULTANT_STORAGE_KEY,
    JSON.stringify({ ...session, updatedAt: new Date().toISOString() })
  );
}

export function loadTrainerSession(): TrainerSession {
  if (typeof window === "undefined") {
    return defaultTrainerSession;
  }

  try {
    const raw = window.localStorage.getItem(TRAINER_STORAGE_KEY);
    if (!raw) {
      return defaultTrainerSession;
    }

    return { ...defaultTrainerSession, ...JSON.parse(raw) };
  } catch {
    return defaultTrainerSession;
  }
}

export function saveTrainerSession(session: TrainerSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    TRAINER_STORAGE_KEY,
    JSON.stringify({ ...session, updatedAt: new Date().toISOString() })
  );
}

export function clearConsultantSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CONSULTANT_STORAGE_KEY);
}
