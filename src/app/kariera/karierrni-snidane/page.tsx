import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCoffee, faUsers, faComments } from "@fortawesome/free-solid-svg-icons";
import { getKarierniSnidane } from "@/lib/sanity";
import Hero from "@/components/Hero";
import TerminySelectSection from "@/components/TerminySelectSection";

export const revalidate = 0;

export const metadata: Metadata = pageMeta({
  title: "Kariérní snídaně",
  description: "Poznej nás u kávy — upřímně, otevřeně, bez pozlátek. Přijď na kariérní snídani Bidli ve svém městě a potkej se s těmi, kdo tvoří naši firmu. Registrace zdarma.",
  path: "/kariera/karierrni-snidane",
  ogImage: "/img/snidane2.jpg",
  keywords: [
    "kariérní snídaně Bidli", "kariérní akce financí", "setkání s finančními poradci",
    "kariérní event zdarma", "networking finance ČR", "info schůzka Bidli",
  ],
});

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
      <StructuredData data={[
        breadcrumbJsonLd([
          { name: "Domů", url: "/" },
          { name: "Kariéra", url: "/bidli" },
          { name: "Kariérní snídaně", url: "/kariera/karierrni-snidane" },
        ]),
        faqJsonLd([
          { question: "Co je kariérní snídaně Bidli?", answer: "Neformální setkání u kávy, kde se zájemci o kariéru v Bidli mohou ptát na cokoliv — bez závazků, bez marketingových prezentací. Proběhne ve vašem městě." },
          { question: "Kolik kariérní snídaně stojí?", answer: "Kariérní snídaně Bidli je zcela zdarma. Stačí se registrovat a přijít." },
          { question: "Ve kterých městech probíhá kariérní snídaně?", answer: "Kariérní snídaně probíhají ve více městech po celé České republice — Praha, Brno, Ostrava, Pardubice a další. Aktuální termíny jsou k dispozici na webu." },
        ]),
      ]} />
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

        {/* TERMÍNY + FORMULÁŘ */}
        <TerminySelectSection terminy={terminy} />

      </section>
    </>
  );
}
