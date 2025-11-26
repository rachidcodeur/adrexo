# Vérification des Variables d'Environnement

Si la politique RLS est créée mais que le formulaire ne fonctionne toujours pas, le problème vient probablement des variables d'environnement.

## ✅ Vérifications à Faire

### 1. Vérifier le fichier `.env.local`

Assurez-vous que votre fichier `.env.local` à la racine du projet contient :

```env
NEXT_PUBLIC_SUPABASE_URL=https://ltylxkpzujydcrccsyol.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important** :
- Les variables DOIVENT commencer par `NEXT_PUBLIC_`
- Pas d'espaces autour du `=`
- Pas de guillemets autour des valeurs
- Utilisez la clé **"anon public"** (pas la service_role)

### 2. Où trouver les bonnes valeurs dans Supabase

1. Allez dans **Settings** > **API**
2. **Project URL** = `NEXT_PUBLIC_SUPABASE_URL`
3. **anon public** key = `NEXT_PUBLIC_SUPABASE_ANON_KEY` (pas la service_role key)

### 3. Redémarrer le serveur

Après avoir modifié `.env.local`, vous DEVEZ redémarrer le serveur :

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez
npm run dev
```

### 4. Vérifier dans la console du navigateur

Ouvrez la console (F12) et regardez les logs de débogage. Vous devriez voir :

```
🔍 Debug Supabase: {
  url: "https://ltylxkpzujydcrccsyol.supabase.co...",
  hasKey: true,
  keyLength: 200+ (environ),
  keyStart: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Si `hasKey: false` ou `keyLength: undefined`, les variables ne sont pas chargées.

### 5. Vérifier sur le site en production

Si vous êtes sur un VPS, assurez-vous que :

1. Le fichier `.env.local` existe sur le serveur
2. Les variables sont bien définies
3. Vous avez redémarré l'application après modification :
   ```bash
   pm2 restart adrexo
   ```

### 6. Test Direct

Exécutez le script de test :

```bash
node test_supabase_connection.js
```

Ce script va :
- Vérifier que les variables sont chargées
- Tester la connexion à Supabase
- Tester l'insertion directement

## 🔧 Solution si les variables ne sont pas chargées

### En développement local

1. Vérifiez que `.env.local` est à la racine du projet (même niveau que `package.json`)
2. Vérifiez qu'il n'y a pas de `.env` qui pourrait écraser `.env.local`
3. Redémarrez le serveur

### En production (VPS)

1. Vérifiez que `.env.local` existe dans `/var/www/adrexo/`
2. Vérifiez les permissions du fichier
3. Redémarrez PM2 : `pm2 restart adrexo`

## ⚠️ Erreurs Courantes

### Erreur : "Missing Supabase environment variables"
**Solution** : Les variables ne sont pas chargées. Vérifiez `.env.local` et redémarrez.

### Erreur : 401 Unauthorized
**Solution** : Vous utilisez peut-être la mauvaise clé. Utilisez `NEXT_PUBLIC_SUPABASE_ANON_KEY` (anon public), pas la service_role.

### Erreur : 42501 RLS policy violation
**Solution** : La politique RLS n'est pas correcte. Exécutez `fix_rls_ULTRA_SIMPLE.sql`.

### Le formulaire fonctionne en local mais pas en production
**Solution** : Les variables d'environnement ne sont pas définies sur le serveur. Vérifiez `.env.local` sur le VPS.

