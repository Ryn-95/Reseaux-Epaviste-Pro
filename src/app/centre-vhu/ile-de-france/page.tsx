import { buildPageMetadata } from "@/lib/seo/metadata";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Centre VHU agréé en Île-de-France – RéseauEpaviste",
  description:
    "Trouvez un centre VHU agréé en Île-de-France : traitement des véhicules hors d’usage, dépollution et certificat de destruction officiel. Appelez 07 45 48 24 64.",
  pathname: "/centre-vhu/ile-de-france",
});

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Centre VHU", href: "/centre-vhu" },
  { label: "Île-de-France", href: "/centre-vhu/ile-de-france" },
];

const faqItems = [
  {
    question: "Dois-je me déplacer au centre VHU ?",
    answer:
      "En général, non : l’enlèvement est organisé par un épaviste agréé et le véhicule est transporté vers le centre VHU partenaire. Le certificat de destruction est remis.",
  },
  {
    question: "Comment vérifier qu’un centre VHU est bien agréé ?",
    answer:
      "L’agrément est associé à un numéro préfectoral. Vous pouvez aussi demander les informations au moment de l’organisation de la prise en charge.",
  },
  {
    question: "Quels documents préparer pour un centre VHU ?",
    answer:
      "Carte grise et pièce d’identité sont généralement nécessaires. En cas de situation particulière, demandez une guidance au téléphone.",
  },
  {
    question: "Le traitement environnemental est-il encadré ?",
    answer:
      "Oui. Les centres agréés réalisent la dépollution et le traitement selon les obligations réglementaires applicables aux VHU.",
  },
];

export default function CentreVHUIdfPage() {
  return (
    <>
      <ServiceJsonLd name="Centre VHU agréé" url="https://reseauepaviste.fr/centre-vhu/ile-de-france" areaServed="Île-de-France" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        variant="local"
        badge="Île-de-France – Centres VHU agréés"
        title="Centre VHU agréé en Île-de-France – Traitement légal des VHU"
        subtitle="Centres VHU agréés partenaires : dépollution, valorisation et certificat de destruction officiel. Demandez un rappel pour être orienté vers le centre le plus adapté."
        ctaText="Appeler le 07 45 48 24 64"
        ctaHref="tel:+33745482464"
      />

      <section className="py-14 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Qui est concerné ?</h2>
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              Propriétaires de véhicules hors d’usage (VHU) en Île-de-France, épavistes et acteurs concernés par la chaîne de traitement réglementée.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Dans quels cas faire appel à nous ?</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#374151] list-disc list-inside">
              <li>Besoin d’un traitement VHU encadré et conforme</li>
              <li>Demande de certificat de destruction officiel</li>
              <li>Orientation vers un centre proche selon votre zone</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Comment se déroule l’orientation vers un centre ?</h2>
            <div className="mt-3 space-y-3">
              {[
                { title: "1. Contact", desc: "Vous indiquez la zone en Île-de-France, le type de véhicule et l’adresse." },
                { title: "2. Vérification du contexte", desc: "On confirme la procédure (enlèvement/transport) selon l’accessibilité." },
                { title: "3. Prise en charge", desc: "Le véhicule rejoint le centre VHU partenaire, puis le certificat est remis." },
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
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              Carte grise (ou solution applicable selon le cas) et pièce d’identité. TODO : préciser les justificatifs pour les situations spécifiques.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Combien de temps ça prend ?</h2>
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              A titre indicatif : délai variable selon la zone en Île-de-France et l’organisation logistique. On vous confirme au téléphone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111827]">Textes de référence</h2>
            <p className="text-sm text-[#1F2933] leading-relaxed mt-3">
              Rappels réglementaires VHU : Code de l’environnement et dispositions liées aux VHU. TODO : ajouter des liens vers Légifrance.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E5E7EB]">
            <h2 className="text-2xl font-bold text-[#111827]">Centres VHU partenaires (exemples)</h2>
            <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
              TODO : remplacer par la liste réelle (nom, adresse, numéro d’agrément). Pour le maillage interne, vous pouvez aussi renvoyer vers des pages par département.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Centre VHU partenaire (à compléter)", dept: "IDF" },
                { name: "Centre VHU partenaire (à compléter)", dept: "IDF" },
              ].map((p, i) => (
                <div key={`${p.name}-${i}`} className="border border-[#E5E7EB] bg-white rounded-lg p-5">
                  <div className="font-bold text-[#111827]">{p.name}</div>
                  <div className="text-sm text-[#374151] mt-1">Adresse à compléter</div>
                  <div className="text-sm text-[#374151] mt-2">Agrément : N° à compléter</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-[#374151]">
              Pages locales associées :{" "}
              <Link href="/epaviste/paris" className="text-[#1E3A8A] hover:underline">Épaviste Paris</Link>,{" "}
              <Link href="/epaviste/seine-saint-denis" className="text-[#1E3A8A] hover:underline">Seine-Saint-Denis</Link>,{" "}
              <Link href="/epaviste/hauts-de-seine" className="text-[#1E3A8A] hover:underline">Hauts-de-Seine</Link>.
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E7EB]">
            <h2 className="text-2xl font-bold text-[#111827]">Demander un rappel</h2>
            <div className="mt-4 max-w-3xl">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} title="Questions fréquentes – Centre VHU Île-de-France" />
    </>
  );
}

