"use client";

import { useState } from "react";
import { simulation } from "@/data/mission";

export function MailInbox() {
  const [selectedId, setSelectedId] = useState(simulation.messages[0]?.id ?? "");
  const selected = simulation.messages.find((message) => message.id === selectedId);

  return (
    <div className="grid min-h-[560px] overflow-hidden rounded-lg border border-inkline bg-white/[0.035] lg:grid-cols-[0.42fr_0.58fr]">
      <aside className="border-b border-inkline lg:border-b-0 lg:border-r">
        <div className="border-b border-inkline p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Boite de reception
          </p>
        </div>
        <div className="divide-y divide-inkline">
          {simulation.messages.map((message) => (
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
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brass">
                {message.role}
              </p>
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
