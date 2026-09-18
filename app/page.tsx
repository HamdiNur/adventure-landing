import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skydive from "@/components/Skydive";
import Transition from "@/components/Transition";
import Dive from "@/components/Dive";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import AltitudeCounter from "@/components/AltitudeCounter";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <ScrollProgress />
        <Nav />
        <AltitudeCounter />
        <Hero />
        <Skydive />
        <Transition />
        <Dive />
        <Trust />
        <Testimonials />
        <Faq />
        <Booking />
      </main>
    </SmoothScroll>
  );
}