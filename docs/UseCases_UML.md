```mermaid
classDiagram
class Utilisateur {
  +id : string
  +nom : string
  +email : string
  +motDePasse : string
  +sEnregistrer()
  +seConnecter()
  +parcourirVideos()
  +partagerVideos()
}

class Administrateur {
  +id : string
  +nom : string
  +gererComptesUtilisateurs()
  +modererContenu()
}

class Moderateur {
  +id : string
  +nom : string
  +examinerVideos()
  +approuverVideos()
}

class Jury {
  +id : string
  +nom : string
  +voterPourVideos()
  +commenterVideos()
}

class PartenaireCommercial {
  +id : string
  +nom : string
  +sponsoriserVideos()
  +consulterStatistiques()
}

Utilisateur <|-- Administrateur
Utilisateur <|-- Moderateur
Utilisateur <|-- Jury
Utilisateur <|-- PartenaireCommercial
```