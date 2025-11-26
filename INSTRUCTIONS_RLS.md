# Instructions pour Corriger l'Erreur RLS

## ⚠️ IMPORTANT : Ne copiez PAS les messages d'erreur dans le SQL Editor

L'erreur que vous avez eue (`Error: Failed to run sql query...`) vient du fait qu'un message d'erreur a été copié dans le script SQL au lieu du code SQL.

## ✅ Solution : Utilisez le Script Ultra Simple

1. **Ouvrez Supabase Dashboard** > **SQL Editor**

2. **Copiez-collez EXACTEMENT ce code** (du fichier `fix_rls_ULTRA_SIMPLE.sql`) :

```sql
-- 1. Désactiver RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer les politiques
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON public.adrexo_contact_submissions;

-- 3. Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Créer la politique
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- 5. Vérifier
SELECT policyname FROM pg_policies WHERE tablename = 'adrexo_contact_submissions';
```

3. **Cliquez sur "Run"** (ou Ctrl+Enter)

4. **Vérifiez le résultat** : La dernière requête SELECT doit retourner une ligne avec le nom de la politique

## 🔍 Si ça ne fonctionne toujours pas

### Option A : Via le Dashboard Supabase

1. Allez dans **Authentication** > **Policies**
2. Sélectionnez la table **`adrexo_contact_submissions`**
3. **Supprimez toutes les politiques existantes** (s'il y en a)
4. Cliquez sur **"New Policy"**
5. Choisissez **"Create a policy from scratch"**
6. Configurez :
   - **Policy name**: `Allow public insert on adrexo_contact_submissions`
   - **Allowed operation**: `INSERT`
   - **Target roles**: `public` (ou laissez vide)
   - **USING expression**: (laissez vide)
   - **WITH CHECK expression**: `true`
7. Cliquez sur **"Save policy"**

### Option B : Désactiver RLS Temporairement (TEST)

⚠️ **UNIQUEMENT pour tester** - Ne pas utiliser en production :

```sql
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;
```

Si le formulaire fonctionne après avoir désactivé RLS, cela confirme que le problème vient de la politique. Réactivez RLS et créez la politique via le Dashboard (Option A).

## ✅ Vérification Finale

Après avoir créé la politique, testez dans Supabase SQL Editor :

```sql
-- Test d'insertion
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test', '0612345678', 'test@example.com', 'Test', 'Paris', 'Test');

-- Si ça fonctionne, supprimez l'enregistrement
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test@example.com';
```

Si cette insertion fonctionne, la politique est correcte et le formulaire devrait fonctionner.

