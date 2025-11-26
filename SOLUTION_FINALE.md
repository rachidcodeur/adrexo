# Solution Finale - Erreurs 401 et 42501

Si les erreurs persistent après avoir exécuté tous les scripts, suivez cette procédure étape par étape.

## 🔍 Étape 1 : Diagnostic Complet

Exécutez le script `DIAGNOSTIC_COMPLET.sql` dans Supabase SQL Editor. Ce script va :
- Vérifier que la table existe
- Vérifier l'état de RLS
- Lister toutes les politiques
- Tester une insertion en tant qu'anon
- Donner un résumé complet

**Notez les résultats**, surtout :
- Si RLS est activé
- Quelles politiques existent
- Si le test d'insertion réussit ou échoue

## 🔧 Étape 2 : Solution Alternative (Test)

Si le diagnostic montre que RLS est le problème, exécutez `SOLUTION_ALTERNATIVE.sql` :

1. **Désactivez RLS temporairement**
2. **Testez le formulaire** - Si ça fonctionne, le problème vient bien de RLS
3. **Réactivez RLS** avec la configuration fournie dans le script

## ✅ Étape 3 : Vérifier la Clé API (Erreur 401)

L'erreur 401 peut aussi bloquer. Vérifiez :

### A. Dans Supabase Dashboard

1. Allez dans **Settings** > **API**
2. **Regénérez la clé "anon public"** si nécessaire :
   - Cliquez sur les 3 points à côté de "anon public"
   - Sélectionnez "Reset key"
   - **Copiez la nouvelle clé**

### B. Dans votre `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://ltylxkpzujydcrccsyol.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=LA_NOUVELLE_CLE_ICI
```

### C. Redémarrer

```bash
# Arrêtez le serveur (Ctrl+C)
npm run dev
```

## 🎯 Étape 4 : Solution Définitive RLS

Si RLS est le problème, exécutez ce script dans Supabase :

```sql
-- 1. Désactiver RLS
ALTER TABLE public.adrexo_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 2. Supprimer toutes les politiques
DO $$ 
DECLARE pol RECORD;
BEGIN
    FOR pol IN (SELECT policyname FROM pg_policies WHERE tablename = 'adrexo_contact_submissions') 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.adrexo_contact_submissions', pol.policyname);
    END LOOP;
END $$;

-- 3. Réactiver RLS
ALTER TABLE public.adrexo_contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Créer une politique TRÈS permissive pour TOUS les rôles
CREATE POLICY "Allow all insert on adrexo_contact_submissions"
ON public.adrexo_contact_submissions
FOR INSERT
TO anon, public, authenticated
WITH CHECK (true);

-- 5. Vérifier
SELECT policyname, cmd, roles FROM pg_policies WHERE tablename = 'adrexo_contact_submissions';
```

## 🧪 Étape 5 : Test Direct dans Supabase

Testez directement dans Supabase SQL Editor :

```sql
-- Test en tant qu'anon
SET ROLE anon;
INSERT INTO public.adrexo_contact_submissions (nom, telephone, email, sujet, ville, message)
VALUES ('Test Direct', '0612345678', 'test-direct@example.com', 'Test', 'Paris', 'Test');
RESET ROLE;

-- Si ça fonctionne, supprimez le test
DELETE FROM public.adrexo_contact_submissions WHERE email = 'test-direct@example.com';
```

**Si cette insertion fonctionne** : Le problème vient de la configuration côté client (clé API).
**Si cette insertion échoue** : Le problème vient de RLS.

## 🔄 Étape 6 : Si Rien Ne Fonctionne

### Option A : Créer un Nouveau Projet Supabase (Test)

1. Créez un nouveau projet Supabase
2. Exécutez `supabase_migration.sql`
3. Exécutez `fix_rls_DEFINITIF.sql`
4. Testez avec les nouvelles clés API

Si ça fonctionne, le problème vient de la configuration de votre projet actuel.

### Option B : Contacter le Support Supabase

Si rien ne fonctionne :
1. Copiez les résultats de `DIAGNOSTIC_COMPLET.sql`
2. Copiez l'erreur complète de la console
3. Contactez le support Supabase avec ces informations

## 📋 Checklist Finale

- [ ] Diagnostic exécuté et résultats notés
- [ ] Clé API vérifiée et mise à jour si nécessaire
- [ ] Serveur redémarré après modification de `.env.local`
- [ ] RLS désactivé temporairement pour tester
- [ ] Test d'insertion directe dans Supabase effectué
- [ ] Politique RLS créée pour tous les rôles (anon, public, authenticated)
- [ ] Formulaire testé après chaque modification

## ⚠️ Important

1. **Ne désactivez pas RLS en production** sans avoir une politique correcte
2. **Utilisez toujours la clé "anon public"** (pas service_role)
3. **Redémarrez toujours le serveur** après modification de `.env.local`
4. **Testez après chaque modification** pour isoler le problème

