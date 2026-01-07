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

## Statuts Vidéo
```typescript
enum VideoStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected"
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
  RANKING_UPDATE = "Ranking update"
}
```

## Langues Disponibles
```typescript
enum Language {
  FRENCH = "French",
  ENGLISH = "English"
}
```