# Test de la Clé API - Le Diagnostic Fonctionne mais le Formulaire Non

✅ **Le diagnostic fonctionne** : L'insertion dans Supabase SQL Editor fonctionne, donc RLS est correct.

❌ **Le formulaire ne fonctionne pas** : Le problème vient de la clé API utilisée côté client.

## 🧪 Test Rapide avec le Fichier HTML

J'ai créé un fichier `test_cle_api.html` qui permet de tester la clé API directement dans le navigateur.

### Comment l'utiliser :

1. **Ouvrez** `test_cle_api.html` dans votre navigateur
2. **Collez** votre clé API (celle de `.env.local`)
3. **Cliquez** sur "Tester l'Insertion"
4. **Regardez** le résultat :
   - ✅ Si ça fonctionne : La clé est bonne, le problème vient d'ailleurs
   - ❌ Si ça échoue avec 401 : La clé est incorrecte
   - ❌ Si ça échoue avec 42501 : Problème RLS (peu probable vu que le diagnostic fonctionne)

## 🔍 Vérification Manuelle

### 1. Comparer les Clés

**Dans Supabase Dashboard** :
1. Allez dans **Settings** > **API**
2. Copiez la clé **"anon public"**
3. Notez les **20 premiers caractères** (ex: `eyJhbGciOiJIUzI1NiIs...`)

**Dans votre `.env.local`** :
1. Ouvrez le fichier
2. Trouvez `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Comparez les **20 premiers caractères** avec ceux de Supabase

**Ils doivent être identiques !**

### 2. Vérifier dans la Console

Quand vous testez le formulaire, regardez la console (F12) :

```
🔍 Debug Supabase: {
  keyStart: 'eyJhbGciOiJIUzI1NiIs...'
}
```

Comparez `keyStart` avec les 20 premiers caractères de la clé dans Supabase.

### 3. Si les Clés sont Différentes

1. **Remplacez** la clé dans `.env.local` par celle de Supabase
2. **Sauvegardez**
3. **Redémarrez le serveur** :
   ```bash
   # Arrêtez (Ctrl+C)
   npm run dev
   ```

### 4. Si Vous Êtes sur un VPS

1. **Connectez-vous** :
   ```bash
   ssh root@VOTRE_IP
   ```

2. **Éditez** :
   ```bash
   nano /var/www/adrexo/.env.local
   ```

3. **Remplacez** `NEXT_PUBLIC_SUPABASE_ANON_KEY` par la clé de Supabase

4. **Redémarrez** :
   ```bash
   pm2 restart adrexo
   ```

## ⚠️ Erreurs Courantes

### La clé semble correcte mais ça ne fonctionne pas

**Vérifiez** :
- Pas d'espaces avant/après la clé
- Pas de guillemets autour de la clé
- Pas de saut de ligne dans la clé
- La clé est bien sur une seule ligne

### La clé fonctionne en local mais pas en production

**Solution** : Les variables d'environnement ne sont pas les mêmes sur le serveur. Vérifiez `.env.local` sur le VPS.

### "Invalid JWT" ou erreur 401

**Solution** : 
1. La clé a peut-être expiré
2. Vous utilisez peut-être la clé service_role au lieu de anon
3. Regénérez la clé dans Supabase (Settings > API > Reset key sur "anon public")

## ✅ Après Correction

1. Testez avec `test_cle_api.html` pour confirmer
2. Redémarrez le serveur
3. Testez le formulaire
4. L'erreur 401 devrait disparaître

