# Enums du Projet

## Rôles Utilisateurs
```typescript
enum UserRole {
  USER = "User",
  ADMINISTRATOR = "Administrator",
  MODERATOR = "Moderator",
  JURY = "Jury",
  COMMERCIAL_PARTNER = "CommercialPartner"
}
```

## Statuts Utilisateurs
```typescript
enum UserStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  SUSPENDED = "Suspended"
}
```

## Statuts Vidéo
```typescript
enum VideoStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  MODERATION = "Moderation"
}
```

## Type de Vidéo
```typescript
enum VideoType {
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