"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import { blurDataURL } from "@/lib/blur";
const stats = [
  { value: 12000, suffix: "+", label: "Jumps and dives completed" },
  { value: 18, suffix: "", label: "Years operating" },
  { value: 0, suffix: "", label: "Serious incidents on record" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <p
      ref={ref}
      className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white tabular-nums"
    >
      {display.toLocaleString()}
      {suffix}
    </p>
  );
}

export default function Trust() {
  return (
    <section className="relative px-6 md:px-16 py-24 overflow-hidden">
 <Image
  src="/images/dive-hero.jpg"
  alt="Diver near coral reef"
  fill
  placeholder="blur"
  blurDataURL={blurDataURL.ocean}
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
            <CountUp value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-white/60 font-[family-name:var(--font-ibm-plex)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}