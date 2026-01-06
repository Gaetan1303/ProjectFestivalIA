# Modèle Logique des Données (MLD)

## Tables et Attributs

### Table: Utilisateur
- **id** (PK) : Identifiant unique de l'utilisateur (string)
- nom : Nom de l'utilisateur (string)
- email : Adresse email unique (string)
- motDePasse : Mot de passe sécurisé (string)
- role : Rôle de l'utilisateur (enum: UTILISATEUR, ADMINISTRATEUR, MODERATEUR, JURY, PARTENAIRE_COMMERCIAL)

### Table: Vidéo
- **id** (PK) : Identifiant unique de la vidéo (string)
- titre : Titre de la vidéo (string)
- description : Description de la vidéo (text)
- statut : Statut de la vidéo (enum: EN_ATTENTE, APPROUVEE, REJETEE)
- chemin : Chemin ou URL de la vidéo (string)
- dateSoumission : Date de soumission de la vidéo (date)
- utilisateur_id (FK) : Référence à l'utilisateur ayant soumis la vidéo (string)

### Table: Vote
- **id** (PK) : Identifiant unique du vote (string)
- note : Note attribuée à la vidéo (int, 1 à 10)
- commentaire : Commentaire sur la vidéo (text)
- video_id (FK) : Référence à la vidéo votée (string)
- utilisateur_id (FK) : Référence à l'utilisateur ayant voté (string)

### Table: Notification
- **id** (PK) : Identifiant unique de la notification (string)
- type : Type de notification (enum: VALIDATION_VIDEO, NOUVELLE_VIDEO, MISE_A_JOUR_RANKING)
- message : Contenu de la notification (text)
- date : Date de création de la notification (date)
- utilisateur_id (FK) : Référence à l'utilisateur destinataire (string)

### Table: Langue
- **code** (PK) : Code unique de la langue (string)
- nom : Nom de la langue (string)

## Contraintes et Relations

1. **Utilisateur - Vidéo**
   - Relation : 1,N
   - Un utilisateur peut soumettre plusieurs vidéos.

2. **Vidéo - Vote**
   - Relation : 1,N
   - Une vidéo peut recevoir plusieurs votes.

3. **Utilisateur - Vote**
   - Relation : 1,N
   - Un utilisateur peut voter pour plusieurs vidéos.

4. **Utilisateur - Notification**
   - Relation : 1,N
   - Un utilisateur peut recevoir plusieurs notifications.

5. **Vidéo - Langue**
   - Relation : 1,1
   - Une vidéo est associée à une seule langue.

## Représentation des Clés et Contraintes

- **Clé Primaire (PK)** : Identifie de manière unique chaque enregistrement dans une table.
- **Clé Étrangère (FK)** : Assure l'intégrité référentielle entre deux tables.
- **Contraintes d'intégrité** :
  - Les clés étrangères doivent correspondre à une clé primaire existante dans la table référencée.
  - Les valeurs des colonnes enum doivent respecter les valeurs définies.

---

Modèle Logique des Données Modélisation des ensembles et de leurs attributs indépendamment du SGBD utilisé. Le MLD est une représentation simplifiée du modèle physique mais plus complète que le MCD.