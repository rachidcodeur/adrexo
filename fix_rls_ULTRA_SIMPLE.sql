-- Script ULTRA SIMPLE - Copiez-collez TOUT dans Supabase SQL Editor
-- Exécutez ligne par ligne si nécessaire

-- 1. Désactiver RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer les politiques
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON public.adrexo_contact_submissions;

-- 3. Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Créer la politique (syntaxe minimale)
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- 5. Vérifier
SELECT policyname FROM pg_policies WHERE tablename = 'adrexo_contact_submissions';

