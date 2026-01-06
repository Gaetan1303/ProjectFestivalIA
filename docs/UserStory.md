# ProjectFestivalIA — User Stories (Version produit) + Annexe NFR
*Dernière mise à jour : 2026-01-06*

## 1) Synopsis

### Description
ProjectFestivalIA est une plateforme pour héberger et gérer un concours international de courts métrages **générés avec l’IA**. Les utilisateurs peuvent **soumettre**, **découvrir**, **voter**, **classer** et **partager** des films.

### Objectifs
- Permettre aux réalisateurs de présenter leurs créations IA.
- Offrir une expérience fluide pour découvrir, voter et partager.
- Assurer un concours **équitable**, **modéré** et **transparent**, avec des statistiques utiles.

### Contexte
Plateforme créée pour la **Mars IA Night**. Le concours porte sur des courts métrages de **1 minute** sur le thème **« Desirable Futures »**, avec une audience internationale (120+ pays), un objectif de 600+ films et 3 000 visiteurs à l’événement physique à Marseille.


## Epic #1 — Comptes & Profil

### US1 — S’inscrire et activer mon compte
- **En tant que** visiteur
- **Je veux** créer un compte
- **Afin de** pouvoir accéder aux fonctionnalités de la plateforme
- **Priorité :** Haute
- **Critères d’acceptation**
  - **Étant donné** que je suis sur la page d’inscription
  - **Quand** je renseigne nom + email + mot de passe et je valide
  - **Alors**
    - Je reçois un email d’activation avec un lien unique
    - Mon compte n’est utilisable qu’après activation
    - Si l’email est invalide ou déjà utilisé, je vois un message clair
    - Si le mot de passe est trop faible, je vois un message clair indiquant les règles

### US2 — Me connecter / me déconnecter
- **En tant que** utilisateur
- **Je veux** me connecter et me déconnecter
- **Afin de** gérer mon accès en sécurité
- **Priorité :** Haute
- **Critères d’acceptation**
  - **Étant donné** que je suis sur la page de connexion
  - **Quand** je saisis mes identifiants et je valide
  - **Alors**
    - Si c’est correct, j’accède à mon espace
    - Si c’est incorrect, un message d’erreur apparaît (sans détails sensibles)
  - **Quand** je me déconnecte
  - **Alors** mon accès est coupé et je dois me reconnecter pour agir

### US3 — Gérer mon compte (modifier infos / supprimer mon compte)
- **En tant que** utilisateur connecté
- **Je veux** modifier mes informations et pouvoir supprimer mon compte
- **Afin de** contrôler mon profil et mes données
- **Priorité :** Haute
- **Critères d’acceptation**
  - **Quand** je modifie mes infos (nom public, bio, liens sociaux, etc.)
  - **Alors** les changements sont enregistrés et affichés
  - **Quand** je demande à changer mon mot de passe
  - **Alors** une confirmation est demandée et les règles de sécurité s’appliquent
  - **Quand** je demande la suppression du compte
  - **Alors** une confirmation explicite est demandée et je reçois une confirmation de l’opération

### US4 — Admin : gérer les utilisateurs et les rôles
- **En tant que** administrateur
- **Je veux** voir, désactiver/supprimer des comptes et changer les rôles
- **Afin de** maintenir une plateforme saine et sécurisée
- **Priorité :** Haute
- **Critères d’acceptation**
  - Je peux lister les utilisateurs et rechercher (email/nom/rôle/statut)
  - Je peux désactiver un compte (l’utilisateur ne peut plus agir)
  - Je peux supprimer un compte (selon la politique de conservation/anonymisation)
  - Je peux attribuer des rôles : **public**, **registered**, **filmmaker**, **jury**, **moderator**, **admin**, **partner**
  - Les actions sensibles sont traçables (qui a fait quoi)

---

## Epic #2 — Onboarding Réalisateur & Soumission

### US1 — Passer de “registered” à “filmmaker”
- **En tant que** utilisateur “registered”
- **Je veux** devenir “filmmaker”
- **Afin de** pouvoir soumettre un film
- **Priorité :** Haute
- **Critères d’acceptation**
  - **Étant donné** que je suis connecté en “registered”
  - **Quand** je complète les informations demandées (ex : pays, nom d’affichage, optionnel : école/RS)
  - **Alors** mon statut devient “filmmaker” (immédiat ou après validation selon règle définie)
  - Mon statut est clairement affiché dans l’interface

### US2 — Soumettre un film
- **En tant que** filmmaker
- **Je veux** soumettre un court métrage
- **Afin de** participer au concours
- **Priorité :** Haute
- **Critères d’acceptation**
  - **Étant donné** que je suis connecté en filmmaker et que les soumissions sont ouvertes
  - **Quand** je renseigne titre + description + pays + fiche IA et je téléverse mon fichier vidéo
  - **Alors**
    - Ma soumission est enregistrée
    - Je vois une confirmation
    - Le film passe au statut **“En attente de modération”**
  - **Et** si le format / la taille / la durée ne respectent pas les règles, je vois une erreur claire

### US3 — Voir le temps restant avant la clôture des soumissions
- **En tant que** filmmaker
- **Je veux** connaître le temps restant pour soumettre
- **Afin de** ne pas rater la deadline
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Sur la page de soumission, je vois une indication claire : “Clôture dans X jours/heures”
  - Si la période est fermée, la soumission est désactivée et un message explique pourquoi

---

## Epic #3 — Vote, Notation & Classement

### US1 — Jury : noter un film
- **En tant que** membre du jury
- **Je veux** attribuer une note à un film
- **Afin de** contribuer au résultat final
- **Priorité :** Haute
- **Critères d’acceptation**
  - Je peux attribuer une note (ex : 1 à 10) sur un film éligible
  - Je vois une confirmation que mon vote est pris en compte
  - Mes votes sont visibles dans mon espace jury (historique)

### US2 — Jury : commenter / donner un retour
- **En tant que** membre du jury
- **Je veux** ajouter un commentaire
- **Afin de** justifier et aider à l’évaluation
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Je peux écrire un commentaire avec une limite de longueur
  - La visibilité du commentaire est respectée (privé jury/admin/modération ou public selon règle)

### US3 — Public : consulter le classement
- **En tant que** utilisateur public
- **Je veux** voir le classement des films
- **Afin de** suivre le concours
- **Priorité :** Haute
- **Critères d’acceptation**
  - Une page publique affiche le classement
  - Les films sont triés selon la règle définie (score/votes)
  - On voit au minimum : titre, créateur, pays (optionnel), score/votes
  - Le classement reste navigable même avec beaucoup de films (pagination / pages)

### US4 — Admin : sélectionner automatiquement les “Top 50 officiels”
- **En tant que** administrateur
- **Je veux** marquer les 50 meilleurs films comme “officiels”
- **Afin de** publier les finalistes
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Les “Top 50” sont calculés automatiquement selon les règles
  - Les films sélectionnés affichent un badge “Official”
  - Si une correction manuelle existe, elle est réservée aux admins et traçable

---

## Epic #4 — Rôles, Permissions & Modération

### US1 — Modérateur : valider / refuser une soumission
- **En tant que** modérateur
- **Je veux** approuver ou refuser les films en attente
- **Afin de** maintenir la qualité et le respect des règles
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Je vois la liste des films “en attente”
  - Je peux approuver ou refuser
  - En cas de refus, je dois indiquer un motif
  - Le réalisateur est informé de la décision

### US2 — Admin : gérer les partenaires et le contenu
- **En tant que** administrateur
- **Je veux** gérer les partenaires et retirer du contenu si nécessaire
- **Afin de** garantir fiabilité et conformité
- **Priorité :** Haute
- **Critères d’acceptation**
  - Je peux créer/mettre à jour une fiche partenaire (nom, logo, lien, description)
  - Je peux dépublier/retirer un film (avec motif)
  - Ces actions sont traçables

---

## Epic #5 — Fiche IA, Conformité & Statistiques

### US1 — Ajouter une fiche technique IA
- **En tant que** filmmaker
- **Je veux** renseigner les outils IA utilisés
- **Afin de** rendre la création transparente pour le public et le jury
- **Priorité :** Haute
- **Critères d’acceptation**
  - La fiche IA permet de renseigner :
    - Outils de scénario
    - Outils de génération d’images
    - Outils de montage / post-prod
  - Les champs ont des limites simples (longueur, format de lien si lien)
  - La fiche est affichée sur la page du film

### US2 — Vérifier la conformité copyright
- **En tant que** filmmaker
- **Je veux** que ma soumission soit vérifiée
- **Afin de** réduire les risques légaux avant publication
- **Priorité :** Haute
- **Critères d’acceptation**
  - Après soumission, le film reçoit un statut clair : “OK”, “À vérifier”, ou “Bloqué”
  - Si problème, je vois la raison et les étapes possibles (corriger / contacter / remplacer)

### US3 — Catalogue : filtrer et explorer les films
- **En tant que** utilisateur public
- **Je veux** filtrer et parcourir le catalogue
- **Afin de** trouver rapidement ce qui m’intéresse
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Je peux filtrer (ex : pays, langue, outils, officiel, popularité)
  - Je peux trier (ex : plus votés, plus récents)
  - Le catalogue reste confortable à naviguer (pages / chargement progressif)

### US4 — Voir des statistiques (Admin + Filmmaker)
- **En tant que** admin **ou** filmmaker
- **Je veux** consulter des statistiques d’engagement
- **Afin de** mesurer la performance des films / de la plateforme
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Admin : voit les statistiques globales
  - Filmmaker : voit les statistiques de **ses propres** films
  - Indicateurs possibles : vues, partages, votes, tendance (selon disponibilité)

### US5 — Admin : statistiques par pays
- **En tant que** admin
- **Je veux** voir les soumissions par pays
- **Afin de** mesurer la diversité géographique
- **Priorité :** Haute
- **Critères d’acceptation**
  - Un tableau ou graphique affiche le nombre de films par pays

### US6 — Admin : statistiques d’usage des outils IA
- **En tant que** admin
- **Je veux** voir les outils IA les plus utilisés
- **Afin de** comprendre les tendances techniques
- **Priorité :** Haute
- **Critères d’acceptation**
  - Je vois un classement par catégorie (scénario / image / post-prod)
  - Je peux consulter un top global

---

## Epic #6 — Notifications & Communication

### US1 — Être informé d’un changement de statut
- **En tant que** filmmaker
- **Je veux** être informé rapidement quand mon film est validé/refusé
- **Afin de** réagir sans attendre
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Quand le statut change, je reçois une notification dans l’application
  - En cas d’indisponibilité, je reçois une notification par email
  - En cas de refus, le motif est visible

### US2 — S’abonner à la newsletter
- **En tant que** utilisateur public
- **Je veux** m’abonner à la newsletter
- **Afin de** recevoir des nouveautés (festival, nouveaux films, actus)
- **Priorité :** Basse
- **Critères d’acceptation**
  - Je peux saisir mon email et valider
  - Je reçois une confirmation d’inscription
  - Je peux me désabonner facilement

---

## Epic #7 — Partage & Sponsoring

### US1 — Partager un film sur les réseaux
- **En tant que** utilisateur public
- **Je veux** partager un film
- **Afin de** promouvoir le concours et mes favoris
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Chaque film propose un bouton de partage
  - Le lien de partage renvoie vers la page du film
  - Le partage affiche un aperçu lisible (titre + image + description courte)

### US2 — Sponsoriser un film
- **En tant que** partenaire commercial
- **Je veux** sponsoriser un film
- **Afin de** gagner en visibilité pendant l’événement
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Je peux choisir un film et un format de sponsoring (selon offres)
  - Le film affiche un badge/branding sponsor (selon règles)
  - L’admin peut valider/retirer un sponsoring si nécessaire

---

## Epic #8 — Accessibilité & Inclusion

### US1 — Activer des options d’accessibilité
- **En tant que** utilisateur
- **Je veux** activer des options d’accessibilité
- **Afin de** utiliser la plateforme avec mes besoins
- **Priorité :** Haute
- **Critères d’acceptation**
  - Je peux activer un mode contraste élevé
  - Je peux naviguer au clavier
  - Les éléments clés sont lisibles par lecteur d’écran

### US2 — Sous-titres : ajouter et afficher
- **En tant que** filmmaker
- **Je veux** ajouter des sous-titres
- **Afin de** rendre mon film accessible
- **Priorité :** Moyenne
- **Critères d’acceptation**
  - Je peux téléverser un fichier de sous-titres (formats supportés définis)
  - Le lecteur permet d’activer/désactiver les sous-titres

---

## Epic #9 — Programme, Tables rondes, Workshops & Réservations

### US1 — Consulter une agenda interactif (festival + tables rondes + workshops)
- **En tant que** utilisateur public
- **Je veux** consulter l’agenda
- **Afin de** planifier ma participation
- **Priorité :** Basse
- **Critères d’acceptation**
  - L’agenda inclut : projections, tables rondes, workshops, cérémonie de clôture
  - Chaque événement affiche : date/heure, lieu, intervenants, capacité (si applicable)
  - Je peux filtrer par type d’événement et par jour
  - Je peux ouvrir une page détail d’un événement

### US2 — Réserver une place (workshops + clôture)
- **En tant que** utilisateur public
- **Je veux** réserver une place
- **Afin de** participer aux workshops et à la clôture
- **Priorité :** Basse
- **Critères d’acceptation**
  - Je peux réserver si des places sont disponibles
  - Je reçois une confirmation de réservation
  - Je peux consulter et annuler ma réservation (selon règles)

### US3 — Donner un feedback après un événement
- **En tant que** participant
- **Je veux** donner mon avis
- **Afin de** aider l’organisation à s’améliorer
- **Priorité :** Basse
- **Critères d’acceptation**
  - Je peux noter et laisser un commentaire
  - L’admin peut consulter les retours

---

# 3) Annexe — Contraintes techniques & Non-fonctionnelles (NFR)

## Sécurité (NFR)
- Les mots de passe ne sont jamais stockés en clair (hash + règles de complexité).
- Protection contre tentatives répétées de connexion (limitation / temporisation).
- Gestion des rôles et permissions (accès admin/jury/modération).
- Traçabilité des actions sensibles (audit).

## Performance & Scalabilité (NFR)
- Pagination ou chargement progressif sur les listes (catalogue, classement).
- Diffusion vidéo optimisée (stockage adapté + distribution efficace).

## Notifications (NFR)
- Notifications “quasi temps réel” dans l’app (mécanisme technique au choix).
- Email en fallback si besoin.

## Partage & aperçu (NFR)
- Les liens partagés doivent générer un aperçu correct sur les réseaux (métadonnées/preview).

## Conformité & Données (NFR)
- Politique claire de conservation/suppression/anonymisation des comptes (RGPD).
- Workflow de conformité copyright (détection, statut, recours).

## Accessibilité & i18n (NFR)
- Objectif WCAG (structure, contrastes, clavier, lecteur d’écran).
- Interface multilingue (FR/EN au minimum), extensible.