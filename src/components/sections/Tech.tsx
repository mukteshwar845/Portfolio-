import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { techSkills, techCategories } from "../../constants";
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

      {/* Category Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {techCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 xs:px-4 xs:py-2.5 rounded-xl text-[12px] xs:text-[13px] font-medium transition-all duration-300 touch-manipulation ${
                isActive
                  ? "bg-[#915eff] text-white shadow-lg shadow-[#915eff]/30 font-semibold scale-105"
                  : "bg-tertiary/80 text-secondary hover:text-white hover:bg-tertiary border border-white/5"
              }`}
            >
              <span className="text-sm xs:text-base">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Count Indicator */}
      <div className="mt-4 mb-8 text-[13px] text-secondary font-mono flex items-center justify-between">
        <span>
          Showing <span className="text-white font-bold">{filteredSkills.length}</span> technologies
        </span>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 xs:gap-4"
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
              className="group relative flex flex-col items-center justify-center p-3 xs:p-5 rounded-2xl bg-[#151030]/80 backdrop-blur-md border border-white/5 hover:border-[#915eff]/50 hover:bg-[#1c1444] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#915eff]/10"
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
