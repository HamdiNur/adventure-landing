
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudParticles } from "@/components/Particles";
import WeatherWidget from "@/components/WeatherWidget";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      <CloudParticles count={5} />

      <Image
        src="/images/skydive-hero.jpg"
        alt="Skydiver in freefall against open sky"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-highalt/40 -z-10" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-ibm-plex)] text-sm text-white/80 mb-4"
      >
        Two ways to fall
      </motion.p>

      <div className="mb-6">
        <WeatherWidget />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-semibold text-white leading-[1.05] max-w-3xl"
      >
        Freefall through sky.
        <br />
        Sink into blue.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-6 text-lg text-white/90 max-w-xl"
      >
        Tandem skydives from 6,000 meters and guided reef dives 40 meters
        below the surface. Scroll to feel the drop.
      </motion.p>

      <motion.a
        href="#skydive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-6 py-3 text-white font-medium hover:bg-signal/90 transition-colors"
      >
        Book your descent
      </motion.a>
    </section>
  );
}