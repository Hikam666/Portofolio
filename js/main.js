document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initThemeToggle();
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
    
    const text = "Selamat datang di portofolio saya.";
    let i = 0;
    target.innerHTML = "";
    target.classList.add('typing-cursor');

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    setTimeout(type, 1000);
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
            // Mengirim ke API internal kita di Vercel
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
    // 1. Inject Lottie Player Script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.head.appendChild(script);

    // 2. Create Loader Container
    const loader = document.createElement('div');
    loader.id = 'loader-container';
    // Menggunakan animasi Tech/Blue yang sesuai tema
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

    // 3. Hide loader when window loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => loader.remove(), 500);
        }, 2000); // Minimal tampil 2 detik agar animasi terlihat
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
    
    // Apply saved theme
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