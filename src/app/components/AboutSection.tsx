'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
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
  { title: t?.about_feat_4_title, desc: t?.about_feat_4_desc }];


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
              {features?.map((item) =>
              <div key={item?.title} className="flex flex-col gap-2">
                  <div className="w-6 h-px bg-primary" />
                  <h4 className="text-foreground font-semibold text-sm">{item?.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item?.desc}</p>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm text-primary hover:text-foreground transition-colors tracking-widest uppercase font-medium flex items-center gap-2">
              
              {t?.about_link}
              <span>→</span>
            </Link>
          </div>

          {/* Right — Real Rock Shield imagery + stats */}
          <div className="reveal-up">
            <div className="relative">
              {/* Real Rock Shield vehicle image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-card border border-border mb-6">
                <AppImage
                  src="https://rockshieldkw.com/wp-content/uploads/2024/06/lamborghini-huracan-sto-015.webp"
                  alt="Rock Shield Kuwait — XPEL paint protection film installation on a Lamborghini"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
                {/* Amber corner accent */}
                <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary" />
                <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary" />
                {/* XPEL badge overlay */}
                <div className="absolute bottom-4 right-4 glass-dark px-3 py-2 flex items-center gap-2">
                  <AppImage
                    src="https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL.png"
                    alt="XPEL authorized installer"
                    width={56}
                    height={18}
                    className="h-4 w-auto object-contain opacity-90" />
                  
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-card border border-border p-4 flex flex-col gap-1">
                  <span className="font-display text-2xl font-semibold text-foreground">4.7</span>
                  <span className="text-primary text-xs">★★★★★</span>
                  <span className="text-muted-foreground text-[10px] tracking-wide">{t?.about_stat_rating}</span>
                </div>
                <div className="bg-card border border-border p-4 flex flex-col gap-1">
                  <span className="font-display text-2xl font-semibold text-foreground">62+</span>
                  <span className="text-primary text-xs">{t?.about_stat_reviews}</span>
                  <span className="text-muted-foreground text-[10px] tracking-wide">{t?.about_stat_verified}</span>
                </div>
                <div className="bg-card border border-border p-4 flex flex-col gap-1">
                  <span className="font-display text-2xl font-semibold text-foreground">6</span>
                  <span className="text-primary text-xs">{t?.about_stat_services}</span>
                  <span className="text-muted-foreground text-[10px] tracking-wide">{t?.about_stat_protection}</span>
                </div>
                <div className="bg-card border border-border p-4 flex flex-col gap-1">
                  <span className="font-display text-lg font-semibold text-primary">XPEL</span>
                  <span className="text-muted-foreground text-[10px] tracking-wide leading-tight">{t?.about_stat_xpel}</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-primary/25" />
            </div>
          </div>
        </div>
      </div>
    </section>);

}