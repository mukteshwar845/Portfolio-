import React from "react";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero: React.FC = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex-1 min-w-0">
          <h1
            className={`${styles.heroHeadText} text-white`}
            aria-label="Hi, I'm Mukteswar Gochhayat"
          >
            Hi, I'm{" "}
            <span className="text-[#915EFF] block xs:inline">
              {config.hero.name}
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 mt-2 max-w-3xl`}
          >
            {config.hero.p[0]}
            {config.hero.p[1] && (
              <>
                <br className="hidden sm:block" /> {config.hero.p[1]}
              </>
            )}
          </p>

          {/* CTA buttons — visible on mobile where 3D canvas is hidden */}
          <div className="mt-8 flex flex-wrap gap-3 sm:hidden">
            <a
              href="#about"
              className="rounded-xl bg-[#915EFF] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#915EFF]/30 transition-transform hover:scale-105 active:scale-95"
            >
              View My Work ↓
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-[#915EFF] hover:bg-[#915EFF]/10 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-10 hidden w-full items-center justify-center sm:flex">
        <a href="#about" aria-label="Scroll down">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <div className="mb-1 h-3 w-3 animate-bounce rounded-full bg-secondary" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
