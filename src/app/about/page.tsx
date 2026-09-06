import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'About Rock Shield Kuwait — XPEL Authorized Distributor & Installer',
  description: 'Learn about Rock Shield Kuwait — our story, our team, our commitment to automotive protection excellence, and our authorized XPEL partnership.'
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero — with real Rock Shield vehicle photography */}
        <section className="relative pt-40 pb-24 bg-background overflow-hidden">
          {/* Amber accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
          {/* Subtle amber glow */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(212,160,23,0.06) 0%, transparent 65%)'
            }} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">About Us</span>
                </div>
                <h1 className="font-display text-hero text-foreground max-w-3xl">
                  Rock Shield.<br />
                  <span className="text-primary">Your Choice.</span>
                </h1>
                <p className="text-muted-foreground text-lg mt-6 max-w-lg leading-relaxed">
                  Kuwait&apos;s authorized XPEL distributor and installer — protecting vehicles with precision craftsmanship since day one.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-card border border-border">
                <div className="absolute inset-0" aria-label="Verified Rock Shield photography pending approval" />
                {/* Amber corner accent */}
                <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary" />
                <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary" />
                <div className="absolute bottom-0 right-0 w-10 h-0.5 bg-primary/40" />
                <div className="absolute bottom-0 right-0 w-0.5 h-10 bg-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                  Passionate About Protecting What Matters
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Rock Shield, we are passionate about preserving and enhancing the beauty of your vehicle. With a commitment to excellence and a dedication to quality craftsmanship, we specialize in providing top-tier Paint Protection Film (PPF) installation and automotive protection services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team of highly skilled professionals brings a wealth of experience to every vehicle that enters our facility. We believe that your car deserves the same precision and care that went into building it — and we deliver that standard on every job.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you&apos;re looking to protect your investment with PPF, enhance its appearance with ceramic coating, or rejuvenate it with professional detailing, we&apos;re here to help. Visit our center in Shwaikh Industrial to experience the Rock Shield difference for yourself.
                </p>
                <Link href="/booking" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase inline-block">
                  Book a Consultation
                </Link>
              </div>

              <div className="flex flex-col gap-6">
                {/* Values */}
                {[
                {
                  title: 'Expert Engineers',
                  desc: 'With a team of highly skilled professionals and a wealth of experience, we specialize in providing innovative solutions tailored to your specific requirements.'
                },
                {
                  title: 'Experience & Skills',
                  desc: 'With a focus on real-world applications and continuous learning, our team is equipped with the knowledge, confidence, and adaptability needed to deliver exceptional results.'
                },
                {
                  title: 'Guaranteed Service',
                  desc: 'Ensures peace of mind and satisfaction for every client. Backed by our commitment to excellence, we stand behind the quality of our products and services.'
                },
                {
                  title: 'Trusted Work',
                  desc: 'With a proven track record of delivering superior results, our team is committed to upholding the highest standards of professionalism, integrity, and craftsmanship.'
                }].
                map((item, i) =>
                <div key={item.title} className="flex gap-5 p-6 border border-border hover:border-primary/40 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary text-xs font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* XPEL Partnership */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Our Partnership</span>
                <div className="w-8 h-px bg-primary" />
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                Rock Shield × XPEL
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Rock Shield is proud to be an authorized XPEL distributor and installer in Kuwait. XPEL is the world&apos;s leading manufacturer of paint protection film, window tint, and ceramic coating products.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As an authorized partner, we install XPEL Paint Protection Film, XPEL FUSION PLUS Ceramic Coating, and XPEL PRIME Automotive Window Tint — all backed by XPEL&apos;s industry-leading warranties and our own guarantee of craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
                  View XPEL Products
                </Link>
                <Link href="/services" className="px-8 py-4 text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
              <div className="bg-background p-8 lg:p-10 flex flex-col gap-3">
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Location</span>
                <h3 className="font-display text-xl text-foreground">Shwaikh Industrial</h3>
                <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                  Block 1, 13 ST, 107<br />Kuwait City, Kuwait
                </address>
              </div>
              <div className="bg-background p-8 lg:p-10 flex flex-col gap-3">
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Hours</span>
                <h3 className="font-display text-xl text-foreground">Mon–Sat</h3>
                <p className="text-muted-foreground text-sm">10:00 AM – 8:00 PM<br /><span className="text-primary">Friday: Closed</span></p>
              </div>
              <div className="bg-background p-8 lg:p-10 flex flex-col gap-3">
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Contact</span>
                <a href="tel:+96560422211" className="font-display text-xl text-foreground hover:text-primary transition-colors">
                  +965 604 222 11
                </a>
                <a href="mailto:info@rockshieldkw.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@rockshieldkw.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>);

}