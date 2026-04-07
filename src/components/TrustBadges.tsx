import React from 'react';

const badges = [
  { icon: "🛡️", title: "Certifié VHU", desc: "PR 920001 B" },
  { icon: "⚡", title: "Réactif 24/7", desc: "Moins de 45min" },
  { icon: "📜", title: "SIV Habilité", desc: "Dossier Complet" },
  { icon: "🌍", title: "ISO 14001", desc: "Eco-Dépollution" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {badges.map((b, i) => (
        <div key={i} className="flex items-center gap-6 p-6 bg-white border border-subtle rounded-2xl shadow-sm hover-lift transition-all">
          <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{b.icon}</div>
          <div>
            <div className="text-sm font-bold text-brand-dark uppercase tracking-tight">{b.title}</div>
            <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em]">{b.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
