# Guide de Dépannage RLS - Erreur 42501

Si vous rencontrez l'erreur **"new row violates row-level security policy"** (code 42501), suivez ces étapes dans l'ordre :

## Solution 1 : Script Simplifié (À ESSAYER EN PREMIER)

1. Allez dans **Supabase Dashboard** > **SQL Editor**
2. Exécutez le contenu du fichier **`fix_rls_simple.sql`**
3. Vérifiez que la requête SELECT à la fin retourne bien une politique
4. Testez le formulaire

## Solution 2 : Script Complet

Si la solution 1 ne fonctionne pas :

1. Allez dans **Supabase Dashboard** > **SQL Editor**
2. Exécutez le contenu du fichier **`fix_rls_policy.sql`**
3. Vérifiez les résultats de la requête SELECT
4. Testez le formulaire

## Solution 3 : Vérification Manuelle dans Supabase

### Étape 1 : Vérifier que la table existe

Dans **Table Editor**, vérifiez que `adrexo_contact_submissions` existe.

### Étape 2 : Vérifier RLS

1. Allez dans **Table Editor** > **adrexo_contact_submissions**
2. Cliquez sur l'onglet **"Policies"** ou **"RLS"**
3. Vérifiez que **"Enable Row Level Security"** est activé

### Étape 3 : Vérifier/Créer la Politique

Dans **Authentication** > **Policies** > **adrexo_contact_submissions** :

**Si aucune politique n'existe :**
1. Cliquez sur **"New Policy"**
2. Choisissez **"Create a policy from scratch"**
3. Configurez :
   - **Policy name**: `Allow public insert on adrexo_contact_submissions`
   - **Allowed operation**: `INSERT`
   - **Target roles**: `public`
   - **USING expression**: (laissez vide)
   - **WITH CHECK expression**: `true`
4. Cliquez sur **"Review"** puis **"Save policy"**

**Si une politique existe déjà :**
1. Cliquez sur la politique
2. Vérifiez que :
   - **Operation** = `INSERT`
   - **Target roles** = `public`
   - **WITH CHECK** = `true`
3. Si ce n'est pas le cas, modifiez-la ou supprimez-la et recréez-la

## Solution 4 : Désactiver RLS Temporairement (TEST UNIQUEMENT)

⚠️ **ATTENTION** : Ne faites cela QUE pour tester. En production, gardez RLS activé.

```sql
ALTER TABLE adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;
```

Si le formulaire fonctionne après avoir désactivé RLS, cela confirme que le problème vient de la politique. Réactivez RLS et recréez la politique correctement.

## Solution 5 : Vérifier la Clé API

L'erreur 401 (Unauthorized) peut aussi indiquer un problème avec la clé API :

1. Vérifiez que vous utilisez bien **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** (pas la service role key)
2. Vérifiez que la clé est correcte dans votre `.env.local`
3. Redémarrez votre serveur après avoir modifié `.env.local`

## Diagnostic : Commandes SQL Utiles

### Voir toutes les politiques sur la table
```sql
SELECT * FROM pg_policies WHERE tablename = 'adrexo_contact_submissions';
```

### Vérifier si RLS est activé
```sql
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'adrexo_contact_submissions';
```

### Voir les détails de la table
```sql
SELECT * FROM information_schema.tables 
WHERE table_name = 'adrexo_contact_submissions';
```

### Tester l'insertion directement (dans Supabase SQL Editor)
```sql
INSERT INTO adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test', '0612345678', 'test@example.com', 'Test', 'Paris', 'Message de test');
```

Si cette insertion fonctionne dans Supabase mais pas depuis votre application, le problème vient de la clé API ou de la configuration côté client.

## Problèmes Courants

### Problème : "relation does not exist"
**Solution** : La table n'existe pas. Exécutez d'abord `supabase_migration.sql`

### Problème : "permission denied for table"
**Solution** : RLS est activé mais aucune politique n'autorise l'insertion. Créez la politique d'insertion.

### Problème : "new row violates row-level security policy"
**Solution** : La politique existe mais la condition `WITH CHECK` n'est pas correcte. Utilisez `WITH CHECK (true)`

### Problème : Erreur 401 (Unauthorized)
**Solution** : 
- Vérifiez que vous utilisez `NEXT_PUBLIC_SUPABASE_ANON_KEY` (pas service role)
- Vérifiez que la clé est correcte dans `.env.local`
- Redémarrez le serveur

## Après Correction

Une fois la politique créée correctement :

1. Testez le formulaire sur votre site
2. Vérifiez dans **Table Editor** > **adrexo_contact_submissions** qu'une nouvelle ligne apparaît
3. Si tout fonctionne, ne modifiez plus les politiques RLS

## Support

Si le problème persiste après avoir essayé toutes ces solutions :

1. Copiez l'erreur complète de la console (F12)
2. Vérifiez les logs Supabase (Dashboard > Logs > Postgres Logs)
3. Vérifiez que votre projet Supabase n'a pas atteint ses limites

