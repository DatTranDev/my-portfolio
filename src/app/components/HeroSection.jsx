"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-12 lg:py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-night-lighter/80 border border-nature/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-nature"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0)",
                  "0 0 0 4px rgba(16, 185, 129, 0.2)",
                  "0 0 0 0 rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-silver text-sm font-medium">
              Open to new opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="mb-6">
            <motion.span
              className="block text-silver-light text-xl md:text-2xl font-medium mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I&apos;m
            </motion.span>
            <motion.span
              className="block font-outfit font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-gradient-nature">Thanh Dat</span>
            </motion.span>
            <motion.div
              className="mt-4 font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl text-silver-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Backend Engineer",
                  2500,
                  "Full Stack Developer",
                  2500,
                  "System Architect",
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-silver"
              />
            </motion.div>
          </h1>

          {/* Description */}
          <motion.p
            className="text-silver text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A passionate backend developer crafting{" "}
            <span className="text-cyan font-medium">scalable systems</span>,
            with expertise in full-stack and mobile development.
            Building the future,{" "}
            <span className="text-nature font-medium">one line at a time</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-nature to-cyan text-white font-bold rounded-2xl shadow-glow-nature hover:shadow-glow-cyan transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
                <motion.svg
                  className="w-5 h-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://drive.google.com/file/d/1-1B7MrEcAen0qEswJ0ban8HMuKYcI7_2/view?usp=sharing"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-night-lighter border-2 border-silver/20 hover:border-nature/50 text-silver-light font-bold rounded-2xl transition-all duration-300 hover:bg-night-elevated"
              >
                <svg
                  className="w-5 h-5 text-nature group-hover:text-cyan transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download CV</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { value: "1+", label: "Years Experience" },
              { value: "6+", label: "Projects Completed" },
              { value: "4+", label: "Technologies" },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="font-outfit font-bold text-2xl lg:text-3xl text-gradient-thermal">
                  {stat.value}
                </div>
                <div className="text-silver-dark text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-ember/30 via-ember-light/20 to-teal/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Avatar Container */}
            <motion.div
              className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ember via-ember-light to-teal p-1">
                <div className="w-full h-full rounded-full bg-night-light" />
              </div>

              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-night-light to-night-lighter">
                <Image
                  src="/images/hero-image.png"
                  alt="Thanh Dat - Backend Developer"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -right-4 top-1/4 w-4 h-4 rounded-full bg-ember"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-6 bottom-1/3 w-3 h-3 rounded-full bg-teal"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute right-1/4 -bottom-4 w-2.5 h-2.5 rounded-full bg-gold"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
