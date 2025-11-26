# Guide de Déploiement sur VPS

Ce guide vous accompagne pour déployer votre application Next.js Adrexo.net sur un serveur VPS.

## Prérequis

- Un serveur VPS avec Ubuntu 20.04+ ou Debian 11+
- Un accès SSH root ou sudo
- Un nom de domaine pointant vers l'IP de votre VPS (optionnel mais recommandé)
- Les variables d'environnement Supabase configurées

## Étape 1 : Connexion au serveur

```bash
ssh root@VOTRE_IP_SERVEUR
# ou
ssh utilisateur@VOTRE_IP_SERVEUR
```

## Étape 2 : Mise à jour du système

```bash
sudo apt update && sudo apt upgrade -y
```

## Étape 3 : Installation de Node.js (version 18 ou 20)

```bash
# Installation de Node.js 20.x (recommandé pour Next.js 14)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Vérification
node --version
npm --version
```

## Étape 4 : Installation de Git

```bash
sudo apt install -y git
```

## Étape 5 : Installation de PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

## Étape 6 : Clonage du projet

```bash
# Créer un répertoire pour l'application
sudo mkdir -p /var/www
cd /var/www

# Cloner votre repository (remplacez par votre URL Git)
sudo git clone https://github.com/VOTRE_USERNAME/VOTRE_REPO.git adrexo
# ou si vous utilisez un autre service Git
# sudo git clone https://gitlab.com/VOTRE_USERNAME/VOTRE_REPO.git adrexo

# Donner les permissions
sudo chown -R $USER:$USER /var/www/adrexo
cd adrexo
```

**Alternative : Si vous n'utilisez pas Git, vous pouvez transférer les fichiers via SCP :**

```bash
# Depuis votre machine locale
scp -r /Users/rachdev/Desktop/Projets\ Cursor/Adrexo/* root@VOTRE_IP:/var/www/adrexo/
```

## Étape 7 : Configuration des variables d'environnement

```bash
# Créer le fichier .env.local
nano .env.local
```

Ajoutez vos variables d'environnement :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key

# Pour la production, vous pouvez aussi définir :
NODE_ENV=production
```

Sauvegardez avec `Ctrl+X`, puis `Y`, puis `Entrée`.

## Étape 8 : Installation des dépendances

```bash
npm install
```

## Étape 9 : Build de l'application

```bash
npm run build
```

## Étape 10 : Démarrage avec PM2

```bash
# Démarrer l'application
pm2 start npm --name "adrexo" -- start

# Sauvegarder la configuration PM2 pour le démarrage automatique
pm2 save
pm2 startup
# Exécutez la commande qui s'affiche (généralement avec sudo)
```

**Commandes PM2 utiles :**

```bash
pm2 list              # Voir les processus
pm2 logs adrexo       # Voir les logs
pm2 restart adrexo     # Redémarrer
pm2 stop adrexo       # Arrêter
pm2 delete adrexo     # Supprimer
```

## Étape 11 : Installation et configuration de Nginx

```bash
# Installation
sudo apt install -y nginx

# Démarrer Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

Créer la configuration Nginx :

```bash
sudo nano /etc/nginx/sites-available/adrexo
```

Ajoutez cette configuration :

```nginx
server {
    listen 80;
    server_name VOTRE_DOMAINE.com www.VOTRE_DOMAINE.com;
    # ou utilisez votre IP si vous n'avez pas de domaine
    # server_name VOTRE_IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Augmenter la taille maximale des uploads (pour les formulaires)
    client_max_body_size 10M;
}
```

Activer la configuration :

```bash
sudo ln -s /etc/nginx/sites-available/adrexo /etc/nginx/sites-enabled/
sudo nginx -t  # Tester la configuration
sudo systemctl reload nginx
```

## Étape 12 : Configuration SSL avec Let's Encrypt (Recommandé)

```bash
# Installation de Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtenir un certificat SSL (remplacez par votre domaine)
sudo certbot --nginx -d VOTRE_DOMAINE.com -d www.VOTRE_DOMAINE.com

# Le renouvellement automatique est configuré par défaut
```

## Étape 13 : Configuration du pare-feu

```bash
# Installation d'UFW
sudo apt install -y ufw

# Autoriser SSH, HTTP et HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Vérifier le statut
sudo ufw status
```

## Étape 14 : Vérification finale

1. Vérifiez que l'application fonctionne : `pm2 list`
2. Vérifiez les logs : `pm2 logs adrexo`
3. Testez votre site : `http://VOTRE_DOMAINE.com` ou `http://VOTRE_IP`

## Maintenance et mises à jour

### Mettre à jour l'application

```bash
cd /var/www/adrexo
git pull  # ou transférer les nouveaux fichiers
npm install
npm run build
pm2 restart adrexo
```

### Voir les logs en temps réel

```bash
pm2 logs adrexo --lines 100
```

### Redémarrer Nginx

```bash
sudo systemctl restart nginx
```

## Dépannage

### L'application ne démarre pas

```bash
# Vérifier les logs
pm2 logs adrexo

# Vérifier que le port 3000 est libre
sudo netstat -tulpn | grep 3000

# Vérifier les variables d'environnement
cat .env.local
```

### Nginx ne fonctionne pas

```bash
# Tester la configuration
sudo nginx -t

# Voir les logs
sudo tail -f /var/log/nginx/error.log
```

### Problèmes de permissions

```bash
# Donner les bonnes permissions
sudo chown -R $USER:$USER /var/www/adrexo
```

## Configuration avancée (Optionnel)

### Optimisation PM2

Créer un fichier `ecosystem.config.js` à la racine du projet :

```javascript
module.exports = {
  apps: [{
    name: 'adrexo',
    script: 'npm',
    args: 'start',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_memory_restart: '1G'
  }]
}
```

Puis démarrer avec : `pm2 start ecosystem.config.js`

### Monitoring avec PM2

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## Notes importantes

- Assurez-vous que votre `.env.local` contient toutes les variables nécessaires
- Ne commitez jamais votre `.env.local` dans Git
- Configurez des sauvegardes régulières de votre base de données Supabase
- Surveillez les logs régulièrement pour détecter les erreurs
- Gardez Node.js et les dépendances à jour pour la sécurité

## Support

En cas de problème, vérifiez :
1. Les logs PM2 : `pm2 logs adrexo`
2. Les logs Nginx : `sudo tail -f /var/log/nginx/error.log`
3. Le statut des services : `sudo systemctl status nginx`
4. La configuration Nginx : `sudo nginx -t`

