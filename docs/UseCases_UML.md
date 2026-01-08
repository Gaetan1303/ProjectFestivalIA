# Diagrammes UML - Festival Mars AI

## Diagramme de Classes des Acteurs

```mermaid
classDiagram
    class User {
        +id: string
        +nom: string
        +prenom: string
        +email: string
        +password: string
        +dateNaissance: Date
        +biographie: text
        +ecole: string
        +reseauxSociaux: JSON
        +portfolio: string
        +accepteCGU: boolean
        +dateInscription: Date
        +statut: UserStatus
        +role: UserRole
        +register()
        +login()
        +logout()
        +updateProfile()
        +deleteAccount()
        +verifyAge()
        +acceptTerms()
    }

    class Filmmaker {
        +submitMultipleFilms()
        +setRealisateurReferent()
        +addAITechnicalSheet()
        +addSubtitles()
        +viewMyFilmStats()
        +managePortfolio()
        +editFilmInfo()
    }

    class Jury {
        +rateFilm()
        +addPrivateComment()
        +viewFilmsToRate()
        +viewMyVotes()
        +navigateBetweenVideos()
        +viewEvaluationCriteria()
    }

    class Moderator {
        +reviewFilm()
        +approveFilm()
        +rejectFilm()
        +checkCopyright()
        +youtubePreCheck()
        +manageDepublication()
    }

    class Admin {
        +manageUsers()
        +manageRoles()
        +managePartners()
        +viewGlobalStats()
        +selectTop50()
        +configureSystem()
        +viewLogs()
        +createCategoriesDynamically()
        +manageEvaluationCriteria()
        +manageWorkshopsConferences()
        +sendBulkNotifications()
    }

    class Partner {
        +sponsorFilm()
        +viewSponsorStats()
        +managePartnerProfile()
    }

    class Category {
        +id: string
        +nom: string
        +description: text
        +dateCreation: Date
        +actif: boolean
        +create()
        +update()
        +activate()
        +deactivate()
    }

    class Workshop {
        +id: string
        +titre: string
        +description: text
        +dateDebut: Date
        +dateFin: Date
        +lieu: string
        +capaciteMax: number
        +prix: decimal
        +statut: WorkshopStatus
        +create()
        +register()
        +cancel()
    }

    class Conference {
        +id: string
        +titre: string
        +description: text
        +dateDebut: Date
        +dateFin: Date
        +lieu: string
        +intervenant: string
        +statut: ConferenceStatus
        +schedule()
        +start()
        +end()
    }

    class InscriptionWorkshop {
        +id: string
        +dateInscription: Date
        +statut: InscriptionStatus
        +userId: string
        +workshopId: string
        +register()
        +confirm()
        +cancel()
    }

    class Film {
        +id: string
        +title: string
        +description: string
        +status: VideoStatus
        +type: VideoType
        +submissionDate: Date
        +urlYoutube: string
        +poster: string
        +duree: number
        +nbVues: number
        +outilsIA: JSON
        +realisateurReferent: boolean
        +dateValidation: Date
        +categoryId: string
        +submit()
        +approve()
        +reject()
        +addToTop50()
        +incrementViews()
        +updateMetadata()
    }

    class Vote {
        +id: string
        +rating: number
        +commentairePrivé: string
        +dateVote: Date
        +filmId: string
        +juryId: string
        +submitVote()
        +updatePrivateComment()
    }

    class Notification {
        +id: string
        +type: NotificationType
        +titre: string
        +message: string
        +date: Date
        +lu: boolean
        +userId: string
        +send()
        +markAsRead()
        +sendBulk()
    }

    User <|-- Filmmaker
    User <|-- Jury  
    User <|-- Moderator
    User <|-- Admin
    User <|-- Partner

    Filmmaker "1" --> "*" Film : submits_multiple
    Category "1" --> "*" Film : contains
    Jury "1" --> "*" Vote : creates_private
    Film "1" --> "*" Vote : receives
    User "1" --> "*" Notification : receives
    Moderator "1" --> "*" Film : reviews
    Admin "1" --> "*" User : manages
    Admin "1" --> "*" Category : creates
    Admin "1" --> "*" Workshop : manages
    Admin "1" --> "*" Conference : manages
    Workshop "1" --> "*" InscriptionWorkshop : has_registrations
    User "1" --> "*" InscriptionWorkshop : registers_to
```

## Contraintes et Relations

### Relations principales :
- **Héritage** : Filmmaker, Jury, Moderator, Admin, Partner héritent de User
- **Composition** : Un Film peut avoir plusieurs Votes
- **Association** : Un Jury peut voter pour plusieurs Films
- **Dépendance** : Les Notifications dépendent des actions sur les Films

### Contraintes métier :
- **Seuls les Films avec statut APPROVED peuvent recevoir des votes**
- **Les Films doivent passer la modération avant publication**
- **Seuls les Jurys peuvent sélectionner le Top 50**
- **Les statistiques ne sont visibles qu'aux rôles autorisés**
- **Un réalisateur peut soumettre plusieurs films** (suppression contrainte 1,1)
- **Les commentaires de vote sont privés** (visibles uniquement par jury et admin)
- **L'acceptation des CGU est obligatoire** pour tous les utilisateurs
- **La date de naissance est requise** pour vérification d'âge
- **Seuls les utilisateurs avec rôle JURY peuvent voter**
- **Les catégories sont créées dynamiquement par l'admin**
- **Format vidéo : 16:9 horizontal, durée max 60 secondes**
- **Contrôle YouTube préalable obligatoire** pour vérification droits
