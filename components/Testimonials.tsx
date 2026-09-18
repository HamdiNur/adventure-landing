"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I was terrified right up until we jumped, and then it was the most alive I've ever felt. The instructor talked me through every second.",
    name: "Amina R.",
    activity: "Tandem Jump, 4,000m",
  },
  {
    quote:
      "The wreck dive was unreal. Our guide knew every corner of that ship and pointed out things I'd have swum right past.",
    name: "Deka M.",
    activity: "Wreck Descent, -40m",
  },
  {
    quote:
      "First time diving and they made it so easy. No certification, no stress, just a genuinely well-run trip.",
    name: "Jamal H.",
    activity: "Reef Discovery, -12m",
  },
  {
    quote:
      "Did the AFF course over three weekends. The progression felt safe but I actually learned to fly my body, not just fall.",
    name: "Sara O.",
    activity: "Accelerated Freefall",
  },
];

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next testimonial"
      className="absolute -bottom-14 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-signal hover:border-signal transition-colors"
    >
      <FaChevronRight size={14} />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous testimonial"
      className="absolute -bottom-14 right-20 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-signal hover:border-signal transition-colors"
    >
      <FaChevronLeft size={14} />
    </button>
  );
}

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-abyss px-6 md:px-16 py-24 border-t border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6 }}
        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-semibold text-white max-w-2xl"
      >
        From people who fell before you.
      </motion.h2>

      <div className="mt-14 relative pb-16 testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.name} className="px-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 h-full">
                <FaQuoteLeft className="text-signal" size={20} />
                <p className="mt-4 font-[family-name:var(--font-ibm-plex)] text-white/90 text-lg leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-6">
                  <p className="font-[family-name:var(--font-space-grotesk)] text-white font-medium">
                    {t.name}
                  </p>
                  <p className="text-signal text-sm font-[family-name:var(--font-ibm-plex)]">
                    {t.activity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}