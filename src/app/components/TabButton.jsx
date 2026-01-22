"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 ${
        active
          ? "text-ember"
          : "text-silver hover:text-silver-light"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ember to-ember-light rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

export default TabButton;
