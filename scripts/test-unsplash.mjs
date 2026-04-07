import fs from 'fs';
import https from 'https';
import { execSync } from 'child_process';

const output = execSync('grep -rn "images.unsplash.com/photo" src/', { encoding: 'utf-8' });
const regex = /images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)/g;
let match;
const ids = new Set();

while ((match = regex.exec(output)) !== null) {
  ids.add(match[1]);
}

for (const id of ids) {
  https.request({
    method: 'HEAD',
    hostname: 'images.unsplash.com',
    path: `/photo-${id}`
  }, (res) => {
    console.log(`ID ${id}: ${res.statusCode}`);
  }).end();
}
