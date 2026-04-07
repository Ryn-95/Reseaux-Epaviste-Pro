import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CallbackForm from "@/components/CallbackForm";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ContextualLinksBlock from "@/components/ContextualLinksBlock";

export const metadata = buildPageMetadata({
  title: "Enlèvement Épave Gratuit National | Réseaux Épaviste",
  description:
    "Obtenez un enlèvement d'épave gratuit sous 24h/7j par un épaviste agréé VHU. Demandez votre certificat CERFA officiel. Appelez le 01 84 17 32 18.",
  pathname: "/enlevement-epave",
});

const faqItems = [
  {
    question: "L'enlèvement d'épave est-il vraiment gratuit ?",
    answer: "Oui, l'enlèvement est 100% gratuit si le véhicule est complet (présence du moteur et du pot catalytique). Pour les véhicules incomplets ou brûlés, des frais peuvent s'appliquer."
  },
  {
    question: "Quels documents dois-je fournir ?",
    answer: "Vous devez fournir la carte grise originale, une copie de votre pièce d'identité et un certificat de non-gage datant de moins de 15 jours."
  },
  {
    question: "Combien de temps prend l'intervention ?",
    answer: "Nous intervenons généralement sous 2 heures en Île-de-France. L'enlèvement sur place prend environ 15 à 20 minutes formalités incluses."
  },
  {
    question: "Puis-je enlever une épave sans carte grise ?",
    answer:
      "Oui, c'est possible sous certaines conditions. Pour les véhicules dont la première mise en circulation remonte à plus de 15 ans et pour certaines catégories particulières, l'enlèvement sans carte grise est envisageable. Appelez le 01 84 17 32 18 pour une étude de votre cas.",
  },
  {
    question: "Que faire si mon véhicule est en fourrière ?",
    answer:
      "Si votre véhicule est en fourrière et que vous souhaitez y renoncer, vous devez contacter le service de fourrière et signer un document de renonciation. Le véhicule sera ensuite confié à un centre VHU agréé.",
  },
];

const specialCases = [
  { href: "/enlevement-epave/sans-carte-grise", icon: "📋", title: "Sans carte grise", desc: "Véhicule très ancien ou carte perdue/volée" },
  { href: "/enlevement-epave/vehicule-gage", icon: "🔒", title: "Véhicule gagé", desc: "Crédit auto en cours ou litige" },
  { href: "/enlevement-epave/voiture-brulee", icon: "🔥", title: "Voiture brûlée", desc: "Incendie accidentel ou criminel" },
  { href: "/enlevement-epave/parking-souterrain", icon: "🅿️", title: "Parking souterrain", desc: "Sous-sol, cave, résidence" },
  { href: "/enlevement-epave/terrain-prive", icon: "🏠", title: "Terrain privé", desc: "Propriété privée, jardin, ferme" },
];

export default function EnlevementEpavePage() {
  return (
    <div className="bg-pro-gray">
      <ServiceJsonLd
        name="Enlèvement d’épave (VHU)"
        url="https://reseauepaviste.fr/enlevement-epave"
        areaServed="France"
      />
      <HeroSection
        title="Enlèvement épave gratuit, rapide et 100% légal"
        subtitle="RéseauEpaviste organise l'enlèvement de votre véhicule hors d'usage partout en France, sans aucun frais. Certificat de destruction CERFA remis sur place."
      />

      {/* Description service */}
      <section className="py-24 bg-white border-b border-pro-gray-steel">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="space-y-6">
            <div className="section-label">Expertise VHU</div>
            <h2 className="text-4xl font-black text-pro-darker leading-tight uppercase tracking-tight">
              Qu'est-ce que l'enlèvement d'épave ?
            </h2>
            <div className="text-pro-text-light font-medium leading-relaxed space-y-6 text-lg">
              <p>
                L'<strong>enlèvement d'épave</strong> désigne l'ensemble des opérations visant à
                prendre en charge un <strong>véhicule hors d'usage (VHU)</strong> — c'est-à-dire un
                véhicule qui n'est plus en état de circuler légalement et dont la réparation serait
                économiquement injustifiée — pour le transporter vers un centre de traitement agréé.
              </p>
              <p>
                En France, cette activité est réglementée par l'<strong>article R543-154 du Code
                de l'environnement</strong> et la <strong>directive européenne 2000/53/CE</strong>.
                Seuls les épavistes titulaires d'un <strong>agrément préfectoral</strong> sont habilités
                à réaliser ces opérations. Faire appel à un opérateur non agréé expose le propriétaire
                à des sanctions administratives et pénales.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-10 border border-pro-gray-steel">
            <h2 className="text-2xl font-black text-pro-darker mb-8 uppercase tracking-tight">
              La procédure légale d'enlèvement
            </h2>
            <div className="text-pro-text-light font-medium leading-relaxed space-y-6">
              <p>
                La loi impose une procédure précise pour l'enlèvement d'une épave. Voici les étapes
                clés à respecter pour que l'opération soit légalement valide :
              </p>
              <ol className="space-y-6">
                {[
                  { t: "Barrer la carte grise", d: "Le propriétaire doit rayer la carte grise et y inscrire la mention 'vendu/cédé le [date]' suivie de sa signature." },
                  { t: "Déclaration de cession", d: "Compléter le formulaire Cerfa n°15776 en deux exemplaires." },
                  { t: "Remise au centre VHU", d: "L'épaviste agréé transporte le véhicule vers le centre VHU partenaire." },
                  { t: "Certificat de destruction", d: "Le centre VHU remet le certificat CERFA n°14365, seul document légal de radiation." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="text-2xl font-black text-etat-blue/20">0{i+1}</span>
                    <div>
                      <strong className="text-pro-darker block uppercase tracking-wide text-sm mb-1">{step.t}</strong>
                      <span className="text-sm">{step.d}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Cas particuliers */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-pro-darker uppercase tracking-tight">
              Cas particuliers d'enlèvement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialCases.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="flex items-start gap-4 bg-pro-gray p-6 border border-pro-gray-steel hover:border-etat-blue hover:shadow-xl transition-all group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{c.icon}</span>
                  <div>
                    <span className="font-black text-pro-darker uppercase tracking-tight block text-sm">{c.title}</span>
                    <span className="text-[10px] text-pro-text-light font-bold uppercase tracking-widest">{c.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      
      <TestimonialsSection />

      <section className="py-24 bg-white border-y border-pro-gray-steel">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-pro-darker uppercase tracking-tight">Demander un enlèvement</h2>
            <p className="text-pro-text-light font-medium mt-4">Gratuit, rapide et conforme à la réglementation.</p>
          </div>
          <CallbackForm />
        </div>
      </section>

      <div className="bg-slate-50 border-y border-pro-gray-steel">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <ContextualLinksBlock
            title="Cas fréquents (accès direct)"
            links={[
              { href: "/enlevement-epave/sans-carte-grise", label: "Sans carte grise", description: "Solutions selon situation (perte/vol/ancien véhicule)." },
              { href: "/enlevement-epave/vehicule-gage", label: "Véhicule gagé", description: "Comprendre les blocages et la procédure." },
              { href: "/enlevement-epave/parking-souterrain", label: "Parking souterrain", description: "Hauteur, accès, matériel." },
              { href: "/enlevement-epave/voiture-inondee", label: "Voiture inondée", description: "Quand devient-elle VHU ? quoi préparer ?" },
              { href: "/enlevement-epave/succession", label: "Succession", description: "Documents et points de vigilance." },
              { href: "/enlevement-epave/voiture-abandonnee", label: "Voiture abandonnée", description: "Démarches selon lieu (voie publique/terrain privé)." },
              { href: "/enlevement-epave/sans-controle-technique", label: "Sans contrôle technique", description: "Procédure VHU et documents selon cas." },
              { href: "/enlevement-epave/voiture-electrique-batterie", label: "Voiture électrique (batterie)", description: "Points de vigilance et procédure VHU." },
            ]}
          />
        </div>
      </div>

      <FAQSection items={faqItems} title="Questions sur l'enlèvement d'épave" />
    </div>
  );
}
