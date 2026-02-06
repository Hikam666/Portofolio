document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initThemeToggle();
    initParticles();
    initSkillBars();
    initArticleMetrics();
    initCursorFollower();
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    renderPortfolio();
    initTypingEffect();
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

function initCursorFollower() {
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
        follower.style.opacity = '1';
    });
}

function initTypingEffect() {
    const target = document.getElementById('typing-text');
    if (!target) return;

    const roles = ["Blockchain Enthusiast", "Student", "Tech Explorer"];
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

        setTimeout(type, typeSpeed);
    }
    type();
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid || typeof portfolioData === 'undefined') return;

    grid.innerHTML = portfolioData.map((item, index) => `
        <div class="portfolio-card fade-up" style="transition-delay: ${index * 150}ms">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-all duration-300">
                <i data-lucide="${item.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2 block">${item.category}</span>
            <h3 class="text-xl font-bold text-white mb-4 transition-colors">${item.title}</h3>
            <p class="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-light">${item.description}</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-xs font-bold text-white hover:gap-3 transition-all duration-300">
                BUKA PROYEK <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </a>
        </div>
    `).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
function initArticleMetrics() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid || typeof metricsData === 'undefined') return;

    const section = document.createElement('section');
    section.className = portfolioGrid.parentElement.className;
    section.innerHTML = `
        <h2 class="section-heading text-center mt-12 mb-12 fade-up">My <span class="text-gradient">Article</span></h2>
        <div id="metrics-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    `;
    portfolioGrid.parentElement.after(section);
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

    for(let i=0; i<30; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            d: Math.random() * Math.PI * 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'; 
        
        particles.forEach(p => {
            p.x += Math.cos(p.d) * 0.2;
            p.y += Math.sin(p.d) * 0.2;
            if(p.x < 0) p.x = canvas.width;
            if(p.x > canvas.width) p.x = 0;
            if(p.y < 0) p.y = canvas.height;
            if(p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
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

function initLoader() {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.head.appendChild(script);
    const loader = document.createElement('div');
    loader.id = 'loader-container';
    loader.innerHTML = `
        <lottie-player 
            src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json" 
            background="transparent" 
            speed="1" 
            style="width: 300px; height: 300px;" 
            loop 
            autoplay>
        </lottie-player>
    `;
    document.body.prepend(loader);
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => loader.remove(), 500);
        }, 2000); 
    });
}

function initThemeToggle() {
    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.innerHTML = '<i data-lucide="sun" class="w-6 h-6"></i>';
    btn.setAttribute('aria-label', 'Ganti Tema');
    document.body.appendChild(btn);

    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        btn.innerHTML = '<i data-lucide="moon" class="w-6 h-6"></i>';
    }

    btn.onclick = () => {
        const isLight = html.getAttribute('data-theme') === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        
        html.setAttribute('data-theme', isLight ? '' : 'light');
        if (isLight) html.removeAttribute('data-theme');
        
        localStorage.setItem('theme', newTheme);
        btn.innerHTML = isLight ? '<i data-lucide="sun" class="w-6 h-6"></i>' : '<i data-lucide="moon" class="w-6 h-6"></i>';
        
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}