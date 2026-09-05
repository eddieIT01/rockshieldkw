'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-up, .reveal-left');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Content */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">About Rock Shield</span>
            </div>
            <h2 className="font-display text-section-title text-foreground mb-6">
              Your Vehicle.<br />Our Obsession.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Rock Shield, we are passionate about preserving and enhancing the beauty of your vehicle. With a commitment to excellence and a dedication to quality craftsmanship, we specialize in providing top-tier automotive protection services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As Kuwait&apos;s authorized XPEL distributor and installer, we bring world-class protection technology to every vehicle that enters our facility in Shwaikh Industrial. Our team of skilled professionals delivers results that exceed expectations — every time.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Expert Engineers', desc: 'Highly skilled professionals with deep expertise in automotive protection.' },
                { title: 'Guaranteed Service', desc: 'We stand behind the quality of every installation we perform.' },
                { title: 'XPEL Certified', desc: 'Authorized distributor and installer of the world\'s leading PPF brand.' },
                { title: 'Trusted Results', desc: 'Proven track record of superior results and customer satisfaction.' }
              ]?.map((item) => (
                <div key={item?.title} className="flex flex-col gap-2">
                  <div className="w-6 h-px bg-primary" />
                  <h4 className="text-foreground font-semibold text-sm">{item?.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="text-sm text-primary hover:text-foreground transition-colors tracking-widest uppercase font-medium flex items-center gap-2"
            >
              Our Story
              <span>→</span>
            </Link>
          </div>

          {/* Right — Visual */}
          <div className="reveal-up">
            <div className="relative">
              {/* Large stat block */}
              <div className="bg-card border border-border p-10 lg:p-14">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 border-b border-border pb-8">
                    <span className="font-display text-4xl font-semibold text-foreground">4.7</span>
                    <span className="text-primary text-sm">★★★★★</span>
                    <span className="text-muted-foreground text-xs tracking-wide">Google Rating</span>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-border pb-8">
                    <span className="font-display text-4xl font-semibold text-foreground">62+</span>
                    <span className="text-primary text-sm">Reviews</span>
                    <span className="text-muted-foreground text-xs tracking-wide">Verified Customers</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-4xl font-semibold text-foreground">6</span>
                    <span className="text-primary text-sm">Services</span>
                    <span className="text-muted-foreground text-xs tracking-wide">Protection Solutions</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-4xl font-semibold text-foreground">XPEL</span>
                    <span className="text-primary text-sm">Authorized</span>
                    <span className="text-muted-foreground text-xs tracking-wide">Distributor &amp; Installer</span>
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}