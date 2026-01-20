erDiagram
    %% ENTITÉS PRINCIPALES
    User {
        UUID id PK
        string nom
        string prenom
        string email
        string motDePasse
        date dateNaissance
        boolean accepteCGU
        string statut
        string School
        boolean emailVerified
        datetime lastLoginAt
        datetime created_at
        datetime updated_at
        datetime deleted_at
    }
    
    Role {
        UUID id PK
        string nom
    }
    
    Candidature {
        UUID id PK
        UUID user_id FK
        datetime dateDepot
        string statut
        datetime created_at
        datetime updated_at
    }
    
    Film {
        UUID id PK
        string titre
        text description
        int duree
        string format
        string urlYoutube
        string sousTitres
        string chemin
        datetime dateSoumission
        UUID user_id FK
        UUID candidature_id FK
        datetime created_at
        datetime updated_at
    }
    
    %% INTERACTIONS ET CONTENUS
    Comment {
        UUID id PK
        UUID film_id FK
        UUID user_id FK
        text contenu
        string type
        boolean prive
        datetime created_at
    }
    
    Note {
        UUID user_id FK
        UUID film_id FK
        int note
        datetime created_at
    }
    
    Notification {
        UUID id PK
        UUID user_id FK
        string type
        string titre
        text message
        datetime dateCreation
        boolean lu
    }
    
    %% SÉLECTIONS ET PRIX
    Selection {
        UUID id PK
        UUID film_id FK
        datetime dateSelection
        string type
    }
    
    Laureat {
        UUID id PK
        UUID film_id FK
        string prix
        datetime dateRemise
    }
    
    %% ORGANISATION
    Playlist {
        UUID id PK
        string nom
        datetime created_at
    }
    
    Workshop {
        UUID id PK
        string nom
        text description
        datetime dateDebut
        datetime dateFin
        datetime created_at
    }
    
    Agenda {
        UUID id PK
        string nom
        datetime created_at
    }
    
    AI_tool {
        UUID id PK
        string nom
        text description
        datetime created_at
    }
    
    Newsletter {
        UUID id PK
        string email
        datetime created_at
    }
    
    %% TABLES D'ASSOCIATION
    User_Role {
        UUID user_id FK
        UUID role_id FK
    }
    
    Playlist_Film {
        UUID playlist_id FK
        UUID film_id FK
        int ordre
    }
    
    Workshop_User {
        UUID workshop_id FK
        UUID user_id FK
        datetime dateInscription
    }
    
    Film_AItool {
        UUID film_id FK
        UUID ai_tool_id FK
    }
    
    Newsletter_User {
        UUID user_id FK
        UUID newsletter_id FK
        datetime dateAbonnement
    }
    
    Agenda_Workshop {
        UUID agenda_id FK
        UUID workshop_id FK
    }
    
    %% RELATIONS PRINCIPALES
    User ||--o{ Candidature : "deposit"
    User ||--o{ Film : "realize"
    User ||--o{ Comment : "write"
    User ||--o{ Note : "give"
    User ||--o{ Notification : "receive"
    
    Candidature ||--|| Film : "generate"
    
    Film ||--o{ Comment : "get"
    Film ||--o{ Note : "estimated by"
    Film ||--o{ Selection : "sélected"
    Film ||--o{ Laureat : "reward"
    
    %% RELATIONS N:N VIA TABLES D'ASSOCIATION
    User ||--o{ User_Role : "has role"
    Role ||--o{ User_Role : "assigned to"
    
    User ||--o{ Workshop_User : "participate in"
    Workshop ||--o{ Workshop_User : "greet"
    
    User ||--o{ Newsletter_User : "account holder"
    Newsletter ||--o{ Newsletter_User : "diffused à"
    
    Film ||--o{ Playlist_Film : "in"
    Playlist ||--o{ Playlist_Film : "contain"
    
    Film ||--o{ Film_AItool : "use"
    AI_tools ||--o{ Film_AItool : "used by"
    
    Workshop ||--o{ Agenda_Workshop : "programmed"
    Agenda ||--o{ Agenda_Workshop : "plan"
