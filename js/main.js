'use strict';

(function initLoader() {
    const fill   = document.getElementById('loader-fill');
    const pctEl  = document.getElementById('loader-pct');
    const loader = document.getElementById('loader');
    let pct = 0;
    const tick = setInterval(() => {
        const step = pct < 70 ? 2 : pct < 90 ? 1 : 0.5;
        pct = Math.min(100, pct + step + Math.random() * 1.5);
        if (fill)  fill.style.width = pct + '%';
        if (pctEl) pctEl.textContent = Math.floor(pct);
        if (pct >= 100) {
            clearInterval(tick);
            setTimeout(() => {
                loader?.classList.add('out');
                initRevealObserver();
                initAbilityBars();
            }, 300);
        }
    }, 30);
})();

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNav();
    initMobileMenu();
    initLang();
    initScrollSpy();
    initFormHandler();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});

function initCursor() {
    const cur = document.getElementById('cursor');
    if (!cur) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx, cy = my;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cur.style.left = mx + 'px';
        cur.style.top  = my + 'px';
    });

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
        cx = lerp(cx, mx, 0.14);
        cy = lerp(cy, my, 0.14);
        const ring = cur.querySelector('.cur-ring');
        if (ring) {
            ring.style.left = (cx - mx) + 'px';
            ring.style.top  = (cy - my) + 'px';
        }
        requestAnimationFrame(tick);
    };
    tick();

    document.addEventListener('mouseover', e => {
        if (e.target.closest('a,button,.chip')) {
            document.body.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest('a,button,.chip')) {
            document.body.classList.remove('cursor-hover');
        }
    });

    document.addEventListener('mousedown', () => cur.style.transform = 'translate(-50%,-50%) scale(0.7)');
    document.addEventListener('mouseup',   () => cur.style.transform = 'translate(-50%,-50%) scale(1)');
}

function initNav() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function initMobileMenu() {
    const menu   = document.getElementById('mobile-menu');
    const toggle = document.getElementById('menu-toggle');
    const close  = document.getElementById('close-menu');

    toggle?.addEventListener('click', () => menu?.classList.add('open'));
    close?.addEventListener('click',  () => menu?.classList.remove('open'));
    document.querySelectorAll('.mob-link').forEach(l =>
        l.addEventListener('click', () => menu?.classList.remove('open'))
    );
}

let currentLang = localStorage.getItem('lang') || 'id';
let typingTimer = null;

function initLang() {
    const apply = () => {
        const t = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute('data-i18n');
            if (t[k] !== undefined) el.innerHTML = t[k];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const k = el.getAttribute('data-i18n-ph');
            if (t[k] !== undefined) el.placeholder = t[k];
        });
        const nextLabel = currentLang === 'id' ? 'EN' : 'ID';
        ['lang-label','lang-label-mob'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = nextLabel;
        });
        renderPortfolio();
        renderArticles();
        initTyping();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    const toggle = () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('lang', currentLang);
        apply();
    };

    document.getElementById('lang-toggle')?.addEventListener('click', toggle);
    document.getElementById('lang-toggle-mob')?.addEventListener('click', toggle);
    apply();
}

function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    if (typingTimer) clearTimeout(typingTimer);

    const roles = translations[currentLang].roles;
    let ri = 0, ci = 0, del = false;

    const type = () => {
        const cur = roles[ri];
        let speed = 110;
        if (del) { el.textContent = cur.substring(0, --ci); speed = 55; }
        else      { el.textContent = cur.substring(0, ++ci); }

        if (!del && ci === cur.length) { del = true; speed = 2200; }
        else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; speed = 500; }

        typingTimer = setTimeout(type, speed);
    };
    type();
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    const t = translations[currentLang];

    grid.innerHTML = portfolioData.map((item, i) => {
        const isReverse = i % 2 !== 0;
        const cat = currentLang === 'id' ? item.category : (item.category_en || item.category);
        const desc = currentLang === 'id' ? item.description : (item.description_en || item.description);

        return `
        <div class="cs-item ${isReverse ? 'reverse' : ''}" style="transition-delay:${i * 80}ms">
            <div class="cs-mockup">
                <div class="cs-mockup-inner">
                    <div class="cs-screen">
                        <div class="cs-screen-bar">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="cs-screen-line w80"></div>
                        <div class="cs-screen-line w60"></div>
                        <div class="cs-screen-line w90"></div>
                        <div class="cs-screen-img">
                            <i data-lucide="${item.icon}" style="width:28px;height:28px;color:var(--blue-s);opacity:0.5"></i>
                        </div>
                        <div class="cs-screen-line w40" style="margin-top:0.6rem"></div>
                    </div>
                </div>
            </div>
            <div class="cs-text">
                <span class="cs-cat">${cat}</span>
                <h3 class="cs-project-title">${item.title}</h3>
                <p class="cs-desc">${desc}</p>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="cs-link">
                    ${t.open_project}
                    <i data-lucide="arrow-up-right" style="width:15px;height:15px"></i>
                </a>
            </div>
        </div>`;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.cs-item').forEach(el => obs.observe(el));
}

function renderArticles() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;
    const fmt = n => n === 0 ? '—' : new Intl.NumberFormat('en-US', { notation:'compact', maximumFractionDigits:1 }).format(n);

    grid.innerHTML = metricsData.map((item, i) => `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer"
           class="art-card" style="transition-delay:${i * 55}ms;display:flex;flex-direction:column;">
            <div class="art-bg-icon">
                <i data-lucide="file-text" style="width:52px;height:52px"></i>
            </div>
            <p class="art-title">${item.title}</p>
            <div class="art-stats">
                <div class="art-stat">
                    <i data-lucide="eye" style="width:13px;height:13px;color:var(--blue-s)"></i>
                    <span>${fmt(item.views)}</span>
                </div>
                ${item.likes > 0 ? `<div class="art-stat"><i data-lucide="heart" style="width:13px;height:13px;color:#f43f5e"></i><span>${fmt(item.likes)}</span></div>` : ''}
                ${item.shares > 0 ? `<div class="art-stat"><i data-lucide="share-2" style="width:13px;height:13px;color:#22c55e"></i><span>${fmt(item.shares)}</span></div>` : ''}
            </div>
        </a>`
    ).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    grid.querySelectorAll('.art-card').forEach(el => obs.observe(el));
}

function initRevealObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal-up,.reveal-right').forEach(el => obs.observe(el));
}

function initAbilityBars() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.ab-fill').forEach(b => b.classList.add('on'));
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    const panel = document.querySelector('.abilities-panel');
    if (panel) obs.observe(panel);
}

function initScrollSpy() {
    const secs  = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
            }
        });
    }, { threshold: 0.4 });
    secs.forEach(s => obs.observe(s));
}

function initFormHandler() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn     = document.getElementById('submit-btn');
        const btnText = document.getElementById('submit-text');
        const t       = translations[currentLang];

        const name    = document.getElementById('name')?.value.trim();
        const email   = document.getElementById('email')?.value.trim();
        const purpose = document.getElementById('purpose')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        if (!name || !email || !purpose) return;

        btn.disabled = true;
        if (btnText) btnText.textContent = t.form_sending;

        const fullMessage = [
            purpose ? `Keperluan: ${purpose}` : '',
            message ? `Pesan: ${message}` : ''
        ].filter(Boolean).join('\n');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message: fullMessage })
            });
            if (res.ok) {
                btn.classList.add('success');
                if (btnText) btnText.textContent = t.form_sent;
                form.reset();
            } else { throw new Error(); }
        } catch {
            btn.classList.add('error');
            if (btnText) btnText.textContent = t.form_fail;
        } finally {
            setTimeout(() => {
                btn.disabled = false;
                btn.classList.remove('success','error');
                if (btnText) btnText.textContent = t.form_btn;
            }, 3500);
        }
    });
}
