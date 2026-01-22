"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Tech Stack", path: "#tech-stack" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/80 backdrop-blur-xl border-b border-ember/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Logo Mark */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ember to-ember-light flex items-center justify-center shadow-glow-sm">
                <span className="font-outfit font-bold text-white text-lg">
                  D
                </span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-outfit font-bold text-xl text-silver-light">
                Dat
              </span>
              <span className="font-outfit font-bold text-xl text-gradient-nature">
                Tran
              </span>
              <span className="text-cyan font-medium">.dev</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={link.path}
                  className="relative px-4 py-2 text-silver hover:text-silver-light transition-colors duration-200 group"
                >
                  <span className="relative z-10 font-medium text-sm">
                    {link.title}
                  </span>
                  {/* Hover underline effect */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan to-ocean rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link
                href="#contact"
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-ember to-ember-light text-white font-semibold text-sm rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded-lg bg-night-lighter/50 border border-silver/10 text-silver-light hover:bg-night-elevated hover:border-ember/30 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-night-light/95 backdrop-blur-xl border-t border-silver/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setNavbarOpen(false)}
                    className="block py-3 px-4 text-silver hover:text-silver-light hover:bg-night-elevated/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setNavbarOpen(false)}
                  className="block w-full py-3 text-center bg-gradient-to-r from-cyan to-ocean text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
