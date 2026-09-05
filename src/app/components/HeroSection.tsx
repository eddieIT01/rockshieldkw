'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Rock Shield Kuwait hero">
      
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        
        <AppImage
          src="https://rockshieldkw.com/wp-content/uploads/2024/06/lamborghini-huracan-sto-015.webp"
          alt="Lamborghini Huracan STO with XPEL paint protection film applied by Rock Shield Kuwait"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
            }
            style={{ transitionDelay: '200ms' }}>
            
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
              XPEL Authorized Distributor &amp; Installer
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-hero text-foreground mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }
            style={{ transitionDelay: '400ms' }}>
            
            Protection
            <br />
            <span className="text-primary">Perfected.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed mb-10 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }
            style={{ transitionDelay: '600ms' }}>
            
            Kuwait&apos;s premier automotive protection studio. PPF, Ceramic Coating, Window Tint — installed with obsessive precision.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }
            style={{ transitionDelay: '800ms' }}>
            
            <Link
              href="/booking"
              className="btn-primary px-8 py-4 text-sm tracking-widest uppercase text-center">
              
              Book Your Protection
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-sm tracking-widest uppercase text-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              
              Explore Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8 max-w-lg transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }
          style={{ transitionDelay: '1000ms' }}>
          
          <div>
            <div className="text-2xl font-display font-semibold text-foreground">4.7★</div>
            <div className="text-xs text-muted-foreground mt-1 tracking-wide">Google Rating</div>
          </div>
          <div>
            <div className="text-2xl font-display font-semibold text-foreground">XPEL</div>
            <div className="text-xs text-muted-foreground mt-1 tracking-wide">Authorized</div>
          </div>
          <div>
            <div className="text-2xl font-display font-semibold text-foreground">6+</div>
            <div className="text-xs text-muted-foreground mt-1 tracking-wide">Services</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>);

}