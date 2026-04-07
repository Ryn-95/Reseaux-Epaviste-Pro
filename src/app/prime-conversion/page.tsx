import Breadcrumb from "@/components/Breadcrumb";
import CallbackForm from "@/components/CallbackForm";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Prime à la Conversion 2026 France | Réseaux Épaviste",
  description:
    "Découvrez les conditions de la prime à la conversion 2026 pour la destruction de votre véhicule. Épaviste agréé VHU. Obtenez votre prime, contactez-nous.",
  pathname: "/prime-conversion",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Prime à la conversion", href: "/prime-conversion" },
];

const faqItems = [
  {
    question: "La prime à la conversion est-elle automatique ?",
    answer:
      "Non. Elle dépend de critères (profil, véhicule remplacé, véhicule acquis, règles en vigueur). Vérifiez les conditions officielles avant toute démarche.",
  },
  {
    question: "La prime à la conversion remplace-t-elle l’enlèvement d’épave ?",
    answer:
      "Non. La prime concerne une aide financière liée au remplacement d’un véhicule. L’enlèvement d’un VHU et la destruction doivent suivre une procédure conforme via opérateur agréé.",
  },
  {
    question: "Quels documents faut-il généralement prévoir ?",
    answer:
      "Les documents varient selon le cas. En pratique, préparez une pièce d’identité, des justificatifs liés au véhicule, et suivez les instructions des portails officiels.",
  },
  {
    question: "Où vérifier les montants et les critères 2025 ?",
    answer:
      "Sur les sites officiels (Service‑Public, administrations compétentes). Les règles évoluent, il faut se baser sur la version à jour.",
  },
  {
    question: "Puis-je cumuler avec d’autres dispositifs ?",
    answer:
      "Selon les dispositifs et votre situation, des cumuls peuvent exister. Vérifiez la réglementation à jour sur les sources officielles.",
  },
];

export default function PrimeConversionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Prime à la conversion : conditions, démarches et points d’attention",
    description:
      "Guide pratique sur la prime à la conversion (prime à la casse) : conditions, démarches, documents, et liens vers sources officielles.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-01",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/prime-conversion",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ServiceJsonLd name="Accompagnement VHU (informations)" url="https://reseauepaviste.fr/prime-conversion" areaServed="France" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Guide – Prime à la conversion"
        title="Prime à la conversion (prime à la casse) : ce qu’il faut vérifier"
        subtitle="Ce guide explique les notions clés, les démarches et les sources officielles à consulter. Pour un véhicule hors d’usage (VHU), nous vous orientons aussi sur la procédure d’enlèvement et de destruction."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Objectif : comprendre les critères de la prime à la conversion et éviter les erreurs de procédure. Les règles évoluent : utilisez toujours les sources officielles."
        tocItems={[
          { label: "À quoi sert la prime", id: "a-quoi-sert" },
          { label: "Points à vérifier", id: "points-a-verifier" },
          { label: "Démarches (vue d’ensemble)", id: "demarches" },
          { label: "Liens officiels", id: "liens-officiels" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="a-quoi-sert" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                À quoi sert la prime à la conversion ?
              </h2>
              <p>
                La prime à la conversion (souvent appelée prime à la casse) est un dispositif d’aide visant à encourager le remplacement d’un véhicule, selon des critères définis par la réglementation.
              </p>

              <h2 id="points-a-verifier" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Points à vérifier avant toute démarche
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Éligibilité de votre situation et du véhicule concerné</li>
                <li>Conditions liées au véhicule acquis (si applicable)</li>
                <li>Délais, justificatifs et pièces à conserver</li>
                <li>Procédure VHU : certificat de destruction et démarches administratives</li>
              </ul>

              <h2 id="demarches" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Démarches (vue d’ensemble)
              </h2>
              <p>
                Les démarches exactes varient. En pratique, commencez par vérifier les conditions officielles à jour, puis conservez tous les justificatifs et documents liés à la destruction du véhicule (si concerné).
              </p>
              <p>
                Voir aussi :{" "}
                <Link href="/enlevement-epave" className="text-blue-600 hover:underline">
                  enlèvement d’épave (VHU)
                </Link>
                .
              </p>

              <h2 id="liens-officiels" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Liens officiels
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères et fiches pratiques officielles.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives liées aux véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Accès aux textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <div className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <ContextualLinksBlock
            title="Guides associés"
            links={[
              { href: "/prime-conversion/conditions-2025", label: "Conditions 2025 (checklist)", description: "HowTo + erreurs fréquentes + sources." },
              { href: "/guides/ants-destruction-vehicule", label: "ANTS : déclarer la destruction", description: "Vue d’ensemble + points de vigilance." },
              { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Procédure conforme et certificat." },
              { href: "/faq", label: "FAQ", description: "Réponses rapides et cas particuliers." },
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="FAQ – Prime à la conversion" />
    </>
  );
}

