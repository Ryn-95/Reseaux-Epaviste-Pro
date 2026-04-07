import Image from "next/image";

const testimonials = [
  {
    name: "Jean-Pierre D.",
    location: "Paris 15e",
    date: "Mars 2026",
    rating: 5,
    text: "Service exceptionnel. Ma voiture était bloquée dans un parking souterrain étroit. L'équipe est intervenue avec un véhicule spécialisé en moins d'une heure. Très professionnels.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    name: "Marie-Laure R.",
    location: "Boulogne-Billancourt",
    date: "Février 2026",
    rating: 5,
    text: "Enlèvement d'épave gratuit et ultra rapide. Ils se sont occupés de toute la partie administrative (SIV, certificat de destruction). Je recommande vivement !",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    name: "Thomas L.",
    location: "Saint-Denis",
    date: "Janvier 2026",
    rating: 5,
    text: "Panne de batterie un dimanche soir. Le dépanneur est arrivé en 30 minutes. Diagnostic clair et prix transparent. Un service qui rassure vraiment.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section-premium bg-bg-soft relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="label-official justify-center">Avis</div>
          <h2 className="title-lg text-brand-dark">Une expérience qui rassure.</h2>
          <p className="text-brand-dark/60 font-medium max-w-2xl mx-auto text-balance">
            Réactivité, transparence, documents conformes. Des retours clients issus d’interventions réelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full rounded-2xl border border-subtle bg-white p-8 shadow-premium hover-lift transition-all duration-500">
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="mt-6 text-brand-dark/70 font-medium mb-10 flex-grow leading-relaxed text-sm text-balance">
                {t.text}
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-subtle">
                <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm tracking-tight">{t.name}</div>
                  <div className="text-[11px] font-semibold text-brand-dark/45 tracking-wide">
                    {t.location} • {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center items-center gap-10 text-brand-dark/30">
          <div className="text-sm font-semibold tracking-tight">Trustpilot</div>
          <div className="text-sm font-semibold tracking-tight">Google Reviews</div>
          <div className="text-sm font-semibold tracking-tight">Facebook</div>
        </div>
      </div>
    </section>
  );
}
