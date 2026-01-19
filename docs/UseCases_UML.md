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

    class Director {
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
        +viewMyNotes()
        +navigateBetweenFilms()
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
        +titre: string
        +description: text
        +duree: int
        +format: string
        +urlYoutube: string
        +sousTitres: string
        +chemin: string
        +dateSoumission: Date
        +user_id: string
        +candidature_id: string
        +submit()
        +approve()
        +reject()
        +addToTop50()
        +updateMetadata()
    }

    class Note {
        +id: string
        +note: int
        +film_id: string
        +user_id: string
        +created_at: Date
        +submitNote()
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

    User <|-- Director
    User <|-- Jury
    User <|-- Moderator
    User <|-- Admin
    User <|-- Partner

    Director "1" --> "*" Film : submits_multiple
    Category "1" --> "*" Film : contains
    Jury "1" --> "*" Note : creates_private
    Film "1" --> "*" Note : receives
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
- **Héritage** : Director, Jury, Moderator, Admin, Partner héritent de User
- **Composition** : Un Film peut avoir plusieurs Notes
- **Association** : Un Jury peut noter plusieurs Films
- **Dépendance** : Les Notifications dépendent des actions sur les Films

### Contraintes métier :
- **Seuls les Films approuvés peuvent recevoir des notes**
- **Les Films doivent passer la modération avant publication**
- **Seuls les Jurys peuvent noter les films** (rôle JURY requis)
- **Les statistiques ne sont visibles qu'aux rôles autorisés**
- **Un utilisateur peut soumettre plusieurs films** (suppression contrainte 1,1)
- **Les commentaires privés sont visibles uniquement par jury et admin**
- **L'acceptation des CGU est obligatoire** pour tous les utilisateurs
- **La date de naissance est requise** pour vérification d'âge
- **Seuls les utilisateurs avec rôle JURY peuvent noter**
- **Durée film ≤ 60 secondes**
- **Format vidéo 16:9 obligatoire**
- **Les catégories sont créées dynamiquement par l'admin**
- **Format vidéo : 16:9 horizontal, durée max 60 secondes**
- **Contrôle YouTube préalable obligatoire** pour vérification droits
