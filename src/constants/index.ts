import type {
  TNavLink,
  TService,
  TTechnology,
  TTechSkill,
  TTechCategory,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  python,
  java,
  cLang,
  django,
  flask,
  firebase,
  supabase,
  postgres,
  mysql,
  numpy,
  pandas,
  matplotlib,
  tensorflow,
  scikitlearn,
  yolo,
  llmrouter,
  github,
  vercel,
  netlify,
  render,
  anaconda,
  canva,
  stitch,
  vscode,
  colab,
  eclipse,
  pycharm,
  jupyternotebook,
  jupyterlab,
  antigravity,
  seemadrishti,
  keyrush,
  convertx,
  cognora,
  logo,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer with AI Integration",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

export const techCategories: TTechCategory[] = [
  { id: "all", title: "All Skills", icon: "⚡" },
  { id: "web", title: "Web & Languages", icon: "🌐" },
  { id: "database", title: "Databases", icon: "🗄️" },
  { id: "aiml", title: "AI/ML & Data Science", icon: "🤖" },
  { id: "tools", title: "Tools & Deployment", icon: "🛠️" },
  { id: "editors", title: "Code Editors & IDEs", icon: "💻" },
  { id: "design", title: "UI/UX & Design", icon: "🎨" },
];

export const techSkills: TTechSkill[] = [
  // 🌐 Web & Languages
  {
    name: "Python",
    icon: python,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Backend & AI",
    featuredIn3D: true,
  },
  {
    name: "Java",
    icon: java,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Enterprise & OOP",
    featuredIn3D: true,
  },
  {
    name: "C",
    icon: cLang,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Programming Language",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Core Web",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Type-Safe JS",
    featuredIn3D: true,
  },
  {
    name: "React",
    icon: reactjs,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Frontend Library",
    featuredIn3D: true,
  },
  {
    name: "Django",
    icon: django,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Python Framework",
  },
  {
    name: "Flask",
    icon: flask,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Microframework",
  },
  {
    name: "HTML5",
    icon: html,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Semantic Markup",
  },
  {
    name: "CSS3",
    icon: css,
    category: "web",
    categoryLabel: "Web & Languages",
    tag: "Modern Styling",
  },

  // 🗄️ Databases
  {
    name: "PostgreSQL",
    icon: postgres,
    category: "database",
    categoryLabel: "Databases",
    tag: "Relational DB",
    featuredIn3D: true,
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "database",
    categoryLabel: "Databases",
    tag: "SQL Database",
  },
  {
    name: "Supabase",
    icon: supabase,
    category: "database",
    categoryLabel: "Databases",
    tag: "Backend & Auth",
    featuredIn3D: true,
  },
  {
    name: "Firebase",
    icon: firebase,
    category: "database",
    categoryLabel: "Databases",
    tag: "Realtime NoSQL",
  },

  // 🤖 Data Science & AI/ML
  {
    name: "TensorFlow",
    icon: tensorflow,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Deep Learning",
    featuredIn3D: true,
  },
  {
    name: "Scikit-Learn",
    icon: scikitlearn,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Machine Learning",
  },
  {
    name: "YOLO",
    icon: yolo,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Computer Vision",
    featuredIn3D: true,
  },
  {
    name: "LLM Router",
    icon: llmrouter,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "AI Orchestration",
  },
  {
    name: "NumPy",
    icon: numpy,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Numerical Math",
  },
  {
    name: "Pandas",
    icon: pandas,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Data Analysis",
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
    category: "aiml",
    categoryLabel: "AI/ML & Data Science",
    tag: "Data Visualization",
  },

  // 🛠️ Tools & Deployment
  {
    name: "Git",
    icon: git,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Version Control",
    featuredIn3D: true,
  },
  {
    name: "GitHub",
    icon: github,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "CI/CD & DevOps",
  },
  {
    name: "Docker",
    icon: docker,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Containers",
    featuredIn3D: true,
  },
  {
    name: "Vercel",
    icon: vercel,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Frontend Cloud",
  },
  {
    name: "Netlify",
    icon: netlify,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Edge Hosting",
  },
  {
    name: "Render",
    icon: render,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Cloud Services",
  },
  {
    name: "Anaconda",
    icon: anaconda,
    category: "tools",
    categoryLabel: "Tools & Deployment",
    tag: "Env Management",
  },

  // 🎨 Design
  {
    name: "Figma",
    icon: figma,
    category: "design",
    categoryLabel: "UI/UX & Design",
    tag: "UI/UX Design",
  },
  {
    name: "Canva",
    icon: canva,
    category: "design",
    categoryLabel: "UI/UX & Design",
    tag: "Visual Graphics",
  },
  {
    name: "Stitch",
    icon: stitch,
    category: "design",
    categoryLabel: "UI/UX & Design",
    tag: "Design Systems",
  },

  // 💻 Code Editors & Environments
  {
    name: "VS Code",
    icon: vscode,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Primary Code Editor",
  },
  {
    name: "Google Colab",
    icon: colab,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Cloud AI Notebooks",
  },
  {
    name: "Eclipse",
    icon: eclipse,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Java Enterprise IDE",
  },
  {
    name: "PyCharm",
    icon: pycharm,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Python IDE",
  },
  {
    name: "Jupyter Notebook",
    icon: jupyternotebook,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Interactive Data Science",
  },
  {
    name: "JupyterLab",
    icon: jupyterlab,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Advanced Notebooks",
  },
  {
    name: "Antigravity",
    icon: antigravity,
    category: "editors",
    categoryLabel: "Editors & IDEs",
    tag: "Agentic AI IDE",
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "YOLO",
    icon: yolo,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Web Applications & UI Engineering",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Architected responsive, performant user interfaces using React.js, TypeScript, and modern styling architectures.",
      "Engineered client-side performance optimizations, state management patterns, and interactive component libraries.",
      "Collaborated closely with product designers and engineers to convert complex requirements into intuitive digital experiences.",
      "Enforced strict code standards, accessible UX patterns, and seamless cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Engineer",
    companyName: "Modern Web & Software Systems",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Dec 2025",
    points: [
      "Engineered responsive, dynamic full-stack web applications with clean, modular architecture.",
      "Developed backend services, database operations, and seamless data flow between client and server.",
      "Optimized system performance, query efficiency, and cross-platform reliability.",
      "Maintained high code quality through rigorous automated testing and continuous integration.",
    ],
  },
  {
    title: "Full Stack Developer with AI Integration",
    companyName: "AI Solutions & Intelligent Systems",
    icon: creator,
    iconBg: "#151030",
    date: "Jan 2026 - Jun 2026",
    points: [
      "Architected intelligent full-stack applications integrating modern LLMs, neural vision pipelines, and agentic workflows.",
      "Designed resilient microservices, vector search indexing, and real-time inference pipelines with high throughput.",
      "Built full-stack web architectures utilizing React, TypeScript, Python/Flask, and modern database systems.",
      "Pioneered full-lifecycle AI integrations from prototype to production with automated observability.",
    ],
  },
  {
    title: "AI Tools Explorer & Solutions Specialist",
    companyName: "Applied AI Research & Emerging Technologies",
    icon: logo,
    iconBg: "#383E56",
    date: "Jul 2026 - Present",
    points: [
      "Exploring cutting-edge AI tools, multi-modal LLM ecosystems, and automated agentic development frameworks.",
      "Benchmarking autonomous developer agents, prompt engineering strategies, and modern neural workflow engines.",
      "Experimenting with next-generation developer tooling, computer vision models, and intelligent assistant architectures.",
      "Synthesizing emerging AI capabilities into practical, high-impact digital solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mukteswar proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mukteswar does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mukteswar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "SEEMADRISHTI",
    description:
      "Advanced AI surveillance and reconnaissance system equipped with computer vision, real-time threat detection, and telemetry tracking engineered for precision monitoring and situational intelligence.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai-vision",
        color: "green-text-gradient",
      },
      {
        name: "yolo",
        color: "pink-text-gradient",
      },
    ],
    image: seemadrishti,
    sourceCodeLink: "https://github.com/mukteshwar845/SEEMADRISHTI",
  },
  {
    name: "KEYRUSH 3D",
    description:
      "Immersive 3D typing-racing game that turns typing practice into a high-speed racing competition. Compete against AI opponents, customize racecars, analyze WPM analytics, with full offline gameplay support.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "webgl",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: keyrush,
    sourceCodeLink: "https://github.com/mukteshwar845/KEYRUSH-3D",
  },
  {
    name: "ConvertX",
    description:
      "Fast, intelligent file conversion platform engineered for high-fidelity document layout, formatting, and content preservation across diverse document and media formats.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: convertx,
    sourceCodeLink: "https://github.com/mukteshwar845/ConvertX",
  },
  {
    name: "Cognora AI",
    description:
      "Intelligent AI study assistant and personalized learning workspace engineered to accelerate knowledge acquisition with automated lecture digests, custom study roadmaps, and LLM-powered diagnostics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llm-agent",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: cognora,
    sourceCodeLink: "https://github.com/mukteshwar845/Cognora-AI-Study-Assistant",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
