# Security & Form Protection Specification — Personal Portfolio Website

> **Document Version:** 1.0.0  
> **Project:** Personal Portfolio Website  

---

## 1. Form Protection & Spam Mitigation
1. **Honeypot Field:** Hidden CSS field `botcheck`. Automated spam bots populate this input, causing immediate rejection.
2. **Client-Side Regex Validation:** Validates emails strictly against RFC 5322 compliance.
3. **Input Length Throttling:** Names capped at 60 characters; messages capped at 2,000 characters.

---

## 2. Content Security & Privacy
- Zero tracking cookies or third-party profiling pixels.
- External links configured with `rel="noopener noreferrer"`.
