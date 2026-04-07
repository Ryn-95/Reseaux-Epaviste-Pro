import Link from "next/link";
import Image from "next/image";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 relative">
      <div className="premium-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image 
                src="/images/logosansarriereplan.png" 
                alt="Logo Réseaux Épaviste Pro" 
                width={200} 
                height={60} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Réseau national de référence pour l'enlèvement d'épave gratuit et le dépannage automobile professionnel. Épaviste pro et centre VHU agréé par la préfecture pour la destruction auto.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1.5">Agrément VHU</div>
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1.5">Habilitation SIV</div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Enlèvement d'épave gratuit", href: "/enlevement-epave" },
                { label: "Dépannage auto 24/7", href: "/depannage-auto" },
                { label: "Remorquage professionnel", href: "/remorquage" },
                { label: "Rachat véhicule HS", href: "/rachat-vehicule" },
                { label: "Centres VHU agréés", href: "/centre-vhu" },
                { label: "Prime à la conversion", href: "/prime-conversion/conditions-2025" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">Zones d'intervention</h4>
            <ul className="space-y-3">
              {[
                { label: "Épaviste Paris (75)", href: "/epaviste-paris-75" },
                { label: "Épaviste Hauts-de-Seine (92)", href: "/epaviste-hauts-de-seine-92" },
                { label: "Épaviste Seine-Saint-Denis (93)", href: "/epaviste-seine-saint-denis-93" },
                { label: "Épaviste Val-de-Marne (94)", href: "/epaviste-val-de-marne-94" },
                { label: "Épaviste Yvelines (78)", href: "/epaviste-yvelines-78" },
                { label: "Toute l'Île-de-France", href: "/epaviste" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">Contact</h4>
            <address className="space-y-4 not-italic">
              <Link href={`tel:${PHONE_EPAVISTE_TEL}`} className="block no-underline">
                <div className="text-[9px] font-bold text-white/25 uppercase tracking-widest mb-1">Ligne d'urgence 24/7</div>
                <div className="text-2xl font-bold tracking-tight text-white hover:text-brand-red transition-colors stat-number">{PHONE_EPAVISTE_DISPLAY}</div>
              </Link>
              <div className="text-sm text-white/40">
                <div><a href="mailto:contact@reseauxepaviste.fr" className="hover:text-white transition-colors">contact@reseauxepaviste.fr</a></div>
                <div className="mt-1">Île-de-France & National</div>
              </div>
            </address>
            <div className="space-y-2">
              {[
                { label: "Guides pratiques", href: "/guides/checklist-dossier-epave" },
                { label: "Blog & Expertise", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-white/50 hover:text-white text-sm transition-colors no-underline">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-semibold text-white/15 uppercase tracking-widest">
            © {currentYear} Réseaux Épaviste Pro — Tous droits réservés
          </div>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-[10px] font-semibold text-white/15 hover:text-white/30 uppercase tracking-widest transition-colors no-underline">
              Mentions Légales
            </Link>
            <Link href="/contact" className="text-[10px] font-semibold text-white/15 hover:text-white/30 uppercase tracking-widest transition-colors no-underline">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
