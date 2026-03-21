import type { Metadata } from "next";
import { BidliPiktogram } from "@/components/BidliLogo";
import KontaktForm from "@/components/KontaktForm";
import Hero from "@/components/Hero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Čas posunout kariéru na vyšší level? Zanechte nám telefonní číslo a my se vám ozveme.",
};

const duvoды = [
  { number: "01", text: "Ozveme se ti do 24 hodin" },
  { number: "02", text: "Bezplatná kariérní konzultace" },
  { number: "03", text: "Žádné závazky, jen otevřený rozhovor" },
];

export default function Kontakt() {
  return (
    <>
      <Hero
        image="/img/hero-image2.jpg"
        title={<>Čas posunout kariéru</>}
        titleAccent="na vyšší level?"
        subtitle="Zanech nám telefonní číslo a my se ti ozveme do 24 hodin."
      />

      {/* FORM SECTION */}
      <section id="contactform" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT — info */}
            <div>
              <div className="divider-sky mx-auto" />
              <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-6">
                Napiš nám — ozveme se
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Stačí vyplnit formulář. Poradíme ti, která pozice je pro tebe vhodná, a zodpovíme
                všechny otázky bez závazků a bez tlaku.
              </p>

              <div className="space-y-6">
                {duvoды.map((d) => (
                  <div key={d.number} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#3fb1e1] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{d.number}</span>
                    </div>
                    <p className="text-[#142f4c] font-semibold">{d.text}</p>
                  </div>
                ))}
              </div>

              {/* Dekorativní piktogram */}
              <div className="mt-16 flex gap-6 opacity-10">
                <BidliPiktogram className="w-24 h-24" color="#142f4c" />
                <BidliPiktogram className="w-16 h-16 self-end" color="#3fb1e1" />
              </div>
            </div>

            {/* RIGHT — formulář */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#142f4c] mb-6">Kontaktní formulář</h3>
              <KontaktForm />
            </div>
          </div>
        </div>
      </section>

      {/* CITACE SECTION */}
      <CtaBanner>
        <p className="text-xl md:text-2xl font-semibold text-white/90 italic mb-4">
          „V Bidli nehledáme průměr. Hledáme lidi, kteří chtějí růst
          a ukázat, co v nich skutečně je."
        </p>
        <p className="text-[#3fb1e1] font-bold">Marián Süttö, obchodní ředitel Bidli</p>
      </CtaBanner>
    </>
  );
}
