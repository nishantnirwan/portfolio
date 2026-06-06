<div align="center">

# ✦ Nishant Yadav — Developer Portfolio

**A dark futuristic personal portfolio with a built-in AI assistant, particle canvas, and premium animated UI — built with zero frameworks.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-7c3aed?style=for-the-badge&logo=netlify&logoColor=white)](https://nishantnirwan.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-nishantnirwan-06b6d4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nishantnirwan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.in/in/nishantyadav13)

</div>

---

## Overview

This is my personal developer portfolio — a single-page application built entirely with **vanilla HTML, CSS, and JavaScript** (no React, no Vue, no build step). It's designed around a dark futuristic aesthetic with a purple-cyan color palette, smooth scroll-triggered animations, and a floating particle canvas background.

The standout feature is a fully functional **AI assistant widget** powered by Groq's LLaMA model that knows my entire professional profile and answers questions about my work, skills, and background — entirely through a secure serverless proxy so the API key never touches the browser.

---

## ✦ Features

### Design & UI
- **Dark futuristic theme** with a deep navy `#070b14` base, purple `#7c3aed` and cyan `#06b6d4` accent palette
- **Animated particle canvas** — 65 drifting particles in the background, rendered with the Web Audio API canvas
- **Scroll progress bar** — a thin gradient line at the top of the viewport tracking read progress
- **AOS scroll animations** — every section fades and slides in as it enters the viewport
- **Glassmorphism cards** — frosted-glass surface treatment on skill cards, timeline entries, and certification cards
- **Gradient typography** — hero name and section headings use multi-stop CSS gradients
- **Rotating orbital rings** in the hero section with glowing planet dots

### Sections
- **Hero** — name, role, animated orbital visual, stats sidebar (DSA problems, projects, hackathon), resume download and contact CTAs
- **About** — bio, what I do, and a highlight stats grid
- **Tech Stack** — 20+ skill cards with devicons and inline SVGs, grouped and animated on scroll
- **Projects** — horizontal showcase layout, each card has info on the left and a premium floating app-window preview on the right with traffic-light buttons and a subtle 3D perspective tilt
- **Education** — vertical timeline with institution, degree, year, and grade
- **Certifications** — cards with issuer, date, and credential details
- **Contact** — form (name, email, message) via Formspree, alongside contact info cards with email and location
- **Footer** — social links and copyright

### AI Assistant Widget
- Floating FAB button (bottom-right) that expands into a chat panel
- Powered by **Groq API** (`llama-3.3-70b-versatile` model) via a Netlify serverless proxy
- Knows my full professional profile: education, skills, projects, achievements, certifications, and availability
- Suggestion chips on open for quick questions
- Smooth typing indicator while the AI is thinking
- Chat history maintained within the session
- Clear chat button with confirmation sound
- **Web Audio API sound engine** — distinct sounds for open, close, send, receive, chip tap, and clear — no audio files, synthesized entirely in the browser

### Technical Details
- **Zero framework dependencies** — pure HTML/CSS/JS
- **Single HTML file** — all CSS and JS are inline, no bundler needed
- **Responsive** — adapts from wide desktop down to mobile with a hamburger nav
- **API key security** — the Groq key lives only in Netlify environment variables, read server-side in a serverless function; nothing sensitive is ever in the browser
- **CSS custom properties** — the entire color system, spacing, and animation timing is driven by `:root` variables, making theming trivial
- **Smooth scrolling** and fixed navbar that gains a blur backdrop on scroll

---

## Projects Showcased

| Project | Stack | Highlights |
|---|---|---|
| **Discord Music Bot** | Node.js, Discord.js | 100+ concurrent users, 15+ slash commands, 80% less moderation effort |
| **PC Optimizer** | Python | 10+ automated cleanup tasks, 30% performance boost, zero-dependency `.exe` |
| **Quiz Application** | Java, OOP | 50+ questions, real-time scoring, 10+ modular classes |
| **Sketchora** | JS, HTML5 Canvas | Collaborative whiteboard, Excalidraw-inspired, runs entirely in the browser |

---

## Tech Stack

| Category | Technologies |
|---|---|
| Languages | JavaScript, Java, Python, C |
| Frontend | HTML5, CSS3, React, Tailwind CSS |
| Backend | Node.js |
| Databases | MySQL, MongoDB |
| Tools | Git, GitHub, VS Code, Figma, Postman |
| AI / Serverless | Groq API, Netlify Functions |

---

## Color Palette

| Role | Color | Hex |
|---|---|---|
| Background | Deep Navy | `#070b14` |
| Surface | Glass White | `rgba(255,255,255,0.04)` |
| Primary Accent | Violet | `#7c3aed` |
| Secondary Accent | Cyan | `#06b6d4` |
| Tertiary Accent | Purple | `#a855f7` |
| Body Text | Cool White | `#e8edf5` |
| Muted Text | Slate | `#9aa3b5` |

---

## Connect

| | |
|---|---|
|Email | [nishantnirwanofficial@gmail.com](mailto:nishantnirwanofficial@gmail.com) |
|LinkedIn | [linkedin.com/in/nishantyadav13](https://linkedin.com/in/nishantyadav13) |
|GitHub | [github.com/nishantnirwan](https://github.com/nishantnirwan) |
|Location | Bulandshahr, Uttar Pradesh, India |

---

<div align="center">

Designed & built by **Nishant Yadav** &nbsp;·&nbsp; Open to internships and collaborations

</div>