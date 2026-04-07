import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cities = [
  { ville: "Lyon", departement: "69", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Villeurbanne", "Vénissieux", "Décines"], specificiteLocale: "Zone ZFE Grand Lyon, vignette Crit'Air obligatoire", zoneIndustrielle: "Zone industrielle de Vénissieux", particularite: "Accès difficile tunnel sous-Fourvière" },
  { ville: "Marseille", departement: "13", region: "Provence-Alpes-Côte d'Azur", communesVoisines: ["Aix-en-Provence", "Aubagne", "Allauch"], specificiteLocale: "Zone ZFE Marseille centre", zoneIndustrielle: "Port autonome de Marseille", particularite: "Accès complexe Vieux-Port et ruelles étroites" },
  { ville: "Bordeaux", departement: "33", region: "Nouvelle-Aquitaine", communesVoisines: ["Mérignac", "Pessac", "Talence"], specificiteLocale: "Zone ZFE intra-rocade", zoneIndustrielle: "Bordeaux Fret", particularite: "Circulation dense sur la rocade A630" },
  { ville: "Toulouse", departement: "31", region: "Occitanie", communesVoisines: ["Colomiers", "Tournefeuille", "Blagnac"], specificiteLocale: "ZFE Toulouse Métropole", zoneIndustrielle: "Zone Aéronautique Blagnac", particularite: "Rocade souvent saturée aux heures de pointe" },
  { ville: "Nantes", departement: "44", region: "Pays de la Loire", communesVoisines: ["Saint-Herblain", "Rezé", "Saint-Sébastien-sur-Loire"], specificiteLocale: "Hyper-centre piétonnier étendu", zoneIndustrielle: "Zone industrielle de Cheviré", particularite: "Franchissement difficile des ponts sur la Loire" },
  { ville: "Lille", departement: "59", region: "Hauts-de-France", communesVoisines: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq"], specificiteLocale: "Zone ZFE Eurométropole", zoneIndustrielle: "ZI Seclin", particularite: "Circulation dense sur le périphérique lillois" },
  { ville: "Strasbourg", departement: "67", region: "Grand Est", communesVoisines: ["Schiltigheim", "Illkirch-Graffenstaden", "Bischheim"], specificiteLocale: "Zone ZFE Eurométropole stricte", zoneIndustrielle: "Port Autonome de Strasbourg", particularite: "Centre-ville Grande Île restreint" },
  { ville: "Nice", departement: "06", region: "Provence-Alpes-Côte d'Azur", communesVoisines: ["Cagnes-sur-Mer", "Saint-Laurent-du-Var", "Villefranche-sur-Mer"], specificiteLocale: "Zone ZFE Promenade des Anglais", zoneIndustrielle: "ZI Carros", particularite: "Accès collines niçoises sinueux" },
  { ville: "Rennes", departement: "35", region: "Bretagne", communesVoisines: ["Saint-Jacques-de-la-Lande", "Cesson-Sévigné", "Bruz"], specificiteLocale: "Rocade rennaise très fréquentée", zoneIndustrielle: "ZI Route de Lorient", particularite: "Centre-ville historique piétonnier" },
  { ville: "Montpellier", departement: "34", region: "Occitanie", communesVoisines: ["Castelnau-le-Lez", "Lattes", "Pérols"], specificiteLocale: "Zone ZFE Montpellier Méditerranée", zoneIndustrielle: "Parc Eurêka", particularite: "Quartier Écusson inaccessible aux véhicules" },
  { ville: "Grenoble", departement: "38", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Saint-Martin-d'Hères", "Échirolles", "Fontaine"], specificiteLocale: "Zone ZFE Métropole très restrictive", zoneIndustrielle: "Polygone Scientifique", particularite: "Trafic dense sur la Rocade Sud" },
  { ville: "Rouen", departement: "76", region: "Normandie", communesVoisines: ["Sotteville-lès-Rouen", "Saint-Étienne-du-Rouvray", "Le Grand-Quevilly"], specificiteLocale: "Zone ZFE Rouen Normandie", zoneIndustrielle: "Zone portuaire de Rouen", particularite: "Traversée des ponts sur la Seine complexe" },
  { ville: "Toulon", departement: "83", region: "Provence-Alpes-Côte d'Azur", communesVoisines: ["La Seyne-sur-Mer", "Hyères", "Six-Fours-les-Plages"], specificiteLocale: "Zone ZFE Métropole TPM", zoneIndustrielle: "ZI Toulon Est", particularite: "Tunnel de Toulon souvent encombré" },
  { ville: "Nîmes", departement: "30", region: "Occitanie", communesVoisines: ["Marguerittes", "Milhaud", "Bouillargues"], specificiteLocale: "Centre historique restreint", zoneIndustrielle: "Grézan", particularite: "Accès difficile lors des ferias" },
  { ville: "Saint-Étienne", departement: "42", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Saint-Chamond", "Firminy", "Rive-de-Gier"], specificiteLocale: "Zone ZFE Saint-Étienne Métropole", zoneIndustrielle: "ZI La Molina", particularite: "Relief vallonné et rues pentues" },
  { ville: "Clermont-Ferrand", departement: "63", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Cournon-d'Auvergne", "Chamalières", "Beaumont"], specificiteLocale: "Zone ZFE Métropole", zoneIndustrielle: "ZI du Brézet", particularite: "Accès restreint centre historique" },
  { ville: "Le Havre", departement: "76", region: "Normandie", communesVoisines: ["Sainte-Adresse", "Montivilliers", "Harfleur"], specificiteLocale: "Accès portuaire réglementé", zoneIndustrielle: "Zone Industrielle Portuaire", particularite: "Circulation dense sur les axes portuaires" },
  { ville: "Reims", departement: "51", region: "Grand Est", communesVoisines: ["Tinqueux", "Bétheny", "Cormontreuil"], specificiteLocale: "Zone ZFE Grand Reims", zoneIndustrielle: "ZI Pompelle", particularite: "Accès centre-ville historique limité" },
  { ville: "Dijon", departement: "21", region: "Bourgogne-Franche-Comté", communesVoisines: ["Chenôve", "Talant", "Quetigny"], specificiteLocale: "Centre historique piétonnier", zoneIndustrielle: "ZI Cap Nord", particularite: "Circulation complexe rocade est" },
  { ville: "Angers", departement: "49", region: "Pays de la Loire", communesVoisines: ["Avrillé", "Trélazé", "Les Ponts-de-Cé"], specificiteLocale: "ZFE en préparation", zoneIndustrielle: "ZI Saint-Barthélemy", particularite: "Traversée de la Maine souvent saturée" },
  { ville: "Brest", departement: "29", region: "Bretagne", communesVoisines: ["Guipavas", "Le Relecq-Kerhuon", "Plougastel-Daoulas"], specificiteLocale: "Accès arsenal réglementé", zoneIndustrielle: "ZI Kergonan", particularite: "Pont de l'Iroise très fréquenté" },
  { ville: "Le Mans", departement: "72", region: "Pays de la Loire", communesVoisines: ["Allonnes", "Coulaines", "Changé"], specificiteLocale: "Quartier Plantagenêt piéton", zoneIndustrielle: "ZI Sud", particularite: "Circulation dense lors des événements" },
  { ville: "Aix-en-Provence", departement: "13", region: "Provence-Alpes-Côte d'Azur", communesVoisines: ["Venelles", "Le Tholonet", "Éguilles"], specificiteLocale: "Centre historique restreint", zoneIndustrielle: "Pôle d'activités des Milles", particularite: "Rues étroites dans le centre" },
  { ville: "Tours", departement: "37", region: "Centre-Val de Loire", communesVoisines: ["Joué-lès-Tours", "Saint-Cyr-sur-Loire", "Saint-Pierre-des-Corps"], specificiteLocale: "Axe tramway restreint", zoneIndustrielle: "ZI Les Mennetons", particularite: "Ponts sur la Loire saturés" },
  { ville: "Amiens", departement: "80", region: "Hauts-de-France", communesVoisines: ["Longueau", "Camon", "Salouël"], specificiteLocale: "Quartier Saint-Leu piéton", zoneIndustrielle: "Espace Industriel Nord", particularite: "Rocade nord encombrée" },
  { ville: "Limoges", departement: "87", region: "Nouvelle-Aquitaine", communesVoisines: ["Panazol", "Isle", "Couzeix"], specificiteLocale: "Centre-ville historique complexe", zoneIndustrielle: "ZI Nord", particularite: "Accès difficile quartiers historiques" },
  { ville: "Villeurbanne", departement: "69", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Lyon", "Bron", "Vaulx-en-Velin"], specificiteLocale: "Zone ZFE Grand Lyon", zoneIndustrielle: "ZI Est", particularite: "Circulation très dense" },
  { ville: "Metz", departement: "57", region: "Grand Est", communesVoisines: ["Montigny-lès-Metz", "Woippy", "Marly"], specificiteLocale: "Plateau piétonnier étendu", zoneIndustrielle: "Actipôle de Metz", particularite: "Traversée de la Moselle difficile" },
  { ville: "Besançon", departement: "25", region: "Bourgogne-Franche-Comté", communesVoisines: ["École-Valentin", "Thise", "Châtillon-le-Duc"], specificiteLocale: "Boucle centre-ville restreinte", zoneIndustrielle: "ZI Trépillot", particularite: "Accès citadelle complexe" },
  { ville: "Orléans", departement: "45", region: "Centre-Val de Loire", communesVoisines: ["Fleury-les-Aubrais", "Olivet", "Saint-Jean-de-Braye"], specificiteLocale: "Centre historique piéton", zoneIndustrielle: "Pôle 45", particularite: "Ponts sur la Loire encombrés" },
  { ville: "Mulhouse", departement: "68", region: "Grand Est", communesVoisines: ["Illzach", "Rixheim", "Kingersheim"], specificiteLocale: "Zone ZFE", zoneIndustrielle: "ZI Ile Napoléon", particularite: "Réseau tramway dense" },
  { ville: "Caen", departement: "14", region: "Normandie", communesVoisines: ["Hérouville-Saint-Clair", "Ifs", "Mondeville"], specificiteLocale: "Centre reconstruit complexe", zoneIndustrielle: "ZI Mont Coco", particularite: "Périphérique souvent saturé" },
  { ville: "Nancy", departement: "54", region: "Grand Est", communesVoisines: ["Vandoeuvre-lès-Nancy", "Laxou", "Villers-lès-Nancy"], specificiteLocale: "Hyper-centre piéton", zoneIndustrielle: "ZI Ludres", particularite: "Place Stanislas inaccessible" },
  { ville: "Argenteuil", departement: "95", region: "Île-de-France", communesVoisines: ["Bezons", "Sannois", "Cormeilles-en-Parisis"], specificiteLocale: "ZFE Grand Paris", zoneIndustrielle: "ZI du Val d'Argent", particularite: "Circulation dense A15" },
  { ville: "Roubaix", departement: "59", region: "Hauts-de-France", communesVoisines: ["Tourcoing", "Croix", "Wattrelos"], specificiteLocale: "ZFE Eurométropole", zoneIndustrielle: "ZI de l'Union", particularite: "Rues étroites anciennes" },
  { ville: "Tourcoing", departement: "59", region: "Hauts-de-France", communesVoisines: ["Roubaix", "Mouvaux", "Neuville-en-Ferrain"], specificiteLocale: "ZFE Eurométropole", zoneIndustrielle: "ZI Ravennes-les-Francs", particularite: "Accès frontalier encombré" },
  { ville: "Dunkerque", departement: "59", region: "Hauts-de-France", communesVoisines: ["Grande-Synthe", "Coudekerque-Branche", "Cappelle-la-Grande"], specificiteLocale: "Zone portuaire réglementée", zoneIndustrielle: "ZI Portuaire", particularite: "Trafic poids lourds important" },
  { ville: "Perpignan", departement: "66", region: "Occitanie", communesVoisines: ["Cabestany", "Bompas", "Pia"], specificiteLocale: "Centre ancien restreint", zoneIndustrielle: "Polygone Nord", particularite: "Circulation estivale difficile" },
  { ville: "Pau", departement: "64", region: "Nouvelle-Aquitaine", communesVoisines: ["Lons", "Billère", "Lescar"], specificiteLocale: "Boulevard des Pyrénées restreint", zoneIndustrielle: "ZI Induspal", particularite: "Relief et accès complexes" },
  { ville: "Bayonne", departement: "64", region: "Nouvelle-Aquitaine", communesVoisines: ["Anglet", "Biarritz", "Boucau"], specificiteLocale: "Grand Bayonne piéton", zoneIndustrielle: "ZI Saint-Frédéric", particularite: "Ponts sur l'Adour saturés" },
  { ville: "Annecy", departement: "74", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Cran-Gevrier", "Seynod", "Meythet"], specificiteLocale: "Vieille ville piétonne", zoneIndustrielle: "ZI Vovray", particularite: "Trafic dense bord de lac" },
  { ville: "Chambéry", departement: "73", region: "Auvergne-Rhône-Alpes", communesVoisines: ["Cognin", "La Motte-Servolex", "Barberaz"], specificiteLocale: "Centre ancien piéton", zoneIndustrielle: "ZI Bissy", particularite: "Voie rapide urbaine chargée" },
  { ville: "Valenciennes", departement: "59", region: "Hauts-de-France", communesVoisines: ["Anzin", "Marly", "Saint-Saulve"], specificiteLocale: "ZFE en projet", zoneIndustrielle: "ZI Prouvy-Rouvignies", particularite: "Réseau tramway prioritaire" },
  { ville: "Douai", departement: "59", region: "Hauts-de-France", communesVoisines: ["Sin-le-Noble", "Cuincy", "Waziers"], specificiteLocale: "Centre historique restreint", zoneIndustrielle: "ZI Dorignies", particularite: "Contraintes d'accès ancien" },
  { ville: "Avignon", departement: "84", region: "Provence-Alpes-Côte d'Azur", communesVoisines: ["Le Pontet", "Villeneuve-lès-Avignon", "Sorgues"], specificiteLocale: "Intra-muros réglementé", zoneIndustrielle: "Courtine", particularite: "Remparts limitant l'accès" },
  { ville: "Montauban", departement: "82", region: "Occitanie", communesVoisines: ["Bressols", "Saint-Nauphary", "Corbarieu"], specificiteLocale: "Centre ancien complexe", zoneIndustrielle: "ZI Nord", particularite: "Accès Rocade encombré" },
  { ville: "Béziers", departement: "34", region: "Occitanie", communesVoisines: ["Boujan-sur-Libron", "Colombiers", "Villeneuve-lès-Béziers"], specificiteLocale: "Centre historique restreint", zoneIndustrielle: "ZI du Capiscol", particularite: "Rues pentues anciennes" },
  { ville: "La Rochelle", departement: "17", region: "Nouvelle-Aquitaine", communesVoisines: ["Aytré", "Périgny", "Lagord"], specificiteLocale: "Vieux Port piétonnier", zoneIndustrielle: "ZI Périgny", particularite: "Trafic estival très dense" },
  { ville: "Calais", departement: "62", region: "Hauts-de-France", communesVoisines: ["Marck", "Coulogne", "Sangatte"], specificiteLocale: "Zone portuaire restreinte", zoneIndustrielle: "ZI des Dunes", particularite: "Accès port et tunnel denses" }
];

const appDir = path.join(__dirname, '../src/app');

function normalizeSlug(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/'/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

cities.forEach(city => {
  const slug = normalizeSlug(city.ville);
  const dirPath = path.join(appDir, `epaviste-${slug}`);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const content = `import type { Metadata } from 'next';
import Image from 'next/image';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CityJsonLd from '@/components/CityJsonLd';

export const metadata: Metadata = {
  title: "Épaviste Gratuit ${city.ville} | Réseaux Épaviste",
  description: "Épaviste agréé VHU à ${city.ville} (${city.departement}). Enlèvement d'épave gratuit sous 24h. Obtenez votre certificat de destruction CERFA. Intervention rapide.",
  alternates: {
    canonical: 'https://www.reseauxepaviste.fr/epaviste-${slug}/',
  },
};

export default function Epaviste${slug.replace(/-/g, '')}Page() {
  return (
    <>
      <CityJsonLd city="${city.ville}" department="${city.departement}" region="${city.region}" />
      <Breadcrumbs items={[
        { label: 'Épaviste', href: '/epaviste' },
        { label: '${city.ville.replace(/'/g, "\\'")}', href: '/epaviste-${slug}' }
      ]} />
      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention sous 24h à ${city.ville}"
          title="Épaviste Agréé VHU à ${city.ville} – Enlèvement Gratuit"
          subtitle="Service public de proximité pour l'enlèvement gratuit de vos véhicules hors d'usage à ${city.ville} (${city.departement}). Mise en conformité administrative totale."
          ctaText="Centre d'Appel : 07 45 48 24 64"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        {/* H2: Notre intervention à [Ville] et [communes voisines] */}
        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white h-96">
                <Image 
                  src="https://images.unsplash.com/photo-1645216755684-c946ce202427?q=80&w=1200&auto=format&fit=crop"
                  alt="Enlèvement d'épave à ${city.ville}"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Secteur ${city.departement}</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Intervention rapide à ${city.ville} et communes limitrophes.</p>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Notre intervention à ${city.ville} et ${city.communesVoisines.join(', ')}</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Nos unités d\\'intervention sillonnent la région de ${city.region}, en particulier autour de ${city.ville} et la <strong>${city.zoneIndustrielle}</strong>. Nous prenons en compte les spécificités locales : <strong>${city.specificiteLocale}</strong> et adaptons nos moyens d\\'enlèvement face aux contraintes comme : <em>${city.particularite}</em>.
                </p>
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Le non-respect de la mise en destruction d\\'un véhicule hors d\\'usage par un centre VHU agréé expose le propriétaire à de lourdes sanctions. Confiez-nous votre épave en toute légalité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Zone couverte depuis [Ville] */}
        <section className="py-16 bg-white">
          <div className="fr-container">
            <h2 className="text-3xl font-black uppercase m-0 border-none p-0 mb-8 text-center">Zone couverte depuis ${city.ville}</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-[var(--grey-600)] leading-relaxed mb-6">
                Nos dépanneuses interviennent dans un rayon de 20 à 30 km autour de ${city.ville}, couvrant notamment les secteurs de :
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['${city.ville}', ...${JSON.stringify(city.communesVoisines)}].map((commune, i) => (
                  <span key={i} className="bg-[var(--grey-100)] text-[var(--grey-900)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--grey-200)]">
                    {commune}
                  </span>
                ))}
                <span className="bg-[var(--grey-100)] text-[var(--grey-900)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--grey-200)]">
                  Et tout le département ${city.departement}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Témoignages de clients à [Ville] */}
        <section className="py-16 bg-[var(--grey-50)]">
          <div className="fr-container">
            <h2 className="text-3xl font-black uppercase m-0 border-none p-0 mb-12 text-center">Témoignages de clients à ${city.ville}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 shadow-sm border border-[var(--grey-200)]">
                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-[var(--grey-700)] italic mb-6">
                  "Intervention très rapide suite à une panne irréparable. Le chauffeur connaissait bien le quartier et a pu récupérer la voiture malgré l'accès difficile."
                </p>
                <p className="font-bold text-[var(--grey-900)]">— Jean-Marc, ${city.ville}</p>
              </div>
              <div className="bg-white p-8 shadow-sm border border-[var(--grey-200)]">
                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-[var(--grey-700)] italic mb-6">
                  "Prise de rendez-vous simple et enlèvement le lendemain. L'épaviste s'est occupé de toute la paperasse et m'a remis le certificat CERFA directement."
                </p>
                <p className="font-bold text-[var(--grey-900)]">— Sophie, ${city.communesVoisines[0] || city.ville}</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Comment nous joindre depuis [Ville] */}
        <section className="py-20 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Comment nous joindre depuis ${city.ville}</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Notre centre d\\'appels coordonne les interventions de nos camions sur tout le secteur de ${city.ville}. Nos équipes sont mobilisables 7j/7 pour vous assister.
                </p>
                <div className="space-y-4 text-[var(--grey-700)]">
                  <p><strong>Téléphone :</strong> <a href="tel:+33745482464" className="text-[var(--blue-france-main)]">07 45 48 24 64</a></p>
                  <p><strong>Horaires :</strong> 24h/24, 7j/7</p>
                  <p><strong>Secteur d\\'intervention :</strong> ${city.ville} et l\\'ensemble du département ${city.departement}</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white p-2 shadow-2xl border border-[var(--grey-200)]">
                  <CallbackForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: FAQ spécifique [Ville] */}
        <FAQSection items={[
          { question: 'L\\'enlèvement d\\'épave est-il gratuit partout à ${city.ville} ?', answer: 'Oui, l\\'enlèvement est 100% gratuit si votre véhicule est complet (moteur, batterie, pot catalytique), même dans les quartiers difficiles d\\'accès ou en parking souterrain à ${city.ville}.' },
          { question: 'Comment gérer les restrictions Crit\\'Air à ${city.ville} pour l\\'enlèvement ?', answer: 'Nos dépanneuses respectent les normes environnementales et sont autorisées à circuler dans la ZFE de ${city.ville} pour procéder à l\\'enlèvement de votre véhicule polluant.' },
          { question: 'Quel est le délai pour obtenir le certificat de destruction CERFA à ${city.ville} ?', answer: 'Le certificat de destruction officiel vous est remis en main propre par notre chauffeur au moment de l\\'enlèvement de votre véhicule à ${city.ville}.' }
        ]} title="FAQ : Enlèvement d'épave à ${city.ville}" />
      </main>
    </>
  );
}
`;
  
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('Generated 50 city pages successfully!');
