# Diagrammes UML - Festival Mars AI

## Diagramme de Classes des Acteurs

```mermaid
classDiagram
    class User {
        +id: string
        +nom: string
        +email: string
        +password: string
        +role: UserRole
        +register()
        +login()
        +logout()
        +updateProfile()
        +deleteAccount()
    }

    class Filmmaker {
        +submitFilm()
        +addAITechnicalSheet()
        +addSubtitles()
        +viewMyFilmStats()
    }

    class Jury {
        +rateFilm()
        +commentFilm()
        +viewFilmsToRate()
        +viewMyVotes()
    }

    class Moderator {
        +reviewFilm()
        +approveFilm()
        +rejectFilm()
        +checkCopyright()
    }

    class Admin {
        +manageUsers()
        +manageRoles()
        +managePartners()
        +viewGlobalStats()
        +selectTop50()
        +configureSystem()
        +viewLogs()
    }

    class Partner {
        +sponsorFilm()
        +viewSponsorStats()
    }

    class Film {
        +id: string
        +title: string
        +description: string
        +status: VideoStatus
        +type: VideoType
        +submissionDate: Date
        +submit()
        +approve()
        +reject()
        +addToTop50()
    }

    class Vote {
        +id: string
        +rating: number
        +comment: string
        +filmId: string
        +juryId: string
        +submitVote()
    }

    class Notification {
        +id: string
        +type: NotificationType
        +message: string
        +userId: string
        +send()
    }

    User <|-- Filmmaker
    User <|-- Jury  
    User <|-- Moderator
    User <|-- Admin
    User <|-- Partner

    Filmmaker "1" --> "*" Film : submits
    Jury "1" --> "*" Vote : creates
    Film "1" --> "*" Vote : receives
    User "1" --> "*" Notification : receives
    Moderator "1" --> "*" Film : reviews
    Admin "1" --> "*" User : manages
```

## Contraintes et Relations

### Relations principales :
- **Héritage** : Filmmaker, Jury, Moderator, Admin, Partner héritent de User
- **Composition** : Un Film peut avoir plusieurs Votes
- **Association** : Un Jury peut voter pour plusieurs Films
- **Dépendance** : Les Notifications dépendent des actions sur les Films

### Contraintes métier :
- Un Jury ne peut voter qu'une fois par Film
- Seuls les Films avec statut APPROVED peuvent recevoir des votes
- Les Films doivent passer la modération avant publication
- Seuls les Admins peuvent sélectionner le Top 50
- Les statistiques ne sont visibles qu'aux rôles autorisés
