"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
  {
    photo: "/images/instructor-1.jpg",
    name: "Farah Osman",
    role: "Lead Skydive Instructor",
    creds: "USPA Certified · 4,200+ tandem jumps",
    years: "11 years",
  },
  {
    photo: "/images/instructor-2.jpg",
    name: "Nadia Warsame",
    role: "Dive Master",
    creds: "PADI Master Instructor · 3,600+ dives logged",
    years: "9 years",
  },
  {
    photo: "/images/instructor-3.jpg",
    name: "Yusuf Ali",
    role: "AFF & Wreck Dive Specialist",
    creds: "USPA & PADI Certified · dual-licensed",
    years: "7 years",
  },
];

export default function Instructors() {
  return (
    <section data-nav-text="white" className="bg-shallow px-6 md:px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white max-w-2xl"
      >
        The people behind the numbers.
      </motion.h2>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-white">
                {person.name}
              </h3>
              <p className="text-signal text-sm font-[family-name:var(--font-ibm-plex)] mt-1">
                {person.role}
              </p>
              <p className="mt-3 text-white/70 text-sm font-[family-name:var(--font-ibm-plex)]">
                {person.creds}
              </p>
              <p className="mt-1 text-white/50 text-sm font-[family-name:var(--font-ibm-plex)]">
                {person.years} experience
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}