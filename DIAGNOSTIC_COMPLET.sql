-- Script de DIAGNOSTIC COMPLET - Exécutez ce script pour voir l'état exact
-- Copiez-collez dans Supabase SQL Editor

-- 1. Vérifier que la table existe
SELECT 
    'Table existe' as check_type,
    CASE WHEN EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'adrexo_contact_submissions'
    ) THEN '✅ OUI' ELSE '❌ NON' END as result;

-- 2. Vérifier si RLS est activé
SELECT 
    'RLS activé' as check_type,
    CASE WHEN rowsecurity THEN '✅ OUI' ELSE '❌ NON' END as result
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- 3. Voir TOUTES les politiques
SELECT 
    'Politiques RLS' as check_type,
    policyname,
    cmd as operation,
    roles,
    with_check,
    CASE 
        WHEN cmd = 'INSERT' AND (roles = '{anon}' OR roles = '{public}' OR 'anon' = ANY(roles) OR 'public' = ANY(roles)) 
        THEN '✅ CORRECTE'
        ELSE '⚠️ À VÉRIFIER'
    END as status
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- 4. Vérifier les permissions sur la table
SELECT 
    'Permissions table' as check_type,
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name = 'adrexo_contact_submissions';

-- 5. Vérifier les rôles Supabase
SELECT 
    'Rôles Supabase' as check_type,
    rolname,
    CASE 
        WHEN rolname IN ('anon', 'authenticated', 'service_role') THEN '✅ Rôle Supabase'
        ELSE 'Autre rôle'
    END as type
FROM pg_roles
WHERE rolname IN ('anon', 'authenticated', 'service_role', 'public');

-- 6. TEST : Essayer d'insérer en tant qu'anon (simulation)
-- Cette partie va échouer si RLS bloque, mais on verra l'erreur exacte
DO $$
DECLARE
    test_result TEXT;
BEGIN
    BEGIN
        SET ROLE anon;
        INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
        VALUES ('Test Diagnostic', '0612345678', 'test-diagnostic-' || NOW()::text || '@example.com', 'Test', 'Paris', 'Test diagnostic');
        RESET ROLE;
        test_result := '✅ INSERTION RÉUSSIE en tant qu''anon';
    EXCEPTION WHEN OTHERS THEN
        RESET ROLE;
        test_result := '❌ ÉCHEC: ' || SQLERRM;
    END;
    RAISE NOTICE '%', test_result;
END $$;

-- 7. Résumé final
SELECT 
    '=== RÉSUMÉ ===' as info,
    (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'adrexo_contact_submissions') as nb_politiques,
    (SELECT CASE WHEN rowsecurity THEN 'OUI' ELSE 'NON' END FROM pg_tables WHERE tablename = 'adrexo_contact_submissions') as rls_actif;

