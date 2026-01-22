"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-silver/10 bg-night-light/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ember to-ember-light flex items-center justify-center">
              <span className="font-outfit font-bold text-white text-sm">D</span>
            </div>
            <span className="font-outfit font-semibold text-silver-light">
              DatTran<span className="text-cyan">.dev</span>
            </span>
          </motion.div>

          {/* Center Column: Copyright & Tech Stack */}
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.p
              className="text-silver text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              © {currentYear} Thanh Dat Tran. All rights reserved.
            </motion.p>
            <motion.p
              className="text-silver-dark text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Built with Next.js, Tailwind CSS & Framer Motion
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="#about"
              className="text-silver hover:text-cyan transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-silver hover:text-cyan transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-silver hover:text-cyan transition-colors text-sm"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
