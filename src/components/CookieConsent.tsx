"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CookiePrefs = {
  analytics: boolean;
  personalization: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "bidli_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    analytics: false,
    personalization: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setShow(true);

    // Listen for "manage cookies" trigger from footer
    const handleManage = () => {
      setShowSettings(true);
      setShow(true);
    };
    document.getElementById("manage-cookie-prefs")?.addEventListener("click", handleManage);
    return () => {
      document.getElementById("manage-cookie-prefs")?.removeEventListener("click", handleManage);
    };
  }, []);

  const acceptAll = () => {
    const all = { analytics: true, personalization: true, marketing: true };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(all));
    setShow(false);
  };

  const acceptEssential = () => {
    const essential = { analytics: false, personalization: false, marketing: false };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(essential));
    setShow(false);
  };

  const savePrefs = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setShow(false);
    setShowSettings(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay for settings modal */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Main banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#142f4c] border-t-2 border-[#3fb1e1]/30
          px-4 py-5 shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-1">
                Ať vám vše funguje jak má
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Používáme cookies pro personalizaci obsahu a analýzu návštěvnosti.
                Více v{" "}
                <Link href="https://www.bidli.cz/informace-o-webu/" target="_blank" rel="noopener noreferrer" className="text-[#3fb1e1] hover:underline">
                  Zásadách používání souborů cookie
                </Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2.5 rounded-xl border border-white/20 text-white/70 text-sm
                  hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Upravit nastavení
              </button>
              <button
                onClick={acceptEssential}
                className="px-4 py-2.5 rounded-xl border border-white/20 text-white/70 text-sm
                  hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Pouze nezbytné
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 rounded-xl bg-[#3fb1e1] text-white font-semibold text-sm
                  hover:bg-[#2a8eb8] transition-all duration-200"
              >
                Povolit vše
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[70] max-w-lg mx-auto
          bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[#142f4c] to-[#3fb1e1]" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#142f4c] font-bold text-lg">Nastavení cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center
                  justify-center text-gray-500 transition-colors text-lg"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Always active */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-[#142f4c] font-semibold text-sm">Nezbytné technologie</p>
                  <p className="text-gray-500 text-xs mt-0.5">Vždy zapnuté</p>
                </div>
                <span className="text-[#3fb1e1] text-xs font-bold bg-[#3fb1e1]/10 px-3 py-1 rounded-full">
                  Vždy aktivní
                </span>
              </div>

              {(["analytics", "personalization", "marketing"] as const).map((cat) => {
                const labels: Record<string, string> = {
                  analytics: "Analytické funkce",
                  personalization: "Personalizace",
                  marketing: "Marketing",
                };
                return (
                  <div key={cat} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <p className="text-[#142f4c] font-semibold text-sm">{labels[cat]}</p>
                    <label className="cookie-switch">
                      <input
                        type="checkbox"
                        checked={prefs[cat]}
                        onChange={(e) => setPrefs({ ...prefs, [cat]: e.target.checked })}
                      />
                      <span className="cookie-slider" />
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-2 mt-5">
              <button
                onClick={acceptEssential}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm
                  hover:border-gray-300 transition-all"
              >
                Pouze nezbytné
              </button>
              <button
                onClick={savePrefs}
                className="flex-1 py-2.5 rounded-xl bg-[#142f4c] text-white font-semibold text-sm
                  hover:bg-[#1e4a72] transition-all"
              >
                Uložit nastavení
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 py-2.5 rounded-xl bg-[#3fb1e1] text-white font-semibold text-sm
                  hover:bg-[#2a8eb8] transition-all"
              >
                Povolit vše
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
