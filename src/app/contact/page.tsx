'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Contact Us</span>
            </div>
            <h1 className="font-display text-hero text-foreground max-w-3xl">
              We&apos;re Here<br />
              <span className="text-primary">to Help.</span>
            </h1>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  We appreciate your interest in Rock Shield. Don&apos;t hesitate to contact us — our team is ready to help you choose the right protection for your vehicle.
                </p>

                <div className="flex flex-col gap-8">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Phone</h3>
                      <a href="tel:+96560422211" className="text-muted-foreground hover:text-primary transition-colors text-sm block">+965 604 222 11</a>
                      <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Email</h3>
                      <a href="mailto:info@rockshieldkw.com" className="text-muted-foreground hover:text-primary transition-colors text-sm block">info@rockshieldkw.com</a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Address</h3>
                      <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                        Shwaikh Industrial<br />
                        Block 1, 13 ST, 107<br />
                        Kuwait City, Kuwait
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">Hours</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Mon–Thu &amp; Sat: 10:00 AM – 8:00 PM</p>
                        <p className="text-primary">Friday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-5">
                    <div className="w-10 h-10 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-3">Follow Us</h3>
                      <div className="flex flex-col gap-2">
                        <a href="https://www.instagram.com/rockshield_kw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          Instagram: @rockshield_kw
                        </a>
                        <a href="https://www.tiktok.com/@rockshield_kw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          TikTok: @rockshield_kw
                        </a>
                        <a href="https://wa.me/96560422211" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          WhatsApp: +965 604 222 11
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                {submitted ? (
                  <div className="bg-card border border-border p-10 text-center">
                    <div className="w-14 h-14 border border-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-display text-2xl text-foreground mb-3">Message Sent</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card border border-border p-8 lg:p-10">
                    <h2 className="font-display text-2xl text-foreground mb-8">Send a Message</h2>
                    <div className="flex flex-col gap-6">
                      <div>
                        <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                          className="booking-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                          className="booking-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Contact Number</label>
                        <input
                          type="tel"
                          placeholder="+965 XXXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                          className="booking-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Your Message</label>
                        <textarea
                          required
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                          className="booking-input resize-none"
                          style={{ borderBottom: '1px solid var(--border)', paddingTop: '0.875rem' }}
                        />
                      </div>
                      <button type="submit" className="btn-primary py-4 text-sm tracking-widest uppercase">
                        Send Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
