#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Configuration complète des villes (57 villes)
const cities = [
  // IDF Principales
  { name: 'Versailles', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.8049, lng: 2.1204, pop: '85000', prefix: 'PR7800', nearby: ['Le Chesnay', 'Viroflay', 'Vélizy-Villacoublay'], specificity: 'château et centre historique', parking: 'parkings souterrains du centre-ville' },
  { name: 'Nanterre', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8925, lng: 2.2069, pop: '96000', prefix: 'PR9200', nearby: ['Rueil-Malmaison', 'Courbevoie', 'Puteaux'], specificity: 'quartier d\'affaires La Défense', parking: 'parkings de La Défense et université' },
  { name: 'Boulogne-Billancourt', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8352, lng: 2.2403, pop: '121000', prefix: 'PR9200', nearby: ['Issy-les-Moulineaux', 'Meudon', 'Sèvres'], specificity: 'ancienne zone industrielle Renault', parking: 'parkings résidentiels et souterrains' },
  { name: 'Argenteuil', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 48.9474, lng: 2.2474, pop: '110000', prefix: 'PR9500', nearby: ['Bezons', 'Cormeilles-en-Parisis', 'Sannois'], specificity: 'zones pavillonnaires étendues', parking: 'stationnement résidentiel' },
  { name: 'Montreuil', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8634, lng: 2.4432, pop: '109000', prefix: 'PR9300', nearby: ['Bagnolet', 'Vincennes', 'Rosny-sous-Bois'], specificity: 'proximité Paris Est', parking: 'parkings de copropriété' },
  { name: 'Saint-Denis', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9362, lng: 2.3574, pop: '112000', prefix: 'PR9300', nearby: ['Aubervilliers', 'La Courneuve', 'Épinay-sur-Seine'], specificity: 'Stade de France et zone commerciale', parking: 'parkings du Stade et centre-ville' },
  { name: 'Créteil', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7903, lng: 2.4555, pop: '92000', prefix: 'PR9400', nearby: ['Maisons-Alfort', 'Alfortville', 'Bonneuil-sur-Marne'], specificity: 'préfecture du Val-de-Marne', parking: 'parkings administratifs et Créteil Soleil' },
  { name: 'Vincennes', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8478, lng: 2.4395, pop: '50000', prefix: 'PR9400', nearby: ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil'], specificity: 'château et bois de Vincennes', parking: 'stationnement résidentiel dense' },
  { name: 'Évry-Courcouronnes', dept: '91', deptName: 'Essonne', region: 'Île-de-France', lat: 48.6289, lng: 2.4269, pop: '69000', prefix: 'PR9100', nearby: ['Corbeil-Essonnes', 'Ris-Orangis', 'Grigny'], specificity: 'ville nouvelle et préfecture', parking: 'parkings de la cathédrale et centre commercial' },
  { name: 'Cergy', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 49.0369, lng: 2.0778, pop: '68000', prefix: 'PR9500', nearby: ['Pontoise', 'Osny', 'Éragny'], specificity: 'ville nouvelle de Cergy-Pontoise', parking: 'parkings des 3 Fontaines' },
  
  // Grandes métropoles
  { name: 'Marseille', dept: '13', deptName: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.2965, lng: 5.3698, pop: '870000', prefix: 'PR1300', nearby: ['Aix-en-Provence', 'Aubagne', 'Martigues'], specificity: '2ème ville de France et port méditerranéen', parking: 'parkings du Vieux-Port et quartiers Nord' },
  { name: 'Bordeaux', dept: '33', deptName: 'Gironde', region: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792, pop: '260000', prefix: 'PR3300', nearby: ['Mérignac', 'Pessac', 'Talence'], specificity: 'centre historique UNESCO', parking: 'parkings souterrains centre-ville' },
  { name: 'Lille', dept: '59', deptName: 'Nord', region: 'Hauts-de-France', lat: 50.6292, lng: 3.0573, pop: '236000', prefix: 'PR5900', nearby: ['Roubaix', 'Tourcoing', 'Villeneuve-d\'Ascq'], specificity: 'métropole européenne transfrontalière', parking: 'parkings Euralille et gares' },
  { name: 'Toulouse', dept: '31', deptName: 'Haute-Garonne', region: 'Occitanie', lat: 43.6047, lng: 1.4442, pop: '490000', prefix: 'PR3100', nearby: ['Blagnac', 'Colomiers', 'Tournefeuille'], specificity: 'capitale aéronautique européenne', parking: 'parkings Capitole et zones Airbus' },
  { name: 'Nantes', dept: '44', deptName: 'Loire-Atlantique', region: 'Pays de la Loire', lat: 47.2184, lng: -1.5536, pop: '320000', prefix: 'PR4400', nearby: ['Saint-Herblain', 'Rezé', 'Saint-Sébastien-sur-Loire'], specificity: 'métropole atlantique', parking: 'parkings île de Nantes et centre' },
  { name: 'Nice', dept: '06', deptName: 'Alpes-Maritimes', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.7102, lng: 7.2620, pop: '340000', prefix: 'PR0600', nearby: ['Antibes', 'Cannes', 'Cagnes-sur-Mer'], specificity: 'Côte d\'Azur et tourisme', parking: 'parkings Promenade des Anglais' },
  { name: 'Strasbourg', dept: '67', deptName: 'Bas-Rhin', region: 'Grand Est', lat: 48.5734, lng: 7.7521, pop: '290000', prefix: 'PR6700', nearby: ['Schiltigheim', 'Illkirch-Graffenstaden', 'Hoenheim'], specificity: 'capitale européenne', parking: 'parkings centre historique' },
  { name: 'Rennes', dept: '35', deptName: 'Ille-et-Vilaine', region: 'Bretagne', lat: 48.1173, lng: -1.6778, pop: '220000', prefix: 'PR3500', nearby: ['Saint-Grégoire', 'Cesson-Sévigné', 'Chantepie'], specificity: 'capitale bretonne', parking: 'parkings République et gare' },
  { name: 'Montpellier', dept: '34', deptName: 'Hérault', region: 'Occitanie', lat: 43.6108, lng: 3.8767, pop: '300000', prefix: 'PR3400', nearby: ['Castelnau-le-Lez', 'Lattes', 'Pérols'], specificity: 'métropole méditerranéenne', parking: 'parkings Antigone et Odysseum' },
  { name: 'Grenoble', dept: '38', deptName: 'Isère', region: 'Auvergne-Rhône-Alpes', lat: 45.1885, lng: 5.7245, pop: '160000', prefix: 'PR3800', nearby: ['Échirolles', 'Saint-Martin-d\'Hères', 'Fontaine'], specificity: 'capitale des Alpes', parking: 'parkings centre et campus universitaire' },
  { name: 'Rouen', dept: '76', deptName: 'Seine-Maritime', region: 'Normandie', lat: 49.4432, lng: 1.0993, pop: '112000', prefix: 'PR7600', nearby: ['Le Havre', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan'], specificity: 'capitale normande historique', parking: 'parkings cathédrale et rive gauche' },
  { name: 'Lyon', dept: '69', deptName: 'Rhône', region: 'Auvergne-Rhône-Alpes', lat: 45.7640, lng: 4.8357, pop: '522000', prefix: 'PR6900', nearby: ['Villeurbanne', 'Vénissieux', 'Caluire-et-Cuire'], specificity: '3ème ville de France, confluence Rhône-Saône', parking: 'parkings Part-Dieu et Bellecour' },

  // IDF Supplémentaires
  { name: 'Courbevoie', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8979, lng: 2.2537, pop: '82000', prefix: 'PR9200', nearby: ['La Défense', 'Puteaux', 'Levallois-Perret'], specificity: 'quartier d\'affaires La Défense', parking: 'parkings de La Défense' },
  { name: 'Asnières-sur-Seine', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9145, lng: 2.2874, pop: '87000', prefix: 'PR9200', nearby: ['Colombes', 'Gennevilliers', 'Clichy'], specificity: 'bords de Seine', parking: 'parkings résidentiels' },
  { name: 'Levallois-Perret', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8941, lng: 2.2874, pop: '66000', prefix: 'PR9200', nearby: ['Neuilly-sur-Seine', 'Clichy', 'Courbevoie'], specificity: 'ville dense proche Paris', parking: 'parkings souterrains' },
  { name: 'Colombes', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9226, lng: 2.2531, pop: '87000', prefix: 'PR9200', nearby: ['La Garenne-Colombes', 'Bois-Colombes', 'Asnières'], specificity: 'zones pavillonnaires', parking: 'stationnement résidentiel' },
  { name: 'Vitry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7873, lng: 2.3933, pop: '93000', prefix: 'PR9400', nearby: ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi'], specificity: 'bords de Seine', parking: 'parkings de copropriété' },
  { name: 'Ivry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8138, lng: 2.3847, pop: '63000', prefix: 'PR9400', nearby: ['Charenton-le-Pont', 'Vitry-sur-Seine', 'Kremlin-Bicêtre'], specificity: 'proximité Paris 13e', parking: 'parkings résidentiels' },
  { name: 'Bobigny', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9098, lng: 2.4384, pop: '54000', prefix: 'PR9300', nearby: ['Drancy', 'Pantin', 'Bondy'], specificity: 'préfecture Seine-Saint-Denis', parking: 'parkings administratifs' },
  { name: 'Pantin', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8937, lng: 2.4031, pop: '59000', prefix: 'PR9300', nearby: ['Le Pré-Saint-Gervais', 'Les Lilas', 'Aubervilliers'], specificity: 'canal de l\'Ourcq', parking: 'parkings des Quatre-Chemins' },
  { name: 'Aubervilliers', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9145, lng: 2.3824, pop: '88000', prefix: 'PR9300', nearby: ['La Courneuve', 'Saint-Denis', 'Pantin'], specificity: 'zones commerciales', parking: 'parkings Millénaire' },
  { name: 'Aulnay-sous-Bois', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9336, lng: 2.4946, pop: '86000', prefix: 'PR9300', nearby: ['Sevran', 'Le Blanc-Mesnil', 'Drancy'], specificity: 'zones pavillonnaires étendues', parking: 'parkings O\'Parinor' },
  { name: 'Meaux', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.9606, lng: 2.8879, pop: '55000', prefix: 'PR7700', nearby: ['Chelles', 'Lagny-sur-Marne', 'Torcy'], specificity: 'ville historique sur la Marne', parking: 'parkings centre-ville' },
  { name: 'Melun', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.5394, lng: 2.6609, pop: '41000', prefix: 'PR7700', nearby: ['Dammarie-les-Lys', 'Le Mée-sur-Seine', 'Vaux-le-Pénil'], specificity: 'préfecture Seine-et-Marne', parking: 'parkings préfecture' },
  { name: 'Rueil-Malmaison', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8773, lng: 2.1833, pop: '79000', prefix: 'PR9200', nearby: ['Nanterre', 'Suresnes', 'Garches'], specificity: 'château de Malmaison', parking: 'parkings résidentiels' },
  { name: 'Issy-les-Moulineaux', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8239, lng: 2.2700, pop: '68000', prefix: 'PR9200', nearby: ['Boulogne-Billancourt', 'Vanves', 'Meudon'], specificity: 'pôle tertiaire', parking: 'parkings Val de Seine' },
  { name: 'Clichy', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9044, lng: 2.3059, pop: '62000', prefix: 'PR9200', nearby: ['Levallois-Perret', 'Asnières', 'Saint-Ouen'], specificity: 'proximité Paris 17e', parking: 'parkings Mairie' },
  { name: 'Champigny-sur-Marne', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8173, lng: 2.5155, pop: '77000', prefix: 'PR9400', nearby: ['Nogent-sur-Marne', 'Saint-Maur-des-Fossés', 'Joinville-le-Pont'], specificity: 'bords de Marne', parking: 'parkings résidentiels' },
  { name: 'Saint-Maur-des-Fossés', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7995, lng: 2.4978, pop: '75000', prefix: 'PR9400', nearby: ['Créteil', 'Joinville-le-Pont', 'Champigny'], specificity: 'presqu\'île de la Marne', parking: 'parkings résidentiels' },
  { name: 'Sartrouville', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.9364, lng: 2.1594, pop: '53000', prefix: 'PR7800', nearby: ['Houilles', 'Maisons-Laffitte', 'Montesson'], specificity: 'bords de Seine', parking: 'parkings gare' },
  { name: 'Massy', dept: '91', deptName: 'Essonne', region: 'Île-de-France', lat: 48.7308, lng: 2.2728, pop: '48000', prefix: 'PR9100', nearby: ['Palaiseau', 'Antony', 'Verrières-le-Buisson'], specificity: 'gare TGV', parking: 'parkings gare et Opéra' },
  { name: 'Antony', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.7543, lng: 2.2978, pop: '62000', prefix: 'PR9200', nearby: ['Massy', 'Bourg-la-Reine', 'Wissous'], specificity: 'ville résidentielle', parking: 'parkings RER' },

  // France Autres
  { name: 'Villeurbanne', dept: '69', deptName: 'Rhône', region: 'Auvergne-Rhône-Alpes', lat: 45.7667, lng: 4.8833, pop: '156000', prefix: 'PR6900', nearby: ['Lyon', 'Vaulx-en-Velin', 'Bron'], specificity: 'ville limitrophe de Lyon', parking: 'parkings Gratte-Ciel et Flachet' },
  { name: 'Aix-en-Provence', dept: '13', deptName: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.5297, lng: 5.4474, pop: '145000', prefix: 'PR1300', nearby: ['Marseille', 'Gardanne', 'Bouc-Bel-Air'], specificity: 'ville universitaire et thermale', parking: 'parkings Rotonde et centre historique' },
  { name: 'Dijon', dept: '21', deptName: 'Côte-d\'Or', region: 'Bourgogne-Franche-Comté', lat: 47.3220, lng: 5.0415, pop: '159000', prefix: 'PR2100', nearby: ['Chenôve', 'Talant', 'Fontaine-lès-Dijon'], specificity: 'capitale bourguignonne', parking: 'parkings Darcy et gare' },
  { name: 'Angers', dept: '49', deptName: 'Maine-et-Loire', region: 'Pays de la Loire', lat: 47.4784, lng: -0.5632, pop: '154000', prefix: 'PR4900', nearby: ['Avrillé', 'Trélazé', 'Saint-Barthélemy-d\'Anjou'], specificity: 'château et bords de Maine', parking: 'parkings centre-ville' },
  { name: 'Le Mans', dept: '72', deptName: 'Sarthe', region: 'Pays de la Loire', lat: 48.0077, lng: 0.1984, pop: '143000', prefix: 'PR7200', nearby: ['Allonnes', 'Coulaines', 'Arnage'], specificity: '24 Heures du Mans', parking: 'parkings circuit et centre' },
  { name: 'Brest', dept: '29', deptName: 'Finistère', region: 'Bretagne', lat: 48.3905, lng: -4.4860, pop: '139000', prefix: 'PR2900', nearby: ['Guipavas', 'Plouzané', 'Gouesnou'], specificity: 'port militaire atlantique', parking: 'parkings port et Siam' },
  { name: 'Clermont-Ferrand', dept: '63', deptName: 'Puy-de-Dôme', region: 'Auvergne-Rhône-Alpes', lat: 45.7772, lng: 3.0870, pop: '147000', prefix: 'PR6300', nearby: ['Aubière', 'Chamalières', 'Beaumont'], specificity: 'capitale auvergnate et Michelin', parking: 'parkings Jaude et gare' },
  { name: 'Tours', dept: '37', deptName: 'Indre-et-Loire', region: 'Centre-Val de Loire', lat: 47.3941, lng: 0.6848, pop: '136000', prefix: 'PR3700', nearby: ['Saint-Pierre-des-Corps', 'Joué-lès-Tours', 'Saint-Avertin'], specificity: 'châteaux de la Loire', parking: 'parkings Vinci et gare' },
  { name: 'Amiens', dept: '80', deptName: 'Somme', region: 'Hauts-de-France', lat: 49.8942, lng: 2.2957, pop: '133000', prefix: 'PR8000', nearby: ['Longueau', 'Rivery', 'Camon'], specificity: 'cathédrale UNESCO', parking: 'parkings cathédrale et gare' },
  { name: 'Limoges', dept: '87', deptName: 'Haute-Vienne', region: 'Nouvelle-Aquitaine', lat: 45.8336, lng: 1.2611, pop: '132000', prefix: 'PR8700', nearby: ['Panazol', 'Couzeix', 'Le Palais-sur-Vienne'], specificity: 'porcelaine et arts du feu', parking: 'parkings Champ de Juillet' },
  { name: 'Reims', dept: '51', deptName: 'Marne', region: 'Grand Est', lat: 49.2583, lng: 4.0317, pop: '182000', prefix: 'PR5100', nearby: ['Tinqueux', 'Bétheny', 'Cormontreuil'], specificity: 'champagne et cathédrale', parking: 'parkings cathédrale et Erlon' },
  { name: 'Toulon', dept: '83', deptName: 'Var', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.1242, lng: 5.9280, pop: '176000', prefix: 'PR8300', nearby: ['La Seyne-sur-Mer', 'La Garde', 'Hyères'], specificity: 'base navale méditerranéenne', parking: 'parkings port et Mayol' },
  { name: 'Saint-Étienne', dept: '42', deptName: 'Loire', region: 'Auvergne-Rhône-Alpes', lat: 45.4397, lng: 4.3872, pop: '172000', prefix: 'PR4200', nearby: ['Saint-Priest-en-Jarez', 'La Ricamarie', 'Firminy'], specificity: 'ville minière et design', parking: 'parkings Châteaucreux' },
  { name: 'Le Havre', dept: '76', deptName: 'Seine-Maritime', region: 'Normandie', lat: 49.4944, lng: 0.1079, pop: '170000', prefix: 'PR7600', nearby: ['Montivilliers', 'Sainte-Adresse', 'Gonfreville-l\'Orcher'], specificity: 'port maritime et architecture Perret', parking: 'parkings port et plage' },
  { name: 'Perpignan', dept: '66', deptName: 'Pyrénées-Orientales', region: 'Occitanie', lat: 42.6886, lng: 2.8948, pop: '121000', prefix: 'PR6600', nearby: ['Canet-en-Roussillon', 'Saint-Estève', 'Rivesaltes'], specificity: 'capitale catalane française', parking: 'parkings République et gare' },
];

function generatePage(city) {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  return `import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ServiceGallery from '@/components/ServiceGallery';
import CallbackForm from '@/components/CallbackForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Service d\\'Enlèvement de VHU ${city.name} (${city.dept}) – Épaviste Agréé',
  description: 'Demande de prise en charge pour l\\'enlèvement de véhicule hors d\\'usage (VHU) à ${city.name} et dans le département ${city.deptName}. Certificat de destruction CERFA remis immédiatement. Service public de proximité.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/epaviste/${slug}/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': 'https://reseauepaviste.fr/epaviste/${slug}/#business',
      name: 'RéseauEpaviste ${city.name}',
      description: 'Centre d\\'appel pour l\\'enlèvement de VHU certifié à ${city.name}',
      url: 'https://reseauepaviste.fr/epaviste/${slug}/',
      telephone: '+33-1-84-17-32-18',
      areaServed: { '@type': 'City', name: '${city.name}' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: '${city.name}',
        postalCode: '${city.dept}000',
        addressCountry: 'FR',
      }
    }
  ]
};

export default function Epaviste${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="fr-header bg-white">
        <div className="fr-container">
          <div className="fr-header__body py-6 flex items-center justify-between border-b-2 border-[var(--blue-france-main)]">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center justify-center border-2 border-black p-2 font-serif font-black text-[9px] leading-none text-center bg-white min-w-[80px]">
                RÉPUBLIQUE<br/>FRANÇAISE
                <div className="mt-1 w-full h-0.5 bg-black"></div>
                <div className="mt-0.5 font-bold text-[7px] italic">Liberté<br/>Égalité<br/>Fraternité</div>
              </div>
              <div className="h-16 w-px bg-gray-300 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tighter uppercase leading-none text-[var(--grey-900)]">
                  Réseau<br/>
                  <span className="text-[var(--blue-france-main)]">Epaviste</span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Plateforme Nationale Agréée</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Secteur ${city.name} Actif</span>
              </div>
              <a href="tel:+33745482464" className="text-2xl font-black text-[var(--blue-france-main)] no-underline">
                07 45 48 24 64
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <HeroSection
          variant="local"
          badge="Intervention sous 24h"
          title="Épaviste Agréé à ${city.name} (${city.dept})"
          subtitle="Service public de proximité pour l'enlèvement gratuit de vos véhicules hors d'usage. Mise en conformité administrative totale sur ${city.name} et ses environs."
          ctaText="Centre d'Appel : 07 45 48 24 64"
          ctaHref="tel:+33745482464"
        />

        <TrustBadges />

        <section className="py-16 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1594411986063-9562479e390c?q=80&w=1200&auto=format&fit=crop"
                  alt="Enlèvement d'épave à ${city.name}"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-france-main)]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 border-l-4 border-[var(--blue-france-main)] shadow-lg max-w-xs">
                  <p className="text-[10px] font-bold text-[var(--blue-france-main)] uppercase mb-1">Secteur ${city.dept}</p>
                  <p className="text-sm font-bold text-[var(--grey-900)]">Intervention rapide à ${city.name} et communes limitrophes.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="fr-alert">
                  <p className="text-sm font-bold leading-relaxed">
                    Tout propriétaire de véhicule hors d\\'usage à ${city.name} est responsable de sa remise à un centre VHU agréé, sous peine de sanctions administratives.
                  </p>
                </div>
                <h2 className="text-4xl font-black uppercase leading-[1.1] m-0 border-none p-0">Votre épaviste de proximité à ${city.name}</h2>
                <p className="text-lg text-[var(--grey-600)] leading-relaxed">
                  Nos unités d\\'intervention couvrent l\\'intégralité de la commune de <strong>${city.name}</strong> (${city.dept}) pour collecter vos véhicules destinés à la destruction. Nous assurons la dépollution systématique et le recyclage des matériaux dans le strict respect des directives environnementales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceGallery />

        <section className="py-20 bg-white">
          <div className="fr-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl font-black uppercase m-0 border-none p-0">Demande de prise en charge</h2>
                <p className="text-[var(--grey-600)] leading-relaxed text-lg">
                  Nos agents basés en ${city.deptName} traitent votre dossier prioritairement. Préparez votre certificat d\\'immatriculation pour l\\'établissement du certificat de destruction CERFA.
                </p>
                <div className="p-8 bg-[var(--blue-france-950)] border-l-8 border-[var(--blue-france-main)] shadow-sm">
                  <p className="text-[10px] font-black uppercase text-[var(--blue-france-main)] tracking-[0.2em] mb-3">Ligne Directe ${city.name}</p>
                  <a href="tel:+33745482464" className="text-3xl font-black text-[var(--grey-900)] no-underline">07 45 48 24 64</a>
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

        <FAQSection items={[
          { question: 'L\\'enlèvement est-il réellement gratuit à ${city.name} ?', answer: 'Oui, l\\'intervention est sans frais si le véhicule est complet (présence du bloc moteur et du pot catalytique). Nos frais sont couverts par la revente des matériaux recyclables.' },
          { question: 'Quels sont les délais d\\'intervention en ${city.deptName} ?', answer: 'Nous intervenons généralement sous 24h à ${city.name} et dans les villes voisines comme ${city.nearby.join(', ')}.' },
          { question: 'Remettez-vous un document officiel ?', answer: 'Absolument. Un certificat de destruction (CERFA n°15776*02) vous est remis en main propre, déchargeant immédiatement votre responsabilité civile et pénale.' }
        ]} title="Informations complémentaires ${city.name}" />
      </main>
    </>
  );
}
`;
}

// Generer toutes les pages
cities.forEach(city => {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  const dirPath = path.join(__dirname, '..', 'src', 'app', 'epaviste', slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Creer le dossier s'il n'existe pas
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Generer et ecrire le contenu
  const content = generatePage(city);
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Creation: /epaviste/${slug}/page.tsx`);
});

console.log(`\nGeneration terminee: ${cities.length} pages creees avec succes.`);
