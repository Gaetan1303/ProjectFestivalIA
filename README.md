# ProjectFestivalIA

### Project :

# 1. Synopsis :

Ici est décrit l’application, le besoin de la cible et le contexte dans lequel elle sera utilisée.

- Description : Plateforme d'upload de court métrage, trier et voter pour les 50 vidéos officiels / partenaires commerciaux / Réseaux sociaux /
- Faire de la projections de film en ligne ? Ou BDD ?

- Besoin de la cible : Upload, vote, tri, partage, streaming, classement des vidéos.
- Contexte : Pour le festival de court métrage de vidéo courte crée par IA.

Pour le festival Mars IA night de Juin 2026, le site héberge des vidéos IA d'une minute, dont la thématique est sur les futurs souhaitables. Le site s'adresse aux professionnels de la création culturelle, aux étudiants ainsi qu'aux grands publics.

Il permet l'upload de vidéo sur ce site, et permettre à un groupe de voter, en présentant un classement de ces vidéos.

L'ambition de ce dernier est aussi d'être partagé sur les réseaux sociaux.

# E.P.I.C :


    Epic #1 (issue) : Gestion de compte utilisateur
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application.
        # critères d'acceptation :
        - given : L'utilisateur est sur la page d'inscription et remplit tous les champs requis (nom, prénom, email, mot de passe).
        - when : L'utilisateur soumet le formulaire d'inscription.
        - then : Un email de confirmation est envoyé, et un message de succès s'affiche. L'utilisateur peut activer son compte via le lien dans l'email.

        User Story 2 (sub-issue) : En tant qu'utilisateur, je veux pouvoir me connecter afin de gérer mon compte.
        # critères d'acceptation :
        - given : L'utilisateur est sur la page de connexion et entre son email et son mot de passe.
        - when : L'utilisateur soumet le formulaire de connexion.
        - then : L'utilisateur est redirigé vers son tableau de bord en cas de succès, ou un message d'erreur est affiché en cas d'échec.

        User Story 3 (sub-issue) : En tant qu'administrateur, je veux pouvoir gérer les comptes utilisateurs afin de maintenir la sécurité de l'application.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des utilisateurs.
        - when : L'administrateur sélectionne un utilisateur pour désactiver, supprimer ou modifier son rôle.
        - then : Les modifications sont enregistrées et un message de confirmation est affiché.

        User Story 4 (sub-issue) : En tant qu'utilisateur, je veux pouvoir uploader ma vidéo afin de participer au concours.
        # critères d'acceptation :
        - given : L'utilisateur est connecté et accède à la page d'upload de vidéo.
        - when : L'utilisateur remplit le formulaire avec un titre, une description, et sélectionne un fichier vidéo.
        - then : La vidéo est soumise pour validation et une confirmation d'upload est affichée.

        User Story 5 (sub-issue) : En tant qu'administrateur, je veux pouvoir voter pour les vidéos (Jury) afin de sélectionner les meilleures vidéos.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des vidéos à voter.
        - when : L'administrateur attribue une note ou un vote à une vidéo.
        - then : Le vote est enregistré et pris en compte dans le classement.

        User Story 6 (sub-issue) : En tant qu'administrateur, je veux pouvoir classer les vidéos en fonction des votes afin de déterminer les 50 vidéos officielles.
        # critères d'acceptation :
        - given : Les votes des vidéos sont enregistrés dans le système.
        - when : L'administrateur génère le classement des vidéos.
        - then : Les 50 vidéos avec le plus de votes sont marquées comme "officielles" et affichées dans le classement.

        User Story 7 (sub-issue) : En tant qu'utilisateur, je veux pouvoir assister au classement des vidéos afin de voir les résultats du concours.
        # critères d'acceptation :
        - given : L'utilisateur accède à la page publique du classement.
        - when : L'utilisateur consulte la liste des vidéos classées.
        - then : Les vidéos sont triées par ordre décroissant de votes avec leurs titres, descriptions, et nombres de votes affichés.

        User Story 8 (sub-issue) : En tant qu'utilisateur, je veux pouvoir partager les vidéos sur les réseaux sociaux afin de promouvoir le concours.
        # critères d'acceptation :
        - given : L'utilisateur est sur la page d'une vidéo.
        - when : L'utilisateur clique sur le bouton de partage pour un réseau social.
        - then : Un lien vers la vidéo est généré et partagé avec un message personnalisé.

        User Story 9 (sub-issue) : En tant qu'utilisateur, je veux recevoir des notifications sur les mises à jour importantes du concours.
        # critères d'acceptation :
        - given : L'utilisateur est inscrit et a activé les notifications.
        - when : Une mise à jour importante est publiée (ex. nouveau classement, nouvelles vidéos).
        - then : L'utilisateur reçoit une notification par email avec les détails de la mise à jour.

    Epic #2 (issue) : Gestion des vidéos :
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux pouvoir uploader mes vidéos pour participer au concours.
        # critères d'acceptation :
        - given : L'utilisateur est connecté et accède à la page d'upload de vidéo.
        - when : L'utilisateur remplit le formulaire avec un titre, une description, et sélectionne un fichier vidéo.
        - then : La vidéo est soumise pour validation et une confirmation d'upload est affichée.

        User Story 2 (sub-issue) : En tant qu'utilisateur, je veux pouvoir mettre une miniature à ma vidéo pour attirer l'œil.
        # critères d'acceptation :
        - given : L'utilisateur est sur la page d'upload de vidéo.
        - when : L'utilisateur sélectionne une image miniature pour sa vidéo.
        - then : La miniature est enregistrée et affichée avec la vidéo.

        User Story 3 (sub-issue) : En tant qu'administrateur, je veux pouvoir modérer les vidéos pour garantir le respect des règles.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des vidéos en attente de validation.
        - when : L'administrateur approuve ou rejette une vidéo.
        - then : La vidéo est publiée ou un message de rejet est envoyé à l'utilisateur.

        User Story 4 (sub-issue) : En tant qu'utilisateur, je veux pouvoir ajouter une description à mes vidéos pour informer les spectateurs.
        # critères d'acceptation :
        - given : L'utilisateur est connecté et accède à la page de gestion de ses vidéos.
        - when : L'utilisateur ajoute ou modifie une description pour une vidéo.
        - then : La description est enregistrée et affichée avec la vidéo.

        User Story 5 (sub-issue) : En tant qu'utilisateur, je veux pouvoir supprimer une vidéo que j'ai uploadée pour gérer mon contenu.
        # critères d'acceptation :
        - given : L'utilisateur est connecté et accède à la liste de ses vidéos.
        - when : L'utilisateur sélectionne une vidéo et confirme sa suppression.
        - then : La vidéo est supprimée du système et un message de confirmation est affiché.

    Epic #3 (issue) : Gestion de la sécurité :
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux que mes données personnelles soient protégées afin de garantir ma vie privée.
        # critères d'acceptation :
        - given : L'utilisateur est inscrit et connecté.
        - when : L'utilisateur consulte ou met à jour ses données personnelles.
        - then : Les données sont stockées de manière sécurisée et conformes aux réglementations RGPD.

        User Story 2 (sub-issue) : En tant qu'administrateur, je veux mettre en place des mesures de sécurité pour protéger l'application contre les attaques.
        # critères d'acceptation :
        - given : L'application est en production.
        - when : Des tentatives d'accès non autorisées sont détectées.
        - then : Les journaux d'accès sont mis à jour et des alertes sont envoyées à l'équipe de sécurité.

        User Story 3 (sub-issue) : En tant qu'utilisateur, je veux pouvoir signaler des comportements inappropriés ou des contenus non conformes afin de maintenir un environnement sûr.
        # critères d'acceptation :
        - given : L'utilisateur est connecté et accède à une vidéo ou un commentaire.
        - when : L'utilisateur clique sur le bouton de signalement et remplit le formulaire.
        - then : Le signalement est enregistré et transmis à l'équipe de modération.

        User Story 4 (sub-issue) : En tant qu'administrateur, je veux pouvoir gérer les signalements des utilisateurs afin de prendre des mesures appropriées.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des signalements.
        - when : L'administrateur examine un signalement et prend une décision (traité ou rejeté).
        - then : Le statut du signalement est mis à jour et les actions nécessaires sont effectuées.

        User Story 5 (sub-issue) : En tant qu'administrateur, je veux pouvoir modérer les commentaires et les interactions des utilisateurs afin de garantir le respect des règles de la communauté.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des commentaires.
        - when : L'administrateur supprime un commentaire inapproprié.
        - then : Le commentaire est supprimé et l'utilisateur est notifié.

        User Story 6 (sub-issue) : En tant qu'administrateur, je veux pouvoir modérer le contenu sensible des vidéos, des commentaires, des sous-titres des vidéos et de l'audio.
        # critères d'acceptation :
        - given : L'administrateur est connecté et accède à la liste des contenus signalés.
        - when : L'administrateur marque un contenu comme sensible.
        - then : Le contenu est masqué jusqu'à validation et l'utilisateur est informé.




# Use Case :


- **Titre** : Upload et vote des vidéos.
- **Acteurs principaux** : Utilisateur, Administrateur, Jury.
- **Description** : Un utilisateur peut uploader une vidéo, qui sera ensuite soumise à un processus de modération. Une fois validée, la vidéo sera disponible pour le vote. Les jurys et utilisateurs peuvent voter pour les vidéos, et un classement est généré automatiquement.
- **Préconditions** : L'utilisateur doit être inscrit et connecté.
- **Scénario principal** :
  1. L'utilisateur se connecte.
  2. Il accède à la page d'upload et soumet une vidéo.
  3. L'administrateur valide ou rejette la vidéo.
  4. Les vidéos validées sont disponibles pour le vote.
  5. Les utilisateurs et jurys votent.
  6. Un classement est généré.
- **Extensions** :
  - Si la vidéo est rejetée, l'utilisateur reçoit une notification avec les raisons du rejet.
  - Si un utilisateur signale une vidéo, l'administrateur peut la retirer.

# MCD :

Le Modèle Conceptuel de Données (MCD) inclut les entités suivantes :

- **Utilisateur** : id, nom, prénom, email, mot de passe, rôle.
- **Vidéo** : id, titre, description, miniature, chemin, statut, utilisateur_id.
- **Vote** : id, utilisateur_id, video_id, score.
- **Signalement** : id, utilisateur_id, video_id, raison.

Relations principales :
- Un utilisateur peut uploader plusieurs vidéos.
- Une vidéo peut recevoir plusieurs votes.
- Une vidéo peut être signalée plusieurs fois.

# MLD :

Le Modèle Logique de Données (MLD) traduit le MCD en tables relationnelles :

- **Table Utilisateur** :
  - id (clé primaire)
  - nom
  - prénom
  - email (unique)
  - mot de passe
  - rôle

- **Table Vidéo** :
  - id (clé primaire)
  - titre
  - description
  - miniature
  - chemin
  - statut
  - utilisateur_id (clé étrangère vers Utilisateur.id)

- **Table Vote** :
  - id (clé primaire)
  - utilisateur_id (clé étrangère vers Utilisateur.id)
  - video_id (clé étrangère vers Vidéo.id)
  - score

- **Table Signalement** :
  - id (clé primaire)
  - utilisateur_id (clé étrangère vers Utilisateur.id)
  - video_id (clé étrangère vers Vidéo.id)
  - raison

# 2. Cahier des charges Client Front-end

## Cahier des Charges Fonctionnel

Ici sont décrites de façon exhaustive les fonctionnalités du projet grâce aux user stories et epics. Pour chaque fonctionnalité, n’oubliez pas d’y inscrire des contraintes de validations détaillées.

### Besoin

- Permettre aux utilisateurs de s'inscrire, se connecter, et gérer leurs comptes.
- Permettre l'upload, le vote, et le partage des vidéos.
- Afficher un classement des vidéos.
- Assurer une navigation fluide et intuitive.

### User Stories

- **En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application.**
  - Critères d'acceptation :
    - L'utilisateur peut remplir un formulaire d'inscription avec les champs requis (nom, prénom, email, mot de passe).
    - Un email de confirmation est envoyé à l'utilisateur après l'inscription.
    - L'utilisateur peut activer son compte en cliquant sur le lien de confirmation dans l'email.
    - Les mots de passe sont stockés de manière sécurisée (hashage).
    - Les erreurs d'inscription (email déjà utilisé, mot de passe trop faible, etc.) sont correctement gérées et affichées à l'utilisateur.

- **En tant qu'utilisateur, je veux pouvoir me connecter afin de gérer mon compte.**
  - Critères d'acceptation :
    - given : L'utilisateur est sur la page de connexion et entre son email et son mot de passe.
    - when : L'utilisateur soumet le formulaire de connexion.
    - then : L'utilisateur est redirigé vers son tableau de bord en cas de succès, ou un message d'erreur est affiché en cas d'échec.

- **En tant qu'administrateur, je veux pouvoir gérer les comptes utilisateurs afin de maintenir la sécurité de l'application.**
  - Critères d'acceptation :
    - L'administrateur peut accéder à une liste de tous les utilisateurs inscrits.
    - L'administrateur peut désactiver ou supprimer des comptes utilisateurs.
    - L'administrateur peut attribuer des rôles (utilisateur, administrateur, jury, modérateurs, visiteurs) aux utilisateurs.

- **En tant qu'un utilisateur, je veux pouvoir remplir le formulaire pour uploader ma video afin de participer au concours.**
  - Critères d'acceptation :
    - L'utilisateur peut accéder à un formulaire d'upload de vidéo.
    - Le formulaire permet de renseigner un titre, une description, et de sélectionner un fichier vidéo.
    - Une confirmation est affichée après un upload réussi.
    - Les erreurs (format non supporté, taille excessive, etc.) sont affichées clairement.

- **En tant qu'administrateur, je veux pouvoir voter pour les vidéos (Jury) afin de sélectionner les meilleures vidéos.**
  - Critères d'acceptation :
    - L'administrateur peut accéder à une liste de vidéos à voter.
    - Chaque vidéo peut recevoir une note ou un vote.
    - Les votes sont enregistrés et pris en compte dans le classement.

- **En tant qu'administrateur, je veux pouvoir classer les vidéos en fonction des votes afin de déterminer les 50 vidéos officielles.**
  - Critères d'acceptation :
    - Un classement des vidéos est généré automatiquement en fonction des votes.
    - L'administrateur peut ajuster manuellement le classement si nécessaire.
    - Les 50 vidéos avec le plus de votes sont marquées comme "officielles".

- **En tant qu'utilisateur, je veux pouvoir assister au classement des vidéos afin de voir les résultats du concours.
  - Critères d'acceptation :
    - Une page publique affiche le classement des vidéos.
    - Les vidéos sont triées par ordre décroissant de votes.
    - Les informations affichées incluent le titre, la description, et le nombre de votes.

- **En tant qu'utilisateur, je veux pouvoir partager les vidéos sur les réseaux sociaux afin de promouvoir le concours.**
  - Critères d'acceptation :
    - Chaque vidéo dispose d'un bouton de partage pour les réseaux sociaux.
    - Les réseaux sociaux supportés incluent Facebook, Twitter, et LinkedIn.
    - Le partage inclut un lien vers la vidéo et un message personnalisé.

- **En tant qu'utilisateur, je veux recevoir des notifications sur les mises à jour importantes du concours.**
  - Critères d'acceptation :
    - Les utilisateurs reçoivent des notifications par email pour les annonces importantes.
    - Les notifications incluent des informations sur les nouvelles vidéos, les classements, et les événements.

## Cahier des Charges Non-Fonctionnel

### Routes

- **/inscription** : Formulaire d'inscription.
- **/connexion** : Page de connexion.
- **/upload** : Formulaire d'upload de vidéo.
- **/classement** : Affichage du classement des vidéos.
- **/admin** : Tableau de bord administrateur.

### Contraintes de Sécurité

- Utilisation de HTTPS pour toutes les communications.
- Validation des entrées utilisateur côté client et serveur.
- Protection contre les attaques CSRF et XSS.
- Gestion des sessions avec des cookies sécurisés.

### Déploiement

- Utilisation de Docker pour la conteneurisation.
- Mise en place d'un pipeline CI/CD pour les déploiements automatiques.
- Hébergement sur une plateforme cloud (ex. Azure, AWS).

# 3. Cahier des charges client du Backend

## Cahier des Charges Fonctionnel

### Besoin

- Gérer les utilisateurs, vidéos, votes, et signalements.
- Assurer la modération des contenus.
- Fournir des endpoints sécurisés pour le front-end.

### EndPoints

- **POST /api/utilisateurs** : Création d'un utilisateur.
- **POST /api/connexion** : Authentification.
- **POST /api/videos** : Upload de vidéo.
- **GET /api/videos** : Liste des vidéos.
- **POST /api/votes** : Enregistrement d'un vote.
- **POST /api/signalements** : Signalement d'une vidéo.

### Contraintes

- Validation des données entrantes.
- Gestion des erreurs avec des codes HTTP appropriés.
- Limitation du nombre de requêtes par utilisateur (rate limiting).

## Cahier des Charges Non-Fonctionnel

### Contraintes de Sécurité

- Authentification basée sur des tokens JWT.
- Gestion des rôles avec RBAC (Role-Based Access Control).
- Chiffrement des mots de passe avec bcrypt.

### RGPD

- Anonymisation des données sensibles.
- Suppression des données personnelles sur demande.

### Performances

- Support pour 10 000 utilisateurs simultanés.
- Temps de réponse inférieur à 200 ms pour 95 % des requêtes.
