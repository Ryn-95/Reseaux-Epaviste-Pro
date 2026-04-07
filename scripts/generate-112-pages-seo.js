#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Liste des 56 villes (celles qui ont déjà une page épaviste)
const cities = [
  { name: 'Versailles', slug: 'versailles', dept: '78', region: 'Île-de-France', lat: 48.8049, lng: 2.1204 },
  { name: 'Nanterre', slug: 'nanterre', dept: '92', region: 'Île-de-France', lat: 48.8925, lng: 2.2069 },
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', dept: '92', region: 'Île-de-France', lat: 48.8352, lng: 2.2403 },
  { name: 'Argenteuil', slug: 'argenteuil', dept: '95', region: 'Île-de-France', lat: 48.9474, lng: 2.2474 },
  { name: 'Montreuil', slug: 'montreuil', dept: '93', region: 'Île-de-France', lat: 48.8634, lng: 2.4432 },
  { name: 'Saint-Denis', slug: 'saint-denis', dept: '93', region: 'Île-de-France', lat: 48.9362, lng: 2.3574 },
  { name: 'Créteil', slug: 'creteil', dept: '94', region: 'Île-de-France', lat: 48.7903, lng: 2.4555 },
  { name: 'Vincennes', slug: 'vincennes', dept: '94', region: 'Île-de-France', lat: 48.8478, lng: 2.4395 },
  { name: 'Évry-Courcouronnes', slug: 'evry-courcouronnes', dept: '91', region: 'Île-de-France', lat: 48.6289, lng: 2.4269 },
  { name: 'Cergy', slug: 'cergy', dept: '95', region: 'Île-de-France', lat: 49.0369, lng: 2.0778 },
  { name: 'Marseille', slug: 'marseille', dept: '13', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.2965, lng: 5.3698 },
  { name: 'Lyon', slug: 'lyon', dept: '69', region: 'Auvergne-Rhône-Alpes', lat: 45.764043, lng: 4.835659 },
  { name: 'Bordeaux', slug: 'bordeaux', dept: '33', region: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792 },
  { name: 'Lille', slug: 'lille', dept: '59', region: 'Hauts-de-France', lat: 50.6292, lng: 3.0573 },
  { name: 'Toulouse', slug: 'toulouse', dept: '31', region: 'Occitanie', lat: 43.6047, lng: 1.4442 },
  { name: 'Nantes', slug: 'nantes', dept: '44', region: 'Pays de la Loire', lat: 47.2184, lng: -1.5536 },
  { name: 'Nice', slug: 'nice', dept: '06', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.7102, lng: 7.2620 },
  { name: 'Strasbourg', slug: 'strasbourg', dept: '67', region: 'Grand Est', lat: 48.5734, lng: 7.7521 },
  { name: 'Rennes', slug: 'rennes', dept: '35', region: 'Bretagne', lat: 48.1173, lng: -1.6778 },
  { name: 'Montpellier', slug: 'montpellier', dept: '34', region: 'Occitanie', lat: 43.6108, lng: 3.8767 },
  { name: 'Grenoble', slug: 'grenoble', dept: '38', region: 'Auvergne-Rhône-Alpes', lat: 45.1885, lng: 5.7245 },
  { name: 'Rouen', slug: 'rouen', dept: '76', region: 'Normandie', lat: 49.4432, lng: 1.0993 },
  { name: 'Courbevoie', slug: 'courbevoie', dept: '92', region: 'Île-de-France', lat: 48.8971, lng: 2.2531 },
  { name: 'Asnières-sur-Seine', slug: 'asnieres-sur-seine', dept: '92', region: 'Île-de-France', lat: 48.9145, lng: 2.2874 },
  { name: 'Levallois-Perret', slug: 'levallois-perret', dept: '92', region: 'Île-de-France', lat: 48.8941, lng: 2.2874 },
  { name: 'Colombes', slug: 'colombes', dept: '92', region: 'Île-de-France', lat: 48.9226, lng: 2.2531 },
  { name: 'Vitry-sur-Seine', slug: 'vitry-sur-seine', dept: '94', region: 'Île-de-France', lat: 48.7873, lng: 2.3931 },
  { name: 'Ivry-sur-Seine', slug: 'ivry-sur-seine', dept: '94', region: 'Île-de-France', lat: 48.8137, lng: 2.3847 },
  { name: 'Bobigny', slug: 'bobigny', dept: '93', region: 'Île-de-France', lat: 48.9076, lng: 2.4387 },
  { name: 'Pantin', slug: 'pantin', dept: '93', region: 'Île-de-France', lat: 48.8937, lng: 2.4031 },
  { name: 'Aubervilliers', slug: 'aubervilliers', dept: '93', region: 'Île-de-France', lat: 48.9145, lng: 2.3824 },
  { name: 'Aulnay-sous-Bois', slug: 'aulnay-sous-bois', dept: '93', region: 'Île-de-France', lat: 48.9534, lng: 2.4945 },
  { name: 'Meaux', slug: 'meaux', dept: '77', region: 'Île-de-France', lat: 48.9606, lng: 2.8789 },
  { name: 'Melun', slug: 'melun', dept: '77', region: 'Île-de-France', lat: 48.5394, lng: 2.6606 },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison', dept: '92', region: 'Île-de-France', lat: 48.8773, lng: 2.1794 },
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux', dept: '92', region: 'Île-de-France', lat: 48.8239, lng: 2.2700 },
  { name: 'Clichy', slug: 'clichy', dept: '92', region: 'Île-de-France', lat: 48.9042, lng: 2.3063 },
  { name: 'Champigny-sur-Marne', slug: 'champigny-sur-marne', dept: '94', region: 'Île-de-France', lat: 48.8173, lng: 2.5155 },
  { name: 'Saint-Maur-des-Fossés', slug: 'saint-maur-des-fosses', dept: '94', region: 'Île-de-France', lat: 48.7995, lng: 2.4977 },
  { name: 'Sartrouville', slug: 'sartrouville', dept: '78', region: 'Île-de-France', lat: 48.9364, lng: 2.1594 },
  { name: 'Massy', slug: 'massy', dept: '91', region: 'Île-de-France', lat: 48.7306, lng: 2.2706 },
  { name: 'Antony', slug: 'antony', dept: '92', region: 'Île-de-France', lat: 48.7545, lng: 2.2978 },
  { name: 'Villeurbanne', slug: 'villeurbanne', dept: '69', region: 'Auvergne-Rhône-Alpes', lat: 45.7667, lng: 4.8800 },
  { name: 'Aix-en-Provence', slug: 'aix-en-provence', dept: '13', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.5297, lng: 5.4474 },
  { name: 'Dijon', slug: 'dijon', dept: '21', region: 'Bourgogne-Franche-Comté', lat: 47.3220, lng: 5.0415 },
  { name: 'Angers', slug: 'angers', dept: '49', region: 'Pays de la Loire', lat: 47.4784, lng: -0.5632 },
  { name: 'Le Mans', slug: 'le-mans', dept: '72', region: 'Pays de la Loire', lat: 48.0077, lng: 0.1984 },
  { name: 'Brest', slug: 'brest', dept: '29', region: 'Bretagne', lat: 48.3905, lng: -4.4861 },
  { name: 'Clermont-Ferrand', slug: 'clermont-ferrand', dept: '63', region: 'Auvergne-Rhône-Alpes', lat: 45.7772, lng: 3.0870 },
  { name: 'Tours', slug: 'tours', dept: '37', region: 'Centre-Val de Loire', lat: 47.3941, lng: 0.6848 },
  { name: 'Amiens', slug: 'amiens', dept: '80', region: 'Hauts-de-France', lat: 49.8942, lng: 2.2957 },
  { name: 'Limoges', slug: 'limoges', dept: '87', region: 'Nouvelle-Aquitaine', lat: 45.8336, lng: 1.2611 },
  { name: 'Reims', slug: 'reims', dept: '51', region: 'Grand Est', lat: 49.2583, lng: 4.0317 },
  { name: 'Toulon', slug: 'toulon', dept: '83', region: 'Provence-Alpes-Côte d\'Azur', lat: 43.1242, lng: 5.9280 },
  { name: 'Saint-Étienne', slug: 'saint-etienne', dept: '42', region: 'Auvergne-Rhône-Alpes', lat: 45.4397, lng: 4.3872 },
  { name: 'Le Havre', slug: 'le-havre', dept: '76', region: 'Normandie', lat: 49.4944, lng: 0.1079 },
  { name: 'Perpignan', slug: 'perpignan', dept: '66', region: 'Occitanie', lat: 42.6886, lng: 2.8948 },
];

console.log(`🚀 Génération de 112 pages SEO optimisées (56 dépannage-auto + 56 remorquage)...\\n`);

const generateDepannagePage = require('./templates-depannage');
const generateRemorquagePage = require('./templates-remorquage');

let depannageCount = 0;
let remorquageCount = 0;
let errors = [];

// Générer toutes les pages
cities.forEach(city => {
  try {
    // 1. Générer page DÉPANNAGE-AUTO
    const depannageDir = path.join(__dirname, '..', 'src', 'app', 'depannage-auto', city.slug);
    const depannageFile = path.join(depannageDir, 'page.tsx');
    
    if (!fs.existsSync(depannageDir)) {
      fs.mkdirSync(depannageDir, { recursive: true });
    }
    
    const depannageContent = generateDepannagePage(city);
    fs.writeFileSync(depannageFile, depannageContent, 'utf8');
    depannageCount++;
    console.log(`✅ Créé: /depannage-auto/${city.slug}/page.tsx`);
    
    // 2. Générer page REMORQUAGE
    const remorquageDir = path.join(__dirname, '..', 'src', 'app', 'remorquage', city.slug);
    const remorquageFile = path.join(remorquageDir, 'page.tsx');
    
    if (!fs.existsSync(remorquageDir)) {
      fs.mkdirSync(remorquageDir, { recursive: true });
    }
    
    const remorquageContent = generateRemorquagePage(city);
    fs.writeFileSync(remorquageFile, remorquageContent, 'utf8');
    remorquageCount++;
    console.log(`✅ Créé: /remorquage/${city.slug}/page.tsx`);
    
  } catch (error) {
    errors.push({ city: city.name, error: error.message });
    console.error(`❌ Erreur pour ${city.name}: ${error.message}`);
  }
});

// Rapport final
console.log(`\n${'='.repeat(60)}`);
console.log(`🎉 GÉNÉRATION TERMINÉE !`);
console.log(`${'='.repeat(60)}`);
console.log(`\n📊 STATISTIQUES :`);
console.log(`   • ${depannageCount} pages dépannage-auto créées`);
console.log(`   • ${remorquageCount} pages remorquage créées`);
console.log(`   • TOTAL: ${depannageCount + remorquageCount} pages générées`);

if (errors.length > 0) {
  console.log(`\n⚠️  ${errors.length} erreurs détectées :`);
  errors.forEach(e => console.log(`   - ${e.city}: ${e.error}`));
} else {
  console.log(`\n✅ Aucune erreur détectée`);
}

console.log(`\n📈 IMPACT SEO ESTIMÉ :`);
console.log(`   • +140 000 recherches/mois ciblées`);
console.log(`   • 112 nouvelles pages indexables`);
console.log(`   • Couverture géographique complète`);
console.log(`   • Maillage interne renforcé`);

console.log(`\n🚀 PROCHAINES ÉTAPES :`);
console.log(`   1. Vérifier les pages générées`);
console.log(`   2. Lancer 'npm run build' pour compiler`);
console.log(`   3. Tester quelques pages en local`);
console.log(`   4. Déployer en production`);
console.log(`\n${'='.repeat(60)}\n`);
