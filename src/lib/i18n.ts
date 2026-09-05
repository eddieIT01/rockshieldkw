export type Language = 'en' | 'ar';

export const SUPPORTED_LANGUAGES: { code: Language; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'عر', dir: 'rtl' },
];

export const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_products: 'Products',
    nav_locations: 'Locations',
    nav_contact: 'Contact',
    nav_book: 'Book Appointment',

    // Hero
    hero_eyebrow: 'XPEL Authorized Distributor & Installer',
    hero_headline_1: 'Protection',
    hero_headline_2: 'Perfected.',
    hero_sub: "Kuwait's premier automotive protection studio. PPF, Ceramic Coating, Window Tint — installed with obsessive precision.",
    hero_cta_primary: 'Book Your Protection',
    hero_cta_secondary: 'Explore Services',
    hero_stat_rating: 'Google Rating',
    hero_stat_xpel: 'Authorized',
    hero_stat_services: 'Services',

    // Services section
    services_eyebrow: 'What We Do',
    services_heading: 'Six Ways We\nProtect Your Vehicle',
    services_all: 'All Services',
    services_book: 'Book an Appointment',
    service_ppf_title: 'Paint Protection Film',
    service_ppf_desc: "Self-healing XPEL film that shields your paint from stone chips, scratches, and environmental damage — virtually invisible.",
    service_tint_title: 'Window Tint',
    service_tint_desc: "Reduce heat, block UV rays, and enhance privacy with XPEL PRIME window film — engineered for Kuwait's climate.",
    service_shield_title: 'Window Shield',
    service_shield_desc: 'Front windshield protection film that guards against wind, debris, and road hazards without compromising clarity.',
    service_ceramic_title: 'Ceramic Coating',
    service_ceramic_desc: 'XPEL FUSION PLUS bonds at the molecular level — delivering hydrophobic protection, gloss, and UV resistance.',
    service_detailing_title: 'Detailing Services',
    service_detailing_desc: "Meticulous attention to every surface. Tailored solutions that restore and maintain your vehicle's showroom condition.",
    service_painting_title: 'Painting',
    service_painting_desc: 'Professional automotive painting with custom finishes — metallic, pearlescent, or factory-matched precision.',

    // About section
    about_eyebrow: 'About Rock Shield',
    about_heading: 'Your Vehicle.\nOur Obsession.',
    about_p1: 'At Rock Shield, we are passionate about preserving and enhancing the beauty of your vehicle. With a commitment to excellence and a dedication to quality craftsmanship, we specialize in providing top-tier automotive protection services.',
    about_p2: "As Kuwait's authorized XPEL distributor and installer, we bring world-class protection technology to every vehicle that enters our facility in Shwaikh Industrial. Our team of skilled professionals delivers results that exceed expectations — every time.",
    about_link: 'Our Story',
    about_stat_rating: 'Google Rating',
    about_stat_reviews: 'Reviews',
    about_stat_verified: 'Verified Customers',
    about_stat_services: 'Services',
    about_stat_protection: 'Protection Solutions',
    about_stat_xpel: 'Authorized',
    about_stat_xpel_sub: 'Distributor & Installer',
    about_feat_1_title: 'Expert Engineers',
    about_feat_1_desc: 'Highly skilled professionals with deep expertise in automotive protection.',
    about_feat_2_title: 'Guaranteed Service',
    about_feat_2_desc: 'We stand behind the quality of every installation we perform.',
    about_feat_3_title: 'XPEL Certified',
    about_feat_3_desc: "Authorized distributor and installer of the world's leading PPF brand.",
    about_feat_4_title: 'Trusted Results',
    about_feat_4_desc: 'Proven track record of superior results and customer satisfaction.',

    // Trust section
    trust_eyebrow: 'Customer Reviews',
    trust_heading: 'What Our\nClients Say',
    trust_based_on: 'Based on 62 Google reviews',
    trust_google: 'Reviews from Google Business',

    // Contact section
    contact_eyebrow: 'Find Us',
    contact_heading: 'Visit Rock Shield',
    contact_location: 'Location',
    contact_hours: 'Hours',
    contact_hours_weekdays: 'Mon–Sat: 10:00 AM – 8:00 PM',
    contact_hours_friday: 'Friday: Closed',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_whatsapp: 'WhatsApp',
    contact_book: 'Book an Appointment',
    contact_address: 'Shwaikh Industrial\nBlock 1, 13 ST, 107\nKuwait',

    // Footer
    footer_tagline: "Kuwait's authorized XPEL distributor & installer.\nProtection. Precision. Craftsmanship.",
    footer_services: 'Services',
    footer_company: 'Company',
    footer_contact: 'Contact',
    footer_copyright: '© 2026 Rock Shield Kuwait. All rights reserved.',
    footer_xpel_badge: 'XPEL Authorized Distributor & Installer',

    // Services page
    services_page_eyebrow: 'Our Services',
    services_page_heading: 'Quality Auto Services\nin Kuwait',
    services_page_sub: 'Our services encompass a comprehensive range of solutions designed to meet your needs with precision and excellence. From PPF to detailing — every service is delivered to the highest standard.',
    services_cta_heading: 'Not Sure Which Service You Need?',
    services_cta_sub: 'Contact us now and our team will help you make the right decision for your vehicle.',
    services_cta_book: 'Book an Appointment',
    services_cta_whatsapp: 'Ask on WhatsApp',
    services_included: "What's Included",

    // Booking
    book_eyebrow: 'Book an Appointment',
    book_heading: 'Reserve Your\nProtection',
    book_sub: 'A few quick steps to get your vehicle booked in.',
  },
  ar: {
    // Nav
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_services: 'خدماتنا',
    nav_products: 'المنتجات',
    nav_locations: 'الموقع',
    nav_contact: 'تواصل معنا',
    nav_book: 'احجز موعد',

    // Hero
    hero_eyebrow: 'موزع ومثبت معتمد من XPEL',
    hero_headline_1: 'الحماية',
    hero_headline_2: 'بامتياز.',
    hero_sub: 'أفضل استوديو لحماية السيارات في الكويت. أفلام الطلاء، الطلاء السيراميكي، تظليل الزجاج — بدقة لا تُضاهى.',
    hero_cta_primary: 'احجز حمايتك',
    hero_cta_secondary: 'استكشف الخدمات',
    hero_stat_rating: 'تقييم جوجل',
    hero_stat_xpel: 'معتمد',
    hero_stat_services: 'خدمات',

    // Services section
    services_eyebrow: 'ما نقدمه',
    services_heading: 'ست طرق لحماية\nسيارتك',
    services_all: 'جميع الخدمات',
    services_book: 'احجز موعداً',
    service_ppf_title: 'فيلم حماية الطلاء',
    service_ppf_desc: 'فيلم XPEL ذاتي الإصلاح يحمي طلاء سيارتك من الحصى والخدوش والأضرار البيئية — شبه غير مرئي.',
    service_tint_title: 'تظليل الزجاج',
    service_tint_desc: 'قلل الحرارة، احجب الأشعة فوق البنفسجية، وعزز الخصوصية مع فيلم XPEL PRIME — مصمم لمناخ الكويت.',
    service_shield_title: 'حماية الزجاج الأمامي',
    service_shield_desc: 'فيلم حماية للزجاج الأمامي يحمي من الرياح والحطام ومخاطر الطريق دون المساس بالرؤية.',
    service_ceramic_title: 'الطلاء السيراميكي',
    service_ceramic_desc: 'XPEL FUSION PLUS يرتبط على المستوى الجزيئي — يوفر حماية مائية ولمعاناً ومقاومة للأشعة فوق البنفسجية.',
    service_detailing_title: 'خدمات التفصيل',
    service_detailing_desc: 'اهتمام دقيق بكل سطح. حلول مخصصة تعيد سيارتك إلى حالتها المثالية.',
    service_painting_title: 'الطلاء',
    service_painting_desc: 'طلاء سيارات احترافي بتشطيبات مخصصة — معدنية، لؤلؤية، أو مطابقة للمصنع.',

    // About section
    about_eyebrow: 'عن روك شيلد',
    about_heading: 'سيارتك.\nشغفنا.',
    about_p1: 'في روك شيلد، نحن شغوفون بالحفاظ على جمال سيارتك وتعزيزه. بالتزامنا بالتميز وتفانينا في الجودة، نتخصص في تقديم خدمات حماية السيارات عالية المستوى.',
    about_p2: 'بوصفنا الموزع والمثبت المعتمد لـ XPEL في الكويت، نجلب تقنية الحماية العالمية لكل سيارة تدخل منشأتنا في الشويخ الصناعية. فريقنا من المحترفين يقدم نتائج تفوق التوقعات — في كل مرة.',
    about_link: 'قصتنا',
    about_stat_rating: 'تقييم جوجل',
    about_stat_reviews: 'تقييم',
    about_stat_verified: 'عميل موثق',
    about_stat_services: 'خدمات',
    about_stat_protection: 'حلول حماية',
    about_stat_xpel: 'معتمد',
    about_stat_xpel_sub: 'موزع ومثبت',
    about_feat_1_title: 'مهندسون خبراء',
    about_feat_1_desc: 'محترفون ذوو مهارات عالية وخبرة عميقة في حماية السيارات.',
    about_feat_2_title: 'خدمة مضمونة',
    about_feat_2_desc: 'نقف خلف جودة كل تركيب نقوم به.',
    about_feat_3_title: 'معتمد من XPEL',
    about_feat_3_desc: 'موزع ومثبت معتمد لأفضل علامة تجارية لأفلام الطلاء في العالم.',
    about_feat_4_title: 'نتائج موثوقة',
    about_feat_4_desc: 'سجل حافل من النتائج المتميزة ورضا العملاء.',

    // Trust section
    trust_eyebrow: 'آراء العملاء',
    trust_heading: 'ماذا يقول\nعملاؤنا',
    trust_based_on: 'بناءً على 62 تقييم على جوجل',
    trust_google: 'تقييمات من جوجل بيزنس',

    // Contact section
    contact_eyebrow: 'جدنا',
    contact_heading: 'زيارة روك شيلد',
    contact_location: 'الموقع',
    contact_hours: 'ساعات العمل',
    contact_hours_weekdays: 'الاثنين–السبت: 10:00 ص – 8:00 م',
    contact_hours_friday: 'الجمعة: مغلق',
    contact_phone: 'الهاتف',
    contact_email: 'البريد الإلكتروني',
    contact_whatsapp: 'واتساب',
    contact_book: 'احجز موعداً',
    contact_address: 'الشويخ الصناعية\nقطعة 1، شارع 13، 107\nالكويت',

    // Footer
    footer_tagline: 'الموزع والمثبت المعتمد لـ XPEL في الكويت.\nالحماية. الدقة. الحرفية.',
    footer_services: 'الخدمات',
    footer_company: 'الشركة',
    footer_contact: 'تواصل معنا',
    footer_copyright: '© 2026 روك شيلد الكويت. جميع الحقوق محفوظة.',
    footer_xpel_badge: 'موزع ومثبت معتمد من XPEL',

    // Services page
    services_page_eyebrow: 'خدماتنا',
    services_page_heading: 'خدمات سيارات\nمتميزة في الكويت',
    services_page_sub: 'تشمل خدماتنا مجموعة شاملة من الحلول المصممة لتلبية احتياجاتك بدقة وتميز. من أفلام الطلاء إلى التفصيل — كل خدمة تُقدَّم بأعلى المعايير.',
    services_cta_heading: 'لست متأكداً من الخدمة المناسبة؟',
    services_cta_sub: 'تواصل معنا الآن وسيساعدك فريقنا في اتخاذ القرار الصحيح لسيارتك.',
    services_cta_book: 'احجز موعداً',
    services_cta_whatsapp: 'اسأل على واتساب',
    services_included: 'ما يشمله',

    // Booking
    book_eyebrow: 'احجز موعداً',
    book_heading: 'احجز\nحمايتك',
    book_sub: 'خطوات بسيطة لحجز سيارتك.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslations(lang: Language) {
  return translations[lang] ?? translations.en;
}
