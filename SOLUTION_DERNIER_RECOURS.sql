-- SOLUTION DE DERNIER RECOURS : Désactiver RLS complètement
-- ⚠️ ATTENTION : Utilisez cette solution UNIQUEMENT si rien d'autre ne fonctionne
-- En production, réactivez RLS dès que possible avec les bonnes politiques

-- Désactiver RLS complètement
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- Supprimer toutes les politiques
DO $$ 
DECLARE pol RECORD;
BEGIN
    FOR pol IN (SELECT policyname FROM pg_policies WHERE tablename = 'adrexo_contact_submissions') 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.adrexo_contact_submissions', pol.policyname);
    END LOOP;
END $$;

-- Vérifier que RLS est désactivé
SELECT 
    tablename,
    rowsecurity as rls_enabled,
    CASE WHEN rowsecurity THEN '⚠️ RLS toujours activé' ELSE '✅ RLS désactivé' END as status
FROM pg_tables
WHERE tablename = 'adrexo_contact_submissions';

-- Test d'insertion (devrait fonctionner maintenant)
-- Décommentez pour tester
/*
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test Sans RLS', '0612345678', 'test-sans-rls@example.com', 'Test', 'Paris', 'Test sans RLS');

SELECT * FROM public.adrexo_contact_submissions WHERE email = 'test-sans-rls@example.com';
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-sans-rls@example.com';
*/

-- ============================================
-- SI LE TEST FONCTIONNE, VOUS POUVEZ GARDER RLS DÉSACTIVÉ TEMPORAIREMENT
-- OU RÉACTIVER AVEC CETTE CONFIGURATION :
-- ============================================

/*
-- Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Donner les permissions
GRANT INSERT ON public.adrexo_contact_submissions TO anon;
GRANT INSERT ON public.adrexo_contact_submissions TO public;

-- Créer une politique très simple
CREATE POLICY "simple_insert_policy"
ON public.adrexo_contact_submissions
FOR INSERT
TO anon, public
WITH CHECK (true);
*/

