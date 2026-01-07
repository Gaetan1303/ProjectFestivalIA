# Cahier des Charges — Plateforme Festival IA (marsAI)

---

## 1. Synopsis

### Description de l’application

La plateforme Festival IA (marsAI) est une application web permettant d’organiser et de gérer un concours international de courts-métrages entièrement générés par Intelligence Artificielle. Elle couvre l’ensemble du cycle de vie du concours : inscription des utilisateurs, soumission des films, modération, notation par un jury, classement, diffusion publique et statistiques.

Pour plus de détails, consultez le [document User Stories](UserStory.md).

### Besoin de la cible

* Réalisateurs IA : soumettre leurs films, valoriser leur démarche créative et suivre leurs performances.
* Public : découvrir, visionner, partager et suivre le classement des films.
* Jury : noter et commenter les films sélectionnés dans un cadre sécurisé et équitable.
* Administrateurs / Modérateurs : piloter le concours, assurer la conformité légale, la qualité et la sécurité.

### Contexte d’utilisation

* Concours international (120+ pays)
* Environ 600 films soumis
* Pic de trafic attendu lors :

  * Ouverture/fermeture des soumissions
  * Publication du Top 50
  * Événement physique à Marseille (~3 000 visiteurs)

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

Les user stories détaillées, critères d’acceptation et priorités sont décrites dans l’annexe [User Stories](UserStory.md).

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

#### Routes Front-End (Mises à jour)

* `/` : Page d'accueil avec présentation du concours.
* `/login` : Page de connexion utilisateur.
* `/register` : Page d'inscription utilisateur.
* `/profile` : Gestion du profil utilisateur (modification, suppression).
* `/submit-film` : Formulaire de soumission de vidéos.
* `/films` : Liste des vidéos soumises avec filtres et pagination.
* `/films/:id` : Détails d'une vidéo spécifique.
* `/ranking` : Classement public des vidéos.
* `/jury` : Interface dédiée aux membres du jury pour noter et commenter.
* `/admin` : Tableau de bord pour les administrateurs (gestion des utilisateurs, vidéos, etc.).

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

Pour plus de détails sur les spécifications fonctionnelles, consultez le [document MCD](MCD.md).

#### Charge estimée

* Utilisateurs simultanés : 20000 vidéos obtenues 
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

Pour une vue complète du modèle de données, consultez le [document MCD](MCD.md).

#### Endpoints Back-End 

* `POST /auth/register` : Inscription d'un nouvel utilisateur.
* `POST /auth/login` : Connexion utilisateur avec génération de token.
* `GET /auth/logout` : Déconnexion sécurisée (invalidation du token).
* `GET /users/:id` : Récupération des informations d'un utilisateur spécifique.
* `PUT /users/:id` : Mise à jour des informations utilisateur.
* `DELETE /users/:id` : Suppression ou anonymisation d'un utilisateur (conformité RGPD).
* `POST /videos` : Soumission d'une nouvelle vidéo.
* `GET /videos` : Liste des vidéos avec filtres (pagination, statut, etc.).
* `GET /videos/:id` : Détails d'une vidéo spécifique.
* `PUT /videos/:id` : Mise à jour des métadonnées d'une vidéo (par un modérateur ou admin).
* `DELETE /videos/:id` : Suppression d'une vidéo.
* `POST /votes` : Enregistrement d'un vote pour une vidéo.
* `GET /analytics/videos` : Statistiques globales sur les vidéos (vues, partages, etc.).
* `GET /analytics/users` : Statistiques sur les utilisateurs (inscriptions, activité).

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

Pour consulter les diagrammes, référez-vous au [document UML](UseCases_UML.md).

---

