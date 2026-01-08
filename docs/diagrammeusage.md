# Diagramme de Cas d'Usage Principal

```mermaid
graph TB
    %% Acteurs principaux
    Visiteur[Visiteur]
    Utilisateur[Utilisateur Connecté]
    Filmmaker[Filmmaker]
    Jury[Jury]
    Moderateur[Modérateur]
    Admin[Administrateur]
    Partner[Partenaire Commercial]
    Systeme[Système]

    %% Relations d'héritage entre acteurs
    Utilisateur -.-> Filmmaker
    Utilisateur -.-> Jury
    Utilisateur -.-> Moderateur
    Utilisateur -.-> Admin
    Utilisateur -.-> Partner

    %% Cas d'usage publics (sans connexion)
    subgraph "Accès Public"
        UC1[Consulter catalogue de films]
        UC2[Consulter classement]
        UC3[Partager un film]
        UC4[S'inscrire]
        UC5[Se connecter]
        UC6[Consulter agenda événements]
        UC7[S'abonner newsletter]
        UC8[Consulter FAQ]
        UC9[Filtrer films par pays/outils]
        UC10[Consulter termes et conditions]
        UC11[Consulter politique confidentialité]
    end

    %% Cas d'usage utilisateur authentifié
    subgraph "Gestion de Compte"
        UC12[Gérer profil]
        UC13[Se déconnecter]
        UC14[Supprimer compte]
        UC15[Recevoir notifications]
        UC16[Modifier mot de passe]
        UC17[Gérer paramètres]
        UC18[Accepter CGU]
        UC19[Vérifier âge - date naissance]
    end

    %% Cas d'usage filmmaker
    subgraph "Soumission et Gestion Films"
        UC20[Soumettre plusieurs films]
        UC21[Définir réalisateur référent]
        UC22[Ajouter fiche technique IA]
        UC23[Ajouter sous-titres]
        UC24[Consulter statistiques de mes films]
        UC25[Modifier informations film]
        UC26[Voir statut modération]
        UC27[Gérer portfolio]
    end

    %% Cas d'usage jury
    subgraph "Évaluation et Notation (Privée)"
        UC28[Noter un film (jury uniquement)]
        UC29[Commenter privément un film]
        UC30[Consulter films à évaluer]
        UC31[Voir historique de mes votes]
        UC32[Consulter critères d'évaluation]
        UC33[Navigation fluide entre vidéos]
    end

    %% Cas d'usage modération
    subgraph "Modération de Contenu"
        UC34[Examiner films en attente]
        UC35[Approuver film]
        UC36[Rejeter film avec motif]
        UC37[Vérifier conformité copyright]
        UC38[Contrôle YouTube préalable]
        UC39[Gérer dépublication/rejet]
    end

    %% Cas d'usage administration
    subgraph "Administration Système"
        UC40[Gérer utilisateurs et rôles]
        UC41[Gérer partenaires]
        UC42[Consulter statistiques globales]
        UC43[Sélectionner Top 50 officiels]
        UC44[Configurer paramètres système]
        UC45[Consulter logs et rapports]
        UC46[Gérer outils IA catalogue]
        UC47[Envoyer notifications en masse]
        UC48[Créer catégories dynamiquement]
        UC49[Gérer barèmes évaluation]
        UC50[Gérer workshops et conférences]
    end

    %% Cas d'usage partenaires
    subgraph "Sponsoring et Partenariat"
        UC51[Sponsoriser un film]
        UC52[Consulter statistiques de sponsoring]
        UC53[Gérer profil partenaire]
    end

    %% Cas d'usage événements
    subgraph "Événements et Workshops"
        UC54[Réserver place workshop]
        UC55[Réserver cérémonie clôture]
        UC56[Donner feedback événement]
        UC57[Consulter planning détaillé]
        UC58[Gérer inscriptions ateliers]
        UC59[Consulter conférences et webinaires]
    end

    %% Relations Visiteur
    Visiteur --> UC1
    Visiteur --> UC2
    Visiteur --> UC3
    Visiteur --> UC4
    Visiteur --> UC5
    Visiteur --> UC6
    Visiteur --> UC7
    Visiteur --> UC8
    Visiteur --> UC9
    Visiteur --> UC10
    Visiteur --> UC11

    %% Relations Utilisateur connecté
    Utilisateur --> UC12
    Utilisateur --> UC13
    Utilisateur --> UC14
    Utilisateur --> UC15
    Utilisateur --> UC16
    Utilisateur --> UC17
    Utilisateur --> UC18
    Utilisateur --> UC19
    Utilisateur --> UC54
    Utilisateur --> UC55
    Utilisateur --> UC56
    Utilisateur --> UC57
    Utilisateur --> UC58
    Utilisateur --> UC59

    %% Relations Filmmaker
    Filmmaker --> UC20
    Filmmaker --> UC21
    Filmmaker --> UC22
    Filmmaker --> UC23
    Filmmaker --> UC24
    Filmmaker --> UC25
    Filmmaker --> UC26
    Filmmaker --> UC27

    %% Relations Jury
    Jury --> UC28
    Jury --> UC29
    Jury --> UC30
    Jury --> UC31
    Jury --> UC32
    Jury --> UC33

    %% Relations Modérateur
    Moderateur --> UC34
    Moderateur --> UC35
    Moderateur --> UC36
    Moderateur --> UC37
    Moderateur --> UC38
    Moderateur --> UC39

    %% Relations Administrateur
    Admin --> UC40
    Admin --> UC41
    Admin --> UC42
    Admin --> UC43
    Admin --> UC44
    Admin --> UC45
    Admin --> UC46
    Admin --> UC47
    Admin --> UC48
    Admin --> UC49
    Admin --> UC50

    %% Relations Partenaire
    Partner --> UC51
    Partner --> UC52
    Partner --> UC53

    %% Relations système et extensions
    Systeme -.-> UC15
    UC20 -.-> UC34
    UC35 -.-> UC15
    UC36 -.-> UC15
    UC43 -.-> UC42
    UC28 -.-> UC42
    UC18 -.-> UC4
```

