Spécification Détaillé Du Projet : Plateforme
Festival marsAI
Projet : Hackathon de 10 semaines (Co-création La Plateforme x
Mobile Film Festival)
1. Présentation du projet et Objectifs

Le festival marsAI est un concours international de courts-métrages de 1 minute dont la
particularité est d'être intégralement générés par Intelligence Artificielle. Le thème de cette
première édition est "Imaginez des futurs souhaitables".

    Objectifs : Mettre l’humain au cœur de la création assistée par IA, challenger la créativité via
    un format court et diffuser ces visions à l'échelle mondiale.
    Enjeux : Représenter plus de 120 pays , recueillir plus de 600 films et accueillir 3 000
    visiteurs à Marseille lors de l'événement physique.
    Durée : 10 semaines (Conception, Design Figma, puis développement continu).

2. Environnement Technique

Le développement doit respecter les standards professionnels suivants :

    Stack imposée : MariaDb, MySQL, React.js, Node.js ( MERN ) et Tailwind CSS.
    Qualité du code : Séparation logique (modèles, contrôleurs, vues), code commenté et
    implémentation de tests unitaires sur les fonctions critiques.
    Accessibilité : Respect rigoureux des normes WCAG et design Responsive (Mobile First).

3. Système d'Authentification et Rôles

L'application doit gérer quatre types d'utilisateurs avec des permissions sécurisées :

    Méthodes d'accès : Inscription/Connexion classique
    Réalisateur : Soumission de films, gestion d'un profil complet (bio, école, réseaux sociaux) et
    historique des œuvres.
    Public : Consultation du catalogue, partage social, compteur de vues et inscription à la
    newsletter.
    Jury : Interface privée pour noter (1 à 10) et commenter les 50 films de la sélection officielle.
    Administrateur : Modération des contenus, gestion des partenaires et accès à un tableau de
    bord statistique (provenance des films, outils IA les plus utilisés).

4. Gestion des Médias et Workflow

    Processus de soumission : Formulaire actif pendant 2 mois (verrouillage automatique par le
    serveur après la date limite).
    Fiche technique IA : Champs obligatoires détaillant les outils utilisés pour le scénario, la
    génération d'images/vidéos et la post-production.
    Contrôle Copyright (YouTube API) : Intégration de l'API YouTube pour vérifier les droits
    d'auteur (musique/images) avant toute publication officielle.

    Affichage : Grille de miniatures avec pagination de 20 médias par page et filtres par
    catégorie ou type d'IA.
    Posters : Upload d'images (JPG/PNG/GIF, max 2 Mo) avec redimensionnement automatique
    pour les miniatures.

5. Fonctionnalités Avancées

    Internationalisation (i18n) : Interface intégralement disponible en Français et en Anglais.

6. Sécurité et Performance

    Sécurité : Requêtes préparées obligatoires, hashage sécurisé des mots de passe et validation
    systématique des données côté serveur.
    Performance : Analyse du déploiement et optimisation du score Lighthouse.

7. Module "Aller plus loin" (Optionnel)

    Authentification : Mise en place d’une authentification via le protocole Google Oauth.
    Notifications Temps Réel : Utilisation des WebSockets (sans API externe) pour informer les
    utilisateurs du statut de validation de leur film.
    Social Proof : Affichage des compteurs de vues et intégration des boutons de partage sur les
    réseaux sociaux.
    Agenda interactif : Planning des conférences, tables rondes et workshops prévus à Marseille.
    Système de réservation : Module simple pour s'inscrire aux ateliers ou à la cérémonie de
    clôture du 13 juin.

