# 🚀 Guide de Déploiement - 171 Pages SEO

## ✅ Ce qui a été fait

**114 nouvelles pages** ont été générées avec succès :
- 57 pages `/depannage-auto/[ville]/`
- 57 pages `/remorquage/[ville]/`

Combinées aux 57 pages `/epaviste/[ville]/` existantes, vous avez maintenant **171 pages locales optimisées SEO**.

---

## 📋 Checklist avant déploiement

### 1. Vérifier Node.js version
```bash
node --version
# Doit être >= 20.9.0
```

Si version < 20, installer Node 20+ :
```bash
# macOS avec Homebrew
brew install node@20

# Ou avec nvm
nvm install 20
nvm use 20
```

### 2. Installer dépendances
```bash
cd reseau-epaviste
npm install
```

### 3. Build production
```bash
npm run build
```

### 4. Tester en local
```bash
npm run start
# Ouvrir http://localhost:3000
```

### 5. Tester quelques pages
- http://localhost:3000/depannage-auto/paris/
- http://localhost:3000/depannage-auto/lyon/
- http://localhost:3000/remorquage/marseille/
- http://localhost:3000/remorquage/bordeaux/

---

## 🔧 Actions requises AVANT déploiement

### 1. Remplacer le numéro de téléphone factice

**Actuellement** : `01 84 17 32 18` (numéro factice)  
**À faire** : Remplacer par votre vrai numéro partout

```bash
# Depuis reseau-epaviste/
# Remplacer VOTRE_NUMERO par votre vrai numéro
find src -type f -name "*.tsx" -exec sed -i '' 's/01 84 17 32 18/VOTRE_NUMERO/g' {} +
```

### 2. Vérifier les sitemaps

Les nouvelles pages doivent apparaître dans `/sitemap-locales.xml`

Vérifier le fichier :
```bash
cat src/app/sitemap-locales.ts
```

### 3. Ajouter photos réelles (optionnel mais recommandé)

Actuellement les images sont des placeholders :
- `images/depannage-[ville].jpg`
- `images/remorquage-[ville].jpg`

Ajouter de vraies photos dans `public/images/`

---

## 🌐 Déploiement

### Option 1 : Vercel (recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Option 2 : Netlify
```bash
# Build
npm run build

# Déployer le dossier .next
netlify deploy --prod --dir=.next
```

### Option 3 : Serveur custom
```bash
# Build
npm run build

# Copier sur serveur
scp -r .next package.json user@server:/var/www/reseauepaviste/

# Sur le serveur
npm install --production
npm run start
```

---

## 📊 Après déploiement

### 1. Google Search Console

**Soumettre le sitemap** :
1. Aller sur https://search.google.com/search-console
2. Ajouter propriété `reseauepaviste.fr`
3. Soumettre sitemap : `https://reseauepaviste.fr/sitemap.xml`

**Demander l'indexation** des pages prioritaires :
- /depannage-auto/paris/
- /depannage-auto/lyon/
- /depannage-auto/marseille/
- /remorquage/paris/
- /remorquage/lyon/
- /remorquage/marseille/
- + 10 autres villes importantes

### 2. Google Analytics

Vérifier que le tracking est actif :
- Variable d'environnement `NEXT_PUBLIC_GTM_ID` configurée
- Tag GTM présent dans `layout.tsx`

### 3. Monitoring

Surveiller pendant 7 jours :
- Erreurs 404
- Temps de chargement
- Core Web Vitals
- Indexation Google

---

## 📈 Suivi SEO (premières semaines)

### Semaine 1
- [ ] Pages déployées
- [ ] Sitemap soumis
- [ ] Indexation demandée (10-15 pages)
- [ ] Aucune erreur 404

### Semaine 2
- [ ] 50% des pages indexées
- [ ] Premières impressions Search Console
- [ ] Core Web Vitals OK

### Semaine 3-4
- [ ] 80% des pages indexées
- [ ] Premières positions (20-50)
- [ ] Premiers clics organiques

### Mois 2
- [ ] 100% des pages indexées
- [ ] Positions 10-30
- [ ] Trafic organique +500%

### Mois 3
- [ ] Positions 5-15
- [ ] Trafic organique +1000%
- [ ] Premières conversions

---

## 🎯 KPIs à suivre

### Indexation
- Nombre de pages indexées / 171
- Taux d'indexation : objectif 95%+

### Positions
- Position moyenne par mot-clé
- Nombre de mots-clés top 10
- Nombre de mots-clés top 3

### Trafic
- Visiteurs organiques/mois
- Pages vues/mois
- Taux de rebond

### Conversions
- Appels téléphoniques
- Formulaires soumis
- Taux de conversion

---

## 🚨 Problèmes courants

### Build échoue
```bash
# Vérifier Node version
node --version

# Nettoyer cache
rm -rf .next node_modules
npm install
npm run build
```

### Pages 404 après déploiement
- Vérifier que `.next` est bien déployé
- Vérifier `next.config.ts`
- Vérifier routes dans `src/app/`

### Sitemap vide
- Vérifier `src/app/sitemap-locales.ts`
- Rebuild : `npm run build`
- Vérifier `/sitemap-locales.xml` en prod

### Pas d'indexation Google
- Attendre 7-14 jours
- Soumettre manuellement dans Search Console
- Vérifier `robots.txt` (pas de blocage)

---

## 📞 Support

Si problème technique :
1. Vérifier logs : `npm run build`
2. Tester en local : `npm run dev`
3. Vérifier console navigateur (F12)

---

## 🏆 Résumé

**Vous avez maintenant** :
- ✅ 171 pages locales SEO-optimisées
- ✅ Architecture on-site niveau senior
- ✅ Maillage interne stratégique
- ✅ Schema.org exhaustif
- ✅ FAQ optimisée IA/vocal
- ✅ Contenu unique et différencié

**Prochaine étape** : Déployer et dominer Google ! 🚀

---

**Commande de déploiement** :
```bash
npm run build && vercel --prod
```

Bonne chance ! 🎯
