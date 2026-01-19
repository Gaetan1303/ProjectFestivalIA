# Enums du Projet

## Rôles Utilisateurs
```typescript
enum Role {
  VISITOR = "Visitor",
  ADMIN = "Admin",
  COMITE = "Comite",
  JURY = "Jury",
  DIRECTOR = "Director"
}
```

## Statuts Utilisateurs
```typescript
enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED"
}
```

## Statuts Film
```typescript
enum FilmStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  MODERATION = "Moderation"
}
```

## Format Film
```typescript
enum FilmFormat {
  FORMAT_16_9 = "16:9"
}
```

## Type de Film
```typescript
enum FilmType {
  HYBRID = "Hybrid",
  FULLY_AI_GENERATED = "Fully AI-generated"
}
```

## Types de Notifications
```typescript
enum NotificationType {
  VIDEO_VALIDATION = "Video validation",
  NEW_VIDEO = "New video",
  RANKING_UPDATE = "Ranking update",
  WORKSHOP_REMINDER = "Workshop reminder",
  GENERAL = "General"
}
```
## Types de Commentaire
```typescript
enum CommentType {
  COMMENTAIRE = "Commentaire",
  NOTE = "Note",
  TECHNIQUE = "Technique",
  AUTRE = "Autre"
}
```
## Types de Sélection
```typescript
enum SelectionType {
  OFFICIELLE = "Officielle",
  HORS_COMPETITION = "Hors_competition",
  AUTRE = "Autre"
}
```

## Langues Disponibles
```typescript
enum Language {
  FRENCH = "French",
  ENGLISH = "English"
}
```

## Statuts Workshop
```typescript
enum WorkshopStatus {
  OUVERT = "Ouvert",
  COMPLET = "Complet",
  ANNULE = "Annulé",
  TERMINE = "Terminé"
}
```

## Statuts Conférence
```typescript
enum ConferenceStatus {
  PROGRAMMEE = "Programmée",
  EN_COURS = "En cours",
  TERMINEE = "Terminée",
  ANNULEE = "Annulée"
}
```

## Types de Partenaires
```typescript
enum PartenaireType {
  SPONSOR_OR = "Sponsor Or",
  SPONSOR_ARGENT = "Sponsor Argent",
  SPONSOR_BRONZE = "Sponsor Bronze",
  PARTENAIRE_MEDIA = "Partenaire Média",
  PARTENAIRE_TECHNIQUE = "Partenaire Technique"
}
```

## Statuts Inscription Workshop
```typescript
enum InscriptionStatus {
  CONFIRMEE = "Confirmée",
  EN_ATTENTE = "En attente",
  ANNULEE = "Annulée"
}
```