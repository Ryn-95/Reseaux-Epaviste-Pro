"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection({
  variant,
  badge,
  title,
  subtitle,
  ctaText,
  ctaHref
}: {
  variant?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
} = {}) {
  const [formData, setFormData] = useState({ ville: "", telephone: "", nom: "" });

  return (
    <section className="relative h-[100svh] flex flex-col bg-black overflow-hidden w-full" aria-label="Enlèvement d'épave gratuit en Île-de-France">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=2000&auto=format&fit=crop"
          alt="Épaviste professionnel en intervention - enlèvement d'épave et dépannage automobile en Île-de-France"
          fill
          priority
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Main Content - vertically centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-4">
        
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40">Centre VHU Agréé</span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-3 leading-[1.1]" style={{ color: '#ffffff' }}>
          {title ? (
            <span dangerouslySetInnerHTML={{ 
              __html: title.includes(' – ') || title.includes(' - ') 
                ? title.replace(/ (\–|-) /, '<br/><span style="color: rgba(255,255,255,0.5); font-size: 0.8em">') + '</span>' 
                : title 
            }} />
          ) : (
            <>
              Épaviste professionnel agréé VHU<br />
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8em' }}>Enlèvement gratuit en Île-de-France sous 24h</span>
            </>
          )}
        </h1>

        {/* Subtitle - SEO rich */}
        <p className="max-w-xl text-white/60 text-sm sm:text-base mb-6 leading-relaxed">
          {subtitle ? (
            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
          ) : (
            <>
              <strong className="text-white/90 font-medium">Service rapide, remorquage et destruction de voiture sans frais.</strong><br/>
              Intervention 7j/7 (75, 77, 78, 91, 92, 93, 94, 95).
            </>
          )}
        </p>

        {/* Form */}
        <div className="w-full max-w-xl bg-white/[0.04] backdrop-blur-lg rounded-2xl p-5 border border-white/[0.06]">
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()} aria-label="Demande d'enlèvement d'épave gratuit">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Ville d'intervention" aria-label="Ville d'intervention" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white/15 transition-colors text-sm" value={formData.ville} onChange={(e) => setFormData({...formData, ville: e.target.value})} />
              <input type="tel" placeholder="Téléphone" aria-label="Téléphone" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white/15 transition-colors text-sm" value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
            </div>
            <input type="text" placeholder="Nom complet (pour certificat)" aria-label="Nom complet" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-white/15 transition-colors text-sm" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} />
            <button type="submit" className="w-full bg-white text-black hover:bg-gray-100 transition-colors rounded-xl py-3.5 sm:py-4 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
              Enlèvement Gratuit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <div className="flex items-center justify-center gap-5 mt-1">
              {["GRATUIT", "IMMÉDIAT", "AGRÉÉ VHU"].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-semibold tracking-widest text-white/40">{t}</span>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Trust Badges */}
      <div className="relative z-10 px-4 sm:px-8 pb-3">
        <div className="grid grid-cols-4 gap-2 max-w-4xl mx-auto">
          {[
            { t1: "Agréé Préfecture", t2: "CENTRE VHU OFFICIEL", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { t1: "Certificat Immédiat", t2: "POUR ARRÊTER L'ASSURANCE", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            { t1: "100% Gratuit", t2: "ZÉRO FRAIS CACHÉ", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
            { t1: "Intervention 7j/7", t2: "RAPIDE SOUS 24H", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((b, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.04] rounded-xl py-3 px-2 text-center flex flex-col items-center">
              <svg className="w-4 h-4 text-white/35 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={b.icon} /></svg>
              <div className="text-[11px] font-semibold text-white leading-tight">{b.t1}</div>
              <div className="text-[7px] tracking-widest text-white/30 uppercase mt-0.5">{b.t2}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[8px] sm:text-[9px] text-white/20 max-w-4xl mx-auto leading-relaxed mt-2 font-light">
          Conformément à la réglementation (Code de l&apos;environnement, art. R.543-162), tout détenteur d&apos;un véhicule hors d&apos;usage (VHU) doit le remettre à un centre agréé.
          Notre service assure l&apos;enlèvement, la dépollution et le recyclage de votre épave dans le respect strict des normes environnementales. Intervention gratuite sous conditions (véhicule complet). Agrément préfectoral VHU n°PR9200012D.
        </p>
      </div>
    </section>
  );
}
