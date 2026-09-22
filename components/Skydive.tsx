"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CloudParticles } from "@/components/Particles";
import { skydivePackages as packages } from "@/lib/packages";
export default function Skydive() {
  return (
    <section
      id="skydive"
      className="relative min-h-screen px-6 md:px-16 py-24 overflow-hidden"
    >
      <CloudParticles count={5} />
      <Image
        src="/images/skydive-canopy.jpg"
        alt="Parachute canopy open against the sky"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cloud/85 to-sky/85 -z-10" />

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-highalt max-w-2xl"
      >
        Choose your altitude.
      </motion.h2>

      <div className="mt-16 flex flex-col divide-y divide-highalt/15">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-8 whileHover={{ x: 6 }}"
          >
            <span className="font-[family-name:var(--font-space-grotesk)] text-2xl text-signal w-28 shrink-0 tabular-nums">
              {pkg.altitude}
            </span>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-highalt">
                {pkg.name}
              </h3>
              <p className="mt-1 text-highalt/70 font-[family-name:var(--font-ibm-plex)] max-w-md">
                {pkg.desc}
              </p>
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-highalt shrink-0 tabular-nums">
              {pkg.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}