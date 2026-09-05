import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Location — Rock Shield Kuwait, Shwaikh Industrial',
  description: 'Visit Rock Shield Kuwait at Shwaikh Industrial, Block 1, 13 ST, 107. Open Monday–Saturday 10AM–8PM. Call +965 604 222 11.',
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Find Us</span>
            </div>
            <h1 className="font-display text-hero text-foreground max-w-3xl">
              Our<br />
              <span className="text-primary">Location</span>
            </h1>
          </div>
        </section>

        {/* Location Card */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Info */}
              <div>
                <h2 className="font-display text-3xl text-foreground mb-8">Rock Shield Kuwait</h2>

                <div className="flex flex-col gap-8">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">Address</h3>
                      <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                        Shwaikh Industrial<br />
                        Block 1, 13 ST, 107<br />
                        Kuwait City, Kuwait
                      </address>
                      <a
                        href="https://maps.google.com/?q=Shwaikh+Industrial+Block+1+13+ST+107+Kuwait"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:text-foreground transition-colors tracking-widest uppercase font-medium mt-3 inline-block"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-3">Opening Hours</h3>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Monday – Thursday</span>
                          <span className="text-foreground">10:00 AM – 8:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground">10:00 AM – 8:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Friday</span>
                          <span className="text-primary font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-3">Contact</h3>
                      <div className="flex flex-col gap-2">
                        <a href="tel:+96560422211" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          +965 604 222 11
                        </a>
                        <a href="mailto:info@rockshieldkw.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          info@rockshieldkw.com
                        </a>
                        <a
                          href="https://wa.me/96560422211"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          WhatsApp: +965 604 222 11
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link href="/booking" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase text-center">
                    Book Here
                  </Link>
                  <a
                    href="https://maps.google.com/?q=Shwaikh+Industrial+Block+1+13+ST+107+Kuwait"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-sm tracking-widest uppercase text-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="bg-card border border-border overflow-hidden min-h-80 lg:min-h-full flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.5!2d47.9!3d29.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIxJzAwLjAiTiA0N8KwNTQnMDAuMCJF!5e0!3m2!1sen!2skw!4v1234567890"
                  className="w-full flex-1 min-h-80"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rock Shield Kuwait location map"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Shwaikh Industrial, Block 1, 13 ST, 107 — Kuwait City</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-primary/10 border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-2">Emergency Call 24/7</p>
                <a href="tel:+96560422211" className="font-display text-3xl lg:text-4xl text-foreground hover:text-primary transition-colors">
                  +965 604 222 11
                </a>
              </div>
              <Link href="/booking" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase whitespace-nowrap">
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
