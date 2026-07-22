import { LandingBackground } from "@/components/background/LandingBackground";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <LandingBackground>
      <Navbar />
      <Hero />
    </LandingBackground>
  );
}