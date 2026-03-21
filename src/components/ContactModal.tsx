"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContactModal } from "@/context/ContactModalContext";
import KontaktForm from "@/components/KontaktForm";
import { BidliPiktogram } from "@/components/BidliLogo";

const duvody = [
  { number: "01", text: "Ozveme se ti do 24 hodin" },
  { number: "02", text: "Bezplatná kariérní konzultace" },
  { number: "03", text: "Žádné závazky, jen otevřený rozhovor" },
];

export default function ContactModal() {
  const { isOpen, close } = useContactModal();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0d1f32]/70 backdrop-blur-sm"
        onClick={close}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">

        {/* Zavřít */}
        <button
          onClick={close}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Zavřít"
        >
          <FontAwesomeIcon icon={faXmark} className="text-gray-500 text-sm" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEVÁ — info, navy pozadí */}
          <div className="bg-[#142f4c] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-10 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="divider-sky" />
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Napiš nám —<br />ozveme se
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                Stačí vyplnit formulář. Poradíme ti, která pozice je pro tebe
                vhodná, a zodpovíme všechny otázky bez závazků a bez tlaku.
              </p>

              <div className="space-y-5">
                {duvody.map((d) => (
                  <div key={d.number} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#3fb1e1] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-xs">{d.number}</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dekorativní piktogram */}
            <div className="mt-10 flex gap-4 opacity-10">
              <BidliPiktogram className="w-16 h-16" color="white" />
            </div>
          </div>

          {/* PRAVÁ — formulář */}
          <div className="p-10">
            <h3 className="text-lg font-black text-[#142f4c] mb-6">Kontaktní formulář</h3>
            <KontaktForm onSuccess={close} />
          </div>

        </div>
      </div>
    </div>
  );
}
