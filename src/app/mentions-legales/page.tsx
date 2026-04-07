import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Mentions légales | RéseauEpaviste",
  description: "Mentions légales de RéseauEpaviste – Informations sur l'éditeur, l'hébergeur, les droits d'auteur et la politique de confidentialité.",
  pathname: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "#1A1A2E" }}>Mentions légales</h1>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>1. Éditeur du site</h2>
            <p>Le présent site <strong>reseauepaviste.fr</strong> est édité par :</p>
            <div className="mt-3 bg-[#F8F8F8] rounded-xl p-5 border border-gray-100 text-sm space-y-1">
              <p><strong>RéseauEpaviste SAS</strong></p>
              <p>Société par actions simplifiée au capital de 10 000 €</p>
              <p>Siège social : 15 avenue de la République, 75011 Paris</p>
              <p>SIRET : 850 123 456 00012</p>
              <p>RCS Paris : 850 123 456</p>
              <p>Numéro TVA intracommunautaire : FR 12 850123456</p>
              <p>Directeur de la publication : M. Jean-Pierre Martin</p>
              <p>Email : contact@reseauepaviste.fr</p>
              <p>Téléphone : 07 45 48 24 64</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>2. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <div className="mt-3 bg-[#F8F8F8] rounded-xl p-5 border border-gray-100 text-sm space-y-1">
              <p><strong>Vercel Inc.</strong></p>
              <p>340 Pine Street, Suite 401, San Francisco, CA 94104, États-Unis</p>
              <p>Site : vercel.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>3. Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, structure) est la
              propriété exclusive de RéseauEpaviste SAS ou de ses partenaires, et est protégé par les
              lois françaises et internationales relatives au droit d'auteur et à la propriété
              intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation
              de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite sans l'autorisation écrite préalable de RéseauEpaviste.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>4. Données personnelles</h2>
            <p className="leading-relaxed mb-3">
              Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
              et aux libertés, et au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD), vous disposez
              d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données
              personnelles.
            </p>
            <p className="leading-relaxed">
              Les informations collectées via les formulaires de contact sont utilisées uniquement pour
              le traitement de votre demande et ne sont jamais cédées à des tiers à des fins
              commerciales. Pour exercer vos droits, contactez-nous à l'adresse :
              privacy@reseauepaviste.fr
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>5. Cookies</h2>
            <p className="leading-relaxed">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Des cookies
              analytiques peuvent être utilisés pour améliorer l'expérience utilisateur. Conformément
              à la réglementation, votre consentement est recueilli avant le dépôt de tout cookie
              non essentiel. Vous pouvez retirer votre consentement à tout moment via les paramètres
              de votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>6. Limitation de responsabilité</h2>
            <p className="leading-relaxed">
              RéseauEpaviste est une plateforme de mise en relation entre des particuliers et des
              professionnels agréés. Les informations fournies sur ce site le sont à titre indicatif.
              RéseauEpaviste ne saurait être tenu responsable des erreurs ou omissions, ni des
              conséquences de l'utilisation de ces informations. Les interventions sont réalisées
              par des prestataires indépendants membres du réseau.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>7. Droit applicable</h2>
            <p className="leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et
              à défaut de résolution amiable, les tribunaux compétents de Paris seront seuls habilités
              à connaître du différend.
            </p>
          </div>

          <div className="text-sm text-gray-400 border-t border-gray-200 pt-4">
            <p>Dernière mise à jour : mars 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
