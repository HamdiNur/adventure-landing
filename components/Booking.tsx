"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section
      id="booking"
      className="bg-abyss px-6 md:px-16 py-24 border-t border-white/10"
    >
      <div className="max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white"
        >
          Pick a date. We'll handle the rest.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70 font-[family-name:var(--font-ibm-plex)]"
        >
          Gear, briefing, and transport to the drop zone or dive boat are
          included in every package.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/40 font-[family-name:var(--font-ibm-plex)] focus:outline-none focus:ring-2 focus:ring-signal"
          />
          <button
            type="submit"
            className="rounded-full bg-signal px-6 py-3 text-white font-medium hover:bg-signal/90 transition-colors"
          >
            Get available dates
          </button>
        </motion.form>
      </div>

      <p className="mt-24 text-white/40 text-sm font-[family-name:var(--font-ibm-plex)]">
        © {new Date().getFullYear()} Freefall to Deep Blue.
      </p>
    </section>
  );
}