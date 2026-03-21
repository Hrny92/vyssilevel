"use client";

import { useEffect, useRef, useState } from "react";
import type { BidliStat } from "@/lib/sanity";

function useCountUp(target: number, decimals = 0, duration = 1800, started: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, decimals, duration, started]);

  return value;
}

function StatItem({ stat, started, index }: { stat: BidliStat; started: boolean; index: number }) {
  const decimals = stat.decimals ?? 0;
  const count = useCountUp(stat.num, decimals, 1800 + index * 100, started);

  const formatted = decimals > 0
    ? count.toFixed(decimals).replace(".", ",")
    : count.toLocaleString("cs-CZ");

  return (
    <div className="group flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-10 py-10 lg:py-0 relative">
      {/* Vertikální dělicí čára (pouze mezi položkami na desktopu) */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />

      {/* Animované číslo */}
      <div className="relative">
        {/* Dekorativní záblesk za číslem */}
        <div
          className="absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{ background: "radial-gradient(circle, #3fb1e1, transparent)" }}
        />
        <p
          className="relative text-5xl md:text-6xl font-black text-white leading-none tracking-tight transition-all duration-300 whitespace-nowrap"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {formatted}
          {stat.suffix && (
            <span className="text-[#3fb1e1] text-2xl md:text-3xl font-bold ml-1 align-baseline">
              {stat.suffix}
            </span>
          )}
        </p>
      </div>

      {/* Animovaná linka pod číslem */}
      <div className="mt-4 mb-3 h-0.5 bg-[#3fb1e1]/40 rounded-full overflow-hidden w-12">
        <div
          className="h-full bg-[#3fb1e1] rounded-full transition-all duration-1000 ease-out"
          style={{ width: started ? "100%" : "0%", transitionDelay: `${index * 150 + 400}ms` }}
        />
      </div>

      <p className="text-white font-bold text-sm">{stat.label}</p>
      {stat.sublabel && <p className="text-white/40 text-xs mt-1">{stat.sublabel}</p>}
    </div>
  );
}

interface StatsCounterProps {
  stats: BidliStat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Dekorativní číslo v pozadí — vezme suffix první stat nebo "+"
  const bgNumber = stats[0]
    ? `${Math.round(stats[0].num)}${stats[0].suffix ?? ""}+`
    : "22+";

  return (
    <section className="py-20 md:py-28 bg-[#142f4c] relative overflow-hidden">
      <div className="absolute inset-0 svg-bg-primary opacity-5" />

      {/* Dekorativní velké číslo v pozadí */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[220px] font-black text-white/[0.025] leading-none select-none pointer-events-none hidden lg:block"
        aria-hidden
      >
        {bgNumber}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="divider-sky mx-auto" />
          <h2 className="text-3xl md:text-4xl font-black text-white">Bidli v číslech</h2>
          <p className="text-white/40 text-sm mt-3">Výsledky, které mluví samy za sebe.</p>
        </div>

        {/* Horní linka */}
        <div className="h-px bg-white/10 mb-0" />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-white/10"
        >
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} started={started} index={i} />
          ))}
        </div>

        {/* Dolní linka */}
        <div className="h-px bg-white/10 mt-0" />
      </div>
    </section>
  );
}
