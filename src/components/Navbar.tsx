"use client";

import { useState, useEffect, useRef } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BidliLogo from "./BidliLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown, faBars, faTimes, faPhone,
  faBuilding, faLightbulb, faUserTie, faUsers, faCoffee, faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavChild {
  label: string;
  href: string;
  desc: string;
  icon: IconDefinition;
}

type NavItem =
  | { label: string; href: string; icon: IconDefinition }
  | { label: string; children: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Bidli",
    children: [
      { label: "O nás",      href: "/bidli",              desc: "Kdo jsme, náš příběh a tým",           icon: faBuilding  },
      { label: "Proč Bidli", href: "/bidli/proc-bidli",   desc: "Co nás odlišuje od ostatních",          icon: faLightbulb },
    ],
  },
  {
    label: "Kariéra",
    children: [
      { label: "Finanční specialista", href: "/kariera/financni-specialista", desc: "Poradenství s neomezeným potenciálem", icon: faUserTie },
      { label: "Manažer",              href: "/kariera/manazer",              desc: "Veď tým a sdílej příležitosti",       icon: faUsers    },
      { label: "Kariérní snídaně",     href: "/kariera/karierrni-snidane",    desc: "Poznej nás osobně u kávy",            icon: faCoffee   },
    ],
  },
  { label: "Podcasty", href: "/podcasty", icon: faMicrophone },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeMenu,  setActiveMenu]  = useState<string | null>(null);
  const pathname   = usePathname();
  const { open: openContactModal } = useContactModal();
  const navRef     = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMegaActive = (children: NavChild[]) =>
    children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));

  const isDirectActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const open  = (label: string) => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setActiveMenu(label); };
  const close = ()               => { hoverTimer.current = setTimeout(() => setActiveMenu(null), 180); };
  const toggle= (label: string) => setActiveMenu((p) => (p === label ? null : label));

  const activeItem = navItems.find(
    (i): i is { label: string; children: NavChild[] } =>
      "children" in i && i.label === activeMenu
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div
        ref={navRef}
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 bg-white border
          ${scrolled ? "shadow-xl border-gray-200/70" : "shadow-md border-gray-100"}`}
        onMouseLeave={close}
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-5 md:px-6 py-3">
          <Link href="/" className="flex-shrink-0">
            <BidliLogo className="h-8 w-auto" variant="color" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              "href" in item ? (
                /* Direct link — no megamenu */
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium
                    transition-colors duration-150
                    ${isDirectActive(item.href)
                      ? "text-[#142f4c]"
                      : "text-gray-500 hover:text-[#142f4c]"
                    }`}
                >
                  {item.label}
                </Link>
              ) : (
                /* Megamenu button */
                <button
                  key={item.label}
                  onClick={() => toggle(item.label)}
                  onMouseEnter={() => open(item.label)}
                  aria-expanded={activeMenu === item.label}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium
                    transition-colors duration-150 cursor-pointer select-none
                    ${isMegaActive(item.children) || activeMenu === item.label
                      ? "text-[#142f4c]"
                      : "text-gray-500 hover:text-[#142f4c]"
                    }`}
                >
                  {item.label}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-[10px] text-[#3fb1e1] transition-transform duration-200
                      ${activeMenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>
              )
            )}

            <button
              onClick={openContactModal}
              className="ml-3 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                transition-all duration-200 bg-[#3fb1e1] text-white hover:bg-[#142f4c]"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xs" />
              Kontakt
            </button>
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden text-[#142f4c]/70 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* ── Attached megamenu panel ── */}
        {activeItem && (
          <div
            className="hidden lg:block border-t border-gray-100"
            onMouseEnter={() => open(activeItem.label)}
          >
            <div className={`grid gap-1.5 p-3 ${activeItem.children.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
              {activeItem.children.map((child) => {
                const active = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setActiveMenu(null)}
                    className={`group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-colors duration-150
                      ${active ? "bg-gray-50" : "hover:bg-gray-50"}`}
                  >
                    <FontAwesomeIcon
                      icon={child.icon}
                      className={`mt-0.5 text-sm flex-shrink-0 transition-colors
                        ${active ? "text-[#3fb1e1]" : "text-gray-300 group-hover:text-[#3fb1e1]"}`}
                    />
                    <div>
                      <p className={`text-sm font-medium leading-tight mb-0.5
                        ${active ? "text-[#3fb1e1]" : "text-[#142f4c] group-hover:text-[#3fb1e1]"}`}>
                        {child.label}
                      </p>
                      <p className="text-xs text-gray-400 leading-snug">{child.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-3">
            <div className="px-3 pt-2 flex flex-col gap-0.5">
              {navItems.map((item) =>
                "href" in item ? (
                  /* Direct link v mobilu */
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                      ${isDirectActive(item.href)
                        ? "text-[#3fb1e1] font-medium"
                        : "text-[#142f4c]/70 hover:text-[#142f4c] hover:bg-gray-50"
                      }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-xs text-[#3fb1e1] w-3.5" />
                    {item.label}
                  </Link>
                ) : (
                  /* Sekce s podseznamem v mobilu */
                  <div key={item.label}>
                    <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                          ${pathname === child.href
                            ? "text-[#3fb1e1] font-medium"
                            : "text-[#142f4c]/70 hover:text-[#142f4c] hover:bg-gray-50"
                          }`}
                      >
                        <FontAwesomeIcon icon={child.icon} className="text-xs text-[#3fb1e1] w-3.5" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <button
                  onClick={() => { openContactModal(); setMobileOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
                    bg-[#3fb1e1] text-white font-semibold text-sm hover:bg-[#142f4c] transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-xs" />
                  Kontakt
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
