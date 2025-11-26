-- Script SQL pour créer la table contacts dans Supabase
-- À exécuter dans l'éditeur SQL de votre projet Supabase

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  sujet TEXT NOT NULL,
  ville TEXT NOT NULL,
  message TEXT NOT NULL,
  accepte BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optionnel : Créer un index sur l'email pour les recherches
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Optionnel : Créer un index sur created_at pour le tri
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Activer Row Level Security (RLS) si nécessaire
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre l'insertion (ajustez selon vos besoins)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Créer une politique pour permettre la lecture (ajustez selon vos besoins de sécurité)
-- Pour la lecture, vous pouvez restreindre l'accès aux admins uniquement
-- CREATE POLICY "Allow admin read" ON contacts
--   FOR SELECT
--   TO authenticated
--   USING (auth.role() = 'admin');

