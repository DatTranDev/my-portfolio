"use client";
import React from "react";
import { motion } from "framer-motion";

const CosmicBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#1a1a2e]">
      {/* Animated Starfield */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Nebula Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
            }}
            animate={{
              y: [0, -1100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CosmicBackground;
