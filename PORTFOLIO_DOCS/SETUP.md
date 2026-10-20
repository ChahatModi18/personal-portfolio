# Setup & Deployment Guide — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Local Development Setup
```powershell
# Navigate to portfolio directory
cd "c:\Users\Lenovo\Desktop\7thSEM PROJECTS\portfolio-website"

# Launch lightweight local server
python -m http.server 8080
```
Open `http://localhost:8080`.

---

## 2. Production Deployment via GitHub Pages
1. Push all files to the `main` branch of `https://github.com/ChahatModi18/personal-portfolio`.
2. Under GitHub **Settings > Pages**, choose `Deploy from a branch` with branch `main` and root `/`.
3. The site goes live at `https://chahatmodi18.github.io/personal-portfolio/`.
