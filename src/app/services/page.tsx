import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Our Services — PPF, Window Tint, Ceramic Coating & More',
  description: 'Rock Shield Kuwait offers Paint Protection Film (PPF), Window Tint, Window Shield, Ceramic Coating, Detailing, and Painting — all using XPEL products.',
};

const services = [
  {
    id: 'ppf',
    number: '01',
    title: 'Paint Protection Film',
    subtitle: 'XPEL ULTIMATE PLUS & STEALTH',
    description: 'We use top-of-the-line XPEL PPF materials that are durable, self-healing, and virtually invisible, providing comprehensive defense while preserving the original beauty of your car\'s paint.',
    details: [
      'Self-healing technology — minor scratches disappear with heat',
      'Protects against stone chips, gravel, and road debris',
      'Guards against bug acids, bird droppings, and environmental contaminants',
      'Virtually invisible — preserves your vehicle\'s original appearance',
      'Available in gloss (ULTIMATE PLUS) and satin/matte (STEALTH) finishes',
      'Backed by XPEL\'s industry-leading warranty'
    ],
    cta: 'Book PPF Installation'
  },
  {
    id: 'window-tint',
    number: '02',
    title: 'Window Tint',
    subtitle: 'XPEL PRIME',
    description: 'This film is designed to reduce the amount of visible light, infrared radiation, and ultraviolet (UV) rays that enter the vehicle, providing several benefits for Kuwait\'s intense climate.',
    details: [
      'Reduces infrared heat — keeps your interior cooler',
      'Blocks harmful UV rays — protects occupants and interior',
      'Cuts glare for improved driving comfort',
      'XPEL PRIME multilayer sputter film — virtually undetectable',
      'Available in a broad range of VLT percentages',
      'Proven to perform in the harshest environments'
    ],
    cta: 'Book Window Tint'
  },
  {
    id: 'window-shield',
    number: '03',
    title: 'Window Shield',
    subtitle: 'Windshield Protection',
    description: 'A protective film installed at the front of vehicles to shield occupants from wind, debris, and other hazards while driving — without compromising visibility.',
    details: [
      'Protects windshield from stone chips and debris',
      'Maintains full optical clarity',
      'Reduces the risk of windshield damage on highways',
      'Easy to replace when damaged — protecting the glass beneath',
      'Professional installation for perfect fit'
    ],
    cta: 'Book Window Shield'
  },
  {
    id: 'ceramic',
    number: '04',
    title: 'Ceramic Coating',
    subtitle: 'XPEL FUSION PLUS',
    description: 'Ceramic coating is a revolutionary protective solution for vehicles that provides long-lasting shine and defense against environmental contaminants.',
    details: [
      'XPEL FUSION PLUS bonds at the molecular level',
      'Seals and protects surfaces from environmental contaminants',
      'Guards against harmful UV rays and insect acids',
      'Provides resistance to light scratches and fading',
      'Hydrophobic properties repel dirt and liquids',
      'Makes surfaces significantly easier to clean and maintain'
    ],
    cta: 'Book Ceramic Coating'
  },
  {
    id: 'detailing',
    number: '05',
    title: 'Detailing Services',
    subtitle: 'Professional Detailing',
    description: 'We pay attention to every detail to ensure your vehicle looks its best, providing tailored solutions to address specific needs and preferences.',
    details: [
      'Comprehensive interior and exterior detailing',
      'Paint decontamination and correction',
      'Engine bay cleaning',
      'Leather conditioning and interior protection',
      'Tailored solutions for your vehicle\'s specific needs',
      'Preparation for PPF or ceramic coating application'
    ],
    cta: 'Book Detailing'
  },
  {
    id: 'painting',
    number: '06',
    title: 'Painting',
    subtitle: 'Automotive Painting',
    description: 'Car painting can be customized to match the original color or to create a unique look, and it can also include special finishes like metallic or pearlescent effects.',
    details: [
      'Factory-matched color painting',
      'Custom color options available',
      'Metallic and pearlescent finishes',
      'Panel repairs and full resprays',
      'Professional preparation and finishing',
      'Long-lasting results with quality materials'
    ],
    cta: 'Book Painting'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Our Services</span>
            </div>
            <h1 className="font-display text-hero text-foreground max-w-3xl mb-6">
              Quality Auto Services<br />
              <span className="text-primary">in Kuwait</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Our services encompass a comprehensive range of solutions designed to meet your needs with precision and excellence. From PPF to detailing — every service is delivered to the highest standard.
            </p>
          </div>
        </section>

        {/* Services */}
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${i % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-primary tracking-widest">{service.number}</span>
                    <div className="w-6 h-px bg-primary" />
                    <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{service.subtitle}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                  <Link
                    href={`/booking?service=${encodeURIComponent(service.title)}`}
                    className="btn-primary px-8 py-4 text-sm tracking-widest uppercase inline-block"
                  >
                    {service.cta}
                  </Link>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="border border-border p-8">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">What&apos;s Included</h3>
                    <ul className="flex flex-col gap-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-primary/10 border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us now and our team will help you make the right decision for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
                Book an Appointment
              </Link>
              <a
                href="https://wa.me/96560422211?text=Hello%20Rock%20Shield%2C%20I%20need%20help%20choosing%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
