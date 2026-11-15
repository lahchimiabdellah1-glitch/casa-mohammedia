DEPLOIEMENT VERCEL - CASA-MOHAMMEDIA
1. Mets TOUT le dossier sur GitHub (index.html, manifest.json, sw.js, vercel.json, icon-192.png, icon-512.png, dossier api/verify.js)
2. Sur vercel.com > Add New > Project > Import ton repo GitHub
3. Settings > Environment Variables : ajoute DIRECTION_CODE et AGENT_CODE (tes vrais codes, ne les mets JAMAIS dans index.html)
4. Deploy. Ton URL sera https://ton-projet.vercel.app
5. Teste : Zone Professionnel avec AGENT_CODE, Zone Direction avec DIRECTION_CODE
NE FAIS PAS Ctrl+S sur la preview Meta AI : ca ne sauvegarde que la page, sans api/, manifest, sw.js, icones.
