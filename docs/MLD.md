# Modèle Logique des Données (MLD)

## Tables et Attributs

### Table: Utilisateur
- **id** (PK) : Identifiant unique de l'utilisateur (string)
- nom : Nom de l'utilisateur (string)
- prenom : Prénom de l'utilisateur (string)
- email : Adresse email unique (string)
- motDePasse : Mot de passe sécurisé (string)
- dateNaissance : Date de naissance (date) - *requis pour vérification âge*
- biographie : Biographie de l'utilisateur (text)
- ecole : École/Institution (string)
- reseauxSociaux : Liens réseaux sociaux (JSON)
- portfolio : Lien portfolio (string)
- accepteCGU : Acceptation des CGU (boolean) - *obligatoire*
- dateInscription : Date d'inscription (datetime)
- role : Rôle de l'utilisateur (enum: USER, ADMINISTRATOR, MODERATOR, JURY, COMMERCIAL_PARTNER)
- statut : Statut du compte (enum: ACTIVE, INACTIVE, SUSPENDED)

### Table: Categorie
- **id** (PK) : Identifiant unique de la catégorie (string)
- nom : Nom de la catégorie (string)
- description : Description de la catégorie (text)
- dateCreation : Date de création (datetime)
- actif : Catégorie active (boolean)

### Table: Vidéo
- **id** (PK) : Identifiant unique de la vidéo (string)
- titre : Titre de la vidéo (string)
- description : Description de la vidéo (text)
- statut : Statut de la vidéo (enum: PENDING, APPROVED, REJECTED, MODERATION)
- chemin : Chemin ou URL de la vidéo (string)
- urlYoutube : URL YouTube de la vidéo (string)
- poster : Chemin de l'image poster (string)
- duree : Durée en secondes (int)
- nbVues : Nombre de vues (int) - *default: 0*
- dateSoumission : Date de soumission de la vidéo (datetime)
- dateValidation : Date de validation/rejet (datetime)
- outilsIA : Outils IA utilisés (JSON) - *scénario, génération images/vidéos, post-production*
- realisateurReferent : Réalisateur référent pour projets collectifs (boolean)
- utilisateur_id (FK) : Référence à l'utilisateur ayant soumis la vidéo (string)
- categorie_id (FK) : Référence à la catégorie (string)

### Table: Vote
- **id** (PK) : Identifiant unique du vote (string)
- note : Note attribuée à la vidéo (int, 1 à 10)
- commentairePrivé : Commentaire privé du juré (text) - *non visible publiquement*
- dateVote : Date du vote (datetime)
- video_id (FK) : Référence à la vidéo votée (string)
- utilisateur_id (FK) : Référence au juré ayant voté (string) - *rôle JURY uniquement*

### Table: Notification
- **id** (PK) : Identifiant unique de la notification (string)
- type : Type de notification (enum: VIDEO_VALIDATION, NEW_VIDEO, RANKING_UPDATE, WORKSHOP_REMINDER, GENERAL)
- titre : Titre de la notification (string)
- message : Contenu de la notification (text)
- date : Date de création de la notification (datetime)
- lu : Notification lue (boolean) - *default: false*
- utilisateur_id (FK) : Référence à l'utilisateur destinataire (string)

### Table: Langue
- **code** (PK) : Code unique de la langue (string) - *ex: 'fr', 'en'*
- nom : Nom de la langue (string) - *ex: 'Français', 'English'*
- actif : Langue active (boolean)

### Table: Workshop
- **id** (PK) : Identifiant unique du workshop (string)
- titre : Titre du workshop (string)
- description : Description du workshop (text)
- dateDebut : Date et heure de début (datetime)
- dateFin : Date et heure de fin (datetime)
- lieu : Lieu du workshop (string)
- capaciteMax : Capacité maximale (int)
- prix : Prix d'inscription (decimal)
- statut : Statut (enum: OUVERT, COMPLET, ANNULE, TERMINE)

### Table: Conference
- **id** (PK) : Identifiant unique de la conférence (string)
- titre : Titre de la conférence (string)
- description : Description de la conférence (text)
- dateDebut : Date et heure de début (datetime)
- dateFin : Date et heure de fin (datetime)
- lieu : Lieu de la conférence (string)
- intervenant : Nom de l'intervenant (string)
- statut : Statut (enum: PROGRAMMEE, EN_COURS, TERMINEE, ANNULEE)

### Table: Partenaire
- **id** (PK) : Identifiant unique du partenaire (string)
- nom : Nom du partenaire (string)
- logo : Chemin du logo (string)
- description : Description du partenaire (text)
- siteWeb : Site web du partenaire (string)
- type : Type de partenariat (enum: SPONSOR_OR, SPONSOR_ARGENT, SPONSOR_BRONZE, PARTENAIRE_MEDIA, PARTENAIRE_TECHNIQUE)
- actif : Partenaire actif (boolean)

### Table: InscriptionWorkshop
- **id** (PK) : Identifiant unique de l'inscription (string)
- dateInscription : Date d'inscription (datetime)
- statut : Statut de l'inscription (enum: CONFIRMEE, EN_ATTENTE, ANNULEE)
- workshop_id (FK) : Référence au workshop (string)
- utilisateur_id (FK) : Référence à l'utilisateur (string)

## Contraintes et Relations

1. **Utilisateur - Vidéo**
   - Relation : 1,N
   - Un utilisateur peut soumettre plusieurs vidéos (réalisateur peut soumettre plusieurs films).

2. **Catégorie - Vidéo**
   - Relation : 1,N
   - Une catégorie peut contenir plusieurs vidéos, une vidéo appartient à une catégorie.

3. **Vidéo - Vote**
   - Relation : 1,N
   - Une vidéo peut recevoir plusieurs votes (uniquement par les jurés).

4. **Utilisateur - Vote**
   - Relation : 1,N
   - Un utilisateur avec le rôle JURY peut voter pour plusieurs vidéos.
   - **Contrainte** : Seuls les utilisateurs avec le rôle JURY peuvent voter.

5. **Utilisateur - Notification**
   - Relation : 1,N
   - Un utilisateur peut recevoir plusieurs notifications.

6. **Workshop - InscriptionWorkshop**
   - Relation : 1,N
   - Un workshop peut avoir plusieurs inscriptions.

7. **Utilisateur - InscriptionWorkshop**
   - Relation : 1,N
   - Un utilisateur peut s'inscrire à plusieurs workshops.

## Contraintes Spécifiques

### Contraintes Métier

1. **Votes Privés** : Les commentaires des votes ne sont visibles que par les jurés et administrateurs.
2. **Soumissions Multiples** : Un réalisateur peut soumettre plusieurs films (suppression de la contrainte 1,1).
3. **Catégories Dynamiques** : Les catégories sont créées et gérées par les administrateurs.
4. **Vérification Âge** : La date de naissance est requise pour vérifier l'âge des participants.
5. **Acceptation CGU** : L'acceptation des CGU est obligatoire pour tous les utilisateurs.
6. **Réalisateur Référent** : Pour les projets collectifs, un réalisateur référent doit être identifié.

### Contraintes Techniques

1. **Format Vidéo** : Les vidéos doivent être au format 16:9 horizontal.
2. **Durée** : Durée maximale de 1 minute (60 secondes).
3. **Validation YouTube** : URL YouTube requise pour la vérification des droits.

**Modèle Logique des Données (MLD)**

Modélisation des ensembles et de leurs attributs indépendamment du SGBD utilisé. Le MLD est une représentation simplifiée du modèle physique mais plus complète que le MCD.