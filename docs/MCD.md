# Modèle Conceptuel de Données (MCD)

## Entités Principales

### Utilisateur
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT selon la BDD)*
- Nom : Chaîne de caractères
- Prénom : Chaîne de caractères
- Email : Chaîne de caractères unique
- Mot de passe : Chaîne de caractères
- Rôle : Enum *(Utilisateur, Administrateur, Modérateur, Jury, PartenaireCommercial)*

### Vidéo
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Titre : Chaîne de caractères
- Description : Texte
- Statut : Enum *(En attente, Approuvée, Rejetée)*
- Chemin : Chaîne de caractères *(URL ou chemin fichier)*
- Type : Enum *(ex: 100% IA, Hybride, etc. — si tu le gardes)*
- Date de soumission : Date
- `utilisateur_id` : Clé étrangère vers **Utilisateur**
- `langue_code` : Clé étrangère vers **Langue**

### Vote
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Note : Entier *(1 à 10)*
- Commentaire : Texte
- `video_id` : Clé étrangère vers **Vidéo**
- `utilisateur_id` : Clé étrangère vers **Utilisateur**
- **Contrainte métier recommandée :** un utilisateur ne peut voter qu’une seule fois par vidéo *(unicité sur `utilisateur_id` + `video_id`)*

### Notification
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Type : Enum *(Validation de vidéo, Nouvelle vidéo, Mise à jour du classement)*
- Message : Texte
- Date : Date
- `utilisateur_id` : Clé étrangère vers **Utilisateur**

### Langue
- **Code** (`code`) : Clé primaire *(ex: "fr", "en")*
- Nom : Chaîne de caractères *(ex: Français, Anglais)*

## Associations

1. **Un utilisateur peut soumettre plusieurs vidéos.**
   - Relation : **1,N** entre **Utilisateur** et **Vidéo**

2. **Une vidéo peut recevoir plusieurs votes.**
   - Relation : **1,N** entre **Vidéo** et **Vote**

3. **Un utilisateur peut voter pour plusieurs vidéos.**
   - Relation : **1,N** entre **Utilisateur** et **Vote**

4. **Un utilisateur peut recevoir plusieurs notifications.**
   - Relation : **1,N** entre **Utilisateur** et **Notification**

5. **Une vidéo est associée à une langue.**
   - Une vidéo a **1 langue**
   - Une langue peut être liée à **N vidéos**
   - Relation : **1,N** entre **Langue** et **Vidéo**

## Diagramme Conceptuel
```mermaid
erDiagram
    User {
        int id PK
        string name
        string surname
        string email
        string password
        UserRole role
    }

    Video {
        int id PK
        string title
        text description
        VideoStatus status
        string path
        VideoType type
        date submissionDate
        int user_id FK
        int language_id FK
    }

    Vote {
        int id PK
        int score
        text comment
        int video_id FK
        int user_id FK
    }

    Notification {
        int id PK
        NotificationType type
        text message
        date date
        int user_id FK
    }

    Language {
        int id PK
        string name
    }

    User ||--o{ Video : submits
    Video ||--o{ Vote : receives
    User ||--o{ Vote : casts
    User ||--o{ Notification : receives
    Language ||--o{ Video : is_used_by
