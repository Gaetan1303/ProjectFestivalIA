# DTO — Exemples de payloads (Back-End → Front-End)

Ce document liste, **pour chaque route back-end** mentionnée dans le cahier des charges, un exemple de DTO :
- **Request** : ce que le front envoie (si applicable)
- **Response** : ce que le back renvoie au front

Règles :
- Valeurs volontairement **vides** ("", 0, false, null, []), pour visualiser les colonnes/champs.
- Dates au format ISO 8601 (string) : `"2026-01-08"` ou `"2026-01-08T12:34:56Z"`.
- Certains endpoints listés dans le cahier des charges ne sont **pas** dans le MCD (ex: comments, settings). Ils sont marqués **(hors MCD)** avec un DTO minimal.

---

## DTO de base (références)

### UserDTO (sans mot de passe)
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

### CategoryDTO
```json
{
	"id": 0,
	"nom": "",
	"description": "",
	"dateCreation": "",
	"actif": false
}
```

### LanguageDTO
```json
{
	"code": "",
	"name": "",
	"actif": false
}
```

### ThumbnailDTO
```json
{
	"id": 0,
	"path": "",
	"uploadedAt": "",
	"video_id": 0,
	"user_id": 0
}
```

### AiToolDTO
```json
{
	"id": 0,
	"name": "",
	"status": "",
	"createdAt": "",
	"created_by_user_id": 0
}
```

### VideoDTO
```json
{
	"id": 0,
	"title": "",
	"description": "",
	"status": "",
	"path": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"nbVues": 0,
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	},
	"realisateurReferent": false,
	"type": "",
	"submissionDate": "",
	"dateValidation": "",
	"user_id": 0,
	"categorie_id": 0,
	"language_code": "",
	"thumbnail": null
}
```

### VoteDTO
```json
{
	"id": 0,
	"score": 0,
	"commentairePrive": "",
	"dateVote": "",
	"video_id": 0,
	"user_id": 0
}
```

### NotificationDTO
```json
{
	"id": 0,
	"type": "",
	"titre": "",
	"message": "",
	"createdAt": "",
	"lu": false,
	"user_id": 0
}
```

### WorkshopDTO
```json
{
	"id": 0,
	"titre": "",
	"description": "",
	"dateDebut": "",
	"dateFin": "",
	"lieu": "",
	"capaciteMax": 0,
	"prix": 0,
	"statut": ""
}
```

### ConferenceDTO
```json
{
	"id": 0,
	"titre": "",
	"description": "",
	"dateDebut": "",
	"dateFin": "",
	"lieu": "",
	"intervenant": "",
	"statut": ""
}
```

### PartenaireDTO
```json
{
	"id": 0,
	"nom": "",
	"logo": "",
	"description": "",
	"siteWeb": "",
	"type": "",
	"actif": false
}
```

### InscriptionWorkshopDTO
```json
{
	"id": 0,
	"dateInscription": "",
	"statut": "",
	"workshop_id": 0,
	"user_id": 0
}
```

---

## Authentification

### POST /api/v1/auth/register
**Request**
```json
{
	"name": "",
	"surname": "",
	"email": "",
	"password": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false
}
```

**Response (201)**
```json
{
	"user": {
		"id": 0,
		"name": "",
		"surname": "",
		"email": "",
		"dateNaissance": "",
		"biographie": "",
		"ecole": "",
		"reseauxSociaux": {
			"instagram": "",
			"x": "",
			"tiktok": "",
			"youtube": "",
			"website": ""
		},
		"portfolio": "",
		"accepteCGU": false,
		"dateInscription": "",
		"statut": "",
		"role": ""
	}
}
```

### POST /api/v1/auth/login
**Request**
```json
{
	"email": "",
	"password": ""
}
```

**Response (200)**
```json
{
	"accessToken": "",
	"user": {
		"id": 0,
		"name": "",
		"surname": "",
		"email": "",
		"dateNaissance": "",
		"biographie": "",
		"ecole": "",
		"reseauxSociaux": {
			"instagram": "",
			"x": "",
			"tiktok": "",
			"youtube": "",
			"website": ""
		},
		"portfolio": "",
		"accepteCGU": false,
		"dateInscription": "",
		"statut": "",
		"role": ""
	}
}
```

### GET /api/v1/auth/logout
**Response (200)**
```json
{
	"success": false
}
```

---

## Utilisateurs

### GET /api/v1/users/:limit/:offset
**Response (200)**
```json
[
	{
		"id": 0,
		"name": "",
		"surname": "",
		"email": "",
		"dateNaissance": "",
		"biographie": "",
		"ecole": "",
		"reseauxSociaux": {
			"instagram": "",
			"x": "",
			"tiktok": "",
			"youtube": "",
			"website": ""
		},
		"portfolio": "",
		"accepteCGU": false,
		"dateInscription": "",
		"statut": "",
		"role": ""
	}
]
```

### GET /api/v1/users/:id
**Response (200)**
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

### PUT /api/v1/users/:id
**Request**
```json
{
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"statut": "",
	"role": ""
}
```

**Response (200)**
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

### DELETE /api/v1/users/:id
**Response (200)**
```json
{
	"success": false
}
```

### GET /api/v1/users/me
**Response (200)**
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

### PUT /api/v1/users/me
**Request**
```json
{
	"name": "",
	"surname": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": ""
}
```

**Response (200)**
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

---

## Vidéos

### POST /api/v1/videos
**Request**
```json
{
	"title": "",
	"description": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"realisateurReferent": false,
	"type": "",
	"categorie_id": 0,
	"language_code": "",
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	}
}
```

**Response (201)**
```json
{
	"id": 0,
	"title": "",
	"description": "",
	"status": "",
	"path": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"nbVues": 0,
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	},
	"realisateurReferent": false,
	"type": "",
	"submissionDate": "",
	"dateValidation": "",
	"user_id": 0,
	"categorie_id": 0,
	"language_code": "",
	"thumbnail": null
}
```

### GET /api/v1/videos/:limit/:offset
**Response (200)**
```json
[
	{
		"id": 0,
		"title": "",
		"description": "",
		"status": "",
		"path": "",
		"urlYoutube": "",
		"poster": "",
		"duree": 0,
		"nbVues": 0,
		"outilsIA": {
			"scenario": [""],
			"generation": [""],
			"postProduction": [""],
			"autres": [""],
			"details": ""
		},
		"realisateurReferent": false,
		"type": "",
		"submissionDate": "",
		"dateValidation": "",
		"user_id": 0,
		"categorie_id": 0,
		"language_code": "",
		"thumbnail": null
	}
]
```

### GET /api/v1/videos/:id
**Response (200)**
```json
{
	"id": 0,
	"title": "",
	"description": "",
	"status": "",
	"path": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"nbVues": 0,
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	},
	"realisateurReferent": false,
	"type": "",
	"submissionDate": "",
	"dateValidation": "",
	"user_id": 0,
	"categorie_id": 0,
	"language_code": "",
	"thumbnail": null
}
```

### PUT /api/v1/videos/:id
**Request**
```json
{
	"title": "",
	"description": "",
	"status": "",
	"path": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"realisateurReferent": false,
	"type": "",
	"categorie_id": 0,
	"language_code": "",
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	}
}
```

**Response (200)**
```json
{
	"id": 0,
	"title": "",
	"description": "",
	"status": "",
	"path": "",
	"urlYoutube": "",
	"poster": "",
	"duree": 0,
	"nbVues": 0,
	"outilsIA": {
		"scenario": [""],
		"generation": [""],
		"postProduction": [""],
		"autres": [""],
		"details": ""
	},
	"realisateurReferent": false,
	"type": "",
	"submissionDate": "",
	"dateValidation": "",
	"user_id": 0,
	"categorie_id": 0,
	"language_code": "",
	"thumbnail": null
}
```

### DELETE /api/v1/videos/:id
**Response (200)**
```json
{
	"success": false
}
```

### PATCH /api/v1/videos/:id/status
**Request**
```json
{
	"status": ""
}
```

**Response (200)**
```json
{
	"id": 0,
	"status": "",
	"dateValidation": ""
}
```

### POST /api/v1/videos/:id/views
**Request**
```json
{}
```

**Response (200)**
```json
{
	"videoId": 0,
	"nbVues": 0
}
```

### GET /api/v1/videos/:id/analytics
**Response (200)**
```json
{
	"videoId": 0,
	"nbVues": 0,
	"votesCount": 0,
	"averageScore": 0
}
```

---

## Votes & Jury

### POST /api/v1/votes
**Request**
```json
{
	"video_id": 0,
	"score": 0,
	"commentairePrive": ""
}
```

**Response (201)**
```json
{
	"id": 0,
	"score": 0,
	"commentairePrive": "",
	"dateVote": "",
	"video_id": 0,
	"user_id": 0
}
```

### GET /api/v1/jury/videos/:limit/:offset
**Response (200)**
```json
[
	{
		"id": 0,
		"title": "",
		"description": "",
		"status": "",
		"path": "",
		"urlYoutube": "",
		"poster": "",
		"duree": 0,
		"nbVues": 0,
		"outilsIA": {
			"scenario": [""],
			"generation": [""],
			"postProduction": [""],
			"autres": [""],
			"details": ""
		},
		"realisateurReferent": false,
		"type": "",
		"submissionDate": "",
		"dateValidation": "",
		"user_id": 0,
		"categorie_id": 0,
		"language_code": "",
		"thumbnail": null,
		"alreadyVoted": false
	}
]
```

### POST /api/v1/jury/videos/:id/rate
**Request**
```json
{
	"score": 0,
	"commentairePrive": ""
}
```

**Response (201)**
```json
{
	"id": 0,
	"score": 0,
	"commentairePrive": "",
	"dateVote": "",
	"video_id": 0,
	"user_id": 0
}
```

### GET /api/v1/jury/my-ratings/:limit/:offset
**Response (200)**
```json
[
	{
		"id": 0,
		"score": 0,
		"commentairePrive": "",
		"dateVote": "",
		"video_id": 0,
		"user_id": 0
	}
]
```

---

## Analytics & Classement

### GET /api/v1/analytics/videos
**Response (200)**
```json
[
	{
		"videoId": 0,
		"nbVues": 0,
		"votesCount": 0,
		"averageScore": 0
	}
]
```

### GET /api/v1/analytics/users
**Response (200)**
```json
{
	"usersCount": 0,
	"newUsersToday": 0
}
```

### GET /api/v1/analytics/dashboard
**Response (200)**
```json
{
	"usersCount": 0,
	"videosCount": 0,
	"votesCount": 0,
	"topAiTools": [
		{
			"aiToolId": 0,
			"name": "",
			"usageCount": 0
		}
	]
}
```

### GET /api/v1/ranking/:limit/:offset
**Response (200)**
```json
[
	{
		"rank": 0,
		"averageScore": 0,
		"votesCount": 0,
		"video": {
			"id": 0,
			"title": "",
			"description": "",
			"status": "",
			"path": "",
			"urlYoutube": "",
			"poster": "",
			"duree": 0,
			"nbVues": 0,
			"outilsIA": {
				"scenario": [""],
				"generation": [""],
				"postProduction": [""],
				"autres": [""],
				"details": ""
			},
			"realisateurReferent": false,
			"type": "",
			"submissionDate": "",
			"dateValidation": "",
			"user_id": 0,
			"categorie_id": 0,
			"language_code": "",
			"thumbnail": null
		}
	}
]
```

### GET /api/v1/ranking/top50
**Response (200)**
```json
[
	{
		"rank": 0,
		"averageScore": 0,
		"votesCount": 0,
		"video": {
			"id": 0,
			"title": "",
			"description": "",
			"status": "",
			"path": "",
			"urlYoutube": "",
			"poster": "",
			"duree": 0,
			"nbVues": 0,
			"outilsIA": {
				"scenario": [""],
				"generation": [""],
				"postProduction": [""],
				"autres": [""],
				"details": ""
			},
			"realisateurReferent": false,
			"type": "",
			"submissionDate": "",
			"dateValidation": "",
			"user_id": 0,
			"categorie_id": 0,
			"language_code": "",
			"thumbnail": null
		}
	}
]
```

---

## Notifications (routes non versionnées)

### GET /notifications
**Response (200)**
```json
[
	{
		"id": 0,
		"type": "",
		"titre": "",
		"message": "",
		"createdAt": "",
		"lu": false,
		"user_id": 0
	}
]
```

### POST /notifications
**Request**
```json
{
	"type": "",
	"titre": "",
	"message": "",
	"user_id": 0
}
```

**Response (201)**
```json
{
	"id": 0,
	"type": "",
	"titre": "",
	"message": "",
	"createdAt": "",
	"lu": false,
	"user_id": 0
}
```

---

## Langues (routes non versionnées)

### GET /languages
**Response (200)**
```json
[
	{
		"code": "",
		"name": "",
		"actif": false
	}
]
```

---

## Admin (routes non versionnées)

### GET /admin/users
**Response (200)**
```json
[
	{
		"id": 0,
		"name": "",
		"surname": "",
		"email": "",
		"dateNaissance": "",
		"biographie": "",
		"ecole": "",
		"reseauxSociaux": {
			"instagram": "",
			"x": "",
			"tiktok": "",
			"youtube": "",
			"website": ""
		},
		"portfolio": "",
		"accepteCGU": false,
		"dateInscription": "",
		"statut": "",
		"role": ""
	}
]
```

### GET /admin/videos
**Response (200)**
```json
[
	{
		"id": 0,
		"title": "",
		"description": "",
		"status": "",
		"path": "",
		"urlYoutube": "",
		"poster": "",
		"duree": 0,
		"nbVues": 0,
		"outilsIA": {
			"scenario": [""],
			"generation": [""],
			"postProduction": [""],
			"autres": [""],
			"details": ""
		},
		"realisateurReferent": false,
		"type": "",
		"submissionDate": "",
		"dateValidation": "",
		"user_id": 0,
		"categorie_id": 0,
		"language_code": "",
		"thumbnail": null
	}
]
```

### GET /admin/reports (hors MCD)
**Response (200)**
```json
{
	"generatedAt": "",
	"items": [
		{
			"type": "",
			"message": "",
			"createdAt": ""
		}
	]
}
```

### POST /admin/sponsor
**Request**
```json
{
	"nom": "",
	"logo": "",
	"description": "",
	"siteWeb": "",
	"type": "",
	"actif": false
}
```

**Response (201)**
```json
{
	"id": 0,
	"nom": "",
	"logo": "",
	"description": "",
	"siteWeb": "",
	"type": "",
	"actif": false
}
```

### DELETE /admin/sponsor/:id
**Response (200)**
```json
{
	"success": false
}
```

### GET /admin/settings (hors MCD)
**Response (200)**
```json
{
	"settings": {
		"submissionOpen": false,
		"submissionDeadline": "",
		"supportedLanguages": [""],
		"maintenanceMode": false
	}
}
```

### PUT /admin/settings (hors MCD)
**Request**
```json
{
	"settings": {
		"submissionOpen": false,
		"submissionDeadline": "",
		"supportedLanguages": [""],
		"maintenanceMode": false
	}
}
```

**Response (200)**
```json
{
	"settings": {
		"submissionOpen": false,
		"submissionDeadline": "",
		"supportedLanguages": [""],
		"maintenanceMode": false
	}
}
```

---

## Jury (routes non versionnées)

### GET /jury/videos
**Response (200)**
```json
[
	{
		"id": 0,
		"title": "",
		"description": "",
		"status": "",
		"path": "",
		"urlYoutube": "",
		"poster": "",
		"duree": 0,
		"nbVues": 0,
		"outilsIA": {
			"scenario": [""],
			"generation": [""],
			"postProduction": [""],
			"autres": [""],
			"details": ""
		},
		"realisateurReferent": false,
		"type": "",
		"submissionDate": "",
		"dateValidation": "",
		"user_id": 0,
		"categorie_id": 0,
		"language_code": "",
		"thumbnail": null
	}
]
```

### POST /jury/notes
**Request**
```json
{
	"video_id": 0,
	"score": 0,
	"commentairePrive": ""
}
```

**Response (201)**
```json
{
	"id": 0,
	"score": 0,
	"commentairePrive": "",
	"dateVote": "",
	"video_id": 0,
	"user_id": 0
}
```

---

## Sponsors (routes non versionnées)

### GET /sponsors
**Response (200)**
```json
[
	{
		"id": 0,
		"nom": "",
		"logo": "",
		"description": "",
		"siteWeb": "",
		"type": "",
		"actif": false
	}
]
```

---

## Classement (routes non versionnées)

### GET /ranking
**Response (200)**
```json
[
	{
		"rank": 0,
		"averageScore": 0,
		"votesCount": 0,
		"videoId": 0
	}
]
```

---

## Comments (hors MCD) — (⚠️ incohérent avec "pas de commentaire public" côté front)

### GET /comments/:videoId
**Response (200)**
```json
[
	{
		"id": 0,
		"videoId": 0,
		"userId": 0,
		"content": "",
		"createdAt": ""
	}
]
```

### POST /comments
**Request**
```json
{
	"videoId": 0,
	"content": ""
}
```

**Response (201)**
```json
{
	"id": 0,
	"videoId": 0,
	"userId": 0,
	"content": "",
	"createdAt": ""
}
```

---

## Settings utilisateur (hors MCD)

### GET /settings/:userId
**Response (200)**
```json
{
	"userId": 0,
	"language": "",
	"emailNotifications": false
}
```

### PUT /settings/:userId
**Request**
```json
{
	"language": "",
	"emailNotifications": false
}
```

**Response (200)**
```json
{
	"userId": 0,
	"language": "",
	"emailNotifications": false
}
```

---

## Social share (hors MCD)

### GET /social-share/:videoId
**Response (200)**
```json
{
	"videoId": 0,
	"urls": {
		"facebook": "",
		"x": "",
		"linkedin": "",
		"copy": ""
	}
}
```

### POST /social-share/log
**Request**
```json
{
	"videoId": 0,
	"platform": "",
	"sharedAt": ""
}
```

**Response (201)**
```json
{
	"success": false
}
```

---

## Notations (routes non versionnées)

### GET /notations/:userId
**Response (200)**
```json
[
	{
		"id": 0,
		"score": 0,
		"commentairePrive": "",
		"dateVote": "",
		"video_id": 0,
		"user_id": 0
	}
]
```

---

## Catégories (routes non versionnées)

### GET /categories
**Response (200)**
```json
[
	{
		"id": 0,
		"nom": "",
		"description": "",
		"dateCreation": "",
		"actif": false
	}
]
```

---

## Workshops & Conférences

### GET /workshops
**Response (200)**
```json
[
	{
		"id": 0,
		"titre": "",
		"description": "",
		"dateDebut": "",
		"dateFin": "",
		"lieu": "",
		"capaciteMax": 0,
		"prix": 0,
		"statut": ""
	}
]
```

### POST /workshops/register
**Request**
```json
{
	"workshop_id": 0
}
```

**Response (201)**
```json
{
	"id": 0,
	"dateInscription": "",
	"statut": "",
	"workshop_id": 0,
	"user_id": 0
}
```

### GET /conferences
**Response (200)**
```json
[
	{
		"id": 0,
		"titre": "",
		"description": "",
		"dateDebut": "",
		"dateFin": "",
		"lieu": "",
		"intervenant": "",
		"statut": ""
	}
]
```

### GET /calendar/events (hors MCD)
**Response (200)**
```json
[
	{
		"type": "",
		"id": 0,
		"titre": "",
		"description": "",
		"dateDebut": "",
		"dateFin": "",
		"lieu": ""
	}
]
```

---

## Contenus statiques (hors MCD)

### GET /faq
**Response (200)**
```json
{
	"items": [
		{
			"question": "",
			"answer": ""
		}
	]
}
```

### GET /terms
**Response (200)**
```json
{
	"content": "",
	"updatedAt": ""
}
```

### GET /privacy
**Response (200)**
```json
{
	"content": "",
	"updatedAt": ""
}
```

---

## Onboarding / Profil avancé (hors MCD)

### GET /onboarding/:userId
**Response (200)**
```json
{
	"userId": 0,
	"steps": [
		{
			"key": "",
			"title": "",
			"done": false
		}
	]
}
```

### PUT /profile/edit/:userId
**Request**
```json
{
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": ""
}
```

**Response (200)**
```json
{
	"id": 0,
	"name": "",
	"surname": "",
	"email": "",
	"dateNaissance": "",
	"biographie": "",
	"ecole": "",
	"reseauxSociaux": {
		"instagram": "",
		"x": "",
		"tiktok": "",
		"youtube": "",
		"website": ""
	},
	"portfolio": "",
	"accepteCGU": false,
	"dateInscription": "",
	"statut": "",
	"role": ""
}
```

---

## RSS (hors MCD)

### GET /RSS
**Response (200)**
```json
{
	"xml": ""
}
```

---

## Admin (routes non versionnées) — Ops (hors MCD)

### GET /admin/logs
**Response (200)**
```json
[
	{
		"level": "",
		"message": "",
		"createdAt": ""
	}
]
```

### GET /admin/metrics
**Response (200)**
```json
{
	"uptimeSeconds": 0,
	"requestsPerMinute": 0,
	"avgLatencyMs": 0
}
```

### POST /admin/backup
**Request**
```json
{}
```

**Response (201)**
```json
{
	"success": false,
	"backupId": "",
	"createdAt": ""
}
```

### GET /admin/restore
**Response (200)**
```json
{
	"success": false,
	"restoredAt": ""
}
```

### POST /admin/notifications/bulk
**Request**
```json
{
	"userIds": [0],
	"type": "",
	"titre": "",
	"message": ""
}
```

**Response (201)**
```json
{
	"sentCount": 0
}
```

### GET /admin/workshop
**Response (200)**
```json
[
	{
		"id": 0,
		"titre": "",
		"description": "",
		"dateDebut": "",
		"dateFin": "",
		"lieu": "",
		"capaciteMax": 0,
		"prix": 0,
		"statut": ""
	}
]
```

### GET /admin/conference
**Response (200)**
```json
[
	{
		"id": 0,
		"titre": "",
		"description": "",
		"dateDebut": "",
		"dateFin": "",
		"lieu": "",
		"intervenant": "",
		"statut": ""
	}
]
```

### GET /admin/analytics
**Response (200)**
```json
{
	"usersCount": 0,
	"videosCount": 0,
	"votesCount": 0
}
```
