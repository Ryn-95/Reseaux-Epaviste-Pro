import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Certificat de destruction VHU (CERFA) : à quoi sert-il ? | RéseauEpaviste",
  description:
    "Certificat de destruction VHU : rôle, utilité, erreurs fréquentes, et liens officiels. Guide + FAQ pour sécuriser votre démarche.",
  pathname: "/guides/certificat-destruction-vhu",
  openGraphType: "article",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Guides", href: "/guides/certificat-destruction-vhu" },
  { label: "Certificat de destruction", href: "/guides/certificat-destruction-vhu" },
];

const faqItems = [
  { question: "Le certificat est-il obligatoire ?", answer: "Dans une procédure VHU conforme, un certificat de destruction (CERFA) est établi via un centre agréé. Conservez-le." },
  { question: "Combien de temps le conserver ?", answer: "Conservez-le durablement. Il sert de preuve en cas de litige (amendes, assurance, etc.)." },
  { question: "Que faire si je l’ai perdu ?", answer: "Selon le cas, demandez les informations au centre agréé / opérateur et vérifiez la démarche officielle à suivre." },
  { question: "Est-il remis le jour de l’enlèvement ?", answer: "Selon l’organisation, le document est établi dans le cadre VHU. Le processus exact peut varier : vérifiez au téléphone." },
  { question: "À quoi sert-il administrativement ?", answer: "Il prouve la destruction et aide à finaliser les démarches administratives liées au véhicule." },
];

export default function CertificatDestructionVhuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Certificat de destruction VHU : rôle et points de vigilance",
    description:
      "Guide : à quoi sert le certificat de destruction (CERFA), comment le conserver et éviter les erreurs de procédure.",
    author: { "@type": "Organization", name: "RéseauEpaviste" },
    publisher: { "@type": "Organization", name: "RéseauEpaviste", url: "https://reseauepaviste.fr" },
    datePublished: "2024-03-25",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://reseauepaviste.fr/guides/certificat-destruction-vhu",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="guide"
        badge="Guide – Document officiel"
        title="Certificat de destruction VHU (CERFA) : rôle, utilité, erreurs à éviter"
        subtitle="Le certificat de destruction est un document clé d’une procédure VHU conforme. Ce guide explique ce qu’il prouve et quoi conserver."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse courte : le certificat de destruction est la preuve que le véhicule a été remis à un circuit agréé VHU. Conservez-le et suivez les démarches officielles."
        enResumePoints={[
          "Le certificat prouve la destruction dans un cadre conforme VHU.",
          "Conservez-le (preuve utile en cas de litige).",
          "Appuyez-vous sur les sources officielles pour les démarches.",
        ]}
        tocItems={[
          { label: "À quoi sert-il ?", id: "role" },
          { label: "Erreurs fréquentes", id: "erreurs" },
          { label: "Que conserver", id: "conserver" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="role" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                À quoi sert le certificat de destruction ?
              </h2>
              <p>
                Il sert de preuve dans le cadre d’une destruction conforme. C’est un document important à conserver.
              </p>
              <p>
                Voir aussi :{" "}
                <Link href="/guides/ants-destruction-vehicule" className="text-blue-600 hover:underline">
                  démarche ANTS après destruction
                </Link>
                .
              </p>

              <h2 id="erreurs" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Erreurs fréquentes
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Passer par un opérateur non agréé</li>
                <li>Ne pas conserver la preuve</li>
                <li>Confondre cession et destruction</li>
              </ul>

              <h2 id="conserver" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Que conserver ?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Certificat de destruction</li>
                <li>Confirmations de démarches</li>
                <li>Échanges utiles (si litige)</li>
              </ul>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères officiels selon situation.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés.", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Certificat de destruction VHU" />
    </>
  );
}

