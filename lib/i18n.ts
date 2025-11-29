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
    "hero.subtext": "EduMarkaz is an innovative education platform that connects students, teachers, and education centers. Discover quality learning opportunities and manage your education journey efficiently.",
    "hero.cta.primary": "Get started",
    "hero.cta.secondary": "About",
    "hero.standards": "We use industry standards like",
    "hero.card1.title": "V0 Compatible",
    "hero.card1.desc": "Edit and customize visually, instantly.",
    "hero.card2.title": "Animated Out of Box",
    "hero.card2.desc": "No setup and smooth UI interactions.",
    "hero.metric1.label": "Components available",
    "hero.metric2.label": "Categories available",
    "hero.badge": "EduOila Ecosystem",
    "hero.headline1": "Connect with",
    "hero.headline2": "Quality Education",
    "hero.headline3": "Through",
    "hero.headline4": "EduMarkaz Platform",
    "hero.weAreMadeBy": "Trusted by leading educational institutions",
    "hero.getEduMarkaz": "Get EduMarkaz",

    // Team
    "team.title": "Meet Our",
    "team.titleHighlight": "Team",
    "team.subtitle": "Passionate educators and technologists building the future of learning",
    "team.hello": "Hello! I am",
    "team.skills": "Skills",
    "team.experience": "Experience",
    "team.swipe": "Swipe",

    // Team Members
    "team.member.1.name": "Rejabaliyev Nodirbek",
    "team.member.1.role": "Founder && CEO",
    "team.member.1.title": "Educational Visionary && Flutter Dev",
    "team.member.1.bio": "With 1+ years of experience in educational technology, Nodirbek founded Eduoila to digitalize the educational system. His passion for innovation drives our mission to make quality education accessible to everyone.",

    "team.member.2.name": "Dilnoza Eraliyeva",
    "team.member.2.role": "Flutter && Web Developer",
    "team.member.2.title": "Frontend Developer",
    "team.member.2.bio": "Dilnoza is a Flutter and web developer who focuses on building smooth, visually appealing, and efficient user interfaces. At Eduoila, she works on crafting responsive web and mobile experiences that simplify learning for everyone.",

    "team.member.3.name": "Yoqubjonov Abdulhafiz",
    "team.member.3.role": "Project Manager && Frontend Dev",
    "team.member.3.title": "Full-Stack Dev && Tech Innovator",
    "team.member.3.bio": "A passionate software engineer and project manager focused on building scalable, user-centric applications. With strong experience in React, TypeScript, and Python, he leads projects that blend clean design with solid architecture and team collaboration.",

    "team.member.4.name": "Musayev Ximmatilloxon",
    "team.member.4.role": "Founder && CEO",
    "team.member.4.title": "Backend Dev && Product Architect",
    "team.member.4.bio": "As co-founder of Eduoila, Ximmatilloxon leads the vision and development of our technology ecosystem. With deep expertise in backend engineering and automation, he builds scalable, high-quality solutions that enhance education.",

    "team.member.5.name": "Diyorbek Umaraliyev",
    "team.member.5.role": "Backend && AI Specialist",
    "team.member.5.title": "ML and Backend Engineer",
    "team.member.5.bio": "Diyorbek is a backend and AI specialist passionate about building efficient, data-driven systems. At EduOila, he focuses on integrating machine learning models with scalable backend services.",

    // Phone Video Collage
    "collage.tag": "Showcase",
    "collage.title": "Power of mobile solutions to EduOila users",
    "collage.subtitle": "From intuitive design to powerful features, our app has become an essential tool for users around the world.",

    // Achievements
    "achievements.title": "Our",
    "achievements.titleHighlight": "Achievements",
    "achievements.subtitle": "Milestones that define our commitment to educational excellence",
    "achievements.1.title": "Odoo Hackaton 2025 Winners",
    "achievements.1.description": "Learning across our platform",
    "achievements.2.title": "4 Innovative Products",
    "achievements.2.description": "Eduoila, Edumarkaz, Eduquiz & Edumanage",

    // Animated Beam Demo
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
    "hero.subtext": "EduMarkaz - talabalar, o'qituvchilar va ta'lim markazlarini bog'laydigan innovatsion ta'lim platformasi. Sifatli o'rganish imkoniyatlarini kashf eting va o'zingizning ta'lim yo'lingizni samarali boshqaring.",
    "hero.cta.primary": "Boshlash",
    "hero.cta.secondary": "Haqida",
    "hero.standards": "Biz sanoat standartlaridan foydalanamiz:",
    "hero.card1.title": "V0 mos",
    "hero.card1.desc": "Vizual tahrirlash va tez sozlash.",
    "hero.card2.title": "Qutidan animatsiya",
    "hero.card2.desc": "O'rnatishsiz silliq UI interaksiyalar.",
    "hero.metric1.label": "Mavjud komponentlar",
    "hero.metric2.label": "Mavjud toifalar",
    "hero.badge": "EduOila Ekosistema",
    "hero.headline1": "Sifatli",
    "hero.headline2": "Ta'lim bilan",
    "hero.headline3": "Bog'lanish",
    "hero.headline4": "EduMarkaz Platformasi orqali",
    "hero.weAreMadeBy": "Yetakchi ta'lim muassasalari tomonidan ishonilgan",
    "hero.getEduMarkaz": "EduMarkaz olish",

    // Team
    "team.title": "Bizning",
    "team.titleHighlight": "Jamoamiz bilan tanishing",
    "team.subtitle": "Ta'lim kelajagini qurayotgan ishtiyoqli ta'limchi va texnologlar",
    "team.hello": "Salom! Men",
    "team.skills": "Ko'nikmalar",
    "team.experience": "Tajriba",
    "team.swipe": "Suring",

    // Team Members
    "team.member.1.name": "Rejabaliyev Nodirbek",
    "team.member.1.role": "Asoschisi && Bosh direktor",
    "team.member.1.title": "Ta'lim innovatori && Flutter ishlab chiquvchi",
    "team.member.1.bio": "Ta'lim texnologiyasida 1+ yil tajriba bilan, Nodirbek ta'lim tizimini raqamlashtirish uchun Eduoilani tashkil qildi. Uning innovatsiyaga bo'lgan ishtiyoqi barchasiga sifatli ta'limni taqdim etish missionimizni boshqaradi.",

    "team.member.2.name": "Dilnoza Eraliyeva",
    "team.member.2.role": "Flutter && Veb ishlab chiquvchi",
    "team.member.2.title": "Frontend ishlab chiquvchi",
    "team.member.2.bio": "Dilnoza, silliq, vizual jihatdan jozibali va samarali foydalanuvchi interfeyslari yaratishga qaratadigan Flutter va veb ishlab chiquvchi. Eduoilada u barcha uchun o'rganishni soddalashtiruvchi responsiv veb va mobil tajribalarni yaratish ustida ishlaydi.",

    "team.member.3.name": "Yoqubjonov Abdulhafiz",
    "team.member.3.role": "Loyiha menejeri && Frontend ishlab chiquvchi",
    "team.member.3.title": "To'liq stakda ishlab chiquvchi && Texnolog innovatori",
    "team.member.3.bio": "Mas'ul bo'lgan dastur muhandisi va loyiha menejeri, o'lchalanishi mumkin bo'lgan, foydalanuvchiga qaratadigan ilovalarni yaratishga qaratilgan. React, TypeScript va Pythonda chuqur tajribaga ega bo'lib, u toza dizayn va mustahkam arxitekturani hamda jamoa hamkorligini birlashtiruvchi loyihalarni boshqaradi.",

    "team.member.4.name": "Musayev Ximmatilloxon",
    "team.member.4.role": "Asoschisi && Bosh direktor",
    "team.member.4.title": "Backend ishlab chiquvchi && Mahsulot arxitekturi",
    "team.member.4.bio": "Eduoila ham-asoschisi sifatida Ximmatilloxon bizning texnologiya ekosistema va rivojlanishning ko'rinishi boshqaradi. Backend muhandisligi va avtomatizashyonda chuqur tajribaga ega bo'lib, u ta'limni yaxshilaydigan o'lchalanishi mumkin bo'lgan, yuqori sifatli yechimlarni yaratadi.",

    "team.member.5.name": "Diyorbek Umaraliyev",
    "team.member.5.role": "Backend && Sun'iy intellekt mutaxassisi",
    "team.member.5.title": "ML va Backend muhandisi",
    "team.member.5.bio": "Diyorbek, samarali, ma'lumotga asoslangan tizimlar yaratishga ishtiyoqli backend va sun'iy intellekt mutaxassisi. EduOilada u mashinaviy o'rganish modellarini o'lchalanishi mumkin bo'lgan backend xizmatlar bilan birlashtirishga qaratilgan.",

    // About
    "about.title": "Haqida",
    "about.name": "Eduoila",
    "about.p1": "Eduoila - talabalar va o'qituvchilarning o'rganish va o'qitish usuliga inqilob keltirish uchun inodayuq ta'limchi va texnologlarning 3 o'ziga xos ta'siri bilan tashkil etilgan inqilobiy EdTech startapi. Biz texnologiya ta'limni rivojlantirishi kerakligiga ishonamiz, uni almashtirmasdan.",
    "about.p2": "Bizning missionimiz - har bir talabaning noyob ehtiyojiga javob beradigan, qatnashuvchi va samarali o'rganish tajribalarini yaratish. EduMarkaz, EduQuiz va EduManage mahsulotlarining butun to'plami orqali biz o'qituvchilarni qo'llab-quvvatlash va o'quvchilarni ilhomlantiruvchi yaxlit ekosistemani qurayapti.",
    "about.p3": "Innovatsiya, foydalanuvchi tajribasi va o'lchanladigan natijalarni e'tiborga olib, Eduoila hamma uchun, hamma joyda sifatli ta'limni taqdim etishga bag'ishlangan. Biz faqat dastur tuzmayapti; biz ta'lim kelajagini qurayapti.",
    "about.stat1Label": "Asos solingan",
    "about.stat1Value": "2025",
    "about.stat2Label": "Jamoa o'lchami",
    "about.stat2Value": "5+",
    "about.stat3Label": "Mahsulotlar",
    "about.stat3Value": "5+",

    // Phone Video Collage
    "collage.tag": "Namoyish",
    "collage.title": "EduOila foydalanuvchilari uchun mobil yechimlarning kuchi",
    "collage.subtitle": "Intuitiv dizayndan kuchli xususiyatlargacha, bizning ilova butun dunyo bo'ylab foydalanuvchilar uchun zarur vositaga aylandi.",

    // Achievements
    "achievements.title": "Bizning",
    "achievements.titleHighlight": "Yutuqlar",
    "achievements.subtitle": "Ta'lim kamoli uchun bizning intilishimizni belgilaydigan muhim jadvallar",
    "achievements.1.title": "Odoo Hackaton 2025 Poydevallari",
    "achievements.1.description": "Bizning platformamizda o'rganish",
    "achievements.2.title": "4 Innovatsion Mahsulot",
    "achievements.2.description": "Eduoila, Edumarkaz, Eduquiz va Edumanage",

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
    "hero.subtext": "EduMarkaz — инновационная образовательная платформа, которая связывает студентов, учителей и образовательные центры. Откройте для себя возможности качественного обучения и эффективно управляйте своим образовательным путем.",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "О нас",
    "hero.standards": "Мы используем отрасленные стандарты:",
    "hero.card1.title": "Совместимо с V0",
    "hero.card1.desc": "Редактируйте визуально и мгновенно.",
    "hero.card2.title": "Анимации из коробки",
    "hero.card2.desc": "Плавные UI-взаимодействия без настроек.",
    "hero.metric1.label": "Доступные компоненты",
    "hero.metric2.label": "Доступные категории",
    "hero.badge": "EduOila Экосистема",
    "hero.headline1": "Свяжитесь с",
    "hero.headline2": "Качественным образованием",
    "hero.headline3": "Через",
    "hero.headline4": "Платформу EduMarkaz",
    "hero.weAreMadeBy": "Доверено ведущими образовательными учреждениями",
    "hero.getEduMarkaz": "Получить EduMarkaz",

    // Team
    "team.title": "Познакомьтесь с нашей",
    "team.titleHighlight": "командой",
    "team.subtitle": "Увлеченные педагоги и технологи, создающие будущее образования",
    "team.hello": "Привет! Я",
    "team.skills": "Навыки",
    "team.experience": "Опыт",
    "team.swipe": "Смахивайте",

    // Team Members
    "team.member.1.name": "Реджабалиев Нодирбек",
    "team.member.1.role": "Основатель && генеральный директор",
    "team.member.1.title": "Образовательный визионер && разработчик Flutter",
    "team.member.1.bio": "С опытом 1+ года в образовательных технологиях Нодирбек основал Eduoila для оцифровки образовательной системы. Его страсть к инновациям направляет нашу миссию сделать качественное образование доступным для всех.",

    "team.member.2.name": "Дилноза Еральева",
    "team.member.2.role": "Разработчик Flutter && веб",
    "team.member.2.title": "Разработчик фронтенда",
    "team.member.2.bio": "Дилноза - разработчик Flutter и веб, сосредоточенная на создании гладких, визуально привлекательных и эффективных пользовательских интерфейсов. В Eduoila она работает над созданием отзывчивых веб и мобильных интерфейсов, которые упрощают обучение для всех.",

    "team.member.3.name": "Йокубжонов Абдулхафиз",
    "team.member.3.role": "Менеджер проекта && разработчик фронтенда",
    "team.member.3.title": "Разработчик полного стека && технологический новатор",
    "team.member.3.bio": "Страстный инженер-программист и менеджер проектов, ориентированный на создание масштабируемых приложений, ориентированных на пользователя. Имея опыт работы с React, TypeScript и Python, он руководит проектами, которые сочетают чистый дизайн с надежной архитектурой и командным сотрудничеством.",

    "team.member.4.name": "Мусаев Химмматиллохон",
    "team.member.4.role": "Основатель && генеральный директор",
    "team.member.4.title": "Разработчик бэкенда && архитектор продукта",
    "team.member.4.bio": "Как соучредитель Eduoila, Химмматиллохон возглавляет видение и разработку нашей технологической экосистемы. Имея глубокий опыт в инженерии бэкенда и автоматизации, он создает масштабируемые высокачественные решения, которые улучшают образование.",

    "team.member.5.name": "Дийорбек Умаралиев",
    "team.member.5.role": "Специалист бэкенда && ИИ",
    "team.member.5.title": "Инженер ML и бэкенда",
    "team.member.5.bio": "Дийорбек - специалист в области бэкенда и искусственного интеллекта, страстно увлеченный созданием эффективных систем, основанных на данных. В EduOila он сосредоточен на интеграции моделей машинного обучения с масштабируемыми услугами бэкенда.",

    // About
    "about.title": "О нас",
    "about.name": "Eduoila",
    "about.p1": "Eduoila - революционный стартап EdTech, основанный тремя страстными педагогами и технологами, посвященными изменению способа обучения студентов и преподавания учителями. Мы верим, что технология должна расширять возможности образования, а не заменять его.",
    "about.p2": "Наша миссия - создавать доступные, увлекательные и эффективные учебные опыты, которые адаптируются к уникальным потребностям каждого студента. Благодаря нашему набору инновационных продуктов - Edumarkaz, Eduquiz и Edumanage - мы создаем комплексную экосистему, поддерживающую преподавателей и вдохновляющую обучающихся.",
    "about.p3": "Сосредоточившись на инновациях, пользовательском опыте и измеримых результатах, Eduoila стремится сделать качественное образование доступным для всех и везде. Мы не просто создаем программное обеспечение; мы строим будущее образования.",
    "about.stat1Label": "Основана",
    "about.stat1Value": "2025",
    "about.stat2Label": "Размер команды",
    "about.stat2Value": "5+",
    "about.stat3Label": "Продукты",
    "about.stat3Value": "5+",

    // Phone Video Collage
    "collage.tag": "Витрина",
    "collage.title": "Сила мобильных решений для пользователей EduOila",
    "collage.subtitle": "От интуитивного дизайна до мощных функций, наше приложение стало незаменимым инструментом для пользователей по всему миру.",

    // Achievements
    "achievements.title": "Наши",
    "achievements.titleHighlight": "Достижения",
    "achievements.subtitle": "Вехи, которые определяют нашу приверженность совершенству в образовании",
    "achievements.1.title": "Победители Odoo Hackaton 2025",
    "achievements.1.description": "Обучение на нашей платформе",
    "achievements.2.title": "4 инновационных продукта",
    "achievements.2.description": "Eduoila, Edumarkaz, Eduquiz и Edumanage",

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
