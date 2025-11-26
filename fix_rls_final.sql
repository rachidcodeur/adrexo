-- Script FINAL pour corriger RLS - À EXÉCUTER ABSOLUMENT
-- Ce script force la création de la politique avec toutes les variantes possibles

-- ÉTAPE 1 : Désactiver RLS temporairement
ALTER TABLE IF EXISTS public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer TOUTES les politiques existantes (peu importe leur nom)
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

-- ÉTAPE 3 : Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 4 : Créer la politique d'insertion avec syntaxe explicite
-- Variante 1 : Politique permissive pour INSERT
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
  ON public.adrexo_contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);

-- ÉTAPE 5 : Vérifier que la politique existe
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- ÉTAPE 6 : Vérifier que RLS est bien activé
SELECT 
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- ÉTAPE 7 : Test d'insertion (décommentez pour tester)
-- Cette insertion devrait fonctionner si la politique est correcte
/*
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test RLS', '0612345678', 'test@example.com', 'Test', 'Paris', 'Test de la politique RLS');

-- Vérifier que l'insertion a fonctionné
SELECT * FROM public.adrexo_contact_submissions WHERE email = 'test@example.com';

-- Supprimer l'enregistrement de test
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test@example.com';
*/

