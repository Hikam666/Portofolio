document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initSkillBars();
    initArticleMetrics();
    initLanguage();
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileMenu) {
        menuToggle.onclick = () => mobileMenu.classList.remove('translate-x-full');
        closeMenu.onclick = () => mobileMenu.classList.add('translate-x-full');
        mobileLinks.forEach(link => {
            link.onclick = () => mobileMenu.classList.add('translate-x-full');
        });
    }

    initFormHandler();
    initScrollObserver();
});

let currentLang = localStorage.getItem('lang') || 'id';
let typingInterval;

function initLanguage() {
    const btnDesktop = document.getElementById('lang-toggle-desktop');
    const btnMobile = document.getElementById('lang-toggle-mobile');

    const updateContent = () => {
        const t = translations[currentLang];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerHTML = t[key];
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (t[key]) el.placeholder = t[key];
        });

        renderPortfolio();
        initTypingEffect();
        
        const articleTitle = document.getElementById('article-title');
        const articleSubtitle = document.getElementById('article-subtitle');
        if(articleTitle) articleTitle.innerHTML = t.article_title;
        if(articleSubtitle) articleSubtitle.textContent = t.article_subtitle;

        const label = currentLang === 'id' ? 'EN' : 'ID';
        const btnContent = `<i data-lucide="languages" class="w-3.5 h-3.5"></i><span>${label}</span>`;
        
        if(btnDesktop) btnDesktop.innerHTML = btnContent;
        if(btnMobile) btnMobile.innerHTML = btnContent;
        
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    const toggle = () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('lang', currentLang);
        updateContent();
    };
    if(btnDesktop) {
        btnDesktop.onclick = toggle;
        btnDesktop.classList.add('flex', 'items-center', 'gap-2');
    }
    if(btnMobile) {
        btnMobile.onclick = toggle;
        btnMobile.classList.add('flex', 'items-center', 'gap-2');
    }

    updateContent();
}

function initTypingEffect() {
    const target = document.getElementById('typing-text');
    if (!target) return;
    
    if (window.typingTimeout) clearTimeout(window.typingTimeout);

    const roles = translations[currentLang].roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    target.classList.add('typing-cursor');

    function type() {
        const currentRole = roles[roleIndex];
        let typeSpeed = 100;

        if (isDeleting) {
            target.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            target.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; 
        }

        window.typingTimeout = setTimeout(type, typeSpeed);
    }
    type();
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid || typeof portfolioData === 'undefined') return;

    const t = translations[currentLang];

    grid.innerHTML = portfolioData.map((item, index) => `
        <div class="portfolio-card fade-up group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300" style="transition-delay: ${index * 150}ms">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i data-lucide="${item.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2 block">${currentLang === 'id' ? item.category : (item.category_en || item.category)}</span>
            <h3 class="text-xl font-bold text-white mb-4 transition-colors">${item.title}</h3>
            <p class="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-light">${currentLang === 'id' ? item.description : (item.description_en || item.description)}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-white hover:gap-3 transition-all duration-300">
                ${t.open_project} <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </a>
        </div>
    `).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    grid.querySelectorAll('.portfolio-card').forEach(el => observer.observe(el));
}
function initArticleMetrics() {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection || typeof metricsData === 'undefined') return;

    let section = document.getElementById('articles-section');
    if (!section) {
        section = document.createElement('section');
        section.id = 'articles-section';
        section.className = portfolioSection.className;
        section.innerHTML = `
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16 fade-up">
                    <h2 id="article-title" class="section-heading mb-4"></h2>
                    <p id="article-subtitle" class="text-slate-500 uppercase tracking-widest text-xs font-semibold"></p>
                </div>
                <div id="metrics-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
            </div>
        `;
        portfolioSection.after(section);
    }
    
    const grid = document.getElementById('metrics-grid');
    const formatNum = (n) => new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(n);
    grid.innerHTML = metricsData.map((item, i) => `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="metric-card fade-up" style="transition-delay: ${i * 100}ms; text-decoration: none;">
            <div class="absolute top-4 right-4 opacity-10">
                <i data-lucide="${item.type === 'tweet' ? 'twitter' : 'file-text'}" class="w-16 h-16"></i>
            </div>
            <h3 class="text-lg font-bold text-white z-10 mb-8 pr-8 leading-snug">${item.title}</h3>
            
            <div class="mt-auto flex items-center gap-6 z-10 border-t border-white/5 pt-4">
                <div class="metric-stat-item" title="Views">
                    <i data-lucide="eye" class="w-4 h-4 text-blue-400"></i>
                    <span class="font-mono">${formatNum(item.views)}</span>
                </div>
                <div class="metric-stat-item" title="Likes">
                    <i data-lucide="heart" class="w-4 h-4 text-pink-500"></i>
                    <span class="font-mono">${formatNum(item.likes)}</span>
                </div>
                <div class="metric-stat-item" title="${item.type === 'tweet' ? 'Retweets' : 'Shares'}">
                    <i data-lucide="${item.type === 'tweet' ? 'repeat' : 'share-2'}" class="w-4 h-4 text-green-400"></i>
                    <span class="font-mono">${formatNum(item.shares)}</span>
                </div>
            </div>
        </a>
    `).join('');
}

function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width') || bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.skill-progress').forEach(bar => {
        if (!bar.getAttribute('data-width')) {
            bar.setAttribute('data-width', bar.style.width);
        }
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for(let i=0; i<100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            l: Math.random() * 20 + 10,
            v: Math.random() * 10 + 10
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(174, 216, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        particles.forEach(p => {
            p.y += p.v;
            if(p.y > canvas.height) {
                p.y = -p.l;
                p.x = Math.random() * canvas.width;
            }
            
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y + p.l);
        });
        ctx.stroke();
        requestAnimationFrame(animate);
    }
    animate();
}

function initFormHandler() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const originalText = btn.innerHTML;
        btn.innerHTML = "Sedang Mengirim...";
        btn.disabled = true;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                btn.innerHTML = "Terkirim ✓";
                btn.classList.add('bg-green-600', 'text-white');
                contactForm.reset();
            } else {
                throw new Error('Gagal mengirim');
            }
        } catch (error) {
            btn.innerHTML = "Gagal Mengirim!";
            btn.classList.add('bg-red-600', 'text-white');
        } finally {
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('bg-green-600', 'bg-red-600');
            }, 3000);
        }
    };
}

function initScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, section, .info-card, .portfolio-card').forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
}