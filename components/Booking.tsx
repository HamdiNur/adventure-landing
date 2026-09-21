"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { skydivePackages, divePackages } from "@/lib/packages";

type Activity = "skydive" | "dive";

function getNextDates(count: number) {
  const dates: { label: string; value: string }[] = [];
  const today = new Date();
  let added = 0;
  let offset = 1;

  while (added < count) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    offset++;
    dates.push({
      label: d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      value: d.toISOString().split("T")[0],
    });
    added++;
  }
  return dates;
}

const availableDates = getNextDates(10);

export default function Booking() {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const packages = activity === "skydive" ? skydivePackages : divePackages;
  const selectedPackage = packages.find((p) => p.id === packageId);

  function goNext() {
    setStep((s) => Math.min(s + 1, 4));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          email,
          activity,
          package: selectedPackage?.name,
          price: selectedPackage?.price,
          date,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="booking"
      data-nav-text="white"
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
          Book your descent.
        </motion.h2>

        {/* Step indicator */}
        {status !== "success" && (
          <div className="mt-8 flex items-center gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  n <= step ? "bg-signal" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-signal/40 bg-signal/10 px-6 py-6"
            >
              <div className="flex items-center gap-2 text-signal">
                <Check size={20} />
                <p className="font-[family-name:var(--font-space-grotesk)] font-medium">
                  Booking request sent
                </p>
              </div>
              <p className="mt-2 text-white/80 font-[family-name:var(--font-ibm-plex)] text-sm">
                {selectedPackage?.name} on{" "}
                {availableDates.find((d) => d.value === date)?.label}. We&apos;ll
                confirm by email within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {/* Step 1: choose activity */}
              {step === 1 && (
                <div>
                  <p className="text-white/70 font-[family-name:var(--font-ibm-plex)] mb-4">
                    What do you want to book?
                  </p>
                  <div className="flex gap-3">
                    {(
                      [
                        { value: "skydive", label: "Skydive" },
                        { value: "dive", label: "Dive" },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setActivity(opt.value);
                          setPackageId(null);
                        }}
                        className={`flex-1 rounded-xl border px-6 py-5 text-left transition-colors ${
                          activity === opt.value
                            ? "border-signal bg-signal/10"
                            : "border-white/15 hover:border-white/30"
                        }`}
                      >
                        <span className="font-[family-name:var(--font-space-grotesk)] text-white font-medium">
                          {opt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: choose package */}
              {step === 2 && activity && (
                <div>
                  <p className="text-white/70 font-[family-name:var(--font-ibm-plex)] mb-4">
                    Choose a package
                  </p>
                  <div className="flex flex-col gap-3">
                    {packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setPackageId(pkg.id)}
                        className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors ${
                          packageId === pkg.id
                            ? "border-signal bg-signal/10"
                            : "border-white/15 hover:border-white/30"
                        }`}
                      >
                        <span className="font-[family-name:var(--font-ibm-plex)] text-white">
                          {pkg.name}
                        </span>
                        <span className="font-[family-name:var(--font-space-grotesk)] text-signal font-medium">
                          {pkg.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: pick a date */}
              {step === 3 && (
                <div>
                  <p className="text-white/70 font-[family-name:var(--font-ibm-plex)] mb-4">
                    Pick a date
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableDates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setDate(d.value)}
                        className={`rounded-lg border px-3 py-3 text-sm font-[family-name:var(--font-ibm-plex)] transition-colors ${
                          date === d.value
                            ? "border-signal bg-signal/10 text-white"
                            : "border-white/15 text-white/70 hover:border-white/30"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: email + confirm */}
              {step === 4 && (
                <form onSubmit={handleSubmit}>
                  <div className="rounded-xl border border-white/15 px-5 py-4 mb-5 text-sm font-[family-name:var(--font-ibm-plex)] text-white/80 space-y-1">
                    <p>
                      <span className="text-white/50">Activity:</span>{" "}
                      {selectedPackage?.name}
                    </p>
                    <p>
                      <span className="text-white/50">Date:</span>{" "}
                      {availableDates.find((d) => d.value === date)?.label}
                    </p>
                    <p>
                      <span className="text-white/50">Price:</span>{" "}
                      {selectedPackage?.price}
                    </p>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/40 font-[family-name:var(--font-ibm-plex)] focus:outline-none focus:ring-2 focus:ring-signal"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-3 w-full rounded-full bg-signal px-6 py-3 text-white font-medium hover:bg-signal/90 transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Confirm booking"}
                  </button>
                  {status === "error" && (
                    <p className="mt-2 text-signal text-sm font-[family-name:var(--font-ibm-plex)]">
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              )}

              {/* Nav buttons */}
              {step < 4 && (
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1}
                    className="text-white/60 text-sm font-[family-name:var(--font-ibm-plex)] disabled:opacity-0"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={
                      (step === 1 && !activity) || (step === 2 && !packageId) || (step === 3 && !date)
                    }
                    className="rounded-full bg-signal px-6 py-2.5 text-white text-sm font-medium hover:bg-signal/90 transition-colors disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              )}
              {step === 4 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="mt-4 text-white/60 text-sm font-[family-name:var(--font-ibm-plex)]"
                >
                  ← Back
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-24 text-white/40 text-sm font-[family-name:var(--font-ibm-plex)]">
        © {new Date().getFullYear()} Freefall to Deep Blue.
      </p>
    </section>
  );
}