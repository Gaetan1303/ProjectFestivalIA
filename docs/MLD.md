# Modèle Logique des Données (MLD)

## Tables et Attributs

### Table: User
- id (PK) : Identifiant unique (UUID, CHAR(36))
- nom : Nom (string)
- prenom : Prénom (string)
- email : Email unique (string)
- motDePasse : Mot de passe sécurisé (string, hashé)
- dateNaissance : Date de naissance (date)
- accepteCGU : Acceptation des CGU (boolean, NOT NULL, CHECK = 1)
- statut : Statut du compte (enum: ACTIVE, INACTIVE, SUSPENDED)
- created_at : Date de création (datetime)
- updated_at : Date de modification (datetime)
- deleted_at : Date de suppression (nullable)
- lastLoginAt : Dernière connexion (datetime, optionnel)
- emailVerified : Email vérifié (boolean, optionnel)

### Table: Role
- id (PK) : Identifiant du rôle (UUID, CHAR(36))
- nom : Nom du rôle (enum: VISITOR, ADMIN, COMITE, JURY, DIRECTOR)

### Table: Candidature
- id (PK) : Identifiant unique (UUID, CHAR(36))
- user_id (FK) : Référence à User (UUID)
- dateDepot : Date de dépôt (datetime)
- statut : Statut de la candidature (enum: EN_ATTENTE, ACCEPTEE, REFUSEE)
- created_at : Date de création (datetime)
- updated_at : Date de modification (datetime)

### Table: Film
- id (PK) : Identifiant unique (UUID, CHAR(36))
- titre : Titre (string)
- description : Description (text)
- duree : Durée en secondes (int, CHECK <= 60)
- format : Format vidéo (string, CHECK = '16:9')
- urlYoutube : URL YouTube (string)
- chemin : Chemin ou URL du fichier (string)
- dateSoumission : Date de soumission (datetime)
- user_id (FK) : Réalisateur (UUID)
- candidature_id (FK, UNIQUE) : Référence à Candidature (UUID)
- created_at : Date de création (datetime)
- updated_at : Date de modification (datetime)

### Table: Comment
- id (PK) : Identifiant unique (UUID, CHAR(36))
- film_id (FK) : Référence à Film (UUID)
- user_id (FK) : Référence à User (UUID)
- contenu : Contenu du commentaire/annotation (text)
- type : Type (enum: COMMENTAIRE, NOTE, TECHNIQUE, AUTRE)
- prive : Boolean (privé/public)
- visible_par : ENUM('ADMIN','JURY','AUTEUR')
- dateComment : Date du commentaire (datetime)
- created_at : Date de création (datetime)

### Table: Selection
- id (PK) : Identifiant unique (UUID, CHAR(36))
- film_id (FK) : Référence à Film (UUID)
- dateSelection : Date de sélection (datetime)
- type : Type de sélection (enum: OFFICIELLE, HORS_COMPETITION, AUTRE)

### Table: Laureat
- id (PK) : Identifiant unique (UUID, CHAR(36))
- film_id (FK) : Référence à Film (UUID)
- prix : Nom du prix (string)
- dateRemise : Date de remise (datetime)

### Table: Notification
- id (PK) : Identifiant unique (UUID, CHAR(36))
- user_id (FK) : Référence à User (UUID)
- type : Type de notification (enum: VIDEO_VALIDATION, NEW_VIDEO, RANKING_UPDATE, WORKSHOP_REMINDER, GENERAL)
- titre : Titre (string)
- message : Contenu (text)
- dateCreation : Date de création (datetime)
- lu : Notification lue (boolean, default: false)

### Table: Note
- id (PK) : Identifiant unique (UUID, CHAR(36))
- user_id (FK) : Référence à User (UUID)
- film_id (FK) : Référence à Film (UUID)
- note : Note (int, 1 à 10, NOT NULL)
- created_at : Date de création (datetime)

## Contraintes et Relations (SQL)
### Table: Playlist
- id (PK) : Identifiant unique (UUID, CHAR(36))
- nom : Nom (string)
- created_at : Date de création (datetime)

### Table: Workshop
- id (PK) : Identifiant unique (UUID, CHAR(36))
- nom : Nom (string)
- created_at : Date de création (datetime)

### Table: Agenda
- id (PK) : Identifiant unique (UUID, CHAR(36))
- nom : Nom (string)
- created_at : Date de création (datetime)

### Table: AI_tools
- id (PK) : Identifiant unique (UUID, CHAR(36))
- nom : Nom (string)
- created_at : Date de création (datetime)

### Table: Newsletter
- id (PK) : Identifiant unique (UUID, CHAR(36))
- email : Email (string)
- created_at : Date de création (datetime)

### Relations One-to-Many (1,N)
- Un User peut avoir plusieurs Candidatures :
	- User (1) ---< (N) Candidature (user_id)
- Un User peut soumettre plusieurs Films :
	- User (1) ---< (N) Film (user_id)
- Un User peut recevoir plusieurs Notifications :
	- User (1) ---< (N) Notification (user_id)
- Un Film peut recevoir plusieurs Comments :
	- Film (1) ---< (N) Comment (film_id)
- Un Film peut être sélectionné plusieurs fois :
	- Film (1) ---< (N) Selection (film_id)
- Un Film peut être lauréat de plusieurs prix :
	- Film (1) ---< (N) Laureat (film_id)
- Un Workshop peut avoir plusieurs Users inscrits (via table d'inscription, à ajouter si besoin)

### Relations One-to-One (1,1)
- Un Film peut être lié à une seule Playlist principale (si besoin, via clé étrangère playlist_id dans Film ou table d'association)

### Relations Many-to-Many (N,N)
- Un User peut avoir plusieurs Roles et un Role peut être attribué à plusieurs Users :
	- Table d'association User_Role (user_id, role_id)
- Un Film peut appartenir à plusieurs Playlists et une Playlist peut contenir plusieurs Films :
	- Table d'association Playlist_Film (playlist_id, film_id)
- Un User peut s'inscrire à plusieurs Workshops et un Workshop peut accueillir plusieurs Users :
	- Table d'association Workshop_User (workshop_id, user_id)
- Un Film peut utiliser plusieurs AI_tools et un AI_tool peut être utilisé dans plusieurs Films :
	- Table d'association Film_AItool (film_id, ai_tool_id)

### Autres tables et liens
- Newsletter :
	- Un User peut être abonné à la Newsletter (champ booléen dans User ou table d'association Newsletter_User)
- Notes :
	- Peut être géré via Annotation ou table Note (user_id, film_id, note, ...)
- Agenda :
	- Un Agenda peut contenir plusieurs Workshops/Events (Agenda (1) ---< (N) Workshop/Event)

**Résumé des liens principaux :**

- User (1) ---< (N) Candidature
- User (1) ---< (N) Film
- User (1) ---< (N) Notification
- User (N) ---< (N) Role (via User_Role)
- User (N) ---< (N) Workshop (via Workshop_User)
- User (1) ---< (N) Comment
- Film (1) ---< (N) Comment
- Film (1) ---< (N) Selection
- Film (1) ---< (N) Laureat
- Film (N) ---< (N) Playlist (via Playlist_Film)
- Film (N) ---< (N) AI_tools (via Film_AItool)
- Workshop (N) ---< (N) User (via Workshop_User)
- Workshop (N) ---< (N) Agenda (si besoin)

// Pour chaque table d'association, prévoir une clé primaire composite ou un id unique.

## Contraintes Métier et Techniques

- Acceptation CGU obligatoire pour User
- Durée Film ≤ 60 secondes
- Format vidéo 16:9 obligatoire
- Un commentaire privé n’est visible que par le jury/admin
- Un User de rôle JURY peut créer des commentaires privés (annotations techniques, notes)

## Diagramme de Conception (Mermaid)

```mermaid
erDiagram
    User {
        char(36) id PK
        varchar(100) nom
        varchar(100) prenom
        varchar(255) email
        varchar(255) motDePasse
        date dateNaissance
        tinyint accepteCGU
        enum statut
        datetime created_at
        datetime updated_at
        datetime deleted_at
        datetime lastLoginAt
        tinyint emailVerified
    }
    Role {
        char(36) id PK
        enum nom
    }
    User_Role {
        char(36) user_id FK
        char(36) role_id FK
    }
    Candidature {
        char(36) id PK
        char(36) user_id FK
        datetime dateDepot
        enum statut
        datetime created_at
        datetime updated_at
    }
    Film {
        char(36) id PK
        varchar(255) titre
        text description
        int duree
        varchar(10) format
        varchar(500) urlYoutube
        varchar(500) chemin
        datetime dateSoumission
        char(36) user_id FK
        char(36) candidature_id FK
        datetime created_at
        datetime updated_at
    }
    Comment {
        char(36) id PK
        char(36) film_id FK
        char(36) user_id FK
        text contenu
        enum type
        tinyint prive
        enum visible_par
        datetime dateComment
        datetime created_at
    }
    Selection {
        char(36) id PK
        char(36) film_id FK
        datetime dateSelection
        enum type
    }
    Laureat {
        char(36) id PK
        char(36) film_id FK
        varchar(255) prix
        datetime dateRemise
    }
    Notification {
        char(36) id PK
        char(36) user_id FK
        enum type
        varchar(255) titre
        text message
        datetime dateCreation
        tinyint lu
    }
    Note {
        char(36) id PK
        char(36) user_id FK
        char(36) film_id FK
        int note
        datetime created_at
    }
    Playlist {
        char(36) id PK
        varchar(255) nom
        datetime created_at
    }
    Playlist_Film {
        char(36) playlist_id FK
        char(36) film_id FK
    }
    Newsletter {
        char(36) id PK
        varchar(255) email
        datetime created_at
    }
    Newsletter_User {
        char(36) user_id FK
        char(36) newsletter_id FK
    }
    AI_tools {
        char(36) id PK
        varchar(255) nom
        datetime created_at
    }
    Film_AItool {
        char(36) film_id FK
        char(36) ai_tool_id FK
    }
    Workshop {
        char(36) id PK
        varchar(255) nom
        datetime created_at
    }
    Workshop_User {
        char(36) workshop_id FK
        char(36) user_id FK
    }
    Agenda {
        char(36) id PK
        varchar(255) nom
        datetime created_at
    }
    Agenda_Workshop {
        char(36) agenda_id FK
        char(36) workshop_id FK
    }

    User ||--o{ Candidature : depose
    User ||--o{ Film : realise
    User ||--o{ Notification : recoit
    User ||--o{ Comment : ecrit
    User ||--o{ Note : note
    User ||--o{ User_Role : a_role
    User ||--o{ Workshop_User : participe
    User ||--o{ Newsletter_User : abonne
    Role ||--o{ User_Role : attribue
    Candidature ||--o| Film : concerne
    Film ||--o{ Comment : commente
    Film ||--o{ Note : evalue
    Film ||--o{ Selection : selectionne
    Film ||--o{ Laureat : laureat
    Film ||--o{ Playlist_Film : dans_playlist
    Film ||--o{ Film_AItool : utilise
    Playlist ||--o{ Playlist_Film : contient
    Newsletter ||--o{ Newsletter_User : a_abonne
    AI_tools ||--o{ Film_AItool : reference
    Workshop ||--o{ Workshop_User : concerne
    Workshop ||--o{ Agenda_Workshop : planifie
    Agenda ||--o{ Agenda_Workshop : contient
```

** ce dossier a été généré par El miminette ! **