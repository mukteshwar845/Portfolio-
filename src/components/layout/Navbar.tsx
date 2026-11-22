import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close, github, linkedin, mail } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled ? "bg-primary/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 rounded-lg object-cover shadow-sm" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {config.html.fullName}
          </p>
        </Link>

        {/* Desktop Navigation & Social Links */}
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex list-none flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[17px] font-medium transition-colors hover:text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-white/15" />

          <div className="flex items-center gap-3">
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-110 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <img src={github} alt="GitHub" className="h-5 w-5 object-contain" />
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-110 hover:border-[#0077b5] hover:bg-[#0077b5]/20"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <img src={linkedin} alt="LinkedIn" className="h-5 w-5 object-contain text-[#0077b5]" />
            </a>
            <a
              href={`mailto:${config.social.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-110 hover:border-[#00cea8] hover:bg-[#00cea8]/20"
              aria-label="Email Me"
              title="Send Direct Email"
            >
              <img src={mail} alt="Email" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] flex-col rounded-xl border border-white/10 p-6 shadow-2xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="my-4 h-[1px] w-full bg-white/10" />

            <div className="flex items-center gap-3">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10"
                aria-label="GitHub"
              >
                <img src={github} alt="GitHub" className="h-4 w-4 object-contain" />
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="h-4 w-4 object-contain" />
              </a>
              <a
                href={`mailto:${config.social.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10"
                aria-label="Email"
              >
                <img src={mail} alt="Email" className="h-4 w-4 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;