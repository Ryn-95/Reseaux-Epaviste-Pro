import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { OfficialSourcesBlock } from "@/components/OfficialSourcesBlock";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Épaviste agréé 24h/7j – Enlèvement d’épave gratuit | RéseauEpaviste",
  description:
    "Trouvez un épaviste agréé partout en France : enlèvement d’épave (VHU) pris en charge, certificat de destruction officiel et centres VHU partenaires. Appelez le 01 84 17 32 18.",
  pathname: "/epaviste",
});

const vehicleTypes = [
  { icon: "🚗", label: "Voitures particulières", desc: "Toutes marques, tous modèles, tous états" },
  { icon: "🏍️", label: "Motos & Scooters", desc: "Deux-roues motorisés de toutes cylindrées" },
  { icon: "🚐", label: "Utilitaires & Vans", desc: "Fourgons, camionnettes, vans de livraison" },
  { icon: "🚛", label: "Poids lourds", desc: "Camions et véhicules de transport (sur devis)" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un épaviste agréé ?",
    answer:
      "Un épaviste agréé est un professionnel autorisé par la préfecture à enlever et traiter les véhicules hors d'usage (VHU). Il doit être titulaire d'un agrément préfectoral et respecter les normes environnementales de la directive 2000/53/CE. RéseauEpaviste ne travaille qu'avec des épavistes certifiés.",
  },
  {
    question: "Dans quel délai intervenez-vous ?",
    answer:
      "En Île-de-France, notre délai d'intervention est de 30 minutes à 2 heures. En province, l'intervention a lieu sous 24 à 48 heures. Nous sommes disponibles 7 jours sur 7, y compris les week-ends et les jours fériés, 24 heures sur 24.",
  },
  {
    question: "L'enlèvement est-il vraiment gratuit ?",
    answer:
      "Oui, l'enlèvement est 100% gratuit pour vous. Les centres VHU financent la prestation grâce à la valorisation des matériaux recyclables (métaux, pièces réutilisables). Il n'y a aucun frais de déplacement, ni de main-d'œuvre à votre charge.",
  },
  {
    question: "Que se passe-t-il si mon véhicule est dans un endroit difficile d'accès ?",
    answer:
      "Nos équipes sont équipées pour intervenir dans la plupart des situations complexes : sous-sol de parking, cave, terrain en pente, propriété fermée. Certains cas peuvent nécessiter une grue ou un équipement spécial, ce qui peut engendrer un supplément de coût. Renseignez-vous à l'avance en appelant le 01 84 17 32 18.",
  },
  {
    question: "Puis-je obtenir une prime à la casse en plus ?",
    answer:
      "La prime à la conversion (aide à l'achat d'un véhicule propre) est une aide de l'État qui peut être combinée avec l'enlèvement gratuit de votre épave. Elle est soumise à conditions de revenus et au type de véhicule acheté. Notre équipe peut vous orienter vers les aides disponibles.",
  },
  {
    question: "Avez-vous besoin de la carte grise pour enlever le véhicule ?",
    answer:
      "La carte grise est requise dans la grande majorité des cas. Cependant, en cas de perte, de vol du document, ou pour un véhicule très ancien, des solutions existent. Consultez notre page dédiée ou appelez-nous pour étudier votre cas particulier.",
  },
];

export default function EpavisteNationalePage() {
  return (
    <>
      <ServiceJsonLd
        name="Épavistes agréés (VHU)"
        url="https://reseauepaviste.fr/epaviste"
        areaServed="France"
      />

      <HeroSection
        variant="urgence"
        badge="Certifié VHU – Agréé Préfecture"
        title="Votre épaviste agréé en France – Enlèvement gratuit"
        subtitle="RéseauEpaviste met en relation des particuliers et des professionnels avec des épavistes certifiés partout en France. Intervention rapide, sans frais, avec remise du certificat de destruction officiel."
        ctaText="Appeler le 01 84 17 32 18"
        ctaHref="tel:+33184173218"
      />

      <TrustBadges />

      {/* Qu'est-ce qu'un épaviste */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1A1A2E" }}>
            Qu'est-ce qu'un épaviste ? Rôle et obligations légales
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Un <strong>épaviste</strong> est un professionnel du secteur automobile spécialisé dans
              la collecte, le transport et le traitement des <strong>véhicules hors d'usage (VHU)</strong>.
              Contrairement à une idée reçue, l'activité d'épaviste est strictement encadrée par la loi
              française et la réglementation européenne.
            </p>
            <p>
              Pour exercer légalement, un épaviste doit être titulaire d'un <strong>agrément
              préfectoral</strong> délivré par les services de la préfecture de son département.
              Cet agrément atteste que le professionnel respecte les normes environnementales fixées
              par la <strong>directive européenne 2000/53/CE</strong> relative aux véhicules hors
              d'usage, transposée en droit français par le décret n°2003-727 du 1er août 2003.
            </p>
            <p>
              L'épaviste agréé est tenu de remettre au propriétaire du véhicule un{" "}
              <strong>certificat de destruction</strong> (formulaire CERFA n°14365). Ce document
              officiel est indispensable : il libère le propriétaire de toute responsabilité civile
              et fiscale liée au véhicule, et permet la radiation définitive auprès de l'ANTS
              (Agence Nationale des Titres Sécurisés).
            </p>
            <p>
              Faire appel à un épaviste non agréé est non seulement illégal, mais expose le
              propriétaire à des risques importants : continuité des amendes de stationnement,
              responsabilité en cas d'accident, pollution de l'environnement. RéseauEpaviste garantit
              que tous ses partenaires sont agréés et assurés.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir RéseauEpaviste */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1A1A2E" }}>
            Pourquoi choisir RéseauEpaviste ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Réseau national certifié", desc: "Plus de 200 partenaires épavistes agréés couvrant 48 départements français, avec des délais d'intervention parmi les plus rapides du marché." },
              { title: "Gratuité totale", desc: "L'enlèvement, le transport et le traitement de votre épave sont entièrement pris en charge. Aucun frais ne vous sera demandé." },
              { title: "Transparence documentaire", desc: "Certificat de destruction CERFA remis sur place le jour de l'intervention. Toutes les démarches administratives sont gérées par nos équipes." },
              { title: "Engagement environnemental", desc: "100% des véhicules sont traités dans des centres agréés. Les fluides sont neutralisés, les métaux recyclés, les pièces réutilisables valorisées." },
              { title: "Disponibilité maximale", desc: "Nos services sont accessibles 24h sur 24, 7 jours sur 7, y compris les jours fériés. Urgences traitées en priorité." },
              { title: "4.8/5 de satisfaction", desc: "Plus de 1 247 avis clients vérifiés témoignent de la qualité et du sérieux de notre réseau. Votre satisfaction est notre priorité absolue." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de véhicules */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: "#1A1A2E" }}>
            Types de véhicules acceptés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vehicleTypes.map((v) => (
              <div key={v.label} className="text-center bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                <span className="text-3xl block mb-2">{v.icon}</span>
                <span className="font-semibold text-sm text-gray-800 block mb-1">{v.label}</span>
                <span className="text-xs text-gray-500">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1A1A2E" }}>
            Le déroulement d'une intervention
          </h2>
          <div className="space-y-6">
            {[
              { num: "1", title: "Prise de contact", desc: "Appelez le 01 84 17 32 18 ou remplissez notre formulaire en ligne. Un conseiller évalue votre situation en 2 minutes et vous met en relation avec l'épaviste le plus proche disponible." },
              { num: "2", title: "Confirmation et planification", desc: "L'épaviste vous confirme l'heure d'arrivée et vous indique les documents à préparer (carte grise barrée, pièce d'identité). En IDF, l'intervention est souvent possible le jour même." },
              { num: "3", title: "Enlèvement sur place", desc: "L'épaviste agréé se présente à l'adresse convenue avec son véhicule de remorquage. Il charge l'épave proprement et rapidement, sans dommage à votre propriété." },
              { num: "4", title: "Remise du certificat de destruction", desc: "Sur place, l'épaviste vous remet le certificat de destruction CERFA n°14365 dûment complété. Ce document met fin à votre responsabilité sur le véhicule. Vous pouvez ensuite procéder à la radiation auprès de l'ANTS." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-full text-white font-bold flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D01F2B" }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#1A1A2E" }}>
            Nos zones d'intervention en Île-de-France
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Épaviste Paris", href: "/epaviste/paris" },
              { label: "Épaviste Seine-Saint-Denis", href: "/epaviste/seine-saint-denis" },
              { label: "Épaviste Hauts-de-Seine", href: "/epaviste/hauts-de-seine" },
              { label: "Épaviste Val-de-Marne", href: "/epaviste/val-de-marne" },
              { label: "Épaviste Essonne", href: "/epaviste/essonne" },
              { label: "Épaviste Yvelines", href: "/epaviste/yvelines" },
              { label: "Épaviste Val-d\'Oise", href: "/epaviste/val-d-oise" },
              { label: "Épaviste Seine-et-Marne", href: "/epaviste/seine-et-marne" },
            ].map((zone) => (
              <Link
                key={zone.href}
                href={zone.href}
                className="bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-[#D01F2B] text-sm px-4 py-2 rounded-full border border-gray-200 transition"
              >
                {zone.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4">
          <CallbackForm />
        </div>
      </section>

      <OfficialSourcesBlock
        title="Textes et services publics de référence (VHU)"
        intro="Pour vérifier le cadre légal lié aux véhicules hors d’usage, consultez les textes officiels et services publics suivants :"
        sources={[
          {
            label: "Légifrance – Code de l’environnement",
            description:
              "Textes consolidés relatifs au cadre VHU et au traitement des véhicules hors d’usage.",
            url: "https://www.legifrance.gouv.fr/",
          },
          {
            label: "Service-public.fr – Véhicule hors d’usage (VHU)",
            description: "Repères pratiques et démarches selon votre situation.",
            url: "https://www.service-public.fr/",
          },
          {
            label: "ANTS – Déclarer la cession ou la destruction",
            description:
              "Portail officiel pour finaliser les démarches administratives.",
            url: "https://ants.gouv.fr/",
          },
        ]}
      />

      <div className="bg-white border-y border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <ContextualLinksBlock
            title="Accès rapide (services liés)"
            links={[
              { href: "/enlevement-epave", label: "Enlèvement d’épave (VHU)", description: "Procédure légale, documents, certificat." },
              { href: "/centre-vhu", label: "Centres VHU agréés", description: "Traitement, dépollution, agrément." },
              { href: "/epaviste/ile-de-france", label: "Épaviste Île‑de‑France", description: "Hub IDF + accès aux départements." },
              { href: "/guides/checklist-dossier-epave", label: "Checklist dossier épave", description: "Préparer l’appel et éviter les blocages." },
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="Questions sur les épavistes agréés" />
    </>
  );
}
