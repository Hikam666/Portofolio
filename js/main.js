'use strict';

// ================= 8-BIT RETRO SYNTH AUDIO (WEB AUDIO API) =================
const RetroAudio = {
    ctx: null,
    enabled: true,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
        }
    },
    playCoin() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    },
    playClick() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
    }
};

// ================= LOADER =================
(function initLoader() {
    const fill   = document.getElementById('loader-fill');
    const pctEl  = document.getElementById('loader-pct');
    const loader = document.getElementById('loader');
    let pct = 0;
    const tick = setInterval(() => {
        const step = pct < 70 ? 2.5 : pct < 90 ? 1.5 : 0.8;
        pct = Math.min(100, pct + step + Math.random() * 2);
        if (fill)  fill.style.width = pct + '%';
        if (pctEl) pctEl.textContent = Math.floor(pct);
        if (pct >= 100) {
            clearInterval(tick);
            setTimeout(() => {
                loader?.classList.add('out');
                initRevealObserver();
                initAbilityBars();
                initScrollProgress();
                initThreeAvatarToken();
                initLottieAnimations();
            }, 250);
        }
    }, 25);
})();

// ================= APP INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initMobileMenu();
    initLang();
    initScrollSpy();
    initFormHandler();
    initSfxButton();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});

function initSfxButton() {
    const btns = [document.getElementById('sfx-toggle'), document.getElementById('sfx-toggle-mob')];
    btns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            RetroAudio.init();
            RetroAudio.enabled = !RetroAudio.enabled;
            const label = RetroAudio.enabled ? 'SFX: ON' : 'SFX: OFF';
            const icon = RetroAudio.enabled ? 'volume-2' : 'volume-x';
            btns.forEach(b => {
                if (!b) return;
                b.classList.toggle('muted', !RetroAudio.enabled);
                b.innerHTML = `<i data-lucide="${icon}" style="width:16px;height:16px"></i> <span>${label}</span>`;
            });
            if (RetroAudio.enabled) RetroAudio.playClick();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });
    });
}

// ================= NAVIGATION =================
function initNav() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 25);
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

// ================= BILINGUAL SUPPORT =================
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
        ['lang-label', 'lang-label-mob'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = nextLabel;
        });

        renderExperience();
        renderCaseStudies();
        renderArticles();
        renderDesigns();
        if (typeof updateAvatarIdentityUI === 'function') updateAvatarIdentityUI(isAvatarFlipped);
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

// ================= TYPING TEXT EFFECT =================
function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    if (typingTimer) clearTimeout(typingTimer);

    const roles = translations[currentLang].roles;
    let ri = 0, ci = 0, del = false;

    const type = () => {
        const cur = roles[ri];
        let speed = 90;
        if (del) {
            el.textContent = cur.substring(0, --ci);
            speed = 45;
        } else {
            el.textContent = cur.substring(0, ++ci);
        }

        if (!del && ci === cur.length) {
            del = true;
            speed = 2000;
        } else if (del && ci === 0) {
            del = false;
            ri = (ri + 1) % roles.length;
            speed = 450;
        }
        typingTimer = setTimeout(type, speed);
    };
    type();
}

// ================= RENDER EXPERIENCE (QUEST LOG) =================
function renderExperience() {
    const grid = document.getElementById('experience-grid');
    if (!grid) return;

    grid.innerHTML = experienceData.map((item, i) => {
        const period = currentLang === 'id' ? item.period : item.period_en;
        const role = currentLang === 'id' ? item.role : item.role_en;
        const desc = currentLang === 'id' ? item.description : item.description_en;
        const accentClass = item.accent || 'blue';

        const linksHtml = (item.links && item.links.length > 0)
            ? `<div class="exp-links">
                ${item.links.map(l => `
                    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="exp-link-pill">
                        <i data-lucide="external-link" style="width:13px;height:13px;color:var(--pixel-cyan)"></i>
                        <span>${l.label}</span>
                    </a>
                `).join('')}
               </div>`
            : '';

        return `
        <div class="exp-card reveal-up" style="transition-delay:${i * 70}ms">
            <div class="exp-top">
                <div class="exp-role-wrap">
                    <h3 class="exp-role">${role}</h3>
                    <div class="exp-company">${item.company} &bull; <span style="color:var(--t3);font-size:0.85rem">${item.location}</span></div>
                </div>
                <span class="exp-period ${accentClass}">[ ${period} ]</span>
            </div>
            <p class="exp-desc">${desc}</p>
            ${linksHtml}
            <div class="exp-tags">
                ${item.tags.map(tag => `<span class="exp-tag">#${tag}</span>`).join('')}
            </div>
        </div>`;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.exp-card').forEach(el => obs.observe(el));
}

// ================= RENDER CASE STUDIES (MATCHES USER SCREENSHOT ACCORDION) =================
function renderCaseStudies() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    const t = translations[currentLang];

    grid.innerHTML = portfolioData.map((item, i) => {
        const cat = currentLang === 'id' ? item.category : (item.category_en || item.category);
        const desc = currentLang === 'id' ? item.description : (item.description_en || item.description);
        const num = (i + 1).toString().padStart(2, '0');
        const tagsHtml = (item.tags || ['Web3', 'Interactive']).map(tag => `<span class="project-tag">${tag}</span>`).join('');

        return `
        <div class="project-row" style="transition-delay:${i * 60}ms">
            <div class="project-title">
                <span class="project-name">${item.title}</span>
                <div class="project-meta">
                    <div class="project-indicator"></div>
                    <span class="project-category">${cat}</span>
                </div>
            </div>
            <div class="project-detail">
                <div class="project-detail-inner">
                    <div class="project-content">
                        <span class="project-number">${num}</span>
                        <p>${desc}</p>
                        <div class="project-tags">
                            ${tagsHtml}
                        </div>
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="cs-link">
                            <span>${t.open_project}</span>
                            <i data-lucide="arrow-up-right" style="width:15px;height:15px"></i>
                        </a>
                    </div>
                    <div class="project-image">
                        <img src="https://placehold.co/600x400/0f172a/38bdf8?text=${encodeURIComponent(item.title)}" alt="${item.title}" loading="lazy">
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Accordion interaction
    grid.querySelectorAll('.project-row').forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.closest('.cs-link')) return;
            const wasExpanded = row.classList.contains('expanded');
            grid.querySelectorAll('.project-row.expanded').forEach(r => r.classList.remove('expanded'));
            if (!wasExpanded) {
                row.classList.add('expanded');
                RetroAudio.playClick();
            }
        });
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.project-row').forEach(el => obs.observe(el));
}

// ================= RENDER ARTICLES =================
function renderArticles() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;
    const fmt = n => n === 0 ? '-' : new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(n);

    grid.innerHTML = metricsData.map((item, i) => {
        const platform = item.platform || 'X (Twitter)';
        const platformClass = platform.toLowerCase().includes('medium') ? 'medium' : platform.toLowerCase().includes('kompasiana') ? 'kompasiana' : 'x';

        return `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer"
           class="art-card reveal-up" style="transition-delay:${i * 30}ms">
            <div class="art-top">
                <span class="art-platform-badge ${platformClass}">${platform}</span>
                <i data-lucide="arrow-up-right" style="width:14px;height:14px;color:var(--t3)"></i>
            </div>
            <p class="art-title">${item.title}</p>
            <div class="art-stats">
                <div class="art-stat">
                    <i data-lucide="eye" style="width:14px;height:14px;color:var(--pixel-cyan)"></i>
                    <span>${fmt(item.views)}</span>
                </div>
                ${item.likes > 0 ? `<div class="art-stat"><i data-lucide="heart" style="width:14px;height:14px;color:var(--pixel-pink)"></i><span>${fmt(item.likes)}</span></div>` : ''}
                ${item.shares > 0 ? `<div class="art-stat"><i data-lucide="share-2" style="width:14px;height:14px;color:var(--pixel-green)"></i><span>${fmt(item.shares)}</span></div>` : ''}
            </div>
        </a>`;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });
    grid.querySelectorAll('.art-card').forEach(el => obs.observe(el));
}

// ================= RENDER DESIGNS (WITH INSTAGRAM EMBEDS) =================
function renderDesigns() {
    const grid = document.getElementById('designs-grid');
    if (!grid) return;
    const t = translations[currentLang];

    grid.innerHTML = designsData.map((item, i) => `
        <div class="ig-card reveal-up" style="transition-delay:${i * 70}ms">
            <div class="ig-card-header">
                <span class="ig-card-title">
                    <i data-lucide="instagram" style="width:16px;height:16px;color:var(--blue-bright)"></i>
                    <span>Desain #${i + 1}</span>
                </span>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="ig-ext-link">
                    <span>${t.open_link || 'Buka'}</span>
                    <i data-lucide="arrow-up-right" style="width:13px;height:13px"></i>
                </a>
            </div>
            <div class="ig-embed-wrap">
                <iframe src="https://www.instagram.com/p/${item.shortcode}/embed" class="ig-embed-iframe" frameborder="0" scrolling="no" allowtransparency="true" loading="lazy"></iframe>
            </div>
        </div>`
    ).join('');

    let moreContainer = document.getElementById('ig-more-container');
    if (!moreContainer) {
        moreContainer = document.createElement('div');
        moreContainer.id = 'ig-more-container';
        moreContainer.className = 'ig-more-container reveal-up';
        grid.parentElement.appendChild(moreContainer);
    }
    moreContainer.innerHTML = `
        <a href="https://www.instagram.com/hikam.182/" target="_blank" rel="noopener noreferrer" class="btn-ghost ig-more-btn">
            <i data-lucide="instagram" style="width:18px;height:18px;color:var(--blue-bright)"></i>
            <span>${t.designs_more_btn}</span>
            <i data-lucide="arrow-right" style="width:16px;height:16px"></i>
        </a>`;

    if (typeof lucide !== 'undefined') lucide.createIcons();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });
    grid.querySelectorAll('.ig-card').forEach(el => obs.observe(el));
    if (moreContainer) obs.observe(moreContainer);
}

// ================= THREE.JS 3D DUAL-IDENTITY AVATAR MEDALLION =================
let isAvatarFlipped = false;
let globalFlipTokenHandler = null;

function updateAvatarIdentityUI(flipped) {
    const t = translations[currentLang] || translations.id;
    const labelEl = document.getElementById('avatar-identity-label');
    const btnTextEl = document.getElementById('btn-flip-text');
    const tagReality = document.getElementById('tag-reality');
    const tagWeb3 = document.getElementById('tag-web3');

    if (labelEl) {
        labelEl.textContent = flipped ? t.token_web3 : t.token_reality;
    }
    if (btnTextEl) {
        btnTextEl.textContent = flipped ? t.btn_flip_to_reality : t.btn_flip_to_web3;
    }
    if (tagReality && tagWeb3) {
        tagReality.classList.toggle('active', !flipped);
        tagWeb3.classList.toggle('active', flipped);
    }
}

function initThreeAvatarToken() {
    const canvas = document.getElementById('three-avatar-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const container = canvas.parentElement;
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 330;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // World Group (for idle float & mouse parallax tilt)
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Token Group (the 3D coin medallion that flips around Y)
    const tokenGroup = new THREE.Group();
    worldGroup.add(tokenGroup);

    // 1. Procedural Fallback Texture Generator
    function createFallbackTexture(text, bgColor, textColor) {
        const c = document.createElement('canvas');
        c.width = 512;
        c.height = 512;
        const ctx = c.getContext('2d');
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 512, 512);
        ctx.fillStyle = textColor;
        ctx.font = 'bold 42px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 256, 256);
        const tex = new THREE.CanvasTexture(c);
        tex.needsUpdate = true;
        return tex;
    }

    const textureLoader = new THREE.TextureLoader();

    // Side A Texture: Real Photo
    const profileTexture = textureLoader.load(
        'assets/images/profile.jpg',
        () => { renderer.render(scene, camera); },
        undefined,
        () => {
            frontMesh.material.map = createFallbackTexture('REALITY', '#0b1329', '#38bdf8');
            frontMesh.material.needsUpdate = true;
        }
    );

    // Side B Texture: Web3 Avatar (0xRahvanaa)
    const web3Texture = textureLoader.load(
        'assets/images/avatar-web3.jpg',
        () => { renderer.render(scene, camera); },
        undefined,
        () => {
            backMesh.material.map = createFallbackTexture('0xRAHVANAA', '#17122b', '#facc15');
            backMesh.material.needsUpdate = true;
        }
    );

    const tokenRadius = 1.48;
    const tokenThickness = 0.18;

    // 2. Token Rim / Outer Cylinder
    const rimGeo = new THREE.CylinderGeometry(tokenRadius, tokenRadius, tokenThickness, 64, 1, false);
    const rimMat = new THREE.MeshStandardMaterial({
        color: 0x1e3a8a,
        emissive: 0x0f172a,
        metalness: 0.85,
        roughness: 0.25
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.rotation.x = Math.PI / 2;
    tokenGroup.add(rimMesh);

    // 3. Side A: Front Face (Real World Photo)
    const frontGeo = new THREE.CircleGeometry(tokenRadius * 0.96, 64);
    const frontMat = new THREE.MeshBasicMaterial({
        map: profileTexture,
        side: THREE.FrontSide
    });
    const frontMesh = new THREE.Mesh(frontGeo, frontMat);
    frontMesh.position.z = tokenThickness / 2 + 0.005;
    tokenGroup.add(frontMesh);

    // Front Bevel Border Ring (Cyber Blue)
    const frontRingGeo = new THREE.RingGeometry(tokenRadius * 0.90, tokenRadius * 0.98, 64);
    const frontRingMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x1d4ed8,
        metalness: 0.8,
        roughness: 0.3,
        side: THREE.DoubleSide
    });
    const frontRing = new THREE.Mesh(frontRingGeo, frontRingMat);
    frontRing.position.z = tokenThickness / 2 + 0.008;
    tokenGroup.add(frontRing);

    // 4. Side B: Back Face (Web3 Avatar 0xRahvanaa)
    const backGeo = new THREE.CircleGeometry(tokenRadius * 0.96, 64);
    const backMat = new THREE.MeshBasicMaterial({
        map: web3Texture,
        side: THREE.FrontSide
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -(tokenThickness / 2 + 0.005);
    backMesh.rotation.y = Math.PI; // Face backward so flipping 180° presents it right side up
    tokenGroup.add(backMesh);

    // Back Bevel Border Ring (Gold Arcade)
    const backRingMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        emissive: 0xca8a04,
        metalness: 0.85,
        roughness: 0.25,
        side: THREE.DoubleSide
    });
    const backRing = new THREE.Mesh(frontRingGeo, backRingMat);
    backRing.position.z = -(tokenThickness / 2 + 0.008);
    backRing.rotation.y = Math.PI;
    tokenGroup.add(backRing);

    // 5. Outer Beveled Torus Ring
    const torusGeo = new THREE.TorusGeometry(tokenRadius + 0.02, 0.035, 16, 64);
    const torusMat = new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        emissive: 0x1d4ed8,
        metalness: 0.9,
        roughness: 0.15
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    tokenGroup.add(torusMesh);

    // 6. Orbiting Pixel Shards & Star Diamonds
    const satellites = [];
    const satColors = [0x38bdf8, 0xfacc15, 0x60a5fa, 0x34d399];
    for (let i = 0; i < 4; i++) {
        const satGeo = (i % 2 === 0) 
            ? new THREE.OctahedronGeometry(0.12, 0)
            : new THREE.BoxGeometry(0.14, 0.14, 0.14);
        const satMat = new THREE.MeshStandardMaterial({
            color: satColors[i],
            emissive: satColors[i],
            metalness: 0.8,
            roughness: 0.2
        });
        const satMesh = new THREE.Mesh(satGeo, satMat);
        satMesh.userData = {
            angle: (i / 4) * Math.PI * 2,
            radiusX: 2.15,
            radiusY: 0.9,
            speed: 0.018 + i * 0.004,
            tilt: 0.35
        };
        worldGroup.add(satMesh);
        satellites.push(satMesh);
    }

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(4, 3, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xfacc15, 1.6);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x60a5fa, 2.0, 12);
    rimLight.position.set(0, 0, -4);
    scene.add(rimLight);

    // State Variables for Flip & Free Drag
    let targetRotationY = 0;
    let baseRotationY = 0;
    let dragRotX = 0;
    let dragRotY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let dragDistance = 0;

    function flipToken() {
        isAvatarFlipped = !isAvatarFlipped;
        baseRotationY += Math.PI;
        RetroAudio.playCoin();
        updateAvatarIdentityUI(isAvatarFlipped);
    }
    globalFlipTokenHandler = flipToken;

    // Connect Flip Button
    const flipBtn = document.getElementById('btn-flip-identity');
    if (flipBtn) {
        flipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            flipToken();
        });
    }

    // Mouse Tracking & Parallax Tilt
    container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

        if (!isDragging) {
            targetTiltY = x * 0.35;
            targetTiltX = -y * 0.25;
        }
    });

    container.addEventListener('mouseleave', () => {
        if (!isDragging) {
            targetTiltX = 0;
            targetTiltY = 0;
        }
    });

    container.addEventListener('mousedown', e => {
        isDragging = true;
        dragDistance = 0;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        dragRotY += deltaX * 0.012;
        dragRotX += deltaY * 0.01;
        dragRotX = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, dragRotX));
    });

    window.addEventListener('mouseup', e => {
        if (!isDragging) return;
        isDragging = false;

        // If it was a quick click without dragging, flip the coin!
        if (dragDistance < 6) {
            const rect = container.getBoundingClientRect();
            if (
                e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom
            ) {
                flipToken();
            }
        }
    });

    // Touch Support for Mobile
    container.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
            isDragging = true;
            dragDistance = 0;
            prevMouseX = e.touches[0].clientX;
            prevMouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener('touchmove', e => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;

        dragRotY += deltaX * 0.012;
        dragRotX += deltaY * 0.01;
        dragRotX = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, dragRotX));
    }, { passive: true });

    window.addEventListener('touchend', e => {
        if (!isDragging) return;
        isDragging = false;
        if (dragDistance < 10) {
            flipToken();
        }
    });

    // Initial Identity UI Setup
    updateAvatarIdentityUI(isAvatarFlipped);

    // Animation Render Loop
    let clock = new THREE.Clock();
    const animate = () => {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime();

        // Smoothly interpolate towards base target rotation
        targetRotationY += (baseRotationY - targetRotationY) * 0.08;

        // When not dragging, gently decay drag offsets back to 0
        if (!isDragging) {
            dragRotY += (0 - dragRotY) * 0.06;
            dragRotX += (0 - dragRotX) * 0.06;
        }

        // Apply rotation to the medallion
        tokenGroup.rotation.y = targetRotationY + dragRotY;
        tokenGroup.rotation.x = dragRotX;

        // Gentle idle floating & subtle hover tilt on the world group
        worldGroup.position.y = Math.sin(time * 1.6) * 0.06;
        worldGroup.rotation.y += (targetTiltY - worldGroup.rotation.y) * 0.05;
        worldGroup.rotation.x += (targetTiltX - worldGroup.rotation.x) * 0.05;

        // Orbiting satellites around the medallion
        satellites.forEach(sat => {
            sat.userData.angle += sat.userData.speed;
            const a = sat.userData.angle;
            sat.position.x = Math.cos(a) * sat.userData.radiusX;
            sat.position.y = Math.sin(a) * sat.userData.radiusY * Math.cos(sat.userData.tilt);
            sat.position.z = Math.sin(a) * sat.userData.radiusY * Math.sin(sat.userData.tilt);
            sat.rotation.x += 0.02;
            sat.rotation.y += 0.03;
        });

        renderer.render(scene, camera);
    };
    animate();

    // Responsive Canvas Resize
    const onResize = () => {
        width = container.clientWidth || 400;
        height = container.clientHeight || 330;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);
}

// ================= LOTTIE-WEB ANIMATION ENGINE =================
function initLottieAnimations() {
    if (typeof lottie === 'undefined') return;

    // 1. Pixel Gamepad Animation Data (Embed JSON for 100% offline & instant playback)
    const gamepadContainer = document.getElementById('lottie-gamepad');
    if (gamepadContainer) {
        const gamepadData = {
            v: "5.5.7", fr: 30, ip: 0, op: 60, w: 100, h: 100, nm: "Gamepad",
            layers: [
                {
                    ty: 4, nm: "Controller", ks: {
                        o: { a: 0, k: 100 },
                        p: { a: 1, k: [{ t: 0, s: [50, 50, 0] }, { t: 30, s: [50, 45, 0] }, { t: 60, s: [50, 50, 0] }] },
                        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 15, s: [-6] }, { t: 45, s: [6] }, { t: 60, s: [0] }] },
                        s: { a: 0, k: [100, 100, 100] }
                    },
                    shapes: [
                        { ty: "gr", it: [
                            { ty: "rc", s: { a: 0, k: [60, 36] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 6 } },
                            { ty: "fl", c: { a: 0, k: [0.15, 0.38, 0.92, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]},
                        { ty: "gr", it: [
                            { ty: "el", s: { a: 0, k: [10, 10] }, p: { a: 0, k: [16, -4] } },
                            { ty: "fl", c: { a: 0, k: [0.98, 0.8, 0.08, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]},
                        { ty: "gr", it: [
                            { ty: "el", s: { a: 0, k: [10, 10] }, p: { a: 0, k: [22, 6] } },
                            { ty: "fl", c: { a: 0, k: [0.22, 0.74, 0.97, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]},
                        { ty: "gr", it: [
                            { ty: "rc", s: { a: 0, k: [16, 5] }, p: { a: 0, k: [-16, 0] } },
                            { ty: "fl", c: { a: 0, k: [0.95, 0.98, 1, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]},
                        { ty: "gr", it: [
                            { ty: "rc", s: { a: 0, k: [5, 16] }, p: { a: 0, k: [-16, 0] } },
                            { ty: "fl", c: { a: 0, k: [0.95, 0.98, 1, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]}
                    ]
                }
            ]
        };

        lottie.loadAnimation({
            container: gamepadContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: gamepadData
        });
    }

    // 2. Pixel Trophy Animation in Abilities
    const trophyContainer = document.getElementById('lottie-trophy');
    if (trophyContainer) {
        const trophyData = {
            v: "5.5.7", fr: 30, ip: 0, op: 60, w: 60, h: 60, nm: "Trophy",
            layers: [
                {
                    ty: 4, nm: "Cup", ks: {
                        o: { a: 0, k: 100 },
                        p: { a: 0, k: [30, 30, 0] },
                        s: { a: 1, k: [{ t: 0, s: [100, 100] }, { t: 30, s: [112, 112] }, { t: 60, s: [100, 100] }] }
                    },
                    shapes: [
                        { ty: "gr", it: [
                            { ty: "rc", s: { a: 0, k: [22, 20] }, p: { a: 0, k: [0, -4] }, r: { a: 0, k: 3 } },
                            { ty: "fl", c: { a: 0, k: [0.98, 0.8, 0.08, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]},
                        { ty: "gr", it: [
                            { ty: "rc", s: { a: 0, k: [16, 5] }, p: { a: 0, k: [0, 10] }, r: { a: 0, k: 1 } },
                            { ty: "fl", c: { a: 0, k: [0.79, 0.54, 0.02, 1] }, o: { a: 0, k: 100 } },
                            { ty: "tr", p: { a: 0, k: [0, 0] } }
                        ]}
                    ]
                }
            ]
        };

        lottie.loadAnimation({
            container: trophyContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: trophyData
        });
    }
}

// ================= OBSERVERS & SCROLL PROGRESS =================
function initRevealObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal-up').forEach(el => obs.observe(el));
}

function initAbilityBars() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('.ab-fill').forEach(b => b.classList.add('on'));
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.25 });
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
    }, { threshold: 0.35 });
    secs.forEach(s => obs.observe(s));
}

function initScrollProgress() {
    const bar = document.getElementById('scrollBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = scrollPercent + '%';
    }, { passive: true });
}

// ================= FORM HANDLER =================
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
        RetroAudio.playClick();

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
                RetroAudio.playCoin();
                form.reset();
            } else {
                throw new Error();
            }
        } catch (err) {
            btn.classList.add('error');
            if (btnText) btnText.textContent = t.form_fail;
            const errorMsg = document.createElement('div');
            errorMsg.className = 'form-error-msg';
            errorMsg.style.cssText = 'color: #f43f5e; font-size: 0.85rem; margin-top: 10px; text-align: center; font-weight: 600; font-family:"Silkscreen",monospace;';
            errorMsg.textContent = 'Gagal mengirim pesan. Silakan hubungi via email atau media sosial langsung.';
            form.appendChild(errorMsg);
            setTimeout(() => errorMsg.remove(), 4000);
        } finally {
            setTimeout(() => {
                btn.disabled = false;
                btn.classList.remove('success', 'error');
                if (btnText) btnText.textContent = t.form_btn;
            }, 3500);
        }
    });
}
