// All portfolio data for Muhammad Aklilul Hikam
// Bilingual: Indonesian (id) and English (en)

export const siteConfig = {
  name: 'Muhammad Aklilul Hikam',
  firstName: 'MUHAMMAD',
  lastName: 'AKLILUL HIKAM',
  email: 'aklilhikam6@gmail.com',
  study: {
    id: 'Mahasiswa Sistem Informasi Bisnis (Politeknik Negeri Malang)',
    en: 'Business Information Systems Student (State Polytechnic of Malang)',
  },
  tagline: {
    id: 'Mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang, Web3 Ecosystem Builder, dan SEO Content Strategist.',
    en: 'Business Information Systems Student at State Polytechnic of Malang, Web3 Ecosystem Builder, and SEO Content Strategist.',
  },
  description: {
    id: 'Saya adalah mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang yang berfokus pada arsitektur sistem enterprise, riset ekosistem Web3 terdesentralisasi, serta optimasi konten SEO terukur.',
    en: 'I am a Business Information Systems student at State Polytechnic of Malang, focusing on enterprise system architecture, decentralized Web3 ecosystem research, and data-driven SEO content strategies.',
  },
  available: {
    id: 'Terbuka untuk Kolaborasi Proyek',
    en: 'Available for New Project',
  },
  roles: [
    'Mahasiswa Sistem Informasi Bisnis',
    'Web3 Growth & Ecosystem Builder',
    'SEO Content Strategist',
    'Interactive Web Creator',
  ],
  socials: [
    { label: 'X / Twitter', url: 'https://x.com/0xRahvanaa', icon: 'x' },
    { label: 'Medium', url: 'https://rahvana16.medium.com/', icon: 'medium' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-aklilul-hikam-541019331/', icon: 'linkedin' },
    { label: 'Instagram', url: 'https://www.instagram.com/hikam.182/', icon: 'instagram' },
  ],
};

// 4 Modular Career Bricks (ordered from bottom to top for stacking)
export const experienceData = [
  {
    id: 1,
    period: 'Aug 2026 - Now',
    role: 'SEO Content Strategist',
    company: 'Media & Tourism Network',
    color: '#e05328', // Rich Brick Orange (like Foren in owoetoni)
    textColor: '#ffffff',
    description: {
      id: 'Menulis artikel promosi terstruktur dan mengoptimasi SEO on-page secara berkala untuk meningkatkan ranking mesin pencari dan trafik organik di berbagai website pariwisata dan media lokal.',
      en: 'Authoring structured promotional articles and executing on-page SEO optimization to boost search engine visibility and organic traffic across tourism and local media websites.',
    },
    links: [
      { label: 'Dream Holidays', url: 'https://dreamholidays.co.id/blog/' },
      { label: 'Indonesia Holiday', url: 'https://indonesiaholiday.co.id/blog-dan-artikel/' },
      { label: 'Daily Malang', url: 'https://dailymalang.com/' },
      { label: 'Villa Yogya', url: 'https://villayogya.id/artikel/' },
    ],
  },
  {
    id: 2,
    period: '2024 - Now',
    role: 'Community Growth Builder',
    company: 'BarbarianX DAO',
    color: '#3b6fe0', // Casual Royal Blue (like Hydrogen in owoetoni)
    textColor: '#ffffff',
    description: {
      id: 'Membangun dan mengembangkan komunitas crypto Barbarian Airdrop secara aktif lintas platform Telegram, Instagram, dan X, mengedukasi anggota tentang ekosistem Web3.',
      en: 'Scaling and curating the Barbarian Airdrop crypto community across Telegram, Instagram, and X, educating members on Web3 opportunities and decentralized ecosystems.',
    },
    links: [
      { label: 'Telegram', url: 'https://t.me/IFNBarbarianX' },
      { label: 'Instagram', url: 'https://www.instagram.com/barbarianx_dao/' },
      { label: 'X (Twitter)', url: 'https://x.com/Team_BarbarianX' },
    ],
  },
  {
    id: 3,
    period: '2023 - Now',
    role: 'Co-Founder & Admin',
    company: 'Infonomic',
    color: '#1a1a2e', // Deep Charcoal/Navy (like Earnipay in owoetoni)
    textColor: '#ffffff',
    description: {
      id: 'Co-Founder dan admin komunitas edukasi literasi ekonomi, tren investasi digital, dan analisis finansial modern bagi generasi muda.',
      en: 'Co-Founder and Administrator of Infonomic, directing educational publishing on economic literacy, smart investing, and digital finance.',
    },
    links: [
      { label: 'Instagram (@infonomic.id)', url: 'https://www.instagram.com/infonomic.id/' },
    ],
  },
  {
    id: 4,
    period: '2024 - Now',
    role: 'Mahasiswa Sistem Informasi Bisnis',
    company: 'Politeknik Negeri Malang',
    color: '#34a853', // Forest Emerald Green (like OnePipe in owoetoni)
    textColor: '#ffffff',
    description: {
      id: 'Menempuh studi aktif sebagai Mahasiswa Sistem Informasi Bisnis di Politeknik Negeri Malang. Mendalami perancangan arsitektur basis data relasional (PostgreSQL), pemodelan proses bisnis enterprise, analisis kebutuhan sistem, dan rekayasa web modern.',
      en: 'Active student majoring in Business Information Systems at State Polytechnic of Malang. Studying relational database architecture (PostgreSQL), enterprise business process modeling, system requirements analysis, and full-stack web engineering.',
    },
    links: [],
  },
];

// 5 Featured Case Study Projects
export const portfolioData = [
  {
    id: 1,
    number: '01',
    tabLabel: '01 · IRYS',
    shortLabel: '01 · IRYS',
    title: 'IRyS Meteor Crash',
    category: 'MINI-GAME ARCADE',
    color: '#3266e3', // Casual Blue (Reference 1 style)
    description: {
      id: 'Mini-game arcade retro yang dikembangkan sebagai instrumen kampanye promosi interaktif dalam ekosistem Web3 dengan grafis arcade dan gameplay adiktif.',
      en: 'A retro arcade mini-game built as an interactive promotional campaign instrument for Web3 ecosystem activation, featuring dynamic arcade mechanics.',
    },
    link: 'https://irys-meteor-crash.vercel.app/',
    tags: ['Arcade Game', 'Web3 Campaign', 'JavaScript', 'Game Loop'],
    code: '01',
    image: '/images/projects/irys.png',
    isDeployed: true,
    deployType: 'LIVE ARCADE DEMO',
  },
  {
    id: 2,
    number: '02',
    tabLabel: '02 · BUS GUIDE',
    shortLabel: '02 · BUS',
    title: 'Bus Guide',
    category: 'TRANSIT & NAVIGATION APP',
    color: '#181b24', // Deep Black/Slate (Reference 2 style)
    description: {
      id: 'Aplikasi panduan navigasi rute bus modern untuk memudahkan pelacakan jadwal keberangkatan, jalur perjalanan, dan titik halte secara efisien.',
      en: 'A modern transit guide and bus navigation app designed to help passengers track schedules, travel routes, and transit stops efficiently.',
    },
    link: 'https://github.com/Hikam666/busguide',
    tags: ['Transit Navigation', 'Route Mapping', 'UI/UX', 'Mobile Responsive'],
    code: '02',
    image: '/images/projects/busguide.png',
    isDeployed: false,
    deployType: 'GITHUB REPOSITORY',
  },
  {
    id: 3,
    number: '03',
    tabLabel: '03 · LAB CMS',
    shortLabel: '03 · LAB',
    title: 'Website Laboratorium',
    category: 'CAMPUS LAB CMS & WEB APP',
    color: '#2d8b57', // Forest Green (Reference 3 style)
    description: {
      id: 'Platform sistem informasi laboratorium akademik kampus dengan modul manajemen konten (CMS) admin lengkap dengan operasi CRUD dan integrasi database PostgreSQL.',
      en: 'A campus academic laboratory management system featuring a complete admin CMS with full CRUD capabilities, backed by a robust PostgreSQL database.',
    },
    link: 'https://drive.google.com/drive/folders/1ZoWEmcHafkyWTg-ZARHDWW29MXlo8_sx?usp=sharing',
    tags: ['PostgreSQL', 'CRUD Operations', 'Campus CMS', 'Enterprise'],
    code: '03',
    image: '/images/projects/lab-cms.png',
    isDeployed: false,
    deployType: 'DRIVE ARCHIVE (CODE & DOCS)',
  },
  {
    id: 4,
    number: '04',
    tabLabel: '04 · INFONOMIC',
    shortLabel: '04 · INFO',
    title: 'Infonomic.id',
    category: 'COMMUNITY PORTAL & FINANCE',
    color: '#e5a93b', // Warm Gold/Amber (Reference 3 style)
    description: {
      id: 'Platform web profil dan portal edukasi finansial modern yang dirancang responsif untuk komunitas literasi ekonomi anak muda.',
      en: 'A modern web platform and educational portal crafted for a youth community dedicated to economic literacy, smart investing, and digital finance.',
    },
    link: 'https://infonomic.vercel.app/',
    tags: ['Community Portal', 'Economic Literacy', 'Responsive Web', 'UI Design'],
    code: '04',
    image: '/images/projects/infonomic.png',
    isDeployed: true,
    deployType: 'LIVE COMMUNITY PORTAL',
  },
  {
    id: 5,
    number: '05',
    tabLabel: '05 · AXIS 3D',
    shortLabel: '05 · AXIS',
    title: 'Axis Battery Leak',
    category: '3D WEBGL GAME EXPERIMENT',
    color: '#6366f1', // Indigo Purple
    description: {
      id: 'Eksperimen game 3D berbasis web menggunakan Three.js, menampilkan manipulasi objek 3D interaktif, pencahayaan real-time, dan efek visual dinamis.',
      en: 'A 3D browser game experiment engineered with Three.js, highlighting dynamic user interactions with real-time 3D lighting, physics, and shader effects.',
    },
    link: 'https://axis-battery-leak.vercel.app/',
    tags: ['Three.js', 'WebGL', '3D Interactive', 'Real-Time Shaders'],
    code: '05',
    image: '/images/projects/axis-3d.png',
    isDeployed: true,
    deployType: 'LIVE 3D WEBGL DEMO',
  },
  {
    id: 6,
    number: '06',
    tabLabel: '06 · ON-CHAIN',
    shortLabel: '06 · ONCHAIN',
    title: 'Jejak On-Chain',
    category: 'WEB3 BLOCKCHAIN TRACKER & HACKATHON',
    color: '#d45d34', // Terracotta Brick (Rich Web3 aesthetic)
    description: {
      id: 'Platform analitik dan pelacak histori transaksi on-chain blockchain Web3 yang dirancang untuk transparansi data dan diikutsertakan dalam kompetisi bergengsi Binance Hackathon.',
      en: 'A Web3 on-chain blockchain analytics and transaction tracking platform engineered for transparent ledger intelligence, submitted to the Binance Hackathon competition.',
    },
    link: 'https://jejakonchain.my.id/',
    tags: ['Binance Hackathon', 'Web3 Analytics', 'Blockchain Tracker', 'On-Chain Intel'],
    code: '06',
    image: '/images/projects/jejakonchain.png',
    isDeployed: true,
    deployType: 'LIVE HACKATHON PROJECT',
  },
];

// Complete 21 Articles & Essays requested by user
export const articlesData = [
  // 5 Newest Curated Articles
  {
    id: 201,
    title: 'Memahami Lipstick Effect: Cara Unik Manusia Menghibur Diri Pas Lagi Bokek',
    platform: 'X',
    views: 1800,
    likes: 42,
    shares: 19,
    link: 'https://x.com/0xRahvanaa/status/2066557726973730913?s=20',
  },
  {
    id: 202,
    title: 'Kata "Otw" Sebagai Diplomasi Paling Ajaib di Indonesia',
    platform: 'Medium',
    views: 950,
    likes: 38,
    shares: 12,
    link: 'https://rahvana16.medium.com/kata-otw-sebagai-diplomasi-paling-ajaib-di-indonesia-be0e5bf90677',
  },
  {
    id: 203,
    title: 'Mencoba Memahami Kenapa Teman Saya Lebih Pilih Beli Kopi Rp35 Ribu Dibanding Beli Nasi Padang',
    platform: 'Medium',
    views: 1200,
    likes: 54,
    shares: 21,
    link: 'https://rahvana16.medium.com/mencoba-memahami-kenapa-teman-saya-lebih-pilih-beli-kopi-rp35-ribu-dibanding-beli-nasi-padang-14b25fd261b7',
  },
  {
    id: 204,
    title: 'Teman Saya Mendadak Jadi Trader, Saya Bingung Tetap Miskin',
    platform: 'Medium',
    views: 890,
    likes: 29,
    shares: 11,
    link: 'https://rahvana16.medium.com/teman-saya-mendadak-jadi-trader-saya-bingung-tetap-miskin-f2fe6ec38be5',
  },
  {
    id: 205,
    title: 'Saat melihat Plankton menikahi robot jadi tidak terlalu aneh',
    platform: 'Medium',
    views: 740,
    likes: 24,
    shares: 8,
    link: 'https://rahvana16.medium.com/saat-melihat-plankton-menikahi-robot-jadi-tidak-terlalu-aneh-a1caf8ac65cb',
  },

  // 16 Metrics Articles from metricsData
  {
    id: 101,
    title: 'Memahami Scarcity: Mengapa Rencana Thanos Justru Menghancurkan Ekonomi',
    platform: 'X',
    views: 4900,
    likes: 30,
    shares: 15,
    link: 'https://x.com/0xRahvanaa/status/2015782815124819979',
  },
  {
    id: 102,
    title: 'Suku Bajo: Penyelam Terkuat, Sang Penjelajah Samudra',
    platform: 'Kompasiana',
    views: 660,
    likes: 20,
    shares: 4,
    link: 'https://www.kompasiana.com/hiiikam/647700a408a8b50524357193/suku-bajo-penyelam-terkuat-sang-penjelajah-samudra',
  },
  {
    id: 103,
    title: 'Kemunculan Oarfish dan Mitos Bencana',
    platform: 'Kompasiana',
    views: 1491,
    likes: 15,
    shares: 2,
    link: 'https://www.kompasiana.com/hiiikam/6419aaf44addee21a761e183/kemunculan-oarfish-dan-mitos-bencana',
  },
  {
    id: 104,
    title: 'Memahami Ekonomi lewat The Last of Us',
    platform: 'X',
    views: 119,
    likes: 11,
    shares: 9,
    link: 'https://x.com/0xRahvanaa/status/2019439347901297057',
  },
  {
    id: 105,
    title: 'Kapitalis Lu!: Mengenal Kapitalisme Lewat Ambisi Mr. Krabs',
    platform: 'X',
    views: 2300,
    likes: 20,
    shares: 1,
    link: 'https://x.com/0xRahvanaa/status/2020466307813036159',
  },
  {
    id: 106,
    title: 'Memahami Blockchain: Menjawab Kebingungan Saya Dulu',
    platform: 'X',
    views: 450,
    likes: 5,
    shares: 3,
    link: 'https://x.com/0xRahvanaa/status/2021225113644130507',
  },
  {
    id: 107,
    title: 'Mikroekonomi: Versi Close-Up dari Dunia Ekonomi',
    platform: 'X',
    views: 300,
    likes: 8,
    shares: 5,
    link: 'https://x.com/0xRahvanaa/status/2023610841883701654',
  },
  {
    id: 108,
    title: 'Belajar Opportunity Cost dari Tony Stark: Mengapa Iron Man Menutup Pabrik Senjatanya?',
    platform: 'X',
    views: 600,
    likes: 4,
    shares: 1,
    link: 'https://x.com/0xRahvanaa/status/2024149421215424674',
  },
  {
    id: 109,
    title: 'Bank Run: Ketika Semua Orang Pengen Putus Sama Bank',
    platform: 'X',
    views: 800,
    likes: 3,
    shares: 3,
    link: 'https://x.com/0xRahvanaa/status/2025571775556591784',
  },
  {
    id: 110,
    title: 'Memahami Cara Pak Habibie Menjinakkan Rupiah',
    platform: 'X',
    views: 1200,
    likes: 15,
    shares: 8,
    link: 'https://x.com/0xRahvanaa/status/2028097383762919794',
  },
  {
    id: 111,
    title: 'Memahami Civil War: Ketika Pahlawan Berseteru Karena Prinsip',
    platform: 'X',
    views: 900,
    likes: 11,
    shares: 1,
    link: 'https://x.com/0xRahvanaa/status/2030157296911708322',
  },
  {
    id: 112,
    title: 'Memahami Bisnis Money Laundering Walter White dari Breaking Bad',
    platform: 'X',
    views: 2000,
    likes: 12,
    shares: 1,
    link: 'https://x.com/0xRahvanaa/status/2032810272940040560',
  },
  {
    id: 113,
    title: 'Memahami Gus Fring: Masterclass Monopoli dan Integrasi Vertikal',
    platform: 'X',
    views: 431,
    likes: 0,
    shares: 0,
    link: 'https://x.com/0xRahvanaa/status/2036058432575561931?s=20',
  },
  {
    id: 114,
    title: 'Memahami John Constantine: Penyihir Paling Berbahaya Karena Kelicikannya',
    platform: 'X',
    views: 0,
    likes: 0,
    shares: 0,
    link: 'https://x.com/0xRahvanaa/status/2045493350879691214?s=20',
  },
  {
    id: 115,
    title: 'Memahami cara Saul Good Man Memanipulasi Hukum di Better Call Saul.',
    platform: 'X',
    views: 0,
    likes: 0,
    shares: 0,
    link: 'https://x.com/0xRahvanaa/status/2046969446603047245?s=20',
  },
  {
    id: 116,
    title: 'Berkenalan dengan Jaringan BASE, L2 ETH dengan volume degen tertinggi dan rumor launch token $BASE',
    platform: 'X',
    views: 0,
    likes: 0,
    shares: 0,
    link: 'https://x.com/0xRahvanaa/status/2048346131789426835?s=20',
  },
];

// Instagram Visual Content for Live Preview
export const instagramData = [
  {
    id: 1,
    shortcode: 'DZuLvHTGPrJ',
    title: 'Instagram Visual Design #1',
    link: 'https://www.instagram.com/p/DZuLvHTGPrJ/',
  },
  {
    id: 2,
    shortcode: 'DZ_38ABmAxJ',
    title: 'Instagram Visual Design #2',
    link: 'https://www.instagram.com/p/DZ_38ABmAxJ/',
  },
  {
    id: 3,
    shortcode: 'Dbf1onbGJuZ',
    title: 'Instagram Visual Design #3',
    link: 'https://www.instagram.com/p/Dbf1onbGJuZ/',
  },
  {
    id: 4,
    shortcode: 'Db2waFmmO2P',
    title: 'Instagram Creative Post #4',
    link: 'https://www.instagram.com/p/Db2waFmmO2P/',
  },
  {
    id: 5,
    shortcode: 'DcajERRmC8x',
    title: 'Instagram Creative Post #5',
    link: 'https://www.instagram.com/p/DcajERRmC8x/',
  },
  {
    id: 6,
    shortcode: 'DcoFol1mAM3',
    title: 'Instagram Creative Post #6',
    link: 'https://www.instagram.com/p/DcoFol1mAM3/',
  },
];

export const signpostLinks = [
  { title: 'Work', href: '#work', bg: '#93c5fd', text: '#1a1a2e', icon: '\u25C6' },
  { title: 'Experience', href: '#experience', bg: '#f97316', text: '#fff', icon: '\u2736' },
  { title: 'Skills', href: '#skills', bg: '#8b5cf6', text: '#fff', icon: '\u25C8' },
  { title: 'Articles', href: '#articles', bg: '#22c55e', text: '#fff', icon: '\u25CF' },
  { title: 'Instagram', href: '#instagram', bg: '#ec4899', text: '#fff', icon: '✦' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-aklilul-hikam-541019331/', bg: '#3b82f6', text: '#fff', icon: '\u2605', external: true },
  { title: 'X', href: 'https://x.com/0xRahvanaa', bg: '#ef4444', text: '#fff', icon: '\u2197', external: true },
];

// Highlight Feature: AI Agent Hermes Exploration
export const aiAgentHighlight = {
  badge: 'AUTONOMOUS WORKFLOWS',
  title: 'Eksplorasi AI Agent Menggunakan Hermes',
  titleEn: 'Autonomous AI Agent Exploration (Hermes)',
  subtitle: {
    id: 'Eksplorasi orkestrasi agent otonom untuk otomasi multi-task, scraping data cerdas, dan penyelesaian masalah teknis terstruktur.',
    en: 'Orchestrating autonomous agents for multi-step workflow automation, intelligent data extraction, and structured technical problem solving.',
  },
  capabilities: [
    {
      title: 'Agentic Loop & Autonomous Execution',
      desc: {
        id: 'Menjalankan agen cerdas untuk menyelesaikan tugas multi-tahap secara mandiri dengan loop observasi, rencana, dan tindakan terverifikasi.',
        en: 'Deploying autonomous agents to execute complex multi-step workflows with verified observe, plan, and act loops.',
      },
    },
    {
      title: 'Automated PoC & Security Recon',
      desc: {
        id: 'Pemanfaatan agen untuk recon reconnaissance awal, pembuatan skrip verifikasi celah, dan pembuatan laporan teknis Proof-of-Concept cepat.',
        en: 'Leveraging agentic workflows for initial target reconnaissance, vulnerability PoC scripting, and structured security reporting.',
      },
    },
    {
      title: 'Multi-Account Mass Automation',
      desc: {
        id: 'Integrasi agen untuk mengelola automasi platform, routing tugas paralel, dan penanganan alur interaksi terprogram.',
        en: 'Integrating agents to manage multi-account platform automation, parallel task routing, and programmatic workflows.',
      },
    },
  ],
  tags: [
    'Hermes Framework',
    'Autonomous Agent Loops',
    'Multi-Tool Use',
    'Automated Recon & PoC',
    'Headless Workflows',
    'Prompt Architecture',
  ],
};

// 8 Core Technical Arsenal Categories
export const skillsCategories = [
  {
    id: 'security',
    category: 'Bug Bounty / Security',
    categoryEn: 'Bug Bounty & Web Security',
    color: '#ef4444',
    badge: 'SECURITY',
    glyph: '[SEC]',
    description: {
      id: 'Pengujian keamanan web2 dan ekosistem web3, audit smart contract, dan penyusunan laporan temuan celah keamanan.',
      en: 'Web2 and Web3 security assessment, smart contract auditing, and structured vulnerability Proof-of-Concept reporting.',
    },
    skills: [
      'Web2 / Web3 Recon',
      'Smart Contract Audit',
      'SSRF / CORS / GraphQL',
      'XSS / SQLi Testing',
      'Burp-Style Testing',
      'PoC + Security Reporting',
    ],
  },
  {
    id: 'automation',
    category: 'Automation',
    categoryEn: 'Mass Automation & Bots',
    color: '#f97316',
    badge: 'AUTOMATION',
    glyph: '[AUTO]',
    description: {
      id: 'Otomasi alur kerja repetitif skala besar, bot terprogram, dan integrasi penanganan captcha.',
      en: 'High-throughput repetitive workflow automation, programmatic bot fleets, and automated verification solvers.',
    },
    skills: [
      'Telegram Mass Automation (Multi-Akun)',
      'Airdrop Bots & Scripts',
      'Captcha Solver Integration',
      'Headless Automation',
      'Webhook & API Triggers',
    ],
  },
  {
    id: 'coding',
    category: 'Coding & Dev',
    categoryEn: 'Full-Stack Web Engineering',
    color: '#2f63e6',
    badge: 'DEVELOPMENT',
    glyph: '[DEV]',
    description: {
      id: 'Pengembangan aplikasi web modern full-stack dengan performa tinggi, animasi interaktif, dan debugging mendalam.',
      en: 'Modern full-stack web engineering with clean architecture, interactive canvas animations, and systematic debugging.',
    },
    skills: [
      'Laravel (PHP)',
      'Next.js / React',
      'Chrome Extension Patching',
      'Deep Debugging & Dev-Workflow',
      'p5.js Interactive Canvas',
      'Animasi Web & WebGL',
    ],
  },
  {
    id: 'web3',
    category: 'Web3 & Blockchain',
    categoryEn: 'Web3 & On-Chain Forensics',
    color: '#8b5cf6',
    badge: 'ON-CHAIN',
    glyph: '[WEB3]',
    description: {
      id: 'Riset protokol on-chain, forensik transaksi dompet, pembuatan PoC Foundry, dan pengujian audit EVM/Solana.',
      en: 'On-chain protocol research, transaction forensics, Foundry PoC generation, and EVM/Solana ecosystem testing.',
    },
    skills: [
      'Crypto Agent Orchestration',
      'Solana / EVM Ecosystem Audit',
      'On-Chain Forensics',
      'Foundry PoC',
      'Smart Contract Exploration',
    ],
  },
  {
    id: 'content-seo',
    category: 'Content / SEO',
    categoryEn: 'Content Strategy & Technical SEO',
    color: '#10b981',
    badge: 'SEO & COPY',
    glyph: '[SEO]',
    description: {
      id: 'Penulisan artikel opini publik, strategi SEO pariwisata, dan penulisan organik bernuansa manusiawi bebas AI slop.',
      en: 'Published editorial essays, travel/hospitality SEO strategy, and authentic human-centered anti-AI-slop writing.',
    },
    skills: [
      'Mojok.co Writer',
      'IndonesiaHoliday & DreamHolidays',
      'Villa & Travel Sector SEO',
      'Humanizer & Anti-AI-Slop Writing',
      'Technical On-Page SEO',
    ],
  },
  {
    id: 'infra',
    category: 'Infra & DevOps',
    categoryEn: 'Infrastructure & Linux',
    color: '#0284c7',
    badge: 'INFRA',
    glyph: '[SYS]',
    description: {
      id: 'Konfigurasi pengamanan server mandiri (VPS), pengawasan jaringan, dan manajemen kontrol versi Git terstandar.',
      en: 'Self-hosted VPS hardening, security reconnaissance, and standardized Git version control workflows.',
    },
    skills: [
      'VPS Hardening',
      'Security Reconnaissance',
      'Git & GitHub Workflows',
      'Linux Server Administration',
      'Cloud Deployment & CI Basics',
    ],
  },
  {
    id: 'productivity',
    category: 'Productivity',
    categoryEn: 'Productivity Systems & Data',
    color: '#d97706',
    badge: 'WORKFLOW',
    glyph: '[DATA]',
    description: {
      id: 'Penyusunan basis data pengetahuan terstruktur, otomasi dokumen kerja, dan pemetaan data geografis.',
      en: 'Structured knowledge base systems, document automation workflows, and geographic data mapping.',
    },
    skills: [
      'Notion Databases',
      'Airtable & Sheets Systems',
      'Google Workspace',
      'PowerPoint Pitch Decks',
      'OCR & Document Extraction',
      'Obsidian & Digital PKM',
      'Maps & Geographic Data',
    ],
  },
  {
    id: 'media',
    category: 'Media & Creative',
    categoryEn: 'Visual Media & Assets',
    color: '#ec4899',
    badge: 'CREATIVE',
    glyph: '[MEDIA]',
    description: {
      id: 'Produksi aset grafis, infografis komunikatif, integrasi text-to-speech, dan kurasi aset visual digital.',
      en: 'Visual graphic production, communicative infographics, text-to-speech audio pipelines, and multimedia curation.',
    },
    skills: [
      'Desain Grafis & Vektor',
      'Infografis Edukatif',
      'Text-to-Speech (TTS) Pipeline',
      'Video Editing Basics',
      'Curated Media & Search Asset Sourcing',
    ],
  },
];
