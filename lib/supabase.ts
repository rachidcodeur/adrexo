import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes:')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Défini' : '❌ Manquant')
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Défini' : '❌ Manquant')
  console.warn('⚠️ Le formulaire de contact ne fonctionnera pas sans ces variables.')
}

// Créer le client (même avec des valeurs vides pour éviter les erreurs de type)
export const supabase: SupabaseClient = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

