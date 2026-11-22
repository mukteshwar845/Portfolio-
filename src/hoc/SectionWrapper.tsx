import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface SectionWrapperProps {
  idName?: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  idName,
  children,
  className = "",
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl ${className}`}
      id={idName}
    >
      {idName && <span className="hash-span">&nbsp;</span>}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;