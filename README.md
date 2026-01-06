# ProjectFestivalIA

## 1. Synopsis

### Description
Platform for uploading short films, sorting, and voting for the 50 official videos. The platform also involves commercial partners and social networks.

### Target Audience Need
- Upload, vote, sort, share, stream, and rank videos.

### Context
For the Short Film Festival of AI-generated short videos, taking place during the Mars IA Night in June 2026. The site hosts 1-minute AI videos with the theme of "desirable futures." The platform targets cultural creation professionals, students, and the general public.

It allows users to upload videos, vote for them, and display a ranking based on votes. The goal is also for the site to be shared on social networks.

---

## E.P.I.C

### Epic #1: User Account Management

#### User Story 1: Register and Log In
- **Acceptance Criteria:**
  - **Given:** The user is on the registration page and fills in all required fields (name, email, password).
  - **When:** The user submits the registration form.
  - **Then:** A confirmation email is sent, and the user can activate their account.

#### User Story 2: Manage User Accounts
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in and accesses the user management panel.
  - **When:** The administrator modifies, disables, or deletes a user account.
  - **Then:** The changes are saved, and a confirmation message is displayed.

#### User Story 3: Upload Videos
- **Acceptance Criteria:**
  - **Given:** The user is logged in and accesses the video upload page.
  - **When:** The user fills in the form with a title, description, and selects a video file.
  - **Then:** The video is submitted for validation, and an upload confirmation is displayed.

---

### Epic #2: Video Management

#### User Story 1: Upload Videos for Competition
- **Acceptance Criteria:**
  - **Given:** The user is logged in and accesses the video upload page.
  - **When:** The user fills in the form with a title, description, and selects a video file.
  - **Then:** The video is submitted for validation, and a confirmation message is displayed.

#### User Story 2: Moderate Videos
- **Acceptance Criteria:**
  - **Given:** The moderator is logged in and accesses the list of pending videos.
  - **When:** The moderator approves or rejects a video.
  - **Then:** The video is either published, or a rejection message is sent to the user.

---

### Epic #3: Security Management

#### User Story 1: Vote on Videos
- **Acceptance Criteria:**
  - **Given:** The jury member is logged in and accesses the voting page.
  - **When:** The jury member assigns a score to a video.
  - **Then:** The vote is recorded and reflected in the leaderboard.

#### User Story 2: Sponsor Videos
- **Acceptance Criteria:**
  - **Given:** The partner accesses the sponsorship section.
  - **When:** The partner selects a video and completes the sponsorship process.
  - **Then:** The sponsorship is confirmed, and the video displays the partner's branding.

---

## Use Case

### Title: Upload and Vote for Videos

#### Main Actors
- User
- Administrator
- Jury

#### Description
A user can upload a video, which will then go through a moderation process. Once validated, the video will be available for voting. Jury members and users can vote for the videos, and a ranking is automatically generated.

#### Preconditions
- The user must be registered and logged in.

#### Main Scenario
1. The user logs in.
2. They access the upload page and submit a video.
3. The administrator validates or rejects the video.
4. Validated videos are available for voting.
5. Users and juries vote.
6. A ranking is generated.

#### Extensions
- If the video is rejected, the user receives a notification with the rejection reasons.
- If a user reports a video, the administrator can remove it.

---

## MCD (Conceptual Data Model)

### Entities
- **User:** id, first name, last name, email, password, role.
- **Video:** id, title, description, thumbnail, path, status, user_id.
- **Vote:** id, user_id, video_id, score.
- **Report:** id, user_id, video_id, reason.

### Main Relationships
- A user can upload multiple videos.
- A video can receive multiple votes.
- A video can be reported multiple times.

---

## MLD (Logical Data Model)

The MLD translates the MCD into relational tables:

### User Table:
- id (primary key)
- first name
- last name
- email (unique)
- password
- role

### Video Table:
- id (primary key)
- title
- description
- thumbnail
- path
- status
- user_id (foreign key to User.id)

### Vote Table:
- id (primary key)
- user_id (foreign key to User.id)
- video_id (foreign key to Video.id)
- score

### Report Table:
- id (primary key)
- user_id (foreign key to User.id)
- video_id (foreign key to Video.id)
- reason

---

## 2. Client Front-end Specification

### Functional Specifications

This section describes the detailed functionalities of the project through user stories and epics. For each feature, make sure to include detailed validation constraints.

### Requirements
- Allow users to register, log in, and manage their accounts.
- Enable video uploading, voting, and sharing.
- Display a ranking of videos.
- Ensure smooth and intuitive navigation.

### User Stories

#### As a user, I want to register to access the platform's features.
- **Acceptance Criteria:**
  - The user can fill out a registration form with required fields (name, email, password).
  - A confirmation email is sent after registration.
  - The user can activate their account by clicking the link in the email.
  - Passwords are securely stored (hashed).
  - Registration errors (email already used, weak password, etc.) are handled and displayed clearly.

#### As a user, I want to log in to manage my account.
- **Acceptance Criteria:**
  - **Given:** The user is on the login page and enters their email and password.
  - **When:** The user submits the login form.
  - **Then:** The user is redirected to their dashboard on success or an error message is displayed on failure.

#### As an administrator, I want to manage user accounts to maintain security.
- **Acceptance Criteria:**
  - The administrator can access a list of all registered users.
  - The administrator can deactivate or delete user accounts.
  - The administrator can assign roles (user, admin, jury, moderator, visitor) to users.

#### As a user, I want to fill out the form to upload my video to participate in the contest.
- **Acceptance Criteria:**
  - The user can access a video upload form.
  - The form allows them to enter a title, description, and select a video file.
  - A confirmation is displayed after a successful upload.
  - Errors (unsupported format, excessive size, etc.) are displayed clearly.

#### As an administrator, I want to vote on videos (Jury) to select the best videos.
- **Acceptance Criteria:**
  - The administrator can access a list of videos to vote on.
  - Each video can receive a rating or vote.
  - Votes are recorded and considered in the ranking.

#### As an administrator, I want to rank videos based on votes to determine the top 50 official videos.
- **Acceptance Criteria:**
  - A ranking of videos is generated automatically based on votes.
  - The administrator can adjust the ranking manually if needed.
  - The top 50 videos with the most votes are marked as "official."

#### As a user, I want to see the video ranking to check the contest results.
- **Acceptance Criteria:**
  - A public page displays the video ranking.
  - Videos are sorted in descending order by votes.
  - Information displayed includes title, description, and number of votes.

#### As a user, I want to share videos on social networks to promote the contest.
- **Acceptance Criteria:**
  - Each video has a share button for social networks.
  - Supported social networks include Facebook, Twitter, and LinkedIn.
  - The share includes a link to the video and a personalized message.

#### As a user, I want to receive notifications about important updates regarding the contest.
- **Acceptance Criteria:**
  - Users receive email notifications for important announcements.
  - Notifications include information about new videos, rankings, and events.

### Non-Functional Specifications

### Routes
- `/signup`: Registration form.
- `/login`: Login page.
- `/upload`: Video upload form.
- `/ranking`: Video ranking display.
- `/admin`: Admin dashboard.

### Security Constraints
- Use HTTPS for all communications.
- Validate user inputs on both client and server.
- Protection against CSRF and XSS attacks.
- Manage sessions with secure cookies.

### Deployment
- Use Docker for containerization.
- Set up a CI/CD pipeline for automated deployments.
- Host on a cloud platform (e.g., Azure, AWS).

---

## 3. Client Backend Specifications

### Functional Specifications

### Requirements
- Manage users, videos, votes, and reports.
- Ensure content moderation.
- Provide secure endpoints for the front-end.

### Endpoints
- `POST /api/users`: Create a user.
- `POST /api/login`: Authentication.
- `POST /api/videos`: Video upload.
- `GET /api/videos`: List videos.
- `POST /api/votes`: Record a vote.
- `POST /api/reports`: Report a video.

### Constraints
- Validate incoming data.
- Handle errors with appropriate HTTP codes.
- Limit the number of requests per user (rate limiting).

### Non-Functional Specifications

### Security Constraints
- Authentication based on JWT tokens.
- Role-based access control (RBAC).
- Encrypt passwords with bcrypt.

### GDPR
- Anonymize sensitive data.
- Allow the deletion of personal data on request.

### Performance
- Support for 10,000 simultaneous users.
- Response time under 200ms for 95% of requests.