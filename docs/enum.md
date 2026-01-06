# Enums du Projet

## Rôles Utilisateurs
```typescript
enum RoleUtilisateur {
  UTILISATEUR = "Utilisateur",
  ADMINISTRATEUR = "Administrateur",
  MODERATEUR = "Modérateur",
  JURY = "Jury",
  PARTENAIRE_COMMERCIAL = "PartenaireCommercial"
}
```

## Statuts Vidéo
```typescript
enum StatutVideo {
  EN_ATTENTE = "En attente",
  APPROUVEE = "Approuvée",
  REJETEE = "Rejetée"
}
```

## Types de Notifications
```typescript
enum TypeNotification {
  VALIDATION_VIDEO = "Validation de vidéo",
  NOUVELLE_VIDEO = "Nouvelle vidéo",
  MISE_A_JOUR_RANKING = "Mise à jour du classement"
}
```

## Langues Disponibles
```typescript
enum Langue {
  FRANCAIS = "Français",
  ANGLAIS = "Anglais"
}
```