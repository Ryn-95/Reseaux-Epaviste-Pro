import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Voiture abandonnée – Que faire ? (terrain privé/voie publique) | RéseauEpaviste",
  description:
    "Voiture abandonnée : démarche selon lieu (voie publique, copropriété, terrain privé). Ce guide explique les options et renvoie vers les sources officielles.",
  pathname: "/enlevement-epave/voiture-abandonnee",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement d’épave", href: "/enlevement-epave" },
  { label: "Voiture abandonnée", href: "/enlevement-epave/voiture-abandonnee" },
];

const faqItems = [
  {
    question: "Puis-je faire enlever une voiture qui ne m’appartient pas ?",
    answer:
      "En principe non : une procédure est nécessaire pour identifier le propriétaire et/ou impliquer les autorités selon le lieu. Ce guide donne les étapes générales et renvoie vers les sources officielles.",
  },
  {
    question: "Et si la voiture est sur mon terrain ?",
    answer:
      "Il faut d’abord clarifier la situation (propriétaire, autorisation) et suivre la procédure applicable. Contactez la mairie ou les autorités compétentes selon votre commune.",
  },
  {
    question: "Et si elle est sur la voie publique ?",
    answer:
      "Sur la voie publique, la gestion relève généralement des autorités (police municipale, fourrière) selon la situation. La procédure varie selon la commune.",
  },
  {
    question: "Est-ce une épave (VHU) ?",
    answer:
      "Un véhicule peut être qualifié de VHU selon des critères et le contexte. Si une destruction est engagée, elle doit se faire via un circuit agréé.",
  },
  {
    question: "Quel est le rôle de la fourrière ?",
    answer:
      "Dans certains cas, le véhicule peut être mis en fourrière. Les démarches et responsabilités dépendent du lieu et de la situation.",
  },
];

export default function VoitureAbandonneePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Voiture abandonnée : que faire selon le lieu (voie publique / terrain privé)",
    description:
      "Guide pratique : démarches et options selon l’emplacement d’un véhicule abandonné, avec sources officielles.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-15",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/enlevement-epave/voiture-abandonnee",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – véhicule abandonné"
        title="Voiture abandonnée : que faire selon le lieu (voie publique / terrain privé)"
        subtitle="Les démarches varient selon l’emplacement et le propriétaire. Ce guide donne une vue d’ensemble et renvoie vers les sources officielles à jour."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : sur voie publique, les autorités/fourrière gèrent généralement la procédure. Sur terrain privé, une démarche est nécessaire pour clarifier la situation et agir légalement."
        enResumePoints={[
          "Identifiez si le véhicule est sur voie publique ou terrain privé.",
          "Évitez toute action sans cadre légal (risque de litige).",
          "Consultez les sources officielles à jour pour votre commune.",
        ]}
        tocItems={[
          { label: "Voie publique", id: "voie-publique" },
          { label: "Terrain privé / copropriété", id: "terrain-prive" },
          { label: "Destruction (VHU)", id: "vhu" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="voie-publique" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Voiture abandonnée sur la voie publique
              </h2>
              <p>
                La gestion relève souvent des autorités locales (police municipale, services compétents, fourrière). La procédure dépend de la commune et du contexte.
              </p>

              <h2 id="terrain-prive" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Terrain privé / copropriété
              </h2>
              <p>
                Sur terrain privé, il faut clarifier le propriétaire et appliquer la démarche adaptée. Selon les cas, l’intervention nécessite des justificatifs et/ou une procédure administrative.
              </p>

              <h2 id="vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Destruction (VHU) : cadre général
              </h2>
              <p>
                Si un véhicule est destiné à la destruction, la procédure doit être conforme via un circuit agréé VHU et un certificat de destruction est établi.
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères pratiques (selon situation).", url: "https://www.service-public.fr/" },
                  { label: "Légifrance", description: "Textes consolidés à jour.", url: "https://www.legifrance.gouv.fr/" },
                  { label: "ANTS", description: "Démarches véhicules (si applicable).", url: "https://ants.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Voiture abandonnée" />
    </>
  );
}

