#!/usr/bin/env node

/**
 * Script de génération automatique des pages locales épaviste
 * Usage: node scripts/generate-local-pages.js
 */

const fs = require('fs');
const path = require('path');

// Configuration des villes à générer
const cities = [
  // ===== ÎLE-DE-FRANCE (Priorité maximale) =====
  // Grandes villes IDF
  { name: 'Versailles', dept: '78', deptName: 'Yvelines', region: 'Île-de-France', lat: 48.8049, lng: 2.1204, pop: '85000', prefix: 'PR7800', nearby: ['Le Chesnay', 'Viroflay', 'Vélizy-Villacoublay'] },
  { name: 'Nanterre', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8925, lng: 2.2069, pop: '96000', prefix: 'PR9200', nearby: ['Rueil-Malmaison', 'Courbevoie', 'Puteaux'] },
  { name: 'Boulogne-Billancourt', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8352, lng: 2.2403, pop: '121000', prefix: 'PR9200', nearby: ['Issy-les-Moulineaux', 'Meudon', 'Sèvres'] },
  { name: 'Argenteuil', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 48.9474, lng: 2.2474, pop: '110000', prefix: 'PR9500', nearby: ['Bezons', 'Cormeilles-en-Parisis', 'Sannois'] },
  { name: 'Montreuil', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8634, lng: 2.4432, pop: '109000', prefix: 'PR9300', nearby: ['Bagnolet', 'Vincennes', 'Rosny-sous-Bois'] },
  { name: 'Saint-Denis', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9362, lng: 2.3574, pop: '112000', prefix: 'PR9300', nearby: ['Aubervilliers', 'La Courneuve', 'Épinay-sur-Seine'] },
  { name: 'Créteil', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7903, lng: 2.4555, pop: '92000', prefix: 'PR9400', nearby: ['Maisons-Alfort', 'Alfortville', 'Bonneuil-sur-Marne'] },
  { name: 'Vincennes', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8478, lng: 2.4395, pop: '50000', prefix: 'PR9400', nearby: ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil'] },
  { name: 'Évry-Courcouronnes', dept: '91', deptName: 'Essonne', region: 'Île-de-France', lat: 48.6289, lng: 2.4269, pop: '69000', prefix: 'PR9100', nearby: ['Corbeil-Essonnes', 'Ris-Orangis', 'Grigny'] },
  { name: 'Cergy', dept: '95', deptName: 'Val-d\'Oise', region: 'Île-de-France', lat: 49.0369, lng: 2.0778, pop: '68000', prefix: 'PR9500', nearby: ['Pontoise', 'Osny', 'Éragny'] },
  { name: 'Meaux', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.9606, lng: 2.8879, pop: '55000', prefix: 'PR7700', nearby: ['Chelles', 'Lagny-sur-Marne', 'Torcy'] },
  { name: 'Melun', dept: '77', deptName: 'Seine-et-Marne', region: 'Île-de-France', lat: 48.5394, lng: 2.6609, pop: '41000', prefix: 'PR7700', nearby: ['Dammarie-les-Lys', 'Le Mée-sur-Seine', 'Vaux-le-Pénil'] },
  
  // Villes moyennes IDF stratégiques
  { name: 'Courbevoie', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8979, lng: 2.2537, pop: '82000', prefix: 'PR9200', nearby: ['La Défense', 'Puteaux', 'Levallois-Perret'] },
  { name: 'Asnières-sur-Seine', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9145, lng: 2.2874, pop: '87000', prefix: 'PR9200', nearby: ['Colombes', 'Gennevilliers', 'Clichy'] },
  { name: 'Levallois-Perret', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.8941, lng: 2.2874, pop: '66000', prefix: 'PR9200', nearby: ['Neuilly-sur-Seine', 'Clichy', 'Courbevoie'] },
  { name: 'Colombes', dept: '92', deptName: 'Hauts-de-Seine', region: 'Île-de-France', lat: 48.9226, lng: 2.2531, pop: '87000', prefix: 'PR9200', nearby: ['La Garenne-Colombes', 'Bois-Colombes', 'Asnières'] },
  { name: 'Vitry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.7873, lng: 2.3933, pop: '93000', prefix: 'PR9400', nearby: ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi'] },
  { name: 'Ivry-sur-Seine', dept: '94', deptName: 'Val-de-Marne', region: 'Île-de-France', lat: 48.8138, lng: 2.3847, pop: '63000', prefix: 'PR9400', nearby: ['Charenton-le-Pont', 'Vitry-sur-Seine', 'Kremlin-Bicêtre'] },
  { name: 'Bobigny', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9098, lng: 2.4384, pop: '54000', prefix: 'PR9300', nearby: ['Drancy', 'Pantin', 'Bondy'] },
  { name: 'Pantin', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.8937, lng: 2.4031, pop: '59000', prefix: 'PR9300', nearby: ['Le Pré-Saint-Gervais', 'Les Lilas', 'Aubervilliers'] },
  { name: 'Aubervilliers', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9145, lng: 2.3824, pop: '88000', prefix: 'PR9300', nearby: ['La Courneuve', 'Saint-Denis', 'Pantin'] },
  { name: 'Aulnay-sous-Bois', dept: '93', deptName: 'Seine-Saint-Denis', region: 'Île-de-France', lat: 48.9336, lng: 2.4946, pop: '86000', prefix: 'PR9300', nearby: ['Sevran', 'Le Blanc-Mesnil', 'Drancy'] },
  
  // ===== GRANDES MÉTROPOLES FRANCE (Priorité haute) =====
  { name: 'Marseille', dept: '13', deptName: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.2965, lng: 5.3698, pop: '870000', prefix: 'PR1300', nearby: ['Aix-en-Provence', 'Aubagne', 'Martigues'] },
  { name: 'Bordeaux', dept: '33', deptName: 'Gironde', region: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792, pop: '260000', prefix: 'PR3300', nearby: ['Mérignac', 'Pessac', 'Talence'] },
  { name: 'Lille', dept: '59', deptName: 'Nord', region: 'Hauts-de-France', lat: 50.6292, lng: 3.0573, pop: '236000', prefix: 'PR5900', nearby: ['Roubaix', 'Tourcoing', 'Villeneuve-d\'Ascq'] },
  { name: 'Toulouse', dept: '31', deptName: 'Haute-Garonne', region: 'Occitanie', lat: 43.6047, lng: 1.4442, pop: '490000', prefix: 'PR3100', nearby: ['Blagnac', 'Colomiers', 'Tournefeuille'] },
  { name: 'Nantes', dept: '44', deptName: 'Loire-Atlantique', region: 'Pays de la Loire', lat: 47.2184, lng: -1.5536, pop: '320000', prefix: 'PR4400', nearby: ['Saint-Herblain', 'Rezé', 'Saint-Sébastien-sur-Loire'] },
  { name: 'Nice', dept: '06', deptName: 'Alpes-Maritimes', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.7102, lng: 7.2620, pop: '340000', prefix: 'PR0600', nearby: ['Antibes', 'Cannes', 'Cagnes-sur-Mer'] },
  { name: 'Strasbourg', dept: '67', deptName: 'Bas-Rhin', region: 'Grand Est', lat: 48.5734, lng: 7.7521, pop: '290000', prefix: 'PR6700', nearby: ['Schiltigheim', 'Illkirch-Graffenstaden', 'Hoenheim'] },
  { name: 'Rennes', dept: '35', deptName: 'Ille-et-Vilaine', region: 'Bretagne', lat: 48.1173, lng: -1.6778, pop: '220000', prefix: 'PR3500', nearby: ['Saint-Grégoire', 'Cesson-Sévigné', 'Chantepie'] },
  { name: 'Montpellier', dept: '34', deptName: 'Hérault', region: 'Occitanie', lat: 43.6108, lng: 3.8767, pop: '300000', prefix: 'PR3400', nearby: ['Castelnau-le-Lez', 'Lattes', 'Pérols'] },
  { name: 'Grenoble', dept: '38', deptName: 'Isère', region: 'Auvergne-Rhône-Alpes', lat: 45.1885, lng: 5.7245, pop: '160000', prefix: 'PR3800', nearby: ['Échirolles', 'Saint-Martin-d\'Hères', 'Fontaine'] },
  { name: 'Rouen', dept: '76', deptName: 'Seine-Maritime', region: 'Normandie', lat: 49.4432, lng: 1.0993, pop: '112000', prefix: 'PR7600', nearby: ['Le Havre', 'Sotteville-lès-Rouen', 'Mont-Saint-Aignan'] },
];

// Fonction pour générer le contenu d'une page locale
function generatePageContent(city) {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Enlever accents
    .replace(/['\s]/g, '-'); // Remplacer espaces et apostrophes
  
  return `import type { Metadata } from 'next';

// =====================================================
// MÉTADONNÉES SEO - Épaviste ${city.name} (${city.dept})
// =====================================================

export const metadata: Metadata = {
  title: 'Service d'enlèvement de véhicule hors d'usage (VHU) ${city.name} – Plateforme Agréée',
  description: 'Service d'enlèvement de véhicule hors d'usage (VHU) à ${city.name} et dans le département ${city.deptName} (${city.dept}). Plateforme agréée par la Préfecture, intervention sous 24h. Certificat de destruction officiel.',
  alternates: {
    canonical: 'https://reseauepaviste.fr/epaviste/${slug}/',
  },
  openGraph: {
    title: 'Service d'Enlèvement de VHU ${city.name} – Plateforme Agréée',
    description: 'Enlèvement de véhicule hors d'usage (VHU) à ${city.name} et ${city.deptName} (${city.dept}). Service administratif certifié, intervention sous 24h.',
    url: 'https://reseauepaviste.fr/epaviste/${slug}/',
    type: 'website',
    locale: 'fr_FR',
  },
};
`;
}

console.log('Génération des pages locales épaviste...');
console.log(`${cities.length} villes à générer\n`);

cities.forEach((city, index) => {
  const slug = city.name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['\s]/g, '-');
  
  console.log(`[${index + 1}/${cities.length}] Génération: ${city.name} (${city.dept}) → /epaviste/${slug}/`);
});

console.log('\n✅ Liste des villes préparée. Lancer la génération avec Node.js');
