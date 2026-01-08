# Cahier des Charges — Plateforme Festival IA (marsAI)

---

## 1. Synopsis

## A. Présentation du Projet et Objectifs

### Description de l’application

La plateforme **Mars AI** (festival IA) est une application web permettant d'organiser et de gérer un concours international de courts-métrages entièrement générés par Intelligence Artificielle. Elle couvre l'ensemble du cycle de vie du concours : inscription des utilisateurs, soumission des films, modération, notation par un jury, classement, diffusion publique et statistiques.

Pour plus de détails, consultez le document User Stories.

### Objectifs

- Permettre aux réalisateurs de présenter leurs créations IA.
- Offrir une expérience fluide pour découvrir et partager les films.
- Garantir un concours équitable, modéré et transparent, avec des statistiques exploitables.

### Besoin de la cible

* Réalisateurs IA : soumettre leurs films, valoriser leur démarche créative et suivre leurs performances.
* Public : découvrir, visionner, partager et suivre le classement des films (sans interaction directe).
* Jury : noter et commenter privément les films sélectionnés dans un cadre sécurisé et équitable.
* Administrateurs / Modérateurs : piloter le concours, assurer la conformité légale, la qualité et la sécurité.

### Contexte d’utilisation

* Plateforme créée pour la Mars IA Night.  
* Le concours porte sur des courts métrages de **1 minute** autour du thème **« Desirable Futures »**.
* Audience internationale : **120+ pays**
* Environ **600+ films soumis**
* Pic de trafic attendu lors :

  * Ouverture/fermeture des soumissions
  * Publication du Top 50
  * Événement physique : **~3 000 visiteurs à Marseille**

---

## B. Système d’Authentification et Rôles

L’application doit gérer quatre types d’utilisateurs, avec des permissions sécurisées.

### Méthodes d’accès
- Inscription / Connexion classique

### Rôles

#### Réalisateur
- **Un réalisateur peut soumettre plusieurs films**
- **En cas de projet collectif, un seul réalisateur référent responsable des droits doit être identifié**
- Gestion d'un profil complet :
  - Biographie
  - École
  - Réseaux sociaux
  - Date de naissance (vérification âge)
- Accès à un portfolio (si existant)
- **Acceptation des CGU obligatoire**

#### Public / Visiteur
- **Accès libre aux contenus sans création de compte obligatoire**
- Consultation du catalogue
- Partage sur les réseaux sociaux
- Compteur de vues
- Inscription à la newsletter (optionnel)
- Inscription pour obtenir une place au festival
- **Aucune interaction de type like, dislike ou commentaire public**
- **Ne vote pas, ne commente pas**

#### Jury
- Interface privée dédiée
- Notation des 50 films de la sélection officielle :
  - Notes de 1 à 10
  - **Commentaires privés (prise de notes personnelles, non visibles par les réalisateurs ni le public)**
- Expérience optimisée :
  - Classement par films déjà votés / non votés
  - Navigation fluide entre les vidéos

#### Administrateur
- Modération des contenus
- Gestion des partenaires
- Accès à un tableau de bord statistique :
  - Provenance géographique des films
  - Outils IA les plus utilisés

---

## C. Gestion des Médias et Workflow

### Processus de Soumission
- Formulaire actif pendant 2 mois
- Verrouillage automatique par le serveur après la date limite

### Fiche Technique IA
- Champs obligatoires détaillant :
  - Outils IA utilisés pour le scénario
  - Génération d’images / vidéos
  - Post-production

### Contrôle des Droits d’Auteur
- Intégration de l’API YouTube
- **YouTube agit comme outil de contrôle préalable**
- Vérification des droits (musique / images) avant publication officielle
- **En cas de blocage détecté :**
  - Dépublication automatique
  - Notification du réalisateur
  - Décision admin (possibilité de re-soumission ou rejet définitif)
### Contraintes Techniques Vidéo
- **Format : 16:9 horizontal obligatoire**
- **Vidéos classiques YouTube (pas de Shorts)**
- Durée : 1 minute maximum
- **Les contraintes techniques (poids, résolution) s'inspirent du Mobile Film Festival et pourront être ajustées ultérieurement**
### Affichage des Films
- Grille de miniatures
- Pagination : 20 médias par page
- Filtres par catégorie ou type d’IA

### Posters
- Upload d’images :
  - Formats : JPG / PNG / GIF
  - Taille maximale : 2 Mo
- Redimensionnement automatique pour les miniatures

---

## D. Fonctionnalités Avancées

### Internationalisation (i18n)
- Interface disponible intégralement en :
  - Français
  - Anglais

---

## E. Sécurité et Performance

### Sécurité
- Requêtes préparées obligatoires
- Hashage sécurisé des mots de passe
- Validation systématique des données côté serveur

### Performance
- Analyse du déploiement
- Optimisation du score Lighthouse

---

## F. Modules Optionnels

### Authentification
- Connexion via Google OAuth

### Notifications Temps Réel
- Utilisation des WebSockets
- Sans API externe
- Notifications sur le statut de validation des films

### Social Proof
- Affichage des compteurs de vues
- Boutons de partage sur les réseaux sociaux

### Agenda Interactif
- Planning des conférences
- Tables rondes
- Workshops prévus à Marseille

### Système de Réservation
- Module simple pour :
  - S’inscrire aux ateliers
  - S’inscrire à la cérémonie de clôture du 13 juin

---

## 2. Cahier des Charges Client Front-End

### 2.1 Cahier des Charges Fonctionnel

#### Besoins principaux

* Accès multi-profils (public, réalisateur, jury, admin, modérateur, partenaire)
* Interface accessible, multilingue et responsive
* Parcours utilisateur clair et sécurisé

#### User Stories & Epics

Les fonctionnalités sont structurées autour des epics suivantes :

1. Comptes & Profils
2. Onboarding Réalisateur & Soumission
3. Vote, Notation & Classement
4. Rôles, Permissions & Modération
5. Fiche IA, Conformité & Statistiques
6. Notifications & Communication
7. Partage & Sponsoring
8. Accessibilité & Inclusion
9. Programme & Réservations

Les user stories détaillées, critères d’acceptation et priorités sont décrites dans l’annexe User Stories.

#### Contraintes de validation

* Champs obligatoires clairement indiqués
* Messages d’erreurs explicites (sans fuite d’information sensible)
* Validation côté client et serveur
* États visuels clairs (loading, succès, erreur, désactivé)

---

### 2.2 Cahier des Charges Non-Fonctionnel (Front-End)

#### Stack Front-End

* React.js
* Tailwind CSS

#### Routes Front-End

##### Convention de Nommage
- URLs en **kebab-case** (`/submit-film`, `/my-profile`)
- Paramètres dynamiques avec `:` (`/films/:id`)
- Routes protégées par rôle
- Gestion des erreurs (404, 403)

##### Routes Publiques (Sans Authentification)

**Pages d'Accueil & Information**
* `/` : Page d'accueil avec présentation du concours
* `/about` : Page d'information sur le concours et l'équipe organisatrice
* `/contact` : Formulaire de contact et support utilisateur
* `/faq` : Foire aux questions pour les utilisateurs
* `/terms` : Conditions générales d'utilisation
* `/privacy` : Politique de confidentialité et gestion des cookies

**Authentification**
* `/login` : Page de connexion utilisateur
* `/register` : Page d'inscription utilisateur
* `/forgot-password` : Mot de passe oublié
* `/reset-password/:token` : Réinitialiser mot de passe
* `/verify-email/:token` : Vérifier email

**Consultation Films**
* `/films` : Liste des vidéos soumises avec filtres et pagination
* `/films/:id` : Détails d'une vidéo spécifique
* `/films/category/:category` : Films par catégorie
* `/films/search?q=:query` : Recherche de films
* `/ranking` : Classement public des vidéos
* `/ranking/top50` : Top 50 officiel

**Programme & Événements**
* `/program` : Programme général
* `/workshops` : Inscription aux ateliers et événements liés au concours
* `/workshops/:id` : Détail atelier
* `/conferences` : Calendrier des conférences et webinaires
* `/conferences/:id` : Détail conférence
* `/calendar` : Vue calendrier des événements du concours
* `/sponsors` : Partenaires & sponsors

##### Routes Utilisateur Connecté

**Profil & Compte**
* `/profile` : Gestion du profil utilisateur (modification, suppression)
* `/profile/edit` : Édition avancée du profil utilisateur
* `/settings` : Paramètres utilisateur (langue, préférences, etc.)
* `/settings/preferences` : Préférences utilisateur
* `/notifications` : Mes notifications
* `/my-activity` : Mon activité

**Réalisateur**
* `/submit-film` : Formulaire de soumission de vidéos
* `/my-films` : Mes films soumis
* `/my-films/:id/edit` : Éditer mon film
* `/my-films/:id/analytics` : Statistiques de mon film

**Participation**
* `/my-bookmarks` : Mes favoris
* `/workshops/my-registrations` : Mes inscriptions ateliers

##### Routes Jury (Accès Restreint)
* `/jury` : Interface dédiée aux membres du jury pour noter et commenter privément
* `/jury/videos` : Films à évaluer
* `/jury/videos/:id/rate` : Noter un film avec commentaires privés
* `/jury/my-ratings` : Mes évaluations
* `/vote` : Page de vote pour les membres du jury
* `/allvotes` : Page listant tous les votes effectués par le jury
* `/notations` : Historique des notations effectuées par le jury

##### Routes Modérateur
* `/moderator` : Dashboard modérateur
* `/moderator/videos` : Films à modérer
* `/moderator/videos/pending` : Films en attente
* `/moderator/videos/:id` : Modération film

##### Routes Administrateur
* `/admin` : Tableau de bord pour les administrateurs (gestion des utilisateurs, vidéos, etc.)
* `/admin/overview` : Vue d'ensemble
* `/admin/users` : Gestion utilisateurs
* `/admin/videos` : Gestion vidéos
* `/admin/workshops` : Gestion ateliers
* `/admin/conferences` : Gestion conférences
* `/admin/sponsors` : Gestion des sponsors pour les administrateurs
* `/admin/settings` : Configuration système
* `/admin/logs` : Logs système
* `/admin/analytics` : Statistiques globales

##### Routes Partenaires
* `/partenaires` : Espace dédié aux partenaires commerciaux

##### Routes Diverses
* `/categories` : Filtrage des vidéos par catégories thématiques
* `/social-share` : Fonctionnalités de partage sur les réseaux sociaux
* `/onboarding` : Guide d'onboarding pour les nouveaux utilisateurs
* `/RSS` : Flux RSS des dernières vidéos et actualités

##### Protection des Routes
- **Routes Publiques** : Accessibles sans authentification
- **Routes Utilisateur** : Authentification requise, redirection vers `/login` si non connecté
- **Routes à Rôles Spécifiques** : 
  - `/jury/*` : Rôle JURY requis
  - `/moderator/*` : Rôle MODERATOR ou ADMIN requis
  - `/admin/*` : Rôle ADMIN requis

#### Contraintes de sécurité Front

* Protection des routes par rôle
* Masquage des informations sensibles
* Gestion sécurisée des tokens (HttpOnly cookies recommandés)

#### Déploiement Front

* CI/CD avec build automatisé
* Environnement DEV / STAGING / PROD
* Dockerisation du front

---

## 3. Cahier des Charges Client Back-End

### 3.1 Cahier des Charges Fonctionnel

#### Besoin

Le backend expose une API sécurisée consommée par :

* Le client web React
* Potentiellement des services tiers (analytics, diffusion)

Pour plus de détails sur les spécifications fonctionnelles, consultez le document MCD.

#### Charge estimée

* Utilisateurs simultanés : **20 000 utilisateurs connectés** 
* Pics : publication classement, clôture soumissions
* Requêtes : plusieurs dizaines de RPS en burst

---

### 3.2 Cahier des Charges Non-Fonctionnel (Back-End)

#### Stack

* Node.js
* Express / NestJS
* MariaDB / MySQL
* Docker

#### Modèle de données (MCD)

* Utilisateur
* Vidéo
* Vote
* Notification
* Langue

Pour une vue complète du modèle de données, consultez le document MCD.

#### Endpoints Back-End

##### Convention de Nommage
- Ressources au **pluriel** (`/videos`, `/users`)
- Segments composés en **kebab-case**
- Versioning : `/api/v1/`
- Pagination standard (path params) : `/:limit/:offset`
- Codes HTTP normalisés (200, 201, 400, 401, 403, 404, 500)

##### Endpoints Principaux

**Authentification**
* `POST /api/v1/auth/register` : Inscription d'un nouvel utilisateur
* `POST /api/v1/auth/login` : Connexion utilisateur avec génération de token
* `GET /api/v1/auth/logout` : Déconnexion sécurisée (invalidation du token)
**Gestion Utilisateurs**
* `GET /api/v1/users/:limit/:offset` : Liste utilisateurs (admin) - **PAGINATION**
* `GET /api/v1/users/:id` : Récupération des informations d'un utilisateur spécifique
* `PUT /api/v1/users/:id` : Mise à jour des informations utilisateur
* `DELETE /api/v1/users/:id` : Suppression ou anonymisation d'un utilisateur (conformité RGPD)
* `GET /api/v1/users/me` : Mon profil
* `PUT /api/v1/users/me` : Modifier mon profil
**Gestion Vidéos**
* `POST /api/v1/videos` : Soumission d'une nouvelle vidéo
* `GET /api/v1/videos/:limit/:offset` : Liste des vidéos - **PAGINATION**
* `GET /api/v1/videos/:id` : Détails d'une vidéo spécifique
* `PUT /api/v1/videos/:id` : Mise à jour des métadonnées d'une vidéo (par un modérateur ou admin)
* `DELETE /api/v1/videos/:id` : Suppression d'une vidéo
* `PATCH /api/v1/videos/:id/status` : Changer statut (admin/modérateur)
* `POST /api/v1/videos/:id/views` : Incrémenter vues
* `GET /api/v1/videos/:id/analytics` : Statistiques vidéo
**Votes & Notations (Jury)**
* `POST /api/v1/votes` : Enregistrement d'un vote pour une vidéo (jury uniquement)
* `GET /api/v1/jury/videos/:limit/:offset` : Liste des vidéos à noter pour les membres du jury - **PAGINATION**
* `POST /api/v1/jury/videos/:id/rate` : Noter une vidéo avec commentaires privés
* `GET /api/v1/jury/my-ratings/:limit/:offset` : Mes notations - **PAGINATION**

**Analytics & Statistiques**
* `GET /api/v1/analytics/videos` : Statistiques globales sur les vidéos (vues, partages, etc.)
* `GET /api/v1/analytics/users` : Statistiques sur les utilisateurs (inscriptions, activité)
* `GET /api/v1/analytics/dashboard` : Dashboard analytics
* `GET /api/v1/ranking/:limit/:offset` : Classement général - **PAGINATION**
* `GET /api/v1/ranking/top50` : Top 50 officiel
* `GET /notifications` : Récupération des notifications pour l'utilisateur connecté.
* `POST /notifications` : Création d'une nouvelle notification (système).
* `GET /languages` : Liste des langues disponibles.
* `GET /admin/users` : Gestion des utilisateurs (liste, rôles, etc.).
* `GET /admin/videos` : Gestion des vidéos (modération, statut, etc.).
* `GET /admin/reports` : Rapports d'activité et logs système.
* `POST /admin/sponsor` : Gestion des partenaires commerciaux et sponsoring.
* `DELETE /admin/sponsor/:id` : Suppression d’un partenaire commercial.
* `GET /admin/settings` : Configuration des paramètres globaux de l’application.
* `PUT /admin/settings` : Mise à jour des paramètres globaux de l’application.
* `GET /jury/videos` : Liste des vidéos à noter pour les membres du jury.
* `POST /jury/notes` : Soumission des notes et commentaires par le jury.
* `GET /sponsors` : Liste des sponsors pour affichage public.
* `GET /ranking` : Récupération du classement des vidéos basé sur les votes
* `GET /comments/:videoId` : Récupération des commentaires pour une vidéo spécifique.
* `POST /comments` : Ajout d'un commentaire à une vidéo.
* `GET /settings/:userId` : Récupération des paramètres utilisateur.
* `PUT /settings/:userId` : Mise à jour des paramètres utilisateur.
* `GET /social-share/:videoId` : Génération des liens de partage pour une vidéo spécifique.
* `POST /social-share/log` : Enregistrement des partages effectués par les utilisateurs.
* `GET /notations/:userId` : Récupération de l'historique des notations effectuées par un utilisateur (jury uniquement).
* `GET /categories` : Récupération des catégories thématiques disponibles (créées dynamiquement par l'admin).
* `GET /workshops` : Liste des ateliers et événements liés au concours.
* `POST /workshops/register` : Inscription à un atelier ou événement.
* `GET /conferences` : Calendrier des conférences et webinaires.
* `GET /calendar/events` : Récupération des événements du concours au format calendrier.
* `GET /faq` : Récupération de la FAQ pour les utilisateurs.
* `GET /terms` : Récupération des conditions générales d'utilisation.
* `GET /privacy` : Récupération de la politique de confidentialité.
* `GET /onboarding/:userId` : Récupération du guide d'onboarding pour un utilisateur.
* `PUT /profile/edit/:userId` : Édition avancée du profil utilisateur.
* `GET /RSS` : Récupération du flux RSS des dernières vidéos et actualités.
* `GET /admin/logs` : Accès aux logs système pour les administrateurs.
* `GET /admin/metrics` : Accès aux métriques de performance de l’application.
* `POST /admin/backup` : Création d’une sauvegarde de la base de données.
* `GET /admin/restore` : Restauration de la base de données à partir d’une sauvegarde.
* `POST /admin/notifications/bulk` : Envoi de notifications en masse aux utilisateurs.
* `GET /admin/workshop` : Gestion des workshops et CRUD associé.
* `GET /admin/conference` : Gestion des conférences et CRUD associé.
* `GET /admin/analytics` : Tableau de bord analytique pour les administrateurs.

##### Contraintes API

* DTO stricts
* Codes HTTP normalisés (200, 201, 400, 401, 403, 404, 500)
* Validation systématique des entrées

#### Sécurité

* Hash des mots de passe (bcrypt/argon2)
* RBAC (Role Based Access Control)
* Protection contre :

  * Injection SQL
  * Bruteforce
  * XSS / CSRF

#### RGPD

* Interdiction de stocker des PII inutiles
* Droit à l’oubli (suppression ou anonymisation)
* Suppression des logs sensibles (IP, tokens)

#### Logging

* Niveaux : DEBUG, INFO, WARNING, ERROR
* Logs applicatifs séparés des logs système

#### Catégories & Barèmes

* **Catégories créées dynamiquement par l'administrateur**
* Barèmes identiques entre présélection et sélection finale
* **Critères d'évaluation définis ultérieurement avec le client**

#### Performance

* Pagination obligatoire
* Indexation BDD
* Mise en cache (si nécessaire)

##### Mesures & preuves

* Tests de charge : k6 / Apache Benchmark / Locust
* Indicateurs :

  * RPS garanti
  * Latence moyenne (ms)
  * Temps de traitement API

#### Catégories & Barèmes

* **Catégories créées dynamiquement par l'administrateur**
* Barèmes identiques entre présélection et sélection finale
* **Critères d'évaluation définis ultérieurement avec le client**

#### Déploiement

* Docker Compose
* CI/CD (tests + lint + build)
* Versionnement clair des services

---

## 4. Annexe — Diagrammes

* Diagramme de cas d’utilisation
* Diagramme de séquence (soumission, vote, modération)
* Diagramme entité–relation (MCD)
* Diagramme d’architecture (Front / Back / DB / Services)

Pour consulter les diagrammes, référez-vous au document UML.

---

