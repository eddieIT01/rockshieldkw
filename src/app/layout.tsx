import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';
import { LanguageProvider } from '@/context/LanguageContext';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rockshieldkw.com'),
  title: {
    default: 'Rock Shield Kuwait — XPEL Authorized PPF, Ceramic Coating & Window Tint',
    template: '%s | Rock Shield Kuwait'
  },
  description: 'Rock Shield Kuwait — XPEL authorized distributor & installer. Paint Protection Film (PPF), Ceramic Coating, Window Tint, Detailing and Painting. Shwaikh Industrial, Kuwait. Call +965 604 222 11.',
  keywords: 'Rock Shield Kuwait, XPEL Kuwait, PPF Kuwait, paint protection film Kuwait, ceramic coating Kuwait, window tint Kuwait, car protection Kuwait, XPEL PPF Kuwait, XPEL ULTIMATE PLUS Kuwait, car detailing Kuwait, Shwaikh Industrial',
  authors: [{ name: 'Rock Shield Kuwait' }],
  openGraph: {
    type: 'website',
    locale: 'en_KW',
    url: '/',
    siteName: 'Rock Shield Kuwait',
    title: 'Rock Shield Kuwait — XPEL Authorized Protection Specialists',
    description: "Kuwait's authorized XPEL distributor & installer. PPF, Ceramic Coating, Window Tint — precision-applied in Shwaikh Industrial.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rock Shield Kuwait — XPEL Authorized Protection',
    description: "Kuwait's authorized XPEL distributor & installer. PPF, Ceramic Coating, Window Tint.",
  },
  icons: {
    icon: [{ url: 'https://rockshieldkw.com/wp-content/uploads/2024/04/cropped-favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <style>{`
          :root {
            --font-sans: var(--font-dm-sans), 'DM Sans', sans-serif;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rock Shield Kuwait",
              "alternateName": "Rock Shield – XPEL",
              "description": "Kuwait's authorized XPEL distributor & installer specializing in Paint Protection Film, Ceramic Coating, Window Tint, and Detailing.",
              "url": "https://rockshieldkw.com",
              "logo": "https://rockshieldkw.com/wp-content/uploads/2024/04/New-Project-120x105.png",
              "telephone": "+96560422211",
              "email": "info@rockshieldkw.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shwaikh Industrial, Block 1, 13 ST, 107",
                "addressLocality": "Kuwait City",
                "addressCountry": "KW"
              },
              "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "10:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "20:00"
              }],

              "sameAs": [
              "https://www.instagram.com/rockshield_kw",
              "https://www.tiktok.com/@rockshield_kw"],

              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "62"
              }
            })
          }} />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frockshield6687back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></head>
      <body className={dmSans.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>);

}