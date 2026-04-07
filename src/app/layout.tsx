import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalJsonLd from "@/components/GlobalJsonLd";
import CanonicalTag from "@/components/CanonicalTag";
import PerformanceBudget from "@/components/PerformanceBudget";
import PhoneFloatingButton from "@/components/PhoneFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ════════════════════════════════ SEO METADATA ════════════════════════════════ */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  // ─── Primary ───
  title: {
    default:
      "Épaviste Gratuit Île-de-France | Réseaux Épaviste",
    template: "%s | Réseaux Épaviste — Épaviste Agréé VHU",
  },
  description:
    "Épaviste agréé VHU pour l'enlèvement d'épave 100% gratuit en Île-de-France. Demandez votre certificat CERFA immédiat. Intervention rapide 7j/7. Appelez le 07 45 48 24 64.",
  keywords: [
    // ── Mots-clés principaux (head terms) ──
    "épaviste",
    "épaviste gratuit",
    "enlèvement épave",
    "enlèvement épave gratuit",
    "épaviste agréé",
    "dépannage auto",
    "dépannage voiture",
    "remorquage",
    "casse automobile",
    // ── Mots-clés géolocalisés (Paris + IDF) ──
    "épaviste Paris",
    "épaviste Île-de-France",
    "épaviste 92",
    "épaviste 93",
    "épaviste 94",
    "épaviste 95",
    "épaviste 91",
    "épaviste 78",
    "épaviste 77",
    "enlèvement épave Paris",
    "enlèvement épave gratuit 93",
    "enlèvement épave gratuit 94",
    "enlèvement épave gratuit 95",
    "dépannage auto Paris",
    "dépannage auto Île-de-France",
    "remorquage Paris",
    "remorquage Île-de-France",
    // ── Mots-clés longue traîne ──
    "enlèvement épave gratuit Île-de-France",
    "épaviste agréé VHU Île-de-France",
    "centre VHU agréé",
    "destruction véhicule gratuit",
    "certificat de destruction CERFA",
    "certificat destruction véhicule",
    "enlèvement voiture épave gratuit",
    "faire enlever une épave gratuitement",
    "enlever épave voiture gratuit",
    "récupération véhicule accidenté",
    "enlèvement véhicule hors d'usage",
    "rachat voiture HS",
    "rachat voiture en panne",
    "rachat véhicule accidenté",
    "prime à la conversion",
    "prime conversion 2026",
    "dépannage urgence nuit",
    "dépannage auto 24h/24",
    "remorquage voiture en panne",
    "remorquage plateau",
    "casse automobile agréée",
    "casse auto Paris",
    // ── Villes spécifiques ──
    "épaviste Boulogne-Billancourt",
    "épaviste Saint-Denis",
    "épaviste Montreuil",
    "épaviste Argenteuil",
    "épaviste Nanterre",
    "épaviste Créteil",
    "épaviste Vitry-sur-Seine",
    "épaviste Colombes",
    "épaviste Versailles",
    "épaviste Meaux",
    "épaviste Évry",
    "épaviste Cergy",
    "épaviste Bobigny",
    "épaviste Aulnay-sous-Bois",
    // ── Cas spéciaux (longue traîne avancée) ──
    "enlèvement épave sans carte grise",
    "enlèvement voiture brûlée",
    "enlèvement épave parking souterrain",
    "enlèvement voiture abandonnée",
    "épave voiture que faire",
    "comment se débarrasser d'une épave",
    "épaviste pas cher",
    "épaviste rapide",
    "dépannage batterie voiture",
    "dépannage crevaison",
    "erreur carburant essence diesel",
  ].join(", "),

  // ─── Open Graph ───
  openGraph: {
    title:
      "Épaviste Gratuit Île-de-France | Réseaux Épaviste",
    description:
      "Épaviste agréé VHU pour l'enlèvement d'épave 100% gratuit en Île-de-France. Demandez votre certificat CERFA immédiat. Intervention rapide 7j/7. Appelez le 07 45 48 24 64.",
    url: "https://reseauepaviste.fr",
    siteName: "Réseaux Épaviste",
    images: [
      {
        url: "https://reseauepaviste.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Épaviste professionnel agréé VHU - Enlèvement d'épave gratuit Île-de-France - Dépannage auto 24/7",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  // ─── Twitter ───
  twitter: {
    card: "summary_large_image",
    title:
      "Épaviste Gratuit Île-de-France | Réseaux Épaviste",
    description:
      "Épaviste agréé VHU pour l'enlèvement d'épave 100% gratuit en Île-de-France. Demandez votre certificat CERFA immédiat. Intervention rapide 7j/7. Appelez le 07 45 48 24 64.",
    images: ["https://reseauepaviste.fr/og-image.jpg"],
  },

  // ─── Canonicals & Alternates ───
  alternates: {
    canonical: "https://reseauxepaviste.fr",
    languages: {
      "fr-FR": "https://reseauxepaviste.fr",
      "x-default": "https://reseauxepaviste.fr",
    },
  },

  // ─── Crawling ───
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Verification (replace with real tokens) ───
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
  },

  // ─── Category & Author ───
  category: "Automobile",
  creator: "Réseaux Épaviste",
  publisher: "Réseaux Épaviste",

  // ─── Icons ───
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ─── Manifest ───
  manifest: "/manifest.json",
};

/* ════════════════════════════════ LAYOUT ════════════════════════════════ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external images */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* GeoRegion for local SEO */}
        <meta name="geo.region" content="FR-IDF" />
        <meta name="geo.placename" content="Paris, Île-de-France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        {/* Language */}
        <meta httpEquiv="content-language" content="fr" />
        {/* Mobile-specific */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <GlobalJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CanonicalTag />
        <Header />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        <PerformanceBudget />
        <PhoneFloatingButton />
      </body>
    </html>
  );
}
