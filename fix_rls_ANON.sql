-- Script pour corriger RLS pour le rôle ANON (utilisé par l'API)
-- Le diagnostic SQL fonctionne mais l'API échoue = problème avec le rôle anon

-- ÉTAPE 1 : Désactiver RLS temporairement
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer TOUTES les politiques existantes
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

-- ÉTAPE 4 : Créer une politique spécifique pour le rôle ANON (utilisé par l'API)
-- C'est le rôle utilisé quand on fait des requêtes avec la clé API anon
CREATE POLICY "Allow anon insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- ÉTAPE 5 : Créer aussi une politique pour public (au cas où)
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- ÉTAPE 6 : Vérifier les politiques créées
SELECT 
    policyname,
    cmd as operation,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions'
ORDER BY policyname;

-- ÉTAPE 7 : Test en tant qu'anon (simulation de l'API)
-- Cette requête simule exactement ce que fait l'API avec la clé anon
DO $$
DECLARE
    test_result TEXT;
BEGIN
    BEGIN
        SET ROLE anon;
        INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
        VALUES ('Test Anon API', '0612345678', 'test-anon-api-' || NOW()::text || '@example.com', 'Test', 'Paris', 'Test du rôle anon');
        RESET ROLE;
        test_result := '✅ INSERTION RÉUSSIE en tant qu''anon (comme l''API)';
    EXCEPTION WHEN OTHERS THEN
        RESET ROLE;
        test_result := '❌ ÉCHEC: ' || SQLERRM;
    END;
    RAISE NOTICE '%', test_result;
END $$;

-- ÉTAPE 8 : Vérifier que RLS est activé
SELECT 
    tablename,
    rowsecurity as rls_enabled,
    CASE WHEN rowsecurity THEN '✅ RLS activé' ELSE '❌ RLS désactivé' END as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

