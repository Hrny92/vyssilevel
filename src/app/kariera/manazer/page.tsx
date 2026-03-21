import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { pageMeta, breadcrumbJsonLd, jobPostingJsonLd, faqJsonLd } from "@/lib/seo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem, faUsers, faShareAlt, faDesktop, faHandshake,
  faUserPlus, faChartLine, faCoins, faArrowUp,
  faCheck, faArrowRight,
  faFileInvoiceDollar, faBell, faClock,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ContactButton";
import CtaBanner from "@/components/CtaBanner";
import VideoGallery from "@/components/VideoGallery";
import ZdrojeKlientu from "@/components/ZdrojeKlientu";

export const metadata: Metadata = pageMeta({
  title: "Manažer",
  description: "Staň se manažerem v Bidli. Silný brand, sdílené leady mezi divizemi, moderní náborová podpora a zázemí silného holdingu. Veď vlastní tým s neomezeným potenciálem výdělku.",
  path: "/kariera/manazer",
  ogImage: "/img/manazer.jpg",
  keywords: [
    "manažer ve financích", "finanční manažer práce", "vedoucí týmu finanční poradenství",
    "manažer Bidli", "kariérní postup financí", "team leader finance ČR",
  ],
});

const features = [
  { icon: faGem, title: "Silný brand\na unikátní komplexnost", desc: "Jedna firma pokrývá finance, reality, energie, technologie i development. Máte nástroje, jak klientovi nabídnout kompletní služby." },
  { icon: faUsers, title: "Podpora na\nkaždem kroku", desc: "Po vašem boku stojí regionální ředitel a strategický tým divize Finance složený ze zkušených specialistů a manažerů." },
  { icon: faShareAlt, title: "Sdílené leady\nmezi divizemi", desc: "Podpora pro vaše nové kolegy, aby nemuseli začínat od nuly. Klienti přichází z klientské zóny, webu i od kolegů z jiných oborů." },
  { icon: faDesktop, title: "Jeden software\npro celý holding", desc: "Všechny divize fungují v jednom systému. Váš tým má okamžitý přístup k poptávkám, dokumentům i sdíleným příležitostem od kolegů." },
  { icon: faHandshake, title: "Specializace\ns kompletní obsluhou klienta", desc: "Váš tým se může zaměřit na to, co umí nejlépe. Díky spolupráci s kolegy z jiných divizí klient dostane kompletní servis." },
  { icon: faUserPlus, title: "Moderní\nnáborová podpora", desc: "Nábor není jen na vás. Aktivně pomáháme s marketingovými kampaněmi, školením i adaptací nováčků." },
  { icon: faChartLine, title: "Minimum administrativy,\nmaximum obchodu", desc: "Analytické oddělení připraví finanční plány pro klienty vašeho týmu. Vy se věnujete lidem, obchodu a růstu." },
  { icon: faCoins, title: "Férové\na transparentní odměny", desc: "Naše provize patří mezi nejvyšší na trhu. Vaši lidé u nás můžou vydělávat víc — za stejnou práci, s lepší podporou." },
  { icon: faArrowUp, title: "Lídři rostou\ns firmou", desc: "Budujeme s manažery. Pokud máte ambice, otevíráme vám dveře k dalším kariérním krokům. Tady růst nekončí." },
];

const technologie = [
  { icon: faChartLine, title: "Finanční plán", desc: "S námi vytvoříte propracovaný plán pro klienty, který jde dál — od úvěrů a pojistek až po chytrý energetický management domácnosti." },
  { icon: faDesktop, title: "Klientská zóna", desc: "Získáte náskok s moderním nástrojem, který propojí finance, majetek i energie vašich klientů." },
  { icon: faFileInvoiceDollar, title: "Online sjednávač", desc: "Sjednávejte pojištění rychle a pohodlně online – majetek, auta, odpovědnost i cestovní pojištění." },
  { icon: faUsers, title: "Leady a klientské sestavy", desc: "Otevřete si dveře k exkluzivním leadům a klientským sestavám napříč financemi a realitami." },
  { icon: faBell, title: "Chytré upozornění na výročí smluv", desc: "Automatická upozornění na výročí pojistných smluv vám pomohou být vždy o krok napřed." },
  { icon: faClock, title: "Fakturace podle vás – flexibilně a kdykoliv", desc: "Vystavujete faktury podle své potřeby, kdykoliv v měsíci. Žádné zpoždění, žádné omezení." },
];

const kzFeatures = [
  "Rychlá evidence příjmů a výdajů",
  "Automatické odhalení podpojištění a hodnoty nemovitostí",
  "Neveřejné nabídky nemovitostí",
  "Analýza spotřeby energií a cen",
];

const videosFilosofie = [
  "tsZxFspiQ7g", "hFVp8rOp1C4", "2IQSV60S8yw", "BiQ451fzoPs",
  "ef75kxo5LN8", "9jLF_Qv4Jig", "x3JCZcY3Ci4", "PtKrtoXVfJo",
];

export default function Manazer() {
  return (
    <>
      <StructuredData data={[
        breadcrumbJsonLd([
          { name: "Domů", url: "/" },
          { name: "Kariéra", url: "/bidli" },
          { name: "Manažer", url: "/kariera/manazer" },
        ]),
        jobPostingJsonLd({
          title: "Manažer finančního poradenství",
          description: "Hledáme manažera pro vedení vlastního týmu finančních poradců. Silný brand Bidli, sdílené leady mezi divizemi, moderní náborová podpora a zázemí silného holdingu. Kariérní postup bez stropu.",
          url: "/kariera/manazer",
          skills: ["vedení týmu", "nábor", "finanční poradenství", "obchod", "koučování"],
        }),
        faqJsonLd([
          { question: "Co dělá manažer finančního poradenství v Bidli?", answer: "Manažer vede vlastní tým finančních poradců — nabírá nové lidi, školí je, motivuje a pomáhá jim růst. Zároveň sám aktivně pracuje s klienty." },
          { question: "Jak se mohu stát manažerem v Bidli?", answer: "Většina manažerů začíná jako finanční specialista. Po prokázání výsledků a zájmu o vedení dostanete příležitost budovat vlastní tým." },
          { question: "Kolik vydělá manažer v Bidli?", answer: "Manažer vydělává provize ze svých vlastních obchodů plus procento z výsledků svého týmu. Průměrný manažer dosahuje 80 000–150 000 Kč měsíčně." },
        ]),
      ]} />
      <Hero
        image="/img/manazer.jpg"
        label="Kariéra"
        title={<>Manažer</>}
        titleAccent="v Bidli"
        subtitle="Veď vlastní tým, sdílej leady a buduj kariéru se silným zázemím za zády."
      >
        <ContactButton className="btn-primary">
          #tvojevolba <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
      </Hero>

      {/* PROČ MANAŽER — bento grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="divider-sky mx-auto" />
            <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-4">
              Proč být finanční manažer v Bidli
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Jsme stabilní a úspěšná skupina, která mění trh financí, realit a energetiky — s reálným dopadem na životy klientů.
            </p>
          </div>

          {/* Bento grid — 4 cols, desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[170px]">

            {/* VIDEO — 2×2 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm relative bg-black">
              <iframe
                width="100%" height="100%"
                src="https://www.youtube.com/embed/KCBetXI_h78?si=NaHySCuF-PLJZvQh"
                title="Proč Bidli"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Features 1–4 vedle videa: 1×1 */}
            {features.slice(0, 4).map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center group-hover:bg-[#3fb1e1]/20 transition-colors">
                  <FontAwesomeIcon icon={f.icon} className="text-[#3fb1e1] text-sm" />
                </div>
                <div>
                  <p className="text-[#142f4c] font-bold text-sm leading-snug whitespace-pre-line">{f.title}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">{f.desc}</p>
                </div>
              </div>
            ))}

            {/* Features 5–8: celý řádek, 1×1 každá */}
            {features.slice(4, 8).map((f, i) => (
              <div key={i + 4} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center group-hover:bg-[#3fb1e1]/20 transition-colors">
                  <FontAwesomeIcon icon={f.icon} className="text-[#3fb1e1] text-sm" />
                </div>
                <div>
                  <p className="text-[#142f4c] font-bold text-sm leading-snug whitespace-pre-line">{f.title}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">{f.desc}</p>
                </div>
              </div>
            ))}

            {/* Feature 9 — 2×1 */}
            <div className="col-span-2 bg-white rounded-2xl px-6 py-5 border border-gray-100 hover:shadow-md transition-all duration-200 group flex items-center gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3fb1e1]/20 transition-colors">
                <FontAwesomeIcon icon={features[8].icon} className="text-[#3fb1e1] text-base" />
              </div>
              <div>
                <p className="text-[#142f4c] font-bold text-sm leading-snug whitespace-pre-line">{features[8].title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{features[8].desc}</p>
              </div>
            </div>

            {/* CTA dlaždice — 2×1 */}
            <div className="col-span-2 rounded-2xl flex items-center justify-center"
              style={{ backgroundImage: "url('/svg-bg/Prmary.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <ContactButton className="btn-outline text-sm px-6 py-3">
                Mám zájem <FontAwesomeIcon icon={faArrowRight} />
              </ContactButton>
            </div>

          </div>
        </div>
      </section>

      {/* ZDROJE KLIENTŮ */}
      <ZdrojeKlientu />

      {/* TECHNOLOGIE — bento grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="divider-sky mx-auto" />
            <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-4">
              Technologie a nástroje, které vám vydělávají
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Pracujete s moderními nástroji, které vám ušetří čas a otevřou nové příležitosti.
            </p>
          </div>

          {/* Bento grid: 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">

            {/* Obrázek — 2×2 */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/img/shutterstock_2508203213.jpg"
                alt="Technologie Bidli"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-black text-lg leading-tight">Moderní nástroje<br />pro moderní manažery</p>
              </div>
            </div>

            {/* Nástroje 1–4: každý 1×1 */}
            {technologie.slice(0, 4).map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center group-hover:bg-[#3fb1e1]/20 transition-colors">
                  <FontAwesomeIcon icon={t.icon} className="text-[#3fb1e1] text-sm" />
                </div>
                <div>
                  <p className="text-[#142f4c] font-bold text-sm mb-1">{t.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{t.desc}</p>
                </div>
              </div>
            ))}

            {/* Nástroje 5–6: každý 2×1 (šířka přes 2 sloupce) */}
            {technologie.slice(4).map((t, i) => (
              <div
                key={i + 4}
                className="col-span-2 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3fb1e1]/20 transition-colors">
                  <FontAwesomeIcon icon={t.icon} className="text-[#3fb1e1] text-base" />
                </div>
                <div>
                  <p className="text-[#142f4c] font-bold text-sm mb-1">{t.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* KLIENTSKÁ ZÓNA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="divider-sky" />
              <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-5">
                Klientská zóna Bidli
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nástroj, který vám usnadní práci s klienty!<br /><br />
                Získejte náskok s moderní Klientskou zónou, která manažerům i jejich týmům nabízí
                dokonalý přehled o majetku, financích a energiích klientů!
              </p>
              <ul className="space-y-3 mb-8">
                {kzFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#142f4c]">
                    <div className="w-6 h-6 rounded-full bg-[#3fb1e1]/15 flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="text-[#3fb1e1] text-xs" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                Umožněte svým klientům spravovat svůj majetek chytře a zvyšte profesionální
                hodnotu celého vašeho týmu s Bidli!
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img/Macbook_Air_Mockup_2.png"
                alt="Klientská zóna Bidli"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILOZOFIE VYŠŠÍ LEVEL */}
      <section className="py-20 md:py-28 bg-[#142F4C] relative overflow-hidden">
        <div className="absolute inset-0 svg-bg-primary opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Text — levý sloupec */}
            <div>
              <div className="divider-sky" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                Filosofie Vyšší level
              </h2>
              <p className="text-white/70 leading-relaxed text-sm">
                <strong className="text-white">
                  Vyšší level není jen náborová kampaň. Je to otevřená výzva všem zkušeným
                  manažerům a poradcům, kteří cítí, že ve své současné firmě narazili na strop.
                </strong>
                <br /><br />
                V Bidli věříme, že úspěšní lidé potřebují prostor pro růst a férové podmínky.
                Vyšší level je cesta, jak spojit silné hráče s firmou, která jim opravdu dá
                příležitosti, nástroje i zázemí, které si zaslouží.
                <br /><br />
                Pod křídly Mariána Süttö, obchodního ředitele Bidli, vznikl tento přístup, který
                odráží naši kulturu, reálné příběhy lidí z terénu a především ukazuje, jak budovat
                kariéru bez limitů.
              </p>
              <p className="text-white/25 text-xs font-mono mt-8">{videosFilosofie.length} videí</p>
            </div>

            {/* Video galerie — pravý sloupec */}
            <VideoGallery videos={videosFilosofie} />

          </div>
        </div>
      </section>

      {/* CITACE CTA */}
      <CtaBanner>
        <blockquote className="text-xl md:text-2xl font-semibold text-white/90 italic mb-4 leading-relaxed">
          „V Bidli nehledáme průměr. Hledáme lidi, kteří chtějí růst a ukázat, co v nich skutečně je."
        </blockquote>
        <p className="text-[#3fb1e1] font-bold mb-8">Marián Süttö, obchodní ředitel Bidli</p>
        <ContactButton className="btn-outline">
          Mám zájem <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
      </CtaBanner>

      {/* KARIÉRNÍ MOŽNOSTI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="divider-sky mx-auto" />
            <p className="text-[#3fb1e1] text-xs font-bold uppercase tracking-widest mb-3">Zážitky na celý život</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#142f4c]">Další kariérní možnosti</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 auto-rows-[280px]">

            {/* Exclusive Club — velká karta vlevo, přes 2 řádky */}
            <div className="row-span-2 group rounded-3xl overflow-hidden relative shadow-sm hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/img/EC2.jpeg"
                alt="Exclusive Club"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/85 via-[#0d1f32]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3fb1e1] mb-2">Exkluzivní</span>
                <h3 className="text-2xl font-black text-white mb-3">Exclusive Club</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                  Za splnění podmínek vyšší provize, akcie, prestižní vizitky a jedinečné
                  zájezdy — každý rok dobrodružství, třeba v Nepálu, Namibii nebo Kazachstánu.
                </p>
              </div>
            </div>

            {/* Program Patriot — menší karta vpravo nahoře */}
            <div className="group rounded-3xl overflow-hidden relative shadow-sm hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/svg-bg/Prmary.svg"
                alt="Program Patriot"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f32]/85 via-[#0d1f32]/20 to-transparent" />
              {/* Patriot logo — pravý horní roh */}
              <div className="absolute top-8 right-8 w-32 h-32 opacity-40 rotate-6">
                <Image
                  src="/img/Patriot-img.svg"
                  alt="Patriot"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3fb1e1] mb-1">Program</span>
                <h3 className="text-lg font-black text-white mb-2">Program Patriot</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  Exkluzivní skupina kolegů s dlouhodobě skvělými výsledky — s přímým podílem na rozvoji firmy.
                </p>
              </div>
            </div>

            {/* CTA dlaždice vpravo dole */}
            <div className="rounded-3xl flex flex-col items-start justify-end p-6 bg-white border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-[#3fb1e1] mb-2">Zážitky na celý život</p>
              <p className="text-[#142f4c] font-black text-lg leading-snug mb-5">
                Chceš vědět,<br />co tě čeká dál?
              </p>
              <ContactButton className="btn-primary text-sm">
                Zjistit více <FontAwesomeIcon icon={faArrowRight} />
              </ContactButton>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
