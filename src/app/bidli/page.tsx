import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { pageMeta, breadcrumbJsonLd, SITE } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck, faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { BidliPiktogram } from "@/components/BidliLogo";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ContactButton";
import CtaBanner from "@/components/CtaBanner";
import StatsCounter from "@/components/StatsCounter";
import { getBidliStats } from "@/lib/sanity";

export const revalidate = 0;

export const metadata: Metadata = pageMeta({
  title: "O Bidli",
  description: "Silný příběh, stabilní zázemí, neomezené možnosti. Přes 20 let na trhu, 30+ poboček po celé České republice. Finance, reality, energetika a pojišťovnictví pod jednou střechou.",
  path: "/bidli",
  ogImage: "/img/hero-image2.jpg",
  keywords: ["o Bidli", "Bidli holding", "finanční poradenství ČR", "pobočky Bidli", "stabilní zázemí"],
});

const procBidliBody = [
  { bold: "Silné zázemí", text: "přes 20 let zkušeností, stabilní značka, více než 30 poboček po ČR." },
  { bold: "Nejkomplexnější služby", text: "finance, reality, energie, fotovoltaika, development. Všechno pod jednou střechou." },
  { bold: "Družstevní bydlení", text: "unikátní produkt, díky kterému si lidé mohou pořídit vlastní domov i bez hypotéky." },
  { bold: "Investiční fond Bidli", text: "možnost podílet se na zajímavých investičních projektech." },
  { bold: "Technologie a digitalizace", text: "Klientská zóna, kde mají klienti všechny smlouvy z financí i energetiky na jednom místě." },
  { bold: "Obchodní příležitosti pro poradce", text: "díky propojení všech našich divizí vám plynou provize z více zdrojů." },
  { bold: "Dlouhodobá vize", text: "nespoléháme jen na trendy, budujeme firmu, která tu bude i za dalších 20 let." },
];

const teamMain = [
  {
    name: "Jiří Lejnar",
    role: "Výkonný ředitel\nBidli holding",
    quote: "Nejdůležitější nejsou čísla, ale lidé, kteří za nimi stojí.",
    desc: "Jiří Lejnar, předseda a výkonný ředitel Bidli holding, s 20+ lety praxe vede firmu k úspěchu díky komplexním službám v oblasti bydlení a neustálým inovacím.",
    img: "/img/lejnar2.jpg",
  },
  {
    name: "Marian Süttö",
    role: "Obchodní ředitel\nBidli holding",
    quote: "Nejdůležitější nejsou čísla, ale lidé, kteří za nimi stojí.",
    desc: "Marián vede v Bidli obchodní síť napříč všemi divizemi a vytváří prostředí zaměřené na důvěru, kompetence a podporu.",
    img: "/img/Sutto2.jpg",
  },
  {
    name: "Daniel Horňák",
    role: "Strategický manažer,\nspecialista na bankovní produkty",
    quote: "Nejdůležitější nejsou čísla, ale lidé, kteří za nimi stojí.",
    desc: "Ve světě financí se pohybuje 18 let a v úvěrech má za sebou objem přes 4,5 MLD korun.",
    img: "/img/hornak2.jpg",
  },
  {
    name: "Aneta Klečková",
    role: "Strategická manažerka,\nspecialistka na pojištění",
    quote: "Nejdůležitější nejsou čísla, ale lidé, kteří za nimi stojí.",
    desc: "V oblasti poradenství působí od roku 2009, věnuje se oblasti pojištění s přesahem do komplexního poradenství.",
    img: "/img/Kleckova3.jpg",
  },
];

const teamOther = [
  { name: "Martina Malečková Pařízková", role: "Ředitelka Bidli finance, oddělení compliance.", img: "/img/Maleckova2.jpg" },
  { name: "Dana Klimeschová", role: "Finanční ředitelka Bidli holding", img: "/img/Klimeschova2.jpg" },
  { name: "Daniel Klika", role: "Finanční analytik, tvorba finančních plánů", img: "/img/Klika2.jpg" },
  { name: "David Sybol", role: "Specialista produktové podpory a controllingu", img: "/img/Sybol2.jpg" },
  { name: "Barbora Sýkorová", role: "Asistentka divize finance a poradenství", img: "/img/Sykorova2.jpg" },
  { name: "Miroslav Hrnčíř", role: "IT podpora", img: "/img/MHrncir2.jpg" },
];

const departments = [
  {
    title: "Oddělení podpory, evidence a správa obchodu, provizní oddělení",
    people: [
      { name: "Dominika Kúdelová", role: "Manažerka podpory a finance", img: "/img/Kudelova2.jpg" },
      { name: "Alena Jíchová", role: "Garant provizních závěrek", img: "/img/Jichova2.jpg" },
      { name: "Jana Schejbalová", role: "Specialistka a koordinátorka dokumentace produktů", img: "/img/schejbalova2.jpg" },
      { name: "Nikol Mojdl Podolová", role: "Specialistka a koordinátorka dokumentace produktů", img: "/img/podolova2.jpg" },
    ],
  },
  {
    title: "HR oddělení — zasmluvnění poradců, licenční čísla, vzdělávání",
    people: [
      { name: "Klára Prokopová", role: "HR koordinátorka, vzdělávání", img: "/img/Prokopova2.jpg" },
      { name: "Celine Krátká", role: "HR koordinátorka, registrace poradců", img: "/img/Kratka2.jpg" },
    ],
  },
  {
    title: "Marketingové oddělení",
    people: [
      { name: "Michael Šolín", role: "Marketingový ředitel", img: "/img/Solin2.jpg" },
      { name: "Lukáš Kroupa", role: "Marketingový manažer", img: "/img/kroupa2.jpg" },
      { name: "Lukáš Zdráhal", role: "Marketingový specialista", img: "/img/Zdrahal2.jpg" },
      { name: "Lukáš Hrnčíř", role: "Grafický designer", img: "/img/Hrncir2.jpg" },
    ],
  },
];

export default async function OBidli() {
  const stats = await getBidliStats();

  return (
    <>
      <StructuredData data={breadcrumbJsonLd([
        { name: "Domů", url: "/" },
        { name: "O Bidli", url: "/bidli" },
      ])} />
      <Hero
        image="/img/hero-image2.jpg"
        imageAlt="Bidli tým"
        label="Vyšší level kariéry"
        title={<>Ready na vyšší<br />level kariéry?</>}
        subtitle="Finance, reality a energetika pod jednou střechou. Přidej se k silnému týmu a buduj kariéru bez stropu."
      >
        <ContactButton className="btn-primary">
          #tvojevolba <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
        <Link href="#o-bidli" className="btn-outline">
          Zjistit více
        </Link>
      </Hero>

      {/* O BIDLI */}
      <section id="o-bidli" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <BidliPiktogram className="w-12 h-12 mb-6" color="#3fb1e1" />
              <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-3">O Bidli</h2>
              <p className="text-[#3fb1e1] font-semibold mb-6">
                Silný příběh, stabilní zázemí, neomezené možnosti
              </p>
              <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
                <p>
                  Z malé kanceláře až k nejkomplexnějším službám na trhu. Každý velký příběh začíná
                  od nuly. V roce 2003 si parta nadšenců v čele s Jiřím Lejnarem pronajala malou
                  kancelář v pražském Zálesí a začala pomáhat lidem s financováním bydlení.
                  Bez silného zázemí, bez známého jména. Měli ale jasnou vizi: Dělat věci jinak.
                </p>
                <p>
                  Jejich úsilí vedlo k tomu, že během jediného roku se z malé kanceláře stalo
                  nejúspěšnější Hypocentrum v ČR. Každý další rok přinášel růst, rozšíření služeb
                  a nové výzvy. Už jsme nechtěli jen pomáhat financovat bydlení – chtěli jsme lidem
                  pomoci bydlet se vším všudy. A tak jsme postupně vybudovali nejkomplexnější
                  ekosystém na trhu.
                </p>
                <p>
                  Dnes jsme stabilní značka s více než 30 pobočkami po celé ČR, stovkami
                  profesionálů a jasnou vizí: Dávat lidem férové podmínky a prostor pro růst.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image src="/img/J17.jpg" alt="O Bidli" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* PROČ BIDLI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <Image src="/img/Macbook_Air_Mockup_2.png" alt="Bidli mockup" width={580} height={380} className="w-full h-auto drop-shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="divider-sky" />
              <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-5">
                Proč Bidli? Protože jsme víc než jen firma.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bidli je pro ty, kteří nechtějí zůstat stát na místě. Pro poradce, manažery a lídry,
                kteří cítí, že jejich současná firma je brzdí.
              </p>
              <ul className="space-y-3">
                {procBidliBody.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#3fb1e1]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FontAwesomeIcon icon={faCheck} className="text-[#3fb1e1] text-xs" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong className="text-[#142f4c]">{b.bold}</strong> – {b.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter stats={stats} />

      {/* TÝM — vedení */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="divider-sky mx-auto" />
            <h2 className="text-3xl md:text-4xl font-black text-[#142f4c]">Náš tým</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              Lidé, kteří stojí za Bidli — od vedení přes strategický tým až po každodenní podporu.
            </p>
          </div>

          {/* Vedení — portrait karty */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMain.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/90 via-[#0d1f32]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-black text-base leading-tight">{p.name}</p>
                  <p className="text-[#3fb1e1] text-xs font-semibold mt-1 whitespace-pre-line leading-snug">{p.role}</p>
                  <p className="text-white/55 text-xs mt-2 leading-relaxed line-clamp-3">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÝM — zázemí a oddělení */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Strategický tým */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Strategický tým</p>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {teamOther.map((p, i) => (
                <div key={i} className="group flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-[#3fb1e1]/30 hover:shadow-md transition-all duration-200">
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={p.img} alt={p.name} fill className="object-cover object-top" sizes="44px" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#142f4c] font-bold text-sm leading-snug truncate">{p.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Oddělení */}
          <div className="space-y-10">
            {departments.map((dept, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">{dept.title}</p>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {dept.people.map((p, j) => (
                    <div key={j} className="group flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:border-[#3fb1e1]/30 hover:shadow-md transition-all duration-200">
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={p.img} alt={p.name} fill className="object-cover object-top" sizes="44px" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#142f4c] font-bold text-sm leading-snug truncate">{p.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5 leading-snug">{p.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CtaBanner>
        <blockquote className="text-xl md:text-2xl font-semibold text-white/90 italic mb-4 leading-relaxed">
          „V Bidli nehledáme průměr. Hledáme lidi, kteří chtějí růst a ukázat, co v nich skutečně je."
        </blockquote>
        <p className="text-[#3fb1e1] font-bold mb-8">Marián Süttö, obchodní ředitel Bidli</p>
        <ContactButton className="btn-outline">
          Mám zájem <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
      </CtaBanner>
    </>
  );
}
