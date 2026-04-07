import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Véhicule VEI : que faire ? (guide) | RéseauEpaviste",
  description:
    "Véhicule économiquement irréparable (VEI) : options, points d’attention, documents, et quoi faire si le véhicule devient VHU. Guide + FAQ + sources officielles.",
  pathname: "/guides/que-faire-vehicule-vei",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/que-faire-vehicule-vei" },
  { label: "Véhicule VEI", href: "/guides/que-faire-vehicule-vei" },
];

const faqItems = [
  {
    question: "VEI veut-il dire que la voiture doit être détruite ?",
    answer:
      "Pas nécessairement. Cela dépend du contexte, des décisions et des démarches. Si une destruction est engagée, elle doit suivre une procédure conforme VHU.",
  },
  {
    question: "Quels documents prévoir ?",
    answer:
      "Préparez les documents disponibles (véhicule, identité) et conservez toute preuve liée au dossier. Les exigences exactes varient selon le cas.",
  },
  {
    question: "Puis-je vendre un véhicule VEI ?",
    answer:
      "Selon les règles applicables et la situation, des limitations peuvent exister. Vérifiez la réglementation et les démarches sur des sources officielles.",
  },
  {
    question: "Que faire si le véhicule n’est plus roulant ?",
    answer:
      "Un enlèvement/remorquage peut être nécessaire. Indiquez l’accessibilité et l’état du véhicule dès l’appel pour prévoir le matériel adapté.",
  },
  {
    question: "À qui s’adresser pour comprendre la procédure ?",
    answer:
      "Commencez par les sources officielles et votre assureur. Pour la partie enlèvement VHU, privilégiez une procédure documentée et conforme.",
  },
];

export default function VehiculeVeiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Véhicule VEI : options et démarches (guide)",
    description:
      "Comprendre quoi faire en cas de véhicule économiquement irréparable (VEI) et comment agir si le véhicule doit suivre la filière VHU.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-29",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/que-faire-vehicule-vei",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Que faire si mon véhicule est VEI (vue d’ensemble)",
    description:
      "Étapes générales pour clarifier votre situation, sécuriser la procédure et décider (réparation, cession, VHU).",
    step: [
      { "@type": "HowToStep", name: "Clarifier le statut", text: "Rassemblez les éléments (assurance, décision, état du véhicule) et identifiez l’option la plus adaptée." },
      { "@type": "HowToStep", name: "Vérifier les démarches", text: "Consultez les sources officielles à jour pour les démarches liées au véhicule." },
      { "@type": "HowToStep", name: "Si destruction : filière VHU", text: "Si le véhicule part en destruction, passez par une procédure VHU conforme et conservez les preuves (certificat, confirmations)." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – assurance / procédure"
        title="Véhicule VEI : que faire (options, démarches, VHU)"
        subtitle="Un guide de repères pour clarifier vos options et sécuriser la procédure. En cas de destruction, la filière VHU doit rester conforme et documentée."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : VEI signifie que la réparation n’est souvent pas pertinente économiquement, mais les options et démarches dépendent du dossier. En cas de destruction, appliquez une procédure VHU conforme."
        enResumePoints={[
          "Clarifiez votre dossier (assurance, état du véhicule).",
          "Vérifiez les démarches sur des sources officielles à jour.",
          "Si destruction : certificat + preuves + procédure VHU.",
        ]}
        tocItems={[
          { label: "Comprendre VEI", id: "comprendre" },
          { label: "Options possibles", id: "options" },
          { label: "Si destruction (VHU)", id: "vhu" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="comprendre" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Comprendre le statut VEI
              </h2>
              <p>
                Le statut VEI intervient dans un contexte d’évaluation économique et de dossier. Les conséquences pratiques dépendent du cas (réparation, cession, destruction).
              </p>

              <h2 id="options" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Options possibles (selon dossier)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Réparation (si applicable)</li>
                <li>Cession selon conditions</li>
                <li>Destruction via filière VHU</li>
              </ul>

              <h2 id="vhu" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Si destruction : sécuriser la filière VHU
              </h2>
              <p>
                Si le véhicule part en destruction, privilégiez une procédure conforme et conservez le certificat de destruction.
              </p>
              <p>
                Voir :{" "}
                <Link href="/enlevement-epave" className="text-blue-600 hover:underline">
                  enlèvement d’épave (VHU)
                </Link>{" "}
                et{" "}
                <Link href="/guides/certificat-destruction-vhu" className="text-blue-600 hover:underline">
                  certificat de destruction
                </Link>
                .
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères et démarches officielles.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Véhicule VEI" />
    </>
  );
}

