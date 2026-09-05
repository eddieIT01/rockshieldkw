'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav_home, href: '/' },
    { label: t.nav_about, href: '/about' },
    { label: t.nav_services, href: '/services' },
    { label: t.nav_products, href: '/products' },
    { label: t.nav_locations, href: '/locations' },
    { label: t.nav_contact, href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body?.classList?.add('overflow-hidden');
    } else {
      document.body?.classList?.remove('overflow-hidden');
    }
    return () => document.body?.classList?.remove('overflow-hidden');
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Rock Shield Kuwait — Home">
              <AppImage
                src="https://rockshieldkw.com/wp-content/uploads/2024/04/New-Project-120x105.png"
                alt="Rock Shield Kuwait logo"
                width={40}
                height={35}
                priority
                className="w-auto h-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-foreground font-display font-semibold text-sm tracking-widest uppercase">
                  Rock Shield
                </span>
                <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase font-medium">
                  Kuwait · XPEL
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                    isActive(link.href)
                      ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Language */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href="tel:+96560422211"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                aria-label="Call Rock Shield Kuwait"
              >
                <Icon name="PhoneIcon" size={14} className="text-primary" />
                +965 604 222 11
              </a>
              <Link
                href="/booking"
                className="btn-primary text-xs px-5 py-3 tracking-widest uppercase"
              >
                {t.nav_book}
              </Link>
            </div>

            {/* Mobile: Language + Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button
                className="p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <Icon name="XMarkIcon" size={24} />
                ) : (
                  <Icon name="Bars3Icon" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,9,9,0.98)', backdropFilter: 'blur(20px)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          {/* Logo in mobile menu */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <AppImage
              src="https://rockshieldkw.com/wp-content/uploads/2024/04/New-Project-120x105.png"
              alt="Rock Shield Kuwait logo"
              width={36}
              height={32}
              className="w-auto h-8 object-contain"
            />
            <span className="font-display font-semibold text-sm tracking-widest uppercase text-foreground">
              Rock Shield
            </span>
          </div>

          <nav className="flex flex-col gap-6 flex-1" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-3xl font-display font-medium transition-colors ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-border pt-6">
            <a
              href="tel:+96560422211"
              className="flex items-center gap-3 text-muted-foreground text-base font-medium"
              aria-label="Call Rock Shield Kuwait"
            >
              <Icon name="PhoneIcon" size={18} className="text-primary" />
              +965 604 222 11
            </a>
            <a
              href="https://wa.me/96560422211"
              className="flex items-center gap-3 text-muted-foreground text-base font-medium"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} className="text-primary" />
              WhatsApp
            </a>
            <Link href="/booking" className="btn-primary text-center mt-2 tracking-widest uppercase text-sm">
              {t.nav_book}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}