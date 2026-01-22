/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ═══════════════════════════════════════════════════════════════════════
         AURORA COLOR SYSTEM - Borealis Element
         ═════════════════════════════════════════════════════════════════════ */
      colors: {
        // Primary Theme (Mapped to 'Cyan') -> Electric Cyan
        cyan: {
          DEFAULT: "#06B6D4", // Cyan 500
          light: "#22D3EE",   // Cyan 400
          dark: "#0891B2",    // Cyan 600
          pale: "#CFFAFE",    // Cyan 100
        },
        // Secondary Theme (Mapped to 'Ocean') -> Deep Blue
        ocean: {
          DEFAULT: "#3B82F6", // Blue 500
          light: "#60A5FA",   // Blue 400
          dark: "#2563EB",    // Blue 600
          deep: "#1E3A8A",    // Blue 900
        },
        // Supporting Colors (Mapped to 'Sky') -> Cool Sky
        sky: {
          DEFAULT: "#0EA5E9", // Sky 500
          light: "#38BDF8",   // Sky 400
          dark: "#0369A1",    // Sky 700
        },
        // Accent Colors (New)
        nature: {
          DEFAULT: "#10B981", // Emerald 500
          light: "#34D399",   // Emerald 400
          dark: "#059669",    // Emerald 600
        },
        // Background Colors - Deep Borealis
        night: {
          DEFAULT: "#02040A", // Absolute Dark
          light: "#050B14",   // Deep Blue Dark
          lighter: "#0B1221", // Midnight Blue
          elevated: "#111C30", // Elevated Dark
        },
        // Text Colors
        silver: {
          DEFAULT: "#94A3B8", // Slate 400
          light: "#E2E8F0",   // Slate 200
          dark: "#64748B",    // Slate 500
          accent: "#22D3EE",  // Cyan 400
        },
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         TYPOGRAPHY
         ═════════════════════════════════════════════════════════════════════ */
      fontFamily: {
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         GRADIENTS & BACKGROUNDS
         ═════════════════════════════════════════════════════════════════════ */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-nature":
          "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)", // Green to Cyan
        "gradient-cyan": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)", // Cyan to Blue
        "gradient-water": "linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)", // Deep Sky
        "gradient-pale": "linear-gradient(135deg, #CFFAFE 0%, #A5F3FC 100%)", // Pale Cyan
        "gradient-night":
          "linear-gradient(180deg, #02040A 0%, #050B14 50%, #0B1221 100%)", // Borealis Gradient
        "gradient-thermal": "linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)", // Full Aurora Spectrum
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         SHADOWS
         ═════════════════════════════════════════════════════════════════════ */
      boxShadow: {
        glow: "0 0 40px rgba(6, 182, 212, 0.3)",      // Cyan Glow
        "glow-ocean": "0 0 40px rgba(59, 130, 246, 0.3)", // Blue Glow
        "glow-nature": "0 0 40px rgba(16, 185, 129, 0.3)", // Green Glow
        "glow-sm": "0 0 20px rgba(6, 182, 212, 0.2)",
        "glow-lg": "0 0 60px rgba(6, 182, 212, 0.4)",
        soft: "0 2px 15px rgba(0, 0, 0, 0.5)",
        elevated: "0 8px 30px rgba(0, 0, 0, 0.6)",
        deep: "0 20px 50px rgba(0, 0, 0, 0.8)",
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         ANIMATIONS
         ═════════════════════════════════════════════════════════════════════ */
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-cyan": "pulseCyan 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseCyan: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(6, 182, 212, 0.4)" },
          "50%": { boxShadow: "0 0 25px 12px rgba(6, 182, 212, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         TRANSITIONS
         ═════════════════════════════════════════════════════════════════════ */
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      
      /* ═══════════════════════════════════════════════════════════════════════
         SPACING & LAYOUT
         ═════════════════════════════════════════════════════════════════════ */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
