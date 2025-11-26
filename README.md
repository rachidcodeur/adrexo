# Adrexo.net - Site One Page avec Animations GSAP

Site one-page professionnel pour Adrexo.net avec animations GSAP et intégration Supabase.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (animations)
- **Supabase** (formulaire de contact)
- **Lucide React** (icônes)

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer Supabase :
   - Créer un projet sur [Supabase](https://supabase.com)
   - Créer une table `contacts` avec les colonnes suivantes :
     - `id` (uuid, primary key)
     - `nom` (text)
     - `telephone` (text)
     - `email` (text)
     - `sujet` (text)
     - `ville` (text)
     - `message` (text)
     - `accepte` (boolean)
     - `created_at` (timestamp)
   - Créer un fichier `.env.local` :
```
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Design System

Le site respecte scrupuleusement le manifeste de design fourni :
- Couleurs : Violet primaire (#7C3DC0) et déclinaisons
- Typographie : Inter (Google Fonts)
- Espacements : Sections à 120px, grille max 1320px
- Animations : GSAP avec effets fade + translate

## 📝 Structure SQL Supabase

```sql
CREATE TABLE contacts (
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
```

## 🎯 Fonctionnalités

- ✅ Header fixe avec navigation smooth scroll
- ✅ Hero section avec animations GSAP
- ✅ Toutes les sections du design original
- ✅ Formulaire de contact connecté à Supabase
- ✅ Animations au scroll (Intersection Observer + GSAP)
- ✅ Design responsive
- ✅ Respect total du manifeste de design

