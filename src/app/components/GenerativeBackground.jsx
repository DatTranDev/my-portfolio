"use client";
import React, { useEffect, useRef } from "react";

// Simplex noise implementation for smooth, organic movement
class SimplexNoise {
  constructor(seed = Math.random() * 10000) {
    this.p = new Uint8Array(256);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    
    const random = this.seededRandom(seed);
    for (let i = 0; i < 256; i++) this.p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [this.p[i], this.p[j]] = [this.p[j], this.p[i]];
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }
  
  seededRandom(seed) {
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }
  
  grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];
  
  dot(g, x, y) {
    return g[0] * x + g[1] * y;
  }
  
  noise2D(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    
    const ii = i & 255;
    const jj = j & 255;
    
    let n0 = 0, n1 = 0, n2 = 0;
    
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      const gi0 = this.permMod12[ii + this.perm[jj]];
      n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);
    }
    
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]];
      n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
    }
    
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      const gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]];
      n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
    }
    
    return 70 * (n0 + n1 + n2);
  }
}

// Cyan Ocean color palette - Water element
// Aurora Borealis color palette - Northern Lights element
const COLORS = {
  // Deep/Dark
  oceanDeep: { r: 30, g: 58, b: 138 },     // #1e628aff - Blue 900
  sky: { r: 37, g: 99, b: 235 },           // #3370f5ff - Blue 600
  aqua: { r: 6, g: 182, b: 212 },          // #06d4c3ff - Cyan 500
  // Bright/Nature
  nature: { r: 16, g: 185, b: 129 },       // #10B981 - Emerald 500
  highlight: { r: 34, g: 211, b: 238 },    // #22D3EE - Cyan 400
  pale: { r: 167, g: 243, b: 208 },        // #A7F3D0 - Emerald 200
  breeze: { r: 207, g: 250, b: 254 },      // #CFFAFE - Cyan 100
};

// Interpolate between deep blue and bright aurora green colors
function getNatureColor(t, alpha = 1) {
  // t goes from 0 (deep/bottom) to 1 (bright/top)
  let r, g, b;
  
  if (t < 0.25) {
    // Deep to Blue
    const p = t / 0.25;
    r = COLORS.oceanDeep.r + (COLORS.sky.r - COLORS.oceanDeep.r) * p;
    g = COLORS.oceanDeep.g + (COLORS.sky.g - COLORS.oceanDeep.g) * p;
    b = COLORS.oceanDeep.b + (COLORS.sky.b - COLORS.oceanDeep.b) * p;
  } else if (t < 0.5) {
    // Blue to Cyan
    const p = (t - 0.25) / 0.25;
    r = COLORS.sky.r + (COLORS.aqua.r - COLORS.sky.r) * p;
    g = COLORS.sky.g + (COLORS.aqua.g - COLORS.sky.g) * p;
    b = COLORS.sky.b + (COLORS.aqua.b - COLORS.sky.b) * p;
  } else if (t < 0.75) {
    // Cyan to Nature Green
    const p = (t - 0.5) / 0.25;
    r = COLORS.aqua.r + (COLORS.nature.r - COLORS.aqua.r) * p;
    g = COLORS.aqua.g + (COLORS.nature.g - COLORS.aqua.g) * p;
    b = COLORS.aqua.b + (COLORS.nature.b - COLORS.aqua.b) * p;
  } else {
    // Nature Green to Pale
    const p = (t - 0.75) / 0.25;
    r = COLORS.nature.r + (COLORS.pale.r - COLORS.nature.r) * p;
    g = COLORS.nature.g + (COLORS.pale.g - COLORS.nature.g) * p;
    b = COLORS.nature.b + (COLORS.pale.b - COLORS.nature.b) * p;
  }
  
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
}

class Particle {
  constructor(canvas, noise, config) {
    this.canvas = canvas;
    this.noise = noise;
    this.config = config;
    this.reset();
  }
  
  reset() {
    // Particles spawn from bottom
    this.x = Math.random() * this.canvas.width;
    this.y = this.canvas.height * 0.6 + Math.random() * this.canvas.height * 0.4;
    this.prevX = this.x;
    this.prevY = this.y;
    this.vx = 0;
    this.vy = 0;
    this.age = 0;
    this.maxAge = 90 + Math.random() * 90;
    this.size = 0.5 + Math.random() * 1.5;
  }
  
  update(time) {
    this.prevX = this.x;
    this.prevY = this.y;
    
    // Get noise-based angle - creates aurora flowing motion
    const noiseScale = this.config.noiseScale;
    const noiseVal = this.noise.noise2D(
      this.x * noiseScale + time * 0.00008,
      this.y * noiseScale + time * 0.00008
    );
    
    // Flow upward with wave-like horizontal motion
    const baseAngle = Math.PI * -0.5 + Math.sin(time * 0.0001 + this.x * 0.01) * 0.3;
    const angle = baseAngle + noiseVal * Math.PI * 0.6;
    
    // Acceleration
    const speed = this.config.speed;
    this.vx += Math.cos(angle) * speed;
    this.vy += Math.sin(angle) * speed;
    
    // Damping
    this.vx *= 0.97;
    this.vy *= 0.97;
    
    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;
    
    this.age++;
    
    // Reset if off screen or too old
    if (
      this.x < -50 || this.x > this.canvas.width + 50 ||
      this.y < -50 || this.y > this.canvas.height + 50 ||
      this.age > this.maxAge
    ) {
      this.reset();
    }
  }
  
  draw(ctx) {
    // Calculate nature position (0 = bottom, 1 = top)
    const natureT = 1 - (this.y / this.canvas.height);
    
    // Fade based on age
    const ageFade = Math.min(1, this.age / 30) * 
                   Math.min(1, (this.maxAge - this.age) / 50);
    const alpha = 0.18 * ageFade;
    
    // Draw trail
    ctx.beginPath();
    ctx.moveTo(this.prevX, this.prevY);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = getNatureColor(natureT, alpha);
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

// A bounded particle pool in CSS pixels; backing-store pixels only affect resolution.
const getDeviceConfig = (isMobile) => ({
  particleCount: isMobile ? 24 : 64,
  noiseScale: 0.0018,
  speed: 0.12,
  fadeAmount: 0.09,
});

const GenerativeBackground = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!ctx) return;

    const noise = new SimplexNoise(54321);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let bounds = { width: 0, height: 0 };
    let particles = [];
    let config;
    let animationId = null;
    let lastFrame = null;
    let elapsed = 0;
    const frameInterval = 1000 / 30;

    const clear = () => {
      ctx.fillStyle = "rgb(2, 4, 10)";
      ctx.fillRect(0, 0, bounds.width, bounds.height);
    };
    const resize = () => {
      const isMobile = window.innerWidth <= 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
      bounds = { width: window.innerWidth, height: window.innerHeight };
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      canvas.style.width = `${bounds.width}px`;
      canvas.style.height = `${bounds.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      config = getDeviceConfig(isMobile);
      particles = Array.from({ length: config.particleCount }, () => new Particle(bounds, noise, config));
      clear();
    };
    const animate = (timestamp) => {
      if (lastFrame === null) lastFrame = timestamp - frameInterval;
      const delta = timestamp - lastFrame;
      if (delta >= frameInterval - 0.5) {
        lastFrame = timestamp;
        elapsed += Math.min(delta, 100);
        ctx.fillStyle = `rgba(2, 4, 10, ${config.fadeAmount})`;
        ctx.fillRect(0, 0, bounds.width, bounds.height);
        for (const particle of particles) {
          particle.update(elapsed);
          particle.draw(ctx);
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    const syncAnimation = () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      animationId = null;
      lastFrame = null;
      clear();
      if (!document.hidden && !reducedMotion.matches) animationId = requestAnimationFrame(animate);
    };
    const handleResize = () => {
      resize();
      syncAnimation();
    };
    resize();
    syncAnimation();
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", syncAnimation);
    reducedMotion.addEventListener("change", syncAnimation);
    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncAnimation);
      reducedMotion.removeEventListener("change", syncAnimation);
      particles = [];
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night">
      {/* Generative Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlays for depth */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Blue glow bottom */}
        <div
          className="absolute -bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        
        {/* Cyan glow top */}
        <div
          className="absolute -top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        
        {/* Green Accent glow */}
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          zIndex: 2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default GenerativeBackground;
