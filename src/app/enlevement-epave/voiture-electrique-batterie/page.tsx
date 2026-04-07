import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Épave voiture électrique – Batterie et enlèvement (VHU) | RéseauEpaviste",
  description:
    "Voiture électrique hors d’usage : points de vigilance (batterie), accès, procédure VHU et sources officielles. Guide + FAQ.",
  pathname: "/enlevement-epave/voiture-electrique-batterie",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement d’épave", href: "/enlevement-epave" },
  { label: "Voiture électrique (batterie)", href: "/enlevement-epave/voiture-electrique-batterie" },
];

const faqItems = [
  {
    question: "Une voiture électrique peut-elle être un VHU ?",
    answer:
      "Oui, selon l’état et le contexte. Si une destruction est engagée, la procédure doit rester conforme via un circuit agréé et documenté.",
  },
  {
    question: "La batterie change-t-elle la procédure ?",
    answer:
      "Elle peut introduire des contraintes de sécurité et de logistique. Indiquez le type de véhicule et l’état dès l’appel pour adapter la prise en charge.",
  },
  {
    question: "Quels documents prévoir ?",
    answer:
      "Carte grise si disponible et pièce d’identité. Les exigences exactes varient selon le cas.",
  },
  {
    question: "Que faire si le véhicule est immobilisé en parking ?",
    answer:
      "Précisez la hauteur libre, l’accès (badge/code) et l’état du véhicule. L’accessibilité est un facteur majeur.",
  },
  {
    question: "Le certificat de destruction est-il remis ?",
    answer:
      "Dans une procédure VHU conforme, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez-le.",
  },
];

export default function VoitureElectriqueBatteriePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Voiture électrique hors d’usage : batterie, enlèvement et procédure VHU",
    description:
      "Guide : points de vigilance liés aux véhicules électriques (batterie), organisation de l’enlèvement et procédure VHU conforme.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/enlevement-epave/voiture-electrique-batterie",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="local"
        badge="Cas particulier – véhicule électrique"
        title="Voiture électrique hors d’usage : batterie, enlèvement et VHU"
        subtitle="Un véhicule électrique peut nécessiter des précautions spécifiques. Cette page donne les points à préparer et les sources officielles à consulter."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : si le véhicule est destiné à la destruction, il doit suivre une procédure VHU conforme. Signalez dès l’appel qu’il s’agit d’un véhicule électrique pour adapter la prise en charge."
        enResumePoints={[
          "Indiquez clairement “véhicule électrique” lors de l’appel.",
          "Précisez l’accessibilité (parking, cour, voie privée).",
          "Procédure VHU conforme + certificat de destruction à conserver.",
        ]}
        tocItems={[
          { label: "Points de vigilance", id: "vigilance" },
          { label: "Préparer l’intervention", id: "preparer" },
          { label: "Procédure VHU", id: "vhu" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="vigilance" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Points de vigilance (batterie et sécurité)
              </h2>
              <p>
                Les contraintes peuvent varier selon l’état, le lieu et l’accessibilité. L’objectif est une prise en charge sûre et conforme.
              </p>

              <h2 id="preparer" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Préparer l’intervention (infos utiles)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Adresse exacte et accès</li>
                <li>Véhicule roulant/non roulant</li>
                <li>Contrainte parking (hauteur, badge)</li>
              </ul>

              <h2 id="vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Procédure VHU (rappel)
              </h2>
              <p>
                Si une destruction est engagée, un certificat de destruction est établi via un centre agréé.
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères officiels selon situation.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Épave voiture électrique" />
    </>
  );
}

