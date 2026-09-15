"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function AltitudeCounter() {
  const { scrollYProgress } = useScroll();

  const altitude = useTransform(scrollYProgress, [0, 0.5, 1], [6000, 0, -40]);
  const display = useTransform(altitude, (v) => {
    const rounded = Math.round(v);
    if (rounded > 0) return `${rounded.toLocaleString()}m`;
    if (rounded === 0) return "0m — surface";
    return `${rounded}m`;
  });

  return (
    <motion.div className="fixed bottom-8 right-8 z-50 font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-semibold text-white mix-blend-difference tabular-nums pointer-events-none">
      {display}
    </motion.div>
  );
}