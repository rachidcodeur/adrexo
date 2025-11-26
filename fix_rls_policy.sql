-- Script de correction pour les politiques RLS
-- Exécutez ce script dans le SQL Editor de Supabase si vous avez des problèmes de permissions
-- IMPORTANT : Exécutez ce script en une seule fois, ligne par ligne

-- ÉTAPE 1 : Désactiver temporairement RLS pour nettoyer
ALTER TABLE adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ÉTAPE 2 : Supprimer TOUTES les politiques existantes (même avec des noms différents)
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'adrexo_contact_submissions') 
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON adrexo_contact_submissions';
    END LOOP;
END $$;

-- ÉTAPE 3 : Réactiver RLS
ALTER TABLE adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- ÉTAPE 4 : Créer la politique d'insertion pour les utilisateurs anonymes (public)
-- Cette politique permet à n'importe qui (même non connecté) d'insérer des données
CREATE POLICY "Allow public insert on adrexo_contact_submissions"
  ON adrexo_contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- ÉTAPE 5 : Vérification - Cette requête devrait retourner la politique créée
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
WHERE tablename = 'adrexo_contact_submissions';

-- ÉTAPE 6 : Test de la politique (optionnel - décommentez pour tester)
-- INSERT INTO adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
-- VALUES ('Test', '0612345678', 'test@example.com', 'Test', 'Paris', 'Message de test');
-- Si cette insertion fonctionne, la politique est correcte. N'oubliez pas de supprimer l'enregistrement de test après.

