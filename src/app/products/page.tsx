import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'XPEL Products — ULTIMATE PLUS, STEALTH, PRIME, FUSION PLUS, RX, VISION',
  description: 'Rock Shield Kuwait uses only XPEL products — the world\'s best automotive protection. XPEL ULTIMATE PLUS PPF, STEALTH, PRIME window tint, FUSION PLUS ceramic coating, RX, and VISION.'
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Our Products</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <h1 className="font-display text-hero text-foreground max-w-2xl mb-4">
                  The Best<br />
                  <span className="text-primary">in the World.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  Rock Shield exclusively uses XPEL — the world&apos;s leading automotive protection brand. Every product is installed by our certified technicians.
                </p>
              </div>
              <div className="flex flex-col gap-2 self-start lg:self-auto">
                <AppImage
                  src="https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL.png"
                  alt="XPEL authorized distributor and installer"
                  width={100}
                  height={32}
                  className="h-7 w-auto object-contain opacity-80" />
                
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Authorized Distributor &amp; Installer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        {products.map((product, i) =>
        <section
          key={product.id}
          id={product.id}
          className={`py-20 ${i % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
          
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-xs text-primary tracking-widest uppercase font-medium bg-primary/10 px-2 py-1 inline-block mb-6">
                    {product.category}
                  </span>
                  <div className="h-12 flex items-center mb-4">
                    <AppImage
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={200}
                    height={48}
                    className="h-10 w-auto object-contain object-left" />
                  
                  </div>
                  <p className="text-primary text-sm font-medium tracking-wide mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>
                  <Link
                  href={`/booking?service=${encodeURIComponent(product.service)}`}
                  className="btn-primary px-8 py-4 text-sm tracking-widest uppercase inline-block">
                  
                    Book {product.category}
                  </Link>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="border border-border p-8">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Key Features</h3>
                    <ul className="flex flex-col gap-4">
                      {product.features.map((feature) =>
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                          {feature}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-primary/10 border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              Ready to Protect Your Vehicle?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team will help you choose the right XPEL product for your vehicle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
                Book an Appointment
              </Link>
              <Link href="/services" className="px-8 py-4 text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>);

}