# Guide de Déploiement Rapide

## Commandes Essentielles (à exécuter sur le VPS)

### 1. Installation initiale (une seule fois)

```bash
# Mise à jour
sudo apt update && sudo apt upgrade -y

# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# PM2
sudo npm install -g pm2

# Pare-feu
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Déploiement du projet

```bash
# Cloner ou transférer le projet
cd /var/www
sudo git clone VOTRE_REPO adrexo
# OU transférer via SCP depuis votre machine locale

# Permissions
sudo chown -R $USER:$USER /var/www/adrexo
cd adrexo

# Créer .env.local avec vos variables
nano .env.local

# Installer et builder
npm install
npm run build

# Démarrer avec PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Suivre les instructions affichées
```

### 3. Configuration Nginx

```bash
# Créer la config
sudo nano /etc/nginx/sites-available/adrexo
```

Coller cette configuration (remplacer VOTRE_DOMAINE par votre domaine ou IP) :

```nginx
server {
    listen 80;
    server_name VOTRE_DOMAINE.com www.VOTRE_DOMAINE.com;

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

    client_max_body_size 10M;
}
```

```bash
# Activer
sudo ln -s /etc/nginx/sites-available/adrexo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d VOTRE_DOMAINE.com -d www.VOTRE_DOMAINE.com
```

## Commandes de Maintenance

```bash
# Voir les logs
pm2 logs adrexo

# Redémarrer l'application
pm2 restart adrexo

# Mettre à jour le projet
cd /var/www/adrexo
git pull
npm install
npm run build
pm2 restart adrexo

# Redémarrer Nginx
sudo systemctl restart nginx
```

## Structure des Fichiers sur le Serveur

```
/var/www/adrexo/
├── .env.local          # Variables d'environnement (NE PAS COMMITER)
├── ecosystem.config.js # Configuration PM2
├── package.json
├── .next/              # Build de production
└── ...
```

## Checklist de Déploiement

- [ ] Serveur VPS configuré avec Ubuntu/Debian
- [ ] Node.js 18+ installé
- [ ] Git installé
- [ ] PM2 installé
- [ ] Projet cloné/transféré dans `/var/www/adrexo`
- [ ] `.env.local` créé avec toutes les variables
- [ ] `npm install` exécuté
- [ ] `npm run build` réussi
- [ ] PM2 démarre l'application
- [ ] Nginx configuré et actif
- [ ] SSL configuré (si domaine disponible)
- [ ] Pare-feu configuré
- [ ] Site accessible depuis l'extérieur

## Dépannage Rapide

| Problème | Solution |
|----------|----------|
| Site inaccessible | `pm2 list` puis `pm2 logs adrexo` |
| Erreur 502 | Vérifier que PM2 tourne : `pm2 list` |
| Erreur de build | Vérifier `.env.local` et `npm install` |
| Nginx ne démarre pas | `sudo nginx -t` pour vérifier la config |

