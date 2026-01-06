# ProjectFestivalIA — Functional Specifications (Corrected)

*Last updated: 2026-01-06*

## 1. Synopsis

### Description
ProjectFestivalIA is an innovative platform designed to host and manage a global short film competition. The platform enables users to upload, vote, and rank AI-generated short films, fostering creativity and collaboration.

### Objectives
- Empower filmmakers to showcase their AI-generated creations.
- Provide a seamless experience for users to discover, vote, and share videos.
- Facilitate a fair and transparent competition process with robust moderation and analytics tools.

### Context
The platform is developed for the **Mars IA Night**, a prestigious event celebrating AI-driven creativity. The competition features **1-minute short films** under the theme **“Desirable Futures”**, aiming to inspire global audiences. With participants from over **120 countries**, the platform aspires to collect **600+ films** and attract **3,000 visitors** to the physical event in Marseille.

### Key Features
- **Video Management:** Upload, moderate, and display videos with detailed AI technical sheets.
- **User Engagement:** Voting, ranking, and sharing functionalities to enhance participation.
- **Accessibility:** Multilingual interface and inclusive design for a global audience.
- **Advanced Analytics:** Real-time insights for administrators and creators to monitor performance.

---

## 2. EPICS & User Stories (Corrected)

> Notes applied:
> - Epic 1: added **Manage account** for all users (edit/delete), not only filmmakers.
> - Epic 2: added **Registered → Filmmaker** role upgrade story.
> - Epic 3: renamed (it wasn’t “Security Management”) and sponsorship moved to a better-fitting epic.
> - Epic 5: fixed the nonsensical “Given” (time left belongs to upload window story).
> - Epic 5 analytics: users (filmmakers) also see stats.
> - Epic 8: reduced duplicated/repeated issues.
> - Epic 9: agenda includes festival + round tables + workshops + reservations system (workshops + closing ceremony).

---

### Epic #1 — User Account Management

#### User Story 1 — Register & Email Verification
- **As a:** Visitor  
- **I want to:** Create an account  
- **So that:** I can access platform features  
- **Priority:** High  
- **Acceptance Criteria (with validation constraints):**
  - **Given:** I’m on the registration page  
  - **When:** I submit **name + email + password**  
  - **Then:**
    - Email format is valid and **unique**
    - Password matches strength rules (min length + at least one rule: uppercase/lowercase/number/symbol)
    - Account is created in **inactive** state
    - Verification email is sent with a **secure, time-limited token**
    - Clicking the link activates the account
    - Clear error messages are displayed (no sensitive info leaked)

#### User Story 2 — Log In / Log Out
- **As a:** Registered user  
- **I want to:** Log in and log out  
- **So that:** I can use my account securely  
- **Priority:** High  
- **Acceptance Criteria:**
  - Invalid credentials show a generic error (no indication if email exists)
  - Session/token uses secure storage (e.g., httpOnly cookie)
  - Basic brute-force protection exists (rate limiting / cooldown)
  - Logout invalidates the session/token

#### User Story 3 — Manage My Account (Edit / Delete)
- **As a:** Registered user  
- **I want to:** Edit my info and delete my account  
- **So that:** I can control my profile and data  
- **Priority:** High  
- **Acceptance Criteria:**
  - **Given:** I’m logged in and on **Account settings**
  - **When:** I update profile info (name, bio, socials, etc.)
  - **Then:** fields are validated (length limits, URL format), saved, and displayed
  - **When:** I change my password
  - **Then:** current password confirmation is required and strength rules apply
  - **When:** I request account deletion
  - **Then:** a confirmation step is required (password re-entry and/or email confirmation)
  - Deletion behavior is defined (hard delete vs anonymization) and compliant with GDPR

#### User Story 4 — Admin: Manage Users & Roles
- **As a:** Administrator  
- **I want to:** View/disable/delete users and change roles  
- **So that:** I can secure the platform  
- **Priority:** High  
- **Acceptance Criteria:**
  - List users with search/filter (email, role, status)
  - Disable user blocks login and actions
  - Role assignment supported: **public/visitor, registered, filmmaker, jury, moderator, admin, partner**
  - All actions are logged (audit trail: who/what/when)

---

### Epic #2 — Filmmaker Onboarding & Video Submission

#### User Story 1 — Upgrade Role: Registered → Filmmaker
- **As a:** Registered user  
- **I want to:** Become a filmmaker (réalisateur)  
- **So that:** I can submit films to the competition  
- **Priority:** High  
- **Acceptance Criteria:**
  - **Given:** I’m logged in as **registered**
  - **When:** I complete filmmaker requirements (e.g., country, display name, optional school/social links)
  - **Then:** my role becomes **filmmaker**
  - If approval is required: request status is shown and admin/moderator can approve/reject
  - UI shows my current role/status clearly

#### User Story 2 — Upload Video for Competition
- **As a:** Filmmaker  
- **I want to:** Upload a short film  
- **So that:** I can participate  
- **Priority:** High  
- **Acceptance Criteria (validation constraints):**
  - Filmmaker must be logged in
  - Required fields: **title, description, country**, and AI technical sheet (see Epic #5)
  - Allowed formats defined (e.g., mp4, mov) + max file size defined
  - Duration rule enforced (e.g., **≤ 60 seconds**)
  - After upload, video status is **Pending moderation**
  - Success confirmation is displayed; errors are user-friendly (format/size/duration)

#### User Story 3 — Submission Window Countdown (Moved here)
- **As a:** Filmmaker  
- **I want to:** See how much time is left to submit  
- **So that:** I don’t miss the deadline  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Submission window is configurable by admin (open/close dates)
  - Upload page displays countdown: “Submissions close in X days/hours”
  - If submissions are closed: upload is disabled and a clear message is displayed

---

### Epic #3 — Voting, Ranking & Jury Evaluation (Renamed)

#### User Story 1 — Vote on Videos
- **As a:** Jury member  
- **I want to:** Rate videos  
- **So that:** I can contribute to the competition results  
- **Priority:** High  
- **Acceptance Criteria:**
  - **Given:** Jury member is logged in and has access to the jury interface
  - **When:** Jury assigns a score (e.g., 1 to 10) to a video
  - **Then:** vote is recorded, cannot be duplicated (or can be updated depending on rule)
  - Leaderboard reflects the vote with correct aggregation

#### User Story 2 — Comment on Videos (Jury)
- **As a:** Jury member  
- **I want to:** Add comments/feedback  
- **So that:** I can justify evaluations  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Comment length limits exist
  - Comments are visible only to allowed roles (jury/admin/moderator) unless made public by rule

#### User Story 3 — Public Ranking Page
- **As a:** Public user  
- **I want to:** See the ranking  
- **So that:** I can follow the contest results  
- **Priority:** High  
- **Acceptance Criteria:**
  - Public page displays ranking (sorted by score/votes)
  - Each item shows: title, description snippet, creator, country (optional), total votes/score
  - Pagination enabled for large lists

#### User Story 4 — Admin: Mark Top 50 Official Videos
- **As a:** Administrator  
- **I want to:** Automatically rank and mark top 50 as “official”  
- **So that:** we can publish finalists  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - System generates ranking automatically
  - Admin can manually override with a controlled workflow (logged)
  - Top 50 gets “official” label and is visible in UI

---

### Epic #4 — Roles, Permissions & Moderation Workflows

#### User Story 1 — Moderator: Review Pending Videos
- **As a:** Moderator  
- **I want to:** Approve or reject uploaded videos  
- **So that:** content quality is maintained  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Moderator sees list of pending submissions
  - Can approve/reject with a reason
  - On approval: video becomes public (or jury-only, based on rule)
  - On rejection: filmmaker receives notification with reason

#### User Story 2 — Admin: Manage Partners & Content
- **As a:** Administrator  
- **I want to:** manage partners and remove content if needed  
- **So that:** platform remains reliable and compliant  
- **Priority:** High  
- **Acceptance Criteria:**
  - Can update partner profiles/logos/links
  - Can remove or unpublish content
  - All actions are logged

---

### Epic #5 — Advanced Video Metadata, Compliance & Analytics

#### User Story 1 — Include AI Technical Sheet
- **As a:** Filmmaker  
- **I want to:** Provide a detailed AI technical sheet  
- **So that:** tools used are transparent and displayed  
- **Priority:** High  
- **Acceptance Criteria:**
  - Technical sheet fields include:
    - Scenario tools (text/gen tools)
    - Image generation tools
    - Post-production tools
    - Optional: prompts/process notes (with moderation)
  - Validations: max length, optional URLs validated
  - Displayed on video page alongside the film

#### User Story 2 — Copyright Verification (YouTube API)
- **As a:** Filmmaker  
- **I want to:** Ensure my video respects copyright  
- **So that:** it can be published safely  
- **Priority:** High  
- **Acceptance Criteria:**
  - After upload, platform triggers a check (e.g., YouTube API / Content ID-related workflow)
  - Video is approved or flagged with status (e.g., “Copyright issue”)
  - Filmmaker sees the status and next steps

#### User Story 3 — Video Catalog: Pagination & Filters
- **As a:** Public user  
- **I want to:** Browse videos with pagination and filters  
- **So that:** I can find content easily  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Filters: country, language, tools used, status (official/others), popularity
  - Sorting: most voted, newest, trending
  - Pagination/infinite scroll with stable URLs (query params)

#### User Story 4 — Analytics Dashboard (Admin + Filmmakers)
- **As a:** Administrator **and** Filmmaker  
- **I want to:** See video analytics  
- **So that:** I can track engagement and performance  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Admin sees global metrics (platform-wide)
  - Filmmaker sees **their own** metrics only
  - Metrics include: views, shares, votes, watch time (if available), traffic sources (if available)
  - Data updates near real-time (or at defined intervals)

#### User Story 5 — Analytics: Submissions by Country (Admin)
- **As a:** Administrator  
- **I want to:** See submissions by country  
- **So that:** I can analyze diversity  
- **Priority:** High  
- **Acceptance Criteria:**
  - Chart displays count per country
  - Export option (CSV) available (optional)

#### User Story 6 — Analytics: AI Tools Usage (Admin)
- **As a:** Administrator  
- **I want to:** See the most used AI tools  
- **So that:** I can understand trends  
- **Priority:** High  
- **Acceptance Criteria:**
  - Breakdown by category: scenario / image gen / post-production
  - “Top tools” list + percentage share

---

### Epic #6 — Notifications & Communication

#### User Story 1 — Real-Time Notifications (Status Changes)
- **As a:** Filmmaker  
- **I want to:** Receive real-time notifications about my video status  
- **So that:** I know immediately if it’s approved/rejected  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - On moderation decision, a notification is sent (WebSocket / SSE)
  - If real-time channel unavailable, fallback to email
  - Notifications include status + reason (if rejected)

#### User Story 2 — Newsletter Subscription
- **As a:** Public user  
- **I want to:** Subscribe to a newsletter  
- **So that:** I receive festival and platform updates  
- **Priority:** Low  
- **Acceptance Criteria:**
  - Email is validated and stored
  - Double opt-in confirmation email (recommended)
  - Unsubscribe link in every email

---

### Epic #7 — Social Engagement & Sharing

#### User Story 1 — Social Media Sharing
- **As a:** Public user  
- **I want to:** Share videos directly to social platforms  
- **So that:** I can promote the contest and my favorites  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Share buttons generate a shareable link with preview (OpenGraph metadata)
  - Platforms supported: Facebook, X/Twitter, LinkedIn (configurable)
  - Share action increments “share” metric

#### User Story 2 — Sponsorship (Moved here)
- **As a:** Commercial partner  
- **I want to:** Sponsor videos  
- **So that:** I can promote my brand during the festival  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Partner can select sponsorship package and target video(s)
  - Sponsorship confirmation workflow exists (invoice/payment optional)
  - Sponsored videos show partner branding (within defined design rules)

---

### Epic #8 — Accessibility & Inclusivity (Deduplicated)

#### User Story 1 — Accessibility Options
- **As a:** Public user  
- **I want to:** Enable accessibility options  
- **So that:** I can navigate regardless of abilities  
- **Priority:** High  
- **Acceptance Criteria:**
  - High-contrast mode toggle
  - Keyboard navigation
  - ARIA labels for controls
  - Screen reader-friendly structure
  - Captions/subtitles support integrated (see next story)

#### User Story 2 — Upload & Display Subtitles
- **As a:** Filmmaker  
- **I want to:** Upload subtitle files (.srt, .vtt)  
- **So that:** my videos are accessible  
- **Priority:** Medium  
- **Acceptance Criteria:**
  - Accepted formats: .srt, .vtt (configurable)
  - Validations: file size, encoding, language label
  - Player displays subtitles and allows toggling

---

### Epic #9 — Festival Program, Round Tables, Workshops & Reservations (Updated)

#### User Story 1 — Interactive Agenda (Festival + Round Tables + Workshops)
- **As a:** Public user  
- **I want to:** View and interact with the agenda  
- **So that:** I can plan my participation  
- **Priority:** Low  
- **Acceptance Criteria:**
  - Agenda includes: screenings, round tables, workshops, closing ceremony
  - Each event shows: date/time, location, speakers, capacity (if relevant)
  - Filters by event type and day
  - Event detail page exists

#### User Story 2 — Reservation System (Workshops + Closing Ceremony)
- **As a:** Public user  
- **I want to:** reserve a spot  
- **So that:** I can attend workshops and the closing ceremony  
- **Priority:** Low  
- **Acceptance Criteria:**
  - Reservations require account (or email-only, defined rule)
  - Capacity limit enforced; waitlist optional
  - Confirmation email sent
  - User can view/cancel their reservations (with rules)

#### User Story 3 — Event Feedback
- **As a:** Public user  
- **I want to:** leave feedback after attending  
- **So that:** organizers improve future editions  
- **Priority:** Low  
- **Acceptance Criteria:**
  - Feedback form per event (rating + comment)
  - Spam protection (rate limit/captcha optional)
  - Admin can view feedback analytics

---

## 3. Global Requirements (Non-Functional)
- **Security:** hashed passwords, secure sessions, role-based access control, audit logs for admin actions
- **Performance:** scalable video delivery (CDN recommended), pagination everywhere, caching for ranking pages
- **Compliance:** copyright workflow, privacy/GDPR, consent for newsletter
- **Accessibility:** WCAG-oriented design, subtitles support
- **Internationalization:** multilingual UI with language switch

