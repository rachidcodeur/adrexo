-- Script de VÉRIFICATION pour diagnostiquer le problème RLS
-- Exécutez ce script pour voir l'état actuel de votre configuration

-- 1. Vérifier que la table existe
SELECT 
    table_schema,
    table_name,
    table_type
FROM information_schema.tables
WHERE table_name = 'adrexo_contact_submissions';

-- 2. Vérifier si RLS est activé
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- 3. Voir TOUTES les politiques existantes
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd as operation,
    qual as using_expression,
    with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- 4. Vérifier les permissions sur la table
SELECT 
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name = 'adrexo_contact_submissions';

-- 5. Vérifier le rôle anon (utilisateur anonyme)
SELECT 
    rolname,
    rolsuper,
    rolcreaterole,
    rolcreatedb
FROM pg_roles
WHERE rolname = 'anon';

-- 6. Tester l'insertion en tant qu'utilisateur anon (simulation)
-- Cette requête simule ce que fait votre application
SET ROLE anon;
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test Diagnostic', '0612345678', 'test-diagnostic@example.com', 'Test', 'Paris', 'Test de diagnostic RLS')
RETURNING *;
RESET ROLE;

-- Si l'insertion ci-dessus échoue, vous verrez l'erreur exacte
-- Si elle réussit, supprimez l'enregistrement de test :
-- DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-diagnostic@example.com';

