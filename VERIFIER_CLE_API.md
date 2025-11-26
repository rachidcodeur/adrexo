# Vérification de la Clé API - Erreur 401

L'erreur **401 (Unauthorized)** indique un problème avec la clé API utilisée.

## ⚠️ Problème Identifié

Vous avez une erreur **401** ET une erreur **42501**. Cela signifie que :
1. La clé API pourrait être incorrecte ou expirée
2. Vous utilisez peut-être la mauvaise clé (service_role au lieu de anon)

## ✅ Solution : Vérifier la Clé API

### 1. Dans Supabase Dashboard

1. Allez dans **Settings** > **API**
2. Trouvez la section **"Project API keys"**
3. **Copiez la clé "anon public"** (pas la service_role)

### 2. Vérifier votre `.env.local`

Votre fichier `.env.local` doit contenir :

```env
NEXT_PUBLIC_SUPABASE_URL=https://ltylxkpzujydcrccsyol.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important** :
- La clé doit commencer par `eyJ` (c'est un JWT)
- La clé doit faire environ 200+ caractères
- Utilisez la clé **"anon public"** (la première dans la liste)
- **NE PAS** utiliser la clé **"service_role"**

### 3. Comparer avec la Console

Dans la console, vous voyez :
```
keyStart: 'eyJhbGci0iJIUzI1NiIs...'
```

Vérifiez que cette clé correspond bien à la clé "anon public" dans Supabase.

### 4. Si la Clé est Différente

1. **Copiez la nouvelle clé "anon public"** depuis Supabase
2. **Remplacez** `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans `.env.local`
3. **Redémarrez le serveur** :
   ```bash
   # Arrêtez (Ctrl+C)
   npm run dev
   ```

### 5. Si Vous Êtes sur un VPS

1. **Connectez-vous au serveur**
2. **Éditez** `/var/www/adrexo/.env.local`
3. **Remplacez** la clé API
4. **Redémarrez** :
   ```bash
   pm2 restart adrexo
   ```

## 🔍 Test de la Clé API

Exécutez ce script pour tester :

```bash
node test_supabase_connection.js
```

Si vous obtenez une erreur 401, la clé est incorrecte.

## ⚠️ Erreurs Courantes

### "JWT expired" ou "Invalid API key"
**Solution** : La clé a expiré ou est incorrecte. Récupérez la nouvelle clé dans Supabase.

### "Invalid JWT"
**Solution** : Vous utilisez peut-être la clé service_role au lieu de anon. Utilisez la clé "anon public".

### La clé fonctionne en local mais pas en production
**Solution** : Les variables d'environnement ne sont pas les mêmes sur le serveur. Vérifiez `.env.local` sur le VPS.

## ✅ Après Correction

1. Redémarrez le serveur
2. Testez le formulaire
3. Vérifiez la console - l'erreur 401 devrait disparaître
4. Si l'erreur 42501 persiste, exécutez `fix_rls_DEFINITIF.sql`

