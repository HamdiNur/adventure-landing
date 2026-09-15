"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#skydive", label: "Skydive packages" },
  { href: "#dive", label: "Dive packages" },
  { href: "#booking", label: "Book" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2],
    ["#123A5C", "#123A5C", "#FFFFFF"]
  );

  return (
    <>
      {/* Desktop / Header Navigation */}
      <motion.nav
        style={{ color: open ? "#FFFFFF" : textColor }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-6"
      >
        <span className="font-[family-name:var(--font-space-grotesk)] font-semibold tracking-tight">
          Freefall / Deep Blue
        </span>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8 font-[family-name:var(--font-ibm-plex)] text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="sm:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-abyss flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white tracking-tight">
                Freefall / Deep Blue
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.05,
                  }}
                  className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
