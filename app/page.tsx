'use client';
import { LandingBackground } from '@/components/background/LandingBackground';
import { CTASection } from '@/components/CTA/CTASection';
import Footer from '@/components/Footer/Footer';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { StatsSection } from '@/components/Stats';
import { TrustedBy } from '@/components/Trust/TrustedSection';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const fetchabckend = async () => {
      const response = await fetch(
        'https://creatorlens-backend-vb8g.onrender.com'
      );
      console.log(response.json());
    };

    fetchabckend();
  }, []);
  return (
    <LandingBackground>
      <Navbar />
      <Hero />
      <TrustedBy />
      <StatsSection />
      <CTASection />
      <Footer />
    </LandingBackground>
  );
}
