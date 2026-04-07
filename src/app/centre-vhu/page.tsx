import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Centre VHU agréé – Trouvez un centre partenaire | RéseauEpaviste",
  description:
    "Trouvez un centre VHU agréé préfecture proche de chez vous. Traitement écologique des véhicules hors d’usage et certificat de destruction officiel. Contactez-nous : 07 45 48 24 64.",
  pathname: "/centre-vhu",
});

const partners = [
  { name: "Centre VHU Île-de-France Nord", address: "12 rue des Ateliers, 93200 Saint-Denis", agrement: "093-2018-001", dept: "93" },
  { name: "Auto Recyclage Parisien", address: "45 avenue de la Ferraille, 94500 Champigny-sur-Marne", agrement: "094-2019-002", dept: "94" },
  { name: "Éco-Démolition 92", address: "8 rue de l'Industrie, 92230 Gennevilliers", agrement: "092-2017-003", dept: "92" },
  { name: "Centre VHU Val-d'Essonne", address: "Route de la Ferme, 91240 Saint-Michel-sur-Orge", agrement: "091-2020-001", dept: "91" },
  { name: "Recyclage Yvelines Auto", address: "ZI des Clayes, 78340 Les Clayes-sous-Bois", agrement: "078-2018-004", dept: "78" },
  { name: "VHU Val-d\'Oise Services", address: "23 rue des Lilas, 95400 Villiers-le-Bel", agrement: "095-2021-002", dept: "95" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un centre VHU agréé ?",
    answer:
      "Un centre VHU (Véhicule Hors d'Usage) agréé est une installation autorisée par la préfecture pour réceptionner, dépolluer et traiter les véhicules hors d'usage. L'agrément garantit que les opérations respectent les normes environnementales (dépollution des huiles, liquides de refroidissement, carburant, airbags) fixées par la directive 2000/53/CE et le décret n°2003-727.",
  },
  {
    question: "Dois-je me déplacer au centre VHU ?",
    answer:
      "Non, vous n'avez pas à vous déplacer. L'épaviste agréé vient chercher votre véhicule à domicile et le transporte vers le centre VHU partenaire. Vous n'avez qu'à préparer votre carte grise barrée et votre pièce d'identité. Le certificat de destruction vous est remis directement lors de l'enlèvement.",
  },
  {
    question: "Quelles sont les obligations légales des centres VHU ?",
    answer:
      "Les centres VHU agréés sont tenus de : procéder à la dépollution complète du véhicule (liquides, gaz, pièces dangereuses), valoriser au minimum 85% de la masse du véhicule (portée à 95% depuis 2015), tenir un registre de tous les véhicules traités, et remettre le certificat de destruction CERFA n°14365 à l'apporteur du véhicule.",
  },
  {
    question: "Comment vérifier l'agrément d'un centre VHU ?",
    answer:
      "Chaque centre VHU agréé dispose d'un numéro d'agrément préfectoral visible sur le certificat de destruction et dans le registre officiel. Vous pouvez également vérifier sur le site de la préfecture de votre département si le professionnel est bien référencé dans la liste des installations agréées.",
  },
];

export default function CentreVHUPage() {
  return (
    <>
      <ServiceJsonLd
        name="Centre VHU agréé"
        url="https://reseauepaviste.fr/centre-vhu"
        areaServed="Île-de-France"
      />
      <HeroSection
        variant="local"
        badge="Agréés Préfecture – 100% Conformes"
        title="Centres VHU agréés partenaires RéseauEpaviste"
        subtitle="Notre réseau s'appuie exclusivement sur des centres de traitement des véhicules hors d'usage agréés préfecture, garantissant un traitement légal et écologique de votre épave."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Qu'est-ce qu'un centre VHU ?
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Un <strong>centre VHU</strong> (Véhicule Hors d'Usage) est une installation industrielle
                spécialisée dans la <strong>collecte, la dépollution et le démantèlement</strong> des
                véhicules automobiles en fin de vie. Ces centres jouent un rôle fondamental dans
                la chaîne du recyclage automobile, permettant de valoriser jusqu'à 95% de la masse
                d'un véhicule selon les objectifs fixés par la directive européenne.
              </p>
              <p>
                Concrètement, un véhicule arrivant dans un centre VHU agréé passe par plusieurs
                étapes : <strong>identification</strong> et vérification administrative,{" "}
                <strong>dépollution</strong> (vidange des huiles moteur et de boîte de vitesse,
                récupération du carburant, des liquides de frein et de refroidissement, dégazage
                de la climatisation, neutralisation des airbags et prétensionneurs de ceinture),{" "}
                <strong>démontage</strong> des pièces réutilisables et recyclables, puis{" "}
                <strong>broyage</strong> de la carcasse pour la valorisation métallurgique.
              </p>
              <p>
                Les <strong>obligations légales</strong> des propriétaires de véhicules sont claires :
                tout VHU doit être confié à un centre agréé ou à un épaviste agréé. Le non-respect de
                cette obligation est punissable d'une amende allant jusqu'à 75 000 € pour les
                professionnels, et de mesures administratives pour les particuliers.
              </p>
            </div>
          </div>

          {/* Partenaires */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A2E" }}>
              Nos centres VHU partenaires en Île-de-France
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map((p) => (
                <div key={p.name} className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800 text-sm">{p.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded font-medium ml-2 flex-shrink-0">Agréé {p.dept}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{p.address}</p>
                  <p className="text-gray-400 text-xs mt-1">Agrément : {p.agrement}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Notre réseau comprend plus de 200 centres VHU agréés en France. Contactez-nous pour
              connaître le centre le plus proche de votre domicile.
            </p>
          </div>

          {/* Zones */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A1A2E" }}>
              Accès par département IDF
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Paris (75)", href: "/epaviste/paris" },
                { label: "Seine-Saint-Denis (93)", href: "/epaviste/seine-saint-denis" },
                { label: "Hauts-de-Seine (92)", href: "/epaviste/hauts-de-seine" },
                { label: "Val-de-Marne (94)", href: "/epaviste/val-de-marne" },
                { label: "Essonne (91)", href: "/epaviste/essonne" },
                { label: "Yvelines (78)", href: "/epaviste/yvelines" },
                { label: "Val-d\'Oise (95)", href: "/epaviste/val-d-oise" },
                { label: "Seine-et-Marne (77)", href: "/epaviste/seine-et-marne" },
              ].map((z) => (
                <Link key={z.href} href={z.href} className="text-sm bg-gray-100 hover:bg-red-50 hover:text-[#D01F2B] text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 transition">
                  {z.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <OfficialSourcesBlock
        title="Textes de référence (centres VHU)"
        intro="Pour vérifier les exigences réglementaires liées aux centres VHU et au traitement des véhicules hors d’usage, consultez :"
        sources={[
          {
            label: "Légifrance – Code de l’environnement",
            description:
              "Dispositions relatives aux véhicules hors d’usage et aux obligations associées.",
            url: "https://www.legifrance.gouv.fr/",
          },
          {
            label: "Service-public.fr – VHU (repères et démarches)",
            description:
              "Informations pratiques pour comprendre la procédure et la finalisation administrative.",
            url: "https://www.service-public.fr/",
          },
          {
            label: "ANTS – Finaliser la radiation après destruction",
            description:
              "Portail officiel pour déclarer la destruction du véhicule.",
            url: "https://ants.gouv.fr/",
          },
        ]}
      />

      <div className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <ContextualLinksBlock
            title="Liens utiles (procédure VHU)"
            links={[
              { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Procédure légale, documents, certificat." },
              { href: "/wiki-epaviste/vehicule-hors-usage", label: "Définition VHU", description: "Comprendre le statut et les obligations." },
              { href: "/epaviste/ile-de-france", label: "Épaviste Île‑de‑France", description: "Hub IDF + pages locales par département." },
              { href: "/faq", label: "FAQ", description: "Réponses rapides (documents, délais, fourrière…)."},
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="Questions sur les centres VHU" />
    </>
  );
}
