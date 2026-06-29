"use client";

import { useEffect, useMemo, useState } from "react";
import { simulation } from "@/data/mission";
import { getMandateById } from "@/lib/mandates";
import {
  emptyConsultantSession,
  loadConsultantSession,
  loadTriggeredEventIds
} from "@/lib/storage";
import type { ConsultantSession, MailMessage } from "@/lib/types";

export function MailInbox() {
  const [triggeredIds, setTriggeredIds] = useState<string[]>([]);
  const [session, setSession] = useState<ConsultantSession>(emptyConsultantSession);

  useEffect(() => {
    setTriggeredIds(loadTriggeredEventIds());
    setSession(loadConsultantSession());
  }, []);

  const messages = useMemo<MailMessage[]>(() => {
    const mandate = getMandateById(session.mandateId);
    const triggeredMessages = simulation.preparedEvents
      .filter((event) => triggeredIds.includes(event.id))
      .map((event) => ({
        id: event.id,
        sender: event.sender,
        role: event.role,
        subject: event.subject,
        preview: event.summary,
        receivedAt: event.simulatedTime,
        body: event.body,
        isNew: true
      }));

    return [...simulation.messages, ...mandate.specificMessages, ...triggeredMessages].sort((a, b) =>
      a.receivedAt.localeCompare(b.receivedAt)
    );
  }, [session.mandateId, triggeredIds]);

  const [selectedId, setSelectedId] = useState(simulation.messages[0]?.id ?? "");
  const selected = messages.find((message) => message.id === selectedId) ?? messages[0];

  useEffect(() => {
    if (!selectedId && messages[0]) {
      setSelectedId(messages[0].id);
    }
  }, [messages, selectedId]);

  return (
    <div className="grid min-h-[560px] overflow-hidden rounded-lg border border-inkline bg-white/[0.035] lg:grid-cols-[0.42fr_0.58fr]">
      <aside className="border-b border-inkline lg:border-b-0 lg:border-r">
        <div className="border-b border-inkline p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Boite de reception
          </p>
        </div>
        <div className="divide-y divide-inkline">
          {messages.map((message) => (
            <button
              key={message.id}
              type="button"
              onClick={() => setSelectedId(message.id)}
              className={`block w-full p-4 text-left transition ${
                message.id === selectedId
                  ? "bg-brass/12"
                  : "hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-porcelain">
                  {message.sender}
                </p>
                <span className="text-xs text-mist">{message.receivedAt}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.16em] text-brass">
                  {message.role}
                </p>
                {message.isNew ? (
                  <span className="rounded-full border border-brass/45 bg-brass/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brass">
                    Nouveau
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm font-medium text-porcelain">
                {message.subject}
              </p>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-mist">
                {message.preview}
              </p>
            </button>
          ))}
        </div>
      </aside>

      <section className="p-6 sm:p-8">
        {selected ? (
          <>
            <div className="border-b border-inkline pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">
                {selected.receivedAt} - {selected.role}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-porcelain">
                {selected.subject}
              </h2>
              <p className="mt-3 text-sm text-brass">{selected.sender}</p>
            </div>
            <div className="mt-6 space-y-5 text-base leading-8 text-mist">
              {selected.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}
