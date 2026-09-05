'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'ppf',
    number: '01',
    title: 'Paint Protection Film',
    shortTitle: 'PPF',
    description: 'Self-healing XPEL film that shields your paint from stone chips, scratches, and environmental damage — virtually invisible.',
    href: '/services#ppf'
  },
  {
    id: 'window-tint',
    number: '02',
    title: 'Window Tint',
    shortTitle: 'Tint',
    description: 'Reduce heat, block UV rays, and enhance privacy with XPEL PRIME window film — engineered for Kuwait\'s climate.',
    href: '/services#window-tint'
  },
  {
    id: 'window-shield',
    number: '03',
    title: 'Window Shield',
    shortTitle: 'Shield',
    description: 'Front windshield protection film that guards against wind, debris, and road hazards without compromising clarity.',
    href: '/services#window-shield'
  },
  {
    id: 'ceramic',
    number: '04',
    title: 'Ceramic Coating',
    shortTitle: 'Ceramic',
    description: 'XPEL FUSION PLUS bonds at the molecular level — delivering hydrophobic protection, gloss, and UV resistance.',
    href: '/services#ceramic'
  },
  {
    id: 'detailing',
    number: '05',
    title: 'Detailing Services',
    shortTitle: 'Detail',
    description: 'Meticulous attention to every surface. Tailored solutions that restore and maintain your vehicle\'s showroom condition.',
    href: '/services#detailing'
  },
  {
    id: 'painting',
    number: '06',
    title: 'Painting',
    shortTitle: 'Paint',
    description: 'Professional automotive painting with custom finishes — metallic, pearlescent, or factory-matched precision.',
    href: '/services#painting'
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = sectionRef?.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 className="font-display text-section-title text-foreground">
              Six Ways We<br />Protect Your Vehicle
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase font-medium flex items-center gap-2 self-start lg:self-auto"
          >
            All Services
            <span className="text-primary">→</span>
          </Link>
        </div>

        {/* Services Grid — asymmetric bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services?.map((service, i) => (
            <Link
              key={service?.id}
              href={service?.href}
              className={`reveal-up group relative bg-background p-8 lg:p-10 hover:bg-card transition-colors duration-300 flex flex-col gap-4 ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-primary tracking-widest">{service?.number}</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-foreground font-medium leading-tight group-hover:text-primary transition-colors">
                {service?.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service?.description}
              </p>
              <div className="w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal-up">
          <Link
            href="/booking"
            className="btn-primary px-10 py-4 text-sm tracking-widest uppercase inline-block"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}