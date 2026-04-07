const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      content = content.replace(/https:\/\/reseauxepaviste\.fr/g, 'https://www.reseauxepaviste.fr');
      content = content.replace(/https:\/\/www\.www\.reseauxepaviste\.fr/g, 'https://www.reseauxepaviste.fr');
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

walkDir('src');
walkDir('scripts');
