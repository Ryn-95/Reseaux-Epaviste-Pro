import CallbackForm from "@/components/CallbackForm";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact RéseauEpaviste – Appelez ou demandez un rappel",
  description:
    "Contactez RéseauEpaviste pour organiser l’enlèvement de votre épave. Appelez le 01 84 17 32 18 ou demandez un rappel gratuit. Disponible 24h/24 – 7j/7.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="py-16 text-white" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez RéseauEpaviste</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Notre équipe est disponible 24 heures sur 24 et 7 jours sur 7 pour organiser
            l'enlèvement de votre épave ou répondre à vos questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Infos contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A2E" }}>
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D01F2B" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                    <a href="tel:+33184173218" className="text-2xl font-bold hover:opacity-80 transition" style={{ color: "#D01F2B" }}>
                      01 84 17 32 18
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Disponible 24h/24 – 7j/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:contact@reseauepaviste.fr" className="text-blue-600 hover:underline">
                      contact@reseauepaviste.fr
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Réponse sous 2h en heures ouvrées</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Siège social</h3>
                    <p className="text-gray-600 text-sm">
                      RéseauEpaviste SAS<br />
                      15 avenue de la République<br />
                      75011 Paris, France
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3">Horaires d'intervention</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi – Vendredi</span>
                      <span className="font-medium">24h/24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi – Dimanche</span>
                      <span className="font-medium">24h/24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jours fériés</span>
                      <span className="font-medium">24h/24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1A1A2E" }}>
                Demander un rappel
              </h2>
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
