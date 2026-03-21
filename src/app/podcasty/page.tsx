import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight, faMicrophone, faPlay,
  faHeadphones, faUsers, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { BidliPiktogram } from "@/components/BidliLogo";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ContactButton";
import { getPodcasty, extractYoutubeId, type PodcastEpizoda } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = pageMeta({
  title: "Podcasty",
  description: "Sleduj podcasty Bidli na YouTube. Rozhovory s finančními poradci a manažery, tipy na kariéru ve financích a pohled zevnitř na svět finančního poradenství.",
  path: "/podcasty",
  ogImage: "/img/podcast.jpg",
  keywords: [
    "Bidli podcast", "finanční poradenství podcast", "kariéra finance YouTube",
    "rozhovor finanční poradce", "podcast o práci ve financích",
  ],
});

const YOUTUBE_CHANNEL = "https://www.youtube.com/@BIDLIsev%C5%A1%C3%ADmv%C5%A1udy";

const pillars = [
  { icon: faMicrophone, title: "Upřímné rozhovory", desc: "Žádné marketingové řeči. Jen skutečné příběhy a zkušenosti lidí z terénu." },
  { icon: faUsers, title: "Různé pohledy", desc: "Hosté z různých úrovní — od nováčků po zkušené manažery a ředitele." },
  { icon: faLightbulb, title: "Praktické tipy", desc: "Každá epizoda přináší konkrétní poznatky, které můžeš hned využít." },
];

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

function formatDatum(iso: string) {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function EpizodaCard({ ep, index }: { ep: PodcastEpizoda; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const videoId = extractYoutubeId(ep.youtubeId);
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3fb1e1]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={ep.nazev}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[#0d1f32]/40 group-hover:bg-[#0d1f32]/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#3fb1e1] flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform duration-200">
            <FontAwesomeIcon icon={faPlay} className="text-white text-sm ml-0.5" />
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-[#142f4c]/80 backdrop-blur-sm text-[#3fb1e1] text-xs font-black px-2 py-1 rounded-lg">
          #{num}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-white/50 text-xs mb-2 flex items-center gap-2 flex-wrap">
          <span>{formatDatum(ep.datumVydani)}</span>
          {ep.host && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
              <span>{ep.host}</span>
            </>
          )}
        </p>
        <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-[#3fb1e1] transition-colors duration-200">
          {ep.nazev}
        </h3>
        {ep.popis && (
          <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{ep.popis}</p>
        )}
      </div>
    </a>
  );
}

export default async function Podcasty() {
  const epizody = await getPodcasty();

  return (
    <>
      <StructuredData data={breadcrumbJsonLd([
        { name: "Domů", url: "/" },
        { name: "Podcasty", url: "/podcasty" },
      ])} />
      <Hero
        image="/img/podcast.jpg"
        label="Podcast"
        title={<>Vyšší level</>}
        titleAccent="podcast"
        subtitle="Rozhovory o kariéře, financích a lidech, kteří se rozhodli jít výš."
      >
        <a href="#epizody" className="btn-primary">
          Poslouchat <FontAwesomeIcon icon={faPlay} />
        </a>
      </Hero>

      {/* O PODCASTU — bento */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[190px]">

            {/* Heading tile — 2×1 navy */}
            <div className="col-span-2 rounded-2xl bg-[#142f4c] p-8 flex flex-col justify-center">
              <div className="divider-sky" />
              <h2 className="text-xl md:text-2xl font-black text-white leading-snug">
                Podcast, který mluví<br />o věcech, na kterých záleží.
              </h2>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Nové epizody vychází nárazově — sleduj nás na YouTube.
              </p>
            </div>

            {/* YouTube CTA tile — 2×1 */}
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 group rounded-2xl bg-white border border-gray-100 px-8 py-6 flex items-center justify-between hover:border-[#ff0000]/30 hover:shadow-md transition-all duration-200"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Sledovat na</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff0000]/10 flex items-center justify-center group-hover:bg-[#ff0000]/20 transition-colors">
                    <YouTubeLogo />
                  </div>
                  <span className="text-[#142f4c] font-black text-xl">YouTube</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[#142f4c] flex items-center justify-center transition-colors duration-200">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-400 group-hover:text-white text-sm transition-colors" />
              </div>
            </a>

            {/* 3 pillars — each 1×1 */}
            {pillars.map((p, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#3fb1e1]/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={p.icon} className="text-[#3fb1e1] text-sm" />
                </div>
                <div>
                  <p className="text-[#142f4c] font-bold text-sm leading-snug">{p.title}</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}

            {/* Dekorativní tile */}
            <div className="rounded-2xl flex items-center justify-center"
              style={{ backgroundImage: "url('/svg-bg/Prmary.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <BidliPiktogram className="w-16 h-16 opacity-20" color="white" />
            </div>

          </div>
        </div>
      </section>

      {/* EPIZODY */}
      <section id="epizody" className="py-20 md:py-28 bg-[#142f4c] relative overflow-hidden">
        <div className="absolute inset-0 svg-bg-primary opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="divider-sky mx-auto" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Všechny epizody</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Odebírej kanál na YouTube, ať ti žádná epizoda neunikne.
            </p>
          </div>

          {epizody.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {epizody.map((ep, i) => (
                  <EpizodaCard key={ep._id} ep={ep} index={i} />
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <YouTubeLogo />
                  Všechny epizody na YouTube <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </>
          ) : (
            /* Prázdný stav — zatím žádné epizody v Sanity */
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faMicrophone} className="text-[#3fb1e1]/50 text-3xl" />
              </div>
              <p className="text-white/50 text-lg font-medium mb-2">První epizoda brzy</p>
              <p className="text-white/30 text-sm mb-8">
                Sleduj náš YouTube kanál, ať ti nic neunikne.
              </p>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <YouTubeLogo />
                YouTube kanál <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          )}

        </div>
      </section>

      {/* ODBĚR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="divider-sky" />
              <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-5">
                Chceš být u toho jako první?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Odebírej náš YouTube kanál a každá nová epizoda ti přijde rovnou do přehrávače.
                Žádná ti neuteče.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#ff0000] text-white font-semibold text-sm hover:bg-[#cc0000] transition-colors duration-200"
                >
                  <YouTubeLogo />
                  Odebírat na YouTube
                </a>
                <ContactButton className="btn-primary">
                  Zajímá tě kariéra v Bidli? <FontAwesomeIcon icon={faArrowRight} />
                </ContactButton>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-[#3fb1e1]/5 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-[#3fb1e1]/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeadphones} className="text-[#3fb1e1]/40 text-8xl" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
