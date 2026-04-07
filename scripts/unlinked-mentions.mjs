/**
 * Script Node.js : Détection des "Unlinked Mentions" (Mentions non liées)
 * 
 * Pré-requis : 
 * 1. Créer un projet sur Google Cloud Console
 * 2. Activer l'API Custom Search JSON API
 * 3. Créer un Search Engine ID (Programmable Search Engine)
 * 4. Installer les dépendances : npm install axios dotenv
 * 
 * Utilisation : node scripts/unlinked-mentions.mjs
 */

import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Configuration (à remplir via variables d'environnement .env)
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || 'VOTRE_API_KEY';
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID || 'VOTRE_CX_ID';
const BRAND_NAME = '"Réseaux Épaviste" OR "reseauxepaviste.fr"';
const MY_DOMAIN = 'reseauxepaviste.fr';

async function searchMentions() {
  console.log(`🔍 Recherche de mentions pour : ${BRAND_NAME}...`);
  
  try {
    // Requête pour trouver la marque MAIS exclure notre propre domaine
    const query = `${BRAND_NAME} -site:${MY_DOMAIN}`;
    
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: GOOGLE_API_KEY,
        cx: SEARCH_ENGINE_ID,
        q: query,
        num: 10 // Max 10 par requête (pagination possible via start)
      }
    });

    const items = response.data.items || [];
    
    if (items.length === 0) {
      console.log('Aucune mention trouvée en dehors de votre site.');
      return;
    }

    console.log(`✅ ${items.length} pages trouvées mentionnant votre marque :\n`);
    
    const results = items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet
    }));

    // Sauvegarde dans un fichier CSV
    const csvContent = ['Titre,URL,Extrait'];
    results.forEach(res => {
      console.log(`-> ${res.title}`);
      console.log(`   ${res.link}\n`);
      // Échapper les guillemets pour le CSV
      const safeTitle = res.title.replace(/"/g, '""');
      const safeSnippet = res.snippet.replace(/"/g, '""');
      csvContent.push(`"${safeTitle}","${res.link}","${safeSnippet}"`);
    });

    const outputPath = path.join(process.cwd(), 'unlinked-mentions.csv');
    fs.writeFileSync(outputPath, csvContent.join('\n'), 'utf-8');
    
    console.log(`\n📁 Résultats sauvegardés dans : ${outputPath}`);
    console.log('💡 Prochaine étape : Visitez ces liens. S\'ils mentionnent "Réseaux Épaviste" sans faire de lien vers https://reseauxepaviste.fr, contactez le webmaster !');

  } catch (error) {
    console.error('❌ Erreur lors de la requête API:', error.message);
    if (error.response && error.response.status === 403) {
      console.error('⚠️ Vérifiez que votre clé API est valide et que la Custom Search API est activée.');
    }
  }
}

searchMentions();
