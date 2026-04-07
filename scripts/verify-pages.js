#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification des pages épaviste générées...\n');

const epavistePath = path.join(__dirname, '..', 'src', 'app', 'epaviste');

// Lire tous les dossiers
const folders = fs.readdirSync(epavistePath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

console.log(`📊 Total de dossiers trouvés : ${folders.length}\n`);

let pagesWithFile = 0;
let pagesWithoutFile = 0;
const missingPages = [];

folders.forEach(folder => {
  const pagePath = path.join(epavistePath, folder, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    pagesWithFile++;
    console.log(`✅ ${folder}`);
  } else {
    pagesWithoutFile++;
    missingPages.push(folder);
    console.log(`❌ ${folder} - MANQUANT`);
  }
});

console.log(`\n📈 Résumé :`);
console.log(`   ✅ Pages avec fichier : ${pagesWithFile}`);
console.log(`   ❌ Pages sans fichier : ${pagesWithoutFile}`);

if (missingPages.length > 0) {
  console.log(`\n⚠️  Dossiers sans page.tsx :`);
  missingPages.forEach(folder => console.log(`   - ${folder}`));
}

// Vérifier le fichier page.tsx principal
const mainPagePath = path.join(epavistePath, 'page.tsx');
if (fs.existsSync(mainPagePath)) {
  console.log(`\n✅ Page principale /epaviste/page.tsx existe`);
} else {
  console.log(`\n❌ Page principale /epaviste/page.tsx MANQUANTE`);
}

console.log(`\n🎉 Vérification terminée !`);
