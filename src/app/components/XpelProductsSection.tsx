'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { products } from '@/lib/products';

export default function XpelProductsSection() {
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
    <section ref={sectionRef} id="products" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Technology</span>
            </div>
            <h2 className="font-display text-section-title text-foreground">
              The XPEL<br />Product Range
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
              Rock Shield exclusively uses XPEL — the world&apos;s leading automotive protection brand. Every product is installed by our certified technicians.
            </p>
          </div>
          <div className="flex flex-col gap-3 self-start lg:self-auto">
            <AppImage
              src="https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL.png"
              alt="XPEL authorized distributor and installer"
              width={100}
              height={32}
              className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Authorized Distributor &amp; Installer</span>
          </div>
        </div>

        {/* Products Grid — varied sizing for visual interest */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products?.map((product, i) => (
            <div
              key={product?.id}
              className="reveal-up group bg-background border border-border hover:border-primary/35 transition-all duration-300 p-8 flex flex-col gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-primary tracking-widest uppercase font-medium border border-primary/30 px-2 py-1">
                  {product?.category}
                </span>
              </div>
              <div className="h-10 flex items-center">
                <AppImage
                  src={product?.logo}
                  alt={`${product?.name} logo`}
                  width={160}
                  height={40}
                  className="h-8 w-auto object-contain object-left brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div>
                <p className="text-primary text-xs font-medium tracking-wide mb-2">{product?.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{product?.description}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <Link
                  href={`/products#${product?.id}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-up">
          <Link
            href="/products"
            className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase font-medium border border-border hover:border-primary/40 px-8 py-4 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
