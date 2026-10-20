# Debugging & Troubleshooting Playbook — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Common Issues & Solutions

### Issue 1: Theme switches briefly to light mode on reload
- **Cause:** Theme script loaded at bottom of page.
- **Solution:** Self-invoking inline script placed in `<head>` applying `data-theme` synchronously before rendering.

### Issue 2: Modal backdrop prevents background scrolling when open
- **Solution:** Toggle `overflow: hidden` on `document.body` while modal is active; restore on close.

### Issue 3: Project cards appear misaligned on specific screen widths
- **Solution:** Utilize CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))` and `gap: 2rem`.
