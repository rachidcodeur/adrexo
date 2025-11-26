# Guide de Dépannage - Formulaire de Contact

Si le formulaire de contact ne fonctionne pas, suivez ces étapes de diagnostic :

## 1. Vérifier les Variables d'Environnement

Assurez-vous que votre fichier `.env.local` contient :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key
```

**Important** : 
- Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client
- Redémarrez le serveur de développement après avoir modifié `.env.local`

## 2. Vérifier la Table dans Supabase

1. Connectez-vous à votre dashboard Supabase
2. Allez dans **Table Editor**
3. Vérifiez que la table `adrexo_contact_submissions` existe
4. Vérifiez que la table contient les colonnes suivantes :
   - `id` (UUID, Primary Key)
   - `nom` (VARCHAR)
   - `telephone` (VARCHAR)
   - `email` (VARCHAR)
   - `sujet` (VARCHAR)
   - `ville` (VARCHAR)
   - `message` (TEXT)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

## 3. Vérifier les Politiques RLS (Row Level Security)

1. Dans Supabase, allez dans **Authentication** > **Policies**
2. Sélectionnez la table `adrexo_contact_submissions`
3. Vérifiez qu'il existe une politique **INSERT** pour les utilisateurs anonymes :

```sql
CREATE POLICY "Allow public insert" ON adrexo_contact_submissions
FOR INSERT WITH CHECK (true);
```

Si cette politique n'existe pas, exécutez le fichier `supabase_migration.sql` dans le SQL Editor de Supabase.

## 4. Vérifier la Console du Navigateur

1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet **Console**
3. Essayez de soumettre le formulaire
4. Regardez les erreurs affichées

Erreurs courantes :

- **"Missing Supabase environment variables"** : Les variables d'environnement ne sont pas définies
- **"relation 'adrexo_contact_submissions' does not exist"** : La table n'existe pas dans Supabase
- **"new row violates row-level security policy"** : Les politiques RLS bloquent l'insertion
- **"Network error"** : Problème de connexion à Supabase

## 5. Tester la Connexion Supabase

Créez un fichier de test temporaire `test-supabase.js` :

```javascript
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

// Test d'insertion
async function testInsert() {
  const { data, error } = await supabase
    .from('adrexo_contact_submissions')
    .insert([{
      nom: 'Test',
      telephone: '0612345678',
      email: 'test@example.com',
      sujet: 'Test',
      ville: 'Paris',
      message: 'Message de test'
    }])
    .select()

  if (error) {
    console.error('❌ Erreur:', error)
  } else {
    console.log('✅ Succès:', data)
  }
}

testInsert()
```

## 6. Vérifier le Réseau

1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet **Network**
3. Essayez de soumettre le formulaire
4. Cherchez une requête vers Supabase
5. Vérifiez le statut de la requête (200 = succès, 4xx/5xx = erreur)

## 7. Solutions Courantes

### Problème : "Table does not exist"
**Solution** : Exécutez le fichier `supabase_migration.sql` dans le SQL Editor de Supabase

### Problème : "Row Level Security policy violation"
**Solution** : Vérifiez que la politique INSERT existe et permet les insertions anonymes

### Problème : "Missing environment variables"
**Solution** : 
1. Vérifiez que `.env.local` existe à la racine du projet
2. Vérifiez que les variables commencent par `NEXT_PUBLIC_`
3. Redémarrez le serveur de développement (`npm run dev`)

### Problème : "Network error" ou "Failed to fetch"
**Solution** :
1. Vérifiez votre connexion internet
2. Vérifiez que l'URL Supabase est correcte
3. Vérifiez que votre projet Supabase est actif

## 8. Contact Support

Si le problème persiste :
1. Notez le message d'erreur exact affiché dans la console
2. Vérifiez les logs dans Supabase (Dashboard > Logs)
3. Vérifiez que votre projet Supabase n'a pas atteint ses limites

