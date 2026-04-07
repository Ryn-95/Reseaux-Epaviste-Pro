import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "ANTS : déclarer la destruction d’un véhicule (guide) | RéseauEpaviste",
  description:
    "Guide ANTS : comprendre la démarche de déclaration de destruction après un VHU, quelles infos préparer, erreurs fréquentes, et liens officiels.",
  pathname: "/guides/ants-destruction-vehicule",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/ants-destruction-vehicule" },
  { label: "ANTS destruction véhicule", href: "/guides/ants-destruction-vehicule" },
];

const faqItems = [
  {
    question: "Dois-je faire la démarche ANTS moi-même ?",
    answer:
      "Selon les cas, la destruction peut être déclarée via les démarches administratives en ligne. Suivez toujours les instructions officielles à jour.",
  },
  {
    question: "De quoi ai-je besoin pour la démarche ?",
    answer:
      "Préparez les informations liées au véhicule et le justificatif de destruction (certificat/CERFA) selon la procédure.",
  },
  {
    question: "Quand faut-il déclarer ?",
    answer:
      "Respectez les délais et conservez les preuves. Vérifiez la règle exacte sur les sources officielles.",
  },
  {
    question: "Que faire si j’ai perdu des documents ?",
    answer:
      "Selon le contexte, des alternatives existent. Le plus sûr est de s’appuyer sur les instructions officielles et/ou d’expliquer votre situation au téléphone.",
  },
  {
    question: "Pourquoi conserver les preuves ?",
    answer:
      "Les preuves (certificat, confirmations) protègent en cas de litige (amendes, assurance, etc.).",
  },
];

export default function GuideAntsDestructionVehiculePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ANTS : déclarer la destruction d’un véhicule (guide pratique)",
    description:
      "Étapes et points de vigilance pour la démarche ANTS liée à la destruction d’un véhicule (VHU).",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-20",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/ants-destruction-vehicule",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Déclarer la destruction d’un véhicule (démarche ANTS)",
    description:
      "Étapes générales à suivre pour préparer et effectuer la déclaration, selon les instructions officielles.",
    step: [
      { "@type": "HowToStep", name: "Préparer les informations", text: "Rassemblez les informations du véhicule et le justificatif de destruction (certificat/CERFA) selon votre cas." },
      { "@type": "HowToStep", name: "Consulter la procédure officielle", text: "Suivez la démarche sur le portail officiel et conservez les confirmations." },
      { "@type": "HowToStep", name: "Conserver les preuves", text: "Archivez certificat et confirmations pour éviter tout litige futur." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – Démarches"
        title="ANTS : déclarer la destruction d’un véhicule (VHU)"
        subtitle="Une vue d’ensemble des points à préparer, des erreurs à éviter et des liens officiels à consulter pour la démarche ANTS."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : après une destruction conforme VHU, une démarche administrative peut être nécessaire. Utilisez toujours les sources officielles à jour."
        enResumePoints={[
          "Préparez le justificatif de destruction (certificat/CERFA) selon le cas.",
          "Suivez la procédure officielle et conservez les confirmations.",
          "Archivez les preuves (utile en cas de litige).",
        ]}
        tocItems={[
          { label: "Avant de commencer", id: "avant" },
          { label: "Étapes (vue d’ensemble)", id: "etapes" },
          { label: "Erreurs fréquentes", id: "erreurs" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="avant" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Avant de commencer
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Justificatif de destruction (selon procédure)</li>
                <li>Informations véhicule (immatriculation, etc.)</li>
                <li>Accès à vos comptes/démarches en ligne</li>
              </ul>

              <h2 id="etapes" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Étapes (vue d’ensemble)
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Consulter l’instruction officielle à jour</li>
                <li>Compléter la démarche en ligne</li>
                <li>Conserver les confirmations</li>
              </ol>

              <h2 id="erreurs" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Erreurs fréquentes
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Se baser sur une source non officielle</li>
                <li>Ne pas conserver les preuves</li>
                <li>Confondre destruction, cession et autres démarches</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "ANTS", description: "Portail officiel des démarches.", url: "https://ants.gouv.fr/" },
                  { label: "Service-public.fr", description: "Fiches officielles selon situation.", url: "https://www.service-public.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – ANTS destruction véhicule" />
    </>
  );
}

