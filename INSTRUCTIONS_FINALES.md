# Instructions Finales - Erreur RLS Persistante

Le diagnostic SQL fonctionne mais l'API échoue toujours. Voici la procédure à suivre :

## 🔧 Solution 1 : Script FORCE (À ESSAYER EN PREMIER)

Exécutez `fix_rls_FORCE.sql` dans Supabase SQL Editor. Ce script :
- Donne explicitement les permissions GRANT à anon
- Crée des politiques avec AS PERMISSIVE
- Teste l'insertion en tant qu'anon

**Après exécution** :
1. Vérifiez que le test à la fin affiche "✅ INSERTION RÉUSSIE"
2. Testez dans `test_cle_api.html`
3. Si ça ne fonctionne toujours pas, passez à la Solution 2

## 🚨 Solution 2 : Désactiver RLS Temporairement (TEST)

Si la Solution 1 ne fonctionne pas, exécutez `SOLUTION_DERNIER_RECOURS.sql` :

1. **Désactivez RLS complètement**
2. **Testez le formulaire** - Si ça fonctionne, le problème vient bien de RLS
3. **Gardez RLS désactivé temporairement** pour que le site fonctionne
4. **Réactivez RLS plus tard** avec les bonnes politiques

⚠️ **Important** : RLS désactivé = moins sécurisé. Réactivez-le dès que possible.

## 🔍 Diagnostic : Vérifier les Politiques

Exécutez cette requête dans Supabase SQL Editor pour voir l'état exact :

```sql
-- Voir toutes les politiques
SELECT 
    policyname,
    permissive,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'adrexo_contact_submissions';

-- Voir les permissions
SELECT 
    grantee,
    privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'adrexo_contact_submissions'
  AND grantee IN ('anon', 'public');

-- Vérifier RLS
SELECT 
    tablename,
    rowsecurity
FROM pg_tables
WHERE tablename = 'adrexo_contact_submissions';
```

## ✅ Solution Recommandée : Désactiver RLS Temporairement

Pour que votre site fonctionne immédiatement :

1. **Exécutez** `SOLUTION_DERNIER_RECOURS.sql`
2. **Testez** le formulaire - Il devrait fonctionner
3. **Gardez RLS désactivé** pour l'instant
4. **Plus tard**, réactivez RLS avec une configuration correcte

## 📋 Checklist

- [ ] Exécuté `fix_rls_FORCE.sql`
- [ ] Testé dans `test_cle_api.html`
- [ ] Si échec, exécuté `SOLUTION_DERNIER_RECOURS.sql`
- [ ] Testé le formulaire sur le site
- [ ] Si ça fonctionne, noté de réactiver RLS plus tard

