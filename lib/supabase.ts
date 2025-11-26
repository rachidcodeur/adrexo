import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Fonction pour créer le client Supabase dynamiquement
// Cela garantit que les variables d'environnement sont toujours à jour
function getSupabaseClient(): SupabaseClient {
  // Récupérer les variables d'environnement à chaque appel
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
      console.error('❌ Variables d\'environnement Supabase manquantes:')
      console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Défini' : '❌ Manquant')
      console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Défini' : '❌ Manquant')
      console.warn('⚠️ Le formulaire de contact ne fonctionnera pas sans ces variables.')
    }
    // Retourner un client qui échouera de manière explicite
    return createClient(
      'https://placeholder.supabase.co',
      'placeholder-key'
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Export du client (créé dynamiquement)
export const supabase = getSupabaseClient()

