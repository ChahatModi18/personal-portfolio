# 📋 Antigravity Customization Prompts & Engineering Blueprint

This file contains the prompts, engineering specifications, and the **Next Customization Prompt** specifically designed for **Chahat Modi's Portfolio Website** (`portfolio-website/`).

---

## 🎯 1. NEXT CUSTOMIZATION PROMPT (For Future AI Sessions)

Copy and paste the prompt below into any future AI or Antigravity session when you want to update, expand, or add new features to your portfolio:

```markdown
## NEXT CUSTOMIZATION PROMPT

I would like to update my personal portfolio website (Version 1.0) located in `portfolio-website/`.

The codebase architecture is:
- `index.html`: Semantic HTML5 structure with sections (#home, #about, #skills, #projects, #experience, #certifications, #resume, #contact) and Schema.org JSON-LD metadata.
- `style.css`: Vanilla CSS3 design system using CSS variables (:root / [data-theme="dark"] / [data-theme="light"]), glassmorphism classes, and responsive breakpoints (1024px, 768px, 480px, 360px).
- `script.js`: Modular Vanilla JS containing `projectsData` array, `initTheme()`, `initNavigation()`, `initProjects()`, `initContactForm()`, and `initAdditionalUX()`.
- `resume.pdf`: Source-of-truth PDF document for resume view and download.
- `images/`: Optional visual assets directory with graceful fallbacks (`profile.png`, `project1.png`, `project2.png`, `project3.png`).

Please assist me with the following specific updates:

[SELECT OR DESCRIBE YOUR REQUIRED CHANGES BELOW]:
1. [ ] Add a new project to `projectsData` in `script.js` with full problem, solution, features, tech stack, and GitHub links.
2. [ ] Update technical skills in `index.html` under the `#skills` section.
3. [ ] Add a new publication / research paper / achievement card under `#experience`.
4. [ ] Connect the contact form in `index.html` and `script.js` to a real email backend endpoint (e.g., Formspree / Web3Forms / Resend API).
5. [ ] Update social links / resume PDF / contact details.
6. [ ] Add a new section (e.g., Blog, Testimonials, Live Coding Demos).

Guidelines:
- Maintain the existing design tokens, dark/light theme support, and responsive CSS rules in `style.css`.
- Keep the pure Vanilla HTML/CSS/JS architecture (no unnecessary framework installations).
- Maintain WCAG 2.1 AA accessibility and zero-console-error execution.
- Preserve 100% truthful data without inventing facts.
```

---

## 🏗️ 2. Architectural Blueprint & 9-Prompt Development Log

| Prompt # | Stage / Objective | Key Deliverables & Technical Focus | Verification |
| :---: | :--- | :--- | :---: |
| **Prompt 1** | Foundation & Architecture | Semantic HTML5 structure, SEO meta tags, Schema.org Person JSON-LD, Open Graph, Web fonts preconnect. | Passed |
| **Prompt 2** | Design Tokens & System | Dark & Light theme CSS variables, glassmorphic headers, standardized buttons, badges, and cards. | Passed |
| **Prompt 3** | Hero & About Sections | 8.61 CGPA badge, professional bio, academic timeline, ALOHA GrandMaster details, authentic hobbies. | Passed |
| **Prompt 4** | Technical Skills & Fundamentals | Python, C/C++, Data Science stack (`pandas`, `numpy`, `matplotlib`, `scikit-learn`), DBMS, Core CS. | Passed |
| **Prompt 5** | Projects & Research | *BhagvadMood Journal* (Tkinter, MySQL, NLTK/TextBlob), *PWA Research Paper* (DSMD 2.0 Conference), NLP Pipeline. | Passed |
| **Prompt 6** | Experience & Certifications | Paid Internship (₹8,000 stipend, 97 experts, 2,700 students), SIH 2025 Winner, 4 NPTEL Certifications. | Passed |
| **Prompt 7** | Interactive JavaScript Layer | Dual theme switcher with `localStorage`, real-time project filtering, accessible details modal, form validation. | Passed |
| **Prompt 8** | Resume Integration & Polish | Direct view & download links for `resume.pdf`, scroll progress bar, scroll-to-top button, no-flicker theme script. | Passed |
| **Prompt 9** | Quality Assurance & Delivery | 6 viewport responsive testing (320px–1440px), anti-hallucination audit, Customization Guide, and README files. | Passed |

---

## 🛠️ 3. Quick Customization Recipes

### Recipe A: Adding a New Project
In `script.js`, append an object to `projectsData`:
```javascript
{
  id: 'new-project-slug',
  title: 'Project Name',
  subtitle: 'Project Subtitle / Classification',
  categories: ['python', 'aiml'], // options: 'python', 'aiml', 'research'
  categoryLabel: 'Python • AI / ML',
  badge: 'Application / Tool',
  timeline: '2026',
  image: 'images/project4.png',
  shortDescription: '1-2 sentence overview for the project card.',
  problem: 'What real-world challenge or problem does this address?',
  solution: 'How did you architect and implement the technical solution?',
  features: [
    'Key feature 1',
    'Key feature 2',
    'Key feature 3'
  ],
  technologies: ['Python', 'FastAPI', 'scikit-learn', 'PostgreSQL'],
  contribution: 'Your specific individual contributions.',
  status: 'Completed',
  githubUrl: 'https://github.com/ChahatModi18/your-repo',
  demoUrl: ''
}
```

### Recipe B: Connecting Contact Form to Email Backend (Formspree)
1. Register at [formspree.io](https://formspree.io) and create a new form.
2. In `index.html`, add the endpoint to the form tag:
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_ENDPOINT_ID" method="POST">
```
3. In `script.js`, replace the `setTimeout` simulation in `initContactForm()` with a `fetch()` POST request to your endpoint.

### Recipe C: Updating Resume
Save your new PDF as `resume.pdf` in the root folder. No code changes are necessary; all download and view triggers automatically point to it.
