# System Architecture Document — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Architecture Overview

```
+-------------------------------------------------------------+
|                      CLIENT BROWSER                         |
|                                                             |
|  [ Head: Immediate Theme Bootstrap Script ]                 |
|  - Reads localStorage('portfolio-theme')                    |
|  - Applies data-theme attribute prior to initial paint      |
|                                                             |
|  [ DOM Viewport: index.html ]                               |
|  ├── Sticky Header & Navigation                             |
|  ├── Hero Section with Dynamic CTA                          |
|  ├── About & Education Timeline                             |
|  ├── Skills Grid (Interactive Badges)                       |
|  ├── Projects Showcase Container (Dynamic DOM Insertion)    |
|  │     ├── Category Filter Controls                         |
|  │     └── Responsive Card Grid                             |
|  ├── Project Modal Controller (ARIA Accessible Dialog)      |
|  └── Contact Form with Interactive Feedback                 |
|                                                             |
|  [ JavaScript Engine: script.js ]                           |
|  ├── projectsData (Structured JSON Store)                   |
|  ├── Filter & Render Pipelines                              |
|  ├── Modal Event Listeners & Focus Trapping                 |
|  └── Form Validation & Submission Handler                   |
+-------------------------------------------------------------+
```
