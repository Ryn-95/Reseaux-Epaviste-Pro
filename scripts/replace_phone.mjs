import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const files = globSync('src/**/*.{tsx,ts,json,js}', { absolute: true });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace tel:+33745482464 with tel:+33745482464
  content = content.replace(/tel:\+33745482464/g, 'tel:+33745482464');
  
  // Replace 07 45 48 24 64 with 07 45 48 24 64
  content = content.replace(/07 45 48 24 64/g, '07 45 48 24 64');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
