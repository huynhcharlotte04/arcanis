"use client";

import { useEffect, useState } from "react";
import { getDefaultModule } from "@/data/modules-registry";
import { getDocumentsForMission, groupDocumentsByCategory } from "@/lib/documents";
import { getMandateById } from "@/lib/mandates";
import { emptyConsultantSession, loadConsultantSession } from "@/lib/storage";
import type { ConsultantSession } from "@/lib/types";

export function DocumentCenter() {
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setSession(loadConsultantSession());
  }, []);

  const activeModule = getDefaultModule();
  const mandate = getMandateById(activeModule.mandates, session.mandateId);
  const folders = groupDocumentsByCategory(
    getDocumentsForMission({
      missionId: activeModule.missionId,
      mandateId: mandate.id,
      visibility: "Consultant"
    })
  );

  return (
    <div className="overflow-hidden rounded-lg border border-inkline bg-white/[0.035]">
      <div className="border-b border-inkline bg-obsidian/45 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Mission 001 / {mandate.referential.replace(/\s/g, "")}
        </p>
        <p className="mt-2 text-sm leading-6 text-mist">
          Documents ouverts pour le mandat {mandate.sector}.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_0.7fr_0.28fr_0.34fr_0.28fr] gap-4 border-b border-inkline bg-obsidian/45 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist">
          <span>Document</span>
          <span>Service proprietaire</span>
          <span>Type</span>
          <span>Date</span>
          <span className="text-right">Acces</span>
      </div>

      <div className="divide-y divide-inkline">
        {folders.map((folder) => (
          <section key={folder.name}>
            <div className="bg-brass/10 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                {folder.name}
              </p>
            </div>

            <div className="divide-y divide-inkline">
              {folder.documents.map((document) => (
                <article
                  key={document.href}
                  className="grid grid-cols-[1fr_0.7fr_0.28fr_0.34fr_0.28fr] items-center gap-4 px-5 py-4 transition hover:bg-white/[0.035]"
                >
                  <div>
                    <p className="font-semibold text-porcelain">{document.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mist">
                      {document.classification}
                      {document.version ? ` - v${document.version}` : ""}
                    </p>
                    {document.description ? (
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
                        {document.description}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-sm text-mist">{document.owner}</p>
                  <p className="text-sm font-semibold text-porcelain">
                    {document.type}
                  </p>
                  <p className="text-sm text-mist">{document.date}</p>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className="justify-self-end rounded-md border border-brass/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brass transition hover:bg-brass hover:text-obsidian"
                  >
                    Ouvrir
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
