"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I was terrified right up until we jumped, and then it was the most alive I've ever felt. The instructor talked me through every second.",
    name: "Amina R.",
    activity: "Tandem Jump, 4,000m",
  },
  {
    quote:
      "The wreck dive was unreal. Our guide knew every corner of that ship and pointed out things I'd have swum right past.",
    name: "Deka M.",
    activity: "Wreck Descent, -40m",
  },
  {
    quote:
      "First time diving and they made it so easy. No certification, no stress, just a genuinely well-run trip.",
    name: "Jamal H.",
    activity: "Reef Discovery, -12m",
  },
  {
    quote:
      "Did the AFF course over three weekends. The progression felt safe but I actually learned to fly my body, not just fall.",
    name: "Sara O.",
    activity: "Accelerated Freefall",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-abyss px-6 md:px-16 py-24 border-t border-white/10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white max-w-2xl"
      >
        From people who fell before you.
      </motion.h2>

      <div className="mt-14 flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 md:-mx-16 md:px-16 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] rounded-2xl border border-white/15 bg-white/5 p-7"
          >
            <p className="font-[family-name:var(--font-ibm-plex)] text-white/90 text-lg leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-[family-name:var(--font-space-grotesk)] text-white font-medium">
                {t.name}
              </p>
              <p className="text-signal text-sm font-[family-name:var(--font-ibm-plex)]">
                {t.activity}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}