"use client";
import { useState } from "react";

export default function CallbackForm() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("enlèvement");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "locating">("idle");

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }
    setState("locating");
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          const cityName = data.address.city || data.address.town || data.address.village || data.address.suburb;
          const postCode = data.address.postcode;
          if (cityName) {
            setCity(`${cityName}${postCode ? ` (${postCode})` : ""}`);
          }
        } catch (error) {
          console.error("Erreur de géolocalisation inverse:", error);
        } finally {
          setState("idle");
        }
      },
      (error) => {
        console.error("Erreur de géolocalisation:", error);
        setState("idle");
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("success"), 1500);
  };

  if (state === "success") {
    return (
      <div className="bg-white border-2 border-etat-blue p-10 text-center shadow-2xl">
        <div className="w-20 h-20 bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-8 rounded-full border-4 border-green-100">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-2xl font-black text-pro-darker mb-3 uppercase tracking-tight">Dossier Validé</h3>
        <p className="text-pro-text-light font-bold mb-6">Référence : <span className="text-etat-blue">{Math.random().toString(36).substring(7).toUpperCase()}</span></p>
        <div className="bg-slate-50 p-6 text-sm text-pro-darker font-bold border-l-8 border-etat-blue text-left">
          <p>Un agent du réseau national va vous contacter dans les 15 prochaines minutes pour confirmer l'heure d'intervention.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-pro-gray-steel shadow-2xl relative overflow-hidden">
      {/* Form Header */}
      <div className="bg-pro-darker text-white p-8 relative">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div className="flex justify-between items-start mb-6">
          <span className="bg-pro-accent text-pro-darker text-[9px] font-black px-3 py-1 tracking-widest uppercase">Priorité SIV-2026</span>
          <span className="text-white/40 font-mono text-[10px]">VERIFIED SECURE</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight leading-none uppercase">Demande d'intervention</h3>
        <p className="text-xs text-white/60 mt-3 font-bold uppercase tracking-wider">Traitement immédiat • Île-de-France</p>
      </div>

      <form onSubmit={handleSubmit} className="p-10 space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-pro-darker uppercase tracking-widest">Type de service requis</label>
            <select 
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="form-input font-bold"
            >
              <option value="enlèvement">Enlèvement d'épave (Gratuit)</option>
              <option value="dépannage">Dépannage Urgent</option>
              <option value="remorquage">Remorquage Distance</option>
              <option value="rachat">Rachat de véhicule</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-pro-darker uppercase tracking-widest">Identité du propriétaire</label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="NOM ET PRÉNOM"
                className="form-input pl-12"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pro-gray-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-pro-darker uppercase tracking-widest">Contact Mobile</label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 -- -- -- --"
                  className="form-input pl-12"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pro-gray-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-pro-darker uppercase tracking-widest">Lieu d'intervention</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="VILLE / CP"
                  className="form-input pl-12 pr-12"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pro-gray-steel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <button
                  type="button"
                  onClick={handleGeolocation}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-etat-blue hover:text-etat-red transition-colors"
                  title="Me géolocaliser"
                >
                  {state === "locating" ? (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-pro w-full py-5 text-xl shadow-2xl bg-etat-blue hover:bg-etat-blue-dark"
        >
          {state === "submitting" ? (
            <span className="flex items-center gap-4">
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              TRANSMISSION SÉCURISÉE...
            </span>
          ) : (
            <>
              VALIDER MON DOSSIER
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </>
          )}
        </button>

        <div className="p-4 bg-slate-50 border border-pro-gray-steel flex items-start gap-4">
          <svg className="w-5 h-5 text-etat-blue shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p className="text-[9px] text-pro-text-light font-bold leading-tight uppercase tracking-wider">
            La destruction physique d'un véhicule hors d'usage (VHU) par un centre agréé est une obligation légale (Art. R.543-156). Ce formulaire engage la procédure officielle de mise en conformité.
          </p>
        </div>
      </form>
    </div>
  );
}
