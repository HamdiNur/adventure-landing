"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12,000+", label: "Jumps and dives completed" },
  { value: "18", label: "Years operating" },
  { value: "0", label: "Serious incidents on record" },
];

export default function Trust() {
  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">
      <Image
        src="/images/dive-hero.jpg"
        alt="Diver near coral reef"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 bg-abyss/90 -z-10" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-ibm-plex)] text-white/70 max-w-lg"
      >
        Every instructor is certified through USPA (skydiving) or PADI
        (diving), with annual recertification and equipment inspections
        logged before every trip.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white tabular-nums">
              {stat.value}
            </p>
            <p className="mt-2 text-white/60 font-[family-name:var(--font-ibm-plex)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}