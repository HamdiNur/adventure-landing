"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/skydive-hero.jpg", alt: "Skydiver in freefall" },
  { src: "/images/dive-wreck.jpg", alt: "Diver exploring a wreck" },
  { src: "/images/skydive-canopy.jpg", alt: "Open parachute canopy" },
  { src: "/images/dive-hero.jpg", alt: "Diver near coral reef" },
  { src: "/images/gallery-1.jpg", alt: "Skydivers in formation" },
  { src: "/images/gallery-2.jpg", alt: "Diver with sea turtle" },
  { src: "/images/gallery-3.jpg", alt: "Parachute landing on beach" },
  { src: "/images/gallery-4.jpg", alt: "Coral reef with fish" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length
    );

  return (
    <section data-nav-text="white" className="bg-abyss px-6 md:px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white max-w-2xl"
      >
        Moments from the drop.
      </motion.h2>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            className="relative aspect-square overflow-hidden rounded-xl group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center px-4"
            onClick={() => setActiveIndex(null)}
          >
            <button
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-4 md:left-8 text-white/80 hover:text-white"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-4 md:right-8 text-white/80 hover:text-white"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}