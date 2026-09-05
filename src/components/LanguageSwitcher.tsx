'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {SUPPORTED_LANGUAGES?.map((lang) => (
        <button
          key={lang?.code}
          onClick={() => setLanguage(lang?.code)}
          className={language === lang?.code ? 'active' : ''}
          aria-label={lang?.code === 'en' ? 'Switch to English' : 'التبديل إلى العربية'}
          aria-pressed={language === lang?.code}
        >
          {lang?.label}
        </button>
      ))}
    </div>
  );
}
