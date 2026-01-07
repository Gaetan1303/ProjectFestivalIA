# Spécifications Détaillées Du Projet : Plateforme Festival Mars AI

**Projet :** Hackathon de 10 semaines (Co-création La Plateforme x Mobile Film Festival)
## 1. Présentation du projet et Objectifs

Le festival Mars AI est un concours international de courts-métrages de 1 minute dont la particularité est d'être intégralement générés par Intelligence Artificielle. Le thème de cette première édition est « Imaginez des futurs souhaitables ».

### Objectifs
- Mettre l'humain au cœur de la création assistée par IA
- Challenger la créativité via un format court
- Diffuser ces visions à l'échelle mondiale

### Enjeux
- Représenter plus de 120 pays
- Recueillir plus de 600 films
- Accueillir 3 000 visiteurs à Marseille lors de l'événement physique

### Durée
10 semaines (Conception, Design Figma, puis développement continu)

## 2. Environnement Technique

Le développement doit respecter les standards professionnels suivants :

### Stack imposée
- MariaDB, MySQL
- React.js, Node.js (MERN)
- Tailwind CSS

### Qualité du code
- Séparation logique (modèles, contrôleurs, vues)
- Code commenté
- Implémentation de tests unitaires sur les fonctions critiques

### Accessibilité
- Respect rigoureux des normes WCAG
- Design Responsive (Mobile First)

## 3. Système d'Authentification et Rôles

L'application doit gérer quatre types d'utilisateurs avec des permissions sécurisées :

### Méthodes d'accès
- Inscription/Connexion classique

### Rôles

#### Réalisateur
- Soumission de films
- Gestion d'un profil complet (bio, école, réseaux sociaux)
- Historique des œuvres

#### Public
- Consultation du catalogue
- Partage social
- Compteur de vues
- Inscription à la newsletter

#### Jury
- Interface privée pour noter (1 à 10) et commenter les 50 films de la sélection officielle

#### Administrateur
- Modération des contenus
- Gestion des partenaires
- Accès à un tableau de bord statistique (provenance des films, outils IA les plus utilisés)

## 4. Gestion des Médias et Workflow

### Processus de soumission
- Formulaire actif pendant 2 mois
- Verrouillage automatique par le serveur après la date limite

### Fiche technique IA
- Champs obligatoires détaillant les outils utilisés pour :
  - Le scénario
  - La génération d'images/vidéos
  - La post-production

### Contrôle Copyright (YouTube API)
- Intégration de l'API YouTube pour vérifier les droits d'auteur (musique/images)
- Vérification avant toute publication officielle

### Affichage
- Grille de miniatures avec pagination de 20 médias par page
- Filtres par catégorie ou type d'IA

### Posters
- Upload d'images (JPG/PNG/GIF, max 2 Mo)
- Redimensionnement automatique pour les miniatures

## 5. Fonctionnalités Avancées

### Internationalisation (i18n)
- Interface intégralement disponible en Français et en Anglais

## 6. Sécurité et Performance

### Sécurité
- Requêtes préparées obligatoires
- Hashage sécurisé des mots de passe
- Validation systématique des données côté serveur

### Performance
- Analyse du déploiement
- Optimisation du score Lighthouse

## 7. Modules Optionnels

### Authentification
- Mise en place d'une authentification via le protocole Google OAuth

### Notifications Temps Réel
- Utilisation des WebSockets (sans API externe)
- Informer les utilisateurs du statut de validation de leur film

### Social Proof
- Affichage des compteurs de vues
- Intégration des boutons de partage sur les réseaux sociaux

### Agenda interactif
- Planning des conférences, tables rondes et workshops prévus à Marseille

### Système de réservation
- Module simple pour s'inscrire aux ateliers
- Inscription à la cérémonie de clôture du 13 juin

