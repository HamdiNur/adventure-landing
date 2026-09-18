"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

function generateParticles(count: number, minSize: number, maxSize: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    duration: 12 + Math.random() * 10,
    delay: Math.random() * 10,
  }));
}

export function CloudParticles({ count = 6 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate only on the client to avoid SSR/client hydration mismatch
  useEffect(() => {
    setParticles(generateParticles(count, 60, 140));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: "110vw", opacity: [0, 0.5, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: `${p.left}%`,
            width: p.size,
            height: p.size * 0.5,
          }}
          className="absolute rounded-full bg-white/40 blur-md"
        />
      ))}
    </div>
  );
}

export function BubbleParticles({ count = 12 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(count, 6, 18));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "-10%", opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
          className="absolute rounded-full bg-white/30 border border-white/40"
        />
      ))}
    </div>
  );
}