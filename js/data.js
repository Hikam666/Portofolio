const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_projects: "Proyek",
        nav_contact: "Kontak",
        hero_badge: "Merangkai Ide, Merangkul Transformasi",
        hero_desc: "Membantu menciptakan ekosistem digital yang efisien melalui pemanfaatan teknologi.",
        btn_projects: "Lihat Proyek",
        btn_contact: "Hubungi Saya",
        about_title: "Tentang Saya",
        about_p1: "Halo! Saya adalah mahasiswa <strong>Sistem Informasi Bisnis</strong> di Politeknik Negeri Malang. Saya adalah seorang individu yang selalu penasaran dengan dunia teknologi dan strategi bisnis modern. Saya juga suka menulis, terutama tentang sesuatu yang saya minati.",
        about_p2: "Perjalanan saya di dunia digital dimulai dari ketertarikan pada pengembangan web, yang kemudian berkembang pesat saat saya mengenal ekosistem Web3 dan Cryptocurrency. Berawal dari eksplorasi di dunia airdrop, saya justru menemukan minat yang mendalam pada teknologi blockchain dan bagaimana desentralisasi dapat mengubah masa depan ekonomi digital.",
        info_name: "Nama Lengkap",
        info_age: "Usia",
        info_loc: "Lokasi",
        abilities_title: "Kemampuan",
        ability_sleep: "Adaptabilitas",
        ability_learn: "Belajar Hal Baru",
        ability_idea: "Mewujudkan Ide",
        ability_coffee: "Manajemen Waktu",
        ability_write: "Nulis",
        projects_title: "Proyek",
        projects_subtitle: "Arsip kontribusi dan eksperimen",
        contact_title: "Mari Berkolaborasi",
        contact_desc: "Terbuka untuk diskusi mengenai pengembangan Web3, riset Blockchain, atau peluang kolaborasi teknis lainnya.",
        form_name: "Nama",
        form_email: "Email",
        form_msg: "Pesan Anda...",
        form_btn: "Kirim Pesan",
        footer: "© 2026 Muhammad Aklilul Hikam. Hak cipta dilindungi.",
        open_project: "BUKA PROYEK",
        article_title: "Artikel <span class=\"text-gradient\">Saya</span>",
        article_subtitle: "Kumpulan tulisan dan opini",
        roles: ["Blockchain Enthusiast", "Mahasiswa", "Penjelajah Teknologi"]
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_badge: "Crafting Ideas, Embracing Transformation",
        hero_desc: "Helping create efficient digital ecosystems through technology utilization.",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",
        about_title: "About Me",
        about_p1: "Hello! I am a <strong>Business Information Systems</strong> student at State Polytechnic of Malang. I am an individual who is always curious about the world of technology and modern business strategies. I also love writing, especially about things I'm interested in.",
        about_p2: "My journey in the digital world began with an interest in web development, which then grew rapidly when I got to know the Web3 and Cryptocurrency ecosystems. Starting from exploration in the airdrop world, I found a deep interest in blockchain technology and how decentralization can change the future of the digital economy.",
        info_name: "Full Name",
        info_age: "Age",
        info_loc: "Location",
        abilities_title: "Abilities",
        ability_sleep: "Adaptability",
        ability_learn: "Learning New Things",
        ability_idea: "Realizing Ideas",
        ability_coffee: "Time Management",
        ability_write: "Writing",
        projects_title: "Projects",
        projects_subtitle: "Archive of contributions and experiments",
        contact_title: "Let's Collaborate",
        contact_desc: "Open to discussions regarding Web3 development, Blockchain research, or other technical collaboration opportunities.",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Your Message...",
        form_btn: "Send Message",
        footer: "© 2026 Muhammad Aklilul Hikam. All rights reserved.",
        open_project: "OPEN PROJECT",
        article_title: "My <span class=\"text-gradient\">Articles</span>",
        article_subtitle: "Collection of writings and opinions",
        roles: ["Blockchain Enthusiast", "Student", "Tech Explorer"]
    }
};

const portfolioData = [
  {
    id: 1,
    title: "BarbarianX DAO",
    category: "DAO Governance",
    category_en: "DAO Governance",
    description: "Platform komunitas BarbarianX DAO",
    description_en: "BarbarianX DAO community platform",
    link: "https://barbarian-x-dao.vercel.app/",
    icon: "users"
  },
  {
    id: 2,
    title: "IRyS Meteor Crash",
    category: "Mini-Game",
    category_en: "Mini-Game",
    description: "Mini-game Arcade Sederhana yang dikembangkan sebagai instrumen kampanye promosi dalam proyek Web3.",
    description_en: "Simple Arcade Mini-game developed as a promotional campaign instrument in a Web3 project.",
    link: "https://irys-meteor-crash.vercel.app/",
    icon: "gamepad-2"
  },
  {
    id: 3,
    title: "Arsip Hikam",
    category: "Digital Archive",
    category_en: "Digital Archive",
    description: "Platform arsip digital dan landing page personal untuk publikasi tulisan saya.",
    description_en: "Digital archive platform and personal landing page for my writing publications.",
    link: "https://arsip-hikam.vercel.app/",
    icon: "book-open"
  },
  {
    id: 4,
    title: "Kalkulator Simulasi Investasi dan Inflasi",
    category: "Digital Tool",
    category_en: "Digital Tool",
    description: "Kalkulator untuk mensimulasikan investasi dan inflasi secara interaktif.",
    description_en: "Calculator to simulate investment and inflation interactively.",
    link: "https://kalkulator-simulasi.vercel.app/",
    icon: "calculator"
  },
  {
    id: 5,
    title: "Katalog TStore",
    category: "Website E-Commerce",
    category_en: "E-Commerce Website",
    description: "Katalog produk untuk toko product digital dengan tema Breaking Bad.",
    description_en: "Product catalog for a digital product store with a Breaking Bad theme.",
    link: "https://katalog-tstore.vercel.app/",
    icon: "shopping-bag"
  }
];

const metricsData = [
  {
    id: 101,
    title: "Memahami Scarcity: Mengapa Rencana Thanos Justru Menghancurkan Ekonomi",
    views: 4900,
    likes: 30,
    shares: 15,
    type: 'article',
    link: "https://x.com/0xRahvanaa/status/2015782815124819979?s=20"
  },
  {
    id: 104,
    title: "Memahami Ekonomi lewat The Last of Us",
    views: 119,
    likes: 11,
    shares: 9,
    type: 'article',
    link: "https://x.com/0xRahvanaa/status/2019439347901297057?s=20"
  },
  {
    id: 105,
    title: "Kapitalis Lu!: Mengenal Kapitalisme Lewat Ambisi Mr. Krabs",
    views: 2300,
    likes: 0,
    shares: 0,
    type: 'article',
    link: "https://x.com/0xRahvanaa/status/2020466307813036159?s=20"
  },
  {
    id: 107,
    title: "Mikroekonomi: Versi Close-Up dari Dunia Ekonomi",
    views: 300,
    likes: 8,
    shares: 5,
    type: 'article',
    link: "https://x.com/0xRahvanaa/status/2023610841883701654?s=20"
  },
  {
    id: 109,
    title: "Bank Run: Ketika Semua Orang Pengen \"Putus\" Sama Bank",
    views: 800,
    likes: 0,
    shares: 0,
    type: 'article',
    link: "https://x.com/0xRahvanaa/status/2025571775556591784?s=20"
  },
  
];