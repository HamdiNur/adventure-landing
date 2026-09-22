"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Skydive Base",
    address: "Aden Adde International Airport Rd, Mogadishu, Somalia",
    mapQuery: "Aden Adde International Airport, Mogadishu",
    note: "Check-in 90 minutes before your scheduled jump time.",
  },
  {
    name: "Dive Center & Boat Launch",
    address: "Lido Beach, Mogadishu, Somalia",
    mapQuery: "Lido Beach, Mogadishu",
    note: "Boat departs from the main jetty — look for our coral-orange flag.",
  },
];

export default function Location() {
  return (
    <section
      data-nav-text="navy"
      className="bg-cloud px-6 md:px-16 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-highalt max-w-2xl"
      >
        Where you'll find us.
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-highalt/15 bg-white whileHover={{ y: -6 }}"
          >
            <div className="aspect-video w-full">
              <iframe
                title={loc.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  loc.mapQuery
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-highalt flex items-center gap-2">
                <MapPin size={18} className="text-signal" />
                {loc.name}
              </h3>
              <p className="mt-2 text-highalt/70 font-[family-name:var(--font-ibm-plex)] text-sm">
                {loc.address}
              </p>
              <p className="mt-3 text-highalt/60 font-[family-name:var(--font-ibm-plex)] text-sm italic">
                {loc.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}