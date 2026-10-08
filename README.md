# E-CELL | Walchand Institute of Technology, Solapur
### Modern Entrepreneurship & Innovation Ecosystem Platform

> **"Ideas are everywhere. We make them happen."**

A premium, interactive web platform built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed as a student-led venture accelerator and innovation hub rather than a standard college committee website.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production deployment
npm run build
```

Local preview: `http://localhost:3000`

---

## 📁 Modular Data Architecture (Edit Without Touching Code)

All website content, metrics, members, and events are strictly decoupled into independent data configuration files inside `src/data/`:

| Data File | What It Controls |
| :--- | :--- |
| **[`src/data/stats.js`](src/data/stats.js)** | Dynamic statistics (Core Members, Events, Students Reached, Ideas Incubated, etc.) with animated viewport counters. |
| **[`src/data/events.js`](src/data/events.js)** | Featured flagship event ("IGNITE E-SUMMIT 2026") with live countdown timer, plus upcoming & past events with full agendas and prize pools. |
| **[`src/data/team.js`](src/data/team.js)** | 20-member team roster with coordinates for the interactive network graph, editorial roster wall, and hierarchy tree. |
| **[`src/data/initiatives.js`](src/data/initiatives.js)** | Signature programs (Startup Bootcamp, Idea Lab, Founder Sessions, Pitch Arena, Innovation Challenges, Mentor Connect). |
| **[`src/data/speakers.js`](src/data/speakers.js)** | Guest entrepreneurs, seed investors, patent counsels, and distinguished WIT alumni. |
| **[`src/data/startups.js`](src/data/startups.js)** | Student-engineered prototypes and venture showcase ("Ideas Born Here"). |
| **[`src/data/gallery.js`](src/data/gallery.js)** | Filterable photo moments from the ecosystem (Events, Workshops, Pitches, Campus, Behind The Scenes). |
| **[`src/data/testimonials.js`](src/data/testimonials.js)** | Student builder quotes and outcome metrics. |

---

## 🖼️ Dropping Real Photographs & Official College Logo

Clearly labeled image assets are structured in `public/assets/`:

1. **Official WIT College Logo**:
   - Save your official file as `public/assets/college/college-logo.svg` or `public/assets/college/college-logo.png`.
   - Used respectfully in the sticky navbar and footer without distortion or artificial redesign.

2. **Team Photographs**:
   - `public/assets/team/president.jpg`
   - `public/assets/team/vice-president.jpg`
   - `public/assets/team/tech-head.jpg`, etc.

3. **Event Posters**:
   - `public/assets/events/flagship-summit.jpg`
   - `public/assets/events/event-01.jpg`, etc.

4. **Gallery Moments**:
   - `public/assets/gallery/gallery-01.jpg` to `gallery-08.jpg`.

---

## 🚀 Key Interactive Highlights

- **Snappy Preloader**: Fast kinetic typographic countdown (`E` → `EC` → `E-C` → `E-CELL`) in ~1.2s.
- **Interactive Idea Canvas**: Dynamic node particles where cursor movement creates an idea gravity well and network connections (`IDEA → PEOPLE → ACTION → IMPACT`).
- **Interactive Team Ecosystem**:
  - **Network View**: SVG interconnected node graph with live connection highlights on hover.
  - **Editorial Wall**: Asymmetric cards categorized by Leadership, Domain Heads, and Associates.
  - **Organizational Structure**: Interactive governance flow chart.
- **Flagship Event Countdown**: Real-time Days : Hours : Minutes : Seconds timer.
- **Detailed Event Modal**: Comprehensive agenda, speaker list, prize breakdown, eligibility, and FAQs.
- **Interactive Founder Journey**: 6-stage lifecycle roadmap (`IDEA → VALIDATE → BUILD → PITCH → LAUNCH → IMPACT`).
- **Hidden Easter Egg**: Clicking the `E-CELL` navbar logo 5 times unlocks the secret founder modal and confetti celebration!
- **Desktop Custom Cursor**: Trailing glow ring that dynamically expands and displays context labels on hover.
- **Direct Dispatch Form**: Application and partnership transmission with confetti feedback.
- **Live Solapur Clock**: Integrated in the footer displaying real-time IST hours.
