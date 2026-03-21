"use client";

import { useState } from "react";
import KarierniSnidaneForm, { formatDatumTermin } from "./KarierniSnidaneForm";

interface Termin {
  _id: string;
  datum: string;
  mesto: string;
  kapacita?: number;
}

interface Props {
  terminy: Termin[];
}

function formatTime(datum: string): string | null {
  if (!datum.includes("T")) return null;
  return new Date(datum).toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Prague",
  });
}

function terminValue(t: Termin): string {
  return `${formatDatumTermin(t.datum)} — ${t.mesto}`;
}

export default function TerminySelectSection({ terminy }: Props) {
  const [selectedId, setSelectedId] = useState<string>("");

  const selectedValue = terminy.find((t) => t._id === selectedId)
    ? terminValue(terminy.find((t) => t._id === selectedId)!)
    : "";

  return (
    <div id="prihlasit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — termíny + popis */}
        <div>
          <div className="divider-sky" />
          <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-6">
            Vyber si termín a místo<br />a přijď na snídani.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Rezervuj si místo jednoduše přes formulář. Brzy se ti ozveme s potvrzením a informacemi
            o místě konání. Kapacity jsou omezené, proto neváhej.
          </p>

          {terminy.length > 0 ? (
            <div>
              <p className="text-xs font-bold text-[#3fb1e1] uppercase tracking-widest mb-5">
                Aktuální termíny
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {terminy.map((t) => {
                  const d = new Date(t.datum);
                  const day = d.toLocaleDateString("cs-CZ", { day: "numeric", timeZone: "Europe/Prague" });
                  const monthName = d.toLocaleDateString("cs-CZ", { month: "long", timeZone: "Europe/Prague" });
                  const year = d.toLocaleDateString("cs-CZ", { year: "numeric", timeZone: "Europe/Prague" });
                  const time = formatTime(t.datum);
                  const isSelected = selectedId === t._id;

                  return (
                    <button
                      key={t._id}
                      type="button"
                      onClick={() => setSelectedId(isSelected ? "" : t._id)}
                      className={`group flex items-stretch gap-0 rounded-2xl overflow-hidden border text-left w-full transition-all duration-200 cursor-pointer
                        ${isSelected
                          ? "border-[#3fb1e1] shadow-md shadow-[#3fb1e1]/10"
                          : "border-gray-100 hover:border-[#3fb1e1]/50 hover:shadow-md"
                        }`}
                    >
                      {/* Datum — levý panel */}
                      <div className={`flex flex-col items-center justify-center px-4 py-4 min-w-[68px] flex-shrink-0 transition-colors duration-200
                        ${isSelected ? "bg-[#3fb1e1]" : "bg-[#142f4c] group-hover:bg-[#1a3d61]"}`}>
                        <span className={`font-black text-2xl leading-none ${isSelected ? "text-white" : "text-[#3fb1e1]"}`}>{day}</span>
                        <span className={`text-xs font-medium mt-0.5 capitalize ${isSelected ? "text-white/80" : "text-white/70"}`}>{monthName}</span>
                        <span className={`text-xs ${isSelected ? "text-white/60" : "text-white/40"}`}>{year}</span>
                      </div>

                      {/* Info — pravý panel */}
                      <div className="flex items-center flex-1 bg-white px-4 py-3 gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-black text-[#142f4c] text-sm">{t.mesto}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            {time && <span className="text-xs text-gray-400">{time}</span>}
                            {t.kapacita && (
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                {time && <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />}
                                {t.kapacita} míst
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Check indicator */}
                        <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200
                          ${isSelected ? "bg-[#3fb1e1] border-[#3fb1e1]" : "border-gray-200 group-hover:border-[#3fb1e1]/40"}`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-4 p-5 bg-[#142f4c]/5 rounded-2xl border border-[#142f4c]/10">
              <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#3fb1e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#142f4c] text-sm leading-relaxed">
                <strong className="block mb-1">Termíny brzy vypíšeme</strong>
                Sleduj nás na sociálních sítích nebo nás kontaktuj přes formulář — dáme ti vědět jako prvním.
              </p>
            </div>
          )}

        </div>

        {/* RIGHT — formulář */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-[#142f4c] mb-6">Přihláška na kariérní snídani</h3>
          <KarierniSnidaneForm terminy={terminy} preselectedTermin={selectedValue} />
        </div>

      </div>
    </div>
  );
}
