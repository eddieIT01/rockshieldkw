'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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

  const features = [
    { title: t?.about_feat_1_title, desc: t?.about_feat_1_desc },
    { title: t?.about_feat_2_title, desc: t?.about_feat_2_desc },
    { title: t?.about_feat_3_title, desc: t?.about_feat_3_desc },
    { title: t?.about_feat_4_title, desc: t?.about_feat_4_desc },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Content */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{t?.about_eyebrow}</span>
            </div>
            <h2 className="font-display text-section-title text-foreground mb-6 whitespace-pre-line">
              {t?.about_heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t?.about_p1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t?.about_p2}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features?.map((item) => (
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
              {t?.about_link}
              <span>→</span>
            </Link>
          </div>

          {/* Right — Visual */}
          <div className="reveal-up">
            <div className="relative">
              <div className="bg-card border border-border p-10 lg:p-14">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 border-b border-border pb-8">
                    <span className="font-display text-4xl font-semibold text-foreground">4.7</span>
                    <span className="text-primary text-sm">★★★★★</span>
                    <span className="text-muted-foreground text-xs tracking-wide">{t?.about_stat_rating}</span>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-border pb-8">
                    <span className="font-display text-4xl font-semibold text-foreground">62+</span>
                    <span className="text-primary text-sm">{t?.about_stat_reviews}</span>
                    <span className="text-muted-foreground text-xs tracking-wide">{t?.about_stat_verified}</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-4xl font-semibold text-foreground">6</span>
                    <span className="text-primary text-sm">{t?.about_stat_services}</span>
                    <span className="text-muted-foreground text-xs tracking-wide">{t?.about_stat_protection}</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-display text-4xl font-semibold text-foreground">XPEL</span>
                    <span className="text-primary text-sm">{t?.about_stat_xpel}</span>
                    <span className="text-muted-foreground text-xs tracking-wide">{t?.about_stat_xpel_sub}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}