import React from "react";
import { logo, github, linkedin, mail } from "../../assets";
import { config } from "../../constants/config";
import { navLinks } from "../../constants";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0d091e] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-16">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-[18px] font-bold tracking-wider text-white">
            {config.html.fullName}
          </span>
        </div>

        <ul className="flex list-none flex-wrap justify-center gap-6 text-[15px] text-secondary">
          {navLinks.map((link) => (
            <li key={link.id} className="transition-colors hover:text-white">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary border border-white/10 text-white transition-all hover:scale-110 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <img src={github} alt="GitHub" className="h-5 w-5 object-contain" />
          </a>

          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary border border-white/10 text-[#0077b5] transition-all hover:scale-110 hover:border-[#0077b5] hover:bg-[#0077b5]/20"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-contain" />
          </a>

          <a
            href={`mailto:${config.social.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary border border-white/10 text-[#00cea8] transition-all hover:scale-110 hover:border-[#00cea8] hover:bg-[#00cea8]/20"
            aria-label="Email"
            title="Send Email"
          >
            <img src={mail} alt="Email" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 text-center text-[13px] text-secondary sm:px-16">
        <p>
          © {new Date().getFullYear()} {config.html.fullName}. Built with React, Three.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
