# Correction de la Clé API - Le Diagnostic Confirme que RLS Fonctionne

✅ **Bonne nouvelle** : Le diagnostic montre que l'insertion fonctionne dans Supabase, donc RLS est correctement configuré.

❌ **Le problème** : La clé API utilisée côté client n'est pas la bonne ou n'est pas chargée correctement.

## 🔧 Solution : Vérifier et Corriger la Clé API

### Étape 1 : Récupérer la Bonne Clé dans Supabase

1. Allez dans **Supabase Dashboard** > **Settings** > **API**
2. Dans la section **"Project API keys"**
3. **Copiez la clé "anon public"** (la première, pas la service_role)
4. La clé doit commencer par `eyJ` et faire environ 200+ caractères

### Étape 2 : Vérifier votre `.env.local`

Ouvrez votre fichier `.env.local` à la racine du projet et vérifiez :

```env
NEXT_PUBLIC_SUPABASE_URL=https://ltylxkpzujydcrccsyol.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important** :
- ✅ Pas d'espaces autour du `=`
- ✅ Pas de guillemets autour des valeurs
- ✅ La clé doit être la clé **"anon public"** (pas service_role)
- ✅ La clé doit commencer par `eyJ`

### Étape 3 : Comparer avec la Console

Dans la console du navigateur, vous voyez :
```
keyStart: 'eyJhbGci0iJIUzI1NiIs...'
```

Comparez les **20 premiers caractères** de cette clé avec la clé dans Supabase. **Ils doivent être identiques**.

### Étape 4 : Si la Clé est Différente

1. **Remplacez** `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans `.env.local` par la nouvelle clé
2. **Sauvegardez** le fichier
3. **Redémarrez le serveur** :
   ```bash
   # Arrêtez (Ctrl+C)
   npm run dev
   ```

### Étape 5 : Si Vous Êtes sur un VPS

1. **Connectez-vous au serveur** :
   ```bash
   ssh root@VOTRE_IP
   ```

2. **Éditez le fichier** :
   ```bash
   nano /var/www/adrexo/.env.local
   ```

3. **Remplacez** la clé API

4. **Redémarrez l'application** :
   ```bash
   pm2 restart adrexo
   ```

## 🧪 Test Rapide

Après avoir modifié la clé, testez le formulaire. Si ça ne fonctionne toujours pas :

1. **Ouvrez la console** (F12)
2. **Regardez les logs de débogage** :
   ```
   🔍 Debug Supabase: {
     url: '...',
     hasKey: true,
     keyLength: 208,
     keyStart: 'eyJ...'
   }
   ```

3. **Comparez** `keyStart` avec les 20 premiers caractères de la clé dans Supabase

## ⚠️ Erreurs Courantes

### La clé fonctionne en local mais pas en production
**Solution** : Les variables d'environnement ne sont pas les mêmes sur le serveur. Vérifiez `.env.local` sur le VPS.

### "Invalid JWT" ou "JWT expired"
**Solution** : La clé a expiré ou est incorrecte. Récupérez la nouvelle clé dans Supabase.

### La clé semble correcte mais ça ne fonctionne pas
**Solution** : 
1. Vérifiez qu'il n'y a pas d'espaces ou de caractères invisibles
2. Vérifiez que vous n'utilisez pas la clé service_role
3. Redémarrez le serveur après modification

## ✅ Vérification Finale

Une fois la clé corrigée :
1. Redémarrez le serveur
2. Testez le formulaire
3. L'erreur 401 devrait disparaître
4. Le formulaire devrait fonctionner

