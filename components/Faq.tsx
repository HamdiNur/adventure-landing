"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need experience to book a tandem skydive?",
    answer:
      "No. Tandem jumps require zero experience — you're harnessed to a certified instructor who handles the entire jump, including the parachute deployment and landing.",
  },
  {
    question: "Is there a weight or age limit?",
    answer:
      "Skydiving requires you to be 18+ and under 100kg for tandem jumps. Diving has no strict age limit for shallow reef dives, but certification courses (Open Water and above) require you to be 15+.",
  },
  {
    question: "What if the weather is bad on my booked day?",
    answer:
      "We monitor wind and visibility conditions closely. If conditions aren't safe, we'll reschedule you at no extra cost — safety always comes before the schedule.",
  },
  {
    question: "Do I need to be a certified diver for every dive package?",
    answer:
      "No — the Reef Discovery dive is open to first-timers with no certification, guided the entire time by an instructor. Open Water and Wreck Descent packages do require certification.",
  },
  {
    question: "What's included in the price?",
    answer:
      "All gear, a safety briefing, transport to the drop zone or dive boat, and your instructor's time are included. Photos/video of your jump or dive are available as an add-on.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-abyss px-6 md:px-16 py-24 border-t border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white max-w-2xl"
      >
        Questions before you jump.
      </motion.h2>

      <div className="mt-14 max-w-2xl divide-y divide-white/15">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="py-5">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
              >
                <span className="font-[family-name:var(--font-ibm-plex)] text-white font-medium">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-signal"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-white/70 font-[family-name:var(--font-ibm-plex)] max-w-xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}