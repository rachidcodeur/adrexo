-- Colonnes supplémentaires pour les leads envoyés à HomeService.
-- À exécuter dans l'éditeur SQL Supabase (optionnel : la route /api/lead
-- retombe automatiquement sur l'ancien schéma tant que ce script n'est pas passé).

ALTER TABLE adrexo_contact_submissions
  ADD COLUMN IF NOT EXISTS adresse VARCHAR(255),
  ADD COLUMN IF NOT EXISTS code_postal VARCHAR(10),
  ADD COLUMN IF NOT EXISTS departement VARCHAR(3),
  ADD COLUMN IF NOT EXISTS page VARCHAR(255),
  ADD COLUMN IF NOT EXISTS homeservice_lead_id VARCHAR(64);

CREATE INDEX IF NOT EXISTS idx_adrexo_contact_submissions_homeservice_lead_id
  ON adrexo_contact_submissions(homeservice_lead_id);

-- L'insertion passe désormais par la route serveur (service_role), plus par le navigateur.
DROP POLICY IF EXISTS "Allow public insert on adrexo_contact_submissions" ON adrexo_contact_submissions;
