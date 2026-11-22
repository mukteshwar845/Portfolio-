type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mukteswar Gochhayat | 3D Portfolio",
    fullName: "Mukteswar Gochhayat",
  },
  social: {
    github: "https://github.com/mukteshwar845",
    linkedin: "https://www.linkedin.com/in/mukteswar-gochhayat-119a80368",
  },
  hero: {
    name: "Mukteswar",
    p: [
      "I build full-stack applications, explore AI/ML technologies",
      "and turn ideas into real-world solutions",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Full-Stack Developer with AI integration and AI/ML enthusiast passionate about building innovative web applications and intelligent digital solutions. With a foundation in Java and Python, I focus on developing modern, scalable applications, integrating AI-powered capabilities, and solving real-world problems through technology. I enjoy exploring emerging technologies, turning creative ideas into practical solutions, and continuously improving my engineering skills. My goal is to build impactful products that combine innovation, functionality, and great user experiences.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    tech: {
      p: "My Technical Arsenal",
      h2: "Technologies & Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};