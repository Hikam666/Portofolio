document.addEventListener('DOMContentLoaded', () => {
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
    const BOT_TOKEN = '8433536265:AAGjpxZ4nUYMVi7iWUwlQN8U4MVbXHLKElA'; 
    const CHAT_ID = '5729527250';

    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const originalText = btn.innerHTML;
        btn.innerHTML = "Sedang Mengirim...";
        btn.disabled = true;

        const text = `<b>📩 Pesan Baru dari Website</b>\n\n` +
                     `<b>Nama:</b> ${name}\n` +
                     `<b>Email:</b> ${email}\n\n` +
                     `<b>Isi Pesan:</b>\n<i>${message}</i>`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'HTML'
                })
            });

            if (response.ok) {
                btn.innerHTML = "Terkirim ✓";
                btn.classList.add('bg-green-600', 'text-white');
                contactForm.reset();
            } else {
                throw new Error('Gagal mengirim ke API');
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