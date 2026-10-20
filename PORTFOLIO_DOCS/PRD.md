# Product Requirements Document (PRD) — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Target Product:** Personal Engineering Portfolio & Academic Showcase  
> **Author & Lead Developer:** Chahat Modi  
> **Target Audience:** Technical Recruiters, Software Engineering Managers, Academic Collaborators, Hackathon Panels  

---

## 1. Executive Summary & Vision

The **Personal Portfolio Website** serves as the primary digital flagship showcasing the engineering prowess, research publications, competitive programming credentials, and full-stack software architecture achievements of **Chahat Modi** (B.Tech Computer Science & Engineering, JECRC University). Built with modern semantic HTML5, Vanilla CSS custom properties, and modular JavaScript, the platform prioritizes instantaneous load speeds, WCAG AA accessibility, rich visual aesthetics (glassmorphism, smooth gradients, dynamic micro-interactions), and comprehensive project case studies.

---

## 2. Problem Statement & Strategic Goals

1. **Recruiter Attention Span:** Technical recruiters evaluate candidate portfolios within 30 to 60 seconds. The site must communicate core competencies, live demos, and GitHub repositories instantly.
2. **Project Depth vs. Brevity:** Many portfolios either provide bare GitHub links with zero context or long, overwhelming walls of text. The site solves this via an interactive **2-Tier Project Exploration Model**: concise high-impact cards with an accessible deep-dive modal revealing Problem, Solution, Features, and Architecture.
3. **SEO & Discoverability:** Full Schema.org JSON-LD metadata, OpenGraph tags, and semantic hierarchy ensuring top-tier indexing.

---

## 3. Core Functional Requirements

### 3.1 Hero & Academic Branding
- **FR-1.1:** Compelling headline highlighting Python engineering, NLP research (BhagvadMood Journal), and Academic Standing (8.61 CGPA).
- **FR-1.2:** Quick-action buttons: "View Projects", "Download Resume", and "Get in Touch".
- **FR-1.3:** Social links with verified badges: GitHub, LinkedIn, LeetCode.

### 3.2 Dynamic Multi-Category Project Showcase
- **FR-2.1:** Category filtering tabs: "All Projects", "Python & Full-Stack", "AI / ML & NLP", "Frontend & Interactive", "Research".
- **FR-2.2:** Real-time filter animation with zero page refresh.
- **FR-2.3:** Deep-dive Project Details Modal rendering architectural diagrams, problem/solution breakdown, technologies, and GitHub / live demo links.

### 3.3 Technical Skills & Education Timeline
- **FR-3.1:** Categorized skill grid: Programming Languages, Frameworks & Libraries, Developer Tools, Core CS Fundamentals.
- **FR-3.2:** Interactive chronological education timeline detailing B.Tech CSE at JECRC University, Senior Secondary schooling, and ALOHA GrandMaster mental arithmetic certification.

### 3.4 Interactive Experience & UX Features
- **FR-4.1:** Persistent Theme Engine (Light / Dark mode) with zero flicker on initial load.
- **FR-4.2:** Top reading scroll progress indicator.
- **FR-4.3:** Contact form with client-side validation and honeypot spam prevention.
