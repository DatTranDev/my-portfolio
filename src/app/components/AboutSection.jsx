"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    content: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-night-elevated/50 border border-silver/10">
          <h4 className="font-outfit font-semibold text-silver-light text-lg">
            Software Engineering
          </h4>
          <p className="text-silver mt-1">
            University of Information Technology (UIT)
          </p>
          <p className="text-silver-dark text-sm mt-1">
            Ho Chi Minh City, Vietnam
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    content: (
      <div className="flex flex-wrap gap-2">
        {["Java", "Node.js", "NestJS", "Go", "React", "React Native", "MongoDB", "PostgreSQL", "Firebase", "Docker", "Git", "Agile/Scrum"].map(
          (skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-ember/10 text-ember border border-ember/20 hover:bg-ember/20 hover:border-ember/40 transition-all duration-200"
            >
              {skill}
            </motion.span>
          )
        )}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-16 md:py-24">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-gradient-thermal">About Me</span>
        </h2>
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-ember to-teal rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-ember-light/10 to-teal/20 rounded-3xl" />
            
            {/* Image Container */}
            <div className="absolute inset-1 rounded-[22px] overflow-hidden bg-night-lighter">
              <Image
                src="/images/about-image.png"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-ember/20 to-ember-light/20 rounded-2xl blur-xl" />
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-br from-teal/20 to-charcoal/20 rounded-2xl blur-xl" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-silver text-base lg:text-lg leading-relaxed">
            I am a{" "}
            <span className="text-ember font-medium">backend developer</span>{" "}
            with a passion for building practical applications. In addition to
            backend development, I can also develop{" "}
            <span className="text-teal font-medium">mobile apps</span> and{" "}
            <span className="text-teal font-medium">web frontends</span>. I am a
            quick learner who enjoys improving my skills and collaborating with
            others to create meaningful products.
          </p>

          {/* Tab Buttons */}
          <div className="flex gap-2">
            {TAB_DATA.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  tab === tabItem.id
                    ? "bg-gradient-to-r from-ember to-ember-light text-white shadow-glow-sm"
                    : "bg-night-lighter text-silver border border-silver/10 hover:border-ember/30 hover:text-silver-light"
                }`}
              >
                {tabItem.icon}
                {tabItem.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-[120px]"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
