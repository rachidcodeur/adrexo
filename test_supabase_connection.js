// Script de test pour vérifier la connexion Supabase
// Exécutez ce script avec : node test_supabase_connection.js
// Assurez-vous d'avoir installé @supabase/supabase-js : npm install @supabase/supabase-js

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Vérification de la configuration Supabase...\n')

if (!supabaseUrl) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL est manquant dans .env.local')
  process.exit(1)
}

if (!supabaseAnonKey) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY est manquant dans .env.local')
  process.exit(1)
}

console.log('✅ URL Supabase:', supabaseUrl)
console.log('✅ Clé API présente (longueur:', supabaseAnonKey.length, 'caractères)')
console.log('✅ Début de la clé:', supabaseAnonKey.substring(0, 20) + '...\n')

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('🧪 Test de connexion à Supabase...\n')

  try {
    // Test 1 : Vérifier que la table existe
    console.log('1️⃣ Vérification de l\'existence de la table...')
    const { data: tableData, error: tableError } = await supabase
      .from('adrexo_contact_submissions')
      .select('id')
      .limit(1)

    if (tableError) {
      if (tableError.code === 'PGRST116') {
        console.error('❌ La table n\'existe pas. Exécutez supabase_migration.sql')
        return
      } else {
        console.error('❌ Erreur lors de la vérification de la table:', tableError.message)
        return
      }
    }
    console.log('✅ La table existe\n')

    // Test 2 : Tester l'insertion
    console.log('2️⃣ Test d\'insertion...')
    const testData = {
      nom: 'Test Connection',
      telephone: '0612345678',
      email: 'test-connection-' + Date.now() + '@example.com',
      sujet: 'Test',
      ville: 'Paris',
      message: 'Test de connexion Supabase'
    }

    const { data: insertData, error: insertError } = await supabase
      .from('adrexo_contact_submissions')
      .insert([testData])
      .select()

    if (insertError) {
      console.error('❌ Erreur lors de l\'insertion:', insertError)
      console.error('   Code:', insertError.code)
      console.error('   Message:', insertError.message)
      console.error('   Détails:', insertError.details)
      console.error('   Hint:', insertError.hint)
      
      if (insertError.code === '42501') {
        console.error('\n⚠️  Erreur RLS détectée. Exécutez fix_rls_final.sql dans Supabase')
      } else if (insertError.code === 'PGRST301' || insertError.message?.includes('JWT')) {
        console.error('\n⚠️  Problème avec la clé API. Vérifiez que vous utilisez NEXT_PUBLIC_SUPABASE_ANON_KEY')
      }
      return
    }

    console.log('✅ Insertion réussie!')
    console.log('   ID créé:', insertData[0].id)

    // Test 3 : Supprimer l'enregistrement de test
    console.log('\n3️⃣ Nettoyage de l\'enregistrement de test...')
    const { error: deleteError } = await supabase
      .from('adrexo_contact_submissions')
      .delete()
      .eq('id', insertData[0].id)

    if (deleteError) {
      console.warn('⚠️  Impossible de supprimer l\'enregistrement de test:', deleteError.message)
      console.log('   Vous pouvez le supprimer manuellement dans Supabase')
    } else {
      console.log('✅ Enregistrement de test supprimé')
    }

    console.log('\n✅ Tous les tests sont passés! Le formulaire devrait fonctionner.')

  } catch (error) {
    console.error('❌ Erreur inattendue:', error)
  }
}

testConnection()

