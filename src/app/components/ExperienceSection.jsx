"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const experienceData = [
  {
    id: 1,
    period: "10/2025 - Present",
    role: "Java Developer",
    company: "Spiral Edge CO., LTD",
    type: "Full-time",
    achievements: [
      "Developed and optimized backend APIs using Java and Spring Framework 3 for the my.tend.com platform",
      "Designed database schemas and integrated third-party services",
      "Contributed to code reviews to improve overall system quality",
    ],
    technologies: ["Java", "Spring Framework", "Backend APIs", "Database Design"],
    color: "cyan",
  },
  {
    id: 2,
    period: "06/2025 - 08/2025",
    role: "Product Backend Intern",
    company: "GEEK UP TECHNOLOGY JSC",
    type: "Internship",
    achievements: [
      "Developed and maintained internal HR management system with admin and user portals",
      "Built Commitment module for workload & office management",
      "Optimized backend services using NestJS, Go, PostgreSQL, and NATS in Agile/Scrum workflow",
    ],
    technologies: ["NestJS", "Go", "PostgreSQL", "NATS", "Agile/Scrum"],
    color: "nature",
  },
];

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: {
      gradient: "from-cyan to-ocean",
      bg: "bg-cyan/10",
      border: "border-cyan/30",
      text: "text-cyan",
    },
    nature: {
      gradient: "from-nature to-nature-light",
      bg: "bg-nature/10",
      border: "border-nature/30",
      text: "text-nature",
    },
  };

  const colors = colorClasses[experience.color];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Node */}
      <motion.div
        className={`absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-gradient-to-br ${colors.gradient} border-4 border-night z-10 shadow-glow`}
        initial={{ scale: 0, x: "-50%" }}
        animate={isInView ? { scale: 1, x: "-50%" } : { x: "-50%" }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
      />

      {/* Card */}
      <motion.div
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`relative p-6 md:p-8 rounded-2xl bg-night-lighter/80 border ${
            isHovered ? colors.border : "border-silver/10"
          } transition-all duration-300 backdrop-blur-sm overflow-hidden group`}
        >
          {/* Top gradient line */}
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />

          {/* Period Badge */}
          <motion.div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-4`}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {experience.period}
          </motion.div>

          {/* Role & Company */}
          <h3 className="font-outfit font-bold text-xl md:text-2xl text-silver-light mb-2">
            {experience.role}
          </h3>
          <div className="flex items-center gap-3 mb-6">
            <p className={`font-medium ${colors.text}`}>{experience.company}</p>
            <span className="px-2 py-0.5 text-xs rounded-md bg-night-elevated text-silver border border-silver/10">
              {experience.type}
            </span>
          </div>

          {/* Achievements */}
          <div className="space-y-3 mb-6">
            {experience.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 + idx * 0.1 }}
              >
                <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} flex-shrink-0`} />
                <p className="text-silver text-sm leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-night-elevated/80 text-silver border border-silver/10 hover:border-silver/30 hover:text-silver-light transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + idx * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="experience" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl mb-4">
          <span className="text-gradient-thermal">Work Experience</span>
        </h2>
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan to-nature rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <p className="text-silver mt-6 max-w-lg mx-auto">
          A journey through backend development, full-stack innovation, and continuous learning
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <motion.div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ocean via-cyan to-nature"
          initial={{ scaleY: 0, x: "-50%" }}
          whileInView={{ scaleY: 1, x: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
        />

        {/* Experience Cards */}
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ember to-ember-light text-white font-bold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Let&apos;s Build Something Amazing
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
