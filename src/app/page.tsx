import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import XpelProductsSection from './components/XpelProductsSection';
import AboutSection from './components/AboutSection';
import TrustSection from './components/TrustSection';
import ContactSection from './components/ContactSection';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <XpelProductsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}