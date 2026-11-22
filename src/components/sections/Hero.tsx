import React from "react";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { github, linkedin, mail } from "../../assets";

const Hero: React.FC = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>

          {/* Professional Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#0077b5] px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#006097] hover:shadow-[#0077b5]/50"
            >
              <img src={linkedin} alt="LinkedIn" className="h-4 w-4 object-contain brightness-200" />
              <span>LinkedIn</span>
            </a>

            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-tertiary px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
            >
              <img src={github} alt="GitHub" className="h-4 w-4 object-contain" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${config.social.email}`}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-tertiary px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#00cea8] hover:bg-[#00cea8]/10"
            >
              <img src={mail} alt="Email" className="h-4 w-4 object-contain" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;