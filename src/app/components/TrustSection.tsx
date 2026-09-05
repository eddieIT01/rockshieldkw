'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const reviews = [
  {
    name: 'Hany Refaat',
    date: 'April 2024',
    rating: 5,
    text: 'قمة الرقى فى التعامل قمة الاحترافية فى الاداء',
    textEn: 'The pinnacle of elegance in dealing, the pinnacle of professionalism in performance.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKmUYnn81H97lgQ1JrRZ5nkoJFGgJggnbhqE-kfPQAwRidO2A=s120-c-rp-mo-br100'
  },
  {
    name: 'Faisal ALenzi',
    date: 'April 2024',
    rating: 5,
    text: 'تعاملهم راقي جدا ومواعيدهم مظبوطة وفريقهم محترف جدا بالتركيب وحمايتهم من افضل حمايات العالم',
    textEn: 'Their service is very refined, appointments are punctual, their team is very professional in installation, and their protection is among the best in the world.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKQ5-rlbXwOoQ_A3Z-hPqL8eSsYnekjisZIpNxaPlWwKX1y0w=s120-c-rp-mo-br100'
  },
  {
    name: 'yasir noah',
    date: 'March 2024',
    rating: 5,
    text: 'THANKS ROCK SHIELD FOR PROVIDING, INSTALLING PAINT PROTECTION AND FOR GOOD, HONESTLY SERVING.',
    textEn: '',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKpDi31WgV_Dao9eP0IR1eK9p6wX31_7Amh0NPyPk-Gxhk70g=s120-c-rp-mo-br100'
  },
  {
    name: 'Fatma Alshammari',
    date: 'March 2024',
    rating: 5,
    text: 'Excellent service 👍',
    textEn: '',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ-A6HDlcXvZ_sgMTHSy6EYis5gjQKU93mpF_eD4RRVwO2olA=s120-c-rp-mo-br100'
  },
  {
    name: 'abdullah albanna',
    date: 'April 2024',
    rating: 5,
    text: 'خدمه ممتازه و من افضل العوازل بالعالم',
    textEn: 'Excellent service and among the best insulation in the world.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKU0Fh9iQGGvbKX58r7nP7u6Y15quBbvWdsf6ccWnBBicgEeA=s120-c-rp-mo-br100'
  }
];

export default function TrustSection() {
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
    const elements = sectionRef?.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{t?.trust_eyebrow}</span>
            </div>
            <h2 className="font-display text-section-title text-foreground whitespace-pre-line">
              {t?.trust_heading}
            </h2>
          </div>
          <div className="flex flex-col gap-2 self-start lg:self-auto">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-semibold text-foreground">4.7</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5]?.map(i => (
                  <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-muted-foreground text-sm">{t?.trust_based_on}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews?.map((review, i) => (
            <div
              key={review?.name}
              className="reveal-up bg-background border border-border hover:border-primary/25 transition-colors duration-300 p-7 flex flex-col gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars — amber */}
              <div className="flex gap-0.5">
                {Array.from({ length: review?.rating })?.map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <div className="flex-1">
                <p className="text-foreground text-sm leading-relaxed mb-2">{review?.text}</p>
                {review?.textEn && (
                  <p className="text-muted-foreground text-xs leading-relaxed italic">{review?.textEn}</p>
                )}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                  <AppImage
                    src={review?.avatar}
                    alt={`${review?.name} — Google review for Rock Shield Kuwait`}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{review?.name}</p>
                  <p className="text-muted-foreground text-xs">{review?.date} · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google attribution */}
        <div className="mt-10 flex items-center justify-center gap-3 reveal-up">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-muted-foreground text-sm">{t?.trust_google}</span>
        </div>
      </div>
    </section>
  );
}