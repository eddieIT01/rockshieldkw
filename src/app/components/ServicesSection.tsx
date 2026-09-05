'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      id: 'ppf',
      number: '01',
      title: t?.service_ppf_title,
      description: t?.service_ppf_desc,
      href: '/services#ppf'
    },
    {
      id: 'window-tint',
      number: '02',
      title: t?.service_tint_title,
      description: t?.service_tint_desc,
      href: '/services#window-tint'
    },
    {
      id: 'window-shield',
      number: '03',
      title: t?.service_shield_title,
      description: t?.service_shield_desc,
      href: '/services#window-shield'
    },
    {
      id: 'ceramic',
      number: '04',
      title: t?.service_ceramic_title,
      description: t?.service_ceramic_desc,
      href: '/services#ceramic'
    },
    {
      id: 'detailing',
      number: '05',
      title: t?.service_detailing_title,
      description: t?.service_detailing_desc,
      href: '/services#detailing'
    },
    {
      id: 'painting',
      number: '06',
      title: t?.service_painting_title,
      description: t?.service_painting_desc,
      href: '/services#painting'
    }
  ];

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
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{t?.services_eyebrow}</span>
            </div>
            <h2 className="font-display text-section-title text-foreground whitespace-pre-line">
              {t?.services_heading}
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase font-medium flex items-center gap-2 self-start lg:self-auto"
          >
            {t?.services_all}
            <span className="text-primary">→</span>
          </Link>
        </div>

        {/* Services Grid */}
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
            {t?.services_book}
          </Link>
        </div>
      </div>
    </section>
  );
}