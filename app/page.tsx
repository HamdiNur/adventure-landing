import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skydive from "@/components/Skydive";
import Transition from "@/components/Transition";
import Dive from "@/components/Dive";
import Trust from "@/components/Trust";
import Booking from "@/components/Booking";
import AltitudeCounter from "@/components/AltitudeCounter";

export default function Home() {
  return (
    <main>
      <Nav />
      <AltitudeCounter />
      <Hero />
      <Skydive />
      <Transition />
      <Dive />
      <Trust />
      <Booking />
    </main>
  );
}