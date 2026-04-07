import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import Link from "next/link";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-subtle bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <TrackedPhoneLink
        trackingLocation="sticky_mobile"
        phoneHref={`tel:${PHONE_EPAVISTE_TEL}`}
        className="flex-1 text-white text-center py-4 sm:py-5 font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] flex flex-col items-center justify-center gap-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Appeler</span>
        </div>
        <span className="text-[10px] sm:text-[11px] opacity-90 font-medium">{PHONE_EPAVISTE_DISPLAY}</span>
      </TrackedPhoneLink>
      <Link
        href="/contact"
        className="flex-1 text-[var(--color-secondary)] text-center py-4 sm:py-5 font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span>Estimer</span>
        </div>
        <span className="text-[10px] sm:text-[11px] opacity-70 font-medium">Prix Rachat</span>
      </Link>
    </div>
  );
}
