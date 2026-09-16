markdown
# Freefall to Deep Blue 🪂🌊

An animated landing page for an adventure sports brand offering **skydiving** and **scuba diving** experiences. The concept treats both sports as mirror opposites — falling through air vs. sinking through water — and expresses that through a single continuous scroll: a live counter ticks from **6,000m altitude** down through **0m (the surface)** to **-40m depth** as the page transitions from sky to ocean.

**Live demo:** _add your Vercel link here once deployed_

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=white)

## Features

- **Scroll-driven altitude/depth counter** — a fixed counter tracks scroll progress and displays a live "altitude" that counts down from 6,000m to -40m
- **Sky-to-ocean gradient transition** — background colors shift smoothly from cloud white to abyss black as the user scrolls
- **Dual package sections** — separate "Choose your altitude" (skydiving) and "Choose your depth" (diving) sections with staggered scroll-triggered animations
- **Responsive navigation** — sticky nav that changes text color based on scroll position, with a full-screen mobile menu below the `sm` breakpoint
- **Trust/safety section** — certification info (USPA/PADI) and key stats
- **Booking CTA** — email capture form for lead generation

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) — React framework
- **TypeScript** — type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling with custom theme tokens
- **[Framer Motion](https://www.framer.com/motion/)** — scroll-triggered and viewport-based animations
- **[Lucide React](https://lucide.dev/)** — icon set

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/HamdiNur/adventure-landing.git
cd adventure-landing
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

adventure-landing/
├── app/
│ ├── layout.tsx # Root layout, font configuration
│ ├── page.tsx # Assembles all sections
│ └── globals.css # Custom color theme + base styles
├── components/
│ ├── Nav.tsx # Responsive nav with mobile menu
│ ├── Hero.tsx # Landing hero section
│ ├── AltitudeCounter.tsx # Scroll-driven live counter
│ ├── Skydive.tsx # Skydiving package cards
│ ├── Transition.tsx # Sky-to-ocean horizon section
│ ├── Dive.tsx # Diving package cards
│ ├── Trust.tsx # Certifications + stats
│ └── Booking.tsx # Email capture CTA
└── public/
└── images/ # Photography assets


## Design Concept

| Element | Choice | Why |
|---|---|---|
| Color palette | Cloud white → sky blue → abyss black, with coral-orange accents | Mirrors the literal transition from sky to ocean |
| Typography | Space Grotesk (display) + IBM Plex Sans (body) | Technical, instrument-panel feel — echoes altimeters and dive computers |
| Layout | Single continuous vertical scroll, no card grids | The scroll itself *is* the concept: falling → sinking |

## Roadmap

- [ ] Deploy to Vercel
- [ ] Add booking form backend integration
- [ ] Add real customer testimonials
- [ ] Add gallery/lightbox for trip photos

## License
<!--  -->
This project is open source and available under the [MIT License](LICENSE).