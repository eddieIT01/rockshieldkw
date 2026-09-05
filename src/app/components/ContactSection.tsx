'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
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
    const elements = sectionRef?.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Emergency CTA Banner */}
        <div className="bg-primary/10 border border-primary/20 p-8 lg:p-12 mb-16 reveal-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-2">Emergency Call 24/7</p>
              <a href="tel:+96560422211" className="font-display text-3xl lg:text-4xl text-foreground hover:text-primary transition-colors">
                +965 604 222 11
              </a>
            </div>
            <Link
              href="/booking"
              className="btn-primary px-8 py-4 text-sm tracking-widest uppercase whitespace-nowrap"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border reveal-up">
          <div className="bg-background p-8 lg:p-10 flex flex-col gap-4">
            <Icon name="MapPinIcon" size={20} className="text-primary" />
            <h3 className="font-display text-lg text-foreground font-medium">Location</h3>
            <address className="text-muted-foreground text-sm leading-relaxed not-italic">
              Shwaikh Industrial<br />
              Block 1, 13 ST, 107<br />
              Kuwait City, Kuwait
            </address>
            <a
              href="https://maps.google.com/?q=Shwaikh+Industrial+Block+1+13+ST+107+Kuwait"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:text-foreground transition-colors tracking-widest uppercase font-medium mt-auto"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-background p-8 lg:p-10 flex flex-col gap-4">
            <Icon name="ClockIcon" size={20} className="text-primary" />
            <h3 className="font-display text-lg text-foreground font-medium">Opening Hours</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mon – Thu</span>
                <span className="text-foreground">10:00 – 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground">10:00 – 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Friday</span>
                <span className="text-primary">Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 lg:p-10 flex flex-col gap-4">
            <Icon name="PhoneIcon" size={20} className="text-primary" />
            <h3 className="font-display text-lg text-foreground font-medium">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+96560422211" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <span className="text-primary">→</span> +965 604 222 11
              </a>
              <a href="mailto:info@rockshieldkw.com" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <span className="text-primary">→</span> info@rockshieldkw.com
              </a>
              <a href="https://wa.me/96560422211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                <span className="text-primary">→</span> WhatsApp
              </a>
            </div>
            <Link
              href="/contact"
              className="text-xs text-primary hover:text-foreground transition-colors tracking-widest uppercase font-medium mt-auto"
            >
              Full Contact Page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}