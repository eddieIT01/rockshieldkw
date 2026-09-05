'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const STEPS = ['Service', 'Vehicle', 'Location', 'Date & Time', 'Your Details', 'Confirm'];

const services = [
  'Paint Protection Film (PPF)',
  'Window Tint',
  'Window Shield',
  'Ceramic Coating',
  'Detailing Services',
  'Painting',
  'Other'
];

interface BookingData {
  service: string;
  make: string;
  model: string;
  year: string;
  location: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
}

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<BookingData>({
    service: '',
    make: '',
    model: '',
    year: '',
    location: 'Shwaikh Industrial',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });

  const update = (field: keyof BookingData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.make && !!data.model && !!data.year;
    if (step === 2) return !!data.location;
    if (step === 3) return !!data.date && !!data.time;
    if (step === 4) return !!data.name && !!data.phone && !!data.email;
    return true;
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center px-6 py-32">
          <div className="max-w-2xl w-full text-center">
            <div className="w-20 h-20 border border-primary rounded-full flex items-center justify-center mx-auto mb-10">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl text-foreground mb-4">Request Received</h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
              Thank you, <strong className="text-foreground">{data.name}</strong>. We&apos;ve received your booking request for <strong className="text-foreground">{data.service}</strong>. Our team will contact you at <strong className="text-foreground">{data.phone}</strong> to confirm your appointment.
            </p>
            <div className="bg-card border border-border p-8 text-left mb-10">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Booking Summary</h2>
              <div className="grid grid-cols-2 gap-6 text-sm">
                {[
                  { label: 'Service', value: data.service },
                  { label: 'Vehicle', value: `${data.year} ${data.make} ${data.model}` },
                  { label: 'Location', value: data.location },
                  { label: 'Date', value: data.date },
                  { label: 'Time', value: data.time },
                  { label: 'Contact', value: data.phone }
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-muted-foreground text-xs tracking-widest uppercase">{item.label}</span>
                    <p className="text-foreground mt-1">{item.value || '—'}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/96560422211?text=Hello%20Rock%20Shield%2C%20I%20just%20submitted%20a%20booking%20request."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm tracking-widest uppercase"
              >
                Message on WhatsApp
              </a>
              <Link href="/" className="px-8 py-4 text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors text-center">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="pt-40 pb-16 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Book Appointment</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Reserve Your Protection
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Complete the steps below and our team will confirm your appointment within 24 hours.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-24 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Step indicators */}
            <div className="flex items-center justify-between mb-12 overflow-x-auto pb-2">
              {STEPS.map((label, i) => (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className={`step-indicator ${i === step ? 'active' : i < step ? 'completed' : ''}`}>
                      {i < step ? (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>
                    <span className={`text-xs tracking-wide hidden sm:block ${i === step ? 'text-primary' : 'text-muted-foreground'}`}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-2 transition-colors ${i < step ? 'bg-primary' : 'bg-border'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-card border border-border p-8 lg:p-12 min-h-72">
              {step === 0 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">What does your vehicle need?</h2>
                  <p className="text-muted-foreground text-sm mb-8">Select the service you&apos;re interested in.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <button
                        key={s}
                        onClick={() => update('service', s)}
                        className={`service-option text-left ${data.service === s ? 'selected' : ''}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Tell us about your vehicle</h2>
                  <p className="text-muted-foreground text-sm mb-8">This helps us prepare the right materials and time.</p>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Make</label>
                      <input type="text" placeholder="e.g. Toyota, BMW, Porsche" value={data.make} onChange={(e) => update('make', e.target.value)} className="booking-input" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Model</label>
                      <input type="text" placeholder="e.g. Land Cruiser, M5, 911" value={data.model} onChange={(e) => update('model', e.target.value)} className="booking-input" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Year</label>
                      <input type="text" placeholder="e.g. 2024" value={data.year} onChange={(e) => update('year', e.target.value)} className="booking-input" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Preferred location</h2>
                  <p className="text-muted-foreground text-sm mb-8">Visit us at our Shwaikh Industrial facility.</p>
                  <button
                    onClick={() => update('location', 'Shwaikh Industrial')}
                    className={`service-option w-full text-left ${data.location === 'Shwaikh Industrial' ? 'selected' : ''}`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">Rock Shield Kuwait</span>
                      <span className="text-xs text-muted-foreground">Shwaikh Industrial, Block 1, 13 ST, 107</span>
                      <span className="text-xs text-muted-foreground">Mon–Sat: 10:00 AM – 8:00 PM · Friday: Closed</span>
                    </div>
                  </button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Preferred date &amp; time</h2>
                  <p className="text-muted-foreground text-sm mb-8">We&apos;ll confirm availability when we contact you.</p>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Preferred Date</label>
                      <input type="date" value={data.date} onChange={(e) => update('date', e.target.value)} className="booking-input" style={{ colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Preferred Time</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map((t) => (
                          <button
                            key={t}
                            onClick={() => update('time', t)}
                            className={`py-3 text-sm border transition-colors ${data.time === t ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Your details</h2>
                  <p className="text-muted-foreground text-sm mb-8">We&apos;ll use this to confirm your appointment.</p>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Full Name</label>
                      <input type="text" placeholder="Your name" value={data.name} onChange={(e) => update('name', e.target.value)} className="booking-input" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Phone Number</label>
                      <input type="tel" placeholder="+965 XXXX XXXX" value={data.phone} onChange={(e) => update('phone', e.target.value)} className="booking-input" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Email Address</label>
                      <input type="email" placeholder="your@email.com" value={data.email} onChange={(e) => update('email', e.target.value)} className="booking-input" />
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-2">Review your booking</h2>
                  <p className="text-muted-foreground text-sm mb-8">Confirm the details below and submit your request.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { label: 'Service', value: data.service },
                      { label: 'Vehicle', value: `${data.year} ${data.make} ${data.model}` },
                      { label: 'Location', value: data.location },
                      { label: 'Date', value: data.date },
                      { label: 'Time', value: data.time },
                      { label: 'Name', value: data.name },
                      { label: 'Phone', value: data.phone },
                      { label: 'Email', value: data.email }
                    ].map((item) => (
                      <div key={item.label} className="border-b border-border pb-4">
                        <span className="text-xs text-muted-foreground tracking-widest uppercase">{item.label}</span>
                        <p className="text-foreground text-sm mt-1">{item.value || '—'}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`text-sm text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase font-medium ${step === 0 ? 'invisible' : ''}`}
              >
                ← Back
              </button>
              {step < 5 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="btn-primary px-8 py-3 text-sm tracking-widest uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary px-8 py-3 text-sm tracking-widest uppercase">
                  Submit Request
                </button>
              )}
            </div>

            <p className="text-center text-muted-foreground text-xs mt-6">
              Prefer to book directly?{' '}
              <a href="https://calendly.com/rockshieldkw/cardelivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors">
                Use our Calendly →
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
