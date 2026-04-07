import Link from "next/link";
import { PHONE_EPAVISTE_TEL } from "@/lib/constants";

const pricing = [
  {
    service: "Enlèvement d'épave",
    price: "0 €",
    condition: "Véhicule complet",
    features: [
      "Intervention sous 2 heures",
      "Formalités administratives incluses",
      "Certificat de destruction immédiat",
      "Dépollution centre VHU agréé",
    ],
    isPopular: true,
  },
  {
    service: "Dépannage sur place",
    price: "À partir de 80 €",
    condition: "IDF 24h/7j",
    features: [
      "Aide au démarrage (Booster)",
      "Ouverture de porte sans dégâts",
      "Siphonnage erreur carburant",
      "Changement de roue crevée",
    ],
    isPopular: false,
  },
  {
    service: "Remorquage Distance",
    price: "À partir de 120 €",
    condition: "IDF vers IDF",
    features: [
      "Transport sécurisé plateau",
      "Prise en charge parking souterrain",
      "Toutes marques de véhicules",
      "Facture pour votre assurance",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-premium bg-white">
      <div className="premium-container">
        <div className="text-center mb-16 space-y-4">
          <div className="label-official justify-center">Tarifs</div>
          <h2 className="title-lg text-brand-dark">Simple. Clair. Sans surprise.</h2>
          <p className="text-brand-dark/60 font-medium max-w-2xl mx-auto text-balance">
            Les conditions sont précisées avant l’intervention. Une facture est fournie pour chaque prestation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col rounded-2xl border border-subtle bg-white p-8 shadow-premium transition-all duration-500 hover-lift ${
                p.isPopular ? "ring-1 ring-brand-blue/10 border-brand-blue/20" : ""
              }`}
            >
              {p.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-semibold px-4 py-2 tracking-wide rounded-full">
                  Recommandé
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-brand-dark tracking-tight">{p.service}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="mt-4 text-4xl font-semibold text-brand-dark tracking-tight">{p.price}</span>
                </div>
                <div className="text-[11px] font-semibold text-brand-dark/45 tracking-wide mt-2">
                  {p.condition}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-brand-dark/60 leading-snug">
                    <svg className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-subtle">
                <Link 
                  href="/contact" 
                  className={`btn-premium w-full text-sm font-semibold tracking-tight ${
                    p.isPopular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Callout */}
        <div className="mt-14 p-10 bg-bg-soft rounded-2xl border border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-dark tracking-tight">Intervention en Urgence ?</h4>
              <p className="text-brand-dark/60 text-sm font-medium">Nos unités sont déployées 24h/24 pour tout dépannage critique en Île-de-France.</p>
            </div>
          </div>
          <Link href={`tel:${PHONE_EPAVISTE_TEL}`} className="btn-premium btn-primary px-10 py-5 whitespace-nowrap">
            Déployer une unité
          </Link>
        </div>
      </div>
    </section>
  );
}
