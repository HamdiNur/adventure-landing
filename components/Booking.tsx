"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [email, setEmail] = useState("");
  const [activity, setActivity] = useState("skydive");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      console.error("Missing NEXT_PUBLIC_FORMSPREE_ENDPOINT");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ email, activity }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          Pick a date. We&apos;ll handle the rest.
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

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-signal/40 bg-signal/10 px-6 py-5"
            >
              <p className="text-white font-[family-name:var(--font-ibm-plex)]">
                You&apos;re on the list. We&apos;ll email you available dates
                within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3"
            >
              <div className="flex gap-2">
                {[
                  { value: "skydive", label: "Skydive" },
                  { value: "dive", label: "Dive" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setActivity(opt.value)}
                    className={`rounded-full px-4 py-2 text-sm font-[family-name:var(--font-ibm-plex)] border transition-colors ${
                      activity === opt.value
                        ? "bg-signal border-signal text-white"
                        : "border-white/20 text-white/70 hover:border-white/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/40 font-[family-name:var(--font-ibm-plex)] focus:outline-none focus:ring-2 focus:ring-signal"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-signal px-6 py-3 text-white font-medium hover:bg-signal/90 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Get available dates"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-signal text-sm font-[family-name:var(--font-ibm-plex)]">
                  Something went wrong — please try again.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-24 text-white/40 text-sm font-[family-name:var(--font-ibm-plex)]">
        © {new Date().getFullYear()} Freefall to Deep Blue.
      </p>
    </section>
  );
}