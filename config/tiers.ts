import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费版",
    price: "免费",
    href: "#",
    description:
      "免费体验基础功能，快速生成您的专属RedNote风格中文网名，开启您的RedNote之旅！",
    features: ["免费使用", "基础网名生成", "多种结果展示"],
    buttonText: "立即使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "高级版",
    href: "#",
    description:
      "解锁高级功能，打造您的专属中文网名。享受个性化选项和完全自定义的设计。",
    price: "定制",
    features: ["风格选择", "偏好设置", "网名含义解释"],
    buttonText: "了解更多",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free Version",
    price: "Free",
    href: "#",
    description:
      "Get started with basic features for free. Generate your unique RedNote style chinese name and begin your journey on RedNote!",
    features: ["Free to use", "Basic name generation", "Multiple results"],
    buttonText: "Use Now",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Version",
    href: "#",
    description:
      "Unlock advanced features to create your ideal chinese name. Enjoy personalized options and fully customizable designs.",
    price: "Custom",
    features: ["Style selection", "Preference settings", "Name meanings"],
    buttonText: "Learn More",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_TW: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免費版",
    price: "免費",
    href: siteConfig.openSourceURL || "#",
    description: "基礎功能完全免費，協助您**更有效率**地工作。",
    features: ["免費使用", "基礎專注力提醒", "可愛ManTunTun動畫"],
    buttonText: "立即使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "進階版",
    href: siteConfig.authors[0].twitter || "#",
    description: "解鎖更多個人化設定，提升您的專注體驗，讓您**更有效率**。",
    price: "客製化",
    features: ["自訂網站列表", "個人化倒數計時設定", "進階統計功能"],
    buttonText: "了解更多",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "無料版",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description:
      "基本機能は完全無料で、作業**効率**を向上させるのに役立ちます。",
    features: [
      "無料で使用",
      "基本的な集中リマインダー",
      "可愛いManTunTunアニメーション",
    ],
    buttonText: "今すぐ使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "プレミアム版",
    price: "カスタマイズ",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "さらに多くのパーソナライズ設定を解除して、集中体験を向上させましょう。",
    features: [
      "カスタムウェブサイトリスト",
      "パーソナライズされたタイマー設定",
      "高度な統計機能",
    ],
    buttonText: "詳細はこちら",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "النسخة المجانية",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description:
      "الميزات الأساسية مجانية تمامًا لمساعدتك على تحسين **كفاءة** عملك.",
    features: [
      "استخدام مجاني",
      "تذكيرات أساسية بالتركيز",
      "رسوم متحركة لطيفة لـ ManTunTun",
    ],
    buttonText: "استخدم الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "النسخة المتقدمة",
    href: siteConfig.authors[0].twitter || "#",
    price: "تخصيص",
    description:
      "افتح المزيد من الإعدادات المخصصة لتعزيز تجربة التركيز الخاصة بك.",
    features: [
      "قائمة مواقع ويب مخصصة",
      "إعدادات مؤقت مخصصة",
      "وظائف إحصائية متقدمة",
    ],
    buttonText: "اعرف المزيد",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Versión Gratuita",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Las funciones básicas son completamente gratuitas, lo que te ayuda a ser **más eficiente** en tu trabajo.",
    features: [
      "Uso gratuito",
      "Recordatorios básicos de concentración",
      "Animación linda de ManTunTun",
    ],
    buttonText: "Usar Ahora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Versión Premium",
    price: "Personalizar",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Desbloquea más configuraciones personalizadas para mejorar tu experiencia de concentración.",
    features: [
      "Lista de sitios web personalizada",
      "Configuración de temporizador personalizado",
      "Funciones estadísticas avanzadas",
    ],
    buttonText: "Aprende Más",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатная версия",
    price: "Бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Базовые функции абсолютно бесплатны и помогут вам повысить **эффективность** вашей работы.",
    features: [
      "Бесплатное использование",
      "Базовые напоминания о сосредоточении",
      "Милая анимация ManTunTun",
    ],
    buttonText: "Использовать сейчас",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Премиум версия",
    price: "Настройка",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Разблокируйте больше персональных настроек, чтобы улучшить ваш опыт сосредоточения.",
    features: [
      "Настраиваемый список веб-сайтов",
      "Персонализированные настройки таймера",
      "Расширенные функции статистики",
    ],
    buttonText: "Узнать больше",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_DE: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Kostenlose Version",
    price: "Kostenlos",
    href: siteConfig.openSourceURL || "#",
    description:
      "Die Basisfunktionen sind völlig kostenlos und helfen Ihnen, Ihre Arbeit **effizienter** zu gestalten.",
    features: [
      "Kostenlose Nutzung",
      "Grundlegende Fokus-Erinnerungen",
      "Niedliche ManTunTun-Animation",
    ],
    buttonText: "Jetzt nutzen",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Version",
    price: "Anpassen",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Schalten Sie weitere personalisierte Einstellungen frei, um Ihr Konzentrationserlebnis zu verbessern.",
    features: [
      "Benutzerdefinierte Webseitenliste",
      "Personalisierte Timer-Einstellungen",
      "Erweiterte Statistikfunktionen",
    ],
    buttonText: "Mehr erfahren",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_FR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Version Gratuite",
    price: "Gratuit",
    href: siteConfig.openSourceURL || "#",
    description:
      "Les fonctionnalités de base sont entièrement gratuites, vous aidant à améliorer votre **efficacité** au travail.",
    features: [
      "Utilisation gratuite",
      "Rappels de concentration de base",
      "Animation mignonne de ManTunTun",
    ],
    buttonText: "Utiliser Maintenant",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Version Premium",
    price: "Personnaliser",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Débloquez plus de paramètres personnalisés pour améliorer votre expérience de concentration.",
    features: [
      "Liste de sites web personnalisée",
      "Paramètres de minuterie personnalisés",
      "Fonctions statistiques avancées",
    ],
    buttonText: "En savoir plus",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_KO: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "무료 버전",
    price: "무료",
    href: siteConfig.openSourceURL || "#",
    description:
      "기본 기능은 완전 무료로 제공되며, 업무 **효율**을 높이는 데 도움이 됩니다.",
    features: ["무료 사용", "기본 집중 알림", "귀여운 ManTunTun 애니메이션"],
    buttonText: "지금 사용하기",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "프리미엄 버전",
    href: siteConfig.authors[0].twitter || "#",
    price: "맞춤 설정",
    description:
      "더 많은 개인화 설정을 잠금 해제하여 집중 경험을 향상시키세요.",
    features: [
      "사용자 정의 웹사이트 목록",
      "개인화된 타이머 설정",
      "고급 통계 기능",
    ],
    buttonText: "더 알아보기",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_NL: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Gratis Versie",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Basisfunctionaliteiten zijn volledig gratis en helpen je om je werkefficiëntie te verbeteren.",
    features: [
      "Gratis te gebruiken",
      "Basis focus herinneringen",
      "Leuke ManTunTun animatie",
    ],
    buttonText: "Nu gebruiken",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Versie",
    price: "Aanpassen",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Ontgrendel meer gepersonaliseerde instellingen om je focus ervaring te verbeteren.",
    features: [
      "Aangepaste website lijst",
      "Gepersonaliseerde timer instellingen",
      "Geavanceerde statistiek functies",
    ],
    buttonText: "Meer informatie",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_PL: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Wersja darmowa",
    price: "Darmowa",
    href: siteConfig.openSourceURL || "#",
    description:
      "Podstawowe funkcje są całkowicie darmowe i pomagają zwiększyć **wydajność** pracy.",
    features: [
      "Darmowe użytkowanie",
      "Podstawowe przypomnienia o skupieniu",
      "Urocza animacja ManTunTun",
    ],
    buttonText: "Użyj teraz",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Wersja premium",
    price: "Dostosuj",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Odblokuj więcej spersonalizowanych ustawień, aby poprawić komfort skupienia.",
    features: [
      "Lista niestandardowych stron internetowych",
      "Spersonalizowane ustawienia timera",
      "Zaawansowane funkcje statystyczne",
    ],
    buttonText: "Dowiedz się więcej",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_PT: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Versão Gratuita",
    price: "Grátis",
    href: siteConfig.openSourceURL || "#",
    description:
      "As funcionalidades básicas são totalmente gratuitas, ajudando você a melhorar a **eficiência** no trabalho.",
    features: [
      "Uso gratuito",
      "Lembretes básicos de foco",
      "Animação fofa do ManTunTun",
    ],
    buttonText: "Usar Agora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Versão Premium",
    price: "Personalizar",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Desbloqueie mais configurações personalizadas para aprimorar sua experiência de foco.",
    features: [
      "Lista de sites personalizada",
      "Configurações de temporizador personalizadas",
      "Funções estatísticas avançadas",
    ],
    buttonText: "Saiba Mais",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_VI: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Bản Miễn Phí",
    price: "Miễn phí",
    href: siteConfig.openSourceURL || "#",
    description:
      "Các tính năng cơ bản hoàn toàn miễn phí, giúp bạn nâng cao **hiệu quả** công việc.",
    features: [
      "Sử dụng miễn phí",
      "Nhắc nhở tập trung cơ bản",
      "Hoạt ảnh ManTunTun dễ thương",
    ],
    buttonText: "Sử dụng Ngay",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Bản Cao Cấp",
    href: siteConfig.authors[0].twitter || "#",
    price: "Tùy chỉnh",
    description:
      "Mở khóa thêm các cài đặt cá nhân hóa để nâng cao trải nghiệm tập trung của bạn.",
    features: [
      "Danh sách trang web tùy chỉnh",
      "Cài đặt hẹn giờ cá nhân hóa",
      "Chức năng thống kê nâng cao",
    ],
    buttonText: "Tìm hiểu thêm",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_SE: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Gratisversion",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Grundläggande funktioner är helt gratis och hjälper dig att förbättra din **effektivitet** på jobbet.",
    features: [
      "Gratis att använda",
      "Grundläggande fokus påminnelser",
      "Söt ManTunTun-animation",
    ],
    buttonText: "Använd nu",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premiumversion",
    price: "Anpassa",
    href: siteConfig.authors[0].twitter || "#",
    description:
      "Lås upp fler personliga inställningar för att förbättra din fokusupplevelse.",
    features: [
      "Anpassad webbplatslista",
      "Personliga timerinställningar",
      "Avancerade statistikfunktioner",
    ],
    buttonText: "Läs mer",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_PH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Libreng Bersyon",
    price: "Libre",
    href: siteConfig.openSourceURL || "#",
    description:
      "Ang mga pangunahing feature ay ganap na libre upang matulungan kang mapabuti ang **kahusayan** sa iyong trabaho.",
    features: [
      "Libreng gamitin",
      "Mga pangunahing paalala sa pagtutok",
      "Cute ManTunTun animation",
    ],
    buttonText: "Gamitin Ngayon",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium Bersyon",
    href: siteConfig.authors[0].twitter || "#",
    price: "I-customize",
    description:
      "I-unlock ang higit pang mga personalized na setting upang mapahusay ang iyong karanasan sa pagtutok.",
    features: [
      "Custom na listahan ng website",
      "Mga personalized na setting ng timer",
      "Mga advanced na function ng istatistika",
    ],
    buttonText: "Matuto Pa",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_ZH,
  TIERS_EN,
  TIERS_TW,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU,
  TIERS_DE,
  TIERS_FR,
  TIERS_KO,
  TIERS_NL,
  TIERS_PL,
  TIERS_PT,
  TIERS_VI,
  TIERS_SE,
  TIERS_PH,
};
