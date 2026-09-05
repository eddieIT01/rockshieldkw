'use client';

import React, { useState } from 'react';


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

export default function BookingSection() {
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

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 lg:py-32 bg-card">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">Request Received</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Thank you, {data.name}. We&apos;ve received your booking request for <strong className="text-foreground">{data.service}</strong>. Our team will contact you at {data.phone} to confirm your appointment.
          </p>
          <div className="bg-background border border-border p-6 text-left mb-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-muted-foreground">Service</span><p className="text-foreground mt-1">{data.service}</p></div>
              <div><span className="text-muted-foreground">Vehicle</span><p className="text-foreground mt-1">{data.year} {data.make} {data.model}</p></div>
              <div><span className="text-muted-foreground">Date</span><p className="text-foreground mt-1">{data.date}</p></div>
              <div><span className="text-muted-foreground">Time</span><p className="text-foreground mt-1">{data.time}</p></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/96560422211" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
              Message on WhatsApp
            </a>
            <button onClick={() => { setSubmitted(false); setStep(0); setData({ service: '', make: '', model: '', year: '', location: 'Shwaikh Industrial', date: '', time: '', name: '', phone: '', email: '' }); }} className="px-8 py-4 text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              New Booking
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Book Appointment</span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-section-title text-foreground">
            Reserve Your<br />Protection
          </h2>
        </div>

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
        <div className="bg-background border border-border p-8 lg:p-12 min-h-64">
          {/* Step 0 — Service */}
          {step === 0 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">What does your vehicle need?</h3>
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

          {/* Step 1 — Vehicle */}
          {step === 1 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">Tell us about your vehicle</h3>
              <p className="text-muted-foreground text-sm mb-8">This helps us prepare the right materials and time.</p>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Make</label>
                  <input
                    type="text"
                    placeholder="e.g. Toyota, BMW, Porsche"
                    value={data.make}
                    onChange={(e) => update('make', e.target.value)}
                    className="booking-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Model</label>
                  <input
                    type="text"
                    placeholder="e.g. Land Cruiser, M5, 911"
                    value={data.model}
                    onChange={(e) => update('model', e.target.value)}
                    className="booking-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Year</label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={data.year}
                    onChange={(e) => update('year', e.target.value)}
                    className="booking-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Location */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">Preferred location</h3>
              <p className="text-muted-foreground text-sm mb-8">Visit us at our Shwaikh Industrial facility.</p>
              <button
                onClick={() => update('location', 'Shwaikh Industrial')}
                className={`service-option w-full text-left ${data.location === 'Shwaikh Industrial' ? 'selected' : ''}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground">Rock Shield Kuwait</span>
                  <span className="text-xs text-muted-foreground">Shwaikh Industrial, Block 1, 13 ST, 107</span>
                  <span className="text-xs text-muted-foreground">Mon–Sat: 10:00 AM – 8:00 PM</span>
                </div>
              </button>
            </div>
          )}

          {/* Step 3 — Date & Time */}
          {step === 3 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">Preferred date &amp; time</h3>
              <p className="text-muted-foreground text-sm mb-8">We&apos;ll confirm availability when we contact you.</p>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Preferred Date</label>
                  <input
                    type="date"
                    value={data.date}
                    onChange={(e) => update('date', e.target.value)}
                    className="booking-input"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Preferred Time</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map((t) => (
                      <button
                        key={t}
                        onClick={() => update('time', t)}
                        className={`py-3 text-sm border transition-colors ${
                          data.time === t
                            ? 'border-primary text-primary bg-primary/10' :'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 — Contact */}
          {step === 4 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">Your details</h3>
              <p className="text-muted-foreground text-sm mb-8">We&apos;ll use this to confirm your appointment.</p>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="booking-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+965 XXXX XXXX"
                    value={data.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="booking-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={data.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="booking-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5 — Confirm */}
          {step === 5 && (
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">Review your booking</h3>
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
            <button
              onClick={handleSubmit}
              className="btn-primary px-8 py-3 text-sm tracking-widest uppercase"
            >
              Submit Request
            </button>
          )}
        </div>

        {/* Calendly fallback */}
        <p className="text-center text-muted-foreground text-xs mt-6">
          Prefer to book directly?{' '}
          <a
            href="https://calendly.com/rockshieldkw/cardelivery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-foreground transition-colors"
          >
            Use our Calendly →
          </a>
        </p>
      </div>
    </section>
  );
}