import Link from "next/link";
import BidliLogo from "./BidliLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const footerLinks = {
  bidli: [
    { label: "O nás", href: "/bidli" },
    { label: "Proč Bidli", href: "/bidli/proc-bidli" },
  ],
  kariera: [
    { label: "Finanční specialista", href: "/kariera/financni-specialista" },
    { label: "Manažer", href: "/kariera/manazer" },
    { label: "Kariérní snídaně", href: "/kariera/karierrni-snidane" },
  ],
};

const socialLinks = [
  {
    icon: faInstagram,
    href: "https://www.youtube.com/@BIDLIsev%C5%A1%C3%ADmv%C5%A1udy",
    label: "Instagram",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/18437972/",
    label: "LinkedIn",
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/@BIDLIsev%C5%A1%C3%ADmv%C5%A1udy",
    label: "YouTube",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/bidlicz/",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#142f4c] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <BidliLogo className="h-10 w-auto mb-4" variant="white" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Přijď na vyšší level kariéry. Bidli — finance, reality, energetika
              a technologie pod jednou střechou.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3fb1e1] flex items-center justify-center
                    transition-all duration-200 text-white/70 hover:text-white text-sm"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Bidli links */}
          <div>
            <h3 className="text-[#3fb1e1] text-xs font-bold uppercase tracking-widest mb-4">
              Bidli
            </h3>
            <ul className="space-y-2">
              {footerLinks.bidli.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kariéra links */}
          <div>
            <h3 className="text-[#3fb1e1] text-xs font-bold uppercase tracking-widest mb-4">
              Kariéra
            </h3>
            <ul className="space-y-2">
              {footerLinks.kariera.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Bidli holding a.s. Všechna práva
            vyhrazena.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.bidli.cz/informace-o-webu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Zásady zpracování osobních údajů
            </Link>
            <button
              id="manage-cookie-prefs"
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs
                transition-colors cursor-pointer bg-transparent border-0"
            >
              <FontAwesomeIcon icon={faSlidersH} />
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
