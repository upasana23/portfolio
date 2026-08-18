# Upasana Majumder — Portfolio

A dark, editorial-style personal portfolio built with **React 19** and **Vite**. Designed to showcase work at the intersection of AI/ML, Web3, and full-stack development.

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Editorial header with status labels, visual frame, and ticker tape |
| **About** | Bio + cyberpunk HUD status matrix |
| **Education** | Academic background and coursework |
| **Skills** | Categorized skill matrix across Languages, Frontend, Backend, AI/ML, and Web3 |
| **Projects** | Featured projects with problem/solution breakdowns |
| **Contact** | Connect via GitHub, Email, or LinkedIn |

---

## Tech Stack

**Frontend**
- React 19
- Vite
- CSS (custom design system, no framework)

**Key Technologies Highlighted**
- **AI/ML:** Python, PyTorch, TensorFlow, YOLO, OpenCV, Gemini AI
- **Web3:** Solidity, Smart Contracts, Ethereum, OP Stack, IPFS
- **Full-Stack:** Next.js, React.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── Education.jsx / Education.css
│   ├── Skills.jsx / Skills.css
│   ├── Projects.jsx / Projects.css
│   ├── Contact.jsx / Contact.css
│   └── Navbar.jsx / Navbar.css
├── data/
│   └── portfolio.js          # Centralized project, skills, and personal data
├── styles/
│   └── index.css             # Design system tokens (colors, fonts, spacing)
├── assets/
│   └── ...
├── App.jsx
└── main.jsx
```

---

## Customization

All content lives in **`src/data/portfolio.js`**. Update the following exports to personalize:

- `PERSONAL` — name, email, GitHub, LinkedIn, location, institution
- `PROJECTS_DATA` — project cards with descriptions, tech stacks, and links
- `SKILLS_DATA` — categorized skills and icons
- `COURSEWORK` — relevant coursework list

Design tokens (colors, typography, spacing) are defined as CSS custom properties in **`src/styles/index.css`**.

---

## Contact

- **GitHub:** [@upasana23](https://github.com/upasana23)
- **LinkedIn:** [linkedin.com/in/upasana-majumder-5a9264287](https://www.linkedin.com/in/upasana-majumder-5a9264287/)
- **Email:** upasanamajumder2006@gmail.com

---

Built with React + Vite. Deployed on Vercel.
