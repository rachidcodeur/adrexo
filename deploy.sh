#!/bin/bash

# Script de déploiement pour Adrexo.net
# Usage: ./deploy.sh

set -e

echo "🚀 Déploiement d'Adrexo.net..."

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur: package.json introuvable. Exécutez ce script depuis la racine du projet.${NC}"
    exit 1
fi

# Vérifier que .env.local existe
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  Attention: .env.local n'existe pas. Assurez-vous de le créer avant le déploiement.${NC}"
fi

echo -e "${GREEN}📦 Installation des dépendances...${NC}"
npm install

echo -e "${GREEN}🔨 Build de l'application...${NC}"
npm run build

echo -e "${GREEN}✅ Build terminé avec succès!${NC}"
echo -e "${YELLOW}💡 Pour démarrer l'application en production:${NC}"
echo -e "   pm2 start ecosystem.config.js"
echo -e "   ou"
echo -e "   pm2 start npm --name 'adrexo' -- start"

