"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign, faCommentDots, faDatabase, faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const zdroje: { icon: IconDefinition; label: string; sublabel: string }[] = [
  { icon: faDollarSign,  label: "Provize z crossellu",     sublabel: "ostatních divizí Bidli"        },
  { icon: faCommentDots, label: "Poptávky klientů",         sublabel: "z klientské zóny"              },
  { icon: faDatabase,    label: "Databáze zájemců",         sublabel: "u realit"                      },
  { icon: faBullhorn,    label: "Marketingové kampaně",     sublabel: "na naše produkty"              },
];

export default function ZdrojeKlientu() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#142f4c] relative overflow-hidden">
      <div className="absolute inset-0 svg-bg-primary opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="divider-sky mx-auto" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Zdroje klientů</h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Více zdrojů, více příležitostí. Klienti přichází z více směrů najednou.
          </p>
        </div>

        {/* Horní linka */}
        <div className="h-px bg-white/10" />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-white/10">
          {zdroje.map((z, i) => (
            <div
              key={i}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-10 py-10 lg:py-12 relative transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="relative mb-5">
                <div
                  className="absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: "radial-gradient(circle, #3fb1e1, transparent)" }}
                />
                <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#3fb1e1]/40 group-hover:bg-white/10 transition-all duration-300">
                  <FontAwesomeIcon icon={z.icon} className="text-[#3fb1e1] text-2xl" />
                </div>
              </div>

              {/* Animovaná linka */}
              <div className="mb-3 h-0.5 bg-[#3fb1e1]/20 rounded-full overflow-hidden w-12">
                <div
                  className="h-full bg-[#3fb1e1] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: visible ? "100%" : "0%", transitionDelay: `${i * 100 + 400}ms` }}
                />
              </div>

              <p className="text-white font-bold text-base leading-snug">{z.label}</p>
              <p className="text-white/40 text-xs mt-1">{z.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Dolní linka */}
        <div className="h-px bg-white/10" />

      </div>
    </section>
  );
}
