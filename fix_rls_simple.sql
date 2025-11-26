-- Script SIMPLIFIÉ pour corriger RLS - À EXÉCUTER EN PREMIER
-- Si le script fix_rls_policy.sql ne fonctionne pas, essayez celui-ci

-- 1. Désactiver RLS temporairement
ALTER TABLE adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer toutes les politiques
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON adrexo_contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read on adrexo_contact_submissions" ON adrexo_contact_submissions;

-- 3. Réactiver RLS
ALTER TABLE adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Créer la politique d'insertion (syntaxe alternative)
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
  ON adrexo_contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 5. Vérifier que la politique existe
SELECT policyname, cmd, roles, with_check 
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions';

