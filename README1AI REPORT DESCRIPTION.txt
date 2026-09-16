# Chahat Modi — Personal Portfolio

A fast, modern, accessible, and responsive personal portfolio website for **Chahat Modi** (Computer Science & Engineering undergraduate at JECRC University, 8.61 CGPA). Built using pure standard web technologies without external framework dependencies.

---

## Features

- **Responsive Design:** Mobile-first layout fully adapted for 320px, 375px, 425px, 768px, 1024px, and 1440px+ viewports.
- **Dark & Light Themes:** Instant dual theme toggle with `localStorage` persistence and zero-flicker system preference synchronization.
- **Project Showcase & Filtering:** Interactive project cards with dynamic category filtering (`All Projects`, `Python`, `AI / NLP`, `Research`).
- **Accessible Project Details Modal:** Fullscreen dialog featuring problem motivation, engineered solutions, architectural features, individual contributions, tech stack tags, and source code links (with focus trap and `Escape` key support).
- **Resume Download & Preview:** Direct one-click tab preview and download buttons for `resume.pdf`.
- **Contact Form Validation:** Client-side validation for Name, RFC-compliant Email, and Message length with live feedback and loading spinner.
- **Zero-Breakage Asset Fallbacks:** Automatic fallback cards and initials monogram (`CM`) ensure the site looks complete even if image files are omitted.
- **Mobile Navigation:** Smooth animated hamburger drawer menu with automatic close on outside click or navigation.
- **Scroll UX & Animations:** Reading progress indicator bar, smooth section scrolling, and floating scroll-to-top button.
- **SEO & Social Sharing:** Fully indexed with Semantic HTML5, Schema.org Person JSON-LD, Open Graph, and Twitter Card metadata.

---

## Technologies

- **HTML5:** Semantic layout, Schema.org structured data, and accessible ARIA landmarks.
- **CSS3:** Custom properties (design tokens), glassmorphism, flexbox, CSS grid, and responsive media queries.
- **JavaScript (Vanilla ES6+):** Theme engine, dynamic DOM rendering, modal controller, form validation, and scroll observers.

---

## Project Structure

```text
personal-portfolio/
│
├── index.html          → Main webpage structure, SEO metadata, and accessible landmarks
├── style.css           → Styling, CSS custom properties (Dark/Light themes), and responsive media queries
├── script.js           → Dynamic project filtering, theme switcher, modal dialog, and form validation
├── resume.pdf          → Official verified resume PDF document (source of truth)
├── .gitignore          → Git ignore rules preventing OS caches, IDE files, and temporary files from being tracked
├── README.md           → Main repository documentation and deployment guide
├── PROMPTS.md          → Next Customization Prompt and architectural recipes for future AI sessions
├── README.txt          → Plaintext development and feature completion log
│
└── images/             → Visual assets directory (PNGs optional — automatic fallbacks active)
    ├── README.txt      → Asset guidelines and fallback explanation
    ├── profile.png     → Profile headshot (Fallback: Stylized CM Monogram)
    ├── project1.png    → BhagvadMood Journal preview screenshot
    ├── project2.png    → Progressive Web Applications (PWA) research preview
    └── project3.png    → Affective NLP Pipeline preview screenshot
```

---

## Running Locally

Because this is a static website, you can run it immediately without installing any build tools or dependencies.

### Method 1: Direct File Open (Quickest)
Double-click `index.html` or open it in any modern browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Method 2: Local HTTP Server (Recommended)
If you prefer running a local development server:

```bash
# Using Python 3:
python -m http.server 8080

# Or using Node.js:
npx serve .
```

Then open `http://localhost:8080/` in your browser.

---

## Customization

### 1. Replace Profile Image
* Place your photo as `profile.png` inside the `images/` directory.
* If omitted, the website automatically displays a styled `CM` monogram avatar card.

### 2. Replace Project Images
* Place project screenshots in the `images/` folder with matching lowercase names:
  * `images/project1.png` (BhagvadMood Journal)
  * `images/project2.png` (PWA Research)
  * `images/project3.png` (Affective NLP Pipeline)
* If omitted, themed project icon cards are automatically displayed.

### 3. Add New Projects
Open `script.js` and add a new object to the `projectsData` array:

```javascript
{
  id: 'project-slug',
  title: 'Project Name',
  subtitle: 'Project Subtitle / Classification',
  categories: ['python', 'aiml'], // options: 'python', 'aiml', 'research'
  categoryLabel: 'Python • Machine Learning',
  badge: 'Application / Tool',
  timeline: '2026',
  image: 'images/project4.png',
  shortDescription: '1-2 sentence overview for the project card.',
  problem: 'What specific problem does this project solve?',
  solution: 'How did you architect and implement the technical solution?',
  features: [
    'Key feature 1',
    'Key feature 2',
    'Key feature 3'
  ],
  technologies: ['Python', 'FastAPI', 'scikit-learn', 'PostgreSQL'],
  contribution: 'Your specific individual contribution.',
  status: 'Completed',
  githubUrl: 'https://github.com/ChahatModi18/your-repo',
  demoUrl: 'https://your-demo-link.com'
}
```

### 4. Update Skills
In `index.html`, locate the `#skills` section (lines 430–540) and add or modify `<li class="skill-tag">Skill Name</li>`.

### 5. Replace Resume
Place your updated resume as `resume.pdf` in the root folder. Both the "View Resume" and "Download Resume" buttons automatically serve the new file.

### 6. Update GitHub / LinkedIn / Contact Links
In `index.html`, search for:
* **GitHub:** `https://github.com/ChahatModi18`
* **LinkedIn:** `https://www.linkedin.com/in/chahat-modi-c20`
* **LeetCode:** `https://leetcode.com/u/dDEslTCrFu/`
* **Email:** `chahatmodi17@gmail.com`
* **Phone:** `+919460126498`

---

## Contact Form Behavior

The contact form currently operates in **Client-Side Demo Mode**:
- It runs real-time input validation (ensuring valid name, RFC-compliant email, and message length).
- When submitted, it simulates a loading state and displays a demo confirmation box informing visitors that no email was transmitted because this is a static frontend website.
- Visitors are provided with direct one-click email links to reach you directly.

**To connect a real email backend in the future (e.g. Formspree):**
1. Register at [formspree.io](https://formspree.io).
2. Update `<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">` in `index.html`.

---

## Deployment (GitHub Pages)

This project is 100% compatible with **GitHub Pages** out of the box with zero configuration:

1. Push this repository to GitHub.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Set the branch to `main` (or `master`) and directory to `/ (root)`.
5. Click **Save**.
6. GitHub will deploy the site and provide your live URL: `https://<your-username>.github.io/<repository-name>/`.

---

## Future Updates Workflow

The repository is organized so you can make updates anytime without restructuring:

```bash
# 1. Modify the relevant file (e.g., resume.pdf, index.html, script.js, or an image in images/)

# 2. Check changed files
git status

# 3. Stage and commit changes
git add .
git commit -m "Update resume and featured projects"

# 4. Push changes to GitHub (GitHub Pages updates automatically)
git push origin main
```

---

## Author & Contact

- **Chahat Modi** — B.Tech Computer Science & Engineering, JECRC University (8.61 CGPA)
- **Email:** [chahatmodi17@gmail.com](mailto:chahatmodi17@gmail.com)
- **LinkedIn:** [chahat-modi-c20](https://www.linkedin.com/in/chahat-modi-c20)
- **GitHub:** [@ChahatModi18](https://github.com/ChahatModi18)
- **LeetCode:** [dDEslTCrFu](https://leetcode.com/u/dDEslTCrFu/)
