import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BidliPiktogram } from "@/components/BidliLogo";
import Hero from "@/components/Hero";
import ContactButton from "@/components/ContactButton";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Proč Bidli",
  description: "Neukazujeme klišé, ale realitu. Videa #tvojevolba odhalují, jak to jinde funguje – a proč u nás mají poradci prostor růst.",
};

const videos = [
  {
    title: "Dinosaurus",
    desc: "Papíry v krabicích, tabulky z roku 2003 a chaos, který brzdí každého poradce. V Bidli digitalizujeme – poradce má k ruce moderní nástroje a může se soustředit na klienta.",
    id: "rFNedL25nvE",
  },
  {
    title: "Kavárna",
    desc: "Hluk, nulové soukromí a smlouvy podepisované mezi cappuccinem a toaletou. Profesionál ale potřebuje profesionální prostředí. A to v Bidli dáváme.",
    id: "t9d-xQ_FILQ",
  },
  {
    title: "100 známých",
    desc: "Volání kámošům ze základky a falešná euforie nejsou cesta za úspěchem. V Bidli poradce nehoní známé – pracuje s reálnými klienty a sdílenými příležitostmi napříč divizemi.",
    id: "kVDTNjhIRXU",
  },
  {
    title: "Honba za provizí",
    desc: "Podepiš, zinkasuj, zmiz. Některé firmy tlačí produkty bez ohledu na klienta. U nás to není o rychlém prodeji, ale o analýze a férovém poradenství.",
    id: "EuckRphWOsc",
  },
  {
    title: "Papírování",
    desc: "Když polovina práce je tisk, podpis, skenování. Zbytečná byrokracie bere energii i čas. My v Bidli máme digitalizované procesy a poradce se věnuje hlavně klientovi.",
    id: "kU7PKV0QOdA",
  },
  {
    title: "Zaměření pouze na 1 produkt",
    desc: "Klient nepotřebuje jen hypotéku nebo pojištění – chce komplexní řešení. V Bidli propojujeme finance, reality i energetiku, takže klient má vše na jednom místě.",
    id: "7aGxPtuvx7s",
  },
];

export default function ProcBidli() {
  return (
    <>
      <Hero
        image="/img/proc.jpg"
        label="Bidli"
        title={<>Proč</>}
        titleAccent="Bidli?"
        subtitle="Neukazujeme klišé, ale realitu. Podívej se na videa a rozhodni se sám."
      >
        <ContactButton className="btn-primary">
          #tvojevolba <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
      </Hero>

      {/* INTRO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="divider-sky mx-auto" />
          <h2 className="text-3xl md:text-4xl font-black text-[#142f4c] mb-6">Proč Bidli</h2>
          <p className="text-gray-600 leading-relaxed">
            Neukazujeme klišé, ale realitu. Videa{" "}
            <span className="text-[#3fb1e1] font-bold">#tvojevolba</span>{" "}
            odhalují, jak to jinde funguje – a proč u nás mají poradci prostor růst s moderními
            nástroji, férovým přístupem a kompletní podporou.
            <br /><br />
            Podívej se na videa a rozhodni se, jestli je čas přejít na vyšší level.
          </p>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((v, i) => (
              <div key={i} className="feature-card flex flex-col gap-4">
                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3 className="text-[#142f4c] font-bold text-base mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner>
        <p className="text-xl md:text-2xl font-semibold text-white/90 italic mb-8">
          Každé video končí výzvou{" "}
          <span className="text-[#3fb1e1] font-black not-italic">#tvojevolba</span>.
          Teď je řada na tobě.
        </p>
        <ContactButton className="btn-outline">
          Mám zájem <FontAwesomeIcon icon={faArrowRight} />
        </ContactButton>
      </CtaBanner>
    </>
  );
}
