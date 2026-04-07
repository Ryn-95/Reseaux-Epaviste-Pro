import { buildPageMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "RéseauEpaviste – Qui sommes-nous ?",
  description:
    "Découvrez RéseauEpaviste : notre histoire, notre équipe, nos certifications et notre engagement pour un service d’enlèvement d’épave professionnel, légal et écologique.",
  pathname: "/a-propos",
});

const numbers = [
  { value: "2015", label: "Année de création" },
  { value: "200+", label: "Partenaires agréés" },
  { value: "48", label: "Départements couverts" },
  { value: "1 200+", label: "Interventions / mois" },
  { value: "4.8/5", label: "Satisfaction clients" },
  { value: "100%", label: "Centres VHU agréés" },
];

const certifications = [
  { title: "Agrément préfectoral national", desc: "Tous nos partenaires épavistes sont titulaires d'un agrément délivré par la préfecture de leur département, conformément au décret n°2003-727 du 1er août 2003." },
  { title: "Directive européenne 2000/53/CE", desc: "Nos centres VHU partenaires respectent intégralement la directive européenne sur les véhicules hors d'usage, garantissant une dépollution et un recyclage conformes aux normes les plus strictes." },
  { title: "Certificat de destruction CERFA", desc: "Chaque intervention donne lieu à la délivrance d'un certificat de destruction officiel (CERFA n°14365), seul document légalement reconnu pour la radiation d'un VHU." },
  { title: "Protection des données personnelles (RGPD)", desc: "Les informations collectées lors de vos demandes sont traitées conformément au Règlement Général sur la Protection des Données. Elles ne sont jamais revendues à des tiers." },
];

export default function AProposPage() {
  return (
    <div className="bg-pro-gray">
      {/* Header Section Institutionnelle */}
      <section className="relative pt-40 pb-24 section-blue-gradient overflow-hidden">
        <div className="absolute inset-0 bg-official-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-pro-accent rounded-full animate-pulse"></span>
              <span className="text-white text-[10px] font-black uppercase tracking-widest">Qui sommes-nous ?</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              L'expertise officielle du <span className="text-pro-accent">recyclage automobile</span>
            </h1>
            <p className="text-xl text-white/80 font-medium leading-relaxed border-l-4 border-pro-accent pl-8">
              Épaviste.pro est le réseau national de référence pour l'enlèvement d'épave gratuit et le dépannage agréé, fondé sur la transparence, la légalité et l'engagement écologique.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres Clés - Design Pro */}
      <section className="py-20 bg-white border-b border-pro-gray-steel relative z-20 -mt-10 mx-4 md:mx-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {numbers.map((n) => (
              <div key={n.label} className="text-center space-y-2">
                <div className="text-4xl font-black text-etat-blue tracking-tighter">{n.value}</div>
                <div className="text-[10px] font-black text-pro-text-light uppercase tracking-widest leading-tight">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire avec Image Haute Résolution */}
      <section className="py-32 section-slate">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="section-label">Notre Histoire</div>
              <h2 className="text-4xl md:text-5xl font-black text-pro-darker leading-tight">
                Une mission de service public depuis 2015
              </h2>
              <div className="space-y-6 text-lg text-pro-text-light leading-relaxed font-medium">
                <p>
                  Épaviste.pro a été fondé par des experts de la logistique automobile face à un constat alarmant : la prolifération d'acteurs non agréés dans le secteur de l'épave, mettant en péril la responsabilité juridique des propriétaires et l'environnement.
                </p>
                <p>
                  Nous avons bâti le premier réseau national intégrant exclusivement des <strong>épavistes agréés</strong> et des <strong>centres VHU certifiés</strong> par les préfectures. Notre rôle est de sécuriser chaque étape de la fin de vie d'un véhicule.
                </p>
                <p>
                  Aujourd'hui, nous traitons plus de 1 200 interventions mensuelles avec un taux de conformité administrative de 100%, garantissant à chaque client une sérénité totale vis-à-vis de l'administration.
                </p>
              </div>
            </div>
            <div className="relative group img-wrapper">
              <Image 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200"
                alt="Nos équipes de dépanneurs professionnels en formation"
                width={800}
                height={800}
                className="object-cover aspect-square img-zoom"
              />
              <div className="absolute bottom-0 right-0 bg-etat-blue p-8 text-white max-w-xs shadow-2xl">
                <div className="text-3xl font-black mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                  De nos partenaires sont audités annuellement sur leurs agréments préfectoraux.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Grille Institutionnelle */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="section-label justify-center">Garanties & Certifications</div>
            <h2 className="text-4xl md:text-6xl font-black text-pro-darker">Un cadre légal strict</h2>
            <p className="seo-text">
              L'enlèvement d'un véhicule hors d'usage est une opération réglementée. Nous assurons une conformité totale avec le Code de l'Environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certifications.map((c, i) => (
              <div key={i} className="card-official group p-10">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-pro-blue-soft flex items-center justify-center text-etat-blue shrink-0 group-hover:bg-etat-blue group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-pro-darker uppercase tracking-tight">{c.title}</h3>
                    <p className="text-pro-text-light font-medium leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 section-dark relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Prêt à collaborer avec des experts ?</h2>
          <p className="text-xl text-white/60 font-medium">Contactez notre standard national pour toute demande d'intervention ou d'information technique.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <TrackedPhoneLink trackingLocation="about_cta" phoneHref={`tel:${PHONE_EPAVISTE_TEL}`} className="btn-pro text-xl px-12 py-6">
              {PHONE_EPAVISTE_DISPLAY}
            </TrackedPhoneLink>
            <Link href="/contact" className="btn-pro bg-white text-etat-blue hover:bg-pro-gray-steel text-xl px-12 py-6">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
