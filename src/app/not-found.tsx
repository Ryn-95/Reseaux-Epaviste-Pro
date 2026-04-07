import Link from "next/link";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";

const quickLinks = [
  { label: "Enlèvement d’épave (VHU)", href: "/enlevement-epave" },
  { label: "Dépannage auto", href: "/depannage-auto" },
  { label: "Remorquage", href: "/remorquage" },
  { label: "Centres VHU agréés", href: "/centre-vhu" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="section-premium bg-bg-soft border-y border-subtle">
      <div className="premium-container">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="label-official justify-center">Page introuvable</div>
          <div className="space-y-4">
            <div className="text-7xl md:text-8xl font-black tracking-tighter text-brand-dark">404</div>
            <h1 className="title-md text-brand-dark">Cette page n’existe pas (ou a été déplacée).</h1>
            <p className="text-brand-dark/60 font-medium text-balance max-w-2xl mx-auto">
              Utilisez les accès rapides ou revenez à l’accueil. Pour une demande urgente, le standard national est disponible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/" className="btn-premium btn-primary px-10 py-5 hover-glow w-full sm:w-auto">
              Retour à l’accueil
            </Link>
            <TrackedPhoneLink
              trackingLocation="not_found_cta"
              phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
              className="btn-premium btn-secondary px-10 py-5 w-full sm:w-auto"
            >
              Appeler {PHONE_EPAVISTE_DISPLAY}
            </TrackedPhoneLink>
          </div>

          <div className="pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="card-premium no-underline hover-lift"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/40">
                    Accès rapide
                  </div>
                  <div className="mt-2 text-lg font-bold tracking-tight text-brand-dark hover:text-brand-blue transition-colors">
                    {l.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
