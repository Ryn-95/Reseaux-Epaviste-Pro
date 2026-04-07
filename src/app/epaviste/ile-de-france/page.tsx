import { buildPageMetadata } from "@/lib/seo/metadata";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import Link from "next/link";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title:
    "Épaviste Île‑de‑France – Enlèvement d’épave gratuit dans tous les départements | RéseauEpaviste",
  description:
    "RéseauEpaviste coordonne des épavistes agréés dans toute l’Île‑de‑France. Enlèvement d’épave (VHU) pris en charge, centres VHU partenaires et certificat de destruction officiel. Appelez 07 45 48 24 64.",
  pathname: "/epaviste/ile-de-france",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Épaviste", href: "/epaviste" },
  { label: "Île‑de‑France", href: "/epaviste/ile-de-france" },
];

const departments = [
  { slug: "paris", label: "Paris (75)" },
  { slug: "seine-saint-denis", label: "Seine‑Saint‑Denis (93)" },
  { slug: "hauts-de-seine", label: "Hauts‑de‑Seine (92)" },
  { slug: "val-de-marne", label: "Val‑de‑Marne (94)" },
  { slug: "essonne", label: "Essonne (91)" },
  { slug: "yvelines", label: "Yvelines (78)" },
  { slug: "val-d-oise", label: "Val‑d’Oise (95)" },
  { slug: "seine-et-marne", label: "Seine‑et‑Marne (77)" },
];

const faqItems = [
  {
    question: "Intervenez-vous dans tous les départements d’Île-de-France ?",
    answer:
      "Oui. Nous couvrons l’ensemble des 8 départements d’Île‑de‑France via un réseau d’épavistes agréés. Les délais restent indicatifs et dépendent de l’accessibilité du lieu.",
  },
  {
    question: "Quel délai pour un enlèvement à [ville] ?",
    answer:
      "À titre indicatif en IDF, l’intervention est souvent possible sous 30 minutes à 2 heures selon l’arrondissement/la commune et l’accès (parking souterrain, résidence, cave…).",
  },
  {
    question: "Le certificat de destruction est-il remis ?",
    answer:
      "Oui. À la remise du véhicule au centre VHU partenaire, le certificat de destruction (CERFA) est établi, ce qui permet de finaliser les démarches de radiation.",
  },
  {
    question: "Peut-on intervenir en accès réglementé (copropriété, parking) ?",
    answer:
      "Oui dans de nombreux cas. Indiquez l’adresse, le type de parking/cour et les contraintes d’accès au téléphone pour que l’équipe confirme la faisabilité.",
  },
];

export default function EpavisteIdfHubPage() {
  return (
    <>
      <ServiceJsonLd
        name="Épavistes agréés – Île-de-France"
        url="https://reseauepaviste.fr/epaviste/ile-de-france"
        areaServed="Île-de-France"
      />

      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Île‑de‑France – Réseau d’épavistes agréés"
        title="Épaviste Île‑de‑France : enlèvement d’épave gratuit (VHU)"
        subtitle="RéseauEpaviste coordonne un réseau d’épavistes agréés et d’orientations vers des centres VHU partenaires pour traiter votre véhicule hors d’usage selon le cadre légal."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#111827]">
              Intervention dans les 8 départements d’Île‑de‑France
            </h2>
            <p className="text-[#1F2933] text-sm leading-relaxed">
              Choisissez votre département pour accéder à une page locale (zones,
              délais indicatifs, cas typiques et mini‑FAQ).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {departments.map((dept) => (
                <Link
                  key={dept.slug}
                  href={`/epaviste/${dept.slug}`}
                  className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-lg p-4 hover:border-[#1E3A8A] transition text-[#111827]"
                >
                  <div className="font-semibold text-sm">{dept.label}</div>
                  <div className="text-xs text-[#6B7280] mt-2">
                    Voir la page locale →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111827]">
              Cas d’enlèvement fréquents en Île‑de‑France
            </h2>
            <ul className="space-y-2 text-sm text-[#374151] list-disc list-inside">
              <li>Véhicule immobilisé dans un parking souterrain ou une cour.</li>
              <li>Véhicule déclaré VHU après accident (A1, A4, A6, A10, etc.).</li>
              <li>Épave sur terrain privé (pavillon, copropriété, zone industrielle).</li>
              <li>Deux‑roues et véhicules abandonnés dans un local (selon accessibilité).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111827]">
              Liens utiles (procédure et services associés)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                href="/enlevement-epave"
                className="border border-[#E5E7EB] bg-white rounded-lg p-4 hover:border-[#1E3A8A] transition text-[#1E3A8A] font-semibold"
              >
                Enlèvement d’épave (VHU) et certificat de destruction
              </Link>
              <Link
                href="/depannage-auto"
                className="border border-[#E5E7EB] bg-white rounded-lg p-4 hover:border-[#1E3A8A] transition text-[#1E3A8A] font-semibold"
              >
                Dépannage auto et remorquage
              </Link>
              <Link
                href="/centre-vhu"
                className="border border-[#E5E7EB] bg-white rounded-lg p-4 hover:border-[#1E3A8A] transition text-[#1E3A8A] font-semibold"
              >
                Centres VHU agréés
              </Link>
              <Link
                href="/wiki-epaviste/loi-code-environnement"
                className="border border-[#E5E7EB] bg-white rounded-lg p-4 hover:border-[#1E3A8A] transition text-[#1E3A8A] font-semibold"
              >
                Loi & code de l’environnement (cadre VHU)
              </Link>
            </div>
          </div>

          <OfficialSourcesBlock
            title="Textes et services publics de référence (VHU)"
            intro="Pour vérifier le cadre légal lié aux véhicules hors d’usage, vous pouvez consulter les textes officiels et services publics suivants :"
            sources={[
              {
                label: "Légifrance – Code de l’environnement",
                description:
                  "Textes consolidés relatifs aux VHU et au cadre environnemental.",
                url: "https://www.legifrance.gouv.fr/",
              },
              {
                label: "Service-public.fr – Véhicule hors d’usage (VHU)",
                description:
                  "Repères pratiques et démarches à connaître (selon situation).",
                url: "https://www.service-public.fr/",
              },
              {
                label: "ANTS – Déclarer la cession ou la destruction",
                description:
                  "Portail officiel pour finaliser les démarches administratives.",
                url: "https://ants.gouv.fr/",
              },
            ]}
          />

          <ContextualLinksBlock
            title="Accès rapide (IDF)"
            links={[
              { href: "/enlevement-epave", label: "Enlèvement d’épave", description: "Procédure, documents, certificat." },
              { href: "/depannage-auto/paris", label: "Dépannage auto Paris", description: "Dépannage et intervention en zone dense." },
              { href: "/centre-vhu/ile-de-france", label: "Centre VHU Île‑de‑France", description: "Orientation vers centres VHU partenaires." },
              { href: "/guides/checklist-dossier-epave", label: "Checklist dossier épave", description: "Préparer l’appel et l’accès (parking, cour, etc.)." },
            ]}
          />

          <div className="space-y-4 border-t border-[#E5E7EB] pt-10">
            <h2 className="text-2xl font-bold text-[#111827]">
              Besoin d’un épaviste en Île‑de‑France ?
            </h2>
            <p className="text-[#1F2933] text-sm leading-relaxed">
              Appelez-nous pour être orienté vers le bon opérateur selon votre adresse, l’accessibilité et votre type de véhicule.
            </p>
            <CallbackForm />
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions fréquentes – Épaviste Île‑de‑France" />
    </>
  );
}

