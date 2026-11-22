import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import {
  technologies,
  techSkills,
  techCategories,
} from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { fadeIn } from "../../utils/motion";

const Tech: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? techSkills
      : techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <SectionWrapper idName="tech">
      <Header useMotion={true} {...config.sections.tech} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        A comprehensive technical ecosystem engineered for high-performance
        full-stack architectures, modern AI & machine learning pipelines,
        scalable database infrastructure, and robust production deployments.
      </motion.p>

      {/* Interactive 3D Floating Stack Showcase */}
      <div className="mt-12 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-white text-[20px] font-bold flex items-center gap-2">
            <span className="text-[#915eff]">✦</span> Core 3D Interactive Stack
          </h3>
          <p className="text-secondary text-[13px] mt-1">
            Drag and rotate individual 3D spheres to inspect key technologies in real-time
          </p>
        </div>
        <span className="text-[12px] font-mono text-[#915eff] bg-[#915eff]/10 border border-[#915eff]/20 px-3 py-1 rounded-full self-start sm:self-auto">
          WebGL Interactive
        </span>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-8 py-4">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center"
            key={technology.name}
          >
            <div className="h-28 w-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="text-[12px] font-medium text-secondary mt-1 tracking-wider uppercase">
              {technology.name}
            </span>
          </div>
        ))}
      </div>

      {/* Categorized Skills Directory */}
      <div className="mt-16 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-white text-[20px] font-bold flex items-center gap-2">
            <span className="text-[#915eff]">◈</span> Full Technical Arsenal
          </h3>
          <p className="text-secondary text-[13px] mt-1">
            Categorized directory of languages, frameworks, AI tools, databases & cloud systems
          </p>
        </div>
        <div className="text-[12px] text-secondary font-mono">
          Showing <span className="text-white font-bold">{filteredSkills.length}</span> technologies
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {techCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#915eff] text-white shadow-lg shadow-[#915eff]/25 font-semibold"
                  : "bg-tertiary/70 text-secondary hover:text-white hover:bg-tertiary border border-white/5"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-[#151030]/80 backdrop-blur-md border border-white/5 hover:border-[#915eff]/50 hover:bg-[#1c1444] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#915eff]/10"
            >
              <div className="relative w-14 h-14 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#915eff]/40 transition-all duration-300 shadow-inner">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 text-white text-[15px] font-semibold text-center group-hover:text-[#c4a1ff] transition-colors">
                {skill.name}
              </h4>
              <span className="mt-1 text-[11px] font-medium text-secondary text-center">
                {skill.tag}
              </span>
              <span className="mt-2 text-[10px] font-mono text-purple-300/80 bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded-full">
                {skill.categoryLabel}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

export default Tech;
