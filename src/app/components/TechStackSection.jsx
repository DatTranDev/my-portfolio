"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStacks } from "../constants/techstacks";


const TechStacksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="tech-stack" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        Tech Stacks
      </h2>
      <ul
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6"
      >
        {techStacks.map((tech, index) => (
          <motion.li
            key={tech.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <img src={tech.image} alt={tech.title} className="h-12" />
            {/* <p className="text-white text-sm">{tech.title}</p> */}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default TechStacksSection;
