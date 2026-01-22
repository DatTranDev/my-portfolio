"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-night-light/95 backdrop-blur-xl border-t border-silver/10"
    >
      <ul className="flex flex-col items-center py-6 space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
