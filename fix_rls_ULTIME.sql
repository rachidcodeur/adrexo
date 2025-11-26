-- Script ULTIME pour corriger RLS - EXÉCUTEZ CE SCRIPT EN UNE SEULE FOIS
-- Copiez-collez TOUT le contenu dans Supabase SQL Editor et exécutez

-- ÉTAPE 1 : Désactiver RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer toutes les politiques (une par une pour être sûr)
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON public.adrexo_contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read on adrexo_contact_submissions" ON public.adrexo_contact_submissions;

-- ÉTAPE 3 : Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 4 : Créer UNIQUEMENT la politique d'insertion (sans politique de lecture)
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- ÉTAPE 5 : Vérification
SELECT policyname, cmd, roles, with_check 
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions';

