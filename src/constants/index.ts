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
  creator,
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
  carrent,
  jobit,
  tripguide,
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
  {
    title: "Content Creator",
    icon: creator,
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
    companyName: "Freelance & Client Projects",
    icon: web,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining modern web applications using React.js and TypeScript.",
      "Collaborating with cross-functional teams to create high-quality, responsive user interfaces.",
      "Implementing responsive design and ensuring seamless cross-browser compatibility.",
      "Participating in code reviews and optimizing web performance.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Mobile Innovations",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2023",
    points: [
      "Building performant cross-platform mobile applications using React Native and modern libraries.",
      "Integrating RESTful APIs, state management, and smooth touch gestures.",
      "Ensuring responsive mobile UI layouts across iOS and Android devices.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Tech Solutions",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2023 - Dec 2023",
    points: [
      "Developing robust backend services and REST APIs with Node.js, Express, and MongoDB.",
      "Architecting full-stack web applications with modern reactive user interfaces.",
      "Writing clean, modular, and maintainable TypeScript code with end-to-end reliability.",
    ],
  },
  {
    title: "Software Engineer & 3D Web Creator",
    companyName: "Mukteswar Studio",
    icon: logo,
    iconBg: "#151030",
    date: "Jan 2024 - Present",
    points: [
      "Crafting immersive 3D web experiences using Three.js, React Three Fiber, and Tailwind CSS.",
      "Designing and delivering modern, interactive portfolio experiences with optimal performance.",
      "Continuously learning cutting-edge web technologies and software engineering best practices.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/mukteshwar845",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/mukteshwar845",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/mukteshwar845",
  },
];

export { services, technologies, experiences, testimonials, projects };
