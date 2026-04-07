import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import GuideWikiArticleLayout from "@/components/GuideWikiArticleLayout";
import HeroSection from "@/components/HeroSection";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Épave après inondation – Enlèvement & procédure VHU | RéseauEpaviste",
  description:
    "Voiture inondée : quand devient-elle une épave (VHU) ? Procédure, documents, accessibilité, erreurs à éviter et sources officielles. Appelez 07 45 48 24 64.",
  pathname: "/enlevement-epave/voiture-inondee",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Enlèvement d’épave", href: "/enlevement-epave" },
  { label: "Voiture inondée", href: "/enlevement-epave/voiture-inondee" },
];

const faqItems = [
  {
    question: "Une voiture inondée est-elle forcément une épave ?",
    answer:
      "Pas forcément. Cela dépend des dégâts, de la sécurité et des décisions (assurance / réparation). Si le véhicule est destiné à la destruction, il doit suivre une procédure conforme VHU.",
  },
  {
    question: "Quels documents prévoir ?",
    answer:
      "En règle générale : carte grise si disponible et pièce d’identité. En cas de situation particulière, expliquez le contexte au téléphone pour être guidé.",
  },
  {
    question: "Peut-on enlever une voiture inondée en parking souterrain ?",
    answer:
      "Souvent oui, selon la hauteur et l’accès. Indiquez la hauteur libre, les manœuvres et les contraintes d’accès (badge/code).",
  },
  {
    question: "Que faire si le véhicule est non roulant ?",
    answer:
      "Indiquez que le véhicule est non roulant : l’opérateur prévoit le matériel adapté. L’accessibilité du lieu est déterminante.",
  },
  {
    question: "Dois-je attendre avant l’enlèvement ?",
    answer:
      "Si vous hésitez sur le statut du véhicule, commencez par sécuriser le site et vérifier les démarches officielles. En cas de décision de destruction, ne passez pas par un opérateur non agréé.",
  },
];

export default function VoitureInondeePage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection
        variant="urgence"
        badge="Cas particulier – inondation"
        title="Voiture inondée : enlèvement et procédure VHU (épave)"
        subtitle="Une voiture inondée peut devenir non roulante ou dangereuse. Cette page résume quoi préparer, comment se passe l’enlèvement, et comment sécuriser une procédure conforme VHU."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <GuideWikiArticleLayout
        chapapo="Réponse rapide : si le véhicule est destiné à la destruction, il doit être remis à un circuit agréé (VHU) et un certificat de destruction est établi. Les règles exactes dépendent de votre situation et des démarches."
        enResumePoints={[
          "Indiquez l’adresse exacte et l’accessibilité (parking, cour, voie publique).",
          "Précisez l’état : roulant/non roulant, eau dans l’habitacle, risques électriques.",
          "En cas de destruction : procédure VHU + certificat + démarches administratives.",
        ]}
        tocItems={[
          { label: "Quand parle-t-on d’épave ?", id: "quand-epave" },
          { label: "Préparer l’enlèvement", id: "preparer" },
          { label: "Accès difficiles", id: "acces" },
          { label: "Sources officielles", id: "sources" },
        ]}
      >
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
              <h2 id="quand-epave" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Quand parle-t-on d’épave / VHU après inondation ?
              </h2>
              <p>
                Le statut et la décision (réparation ou destruction) dépendent des dégâts et du contexte. Si une destruction est engagée, la remise doit se faire dans un cadre VHU conforme.
              </p>

              <h2 id="preparer" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Préparer l’enlèvement (gain de temps)
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Adresse exacte + conditions d’accès</li>
                <li>Véhicule roulant/non roulant</li>
                <li>Hauteur parking souterrain (si concerné)</li>
                <li>Documents disponibles (carte grise, identité)</li>
              </ul>
              <p>
                Voir la checklist :{" "}
                <Link href="/guides/checklist-dossier-epave" className="text-blue-600 hover:underline">
                  dossier épave (documents/accès)
                </Link>
                .
              </p>

              <h2 id="acces" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Accès difficiles : parking, résidence, terrain privé
              </h2>
              <p>
                L’accessibilité est souvent le facteur déterminant (hauteur, manœuvres, badges, voie privée). Signalez-le dès l’appel.
              </p>

              <h2 id="sources" className="text-2xl font-bold" style={{ color: "#1A1A2E" }}>
                Sources officielles
              </h2>
              <OfficialSourcesBlock
                sources={[
                  { label: "Service-public.fr", description: "Repères et démarches liées aux véhicules.", url: "https://www.service-public.fr/" },
                  { label: "ANTS", description: "Démarches administratives véhicules.", url: "https://ants.gouv.fr/" },
                  { label: "Légifrance", description: "Textes consolidés (cadre environnement/VHU).", url: "https://www.legifrance.gouv.fr/" },
                ]}
              />
            </div>
          </div>
        </article>
      </GuideWikiArticleLayout>

      <FAQSection items={faqItems} title="FAQ – Voiture inondée (épave/VHU)" />
    </>
  );
}

