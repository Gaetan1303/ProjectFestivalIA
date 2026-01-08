# Modèle Conceptuel de Données (MCD)

## Entités Principales

### Utilisateur
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT selon la BDD)*
- Nom : Chaîne de caractères
- Prénom : Chaîne de caractères
- Email : Chaîne de caractères unique
- Mot de passe : Chaîne de caractères
- **Date de naissance** : Date *(requis pour vérification âge)*
- **Biographie** : Texte
- **École** : Chaîne de caractères
- **Réseaux sociaux** : JSON *(liens vers profils sociaux)*
- **Portfolio** : Chaîne de caractères *(URL)*
- **Accepte CGU** : Booléen *(obligatoire)*
- **Date d'inscription** : Date
- **Statut** : Enum *(Actif, Inactif, Suspendu)*
- Rôle : Enum *(Utilisateur, Administrateur, Modérateur, Jury, PartenaireCommercial)*

---

### Vidéo
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Titre : Chaîne de caractères
- Description : Texte
- Statut : Enum *(En attente, Approuvée, Rejetée, En modération)*
- Chemin : Chaîne de caractères *(URL ou chemin fichier)*
- **URL YouTube** : Chaîne de caractères *(pour contrôle des droits)*
- **Poster** : Chaîne de caractères *(chemin image poster)*
- **Durée** : Entier *(en secondes, max 60)*
- **Nombre de vues** : Entier *(défaut: 0)*
- **Outils IA** : JSON *(scénario, génération images/vidéos, post-production)*
- **Réalisateur référent** : Booléen *(pour projets collectifs)*
- Type : Enum *(ex: 100% IA, Hybride, etc.)*
- Date de soumission : Date
- **Date de validation** : Date
- `utilisateur_id` : Clé étrangère vers **Utilisateur**
- `categorie_id` : Clé étrangère vers **Catégorie**
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
- **Commentaire privé** : Texte *(visible uniquement par le juré et admin, non public)*
- **Date de vote** : Date
- `video_id` : Clé étrangère vers **Vidéo**
- `utilisateur_id` : Clé étrangère vers **Utilisateur** *(rôle JURY uniquement)*
- **Contrainte métier recommandée :** unicité sur (`utilisateur_id`, `video_id`)
- **Contrainte métier :** Seuls les utilisateurs avec le rôle JURY peuvent voter

---

### Notification
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Type : Enum *(Validation de vidéo, Nouvelle vidéo, Mise à jour du classement, Rappel workshop, Générale)*
- **Titre** : Chaîne de caractères
- Message : Texte
- Date : Date
- **Lu** : Booléen *(défaut: false)*
- `utilisateur_id` : Clé étrangère vers **Utilisateur**

---

### Langue
- **Code** (`code`) : Clé primaire *(ex: "fr", "en")*
- Nom : Chaîne de caractères *(ex: Français, Anglais)*
- **Actif** : Booléen *(langue active)*

---

### Workshop
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Titre : Chaîne de caractères
- Description : Texte
- Date de début : Date et heure
- Date de fin : Date et heure
- Lieu : Chaîne de caractères
- Capacité maximale : Entier
- Prix : Décimal
- Statut : Enum *(Ouvert, Complet, Annulé, Terminé)*

---

### Conférence
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Titre : Chaîne de caractères
- Description : Texte
- Date de début : Date et heure
- Date de fin : Date et heure
- Lieu : Chaîne de caractères
- Intervenant : Chaîne de caractères
- Statut : Enum *(Programmée, En cours, Terminée, Annulée)*

---

### Partenaire
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Nom : Chaîne de caractères
- Logo : Chaîne de caractères *(chemin)*
- Description : Texte
- Site web : Chaîne de caractères *(URL)*
- Type : Enum *(Sponsor Or, Sponsor Argent, Sponsor Bronze, Partenaire Média, Partenaire Technique)*
- Actif : Booléen

---

### Inscription Workshop
- **Identifiant** (`id`) : Clé primaire *(INT / BIGINT)*
- Date d'inscription : Date
- Statut : Enum *(Confirmée, En attente, Annulée)*
- `workshop_id` : Clé étrangère vers **Workshop**
- `utilisateur_id` : Clé étrangère vers **Utilisateur**

---

## Associations

1. **Un utilisateur peut soumettre plusieurs vidéos.**
   - Relation : **1,N** entre **Utilisateur** et **Vidéo**
   - **Note :** Un réalisateur peut soumettre plusieurs films (suppression de la contrainte 1,1)

2. **Une catégorie peut contenir plusieurs vidéos.**
   - Relation : **1,N** entre **Catégorie** et **Vidéo**
   - **Note :** Catégories créées dynamiquement par l'administrateur

3. **Une vidéo peut recevoir plusieurs votes.**
   - Relation : **1,N** entre **Vidéo** et **Vote**
   - **Contrainte :** Votes uniquement par les membres du jury

4. **Un utilisateur (jury) peut voter pour plusieurs vidéos.**
   - Relation : **1,N** entre **Utilisateur** et **Vote**
   - **Contrainte :** Seuls les utilisateurs avec le rôle JURY peuvent voter

5. **Un utilisateur peut recevoir plusieurs notifications.**
   - Relation : **1,N** entre **Utilisateur** et **Notification**

6. **Une vidéo est associée à une langue.**
   - Une vidéo a **1 langue**
   - Une langue peut être liée à **N vidéos**
   - Relation : **1,N** entre **Langue** et **Vidéo**

7. **Une vidéo peut avoir une miniature.**
   - Relation : **1,0..1** entre **Vidéo** et **Miniature**

8. **Une vidéo peut utiliser 0..N outils IA, et un outil IA peut être utilisé par 0..N vidéos.**
   - Relation : **N,N** entre **Vidéo** et **Outil IA** via **Vidéo_OutilIA**

9. **Un utilisateur peut proposer plusieurs outils IA.**
   - Relation : **1,N** entre **Utilisateur** et **Outil IA** *(via `created_by_user_id`)*

10. **Un workshop peut avoir plusieurs inscriptions.**
    - Relation : **1,N** entre **Workshop** et **Inscription Workshop**

11. **Un utilisateur peut s'inscrire à plusieurs workshops.**
    - Relation : **1,N** entre **Utilisateur** et **Inscription Workshop**

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
        date dateNaissance
        text biographie
        string ecole
        json reseauxSociaux
        string portfolio
        boolean accepteCGU
        date dateInscription
        UserStatus statut
        UserRole role
    }

    Category {
        int id PK
        string nom
        text description
        date dateCreation
        boolean actif
    }

    Video {
        int id PK
        string title
        text description
        VideoStatus status
        string path
        string urlYoutube
        string poster
        int duree
        int nbVues
        json outilsIA
        boolean realisateurReferent
        VideoType type
        date submissionDate
        date dateValidation
        int user_id FK
        int categorie_id FK
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
        text commentairePrivé
        date dateVote
        int video_id FK
        int user_id FK
    }

    Notification {
        int id PK
        NotificationType type
        string titre
        text message
        date createdAt
        boolean lu
        int user_id FK
    }

    Language {
        string code PK
        string name
        boolean actif
    }

    Workshop {
        int id PK
        string titre
        text description
        datetime dateDebut
        datetime dateFin
        string lieu
        int capaciteMax
        decimal prix
        WorkshopStatus statut
    }

    Conference {
        int id PK
        string titre
        text description
        datetime dateDebut
        datetime dateFin
        string lieu
        string intervenant
        ConferenceStatus statut
    }

    Partenaire {
        int id PK
        string nom
        string logo
        text description
        string siteWeb
        PartenaireType type
        boolean actif
    }

    InscriptionWorkshop {
        int id PK
        date dateInscription
        InscriptionStatus statut
        int workshop_id FK
        int user_id FK
    }

    User ||--o{ Video : submits
    Category ||--o{ Video : contains
    Language ||--o{ Video : used_by

    Video ||--o{ Vote : receives
    User ||--o{ Vote : casts_jury_only

    User ||--o{ Notification : receives

    Video ||--o| Thumbnail : has
    User ||--o{ Thumbnail : uploads

    Video ||--o{ Video_ai_tool : uses
    Ai_tool ||--o{ Video_ai_tool : referenced_by

    User ||--o{ Ai_tool : proposes

    Workshop ||--o{ InscriptionWorkshop : has_registrations
    User ||--o{ InscriptionWorkshop : registers_to
```
