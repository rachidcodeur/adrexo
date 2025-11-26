-- SOLUTION ALTERNATIVE : Désactiver RLS temporairement pour tester
-- ⚠️ ATTENTION : Utilisez cette solution UNIQUEMENT pour tester
-- En production, réactivez RLS avec les bonnes politiques

-- ÉTAPE 1 : Désactiver RLS complètement
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Vérifier que RLS est désactivé
SELECT 
    tablename,
    rowsecurity as rls_enabled,
    CASE WHEN rowsecurity THEN '⚠️ RLS toujours activé' ELSE '✅ RLS désactivé' END as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'adrexo_contact_submissions';

-- ÉTAPE 3 : Test d'insertion (devrait fonctionner maintenant)
-- Décommentez pour tester
/*
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test Sans RLS', '0612345678', 'test-sans-rls@example.com', 'Test', 'Paris', 'Test sans RLS');

-- Vérifier
SELECT * FROM public.adrexo_contact_submissions WHERE email = 'test-sans-rls@example.com';

-- Nettoyer
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-sans-rls@example.com';
*/

-- ============================================
-- SI LE TEST FONCTIONNE, RÉACTIVEZ RLS AVEC CETTE CONFIGURATION :
-- ============================================

-- Réactiver RLS
-- ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Créer une politique très permissive pour INSERT
-- CREATE POLICY "Allow all insert on adrexo_contact_submissions"
-- ON public.adrexo_contact_submissions
-- FOR INSERT
-- TO anon, public, authenticated
-- WITH CHECK (true);

