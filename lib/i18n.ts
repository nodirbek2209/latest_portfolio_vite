import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type Language = "en" | "uz" | "ru"

type Dict = Record<string, string>

type Translations = Record<Language, Dict>

const translations: Translations = {
  en: {
    // Nav
    "nav.features": "Features",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.team": "Team",
    "nav.pricing": "Pricing",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "header.goToTop": "Go to top",

    // Viewer
    "viewer.title": "Interactive 3D Showcase",
    "viewer.subtitle": "Explore our design in an interactive 3D scene.",

    // Hero
    "hero.headingPrefix": "Prebuilt UI",
    "hero.headingSuffix": "blocks to ship beautiful MVPs fast.",
    "hero.subtext": "Copy-paste beautiful, responsive components without worrying about styling or animations. Build faster, launch sooner.",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "About",
    "hero.standards": "We use industry standards like",
    "hero.card1.title": "V0 Compatible",
    "hero.card1.desc": "Edit and customize visually, instantly.",
    "hero.card2.title": "Animated Out of Box",
    "hero.card2.desc": "No setup and smooth UI interactions.",
    "hero.metric1.label": "Components available",
    "hero.metric2.label": "Categories available",

    // Animated Beam Demo
    "beam.poweredBy": "Powered by",
    "beam.modern": "Modern",
    "beam.technologies": "Technologies",
    "beam.subtitle": "Seamlessly integrating the best tools and frameworks to deliver",
    "beam.highlight": "cutting-edge solutions",

    // Products
    "products.tag": "Products",
    "products.title": "Explore our suite",
    "products.subtitle": "Empowering education with innovation — from learning and management to gamification and evaluation.",
    "products.keyFeatures": "Key features",
    "products.comingSoon": "Coming Soon",
    "products.getOnPlay": "Get it on Play Store",

    // Product: EduMarkaz
    "product.1.name": "EduMarkaz",
    "product.1.desc": "A modern education hub connecting students, teachers, and education centers with intelligent matching and learning tools.",
    "product.1.f1": "Teacher & Center Profiles",
    "product.1.f2": "Smart Matching",
    "product.1.f3": "Ratings & Reviews",
    "product.1.f4": "Learning Insights",

    // Product: EduGame
    "product.2.name": "EduGame",
    "product.2.desc": "An engaging gamified learning platform that turns lessons into challenges, rewards progress, and makes studying fun.",
    "product.2.f1": "Gamified Learning",
    "product.2.f2": "Achievements & Rewards",
    "product.2.f3": "Leaderboards",
    "product.2.f4": "Interactive Challenges",

    // Product: EduManage
    "product.3.name": "EduManage Soon",
    "product.3.desc": "A complete education management system for schools and learning centers to manage classes, schedules, and performance.",
    "product.3.f1": "Class Scheduling",
    "product.3.f2": "Student Reports",
    "product.3.f3": "Payment Tracking",
    "product.3.f4": "Center Analytics",

    // Product: EduQuiz
    "product.4.name": "EduQuiz Soon",
    "product.4.desc": "A smart quiz and assessment system for teachers and institutions to evaluate student knowledge in real time.",
    "product.4.f1": "Quiz Builder",
    "product.4.f2": "Auto Grading",
    "product.4.f3": "Performance Tracking",
    "product.4.f4": "Result Analytics",
  },
  uz: {
    // Nav
    "nav.features": "Xususiyatlar",
    "nav.about": "Haqida",
    "nav.products": "Mahsulotlar",
    "nav.team": "Jamoa",
    "nav.pricing": "Narxlar",
    "nav.testimonials": "Sharhlar",
    "nav.faq": "Savol-Javob",
    "header.goToTop": "Yuqoriga qaytish",

    // Viewer
    "viewer.title": "Interaktiv 3D namoyish",
    "viewer.subtitle": "Dizaynimizni interaktiv 3D sahnada kashf eting.",

    // Hero
    "hero.headingPrefix": "Tayyor UI",
    "hero.headingSuffix": "bloklar yordamida chiroyli MVPlarni tez yetkazing.",
    "hero.subtext": "Chiroyli va moslashuvchan komponentlarni shunchaki nusxa ko'chirib ishlating — dizayn va animatsiyalar haqida qayg'urmang.",
    "hero.cta.primary": "Boshlash",
    "hero.cta.secondary": "Haqida",
    "hero.standards": "Biz sanoat standartlaridan foydalanamiz:",
    "hero.card1.title": "V0 mos",
    "hero.card1.desc": "Vizual tahrirlash va tez sozlash.",
    "hero.card2.title": "Qutidan animatsiya",
    "hero.card2.desc": "O'rnatishsiz silliq UI interaksiyalar.",
    "hero.metric1.label": "Mavjud komponentlar",
    "hero.metric2.label": "Mavjud toifalar",

    // Animated Beam Demo
    "beam.poweredBy": "Quvvatlaydi",
    "beam.modern": "Zamonaviy",
    "beam.technologies": "Texnologiyalar",
    "beam.subtitle": "Eng yaxshi vositalar va freymvorklarni uyg'unlashtirib",
    "beam.highlight": "ilg'or yechimlar",

    // Products
    "products.tag": "Mahsulotlar",
    "products.title": "To'plamimizni kashf eting",
    "products.subtitle": "Ta'limni innovatsiyalar bilan quvvatlaymiz — o'rganish, boshqaruv, gamifikatsiya va baholashgacha.",
    "products.keyFeatures": "Asosiy funksiyalar",
    "products.comingSoon": "Tez orada",
    "products.getOnPlay": "Play Marketdan yuklab oling",

    // Product: EduMarkaz
    "product.1.name": "EduMarkaz",
    "product.1.desc": "Talabalar, o'qituvchilar va ta'lim markazlarini aqlli moslashtirish hamda o'rganish vositalari bilan bog'laydigan zamonaviy platforma.",
    "product.1.f1": "O'qituvchi va markaz profillari",
    "product.1.f2": "Aqlli moslash",
    "product.1.f3": "Reytinglar va sharhlar",
    "product.1.f4": "O'rganish tahlillari",

    // Product: EduGame
    "product.2.name": "EduGame",
    "product.2.desc": "Darslarni sinov va chaqiriqlarga aylantirib, rag'bat bilan o'rganishni qiziqarli qiluvchi platforma.",
    "product.2.f1": "Gamifikatsiyalangan o'rganish",
    "product.2.f2": "Yutuqlar va mukofotlar",
    "product.2.f3": "Yetakchilar jadvali",
    "product.2.f4": "Interaktiv chaqiriqlar",

    // Product: EduManage
    "product.3.name": "EduManage tez orada",
    "product.3.desc": "Maktab va o'quv markazlari uchun darslar, jadval va natijalarni boshqarish tizimi.",
    "product.3.f1": "Dars jadvali",
    "product.3.f2": "Talaba hisobotlari",
    "product.3.f3": "To'lovlarni kuzatish",
    "product.3.f4": "Markaz tahlillari",

    // Product: EduQuiz
    "product.4.name": "EduQuiz tez orada",
    "product.4.desc": "O'qituvchilar va muassasalar uchun real vaqtda bilimni baholash tizimi.",
    "product.4.f1": "Test yaratuvchi",
    "product.4.f2": "Avto baholash",
    "product.4.f3": "Natijani kuzatish",
    "product.4.f4": "Tahlil natijalari",
  },
  ru: {
    // Nav
    "nav.features": "Возможности",
    "nav.about": "О нас",
    "nav.products": "Продукты",
    "nav.team": "Команда",
    "nav.pricing": "Цены",
    "nav.testimonials": "Отзывы",
    "nav.faq": "FAQ",
    "header.goToTop": "Наверх",

    // Viewer
    "viewer.title": "Интерактивная 3D-витрина",
    "viewer.subtitle": "Исследуйте наш дизайн в интерактивной 3D-сцене.",

    // Hero
    "hero.headingPrefix": "Готовые UI",
    "hero.headingSuffix": "блоки для быстрого запуска красивых MVP.",
    "hero.subtext": "Копируйте и используйте красивые, адаптивные компоненты без забот о стилях и анимациях. Стройте быстрее, запускайте раньше.",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "О нас",
    "hero.standards": "Мы используем отрасленные стандарты:",
    "hero.card1.title": "Совместимо с V0",
    "hero.card1.desc": "Редактируйте визуально и мгновенно.",
    "hero.card2.title": "Анимации из коробки",
    "hero.card2.desc": "Плавные UI-взаимодействия без настроек.",
    "hero.metric1.label": "Доступные компоненты",
    "hero.metric2.label": "Доступные категории",

    // Animated Beam Demo
    "beam.poweredBy": "На базе",
    "beam.modern": "Современные",
    "beam.technologies": "Технологии",
    "beam.subtitle": "Бесшовно объединяем лучшие инструменты и фреймворки, чтобы создавать",
    "beam.highlight": "передовые решения",

    // Products
    "products.tag": "Продукты",
    "products.title": "Исследуйте наш набор",
    "products.subtitle": "Усиливаем образование инновациями — от обучения и управления до геймификации и оценки.",
    "products.keyFeatures": "Ключевые функции",
    "products.comingSoon": "Скоро",
    "products.getOnPlay": "Скачать в Play Store",

    // Product: EduMarkaz
    "product.1.name": "EduMarkaz",
    "product.1.desc": "Современная образовательная платформа, объединяющая студентов, преподавателей и центры с умным сопоставлением и инструментами обучения.",
    "product.1.f1": "Профили преподавателей и центров",
    "product.1.f2": "Умное сопоставление",
    "product.1.f3": "Рейтинги и отзывы",
    "product.1.f4": "Аналитика обучения",

    // Product: EduGame
    "product.2.name": "EduGame",
    "product.2.desc": "Игровая платформа обучения, превращающая уроки в челленджи, вознаграждающая прогресс и делающая учебу увлекательной.",
    "product.2.f1": "Игровое обучение",
    "product.2.f2": "Достижения и награды",
    "product.2.f3": "Таблицы лидеров",
    "product.2.f4": "Интерактивные задания",

    // Product: EduManage
    "product.3.name": "EduManage скоро",
    "product.3.desc": "Полная система управления для школ и центров: расписания, занятия и результаты.",
    "product.3.f1": "Расписание занятий",
    "product.3.f2": "Отчеты учеников",
    "product.3.f3": "Учет платежей",
    "product.3.f4": "Аналитика центра",

    // Product: EduQuiz
    "product.4.name": "EduQuiz скоро",
    "product.4.desc": "Умная система тестирования и оценивания знаний в реальном времени.",
    "product.4.f1": "Конструктор тестов",
    "product.4.f2": "Автооценка",
    "product.4.f3": "Отслеживание результатов",
    "product.4.f4": "Аналитика результатов",
  },
}

interface I18nContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Language | null) : null
    return saved ?? "en"
  })

  const setLang = useCallback((l: Language) => {
    setLangState(l)
    try {
      localStorage.setItem("lang", l)
    } catch {}
    // update html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", l)
    }
  }, [])

  useEffect(() => {
    // ensure html lang attribute on mount
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang)
    }
  }, [lang])

  const t = useCallback(
    (key: string) => {
      const dict = translations[lang] || translations.en
      return dict[key] ?? translations.en[key] ?? key
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return React.createElement(I18nContext.Provider, { value }, children)
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
