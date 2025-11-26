# Solution Définitive pour l'Erreur RLS 42501

Si l'erreur persiste après avoir exécuté les scripts, suivez cette procédure étape par étape :

## Étape 1 : Diagnostic Complet

1. **Exécutez le script `VERIFICATION_RLS.sql`** dans Supabase SQL Editor
2. **Notez les résultats**, surtout :
   - Si RLS est activé (rls_enabled = true)
   - Quelles politiques existent
   - Si le rôle `anon` existe

## Étape 2 : Nettoyage Complet

Exécutez ce script dans Supabase SQL Editor :

```sql
-- DÉSACTIVER RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- SUPPRIMER TOUTES LES POLITIQUES
DO $$ 
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN (
        SELECT policyname 
        FROM pg_policies 
        WHERE schemaname = 'public' 
        AND tablename = 'adrexo_contact_submissions'
    ) 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.adrexo_contact_submissions', pol.policyname);
    END LOOP;
END $$;

-- RÉACTIVER RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;
```

## Étape 3 : Créer la Politique (Méthode 1 - Via SQL Editor)

Exécutez ce script :

```sql
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
  ON public.adrexo_contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);
```

## Étape 4 : Créer la Politique (Méthode 2 - Via Dashboard)

Si la méthode SQL ne fonctionne pas, créez la politique via le dashboard :

1. Allez dans **Authentication** > **Policies**
2. Sélectionnez la table **`adrexo_contact_submissions`**
3. Cliquez sur **"New Policy"**
4. Choisissez **"Create a policy from scratch"**
5. Configurez :
   - **Policy name**: `Allow public insert on adrexo_contact_submissions`
   - **Allowed operation**: `INSERT`
   - **Target roles**: Sélectionnez `public` (ou laissez vide pour tous)
   - **USING expression**: (laissez vide)
   - **WITH CHECK expression**: `true`
6. Cliquez sur **"Review"** puis **"Save policy"**

## Étape 5 : Vérifier la Clé API

L'erreur 401 peut aussi venir d'une mauvaise clé API :

1. **Dans Supabase Dashboard** > **Settings** > **API**
2. Copiez la **"anon public"** key (pas la service_role key)
3. Vérifiez que votre `.env.local` contient bien :
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (la clé anon)
   ```
4. **Redémarrez votre serveur** après modification

## Étape 6 : Test Direct dans Supabase

Testez l'insertion directement dans Supabase SQL Editor :

```sql
-- Test en tant qu'utilisateur anon
SET ROLE anon;

INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test Direct', '0612345678', 'test-direct@example.com', 'Test', 'Paris', 'Test direct dans Supabase');

RESET ROLE;

-- Vérifier
SELECT * FROM public.adrexo_contact_submissions WHERE email = 'test-direct@example.com';

-- Nettoyer
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-direct@example.com';
```

**Si cette insertion échoue**, le problème vient de la politique RLS.
**Si elle réussit**, le problème vient de la configuration côté client (clé API, etc.).

## Étape 7 : Solution Alternative - Désactiver RLS (TEMPORAIRE)

⚠️ **UNIQUEMENT pour tester** - Ne pas utiliser en production :

```sql
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;
```

Si le formulaire fonctionne après avoir désactivé RLS, cela confirme que le problème vient de la politique. Réactivez RLS et recréez la politique.

## Étape 8 : Vérifier les Logs Supabase

1. Allez dans **Logs** > **Postgres Logs**
2. Cherchez les erreurs liées à `adrexo_contact_submissions`
3. Les logs vous donneront plus de détails sur l'erreur exacte

## Checklist Finale

- [ ] La table `adrexo_contact_submissions` existe
- [ ] RLS est activé sur la table
- [ ] Une politique INSERT existe pour le rôle `public`
- [ ] La politique a `WITH CHECK (true)`
- [ ] Vous utilisez `NEXT_PUBLIC_SUPABASE_ANON_KEY` (pas service_role)
- [ ] La clé API est correcte dans `.env.local`
- [ ] Le serveur a été redémarré après modification de `.env.local`
- [ ] L'insertion de test fonctionne dans Supabase SQL Editor

## Si Rien Ne Fonctionne

1. **Créez un nouveau projet Supabase** (pour tester)
2. **Exécutez `supabase_migration.sql`** dans le nouveau projet
3. **Testez le formulaire** avec les nouvelles clés API
4. Si ça fonctionne, le problème vient de la configuration de votre projet actuel

## Contact Support Supabase

Si le problème persiste après toutes ces étapes :
1. Vérifiez que votre projet Supabase n'a pas atteint ses limites
2. Contactez le support Supabase avec :
   - L'erreur complète de la console
   - Les résultats de `VERIFICATION_RLS.sql`
   - Les logs Postgres

