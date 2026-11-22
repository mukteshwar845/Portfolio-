# Mukteswar Gochhayat — 3D Developer Portfolio

<div align="center">
  <img src="public/logo.png" alt="Mukteswar Gochhayat Logo" width="120" style="border-radius: 20px; box-shadow: 0 4px 20px rgba(145, 94, 255, 0.4);" />
  
  <h3>Modern 3D Developer Portfolio &amp; AI Integration Showcase</h3>
  <p>Built with <strong>React 18</strong>, <strong>Three.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong></p>

  <p align="center">
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" /></a>
    <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-0.161.0-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <img src="https://img.shields.io/badge/Security-Hardened-00cea8?style=for-the-badge&logo=securityscorecard&logoColor=white" alt="Security Hardened" />
  </p>
</div>

---

## 🌟 Overview

Welcome to the personal 3D Developer Portfolio of **Mukteswar Gochhayat**. 

I am a Full-Stack Developer with AI integration and an AI/ML enthusiast passionate about building innovative web applications and intelligent digital solutions. With a foundation in Java and Python, I focus on developing modern, scalable applications, integrating AI-powered capabilities, and solving real-world problems through technology.

This portfolio combines real-time 3D WebGL computer graphics, physics-driven particle animations, interactive component matrices, and an optimized, secure contact pipeline.

---

## 🚀 Featured Real-World Projects

All featured projects are engineered with clean single-row desktop responsiveness, GitHub source links, and photorealistic UI representations:

| Project | Domain | Overview |
| :--- | :--- | :--- |
| **SEEMADRISHTI** | AI Vision & Defense | Advanced AI surveillance and reconnaissance system equipped with computer vision, real-time threat detection, and telemetry tracking engineered for precision monitoring and situational intelligence. |
| **KEYRUSH 3D** | 3D Gaming & WebGL | Immersive 3D typing-racing game that turns typing practice into a high-speed racing competition. Compete against AI opponents, customize racecars, and analyze live WPM analytics. |
| **ConvertX** | SaaS Utilities | Fast, intelligent file conversion platform engineered for high-fidelity document layout, formatting, and content preservation across diverse document and media formats. |
| **Cognora AI** | EdTech & AI Workspace | Intelligent AI study assistant and personalized learning workspace engineered to accelerate knowledge acquisition with automated lecture digests, custom study roadmaps, and LLM-powered diagnostics. |

---

## 🛠️ Technical Arsenal

- **Web & Languages:** Java, Python, C (Programming Language), TypeScript, JavaScript, HTML5, CSS3, React.js, Next.js, Django, Flask
- **AI/ML & Data Science:** TensorFlow, Scikit-Learn, YOLO (Computer Vision), LLM Router, NumPy, Pandas, Matplotlib
- **Databases & Backend:** PostgreSQL, MySQL, Supabase, Firebase, MongoDB, Node.js
- **Tools & Deployment:** Git, GitHub Actions, Docker, Vercel, Netlify, Render, Anaconda
- **Code Editors & IDEs:** VS Code, Google Colab, PyCharm, Eclipse, Jupyter Notebook, JupyterLab, Antigravity
- **UI/UX & Design:** Figma, Canva, Stitch, Tailwind CSS, Framer Motion

---

## 🔒 Security & Privacy Architecture

This repository follows industry-standard security and privacy practices to ensure zero credential leaks and complete identity protection:

1. **Zero Plain-Text Email Exposure:**
   - The developer's personal email address is **never exposed anywhere in the client-side UI, HTML DOM, or static JavaScript bundle**.
   - Casual visitors, automated web scrapers, and spam bots cannot extract or harvest email addresses from the site.

2. **Obfuscated Asynchronous Contact Dispatch:**
   - Form submissions are securely dispatched through an asynchronous, non-blocking background pipeline (`keepalive: true`).
   - Uses runtime decoding and supports optional custom masked tokens (`VITE_CONTACT_ENDPOINT`).
   - Instant user feedback with zero UI freezes or third-party tab redirects.

3. **Anti-Bot & Anti-Spam Protection:**
   - Integrated silent honeypot fields (`_honey`) to trap and automatically drop automated spam bot submissions.
   - Client-side validation enforces required, sanitized input formats.

4. **Reverse Tabnabbing Mitigation:**
   - Every external hyperlink and programmatic tab opener enforces `rel="noopener noreferrer"` and `window.open(..., "_blank", "noopener,noreferrer")` to prevent malicious parent window manipulation.

5. **Strict Environment Credential Isolation:**
   - All environment variables (`.env`, `.env.*.local`) are strictly ignored by `.gitignore`.
   - A sanitized `.env.example` template is provided for local setup without committing secrets.

---

## 🔍 Search Engine Optimization (SEO)

Engineered for Google People Search, Knowledge Graph, and cross-platform social indexing:

- **Schema.org JSON-LD:** Structured graph defining `Person`, `WebSite`, and `ProfilePage` entities linking canonical identity, skills, and official GitHub and LinkedIn profiles.
- **Search Engine Directives:** Comprehensive [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml) for Googlebot and Bingbot discovery.
- **Open Graph & Twitter Cards:** Complete rich preview metadata paired with `1200 x 630` social card assets (`public/og-image.png`).
- **Semantic Fallback (`<noscript>`):** Full crawlable HTML fallback ensuring search engines without JavaScript can index bio, skills, and project highlights.

---

## 📁 Project Structure

```text
reactjs18-3d-portfolio/
├── public/                       # Static public assets & search engine directives
│   ├── models/                   # Optimized 3D GLTF/GLB models (desktop_pc, planet)
│   ├── logo.png                  # Developer branding mark
│   ├── og-image.png              # 1200x630 social card preview
│   ├── robots.txt                # Search bot crawl permissions & sitemap reference
│   └── sitemap.xml               # Search engine index XML sitemap
├── src/
│   ├── assets/                   # Icons, technology SVGs, and 16:9 project visuals
│   │   ├── projects/             # Real-world project showcase imagery
│   │   └── tech/                 # Official technology and IDE SVGs
│   ├── components/
│   │   ├── atoms/                # Atomic UI building blocks (Header, CanvasLoader)
│   │   ├── canvas/               # 3D WebGL scenes (Computers, Ball, Earth, Stars)
│   │   ├── layout/               # Global layout components (Navbar, Footer, Loader)
│   │   └── sections/             # Page sections (Hero, About, Experience, Tech, Works, Feedbacks, Contact)
│   ├── constants/                # Data configurations and typography
│   │   ├── config.ts             # Bio, section metadata, and form schemas
│   │   ├── index.ts              # Tech stack matrix, project records, and timeline data
│   │   └── styles.ts             # Global layout & padding constants
│   ├── hoc/                      # Higher-Order Components (SectionWrapper)
│   ├── types/                    # TypeScript interfaces & types (index.d.ts)
│   ├── utils/                    # Framer Motion animation variants & helpers
│   ├── App.tsx                   # Main application orchestrator
│   ├── globals.css               # Tailwind CSS directives & custom keyframes
│   └── main.tsx                  # React DOM entry point
├── .env.example                  # Environment variable configuration template
├── .gitignore                    # Git tracking ignore rules
├── index.html                    # SEO metadata, JSON-LD Schema, and noscript fallback
├── package.json                  # Dependencies & execution scripts
├── tailwind.config.cjs           # Tailwind CSS design system rules
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.js                # Vite bundler build settings
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mukteshwar845/Portfolio-.git
   cd Portfolio-
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Copy the example environment template:
   ```bash
   cp .env.example .env
   ```
   *(No environment variables are strictly required for local development; default secure dispatch is automatically enabled).*

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Validation Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run ts:check` | Validates all TypeScript types with `tsc --noEmit` (zero errors). |
| `npm run lint` | Enforces code standards with ESLint (`--max-warnings 0`). |
| `npm run build` | Compiles and optimizes assets into production-ready `dist/` bundle. |
| `npm run preview` | Previews the local production build before deployment. |

---

## 👤 Author & Connect

**Mukteswar Gochhayat**
- **Role:** Full-Stack Developer with AI Integration
- **GitHub:** [mukteshwar845](https://github.com/mukteshwar845)
- **LinkedIn:** [Mukteswar Gochhayat](https://www.linkedin.com/in/mukteswar-gochhayat-119a80368)
- **Portfolio Inquiries:** Connect directly via the Portfolio Contact Section

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
