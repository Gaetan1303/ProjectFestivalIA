# Modèle Conceptuel de Données (MCD)

## Entités Principales

### Utilisateur
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT selon la BDD)*
- Nom : Chaîne de caractères
- Prénom : Chaîne de caractères
- Email : Chaîne de caractères unique
- Mot de passe : Chaîne de caractères
- Rôle : Enum *(Utilisateur, Administrateur, Modérateur, Jury, PartenaireCommercial)*

---

### Vidéo
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Titre : Chaîne de caractères
- Description : Texte
- Statut : Enum *(En attente, Approuvée, Rejetée)*
- Chemin : Chaîne de caractères *(URL ou chemin fichier)*
- Type : Enum *(ex: 100% IA, Hybride, etc.)*
- Date de soumission : Date
- `utilisateur_id` : Clé étrangère vers **Utilisateur**
- `langue_code` : Clé étrangère vers **Langue**

---

### Miniature (Thumbnail)
> Une vidéo a **0 ou 1** miniature
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Chemin : Chaîne de caractères *(URL ou chemin fichier)*
- Date d’upload : Date
- `video_id` : Clé étrangère vers **Vidéo** *(unique si 1 thumbnail max par vidéo)*
- `utilisateur_id` : Clé étrangère vers **Utilisateur** *(celui qui l’a upload)*

---

### Outil IA (AI Tool)
> Catalogue global (sans doublons).  
> Un utilisateur peut ajouter un nouvel outil IA : s’il n’existe pas, il est créé dans ce catalogue.
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Nom : Chaîne de caractères *(unique)*
- Statut : Enum *(En attente, Approuvée, Rejetée)* *(option “pro” anti-spam)*
- Date de création : Date
- `created_by_user_id` : Clé étrangère vers **Utilisateur** *(qui a proposé l’outil IA)*

---

### Vidéo ↔ Outil IA (liaison)
> Une vidéo peut utiliser **0, 1 ou plusieurs** outils IA.  
> Un outil IA peut être utilisé par **plusieurs** vidéos.
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)* *(optionnel si PK composite)*
- `video_id` : Clé étrangère vers **Vidéo**
- `ai_tool_id` : Clé étrangère vers **Outil IA**
- **Contrainte recommandée :** unicité sur (`video_id`, `ai_tool_id`) pour éviter les doublons

---

### Vote
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Note : Entier *(1 à 10)*
- Commentaire : Texte
- `video_id` : Clé étrangère vers **Vidéo**
- `utilisateur_id` : Clé étrangère vers **Utilisateur**
- **Contrainte métier recommandée :** unicité sur (`utilisateur_id`, `video_id`)

---

### Notification
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Type : Enum *(Validation de vidéo, Nouvelle vidéo, Mise à jour du classement)*
- Message : Texte
- Date : Date
- `utilisateur_id` : Clé étrangère vers **Utilisateur**

---

### Langue
- **Code** (`code`) : Clé primaire *(ex: "fr", "en")*
- Nom : Chaîne de caractères *(ex: Français, Anglais)*

---

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

6. **Une vidéo peut avoir une miniature.**
   - Relation : **1,0..1** entre **Vidéo** et **Miniature**

7. **Une vidéo peut utiliser 0..N outils IA, et un outil IA peut être utilisé par 0..N vidéos.**
   - Relation : **N,N** entre **Vidéo** et **Outil IA** via **Vidéo_OutilIA**

8. **Un utilisateur peut proposer plusieurs outils IA.**
   - Relation : **1,N** entre **Utilisateur** et **Outil IA** *(via `created_by_user_id`)*

---

## Diagramme Conceptuel (Mermaid)
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
        string language_code FK
    }

    Thumbnail {
        int id PK
        string path
        date uploadedAt
        int video_id FK
        int user_id FK
    }

    Ai_tool {
        int id PK
        string name "UNIQUE"
        AiToolStatus status
        date createdAt
        int created_by_user_id FK
    }

    Video_ai_tool {
        int id PK
        int video_id FK
        int ai_tool_id FK
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
        date createdAt
        int user_id FK
    }

    Language {
        string code PK
        string name
    }

    User ||--o{ Video : submits
    Language ||--o{ Video : used_by

    Video ||--o{ Vote : receives
    User ||--o{ Vote : casts

    User ||--o{ Notification : receives

    Video ||--o| Thumbnail : has
    User ||--o{ Thumbnail : uploads

    Video ||--o{ Video_ai_tool : uses
    Ai_tool ||--o{ Video_ai_tool : referenced_by

    User ||--o{ Ai_tool : proposes
