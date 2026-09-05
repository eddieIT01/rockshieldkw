import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'XPEL Products — ULTIMATE PLUS, STEALTH, PRIME, FUSION PLUS, RX, VISION',
  description: 'Rock Shield Kuwait uses only XPEL products — the world\'s best automotive protection. XPEL ULTIMATE PLUS PPF, STEALTH, PRIME window tint, FUSION PLUS ceramic coating, RX, and VISION.'
};

const products = [
{
  id: 'ultimate-plus',
  name: 'XPEL ULTIMATE PLUS',
  category: 'Paint Protection Film',
  tagline: 'The world\'s first self-healing PPF',
  description: 'In 2011, XPEL revolutionized the industry with the world\'s first self-healing paint protection film. ULTIMATE PLUS raises the bar once again with an unparalleled high gloss finish and improved impact protection.',
  features: [
  'Self-healing technology — minor scratches disappear with heat',
  'Unparalleled high gloss finish',
  'Improved impact protection',
  'Designed for peace of mind on the open road',
  'Keeps surfaces safe from gravel, oils, bug acids, and bird droppings',
  'Stops paint chips before they start',
  'Warranty covers yellowing, cracking, blistering, and delamination'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/ULTIMATE-PLUS-Logo-1024x241-1.png',
  service: 'Paint Protection Film'
},
{
  id: 'stealth',
  name: 'XPEL STEALTH',
  category: 'Paint Protection Film',
  tagline: 'As smooth as satin',
  description: 'Whether your vehicle is matte, magno, frozen or frosted, self-healing XPEL STEALTH will keep it looking effortlessly pristine. Or, protect your gloss paint with a whole new look.',
  features: [
  'Self-healing technology',
  'Perfect for matte, magno, frozen, and frosted finishes',
  'Can give gloss paint a satin/matte appearance',
  'Warranty covers yellowing, cracking, blistering, and delamination',
  'Same protection as ULTIMATE PLUS in a satin finish',
  'Maintains the unique look of specialty paint finishes'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL-st.png',
  service: 'Paint Protection Film'
},
{
  id: 'prime',
  name: 'XPEL PRIME',
  category: 'Window Tint',
  tagline: 'Precision window film',
  description: 'PRIME XP reduces infrared heat, cuts glare, and protects drivers and passengers from harmful UV rays. PRIME XP multilayer sputter film is virtually undetectable and available in a broad range of VLT percentages.',
  features: [
  'Reduces infrared heat significantly',
  'Cuts glare for improved driving comfort',
  'Protects from harmful UV rays',
  'Multilayer sputter film — virtually undetectable',
  'Available in broad range of VLT (Visible Light Transmittance) percentages',
  'Proven to perform in the harshest environments',
  'Provides protection, comfort, and peace of mind'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL-p.png',
  service: 'Window Tint'
},
{
  id: 'fusion-plus',
  name: 'XPEL FUSION PLUS',
  category: 'Ceramic Coating',
  tagline: 'Molecular-level protection',
  description: 'FUSION PLUS is a silicon based product. It bonds at the molecular level to seal and protect surfaces from environmental contaminants, harmful UV rays, and insect acids.',
  features: [
  'Bonds at the molecular level for permanent protection',
  'Seals and protects from environmental contaminants',
  'Guards against harmful UV rays',
  'Protects against insect acids',
  'Provides resistance to light scratches and fading',
  'Hydrophobic properties repel dirt and liquids',
  'Makes surfaces significantly easier to clean'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL-fu.png',
  service: 'Ceramic Coating'
},
{
  id: 'rx',
  name: 'XPEL RX',
  category: 'Specialty Film',
  tagline: 'Antimicrobial film technology',
  description: 'RX Antimicrobial Film has been specially formulated to resist the growth of microbes on its surface, guarding against degradation from microorganisms.',
  features: [
  'Specially formulated to resist microbe growth',
  'Treated with a fungistatic agent to protect from fungal growth',
  'Contains zinc pyrithione which inhibits microbe growth',
  'Improves screen clarity',
  'Enhanced impact resistance',
  'Available in both high gloss and matte finishes'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL-DAP-11-LOGO.png',
  service: 'Specialty Film'
},
{
  id: 'vision',
  name: 'XPEL VISION',
  category: 'Window Film',
  tagline: 'Home & office window film',
  description: 'Get a new outlook on your home, office, and personal spaces with XPEL VISION Home and Office Window Film. Offering a wide array of solar and security film solutions to suit any need.',
  features: [
  'Wide array of solar and security film solutions',
  'Designed to help reduce heat',
  'Lowers energy costs',
  'Maintains comfort and protection',
  'Suitable for home and office applications',
  'Multiple options to suit any need'],

  logo: 'https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL-v.png',
  service: 'Window Film'
}];


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