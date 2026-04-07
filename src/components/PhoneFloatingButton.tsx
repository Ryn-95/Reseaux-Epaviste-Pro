"use client";

import { useEffect, useState } from "react";

import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";

export default function PhoneFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée après 3 secondes (signal positif d'engagement)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`tel:${PHONE_EPAVISTE_TEL}`}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50 flex items-center justify-center gap-3 bg-[var(--color-primary)] text-white font-bold px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(139,26,26,0.4)] animate-[bounce_2s_infinite] w-[90%] max-w-[320px] transition-transform active:scale-95 border-2 border-white/20"
      aria-label="Appeler pour un enlèvement gratuit"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-pulse">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
      <span className="text-lg">{PHONE_EPAVISTE_DISPLAY}</span>
    </a>
  );
}
