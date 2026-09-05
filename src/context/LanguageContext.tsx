'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, SUPPORTED_LANGUAGES, getTranslations } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslations>;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: getTranslations('en'),
  dir: 'ltr',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
    const dir = langConfig?.dir ?? 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('rs_lang', lang);
    }
  }, []);

  useEffect(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('rs_lang') as Language : null;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    }
  }, [setLanguage]);

  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === language);
  const dir = langConfig?.dir ?? 'ltr';
  const t = getTranslations(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
