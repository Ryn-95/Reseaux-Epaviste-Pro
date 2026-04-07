# Analyse des Logs & Questions PAA (Modules 1E & 3D)

## 1. Commandes d'analyse de logs serveur (bash)

Pour analyser la façon dont Googlebot crawle votre site, connectez-vous en SSH à votre serveur et utilisez ces commandes (à adapter selon le chemin de votre \`access.log\`) :

**A. Les 50 pages les plus crawlées par Googlebot (priorité de Google) :**
\`\`\`bash
grep "Googlebot" /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -50
\`\`\`

**B. Trouver les erreurs 404 rencontrées par Googlebot (fuite de PageRank) :**
\`\`\`bash
grep "Googlebot" /var/log/nginx/access.log | awk '($9 == 404)' | awk '{print $7}' | sort | uniq -c | sort -rn
\`\`\`

**C. Évaluer la vitesse de crawl moyenne de Googlebot :**
\`\`\`bash
grep "Googlebot" /var/log/nginx/access.log | awk '{print $NF}' | awk '{ total += $1; count++ } END { print total/count " ms" }'
\`\`\`
*(Nécessite que Nginx/Apache logue le temps de réponse dans la dernière colonne).*

---

## 2. Les 40 Questions PAA (People Also Ask) Prioritaires

Voici la liste des 40 questions générées par l'algorithme Google pour vos thématiques. Intégrez-les en balises \`<h3>\` dans vos pages avec des réponses courtes (40-60 mots) juste en dessous.

### Enlèvement Épave (Silo 1)
1. Comment se débarrasser d'une épave de voiture gratuitement ?
2. Qui paie l'enlèvement d'une épave ?
3. Est-ce que la casse vient chercher la voiture ?
4. Comment faire enlever une voiture qui ne roule plus ?
5. Quels documents pour mettre une voiture à la casse ?
6. Peut-on vendre une voiture pour pièces à un particulier ?
7. Comment faire enlever une voiture sur la voie publique ?
8. Quel prix rachète une casse auto ?

### Certificat de destruction & Carte grise (Silo 1)
9. Comment obtenir le certificat de destruction d'un véhicule ?
10. Où envoyer le certificat de destruction d'un véhicule ?
11. Comment faire si je n'ai plus la carte grise pour la casse ?
12. Comment mettre à la casse une voiture sans carte grise ?
13. Comment barrer la carte grise pour destruction ?
14. Faut-il faire le contrôle technique pour la casse ?
15. Comment annuler la carte grise d'une voiture détruite ?
16. Qui doit faire la déclaration de cession pour destruction ?

### Prime à la conversion (Silo 1)
17. Quel véhicule donne droit à la prime à la conversion ?
18. Quel est le montant de la prime à la casse en 2026 ?
19. Faut-il avancer l'argent de la prime à la conversion ?
20. Quand reçoit-on l'argent de la prime à la conversion ?
21. Quelle voiture mettre à la casse pour toucher la prime ?
22. Puis-je cumuler bonus écologique et prime à la conversion ?
23. Comment savoir si on a le droit à la prime à la casse ?
24. Combien de temps faut-il garder une voiture pour la prime à la casse ?

### Dépannage Auto (Silo 2)
25. Quel est le prix moyen d'un remorquage de voiture ?
26. Qui paie les frais de remorquage en cas de panne ?
27. L'assurance prend-elle en charge le dépannage 0 km ?
28. Comment se faire dépanner gratuitement sur l'autoroute ?
29. Quel est le tarif d'un dépannage sur autoroute ?
30. Comment redémarrer une voiture en panne de batterie ?
31. Que faire en cas d'erreur de carburant ?
32. Peut-on se faire remorquer chez soi ?

### Réglementation VHU (Silo 1)
33. C'est quoi un centre VHU agréé ?
34. Quelle amende pour une épave dans son jardin ?
35. Peut-on garder une épave chez soi ?
36. Quelle est la différence entre un ferrailleur et un épaviste ?
37. Comment savoir si un épaviste est agréé ?
38. Que devient une voiture à la casse ?
39. Qui délivre l'agrément VHU ?
40. Est-il obligatoire de passer par un centre VHU ?
