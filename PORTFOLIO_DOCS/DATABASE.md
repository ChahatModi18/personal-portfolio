# Data Store & State Architecture — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Client-Side Data Store (`projectsData`)

The core repository of project showcases is defined in `script.js` as an extensible array of strongly-typed objects:

```typescript
interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categories: ('python' | 'aiml' | 'fullstack' | 'frontend' | 'research')[];
  categoryLabel: string;
  badge: string;
  timeline: string;
  image: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contribution: string;
  status: string;
  githubUrl: string;
  demoUrl?: string;
}
```

---

## 2. Browser Storage Persistence

- `portfolio-theme`: `'dark'` | `'light'` (Guarantees zero-flicker reload across visits).
- `portfolio-last-filter`: Retains user's last selected project category tab.
