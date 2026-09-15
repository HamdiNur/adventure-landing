"use client";

import { motion } from "framer-motion";

export default function Transition() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-cloud via-sky to-shallow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <p className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold text-white">
          0m — the surface
        </p>
        <p className="mt-3 text-white/80 font-[family-name:var(--font-ibm-plex)] max-w-md mx-auto">
          Where the sky lets go and the ocean takes over.
        </p>
      </motion.div>
    </section>
  );
}