# UI/UX & Visual Design System — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Visual Strategy & Design Philosophy

The portfolio embraces a **High-Performance Dark/Light Glassmorphism** design language tailored for modern software engineers:
- **Typography:** Google Fonts `Outfit` (Headings, bold display) and `Inter` (Body copy, high legibility).
- **Surface Elevation:** Multi-layered CSS backdrop filters (`backdrop-filter: blur(16px)`), luminous borders, and refined box shadows.
- **Accents:** Electric Indigo (`#6366F1`), Cyan Teal (`#06B6D4`), and Royal Saffron (`#F59E0B`).

---

## 2. Design Tokens

```css
:root {
  --bg-primary: #0a0f1d;
  --bg-secondary: #111827;
  --surface-card: rgba(17, 24, 39, 0.75);
  --border-color: rgba(255, 255, 255, 0.08);
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --accent-primary: #6366f1;
  --accent-cyan: #06b6d4;
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --surface-card: rgba(255, 255, 255, 0.85);
  --border-color: rgba(0, 0, 0, 0.08);
  --text-primary: #0f172a;
  --text-secondary: #475569;
}
```
