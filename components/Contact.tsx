"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

// Update these to your real contact details
const PHONE_DISPLAY = "+252 61 234 5678";
const PHONE_WHATSAPP = "252612345678"; // digits only, no + or spaces
const EMAIL = "hello@freefalltodeepblue.com";

export default function Contact() {
  const whatsappLink = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
    "Hi! I'd like to ask about booking a skydive or dive."
  )}`;

  return (
    <section data-nav-text="navy" className="bg-cloud px-6 md:px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-highalt max-w-2xl"
      >
        Prefer to talk first?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-highalt/70 font-[family-name:var(--font-ibm-plex)] max-w-lg"
      >
        Call, message, or email us directly — a real person will walk you
        through packages, dates, and what to expect.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.a
          href={`tel:${PHONE_WHATSAPP}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 rounded-xl border border-highalt/15 bg-white px-5 py-4 hover:border-signal transition-colors"
        >
          <Phone size={20} className="text-signal shrink-0" />
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-highalt font-medium text-sm">
              Call
            </p>
            <p className="text-highalt/70 text-sm font-[family-name:var(--font-ibm-plex)]">
              {PHONE_DISPLAY}
            </p>
          </div>
        </motion.a>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 rounded-xl border border-highalt/15 bg-white px-5 py-4 hover:border-signal transition-colors"
        >
          <MessageCircle size={20} className="text-signal shrink-0" />
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-highalt font-medium text-sm">
              WhatsApp
            </p>
            <p className="text-highalt/70 text-sm font-[family-name:var(--font-ibm-plex)]">
              Message us directly
            </p>
          </div>
        </motion.a>

        <motion.a
          href={`mailto:${EMAIL}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 rounded-xl border border-highalt/15 bg-white px-5 py-4 hover:border-signal transition-colors"
        >
          <Mail size={20} className="text-signal shrink-0" />
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-highalt font-medium text-sm">
              Email
            </p>
            <p className="text-highalt/70 text-sm font-[family-name:var(--font-ibm-plex)]">
              {EMAIL}
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}