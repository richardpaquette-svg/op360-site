/* ============================================
   JAVASCRIPT PARTAGÉ — OP360
   Navigation, scroll, animations
   ============================================ */

// ── Logo PNG ──────────────────────────────────
const LOGO_SVG    = `<img src="logo-white.png" alt="Operating Partners 360" class="logo-img">`;
const LOGO_SVG_SM = `<img src="logo-white.png" alt="Operating Partners 360" class="logo-img-sm">`;

const _SHARE_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`;
const _CHECK_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

// ── Navigation ────────────────────────────────
function buildNav(activePage) {
  const pages = [
    { href: "index.html",                 label: "Accueil" },
    { href: "equipe.html",                label: "Qui sommes-nous" },
    { href: "notre-differenciation.html", label: "Pourquoi OP360" },
    { href: "offres.html",                label: "Exemples" },
    { href: "diagnostic.html",            label: "Le diagnostic OP360" },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav id="navbar">
      <a href="index.html" class="nav-logo">
        ${LOGO_SVG}
      </a>
      <div class="nav-links" id="nav-links">${links}
        <div class="nav-cta-mobile">
          <a href="${OP360.entreprise.rdv}" target="_blank" rel="noopener" class="btn-secondary" style="font-size:14px;padding:13px 32px;">Planifier un RDV</a>
          <a href="contact.html" class="btn-primary" style="font-size:14px;padding:13px 32px;">Prendre contact</a>
        </div>
      </div>
      <div class="nav-ctas">
        <div class="nav-share-wrap">
          <button class="nav-share" id="nav-share-btn" aria-label="Partager cette page">${_SHARE_ICON}</button>
          <div class="nav-share-dropdown" id="nav-share-dropdown" hidden>
            <a href="#" id="nav-share-copy">📋 Copier le lien</a>
            <a href="#" id="nav-share-email">📧 Envoyer par email</a>
            <a href="#" id="nav-share-linkedin">💼 Partager sur LinkedIn</a>
          </div>
        </div>
        <a href="${OP360.entreprise.rdv}" target="_blank" rel="noopener noreferrer" class="nav-cta nav-cta--rdv">Planifier un RDV</a>
        <a href="contact.html" class="nav-cta">Nous contacter</a>
      </div>
      <button class="nav-burger" id="nav-burger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

  // Scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });

  initShareButton();
}

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const burger   = document.getElementById('nav-burger');
  const isOpen   = navLinks.classList.toggle('open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  const burger   = document.getElementById('nav-burger');
  if (!navLinks || !navLinks.classList.contains('open')) return;
  navLinks.classList.remove('open');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (e) => {
  const burger = document.getElementById('nav-burger');
  const nav    = document.getElementById('navbar');
  if (burger && nav && !nav.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#nav-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
});

// ── Footer ────────────────────────────────────
const LINKEDIN_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="flex-shrink:0;vertical-align:middle;margin-right:5px;position:relative;top:-1px"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;

function buildFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-inner" style="padding: 32px 0;">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">
              ${LOGO_SVG_SM}
            </a>
            <p class="footer-brand-tagline">
              Vous portez la Vision, la Stratégie et le Risque.<br>
              Nous accélérons et sécurisons l'Exécution.
            </p>
          </div>
          <div class="footer-col">
            <h4>Nos Offres</h4>
            <ul>
              <li><a href="diagnostic.html">Diagnostic OP360</a></li>
              <li><a href="shadow-codir.html">Shadow Codir</a></li>
              <li><a href="accompagnement.html">Accompagnement Terrain</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <ul style="margin-top: 38px;">
              <li><a href="due-diligence.html">Due Diligence Opérationnelle</a></li>
              <li><a href="formations.html">Formations</a></li>
              <li><a href="saas.html">Plateforme SaaS</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Pour qui</h4>
            <ul>
              <li><a href="dirigeants.html">Dirigeants PME &amp; ETI</a></li>
              <li><a href="investisseurs.html">Investisseurs &amp; Fonds</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>OP360</h4>
            <ul>
              <li><a href="equipe.html">Qui sommes-nous</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="${OP360.entreprise.linkedin}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center">${LINKEDIN_ICON}LinkedIn</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:${OP360.entreprise.email}">${OP360.entreprise.email}</a></li>
              <li><a href="tel:+33651721524">${OP360.entreprise.tel}</a></li>
              <li><a href="${OP360.entreprise.rdv}" target="_blank" rel="noopener">Planifier un RDV</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-mobile">
          <div class="footer-mobile-title">Navigation</div>
          <div class="footer-mobile-links">
            <a href="index.html">Accueil</a>
            <a href="pourqui.html">Pour qui</a>
            <a href="offres.html">Offres</a>
            <a href="diagnostic.html">Diagnostic</a>
            <a href="equipe.html">Équipe</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Operating Partners 360 — Tous droits réservés · ${OP360.entreprise.adresse}</span>
          <span>Valeurs <strong style="color:var(--cyan)">FIT</strong> — Fiabilité · Impact · Transmission</span>
          <span><a href="mentions.html">Mentions légales</a></span>
        </div>
      </div>
    </footer>`;
}

// ── Share Button ──────────────────────────────
function initShareButton() {
  const btn      = document.getElementById('nav-share-btn');
  const dropdown = document.getElementById('nav-share-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Mobile: use Web Share API if available
    if (navigator.share) {
      navigator.share({ title: document.title, url: location.href }).catch(() => {});
      return;
    }

    // Desktop: toggle dropdown
    const isHidden = dropdown.hasAttribute('hidden');
    if (isHidden) {
      dropdown.removeAttribute('hidden');
    } else {
      dropdown.setAttribute('hidden', '');
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown.hasAttribute('hidden') && !btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.setAttribute('hidden', '');
    }
  });

  // Copy link
  document.getElementById('nav-share-copy').addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(location.href).then(() => {
      const a = document.getElementById('nav-share-copy');
      const orig = a.innerHTML;
      a.innerHTML = `${_CHECK_ICON} Lien copié !`;
      setTimeout(() => { a.innerHTML = orig; dropdown.setAttribute('hidden', ''); }, 2000);
    });
  });

  // Email
  document.getElementById('nav-share-email').addEventListener('click', (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(document.title);
    const body    = encodeURIComponent(location.href);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    dropdown.setAttribute('hidden', '');
  });

  // LinkedIn
  document.getElementById('nav-share-linkedin').addEventListener('click', (e) => {
    e.preventDefault();
    const url = encodeURIComponent(location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,width=600,height=600');
    dropdown.setAttribute('hidden', '');
  });
}

// ── Scroll Reveal ─────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    const siblings = el.parentElement.querySelectorAll('.reveal');
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 0.08}s`;
    observer.observe(el);
  });

  document.querySelectorAll('.reveal-slide-right').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('.reveal-stagger').forEach((el, i) => {
    el.style.setProperty('--stagger-i', i);
    observer.observe(el);
  });

  document.querySelectorAll('.reveal-label').forEach(el => {
    observer.observe(el);
  });

  // Fallback : force .visible on any .reveal inside overflow-x containers
  // after 500 ms in case IntersectionObserver doesn't fire (Android Chrome)
  setTimeout(() => {
    document.querySelectorAll('.equipe-scroll-track .reveal, .temos-grid .reveal').forEach(el => {
      el.classList.add('visible');
    });
  }, 500);
}

// ── Compteurs animés ──────────────────────────
function animateCounter(el) {
  const target  = parseFloat(el.dataset.count);
  const suffix  = el.dataset.suffix  || '';
  const prefix  = el.dataset.prefix  || '';
  const decimal = el.dataset.decimal === 'true';
  const duration = 1400;
  const start   = performance.now();

  el.classList.add('count-animated', 'counting');

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = decimal
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);

    el.textContent = prefix + current + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = prefix + target + suffix;
      el.classList.remove('counting');
    }
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    counters.forEach(el => {
      el.textContent = (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = 'true';
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ── Barre cyan .diff-home-container ───────────
function initCyanBar() {
  const container = document.querySelector('.diff-home-container');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('bar-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}

// ── Init page ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCounters();
  initCyanBar();
});
