-- Script DÉFINITIF pour corriger RLS - EXÉCUTEZ CE SCRIPT
-- Ce script va complètement réinitialiser la configuration RLS

-- ÉTAPE 1 : Désactiver RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer TOUTES les politiques (même celles avec des noms différents)
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

-- ÉTAPE 3 : Vérifier qu'il n'y a plus de politiques
SELECT 'Politiques restantes:' as info, COUNT(*) as count
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions';

-- ÉTAPE 4 : Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 5 : Créer la politique d'insertion avec TOUS les rôles possibles
-- Politique pour le rôle 'anon' (utilisateur anonyme)
CREATE POLICY "Allow anon insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Politique pour le rôle 'public' (tous les utilisateurs)
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Politique pour les utilisateurs authentifiés (au cas où)
CREATE POLICY "Allow authenticated insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);

-- ÉTAPE 6 : Vérifier que les politiques sont créées
SELECT 
    policyname,
    cmd as operation,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions'
ORDER BY policyname;

-- ÉTAPE 7 : Vérifier que RLS est activé
SELECT 
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- ÉTAPE 8 : Test d'insertion en tant qu'utilisateur anon (simulation)
-- Décommentez pour tester
/*
SET ROLE anon;
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test RLS', '0612345678', 'test-rls@example.com', 'Test', 'Paris', 'Test de la politique RLS');
RESET ROLE;

-- Vérifier
SELECT * FROM public.adrexo_contact_submissions WHERE email = 'test-rls@example.com';

-- Nettoyer
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-rls@example.com';
*/

