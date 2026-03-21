import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCoffee, faUsers, faComments } from "@fortawesome/free-solid-svg-icons";
import { BidliPiktogram } from "@/components/BidliLogo";
import { getKarierniSnidane } from "@/lib/sanity";
import KarierniSnidaneForm from "@/components/KarierniSnidaneForm";
import Hero from "@/components/Hero";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Kariérní snídaně",
  description: "Poznej nás u kávy. Upřímně, otevřeně, bez pozlátek. Přijď na kariérní snídani a potkej se s těmi, kdo tvoří Bidli.",
};

const vyhody = [
  {
    icon: faCoffee,
    title: "Neformální atmosféra",
    desc: "Žádné prezentace s grafy. Jen lidé, kteří otevřeně mluví o tom, jak to u nás skutečně funguje.",
  },
  {
    icon: faUsers,
    title: "Potkaš management i terén",
    desc: "Od ředitelů po kolegy z terénu – získáš pohled ze všech úhlů a uděláš si vlastní obrázek.",
  },
  {
    icon: faComments,
    title: "Zeptej se na cokoliv",
    desc: "Kariérní růst, odměňování, kultura firmy – na kariérní snídani není špatná otázka.",
  },
];

export default async function KarierniSnidane() {
  const terminy = await getKarierniSnidane();

  return (
    <>
      <Hero
        image="/img/snidane2.jpg"
        label="Kariéra"
        title={<>Kariérní</>}
        titleAccent="snídaně"
        subtitle="Přijď, posaď se, dej si kávu a zeptej se na cokoliv."
      >
        <a href="#prihlasit" className="btn-primary">
          Vybrat termín <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </Hero>

      <section className="py-20 md:py-28 bg-white">

        {/* BENTO GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

            {/* Foto — 2×3 vlevo */}
            <div className="col-span-2 row-span-3 relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/img/snidane1.jpg"
                alt="Kariérní snídaně Bidli"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-black text-xl leading-tight">Přijď,<br />posaď se, dej si kávu.</p>
                <p className="text-white/70 text-sm mt-2">Zeptej se na cokoliv.</p>
              </div>
            </div>

            {/* Heading tile — 2×1 navy */}
            <div className="col-span-2 rounded-2xl bg-[#142f4c] p-6 flex flex-col justify-center">
              <div className="divider-sky" />
              <h2 className="text-xl md:text-2xl font-black text-white leading-snug">
                Chcete posunout kariéru<br />na vyšší level?
              </h2>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Nečekej prezentaci s grafy — čekej lidi s otevřenými odpověďmi.
              </p>
            </div>

            {/* Feature 1 — 1×1 */}
            <div className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center">
                <FontAwesomeIcon icon={vyhody[0].icon} className="text-[#3fb1e1] text-sm" />
              </div>
              <div>
                <p className="text-[#142f4c] font-bold text-sm leading-snug">{vyhody[0].title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-3">{vyhody[0].desc}</p>
              </div>
            </div>

            {/* Feature 2 — 1×1 */}
            <div className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center">
                <FontAwesomeIcon icon={vyhody[1].icon} className="text-[#3fb1e1] text-sm" />
              </div>
              <div>
                <p className="text-[#142f4c] font-bold text-sm leading-snug">{vyhody[1].title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-3">{vyhody[1].desc}</p>
              </div>
            </div>

            {/* Feature 3 — 2×1 wide */}
            <div className="col-span-2 rounded-2xl bg-white border border-gray-100 px-6 py-5 hover:shadow-md transition-all duration-200 flex items-center gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={vyhody[2].icon} className="text-[#3fb1e1] text-base" />
              </div>
              <div>
                <p className="text-[#142f4c] font-bold text-sm leading-snug">{vyhody[2].title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{vyhody[2].desc}</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORMULÁŘ — plynule navazuje */}
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
                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#3fb1e1] uppercase tracking-widest mb-5">
                    Aktuální termíny
                  </p>
                  {terminy.map((t) => {
                    const d = new Date(t.datum);
                    const day = d.getDate();
                    const monthName = d.toLocaleDateString("cs-CZ", { month: "long" });
                    const year = d.getFullYear();
                    const time = t.datum.includes("T")
                      ? d.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })
                      : null;
                    return (
                      <div key={t._id} className="group flex items-stretch gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:border-[#3fb1e1]/40 hover:shadow-md transition-all duration-200">
                        {/* Datum — levý panel */}
                        <div className="bg-[#142f4c] flex flex-col items-center justify-center px-5 py-4 min-w-[80px] flex-shrink-0">
                          <span className="text-[#3fb1e1] font-black text-3xl leading-none">{day}</span>
                          <span className="text-white/70 text-xs font-medium mt-0.5 capitalize">{monthName}</span>
                          <span className="text-white/40 text-xs">{year}</span>
                        </div>
                        {/* Info — pravý panel */}
                        <div className="flex items-center justify-between flex-1 bg-white px-5 py-4 gap-4">
                          <div>
                            <p className="font-black text-[#142f4c] text-base">{t.mesto}</p>
                            <div className="flex items-center gap-3 mt-1">
                              {time && (
                                <span className="text-xs text-gray-400">{time}</span>
                              )}
                              {t.kapacita && (
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                                  {t.kapacita} míst
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#3fb1e1]/10 group-hover:bg-[#3fb1e1] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                            <svg className="w-3.5 h-3.5 text-[#3fb1e1] group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
              <KarierniSnidaneForm terminy={terminy} />
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
