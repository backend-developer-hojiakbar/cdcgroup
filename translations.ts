
export const translations = {
  uz: {
    // General
    subtitle: "Innovatsiya Bizning Asosimiz",
    close_button_aria: "Yopish",
    open_menu_aria: "Menyuni ochish",
    close_menu_aria: "Menyuni yopish",
    footer_copyright: "© {year} CDCGROUP. Barcha huquqlar himoyalangan.",
    
    // Nav
    nav_items: [
        { id: 'services', label: 'Xizmatlar' },
        { id: 'about', label: 'Biz haqimizda' },
        { id: 'cases', label: 'Keyslar' },
        { id: 'calculator', label: 'Kalkulyator' },
        { id: 'tech', label: 'Texnologiyalar' },
        { id: 'team', label: 'Jamoa' },
        { id: 'faq', label: 'FAQ' },
        { id: 'academy', label: 'Akademiya' },
        { id: 'investors', label: 'Investorlarga' },
        { id: 'partners', label: 'Hamkorlik' },
        { id: 'contact', label: 'Bog\'lanish' },
    ],

    // Services
    services_items: [
      { id: 'ai', title: "Sun'iy Intellekt va Big Data", description: "Ma'lumotlarga asoslangan bashoratli tahlillar va biznesingiz uchun aqlli tizimlar yaratish." },
      { id: 'custom-software', title: "Maxsus Dasturiy Yechimlar", description: "Noyob talablaringizga mos, kengaytiriladigan va ishonchli dasturiy ta'minot yaratish." },
      { id: 'cybersecurity', title: "Kiberxavfsizlik va Himoya", description: "Raqamli aktivlaringizni zamonaviy tahdidlardan himoya qiluvchi ko'p qatlamli xavfsizlik." },
      { id: 'web-mobile', title: "Veb va Mobil Ilovalar", description: "Har qanday qurilmada mukammal ishlaydigan, zamonaviy va foydalanuvchiga qulay ilovalar." },
      { id: 'it-strategy', title: "IT Strategiya va Konsalting", description: "Biznes maqsadlaringizga erishish uchun texnologik yo'l xaritasini ishlab chiqish." },
      { id: 'bpa', title: "Biznes Jarayonlarini Avtomatlashtirish", description: "Operatsion samaradorlikni oshirish uchun takrorlanuvchi vazifalarni robotlashtirish." },
      { id: 'cloud-devops', title: "Bulutli Infratuzilma va DevOps", description: "Masshtablanadigan bulutli infratuzilma qurish va CI/CD bilan yetkazib berishni tezlashtirish." },
      { id: 'ui-ux', title: "UI/UX Dizayn va Tadqiqot", description: "Foydalanuvchi tajribasiga asoslangan, intuitiv va jozibali raqamli mahsulot interfeyslari." },
      { id: 'ecommerce', title: "Elektron Tijorat Platformalari", description: "Onlayn savdolarni rivojlantiruvchi, xavfsiz va to'liq funksional internet-do'konlar." },
      { id: 'blockchain', title: "Blokcheyn Texnologiyalari", description: "Markazlashtirilmagan, shaffof va o'ta xavfsiz tizimlarni talab qiluvchi yechimlar." },
      { id: 'iot', title: "Buyumlar Interneti (IoT)", description: "Jismoniy qurilmalarni internetga ulab, real vaqtda ma'lumotlar yig'ish va boshqarish." },
      { id: 'qa', title: "Sifatni Ta'minlash va Testlash", description: "Dasturiy mahsulotingiz mukammal ishlashini ta'minlash uchun kompleks testlash xizmatlari." },
    ],
    
    // About / Team
    about_title: "Biz Haqimizda",
    about_description: "CraDev sifatida boshlangan sayohatimiz endi CDCGROUP brendi ostida yangi cho'qqilarni zabt etmoqda. Bizning asosiy maqsadimiz — innovatsion texnologiyalar orqali biznesingizni transformatsiya qilish. Bizning tajribamiz va kelajakka bo'lgan qarashimiz sizning muvaffaqiyatingiz uchun xizmat qiladi.",
    team_title: "Bizning Jamoa",
    team_members: [
        { slug: "islombek-raxmonberdiyev", name: "Islombek Raxmonberdiyev", role: "Bosh Ijrochi Direktor (CEO)", bio: "Islombek Raxmonberdiyev - kompaniyaning strategik yo'nalishini belgilovchi va uning global o'sishini ta'minlovchi visioner lider. U biznesni boshqarish va innovatsiyalarni joriy etish bo'yicha ko'p yillik tajribaga ega.", skills: ["Biznes Strategiyasi", "Innovatsiyalarni Boshqarish", "Jamoani Rivojlantirish", "Moliyaviy Rejalashtirish"] },
        { slug: "hojiakbar-soyibnazarov", name: "Hojiakbar Soyibnazarov", role: "Operatsion Direktor (COO)", bio: "Hojiakbar Soyibnazarov kompaniyaning kundalik faoliyatini samarali boshqaradi. U jarayonlarni optimallashtirish, loyihalarni o'z vaqtida va sifatli bajarilishini ta'minlashga mas'ul.", skills: ["Operatsion Boshqaruv", "Loyiha Boshqaruvi (Agile)", "Resurslarni Rejalashtirish", "Samaradorlikni Oshirish"] },
        { slug: "ikromjon-moydinjonov", name: "Ikromjon Mo'ydinjonov", role: "Texnik Hamkor", bio: "Ikromjon Mo'ydinjonov - texnologik hamkorlik va yangi yechimlarni integratsiya qilish bo'yicha mutaxassis. U kompaniyaning texnik salohiyatini oshirishga yordam beradi.", skills: ["Texnik Hamkorlik", "Tizim Integratsiyasi", "API Rivojlantirish", "Cloud Texnologiyalari"] },
        { slug: "foziljon-kadirberganov", name: "Foziljon Kadirberganov", role: "Media Muhandis", bio: "Foziljon Kadirberganov kompaniyaning vizual kontentini va brendingini yaratishga mas'ul. U ijodiy yondashuv bilan media mahsulotlarni ishlab chiqadi.", skills: ["Grafik Dizayn", "Video Montaj", "Brending", "UI/UX Asoslari", "Motion Dizayn"] },
        { slug: "salohiddin-muhammadaliyev", name: "Salohiddin Muhammadaliyev", role: "Frontend Dasturchi", bio: "Salohiddin foydalanuvchilar uchun intuitiv va tezkor interfeyslarni yaratishga ixtisoslashgan. U zamonaviy frontend texnologiyalaridan unumli foydalanadi.", skills: ["React", "Next.js", "TypeScript", "Web Performance", "CSS Animatsiyalari"] },
        { slug: "abubakir-xayrullayev", name: "Abubakir Xayrullayev", role: "Voris", bio: "Abubakir - kompaniyaning kelajakdagi yetakchisi sifatida tayyorlanayotgan yosh va iqtidorli mutaxassis. U innovatsion g'oyalari va texnologiyalarga bo'lgan kuchli qiziqishi bilan ajralib turadi.", skills: ["Dasturlash Asoslari", "Loyiha Koordinatsiyasi", "Bozor Tahlili", "Raqamli Marketing"] }
    ],
    tech_stack_title: "Texnologiyalarimiz",
    
    // Cases
    project_tags: {
        all: "Barchasi",
        legacy: "CraDev Legacy",
        innovation: "CDCGroup Innovatsiyasi"
    },
    projects_items: [
        { id: 'erp', title: "Korporativ Resurslarni Boshqarish (ERP)", description: "Yirik ishlab chiqarish kompaniyasi uchun barcha biznes jarayonlarini birlashtiruvchi kompleks tizim." },
        { id: 'logistics', title: "Aqlli Logistika Platformasi", description: "Yuk tashishni optimallashtirish va real vaqtda kuzatish imkonini beruvchi AI-ga asoslangan yechim." },
        { id: 'mobile-bank', title: "Mobil Bank Ilovasi", description: "Mijozlar uchun qulay interfeys va yuqori darajadagi xavfsizlikka ega bo'lgan zamonaviy bank ilovasi." },
        { id: 'predictive-analysis', title: "Bashoratli Tahlil Modeli", description: "Chakana savdo tarmog'i uchun sotuvlarni bashorat qilish va ombor zaxiralarini optimallashtirish." }
    ],
    
    // Calculator
    calculator_title: "Loyiha Kalkulyatori",
    // ... many keys for calculator
    
    // FAQ
    faq_title: "Ko'p Beriladigan Savollar",
    faqs: [
        { id: 'q1', question: "CDCGROUP qanday xizmatlarni taklif qiladi?", answer: "Biz sun'iy intellekt, dasturiy ta'minot ishlab chiqish, avtomatlashtirish, kiberxavfsizlik va IT konsalting kabi keng ko'lamli xizmatlarni taklif etamiz." },
        { id: 'q2', question: "Loyiha narxi qanday hisoblanadi?", answer: "Har bir loyiha individualdir. Narx loyihaning murakkabligi, talab qilinadigan vaqt va resurslarga qarab belgilanadi. Aniq narxni bilish uchun biz bilan bog'laning yoki interaktiv kalkulyatorimizdan foydalaning." },
        { id: 'q3', question: "Sizlar bilan qanday bog'lansam bo'ladi?", answer: "Biz bilan 'Bog'lanish' sahifasidagi ma'lumotlar, telefon raqami yoki elektron pochta orqali bog'lanishingiz mumkin." },
        { id: 'q4', question: "CraDev va CDCGROUP o'rtasida qanday farq bor?", answer: "CDCGROUP - bu CraDevning tajribasi va poydevori ustiga qurilgan yangi brend. Biz xizmatlar ko'lamini kengaytirdik va innovatsiyalarga yanada ko'proq e'tibor qaratmoqdamiz." },
    ],
    
    // Technologies
    technologies_title: "Biz Foydalanadigan Texnologiyalar",
    technologies_items: [
        { id: 'python', name: 'Python', description: "Backend, AI/ML modellari va ma'lumotlar tahlili uchun bizning asosiy vositamiz." },
        { id: 'react', name: 'React', description: "Zamonaviy, tezkor va interaktiv foydalanuvchi interfeyslarini yaratish uchun tanlovimiz." },
        { id: 'nodejs', name: 'Node.js', description: "Kengaytiriladigan va yuqori unumdorlikka ega server tomonidagi ilovalar uchun ishlatamiz." },
        { id: 'typescript', name: 'TypeScript', description: "Katta loyihalarda xatoliklarni kamaytirish va kodni ishonchli qilish uchun JavaScript'ning ustki qatlami." },
        { id: 'nextjs', name: 'Next.js', description: "React asosida server-side rendering (SSR) va static site generation (SSG) uchun kuchli freymvork." },
        { id: 'postgresql', name: "PostgreSQL", description: "Murakkab so'rovlar va ishonchlilik talab qilinadigan loyihalar uchun bizning asosiy relyatsion ma'lumotlar bazamiz."},
        { id: 'aws', name: 'AWS', description: "Ishonchli, xavfsiz va masshtablanadigan bulutli infratuzilmani ta'minlash uchun foydalanamiz." },
        { id: 'docker', name: 'Docker', description: "Ilovalarni izolyatsiya qilish, joylashtirish va boshqarish jarayonlarini standartlashtiradi." },
        { id: 'kubernetes', name: 'Kubernetes', description: "Konteynerlashtirilgan ilovalarni avtomatik tarzda joylashtirish, masshtablash va boshqarish uchun ochiq manbali platforma." },
        { id: 'terraform', name: 'Terraform', description: "Infratuzilmani kod sifatida (IaC) boshqarish, bulutli resurslarni deklarativ tarzda yaratish va o'zgartirish vositasi." },
        { id: 'graphql', name: 'GraphQL', description: "API'lar uchun so'rovlar tili bo'lib, mijozlarga kerakli ma'lumotlarni aniq olish imkonini beradi." },
        { id: 'sql-nosql', name: 'SQL/NoSQL', description: "Loyihaning talablariga qarab, tuzilmali va tuzilmasiz ma'lumotlar bazalarini qo'llaymiz." },
    ],
    
    // Academy
    academy_title: "CDCGROUP Akademiyasi",
    academy_description: "Kelajak texnologiyalarini biz bilan o'rganing. Bizning ekspertlar tomonidan ishlab chiqilgan kurslar sizning IT sohasidagi karerangizni keyingi bosqichga olib chiqadi.",
    academy_levels: {
        beginner: "Boshlang'ich",
        intermediate: "O'rta",
        advanced: "Ilg'or"
    },
    academy_courses_items: [
        { id: 'python-basics', title: "Python Asoslari", description: "Dasturlashga birinchi qadam. Python sintaksisi, ma'lumotlar turlari va asosiy algoritmlar.", levelId: 'beginner', duration: "4 hafta" },
        { id: 'react-frontend', title: "React: Zamonaviy Frontend", description: "Komponentlar, state management va hook'lar yordamida interaktiv veb-ilovalar yaratish.", levelId: 'intermediate', duration: "8 hafta" },
        { id: 'ai-ml-intro', title: "AI & Machine Learning Kirish", description: "Mashinaviy o'qitish modellari, neyron tarmoqlar va ularning amaliy qo'llanilishi.", levelId: 'intermediate', duration: "10 hafta" },
        { id: 'cybersecurity-pro', title: "Kiberxavfsizlik Mutaxassisi", description: "Tarmoq xavfsizligi, veb-himoya va 'oq xakerlik' asoslarini o'rganing.", levelId: 'advanced', duration: "12 hafta" },
        { id: 'nodejs-backend', title: "Node.js: Backend Yaratish", description: "JavaScript yordamida tezkor va masshtablanuvchi serverlar va API'lar qurish.", levelId: 'intermediate', duration: "6 hafta" },
        { id: 'it-pm', title: "IT Loyiha Boshqaruvi", description: "Agile, Scrum metodologiyalari va JIRA kabi vositalar bilan loyihalarni muvaffaqiyatli boshqarish.", levelId: 'beginner', duration: "4 hafta" }
    ],

    // Contact
    contact_title: "Hamkorlikka Ochiqmiz",
    contact_description: "Ajoyib g'oyangiz bormi? Uni hayotga tatbiq etishda yordam beramiz. Biz bilan bog'laning va kelajakni birga quramiz.",
    contact_telegram: "Telegram",

    // Chatbot
    chatbot_title: "Virtual Yordamchi",
    chatbot_greeting: "Salom! Men CDCGROUP virtual yordamchisiman. Sizga qanday yordam bera olaman?",
    chatbot_error_init: "Kechirasiz, hozirda virtual yordamchi ishlamayapti.",
    chatbot_error_response: "Kechirasiz, javob olishda xatolik yuz berdi.",
    chatbot_placeholder: "Xabar yozing...",
    chatbot_thinking: "Fikrlanmoqda...",
    chatbot_aria_open: "Chatbotni ochish",
    chatbot_sys_prompt: "You are a friendly and helpful assistant for CDCGROUP, an innovative IT company. Your goal is to answer questions about the company's services (AI, Big Data, Automation, Software Development, Web/Mobile Apps, Cybersecurity, IT Consulting), history, and projects. Keep your answers concise, professional, and encouraging. All responses must be in Uzbek.",
    
    // ScrollToTop
    scroll_to_top_aria: "Sahifa boshiga qaytish",

    // Policies
    privacy_policy_title: "Maxfiylik Siyosati",
    terms_of_use_title: "Foydalanish Shartlari",
    
    // ... many more keys from other sections
    investors_title: "Investorlar uchun Ma'lumot",
    investors_description: "CDCGROUP — bu Markaziy Osiyo IT bozorida o'sib borayotgan kuch. Bizning innovatsiyalarga bo'lgan ishtiyoqimiz va kuchli jamoamiz bilan kelajakni shakllantirishda bizga qo'shiling.",
    stats: [
        { value: 5, suffix: "+", label: "Faoliyat Yillari" },
        { value: 50, suffix: "+", label: "Bajarilgan Loyihalar" },
        { value: 30, suffix: "+", label: "Mamnun Mijozlar" },
        { value: 15, label: "Jamoa A'zolari" }
    ],
    
    partners_title: "Hamkorlik Dasturi",
    
    portal_title: "Resurslar Markazi",
    portal_placeholder_title: "Bu bo'lim hozirda ishlab chiqilmoqda.",
    portal_placeholder_description: "Tez orada foydali ma'lumotlar bilan to'ldiriladi.",
    portal_back_button: "Ortga",
    portal_features_items: [
        { id: 'blog', title: "Blog", description: "Texnologiya, sanoat yangiliklari va kompaniya hayoti haqida maqolalar." },
        { id: 'career', title: "Vakansiyalar", description: "Bizning jamoamizga qo'shiling. Ochiq ish o'rinlari bilan tanishing." },
        { id: 'press-kit', title: "Matbuot uchun", description: "Jurnalistlar uchun logotiplar, kompaniya ma'lumotlari va press-relizlar." },
        { id: 'api-docs', title: "API Hujjatlari", description: "Mahsulotlarimiz bilan integratsiya uchun texnik hujjatlar." },
        { id: 'status-page', title: "Tizim Holati", description: "Xizmatlarimizning real vaqtdagi ish faoliyati va uzluksizligi." },
        { id: 'glossary', title: "Glossariy", description: "IT sohasidagi murakkab atamalarning sodda izohlari to'plami." },
        { id: 'webinars', title: "Vebinarlar", description: "Bo'lajak onlayn seminarlar jadvali va o'tgan vebinarlar yozuvlari." },
        { id: 'whitepapers', title: "Tadqiqotlar", description: "Muayyan texnologiyalar bo'yicha chuqur tahliliy hujjatlar va tadqiqotlar." },
        { id: 'client-portal', title: "Mijozlar Portali", description: "Mavjud mijozlar uchun loyihalarni boshqarish va kuzatish tizimi." },
        { id: 'internship', title: "Amaliyot Dasturi", description: "Talabalar va yosh mutaxassislar uchun amaliyot o'tash imkoniyatlari." },
        { id: 'training', title: "Maxsus Treninglar", description: "Korporativ mijozlar uchun maxsus tayyorlangan IT trening kurslari." },
        { id: 'community', title: "Hamjamiyat Forumi", description: "Foydalanuvchilar va dasturchilar uchun o'zaro fikr almashish platformasi." },
        { id: 'events', title: "Tadbirlar", description: "Biz ishtirok etadigan konferensiyalar, mitaplar va boshqa tadbirlar." },
        { id: 'roadmap', title: "Rivojlanish Xaritasi", description: "Mahsulot va xizmatlarimizning kelajakdagi rivojlanish rejalari." },
        { id: 'success-stories', title: "Muvaffaqiyat Hikoyalari", description: "Mijozlarimizning biz bilan erishgan yutuqlari haqida batafsil keys-stadilar." },
        { id: 'newsletter', title: "Yangiliklar Byulleteni", description: "Eng so'nggi yangiliklar va maqolalardan xabardor bo'lish uchun obuna bo'ling." },
        { id: 'security-policy', title: "Xavfsizlik Siyosati", description: "Ma'lumotlar xavfsizligi bo'yicha amaliyotlarimiz va zaifliklar haqida xabar berish." },
        { id: 'open-source', title: "Ochiq Manba", description: "Bizning ochiq manbali loyihalarga qo'shgan hissamiz va kutubxonalarimiz." },
        { id: 'swag-store', title: "Brend Do'koni", description: "Kompaniyamiz logotipi tushirilgan futbolka, krujka va boshqa buyumlar." },
        { id: 'referral-program', title: "Tavsiya Dasturi", description: "Bizga yangi mijozlarni tavsiya qiling va buning uchun munosib bonuslarga ega bo'ling." },
    ],
    
    calculator_services: [], // This is complex and would require a full object translation
    privacy_policy_data: [], // This is complex and would require a full object translation
    terms_of_use_data: [], // This is complex and would require a full object translation
  },
  ru: {
    // General
    subtitle: "Инновации - Наша Основа",
    close_button_aria: "Закрыть",
    open_menu_aria: "Открыть меню",
    close_menu_aria: "Закрыть меню",
    footer_copyright: "© {year} CDCGROUP. Все права защищены.",

    // Nav
    nav_items: [
        { id: 'services', label: 'Услуги' },
        { id: 'about', label: 'О нас' },
        { id: 'cases', label: 'Кейсы' },
        { id: 'calculator', label: 'Калькулятор' },
        { id: 'tech', label: 'Технологии' },
        { id: 'team', label: 'Команда' },
        { id: 'faq', label: 'FAQ' },
        { id: 'academy', label: 'Академия' },
        { id: 'investors', label: 'Инвесторам' },
        { id: 'partners', label: 'Партнерство' },
        { id: 'contact', label: 'Контакты' },
    ],

    // Services
    services_items: [
      { id: 'ai', title: "Искусственный Интеллект и Big Data", description: "Прогнозная аналитика на основе данных и создание интеллектуальных систем для вашего бизнеса." },
      { id: 'custom-software', title: "Заказные Программные Решения", description: "Создание масштабируемого и надежного программного обеспечения, адаптированного под ваши уникальные требования." },
      { id: 'cybersecurity', title: "Кибербезопасность и Защита", description: "Многоуровневая безопасность для защиты ваших цифровых активов от современных угроз." },
      { id: 'web-mobile', title: "Веб и Мобильные Приложения", description: "Современные и удобные приложения, безупречно работающие на любом устройстве." },
      { id: 'it-strategy', title: "IT-Стратегия и Консалтинг", description: "Разработка технологической дорожной карты для достижения ваших бизнес-целей." },
      { id: 'bpa', title: "Автоматизация Бизнес-Процессов", description: "Роботизация повторяющихся задач для повышения операционной эффективности." },
      { id: 'cloud-devops', title: "Облачная Инфраструктура и DevOps", description: "Построение масштабируемой облачной инфраструктуры и ускорение доставки с помощью CI/CD." },
      { id: 'ui-ux', title: "UI/UX Дизайн и Исследования", description: "Интуитивно понятные и привлекательные интерфейсы, основанные на исследовании пользовательского опыта." },
      { id: 'ecommerce', title: "Платформы Электронной Коммерции", description: "Безопасные и полнофункциональные интернет-магазины для развития онлайн-продаж." },
      { id: 'blockchain', title: "Технологии Блокчейн", description: "Решения для проектов, требующих децентрализованных, прозрачных и сверхбезопасных систем." },
      { id: 'iot', title: "Интернет Вещей (IoT)", description: "Подключение физических устройств к интернету для сбора данных и управления в реальном времени." },
      { id: 'qa', title: "Обеспечение Качества и Тестирование", description: "Комплексные услуги тестирования для обеспечения безупречной работы вашего программного продукта." },
    ],
    
    // About / Team
    about_title: "О Нас",
    about_description: "Наш путь, начавшийся как CraDev, теперь достигает новых высот под брендом CDCGROUP. Наша главная цель — трансформировать ваш бизнес с помощью инновационных технологий. Наш опыт и видение будущего служат вашему успеху.",
    team_title: "Наша Команда",
    team_members: [
        { slug: "islombek-raxmonberdiyev", name: "Исломбек Рахмонбердиев", role: "Генеральный директор (CEO)", bio: "Исломбек — лидер-визионер, определяющий стратегическое направление компании и обеспечивающий ее глобальный рост. Обладает многолетним опытом в управлении бизнесом и внедрении инноваций.", skills: ["Бизнес-стратегия", "Управление инновациями", "Развитие команды", "Финансовое планирование"] },
        { slug: "hojiakbar-soyibnazarov", name: "Хожиакбар Сойбназаров", role: "Операционный директор (COO)", bio: "Хожиакбар эффективно управляет повседневной деятельностью компании. Он отвечает за оптимизацию процессов и своевременное и качественное выполнение проектов.", skills: ["Операционное управление", "Управление проектами (Agile)", "Планирование ресурсов", "Повышение эффективности"] },
        { slug: "ikromjon-moydinjonov", name: "Икромжон Муйдинжонов", role: "Технический партнер", bio: "Икромжон — специалист по технологическому партнерству и интеграции новых решений. Он способствует повышению технического потенциала компании.", skills: ["Техническое партнерство", "Системная интеграция", "Разработка API", "Облачные технологии"] },
        { slug: "foziljon-kadirberganov", name: "Фозилжон Кадирберганов", role: "Медиа-инженер", bio: "Фозилжон отвечает за создание визуального контента и брендинга компании. Он разрабатывает медиа-продукты с творческим подходом.", skills: ["Графический дизайн", "Видеомонтаж", "Брендинг", "Основы UI/UX", "Motion Design"] },
        { slug: "salohiddin-muhammadaliyev", name: "Салохиддин Мухаммадалиев", role: "Frontend-разработчик", bio: "Салохиддин специализируется на создании интуитивно понятных и быстрых пользовательских интерфейсов. Он эффективно использует современные frontend-технологии.", skills: ["React", "Next.js", "TypeScript", "Web Performance", "CSS-анимации"] },
        { slug: "abubakir-xayrullayev", name: "Абубакир Хайруллаев", role: "Преемник", bio: "Абубакир — молодой и талантливый специалист, которого готовят на роль будущего лидера компании. Он отличается инновационными идеями и сильным интересом к технологиям.", skills: ["Основы программирования", "Координация проектов", "Анализ рынка", "Цифровой маркетинг"] }
    ],
    tech_stack_title: "Наш стек технологий",
    
    // Cases
    project_tags: {
        all: "Все",
        legacy: "Наследие CraDev",
        innovation: "Инновация CDCGroup"
    },
    projects_items: [
        { id: 'erp', title: "Управление ресурсами предприятия (ERP)", description: "Комплексная система, объединяющая все бизнес-процессы для крупной производственной компании." },
        { id: 'logistics', title: "Умная логистическая платформа", description: "Решение на базе ИИ для оптимизации грузоперевозок и отслеживания в реальном времени." },
        { id: 'mobile-bank', title: "Мобильное банковское приложение", description: "Современное банковское приложение с удобным интерфейсом и высоким уровнем безопасности." },
        { id: 'predictive-analysis', title: "Модель предиктивного анализа", description: "Прогнозирование продаж и оптимизация складских запасов для розничной сети." }
    ],

    // FAQ
    faq_title: "Часто Задаваемые Вопросы",
    faqs: [
        { id: 'q1', question: "Какие услуги предлагает CDCGROUP?", answer: "Мы предлагаем широкий спектр услуг, включая искусственный интеллект, разработку программного обеспечения, автоматизацию, кибербезопасность и IT-консалтинг." },
        { id: 'q2', question: "Как рассчитывается стоимость проекта?", answer: "Каждый проект индивидуален. Цена зависит от сложности проекта, требуемого времени и ресурсов. Свяжитесь с нами или воспользуйтесь нашим интерактивным калькулятором для точной оценки." },
        { id: 'q3', question: "Как с вами связаться?", answer: "Вы можете связаться с нами через форму на странице 'Контакты', по телефону или электронной почте." },
        { id: 'q4', question: "В чем разница между CraDev и CDCGROUP?", answer: "CDCGROUP — это новый бренд, построенный на опыте и фундаменте CraDev. Мы расширили спектр услуг и еще больше сфокусировались на инновациях." },
    ],

    // Technologies
    technologies_title: "Используемые нами технологии",
    technologies_items: [
        { id: 'python', name: 'Python', description: "Наш основной инструмент для бэкенда, моделей AI/ML и анализа данных." },
        { id: 'react', name: 'React', description: "Наш выбор для создания современных, быстрых и интерактивных пользовательских интерфейсов." },
        { id: 'nodejs', name: 'Node.js', description: "Мы используем его для масштабируемых и высокопроизводительных серверных приложений." },
        { id: 'typescript', name: 'TypeScript', description: "Надмножество JavaScript для уменьшения ошибок и повышения надежности кода в крупных проектах." },
        { id: 'nextjs', name: 'Next.js', description: "Мощный фреймворк на базе React для рендеринга на стороне сервера (SSR) и генерации статических сайтов (SSG)." },
        { id: 'postgresql', name: "PostgreSQL", description: "Наша основная реляционная база данных для проектов, требующих сложных запросов и надежности."},
        { id: 'aws', name: 'AWS', description: "Мы используем его для обеспечения надежной, безопасной и масштабируемой облачной инфраструктуры." },
        { id: 'docker', name: 'Docker', description: "Стандартизирует процессы изоляции, развертывания и управления приложениями." },
        { id: 'kubernetes', name: 'Kubernetes', description: "Платформа с открытым исходным кодом для автоматического развертывания, масштабирования и управления контейнеризированными приложениями." },
        { id: 'terraform', name: 'Terraform', description: "Инструмент для управления инфраструктурой как кодом (IaC), декларативного создания и изменения облачных ресурсов." },
        { id: 'graphql', name: 'GraphQL', description: "Язык запросов для API, позволяющий клиентам получать именно те данные, которые им нужны." },
        { id: 'sql-nosql', name: 'SQL/NoSQL', description: "В зависимости от требований проекта мы используем как структурированные, так и неструктурированные базы данных." },
    ],

    // Academy
    academy_title: "Академия CDCGROUP",
    academy_description: "Изучайте технологии будущего вместе с нами. Наши курсы, разработанные экспертами, выведут вашу карьеру в IT на новый уровень.",
    academy_levels: {
        beginner: "Начальный",
        intermediate: "Средний",
        advanced: "Продвинутый"
    },
    academy_courses_items: [
        { id: 'python-basics', title: "Основы Python", description: "Первый шаг в программирование. Синтаксис Python, типы данных и основные алгоритмы.", levelId: 'beginner', duration: "4 недели" },
        { id: 'react-frontend', title: "React: Современный Frontend", description: "Создание интерактивных веб-приложений с помощью компонентов, управления состоянием и хуков.", levelId: 'intermediate', duration: "8 недель" },
        { id: 'ai-ml-intro', title: "Введение в AI и Machine Learning", description: "Модели машинного обучения, нейронные сети и их практическое применение.", levelId: 'intermediate', duration: "10 недель" },
        { id: 'cybersecurity-pro', title: "Специалист по кибербезопасности", description: "Изучите основы сетевой безопасности, веб-защиты и 'этичного хакинга'.", levelId: 'advanced', duration: "12 недель" },
        { id: 'nodejs-backend', title: "Node.js: Создание Backend", description: "Создание быстрых и масштабируемых серверов и API с помощью JavaScript.", levelId: 'intermediate', duration: "6 недель" },
        { id: 'it-pm', title: "Управление IT-проектами", description: "Успешное управление проектами с помощью методологий Agile, Scrum и инструментов, таких как JIRA.", levelId: 'beginner', duration: "4 недели" }
    ],

    // Contact
    contact_title: "Открыты к сотрудничеству",
    contact_description: "У вас есть блестящая идея? Мы поможем воплотить ее в жизнь. Свяжитесь с нами, и давайте строить будущее вместе.",
    contact_telegram: "Telegram",
    
    // Chatbot
    chatbot_title: "Виртуальный помощник",
    chatbot_greeting: "Здравствуйте! Я виртуальный помощник CDCGROUP. Чем могу вам помочь?",
    chatbot_error_init: "Извините, виртуальный помощник в данный момент недоступен.",
    chatbot_error_response: "Извините, произошла ошибка при получении ответа.",
    chatbot_placeholder: "Напишите сообщение...",
    chatbot_thinking: "Думаю...",
    chatbot_aria_open: "Открыть чат-бота",
    chatbot_sys_prompt: "You are a friendly and helpful assistant for CDCGROUP, an innovative IT company. Your goal is to answer questions about the company's services (AI, Big Data, Automation, Software Development, Web/Mobile Apps, Cybersecurity, IT Consulting), history, and projects. Keep your answers concise, professional, and encouraging. All responses must be in Russian.",
    
    // ScrollToTop
    scroll_to_top_aria: "Вернуться к началу",

    // Policies
    privacy_policy_title: "Политика Конфиденциальности",
    terms_of_use_title: "Условия Использования",
    
    // Other Sections
    investors_title: "Информация для инвесторов",
    investors_description: "CDCGROUP — это растущая сила на IT-рынке Центральной Азии. Присоединяйтесь к нам в формировании будущего с нашей страстью к инновациям и сильной командой.",
    stats: [
        { value: 5, suffix: "+", label: "Лет на рынке" },
        { value: 50, suffix: "+", label: "Выполненных проектов" },
        { value: 30, suffix: "+", label: "Довольных клиентов" },
        { value: 15, label: "Членов команды" }
    ],
    
    partners_title: "Партнерская программа",
    
    portal_title: "Центр Ресурсов",
    portal_placeholder_title: "Этот раздел находится в разработке.",
    portal_placeholder_description: "Скоро здесь появится полезная информация.",
    portal_back_button: "Назад",
    portal_features_items: [
        { id: 'blog', title: "Блог", description: "Статьи о технологиях, новостях индустрии и жизни компании." },
        { id: 'career', title: "Вакансии", description: "Присоединяйтесь к нашей команде. Ознакомьтесь с открытыми вакансиями." },
        { id: 'press-kit', title: "Для прессы", description: "Логотипы, информация о компании и пресс-релизы для журналистов." },
        { id: 'api-docs', title: "Документация API", description: "Техническая документация для интеграции с нашими продуктами." },
        { id: 'status-page', title: "Статус системы", description: "Работоспособность и доступность наших сервисов в реальном времени." },
        { id: 'glossary', title: "Глоссарий", description: "Сборник простых объяснений сложных IT-терминов." },
        { id: 'webinars', title: "Вебинары", description: "Расписание предстоящих онлайн-семинаров и записи прошедших вебинаров." },
        { id: 'whitepapers', title: "Исследования", description: "Глубокие аналитические документы и исследования по конкретным технологиям." },
        { id: 'client-portal', title: "Портал для клиентов", description: "Система управления и отслеживания проектов для текущих клиентов." },
        { id: 'internship', title: "Программа стажировок", description: "Возможности стажировки для студентов и молодых специалистов." },
        { id: 'training', title: "Специальные тренинги", description: "Индивидуальные IT-тренинги для корпоративных клиентов." },
        { id: 'community', title: "Форум сообщества", description: "Платформа для обмена мнениями между пользователями и разработчиками." },
        { id: 'events', title: "Мероприятия", description: "Конференции, митапы и другие мероприятия, в которых мы участвуем." },
        { id: 'roadmap', title: "Дорожная карта", description: "Планы будущего развития наших продуктов и услуг." },
        { id: 'success-stories', title: "Истории успеха", description: "Подробные кейс-стади о достижениях наших клиентов." },
        { id: 'newsletter', title: "Новостная рассылка", description: "Подпишитесь, чтобы быть в курсе последних новостей и статей." },
        { id: 'security-policy', title: "Политика безопасности", description: "Наши практики по безопасности данных и сообщения об уязвимостях." },
        { id: 'open-source', title: "Открытый исходный код", description: "Наш вклад в проекты с открытым исходным кодом и наши библиотеки." },
        { id: 'swag-store', title: "Магазин сувениров", description: "Футболки, кружки и другие товары с логотипом нашей компании." },
        { id: 'referral-program', title: "Реферальная программа", description: "Рекомендуйте нам новых клиентов и получайте за это достойные бонусы." },
    ],
    
    calculator_services: [],
    privacy_policy_data: [],
    terms_of_use_data: [],
  },
  en: {
    // General
    subtitle: "Innovation Is Our Foundation",
    close_button_aria: "Close",
    open_menu_aria: "Open menu",
    close_menu_aria: "Close menu",
    footer_copyright: "© {year} CDCGROUP. All rights reserved.",

    // Nav
    nav_items: [
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About Us' },
        { id: 'cases', label: 'Cases' },
        { id: 'calculator', label: 'Calculator' },
        { id: 'tech', label: 'Technologies' },
        { id: 'team', label: 'Team' },
        { id: 'faq', label: 'FAQ' },
        { id: 'academy', label: 'Academy' },
        { id: 'investors', label: 'For Investors' },
        { id: 'partners', label: 'Partnership' },
        { id: 'contact', label: 'Contact' },
    ],

    // Services
    services_items: [
      { id: 'ai', title: "Artificial Intelligence & Big Data", description: "Data-driven predictive analytics and creating intelligent systems for your business." },
      { id: 'custom-software', title: "Custom Software Solutions", description: "Building scalable and reliable software tailored to your unique requirements." },
      { id: 'cybersecurity', title: "Cybersecurity & Protection", description: "Multi-layered security to protect your digital assets from modern threats." },
      { id: 'web-mobile', title: "Web & Mobile Applications", description: "Modern, user-friendly apps that work flawlessly on any device." },
      { id: 'it-strategy', title: "IT Strategy & Consulting", description: "Developing a technological roadmap to achieve your business goals." },
      { id: 'bpa', title: "Business Process Automation", description: "Robotizing repetitive tasks to increase operational efficiency." },
      { id: 'cloud-devops', title: "Cloud Infrastructure & DevOps", description: "Building scalable cloud infrastructure and accelerating delivery with CI/CD." },
      { id: 'ui-ux', title: "UI/UX Design & Research", description: "Intuitive and engaging digital product interfaces based on user experience research." },
      { id: 'ecommerce', title: "E-commerce Platforms", description: "Secure and fully functional online stores to boost your online sales." },
      { id: 'blockchain', title: "Blockchain Technologies", description: "Solutions for projects requiring decentralized, transparent, and highly secure systems." },
      { id: 'iot', title: "Internet of Things (IoT)", description: "Connecting physical devices to the internet for real-time data collection and management." },
      { id: 'qa', title: "Quality Assurance & Testing", description: "Comprehensive testing services to ensure your software product works perfectly." },
    ],

    // About / Team
    about_title: "About Us",
    about_description: "Our journey, which began as CraDev, is now conquering new heights under the CDCGROUP brand. Our main goal is to transform your business through innovative technologies. Our experience and vision for the future serve your success.",
    team_title: "Our Team",
    team_members: [
        { slug: "islombek-raxmonberdiyev", name: "Islombek Raxmonberdiyev", role: "Chief Executive Officer (CEO)", bio: "Islombek is a visionary leader who sets the company's strategic direction and ensures its global growth. He has many years of experience in business management and innovation.", skills: ["Business Strategy", "Innovation Management", "Team Development", "Financial Planning"] },
        { slug: "hojiakbar-soyibnazarov", name: "Hojiakbar Soyibnazarov", role: "Chief Operating Officer (COO)", bio: "Hojiakbar effectively manages the company's daily operations. He is responsible for process optimization and ensuring projects are completed on time and to a high standard.", skills: ["Operations Management", "Project Management (Agile)", "Resource Planning", "Efficiency Improvement"] },
        { slug: "ikromjon-moydinjonov", name: "Ikromjon Mo'ydinjonov", role: "Technical Partner", bio: "Ikromjon is a specialist in technological partnerships and new solution integration. He helps to enhance the company's technical potential.", skills: ["Technical Partnership", "System Integration", "API Development", "Cloud Technologies"] },
        { slug: "foziljon-kadirberganov", name: "Foziljon Kadirberganov", role: "Media Engineer", bio: "Foziljon is responsible for creating the company's visual content and branding. He develops media products with a creative approach.", skills: ["Graphic Design", "Video Editing", "Branding", "UI/UX Fundamentals", "Motion Design"] },
        { slug: "salohiddin-muhammadaliyev", name: "Salohiddin Muhammadaliyev", role: "Frontend Developer", bio: "Salohiddin specializes in creating intuitive and fast user interfaces. He makes effective use of modern frontend technologies.", skills: ["React", "Next.js", "TypeScript", "Web Performance", "CSS Animations"] },
        { slug: "abubakir-xayrullayev", name: "Abubakir Khayrullayev", role: "Successor", bio: "Abubakir is a young and talented specialist being groomed as a future leader of the company. He stands out with his innovative ideas and strong interest in technology.", skills: ["Programming Fundamentals", "Project Coordination", "Market Analysis", "Digital Marketing"] }
    ],
    tech_stack_title: "Our Tech Stack",

    // Cases
    project_tags: {
        all: "All",
        legacy: "CraDev Legacy",
        innovation: "CDCGroup Innovation"
    },
    projects_items: [
        { id: 'erp', title: "Enterprise Resource Planning (ERP)", description: "A comprehensive system integrating all business processes for a large manufacturing company." },
        { id: 'logistics', title: "Smart Logistics Platform", description: "An AI-based solution for optimizing freight transport and real-time tracking." },
        { id: 'mobile-bank', title: "Mobile Banking App", description: "A modern banking application with a user-friendly interface and a high level of security." },
        { id: 'predictive-analysis', title: "Predictive Analysis Model", description: "Sales forecasting and inventory optimization for a retail chain." }
    ],

    // FAQ
    faq_title: "Frequently Asked Questions",
    faqs: [
        { id: 'q1', question: "What services does CDCGROUP offer?", answer: "We offer a wide range of services, including artificial intelligence, software development, automation, cybersecurity, and IT consulting." },
        { id: 'q2', question: "How is the project cost calculated?", answer: "Each project is unique. The price depends on the project's complexity, required time, and resources. Contact us or use our interactive calculator for an accurate estimate." },
        { id: 'q3', question: "How can I contact you?", answer: "You can contact us through the form on the 'Contact' page, by phone, or by email." },
        { id: 'q4', question: "What is the difference between CraDev and CDCGROUP?", answer: "CDCGROUP is a new brand built on the experience and foundation of CraDev. We have expanded our range of services and are focusing even more on innovation." },
    ],

    // Technologies
    technologies_title: "Technologies We Use",
    technologies_items: [
        { id: 'python', name: 'Python', description: "Our primary tool for backend, AI/ML models, and data analysis." },
        { id: 'react', name: 'React', description: "Our choice for creating modern, fast, and interactive user interfaces." },
        { id: 'nodejs', name: 'Node.js', description: "We use it for scalable and high-performance server-side applications." },
        { id: 'typescript', name: 'TypeScript', description: "A superset of JavaScript to reduce errors and make code more reliable in large projects." },
        { id: 'nextjs', name: 'Next.js', description: "A powerful React-based framework for server-side rendering (SSR) and static site generation (SSG)." },
        { id: 'postgresql', name: "PostgreSQL", description: "Our primary relational database for projects requiring complex queries and reliability."},
        { id: 'aws', name: 'AWS', description: "We use it to provide a reliable, secure, and scalable cloud infrastructure." },
        { id: 'docker', name: 'Docker', description: "Standardizes the processes of application isolation, deployment, and management." },
        { id: 'kubernetes', name: 'Kubernetes', description: "An open-source platform for automatically deploying, scaling, and managing containerized applications." },
        { id: 'terraform', name: 'Terraform', description: "An Infrastructure as Code (IaC) tool for declaratively creating and modifying cloud resources." },
        { id: 'graphql', name: 'GraphQL', description: "A query language for APIs that allows clients to get exactly the data they need." },
        { id: 'sql-nosql', name: 'SQL/NoSQL', description: "We use both structured and unstructured databases, depending on the project's requirements." },
    ],
    
    // Academy
    academy_title: "CDCGROUP Academy",
    academy_description: "Learn the technologies of the future with us. Our courses, developed by experts, will take your IT career to the next level.",
    academy_levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced"
    },
    academy_courses_items: [
        { id: 'python-basics', title: "Python Basics", description: "The first step into programming. Python syntax, data types, and basic algorithms.", levelId: 'beginner', duration: "4 weeks" },
        { id: 'react-frontend', title: "React: Modern Frontend", description: "Creating interactive web applications using components, state management, and hooks.", levelId: 'intermediate', duration: "8 weeks" },
        { id: 'ai-ml-intro', title: "Intro to AI & Machine Learning", description: "Machine learning models, neural networks, and their practical applications.", levelId: 'intermediate', duration: "10 weeks" },
        { id: 'cybersecurity-pro', title: "Cybersecurity Specialist", description: "Learn the basics of network security, web protection, and 'ethical hacking'.", levelId: 'advanced', duration: "12 weeks" },
        { id: 'nodejs-backend', title: "Node.js: Backend Development", description: "Building fast and scalable servers and APIs using JavaScript.", levelId: 'intermediate', duration: "6 weeks" },
        { id: 'it-pm', title: "IT Project Management", description: "Successfully manage projects with Agile, Scrum methodologies, and tools like JIRA.", levelId: 'beginner', duration: "4 weeks" }
    ],

    // Contact
    contact_title: "Open to Collaboration",
    contact_description: "Have a great idea? We'll help bring it to life. Contact us, and let's build the future together.",
    contact_telegram: "Telegram",

    // Chatbot
    chatbot_title: "Virtual Assistant",
    chatbot_greeting: "Hello! I am the CDCGROUP virtual assistant. How can I help you?",
    chatbot_error_init: "Sorry, the virtual assistant is currently unavailable.",
    chatbot_error_response: "Sorry, there was an error getting a response.",
    chatbot_placeholder: "Type a message...",
    chatbot_thinking: "Thinking...",
    chatbot_aria_open: "Open Chatbot",
    chatbot_sys_prompt: "You are a friendly and helpful assistant for CDCGROUP, an innovative IT company. Your goal is to answer questions about the company's services (AI, Big Data, Automation, Software Development, Web/Mobile Apps, Cybersecurity, IT Consulting), history, and projects. Keep your answers concise, professional, and encouraging. All responses must be in English.",

    // ScrollToTop
    scroll_to_top_aria: "Scroll back to top",

    // Policies
    privacy_policy_title: "Privacy Policy",
    terms_of_use_title: "Terms of Use",
    
    investors_title: "For Investors",
    investors_description: "CDCGROUP is a growing force in the Central Asian IT market. Join us in shaping the future with our passion for innovation and a strong team.",
    stats: [
        { value: 5, suffix: "+", label: "Years in Business" },
        { value: 50, suffix: "+", label: "Projects Completed" },
        { value: 30, suffix: "+", label: "Satisfied Clients" },
        { value: 15, label: "Team Members" }
    ],
    
    partners_title: "Partnership Program",
    
    portal_title: "Resource Center",
    portal_placeholder_title: "This section is currently under development.",
    portal_placeholder_description: "Useful information will be added soon.",
    portal_back_button: "Back",
    portal_features_items: [
        { id: 'blog', title: "Blog", description: "Articles about technology, industry news, and company life." },
        { id: 'career', title: "Careers", description: "Join our team. Check out our open positions." },
        { id: 'press-kit', title: "Press Kit", description: "Logos, company information, and press releases for journalists." },
        { id: 'api-docs', title: "API Documentation", description: "Technical documentation for integrating with our products." },
        { id: 'status-page', title: "Status Page", description: "Real-time performance and uptime of our services." },
        { id: 'glossary', title: "Glossary", description: "A collection of simple explanations for complex IT terms." },
        { id: 'webinars', title: "Webinars", description: "Schedule of upcoming online seminars and recordings of past webinars." },
        { id: 'whitepapers', title: "Whitepapers", description: "In-depth analytical documents and research on specific technologies." },
        { id: 'client-portal', title: "Client Portal", description: "Project management and tracking system for existing clients." },
        { id: 'internship', title: "Internship Program", description: "Internship opportunities for students and young professionals." },
        { id: 'training', title: "Custom Training", description: "Customized IT training courses for corporate clients." },
        { id: 'community', title: "Community Forum", description: "A platform for users and developers to exchange ideas." },
        { id: 'events', title: "Events", description: "Conferences, meetups, and other events we participate in." },
        { id: 'roadmap', title: "Development Roadmap", description: "Future development plans for our products and services." },
        { id: 'success-stories', title: "Success Stories", description: "Detailed case studies about our clients' achievements." },
        { id: 'newsletter', title: "Newsletter", description: "Subscribe to stay informed about the latest news and articles." },
        { id: 'security-policy', title: "Security Policy", description: "Our data security practices and vulnerability reporting." },
        { id: 'open-source', title: "Open Source", description: "Our contributions to open source projects and our libraries." },
        { id: 'swag-store', title: "Swag Store", description: "T-shirts, mugs, and other items with our company logo." },
        { id: 'referral-program', title: "Referral Program", description: "Refer new clients to us and earn great bonuses." },
    ],
    
    calculator_services: [],
    privacy_policy_data: [],
    terms_of_use_data: [],
  }
};
