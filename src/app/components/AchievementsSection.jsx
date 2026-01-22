"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "6",
    postfix: "+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    prefix: "~",
    metric: "Lines of Code",
    value: "100000",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    metric: "Technologies",
    value: "12",
    postfix: "+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    metric: "Years Experience",
    value: "1",
    postfix: "+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-night-lighter/80 to-night-elevated/50 border border-silver/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ember via-ember-light to-teal" />
        
        <div className="px-6 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {achievementsList.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ember/10 text-ember mb-4 group-hover:bg-ember/20 group-hover:scale-110 transition-all duration-300">
                  {achievement.icon}
                </div>
                
                {/* Number */}
                <h3 className="font-outfit font-bold text-3xl md:text-4xl text-silver-light flex items-center justify-center">
                  {achievement.prefix && (
                    <span className="text-ember">{achievement.prefix}</span>
                  )}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-silver-light"
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    })}
                  />
                  {achievement.postfix && (
                    <span className="text-ember">{achievement.postfix}</span>
                  )}
                </h3>
                
                {/* Label */}
                <p className="text-silver text-sm mt-2">{achievement.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
