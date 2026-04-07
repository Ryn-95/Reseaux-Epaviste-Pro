import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Épave en fourrière : options et démarches (guide) | RéseauEpaviste",
  description:
    "Véhicule en fourrière : options, points d’attention, démarches et erreurs à éviter. Guide + FAQ + liens officiels.",
  pathname: "/guides/epave-fourriere",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/epave-fourriere" },
  { label: "Épave en fourrière", href: "/guides/epave-fourriere" },
];

const faqItems = [
  {
    question: "RéseauEpaviste peut-il intervenir directement en fourrière ?",
    answer:
      "En général, la procédure dépend des autorités et de la fourrière. Ce guide donne des repères et renvoie vers des sources officielles.",
  },
  {
    question: "Puis-je “abandonner” le véhicule à la fourrière ?",
    answer:
      "Selon les cas, une procédure peut exister. Vérifiez la règle applicable sur des sources officielles et auprès de la fourrière concernée.",
  },
  {
    question: "Quels frais peuvent s’appliquer ?",
    answer:
      "Les frais dépendent de la fourrière et du contexte. Renseignez-vous auprès des interlocuteurs officiels.",
  },
  {
    question: "Quels documents prévoir ?",
    answer:
      "Selon la situation : identité, documents du véhicule, preuves de démarches. Vérifiez au cas par cas.",
  },
  {
    question: "Que faire si je veux récupérer la voiture ?",
    answer:
      "Rapprochez-vous de la fourrière et suivez la procédure officielle. Les conditions varient selon la situation.",
  },
];

export default function EpaveFourrierePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Épave en fourrière : options et démarches (guide)",
    description:
      "Repères pratiques sur les options et démarches quand un véhicule est en fourrière.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/epave-fourriere",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – fourrière"
        title="Épave en fourrière : que faire (options et démarches)"
        subtitle="Les démarches dépendent de la situation et des autorités. Ce guide donne une vue d’ensemble et renvoie vers les liens officiels."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : un véhicule en fourrière suit une procédure encadrée. Les options (récupération, renonciation, destruction) dépendent du dossier : vérifiez les sources officielles à jour."
        enResumePoints={[
          "Contactez la fourrière pour connaître la procédure applicable.",
          "Conservez les preuves et documents liés au dossier.",
          "Vérifiez les informations sur des sources officielles.",
        ]}
        tocItems={[
          { label: "Comprendre la situation", id: "comprendre" },
          { label: "Options possibles", id: "options" },
          { label: "Erreurs à éviter", id: "erreurs" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="comprendre" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Comprendre la situation
              </h2>
              <p>
                Les règles varient selon le lieu, la décision et le dossier. La fourrière et les autorités compétentes vous indiquent la procédure.
              </p>

              <h2 id="options" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Options possibles (selon cas)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Récupérer le véhicule</li>
                <li>Suivre la procédure de renonciation si applicable</li>
                <li>Destruction via circuit agréé selon procédure</li>
              </ul>

              <h2 id="erreurs" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Erreurs à éviter
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Agir sans confirmation officielle</li>
                <li>Perdre les preuves / documents</li>
                <li>Confondre les étapes (fourrière vs VHU)</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères officiels selon situation.", url: "https://www.service-public.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                  { label: "ANTS", description: "Démarches véhicules (si applicable).", url: "https://ants.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Épave en fourrière" />
    </>
  );
}

