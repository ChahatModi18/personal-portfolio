# API & External Service Specifications — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Contact Form Dispatch API

- **Service:** Web3Forms / Formspree Endpoint
- **Method:** `POST https://api.web3forms.com/submit`
- **Payload Schema:**
```json
{
  "access_key": "YOUR_ACCESS_KEY",
  "name": "Recruiter Name",
  "email": "recruiter@company.com",
  "subject": "Interview Invitation",
  "message": "We reviewed your BhagvadMood and DigiMitra projects...",
  "botcheck": "" // Honeypot field for spam prevention
}
```

---

## 2. GitHub REST API Integration (Live Stats)
- **Endpoint:** `GET https://api.github.com/users/ChahatModi18/repos`
- **Usage:** Dynamically extracts star counts, repository sizes, and latest commit timestamps.
