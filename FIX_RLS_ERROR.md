# Correction de l'erreur RLS (Row Level Security)

Si vous recevez l'erreur "Permission refusée. Vérifiez les politiques RLS dans Supabase", suivez ces étapes :

## Solution Rapide

1. **Connectez-vous à votre dashboard Supabase**
2. **Allez dans SQL Editor**
3. **Copiez-collez et exécutez le contenu du fichier `fix_rls_policy.sql`**

Ce script va :
- Activer RLS sur la table
- Supprimer les anciennes politiques
- Créer une nouvelle politique qui permet l'insertion publique

## Vérification Manuelle

Si vous préférez vérifier manuellement :

### 1. Vérifier que RLS est activé

Dans Supabase, allez dans **Table Editor** > **adrexo_contact_submissions** > **Settings** (ou **Policies**)

Assurez-vous que "Enable Row Level Security" est activé.

### 2. Vérifier les politiques existantes

Dans **Authentication** > **Policies**, sélectionnez la table `adrexo_contact_submissions`.

Vous devriez voir une politique nommée **"Allow public insert on adrexo_contact_submissions"** avec :
- **Operation**: INSERT
- **Target roles**: public
- **WITH CHECK**: true

### 3. Si la politique n'existe pas, créez-la

Dans **Authentication** > **Policies** > **adrexo_contact_submissions**, cliquez sur **"New Policy"** :

- **Policy name**: `Allow public insert on adrexo_contact_submissions`
- **Allowed operation**: `INSERT`
- **Target roles**: `public`
- **USING expression**: (laissez vide ou `true`)
- **WITH CHECK expression**: `true`

### 4. Alternative : Désactiver temporairement RLS (NON RECOMMANDÉ pour la production)

⚠️ **Attention** : Ne faites cela que pour tester. En production, gardez RLS activé avec les bonnes politiques.

```sql
ALTER TABLE adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;
```

## Test

Après avoir exécuté le script `fix_rls_policy.sql`, testez à nouveau le formulaire. Il devrait fonctionner.

## Vérification dans les logs Supabase

1. Allez dans **Logs** > **Postgres Logs** dans Supabase
2. Cherchez les erreurs liées à `adrexo_contact_submissions`
3. Vérifiez les messages d'erreur pour plus de détails

## Commandes SQL utiles pour le diagnostic

```sql
-- Voir toutes les politiques sur la table
SELECT * FROM pg_policies WHERE tablename = 'adrexo_contact_submissions';

-- Vérifier si RLS est activé
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'adrexo_contact_submissions';

-- Voir les détails de la table
SELECT * FROM information_schema.tables 
WHERE table_name = 'adrexo_contact_submissions';
```

## Problèmes courants

### Problème : "new row violates row-level security policy"
**Solution** : La politique WITH CHECK n'est pas correcte. Exécutez `fix_rls_policy.sql`

### Problème : "permission denied for table"
**Solution** : RLS est activé mais aucune politique n'autorise l'insertion. Créez la politique d'insertion publique.

### Problème : La politique existe mais ne fonctionne pas
**Solution** : 
1. Supprimez la politique existante
2. Recréez-la avec `fix_rls_policy.sql`
3. Vérifiez que vous utilisez bien la clé `NEXT_PUBLIC_SUPABASE_ANON_KEY` (pas la service role key)

## Support

Si le problème persiste après avoir exécuté `fix_rls_policy.sql`, vérifiez :
1. Que vous utilisez bien `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans votre `.env.local`
2. Que la table existe bien dans Supabase
3. Les logs Supabase pour plus de détails sur l'erreur

