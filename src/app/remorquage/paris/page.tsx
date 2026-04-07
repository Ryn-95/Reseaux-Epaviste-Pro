import { buildPageMetadata } from "@/lib/seo/metadata";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

export const metadata = buildPageMetadata({
  title: "Remorquage Paris 24h/7j – Garage de votre choix | RéseauEpaviste",
  description:
    "Remorquage à Paris 24h/7j : intervention rapide et transport vers le garage de votre choix ou vers un centre partenaire selon le cas. Appelez 07 45 48 24 64.",
  pathname: "/remorquage/paris",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Remorquage", href: "/remorquage" },
  { label: "Remorquage Paris", href: "/remorquage/paris" },
];

const faqItems = [
  {
    question: "Pouvez-vous remorquer vers le garage que je choisis ?",
    answer:
      "Oui. Vous êtes libre de désigner le garage (carrossier/atelier) de votre choix. L’acheminement se fait avec un transport adapté au véhicule.",
  },
  {
    question: "Combien coûte un remorquage à Paris ?",
    answer:
      "Le coût dépend de la distance, du type de véhicule et des conditions d’intervention. On vous communique les modalités au moment de la demande.",
  },
  {
    question: "Remorquez-vous aussi les motos et les deux-roues ?",
    answer:
      "Selon le type de véhicule, oui. Indiquez la motorisation et l’état (roulant / non roulant) pour adapter le matériel.",
  },
  {
    question: "Intervenez-vous la nuit et le week-end ?",
    answer:
      "Oui. Le service est disponible 24h/24 – 7j/7. L’organisation dépend de la disponibilité locale.",
  },
  {
    question: "Quels documents fournir ?",
    answer:
      "Carte grise et pièce d’identité sont généralement demandées. En complément, la référence d’assurance ou d’assistance peut aider pour le traitement du dossier.",
  },
];

export default function RemorquageParisPage() {
  return (
    <>
      <LocalBusinessJsonLd
        name="RéseauEpaviste – Remorquage Paris"
        url="https://reseauepaviste.fr/remorquage/paris"
        telephone="+33745482464"
        cityOrArea="Paris"
        rating={4.8}
        reviewCount={1247}
        postalCode="75000"
        lat={48.8566}
        lng={2.3522}
      />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Paris – Remorquage 24h/7j"
        title="Remorquage Paris 24h/7j – Garage de votre choix"
        subtitle="Votre véhicule est immobilisé ? Nous organisons le remorquage à Paris et le transport vers le garage choisi, avec prise en charge adaptée."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Qui est concerné ?</h2>
            <p className="text-[#1F2933] text-sm leading-relaxed mt-3">
              Conducteurs à Paris nécessitant un transport encadré : accident, panne grave, véhicule non roulant ou besoin de prise en charge vers un atelier.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Dans quels cas faire appel à nous ?</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#374151] list-disc list-inside">
              <li>Panne mécanique ou immobilisation</li>
              <li>Accident et mise en sécurité</li>
              <li>Véhicule bloqué en parking / lieu difficile</li>
              <li>Besoin de transport vers le garage choisi</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Comment se déroule le remorquage ?</h2>
            <div className="mt-3 space-y-3">
              {[
                {
                  title: "1. Vous appelez",
                  desc: "Vous indiquez l’adresse à Paris, l’accès (parking souterrain, résidence) et le type de véhicule.",
                },
                {
                  title: "2. On organise le transport",
                  desc: "Choix du mode d’arrimage et confirmation de la destination (garage).",
                },
                {
                  title: "3. Le transport est exécuté",
                  desc: "Acheminement vers l’atelier prévu, avec procédures adaptées aux conditions locales.",
                },
              ].map((s) => (
                <div key={s.title} className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-lg p-5">
                  <div className="font-bold text-[#111827]">{s.title}</div>
                  <div className="text-sm text-[#374151] mt-2 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Quels documents fournir ?</h2>
            <p className="text-[#1F2933] text-sm leading-relaxed mt-3">
              Carte grise et pièce d’identité. En fonction de votre situation, la référence d’assurance peut être utile.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Combien de temps ça prend ?</h2>
            <p className="text-[#1F2933] text-sm leading-relaxed mt-3">
              A titre indicatif : délai variable selon la zone de Paris, la disponibilité et l’accès au véhicule. TODO : ajouter vos délais réels.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E5E7EB]">
            <h2 className="text-2xl font-bold text-[#111827]">Demander un rappel</h2>
            <div className="mt-4 max-w-3xl">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions fréquentes – Remorquage Paris" />
    </>
  );
}

