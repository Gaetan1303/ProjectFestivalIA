### Project : 

# 1.Synopsis : 


Ici est décrit l’application, le besoin de la cible et le contexte dans lequel elle sera utilisée.

- Description : Plateforme d'upload de court métrage, trier et voter pour les 50 vidéos officiels / partenaires commerciaux / Réseaux sociaux /
- Faire de la projections de film en ligne ? Ou BDD ?

- Besoin de la cible : Upload, vote, tri, partage, streaming, classement des vidéos.
- contexte : Pour le festival de court métrage de vidéo courte crée par IA.

Pour le festival Mars IA night de Juin 2026, le site héberge des vidéos IA d'une minute, dont la thématique est sur les futurs souhaitables.
le site s'adresse aux professionnels de la création culturelle, aux étudiants ainsi qu'aux grands publics.

Il permet l'upload de vidéo sur ce site, et permettre à un groupe de voter, en présentant un classement de ces vidéos.

l'ambition de  ce dernier est aussi d'être partager sur les réseaux sociaux.


# E.P.I.C :


    Epic #1 (issue) : Gestion de compte utilisateur
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application.
        # critères d'acceptation :
        - L'utilisateur peut remplir un formulaire d'inscription avec les champs requis (nom, prénom, email, mot de passe).
        - Un email de confirmation est envoyé à l'utilisateur après l'inscription.
        - L'utilisateur peut activer son compte en cliquant sur le lien de confirmation dans l'email.
        - Les mots de passe sont stockés de manière sécurisée (hashage).
        - Les erreurs d'inscription (email déjà utilisé, mot de passe trop faible, etc.) sont correctement gérées et affichées à l'utilisateur.

        User Story 2 (sub-issue) : En tant qu'utilisateur, je veux pouvoir me connecter afin de gérer mon compte.
        # critères d'acceptation :
        - L'utilisateur peut accéder à une page de login où il peut entrer son email et son mot de passe.
        - Après une connexion réussie, l'utilisateur est redirigé vers son tableau de bord.
        - En cas d'échec de la connexion (email non trouvé, mot de passe incorrect), un message d'erreur approprié est affiché.
        - L'utilisateur peut réinitialiser son mot de passe en cas d'oubli via un lien envoyé par email.
        - La session utilisateur est gérée de manière sécurisée (tokens, cookies sécurisés, etc.)

        User Story 3 (sub-issue) : En tant qu'administrateur, je veux pouvoir gérer les comptes utilisateurs afin de maintenir la sécurité de l'application.
        #critères d'acceptation :
        - L'administrateur peut accéder à une liste de tous les utilisateurs inscrits.
        - L'administrateur peut désactiver ou supprimer des comptes utilisateurs.
        - L'administrateur peut attribuer des rôles (utilisateur, administrateur, jury, modérateurs, visiteurs) aux utilisateurs.

        User Story 4 (sub-issue) : En tant qu'un utilisateur, je veux pouvoir remplir le formulaire pour uploader ma video afin de participer au concours.
        # critères d'acceptation :

        User Story 5 (sub-issue) : En tant qu'administrateur, je veux pouvoir voter pour les vidéos (Jurry) afin de sélectionner les meilleures vidéos.
        # critères d'acceptation :
        
        User Stpry 6 (sub-issue) : EN tant qu'administrateur, je veux pouvoir classer les vidéos en fonction des votes afin de déterminer le 50 vidéos officiels.
        # critères d'acceptation :

        User Story 7 (sub-issue) : En tant qu'utilisateur, je veux pouvoir assister au classement des vidéos afin de voir les résultats du concours.
        # critères d'acceptation :

        User Story 8 (sub-issue) : En tant qu'utilisateur, je veux pouvoir partager les vidéos sur les réseaux sociaux afin de promouvoir le concours.
        # critères d'acceptation :

        User Story 9 (sub-issue) : 
        # critères d'acceptation :

    Epic #2 (issue) : Gestion des vidéos :
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux pouvoir uploader mes  vidéos pour participer au concours
        # critères d'acceptation :
        
        User Story 2 (sub-issue) : En tant qu'utilisateur, je veut pouvoir mettre une miniature à ma vidéo pour attirer l'oeil 
        # critères d'acceptation :

        User Story 3 (sub-issue) : En tant qu'administrateur, je veut pouvoir moderer les vidéos pour garantir le respect des règles
        # critères d'acceptation :

        User Story 4 (sub-issue) : En tant qu'utilisateur, je veux pouvoir  ajouter une description à mes vidéos poaur informer les spectateurs
        # critères d'acceptation :
        
        User Story 5 (sub-issue) : En tant qu'utilisateur, je veux pouvoir supprimer une video que j'ai uploadé pour gérer mon contenu
        # critères d'acceptation :
        

    Epic #3 (issue) : Gestion de la sécurité :
        User Story 1 (sub-issue) : En tant qu'utilisateur, je veux que mes données personnelles soient protégées afin de garantir ma vie privée.
        # critères d'acceptation :
        
        User Story 2 (sub-issue) : En tant qu'administrateur, je veux mettre en place des mesures de sécurité pour protéger l'application contre les attaques.
        # critères d'acceptation :
        
        User Story 3 (sub-issue) : En tant qu'utilisateur, je veux pouvoir signaler des comportements inappropriés ou des contenus non conformes afin de maintenir un environnement sûr.
        # critères d'acceptation :
        
        User Story 4 (sub-issue) : En tant qu'administrateur, je veux pouvoir gérer les signalements des utilisateurs afin de prendre des mesures appropriées.
        # critères d'acceptation :
        
        User Story 5 (sub-issue) : En tant qu'administrateur, je veux pouvoir modérer les commentaires et les interactions des utilisateurs afin de garantir le respect des règles de la communauté.
        # critères d'acceptation :
        
        USer Story 6 (sub-issue) : En tant qu'administrateur, je veux pouvoir modérer le contenu sensible des vidéos, des commentaires, des sous-titres des vidéos et de l'audio.
        # critères d'acceptation :
        




# USeCase :


# MCD :


# MLD :



2.Cahier des charges Client Front-end

Cahier des Charges Fonctionnel
Ici sont décrites de façon exhaustive les fonctionnalités du projet grâce aux user stories et epics. Pour chaque fonctionnalitées n’oubliez pas d’y inscrire des contraintes de validations détaillées


Besoin

User Stories

…
Cahier des Charges Non-Fonctionnel

Ici est décrit la partie technique du front-end 

Routes
Contraintes de Sécurité
Déploiement (devops,cicd,docker)
…


3.Cahier des charges client du Backend

Cahier des Charges Fonctionnel
Besoin
qui consomme le back ? Combien d'utilisateurs simultanés ? A la seconde pendant les période de forme consommation ?
MCD
Entité et Schéma UML entité relation
EndPoints
routes du back et leurs contraintes leurs code de status, leurs DTO

…


Cahier des Charges Non-Fonctionnel

Ici est décrit la partie technique du front-end 
Contraintes de Sécurité 
Authentification, RÔLES (role based access control RBAC), validations de données, failles de sécurité,  …
RGDP
Interdiction PII personally identifiable informations
Anonymisation
