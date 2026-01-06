# ProjectFestivalIA

## 1. Synopsis

### Description
ProjectFestivalIA is an innovative platform designed to host and manage a global short film competition. The platform enables users to upload, vote, and rank AI-generated short films, fostering creativity and collaboration.

### Objectives
- Empower filmmakers to showcase their AI-generated creations.
- Provide a seamless experience for users to discover, vote, and share videos.
- Facilitate a fair and transparent competition process with robust moderation and analytics tools.

### Context
The platform is developed for the Mars IA Night, a prestigious event celebrating AI-driven creativity. The competition features 1-minute short films under the theme "Desirable Futures," aiming to inspire global audiences. With participants from over 120 countries, the platform aspires to collect 600+ films and attract 3,000 visitors to the physical event in Marseille.

### Key Features
- **Video Management:** Upload, moderate, and display videos with detailed AI technical sheets.
- **User Engagement:** Voting, ranking, and sharing functionalities to enhance participation.
- **Accessibility:** Multilingual interface and inclusive design for a global audience.
- **Advanced Analytics:** Real-time insights for administrators to monitor platform performance.

---

## E.P.I.C

### Epic #1: User Account Management

#### User Story 1: Register and Log In
- **As a:** Registered user
- **I want to:** Register and log in
- **So that:** I can access the platform's features
- **Acceptance Criteria:**
  - **Given:** The user is on the registration page and fills in all required fields (name, email, password).
  - **When:** The user submits the registration form.
  - **Then:** A confirmation email is sent, and the user can activate their account.
- **Priority:** High

#### User Story 2: Manage User Accounts
- **As a:** Administrator
- **I want to:** Manage user accounts
- **So that:** I can ensure the security of the application
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in and accesses the user management panel.
  - **When:** The administrator modifies, disables, or deletes a user account.
  - **Then:** The changes are saved, and a confirmation message is displayed.
- **Priority:** High


---

### Epic #2: Video Management

#### User Story 1: Upload Videos for Competition
- **As a:** Registered user
- **I want to:** Upload videos
- **So that:** I can participate in the competition
- **Acceptance Criteria:**
  - **Given:** The user is logged in and accesses the video upload page.
  - **When:** The user fills in the form with a title, description, and selects a video file.
  - **Then:** The video is submitted for validation, and a confirmation message is displayed.
- **Priority:** High

#### User Story 2: Moderate Videos
- **As a:** Moderator => API Youtube
- **I want to:** Review and approve uploaded videos
- **So that:** I can maintain content quality
- **Acceptance Criteria:**
  - **Given:** The moderator is logged in and accesses the list of pending videos.
  - **When:** The moderator approves or rejects a video.
  - **Then:** The video is either published, or a rejection message is sent to the user.
- **Priority:** Medium


### Epic #3: Security Management

#### User Story 1: Vote on Videos
- **As a:** Jury member
- **I want to:** Vote on videos
- **So that:** I can contribute to the competition results
- **Acceptance Criteria:**
  - **Given:** The jury member is logged in and accesses the voting page.
  - **When:** The jury member assigns a score to a video.
  - **Then:** The vote is recorded and reflected in the leaderboard.
- **Priority:** High

#### User Story 2: Sponsor Videos
- **As a:** Commercial partner
- **I want to:** Sponsor videos
- **So that:** I can promote my brand during the festival
- **Acceptance Criteria:**
  - **Given:** The partner accesses the sponsorship section.
  - **When:** The partner selects a video and completes the sponsorship process.
  - **Then:** The sponsorship is confirmed, and the video displays the partner's branding.
- **Priority:** Medium

---
### Epic #4: User Roles and Permissions

- **As a Filmmaker**, I want to submit my films and manage my profile so that I can showcase my work and connect with the audience.
  - **Acceptance Criteria:**
    - **Given:** The filmmaker is logged in and accesses their profile page.
    - **When:** The filmmaker updates their bio, school, or social networks.
    - **Then:** The changes are saved and displayed on their public profile.
  - **Priority:** High

- **As a Public User**, I want to browse the catalog and share videos so that I can discover and promote interesting content.
  - **Acceptance Criteria:**
    - **Given:** The user is on the video catalog page.
    - **When:** The user clicks the share button for a video.
    - **Then:** A shareable link is generated and displayed for social networks.
  - **Priority:** Medium

- **As a Jury Member**, I want to rate and comment on films so that I can contribute to the selection process.
  - **Acceptance Criteria:**
    - **Given:** The jury member is logged in and accesses the private interface.
    - **When:** The jury member assigns a score and writes a comment for a film.
    - **Then:** The score and comment are saved and reflected in the film's evaluation.
  - **Priority:** High

- **As an Administrator**, I want to moderate content and manage partners so that I can ensure the platform's quality and reliability.
  - **Acceptance Criteria:**
    - **Given:** The administrator is logged in and accesses the moderation dashboard.
    - **When:** The administrator approves or removes content or updates partner information.
    - **Then:** The changes are saved and reflected on the platform.
  - **Priority:** High

### Epic #5: Advanced Video Management

#### User Story 1: Include AI Technical Sheet
- **As a:** Filmmaker
- **I want to:** Provide a detailed AI technical sheet for my video submission
- **So that:** The platform can display the tools used for scenario, image generation, and post-production
- **Acceptance Criteria:**
  - **Given:** The filmmaker is on the video upload page with two months left for submissions.
  - **When:** The filmmaker fills in the AI technical sheet fields (scenario, image generation, post-production tools).
  - **Then:** The information is saved and displayed alongside the video.
  - **Priority:** High

#### User Story 2: Copyright Verification
- **As a:** Filmmaker
- **I want to:** Ensure my video complies with copyright regulations
- **So that:** It can be published without legal issues
- **Acceptance Criteria:**
  - **Given:** The filmmaker uploads a video.
  - **When:** The platform checks the video using the YouTube API for copyright compliance.
  - **Then:** The video is either approved or flagged for issues.
  - **Priority:** High

#### User Story 3: Video Pagination and Filters
- **As a:** Public User
- **I want to:** Browse videos with pagination and filters
- **So that:** I can easily find content based on my preferences
- **Acceptance Criteria:**
  - **Given:** The user is on the video catalog page.
  - **When:** The user applies filters or navigates through pages.
  - **Then:** The videos are displayed according to the selected criteria.
  - **Priority:** Medium

#### User Story 4: Video Analytics Dashboard
- **As a:** Administrator  
- **I want to:** View detailed analytics about video views and shares in all media, platforms.
- **So that:** I can track the platform's performance and user engagement  
- **Acceptance Criteria:**  
  - **Given:** The administrator is logged in.  
  - **When:** They access the analytics dashboard.  
  - **Then:** Metrics like views, shares, and user activity are displayed in real-time.  
  - **Priority:** Medium

### Epic #6: Notifications and Reservations

#### User Story 1: Real-Time Notifications
- **As a:** Filmmaker
- **I want to:** Receive real-time notifications about my video status
- **So that:** I am informed immediately about validation or rejection
- **Acceptance Criteria:**
  - **Given:** The filmmaker has submitted a video.
  - **When:** The video status changes (validated or rejected).
  - **Then:** A real-time notification is sent via WebSockets.
  - **Priority:** Medium

#### User Story 2: Event Reservations
- **As a:** Public User
- **I want to:** Reserve spots for workshops and the closing ceremony
- **So that:** I can participate in the festival events
- **Acceptance Criteria:**
  - **Given:** The user is on the event page.
  - **When:** The user selects an event and confirms the reservation.
  - **Then:** The reservation is saved, and a confirmation message is displayed.
  - **Priority:** Low

### User Story 3 : Newsletter Subscription
- **As a:** Public User
- **I want to:** Subscribe to the newsletter
- **So that:** I can receive updates about the festival and new videos
- **Acceptance Criteria:**
  - **Given:** The user is on the newsletter subscription page.
  - **When:** The user enters their email and submits the form.
  - **Then:** The email is added to the subscription list, and a confirmation message is displayed.
  - **Priority:** Low 


### Epic #7: Social Engagement and Analytics

#### User Story 1: Social Media Sharing
- **As a:** Public User  
- **I want to:** Share videos directly on social media platforms  
- **So that:** I can promote the contest and my favorite videos  
- **Acceptance Criteria:**  
  - **Given:** The user is on a video page.  
  - **When:** The user clicks the share button.  
  - **Then:** A shareable link with a preview is generated for social platforms.  
  - **Priority:** Medium  

---

### Epic #8: Accessibility and Inclusivity

#### User Story 1: Accessibility Features
- **As a:** Public User  
- **I want to:** Use accessibility features like subtitles and screen readers  
- **So that:** I can navigate the platform regardless of my abilities  
- **Acceptance Criteria:**  
  - **Given:** The user accesses the platform.  
  - **When:** They enable accessibility options.  
  - **Then:** Features like subtitles, high-contrast mode, and screen reader support are activated.  
  - **Priority:** High  

#### User Story 2: Video Subtitles
- **As a:** Filmmaker  
- **I want to:** Upload subtitles for my videos  
- **So that:** They are accessible to a wider audience  
- **Acceptance Criteria:**  
  - **Given:** The filmmaker uploads a video.  
  - **When:** They add subtitle files (e.g., .srt).  
  - **Then:** The subtitles are displayed during video playback.  
  - **Priority:** Medium  

---

### Epic #9: Festival Event Management

#### User Story 1: Interactive Agenda
- **As a:** Public User  
- **I want to:** View and interact with the festival agenda  
- **So that:** I can plan my participation in workshops and events  
- **Acceptance Criteria:**  
  - **Given:** The user accesses the agenda page.  
  - **When:** They select an event.  
  - **Then:** Details like time, location, and speakers are displayed.  
  - **Priority:** Low  

#### User Story 2: Event Feedback
- **As a:** Public User  
- **I want to:** Provide feedback on events I attended  
- **So that:** The organizers can improve future editions  
- **Acceptance Criteria:**  
  - **Given:** The user attended an event.  
  - **When:** They submit a feedback form.  
  - **Then:** The feedback is saved and acknowledged.  
  - **Priority:** Low

### Epic #10: Advanced Analytics Dashboard

#### User Story 1: Video Metrics by Country
- **As a:** Administrator
- **I want to:** View metrics about video submissions by country
- **So that:** I can analyze the geographical diversity of the competition
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in.
  - **When:** They access the analytics dashboard.
  - **Then:** A chart displays the number of videos submitted from each country.
  - **Priority:** High

#### User Story 2: AI Tools Usage Metrics
- **As a:** Administrator
- **I want to:** View metrics about the AI tools used in video submissions
- **So that:** I can understand the technological trends in the competition
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in.
  - **When:** They access the analytics dashboard.
  - **Then:** A report displays the most commonly used AI tools for scenario, image generation, and post-production.
  - **Priority:** High

#### User Story 3: Engagement Metrics
- **As a:** Administrator
- **I want to:** View metrics about user engagement with videos
- **So that:** I can measure the platform's success in creating an active community
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in.
  - **When:** They access the analytics dashboard.
  - **Then:** Metrics like views, shares, and votes are displayed for each video.
  - **Priority:** Medium

#### User Story 4: Competition Insights
- **As a:** Administrator
- **I want to:** View insights about the competition's progress
- **So that:** I can monitor the overall performance and participation
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in.
  - **When:** They access the analytics dashboard.
  - **Then:** Statistics about total submissions, active users, and voting trends are displayed.
  - **Priority:** Medium

#### User Story 5: Technological Origins
- **As a:** Administrator
- **I want to:** View data about the origins of AI technologies used in submissions
- **So that:** I can identify innovative trends and partnerships
- **Acceptance Criteria:**
  - **Given:** The administrator is logged in.
  - **When:** They access the analytics dashboard.
  - **Then:** A breakdown of AI technologies by origin (e.g., open-source, proprietary) is displayed.
  - **Priority:** Low

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
  - Each video can receive a rating or vote, 1 to 10.
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