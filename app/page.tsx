import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skydive from "@/components/Skydive";
import Transition from "@/components/Transition";
import Dive from "@/components/Dive";
import Instructors from "@/components/Instructors";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Booking from "@/components/Booking";
import AltitudeCounter from "@/components/AltitudeCounter";

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll>
        <main>
          <ScrollProgress />
          <Nav />
          <AltitudeCounter />
          <Hero />
          <Skydive />
          <Transition />
          <Dive />
          <Instructors />
          <Trust />
          <Testimonials />
          <Location />
          <Gallery />
          <Faq />
          <Contact />
          <Booking />
        </main>
      </SmoothScroll>
    </MotionProvider>
  );
}