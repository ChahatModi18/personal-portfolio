/**
 * Chahat Modi - Portfolio Website Script
 * Task 7: Advanced Interactions, Accessibility, Theme Toggle, Modal & Contact Validation
 */

// =============================================================================
// 1. PROJECTS DATA STORE (Extensible Structure)
// =============================================================================
const projectsData = [
  {
    id: 'bhagvadmood-journal',
    title: 'BhagvadMood Journal',
    subtitle: 'AI-Powered Mental Wellness Platform [Research-Based Project]',
    categories: ['python', 'aiml', 'research'],
    categoryLabel: 'Python • NLP • Research',
    badge: 'Research-Based Project',
    timeline: '2025 – 2026',
    image: 'images/project1.png',
    shortDescription: 'A self-contained, privacy-first desktop mental health journaling platform designed to bridge diagnostic gaps across 5+ clinical studies using context-aware NLP analysis rather than generic social media sentiment models.',
    problem: 'Standard sentiment analysis systems trained on social media datasets struggle with the nuanced phrasing of clinical depression and anxiety. Furthermore, cloud-dependent mental health applications expose sensitive personal reflections to privacy risks and data breaches.',
    solution: 'Built an offline, self-contained desktop platform that operates entirely on local hardware with zero external telemetry. The system combines context-aware NLP (TextBlob, NLTK, Regex) with cognitive reframing principles, Vedic philosophical insights, holistic health tracking, and automated crisis detection.',
    features: [
      'Offline, privacy-first desktop application architecture with local MySQL storage',
      'Context-aware journal analysis addressing diagnostic gaps identified in clinical research',
      'Cognitive reframing engine providing evidence-aligned emotional perspective',
      'Integration of Vedic scripture wisdom and holistic lifestyle indicators',
      'Visual mood trajectory and progress analytics powered by Matplotlib',
      'Automated crisis detection algorithms extending beyond basic polarity scoring'
    ],
    technologies: ['Python', 'Tkinter', 'MySQL', 'TextBlob', 'Matplotlib', 'PIL (Pillow)', 'Regex', 'NLP', 'NLTK'],
    contribution: 'Researched diagnostic gaps across 5+ clinical papers, engineered the Tkinter graphical interface, built the end-to-end NLP text preprocessing and sentiment evaluation pipeline, designed relational MySQL database schemas, and implemented analytical visualization charts.',
    status: 'Completed / Active Research',
    githubUrl: 'https://github.com/ChahatModi18',
    demoUrl: ''
  },
  {
    id: 'pwa-research-evaluation',
    title: 'Progressive Web Applications (PWAs) Research',
    subtitle: 'Academic Research Paper presented at DSMD 2.0 International Conference',
    categories: ['research'],
    categoryLabel: 'Research • Web Architecture',
    badge: 'Conference Research Paper',
    timeline: '2025 – 2026',
    image: 'images/project2.png',
    shortDescription: 'In-depth research paper analyzing Progressive Web Application architectural patterns, offline caching strategies with Service Workers, and cross-platform performance metrics compared to native applications.',
    problem: 'Modern web applications frequently suffer from high latency and complete unavailability in intermittent network environments, causing accessibility barriers in developing and low-bandwidth regions.',
    solution: 'Investigated and presented empirical findings on Service Worker cache-first and stale-while-revalidate strategies, Web App Manifest optimizations, and IndexedDB data persistence at the DSMD 2.0 International Conference at JECRC University.',
    features: [
      'Comparative latency benchmark between PWAs and standard single-page applications',
      'Service Worker lifecycle management and resilient offline caching policies',
      'Background sync patterns and client-side data synchronization architectures',
      'Presented findings at the DSMD 2.0 International Conference (March 2026)'
    ],
    technologies: ['PWA Architecture', 'Service Workers', 'Cache API', 'IndexedDB', 'Web Vitals', 'Performance Profiling'],
    contribution: 'Authored core research sections on offline state management, conducted performance benchmarks, created architectural workflow diagrams, and presented the paper to international conference attendees.',
    status: 'Presented & Published',
    githubUrl: 'https://github.com/ChahatModi18',
    demoUrl: ''
  },
  {
    id: 'mental-health-nlp-pipeline',
    title: 'Affective Text & Sentiment Classification Pipeline',
    subtitle: 'Context-Aware Clinical NLP Feature Engineering Framework',
    categories: ['python', 'aiml'],
    categoryLabel: 'Python • Machine Learning • NLP',
    badge: 'NLP Framework',
    timeline: '2025',
    image: 'images/project3.png',
    shortDescription: 'A modular Python computational library specialized in clinical text preprocessing, lemmatization, semantic keyword expansion, and emotional intensity scoring.',
    problem: 'Off-the-shelf sentiment models frequently misclassify negation phrases (e.g. "not feeling great") and miss subtle cognitive distortions like catastrophizing or overgeneralization.',
    solution: 'Designed a multi-stage text processing pipeline combining rule-based heuristics, dependency parsing cues, and lexicons tailored for mental wellness journaling.',
    features: [
      'Tokenization, stop-word removal, and POS tagging optimized for emotional text',
      'Negation-scope resolution preventing false positive sentiment tagging',
      'Dynamic emotional vector computation across 6 affective dimensions',
      'Exportable analytics summaries in JSON and CSV formats for clinical review'
    ],
    technologies: ['Python', 'NLTK', 'scikit-learn', 'pandas', 'numpy', 'Regular Expressions'],
    contribution: 'Implemented the tokenization engine, built custom negation handling rules, wrote unit test suites for edge cases, and evaluated precision/recall metrics.',
    status: 'Completed',
    githubUrl: 'https://github.com/ChahatModi18',
    demoUrl: ''
  }
];

// =============================================================================
// MAIN INITIALIZATION ON DOM CONTENT LOADED
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjects();
  initContactForm();
  initAdditionalUX();

  console.log('Chahat Modi Portfolio — Advanced Interaction Layer (Task 7) Active.');
});

// =============================================================================
// 2. THEME MANAGEMENT (Light / Dark Mode + localStorage Persistence)
// =============================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const THEME_STORAGE_KEY = 'portfolio-theme';

  const getPreferredTheme = () => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeToggleBtn) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggleBtn.setAttribute('aria-pressed', (!isDark).toString());
    }
  };

  // Set initial theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Toggle listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // Listen to OS system preference changes if user hasn't set explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// =============================================================================
// 3. NAVIGATION & SMOOTH SCROLLING
// =============================================================================
function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navElement = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // A. Sticky Header on Scroll
  const handleScrollHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // B. Mobile Hamburger Menu Toggle
  if (navToggle && navElement) {
    const toggleMenu = (forceState) => {
      const isOpen = forceState !== undefined ? forceState : !navElement.classList.contains('open');
      navToggle.classList.toggle('open', isOpen);
      navElement.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen.toString());

      if (isOpen) {
        const firstLink = navElement.querySelector('.nav-link');
        if (firstLink) firstLink.focus();
      }
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking a navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navElement.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (navElement.classList.contains('open') &&
          !navElement.contains(event.target) &&
          !navToggle.contains(event.target)) {
        toggleMenu(false);
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navElement.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // C. Active Section Detection on Scroll (IntersectionObserver)
  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === `#${currentId}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
              link.setAttribute('aria-current', 'page');
            } else {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { root: null, rootMargin: '-25% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // D. Smooth Scrolling with Sticky Navbar Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 76;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, '', targetId);
        }
      }
    });
  });
}

// =============================================================================
// 4. PROJECTS FILTERING & ACCESSIBLE DETAILS MODAL
// =============================================================================
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalDialog = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  let activeModalTrigger = null;

  // A. Render Project Cards
  const renderProjects = (filter = 'all') => {
    if (!projectsGrid) return;

    const filtered = projectsData.filter(project => {
      if (filter === 'all') return true;
      return project.categories.includes(filter);
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="projects-empty" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <p style="color: var(--text-secondary); font-size: 1.05rem;">No projects found matching the selected category.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project-showcase-card" data-project-id="${project.id}">
        <!-- Media Frame with Fallback -->
        <div class="project-media-wrapper">
          <img 
            src="${project.image}" 
            alt="Screenshot preview for ${project.title}" 
            class="project-card-image"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="project-image-fallback" style="display: none;">
            <div class="fallback-icon">💡</div>
            <div class="fallback-title">${project.title}</div>
            <span class="fallback-hint">Project Demo Screenshot</span>
          </div>
          <span class="project-badge-overlay">${project.badge}</span>
        </div>

        <!-- Card Body -->
        <div class="project-card-body">
          <div class="project-meta-row">
            <span class="project-category-text">${project.categoryLabel}</span>
            <span class="project-timeline-text">${project.timeline}</span>
          </div>

          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.shortDescription}</p>

          <div class="project-tech-tags">
            ${project.technologies.slice(0, 5).map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
            ${project.technologies.length > 5 ? `<span class="tech-pill tech-pill-more">+${project.technologies.length - 5} more</span>` : ''}
          </div>

          <!-- Card Actions -->
          <div class="project-actions">
            <button class="btn btn-primary btn-sm open-details-btn" data-project-id="${project.id}" aria-haspopup="dialog" aria-expanded="false">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </button>
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View ${project.title} on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            ` : ''}
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <span>Live Demo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to Details buttons
    document.querySelectorAll('.open-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projectId = e.currentTarget.getAttribute('data-project-id');
        openProjectModal(projectId, e.currentTarget);
      });
    });
  };

  // B. Project Filter Handling
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // C. Modal Open Logic
  const openProjectModal = (projectId, triggerElement) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalBackdrop || !modalBody) return;

    activeModalTrigger = triggerElement;
    if (activeModalTrigger) {
      activeModalTrigger.setAttribute('aria-expanded', 'true');
    }

    modalBody.innerHTML = `
      <div class="modal-project-header">
        <div class="modal-badge-row">
          <span class="project-badge">${project.badge}</span>
          <span class="modal-status-badge">Status: ${project.status}</span>
        </div>
        <h2 id="modal-project-title" class="modal-project-title">${project.title}</h2>
        <p class="modal-project-subtitle">${project.subtitle}</p>
        <p class="modal-project-timeline">📅 ${project.timeline}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-heading">Overview</h4>
        <p class="modal-text">${project.shortDescription}</p>
      </div>

      <div class="modal-grid-2">
        <div class="modal-section">
          <h4 class="modal-section-heading">Problem & Research Motivation</h4>
          <p class="modal-text">${project.problem}</p>
        </div>
        <div class="modal-section">
          <h4 class="modal-section-heading">Engineered Solution</h4>
          <p class="modal-text">${project.solution}</p>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-heading">Key Features & Architecture</h4>
        <ul class="modal-features-list">
          ${project.features.map(feat => `<li>${feat}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-heading">My Individual Contribution</h4>
        <p class="modal-text">${project.contribution}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-heading">Technologies Used</h4>
        <div class="modal-tech-stack">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>

      <div class="modal-footer-actions">
        ${project.githubUrl ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>View Source on GitHub</span>
          </a>
        ` : ''}
        ${project.demoUrl ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <span>Launch Live Demo</span>
          </a>
        ` : ''}
        <button type="button" class="btn btn-outline" id="modal-inner-close-btn">Close Details</button>
      </div>
    `;

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (modalCloseBtn) modalCloseBtn.focus();

    const innerClose = document.getElementById('modal-inner-close-btn');
    if (innerClose) {
      innerClose.addEventListener('click', () => closeProjectModal());
    }
  };

  // D. Modal Close Logic
  const closeProjectModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (activeModalTrigger) {
      activeModalTrigger.setAttribute('aria-expanded', 'false');
      activeModalTrigger.focus();
      activeModalTrigger = null;
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => closeProjectModal());
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  // E. Keyboard Accessibility: Escape key & Tab Focus Trap
  document.addEventListener('keydown', (e) => {
    if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeProjectModal();
      return;
    }

    if (e.key === 'Tab' && modalDialog) {
      const focusables = modalDialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });

  // Initial projects rendering
  renderProjects('all');
}

// =============================================================================
// 5. INTERACTIVE CONTACT FORM WITH VALIDATION & DEMO STATE
// =============================================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');
  const successState = document.getElementById('contact-success-state');
  const resetBtn = document.getElementById('contact-reset-btn');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  if (!form) return;

  // Validation rules
  const validateName = () => {
    const val = (nameInput.value || '').trim();
    if (!val) {
      setError(nameInput, nameError, 'Full name is required.');
      return false;
    }
    if (val.length < 2) {
      setError(nameInput, nameError, 'Name must be at least 2 characters.');
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  };

  const validateEmail = () => {
    const val = (emailInput.value || '').trim();
    if (!val) {
      setError(emailInput, emailError, 'Email address is required.');
      return false;
    }
    // Standard RFC-compliant email regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(val)) {
      setError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  };

  const validateMessage = () => {
    const val = (messageInput.value || '').trim();
    if (!val) {
      setError(messageInput, messageError, 'Message is required.');
      return false;
    }
    if (val.length < 10) {
      setError(messageInput, messageError, 'Message must be at least 10 characters long.');
      return false;
    }
    clearError(messageInput, messageError);
    return true;
  };

  const setError = (input, errorEl, msg) => {
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = msg;
    }
  };

  const clearError = (input, errorEl) => {
    input.classList.remove('input-error');
    input.setAttribute('aria-invalid', 'false');
    if (errorEl) {
      errorEl.textContent = '';
    }
  };

  // Real-time input listeners to clear errors once user types valid input
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.classList.contains('input-error')) validateName();
    });
    nameInput.addEventListener('blur', validateName);
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('input-error')) validateEmail();
    });
    emailInput.addEventListener('blur', validateEmail);
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.classList.contains('input-error')) validateMessage();
    });
    messageInput.addEventListener('blur', validateMessage);
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      // Focus first invalid element
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isMessageValid) messageInput.focus();
      return;
    }

    // Valid: Trigger submission loading simulation
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.setAttribute('disabled', 'true');
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.removeAttribute('disabled');
      }

      // Hide form and display demo success message
      form.style.display = 'none';
      if (successState) {
        successState.style.display = 'block';
        if (resetBtn) resetBtn.focus();
      }
    }, 600);
  });

  // Handle "Send Another Message" Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearError(nameInput, nameError);
      clearError(emailInput, emailError);
      clearError(messageInput, messageError);

      if (successState) {
        successState.style.display = 'none';
      }
      form.style.display = 'flex';
      if (nameInput) nameInput.focus();
    });
  }
}

// =============================================================================
// 6. ADDITIONAL UX (Scroll Progress, Scroll-To-Top & Reveal Animations)
// =============================================================================
function initAdditionalUX() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  // A. Scroll Progress Bar & Scroll-To-Top Trigger
  const updateScrollProgress = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progress).toString());
    }

    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Scroll to top click handler
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      const homeLink = document.querySelector('a[href="#home"]');
      if (homeLink) homeLink.focus();
    });
  }

  // B. Scroll Reveal Animations (IntersectionObserver)
  if ('IntersectionObserver' in window) {
    // Add reveal-on-scroll class to key content elements
    const elementsToReveal = document.querySelectorAll(
      '.about-card, .interest-pillars, .timeline-item, .skill-card, .experience-card, .achievement-card, .cert-card, .resume-card, .contact-card, .contact-form-card'
    );

    elementsToReveal.forEach(el => el.classList.add('reveal-on-scroll'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    elementsToReveal.forEach(el => revealObserver.observe(el));
  }
}
