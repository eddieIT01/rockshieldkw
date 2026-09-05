import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <AppImage
                src="https://rockshieldkw.com/wp-content/uploads/2024/04/New-Project-120x105.png"
                alt="Rock Shield Kuwait logo"
                width={36}
                height={32}
                className="w-auto h-8 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-sm tracking-widest uppercase text-foreground">
                  Rock Shield
                </span>
                <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase">
                  Kuwait · XPEL
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Kuwait&apos;s authorized XPEL distributor &amp; installer.<br />
              Protection. Precision. Craftsmanship.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rockshield_kw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Rock Shield Kuwait on Instagram"
              >
                <Icon name="CameraIcon" size={15} />
              </a>
              <a
                href="https://www.tiktok.com/@rockshield_kw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Rock Shield Kuwait on TikTok"
              >
                <Icon name="MusicalNoteIcon" size={15} />
              </a>
              <a
                href="https://wa.me/96560422211"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Rock Shield Kuwait on WhatsApp"
              >
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={15} />
              </a>
            </div>
            <div className="mt-2">
              <AppImage
                src="https://rockshieldkw.com/wp-content/uploads/2024/06/XPEL.png"
                alt="XPEL authorized distributor and installer"
                width={72}
                height={24}
                className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Services</span>
              {[
                { label: 'Paint Protection Film', href: '/services#ppf' },
                { label: 'Window Tint', href: '/services#window-tint' },
                { label: 'Ceramic Coating', href: '/services#ceramic' },
                { label: 'Detailing', href: '/services#detailing' },
                { label: 'Window Shield', href: '/services#window-shield' },
                { label: 'Painting', href: '/services#painting' }
              ]?.map((s) => (
                <Link key={s?.label} href={s?.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  {s?.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Company</span>
              {[
                { label: 'About', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Locations', href: '/locations' },
                { label: 'Book Appointment', href: '/booking' },
                { label: 'Contact', href: '/contact' }
              ]?.map((l) => (
                <Link key={l?.label} href={l?.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  {l?.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Contact</span>
              <a href="tel:+96560422211" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                +965 604 222 11
              </a>
              <a href="mailto:info@rockshieldkw.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                info@rockshieldkw.com
              </a>
              <span className="text-sm text-muted-foreground font-medium">Mon–Sat: 10AM–8PM</span>
              <span className="text-sm text-muted-foreground font-medium">Friday: Closed</span>
              <address className="text-sm text-muted-foreground font-medium not-italic leading-relaxed">
                Shwaikh Industrial<br />
                Block 1, 13 ST, 107<br />
                Kuwait
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Rock Shield Kuwait. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">XPEL Authorized Distributor &amp; Installer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
