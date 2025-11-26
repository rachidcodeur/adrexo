-- Création de la table adrexo_contact_submissions
-- Cette table stocke toutes les soumissions du formulaire de contact

CREATE TABLE IF NOT EXISTS adrexo_contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  telephone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  sujet VARCHAR(255) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création d'un index sur l'email pour faciliter les recherches
CREATE INDEX IF NOT EXISTS idx_adrexo_contact_submissions_email ON adrexo_contact_submissions(email);

-- Création d'un index sur la date de création pour faciliter le tri
CREATE INDEX IF NOT EXISTS idx_adrexo_contact_submissions_created_at ON adrexo_contact_submissions(created_at DESC);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour mettre à jour updated_at automatiquement
-- Supprimer le trigger s'il existe déjà avant de le créer
DROP TRIGGER IF EXISTS update_adrexo_contact_submissions_updated_at ON adrexo_contact_submissions;

CREATE TRIGGER update_adrexo_contact_submissions_updated_at
  BEFORE UPDATE ON adrexo_contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Politique RLS (Row Level Security) pour permettre l'insertion publique
-- et la lecture uniquement pour les utilisateurs authentifiés
ALTER TABLE adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion à tous (pour le formulaire public)
-- Supprimer la politique si elle existe déjà
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON adrexo_contact_submissions;

CREATE POLICY "Allow public insert on adrexo_contact_submissions"
  ON adrexo_contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Politique pour permettre la lecture uniquement aux utilisateurs authentifiés
-- (Vous pouvez ajuster cette politique selon vos besoins)
-- Supprimer la politique si elle existe déjà
DROP POLICY IF EXISTS "Allow authenticated read on adrexo_contact_submissions" ON adrexo_contact_submissions;

CREATE POLICY "Allow authenticated read on adrexo_contact_submissions"
  ON adrexo_contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

