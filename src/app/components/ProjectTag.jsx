"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      onClick={() => onClick(name)}
      className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-r from-ember to-ember-light text-white shadow-glow-sm"
          : "bg-night-lighter text-silver border border-silver/10 hover:border-ember/30 hover:text-silver-light"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
