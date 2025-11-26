-- Script FORCÉ pour corriger RLS - Exécutez ce script
-- Ce script va créer une politique vraiment permissive

-- ÉTAPE 1 : Désactiver RLS complètement
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer TOUTES les politiques (même celles cachées)
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
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.adrexo_contact_submissions CASCADE', pol.policyname);
    END LOOP;
END $$;

-- ÉTAPE 3 : Vérifier qu'il n'y a plus de politiques
SELECT 
    'Politiques restantes' as info,
    COUNT(*) as count
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions';

-- ÉTAPE 4 : Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 5 : Créer une politique TRÈS permissive pour anon
-- Utilisation de AS PERMISSIVE et TO anon explicitement
CREATE POLICY "anon_insert_policy"
ON public.adrexo_contact_submissions
AS PERMISSIVE
FOR INSERT
TO anon
WITH CHECK (true);

-- ÉTAPE 6 : Créer aussi pour public
CREATE POLICY "public_insert_policy"
ON public.adrexo_contact_submissions
AS PERMISSIVE
FOR INSERT
TO public
WITH CHECK (true);

-- ÉTAPE 7 : Vérifier les politiques créées
SELECT 
    policyname,
    permissive,
    cmd as operation,
    roles,
    qual as using_expr,
    with_check
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions'
ORDER BY policyname;

-- ÉTAPE 8 : Vérifier les permissions sur la table pour anon
SELECT 
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name = 'adrexo_contact_submissions'
  AND grantee IN ('anon', 'public', 'authenticated');

-- ÉTAPE 9 : Donner explicitement les permissions INSERT à anon
GRANT INSERT ON public.adrexo_contact_submissions TO anon;
GRANT INSERT ON public.adrexo_contact_submissions TO public;
GRANT INSERT ON public.adrexo_contact_submissions TO authenticated;

-- ÉTAPE 10 : Test final en tant qu'anon
DO $$
DECLARE
    test_result TEXT;
BEGIN
    BEGIN
        SET ROLE anon;
        INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
        VALUES ('Test Force Anon', '0612345678', 'test-force-anon-' || NOW()::text || '@example.com', 'Test', 'Paris', 'Test force anon');
        RESET ROLE;
        test_result := '✅ INSERTION RÉUSSIE en tant qu''anon';
    EXCEPTION WHEN OTHERS THEN
        RESET ROLE;
        test_result := '❌ ÉCHEC: ' || SQLERRM;
    END;
    RAISE NOTICE '%', test_result;
END $$;

