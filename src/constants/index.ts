import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  seemadrishti,
  keyrush,
  convertx,
  threejs,
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

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    companyName: "Cloud Systems & Scalable Solutions",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Dec 2025",
    points: [
      "Engineered robust full-stack web applications and microservices using Node.js, Express, MongoDB, and Next.js.",
      "Designed secure RESTful APIs, authentication workflows, and scalable database schemas with high availability.",
      "Integrated 3D WebGL visualizations and dynamic data-driven interfaces for complex web platforms.",
      "Automated CI/CD pipelines, containerized deployments with Docker, and optimized server-side query latency.",
    ],
  },
  {
    title: "Full Stack Developer with AI Integration",
    companyName: "AI Solutions & Intelligent Systems",
    icon: logo,
    iconBg: "#151030",
    date: "Jan 2026 - Present",
    points: [
      "Architecting intelligent full-stack applications integrating state-of-the-art LLMs, computer vision, and real-time AI pipelines.",
      "Engineering mission-critical solutions including real-time AI surveillance matrices (SEEMADRISHTI) and automated document intelligence engines.",
      "Bridging modern reactive frontend architectures, 3D WebGL interfaces, and high-throughput AI backend inference models.",
      "Continuously pushing the boundaries of AI-driven developer tooling, intelligent UX, and cutting-edge software engineering.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I've never met a software engineer who truly cares about delivering exceptional craftsmanship and cutting-edge AI integration like Mukteswar does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mukteswar optimized our architecture and integrated intelligent systems, our platform performance and user engagement increased significantly.",
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
      "Real-time 9-channel tactical CCTV surveillance command matrix featuring 60 FPS AI computer vision overlay, ANPR license plate recognition, virtual tripwire alarms, and high-performance recorded archive scrubbing.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "ai-vision",
        color: "green-text-gradient",
      },
      {
        name: "react",
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
];

export { services, technologies, experiences, testimonials, projects };