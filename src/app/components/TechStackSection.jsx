"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { techStacks } from "../constants/techstacks";
import Image from "next/image";

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="tech-stack" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-gradient-thermal">Tech Stack</span>
        </h2>
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-ember to-teal rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <p className="text-silver mt-6 max-w-lg mx-auto">
          The technologies I use to bring ideas to life
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div ref={ref} className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {techStacks.map((tech, index) => (
            <motion.li
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-night-lighter/80 border transition-all duration-300 cursor-pointer ${
                  hoveredIndex === index
                    ? "border-ember/40 bg-night-elevated/80 shadow-glow-sm"
                    : "border-silver/10 hover:border-silver/20"
                }`}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon Container */}
                <motion.div
                  className="relative w-10 h-10 md:w-12 md:h-12"
                  animate={
                    hoveredIndex === index
                      ? { scale: 1.1 }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-contain drop-shadow-lg"
                    unoptimized
                  />
                </motion.div>

                {/* Tech Name */}
                <p
                  className={`text-xs md:text-sm font-medium text-center transition-colors duration-200 ${
                    hoveredIndex === index ? "text-ember-light" : "text-silver"
                  }`}
                >
                  {tech.title}
                </p>

                {/* Hover Glow */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ember/5 to-teal/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ember/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default TechStackSection;
