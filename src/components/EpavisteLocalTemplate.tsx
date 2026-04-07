import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import AutoRepairJsonLd from "@/components/AutoRepairJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import Image from "next/image";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { PHONE_EPAVISTE_TEL } from "@/lib/constants";

type VehicleLine = {
  type: string;
  exemples: string[];
};

type CaseLine = {
  title: string;
  description: string;
};

type CenterPlaceholder = {
  name: string;
  address: string;
  agrément: string;
};

type LocalEpavisteTemplateProps = {
  cityLabel: string;
  breadcrumbItems: { label: string; href: string }[];
  localBusinessJsonLdProps: {
    name: string;
    url: string;
    telephone: string;
    cityOrArea: string;
    postalCode?: string;
    addressLocality?: string;
    lat?: number;
    lng?: number;
    rating?: number;
    reviewCount?: number;
  };
  heroBadge?: string;
  introParagraphs: string[];
  zonesIntervention: string[];
  delaisText: string;
  vehicles: VehicleLine[];
  casesFrequent: CaseLine[];
  centers: CenterPlaceholder[];
  miniFaq: { question: string; answer: string }[];
};

export default function EpavisteLocalTemplate({
  cityLabel,
  breadcrumbItems,
  localBusinessJsonLdProps,
  introParagraphs,
  zonesIntervention,
  delaisText,
  vehicles,
  casesFrequent,
  centers,
  miniFaq,
}: LocalEpavisteTemplateProps) {
  return (
    <div className="bg-pro-gray">
      <LocalBusinessJsonLd {...localBusinessJsonLdProps} />
      <AutoRepairJsonLd {...localBusinessJsonLdProps} />
      <FaqJsonLd items={miniFaq} />

      <div className="pt-32">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <HeroSection
        title={`Enlèvement d'épave Gratuit à ${cityLabel} (VHU Agréé)`}
        subtitle={`Service officiel habilité SIV pour la destruction de votre véhicule à ${cityLabel}. Intervention rapide sous 2h, certificat de destruction immédiat.`}
      />

      {/* Trust Bar Local */}
      <section className="py-12 bg-white border-y border-pro-gray-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-pro-blue-soft flex items-center justify-center text-etat-blue rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest">Délai {delaisText}</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-pro-blue-soft flex items-center justify-center text-etat-blue rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest">Agréé Préfecture</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-pro-blue-soft flex items-center justify-center text-etat-blue rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest">Service 100% Gratuit</div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 bg-pro-blue-soft flex items-center justify-center text-etat-blue rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest">Épaviste Professionnel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section avec Image et maillage SEO */}
      <section className="py-24 section-slate overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="section-label">Expertise Locale : {cityLabel}</div>
              <h2 className="text-4xl md:text-5xl font-black text-pro-darker leading-tight title-underline">
                Épaviste agréé et remorquage professionnel à {cityLabel}
              </h2>
              <div className="space-y-6 text-lg text-pro-text-light leading-relaxed font-medium">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              {/* Process Steps Local */}
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-black text-pro-darker uppercase tracking-tight">Votre procédure en 4 étapes :</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { s: "01", t: "Contact & Devis", d: "Appel gratuit 24h/24" },
                    { s: "02", t: "Rendez-vous 2h", d: "Intervention sur site à " + cityLabel },
                    { s: "03", t: "Remorquage VHU", d: "Transport centre agréé" },
                    { s: "04", t: "Certificat Cerfa", d: "Dossier administratif clos" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 border border-pro-gray-steel">
                      <span className="text-2xl font-black text-etat-blue/20">{step.s}</span>
                      <div>
                        <div className="text-xs font-black text-pro-darker uppercase tracking-wider">{step.t}</div>
                        <div className="text-[10px] text-pro-text-light font-bold">{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-etat-blue/5 rounded-2xl -rotate-3"></div>
              <div className="relative img-wrapper">
                <Image 
                  src="https://images.unsplash.com/photo-1696145900186-2ce6077743d6?q=80&w=1200"
                  alt={`Épaviste professionnel intervenant à ${cityLabel} pour un enlèvement d'épave`}
                  width={800}
                  height={1000}
                  className="object-cover img-zoom aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pro-darker/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                    <div className="text-pro-accent text-xs font-black uppercase tracking-[0.2em] mb-2">Zone d'intervention</div>
                    <div className="text-white text-2xl font-black uppercase">{cityLabel} & Alentours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & FAQ Section avec fond contrasté */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-20">
              
              {/* FAQ Localisée SEO */}
              <div className="space-y-12">
                <div className="section-label">Questions Fréquentes</div>
                <h2 className="text-4xl font-black text-pro-darker">Tout savoir sur l'enlèvement d'épave à {cityLabel}</h2>
                <div className="space-y-6">
                  {miniFaq.map((item, i) => (
                    <div key={i} className="bg-pro-gray p-8 border border-pro-gray-steel hover:border-etat-blue transition-colors group">
                      <h4 className="text-lg font-black text-pro-darker mb-4 flex items-start gap-4 group-hover:text-etat-blue transition-colors">
                        <span className="text-etat-red font-black">Q.</span>
                        {item.question}
                      </h4>
                      <div className="pl-8 text-pro-text-light font-medium leading-relaxed border-l-4 border-pro-gray-steel">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Véhicules Pris en charge */}
              <div className="bg-pro-darker p-12 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-official-grid opacity-10"></div>
                <h3 className="text-3xl font-black mb-10 relative z-10 uppercase tracking-tight">Types de véhicules éligibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                  {vehicles.map((v, i) => (
                    <div key={i} className="space-y-6">
                      <div className="text-pro-accent font-black text-sm uppercase tracking-widest border-b border-white/10 pb-4">{v.type}</div>
                      <ul className="space-y-3">
                        {v.exemples.map((ex, j) => (
                          <li key={j} className="text-xs text-white/60 font-bold flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-etat-red rounded-full"></span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Localisée */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                <div className="bg-white border-t-8 border-etat-blue p-8 shadow-2xl">
                  <h3 className="text-xl font-black text-pro-darker mb-8 uppercase tracking-tight">Disponibilité à {cityLabel}</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-pro-text-light uppercase tracking-widest mb-1">Délai d'intervention</div>
                        <p className="text-sm font-black text-pro-darker">{delaisText}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-pro-blue-soft text-etat-blue flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-pro-text-light uppercase tracking-widest mb-1">Communes desservies</div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {zonesIntervention.map((z, i) => (
                            <span key={i} className="text-[9px] bg-pro-gray px-2 py-1 font-black border border-pro-gray-steel uppercase tracking-tighter">
                              {z}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Link href={`tel:${localBusinessJsonLdProps.telephone}`} className="btn-pro w-full shadow-xl">
                        Appeler l'agent local
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Formulaire dans la sidebar */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-etat-blue/5 blur-2xl"></div>
                  <CallbackForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers VHU Localisés */}
      <section className="py-24 section-slate border-y border-pro-gray-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white p-12 shadow-xl border-l-8 border-pro-accent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
              <div className="space-y-4">
                <div className="section-label">Réseau Agréé</div>
                <h2 className="text-3xl md:text-4xl font-black text-pro-darker uppercase tracking-tight">Centres VHU Partenaires : {cityLabel}</h2>
              </div>
              <div className="bg-pro-darker text-pro-accent px-6 py-3 text-[10px] font-black uppercase tracking-[0.25em] shadow-lg">
                Certification Ministère Intérieur
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {centers.map((c, i) => (
                <div key={i} className="bg-pro-gray p-8 border border-pro-gray-steel group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <h4 className="font-black text-pro-darker text-xl mb-3 flex items-center gap-4">
                    <span className="w-3 h-3 bg-etat-blue rounded-full"></span>
                    {c.name}
                  </h4>
                  <p className="text-sm text-pro-text-light font-medium mb-8 leading-relaxed">{c.address}</p>
                  <div className="inline-flex items-center gap-3 bg-white px-4 py-2 border border-pro-gray-steel text-[10px] font-black uppercase tracking-widest text-etat-blue">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    Agrément N° : {c.agrément}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      
      <TestimonialsSection />
    </div>
  );
}
