import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Prime à la conversion 2025 – Conditions et démarches | RéseauEpaviste",
  description:
    "Prime à la conversion 2025 : points à vérifier, démarches, documents et liens officiels. Guide + FAQ pour éviter les erreurs.",
  pathname: "/prime-conversion/conditions-2025",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Prime à la conversion", href: "/prime-conversion" },
  { label: "Conditions 2025", href: "/prime-conversion/conditions-2025" },
];

const faqItems = [
  {
    question: "Où trouver les conditions 2025 à jour ?",
    answer:
      "Sur les sources institutionnelles (Service‑Public, Légifrance, portails officiels). Les règles changent : ne vous fiez pas à des pages non datées.",
  },
  {
    question: "Quels justificatifs conserver ?",
    answer:
      "Conservez tous les documents relatifs au véhicule remplacé et, si un VHU est détruit, le certificat de destruction et les preuves de démarches administratives.",
  },
  {
    question: "La destruction VHU est-elle une étape obligatoire ?",
    answer:
      "Selon les cas, des conditions peuvent exister. Vérifiez la réglementation à jour et appliquez toujours une procédure conforme via opérateurs agréés.",
  },
  {
    question: "Puis-je déposer un dossier si je ne suis pas certain ?",
    answer:
      "Il est recommandé de vérifier l’éligibilité avant toute démarche, afin d’éviter des rejets ou des demandes de pièces complémentaires.",
  },
  {
    question: "La prime est-elle compatible avec d’autres aides ?",
    answer:
      "Des cumuls peuvent être possibles selon les dispositifs. Vérifiez systématiquement les sources officielles à jour.",
  },
];

export default function PrimeConversionConditions2025Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prime à la conversion 2025 : conditions et démarches (guide)",
    description:
      "Checklist des points à vérifier et liens officiels pour la prime à la conversion 2025.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2025-01-10",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/prime-conversion/conditions-2025",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Vérifier les conditions de la prime à la conversion 2025",
    description:
      "Étapes simples pour vérifier les règles, préparer les documents et sécuriser la procédure VHU si applicable.",
    step: [
      {
        "@type": "HowToStep",
        name: "Consulter la source officielle à jour",
        text: "Commencez par consulter Service‑Public et les textes consolidés sur Légifrance afin de vérifier les conditions applicables à votre situation.",
      },
      {
        "@type": "HowToStep",
        name: "Vérifier l’éligibilité des véhicules",
        text: "Vérifiez les critères du véhicule remplacé et du véhicule acquis (si applicable), ainsi que les exigences de justificatifs.",
      },
      {
        "@type": "HowToStep",
        name: "Sécuriser la procédure VHU",
        text: "Si un véhicule doit être détruit, passez par un circuit agréé (VHU) et conservez le certificat de destruction et les preuves de démarches administratives.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Guide 2025 – Prime à la conversion"
        title="Prime à la conversion 2025 : conditions, checklist et sources officielles"
        subtitle="Ce guide vous aide à vérifier les critères et à préparer les documents, avec des liens vers les sources institutionnelles."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Objectif : réduire les erreurs de dossier et s’appuyer sur les informations officielles à jour."
        enResumePoints={[
          "Vérifiez toujours les règles 2025 sur des sources officielles.",
          "Conservez tous les justificatifs liés au véhicule et à la procédure.",
          "Si destruction VHU : certificat de destruction + démarches administratives.",
        ]}
        tocItems={[
          { label: "Checklist express", id: "checklist" },
          { label: "Erreurs fréquentes", id: "erreurs" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="checklist" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Checklist express (avant de démarrer)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Lire la fiche officielle à jour (date de mise à jour)</li>
                <li>Vérifier critères véhicule remplacé / véhicule acquis</li>
                <li>Préparer la liste de justificatifs (identité, situation)</li>
                <li>Si VHU : procédure conforme + certificat de destruction</li>
              </ul>

              <h2 id="erreurs" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Erreurs fréquentes (à éviter)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Se baser sur un article non daté ou non officiel</li>
                <li>Ne pas conserver les preuves (certificat, démarches)</li>
                <li>Confondre prime à la conversion et autres dispositifs</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Fiches officielles et simulateurs selon cas.", url: "https://www.service-public.fr/" },
                  { label: "Légifrance", description: "Textes consolidés et versions à jour.", url: "https://www.legifrance.gouv.fr/" },
                  { label: "ANTS", description: "Démarches liées aux véhicules.", url: "https://ants.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Prime à la conversion 2025" />
    </>
  );
}

