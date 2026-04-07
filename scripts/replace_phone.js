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
      content = content.replace(/\+33745482464/g, '+33745482464');
      content = content.replace(/07 45 48 24 64/g, '07 45 48 24 64');
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

walkDir('src');
walkDir('scripts');
