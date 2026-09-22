"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "USPA Certified",
    desc: "All skydive instructors hold current United States Parachute Association certification",
  },
  {
    icon: Award,
    title: "PADI Certified",
    desc: "All dive instructors hold current Professional Association of Diving Instructors certification",
  },
  {
    icon: FileCheck,
    title: "Annually Inspected Gear",
    desc: "Equipment is logged and inspected before every trip, with records available on request",
  },
];

export default function TrustBadges() {
  return (
    <section data-nav-text="navy" className="bg-cloud px-6 md:px-16 py-16 border-t border-highalt/10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="rounded-full bg-highalt/10 p-3 mb-4">
                <Icon size={22} className="text-highalt" />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-highalt font-medium">
                {badge.title}
              </h3>
              <p className="mt-1 text-highalt/60 text-sm font-[family-name:var(--font-ibm-plex)]">
                {badge.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-10 text-highalt/50 text-xs font-[family-name:var(--font-ibm-plex)] max-w-2xl">
        A liability waiver must be signed on-site before every skydive or dive.
        Full terms are provided at check-in — contact us beforehand if you have
        questions about eligibility or medical requirements.
      </p>
    </section>
  );
}