# Configuration Supabase

## Étapes pour configurer Supabase

### 1. Créer un projet Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Créez un compte ou connectez-vous
3. Créez un nouveau projet
4. Notez l'URL de votre projet et la clé API anonyme

### 2. Créer la table `contacts`

1. Dans votre projet Supabase, allez dans **SQL Editor**
2. Exécutez le script SQL contenu dans `supabase-setup.sql`
3. Ou créez manuellement la table avec les colonnes suivantes :
   - `id` (uuid, primary key, default: gen_random_uuid())
   - `nom` (text, not null)
   - `telephone` (text, not null)
   - `email` (text, not null)
   - `sujet` (text, not null)
   - `ville` (text, not null)
   - `message` (text, not null)
   - `accepte` (boolean, not null)
   - `created_at` (timestamp with time zone, default: now())

### 3. Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables suivantes :

```
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
```

3. Remplacez les valeurs par celles de votre projet Supabase
4. Vous pouvez trouver ces valeurs dans **Settings > API** de votre projet Supabase

### 4. Configurer Row Level Security (RLS)

Le script SQL configure déjà RLS avec une politique permettant l'insertion publique. Si vous souhaitez restreindre l'accès :

1. Allez dans **Authentication > Policies**
2. Ajustez les politiques selon vos besoins de sécurité
3. Par défaut, l'insertion est autorisée pour tous (nécessaire pour le formulaire public)

### 5. Tester le formulaire

1. Lancez le serveur de développement : `npm run dev`
2. Remplissez le formulaire de contact
3. Vérifiez dans Supabase que les données sont bien enregistrées dans la table `contacts`

## Sécurité

- La clé API anonyme est publique (c'est normal pour Next.js)
- RLS protège vos données au niveau de la base de données
- Assurez-vous que les politiques RLS sont correctement configurées
- Pour la production, considérez l'ajout de rate limiting

