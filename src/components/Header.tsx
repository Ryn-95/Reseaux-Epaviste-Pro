"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";

const navLinks = [
  { href: "/enlevement-epave", label: "Enlèvement Épave" },
  { href: "/depannage-auto", label: "Dépannage Auto" },
  { href: "/remorquage", label: "Remorquage" },
  { href: "/centre-vhu", label: "Centres VHU" },
  { href: "/rachat-vehicule", label: "Rachat" },
  { href: "/blog", label: "Blog" },
];

const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "#zones", label: "Zones" },
  { href: "#processus", label: "Processus" },
  { href: "#guide", label: "Guide" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = isHome ? homeLinks : navLinks;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-sm"
        : "bg-transparent"
    }`}>
      {/* E-E-A-T Credentials Bar */}
      <div className={`transition-all duration-500 overflow-hidden flex items-center justify-center bg-zinc-950/90 text-white/80 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/5 ${
        scrolled ? "h-0 opacity-0 border-transparent" : "h-[28px] md:h-[30px] opacity-100"
      }`}>
        <span>Agrément préfectoral VHU n°PR9200012D <span className="hidden sm:inline">· ISO 14001 · Habilitation SIV · 15 ans d'expertise</span></span>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="premium-container flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group no-underline">
            <Image 
              src="/images/logosansarriereplan.png" 
              alt="Logo Réseaux Épaviste" 
              width={1536} 
              height={1024} 
              className="h-16 md:h-20 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-4">
            <TrackedPhoneLink
              trackingLocation="header_phone"
              phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider transition-all no-underline bg-white text-black hover:bg-white/90 rounded-sm"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.3 1.7.54 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.06a2 2 0 012.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {PHONE_EPAVISTE_DISPLAY}
            </TrackedPhoneLink>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
              aria-label="Menu de navigation"
            >
              <span className={`w-5 h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`}></span>
              <span className={`w-5 h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 gap-6 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold text-white tracking-tight hover:text-white/70 transition-colors no-underline"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8 w-full border-t border-white/10 pt-8">
            <TrackedPhoneLink
              trackingLocation="header_mobile"
              phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
              className="flex flex-col items-start text-white no-underline"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">Urgence 24/7</span>
              <span className="text-3xl font-bold tracking-tight mt-1">{PHONE_EPAVISTE_DISPLAY}</span>
            </TrackedPhoneLink>
          </div>
        </div>
      </div>
    </header>
  );
}
