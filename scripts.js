/* ============================================
   JAVASCRIPT PARTAGÉ — OP360
   Navigation, scroll, animations
   ============================================ */

// ── Logo PNG ──────────────────────────────────
const LOGO_SVG    = `<img src="logo-white.png" alt="Operating Partners 360" class="logo-img">`;
const LOGO_SVG_SM = `<img src="logo-white.png" alt="Operating Partners 360" class="logo-img-sm">`;

// ── Navigation ────────────────────────────────
function buildNav(activePage) {
  const pages = [
    { href: "index.html", label: "Accueil" },
    { href: "equipe.html", label: "Qui sommes-nous" },
    { href: "offres.html", label: "Nos offres" },
    { href: "notre-differenciation.html", label: "Notre différenciation" },
    { href: "diagnostic.html", label: "Le diagnostic OP360" },
    { href: "formations.html", label: "Nos formations" },
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
          <a href="contact.html" class="btn-primary" style="font-size:14px;padding:13px 32px;">Prendre contact</a>
        </div>
      </div>
      <a href="#contact" class="nav-cta">Nous contacter</a>
      <button class="nav-burger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

  // Scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });
}

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ── Footer ────────────────────────────────────
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
              <li><a href="diagnostic.html">Diagnostic Flash</a></li>
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
              <li><a href="pme.html">Dirigeants de PME</a></li>
              <li><a href="eti.html">Dirigeants d'ETI</a></li>
              <li><a href="investisseurs.html">Investisseurs & Fonds</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>OP360</h4>
            <ul>
              <li><a href="equipe.html">Qui sommes-nous</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="${OP360.entreprise.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:${OP360.entreprise.email}">${OP360.entreprise.email}</a></li>
              <li><a href="tel:+33651721524">${OP360.entreprise.tel}</a></li>
              <li><a href="${OP360.entreprise.rdv}" target="_blank" rel="noopener">Prendre RDV</a></li>
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

// ── Scroll Reveal ─────────────────────────────
// Gère 4 classes :
//   .reveal            → fade-up 22px générique (inchangé)
//   .reveal-slide-right → translateX(60px) — stat choc
//   .reveal-stagger    → fade-up 18px en cascade — moment-cards (--stagger-i)
//   .reveal-label      → fade-up 8px très subtil — section-label
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  // Générique fade-up
  document.querySelectorAll('.reveal').forEach((el, i) => {
    const siblings = el.parentElement.querySelectorAll('.reveal');
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 0.08}s`;
    observer.observe(el);
  });

  // Slide depuis la droite (stat choc)
  document.querySelectorAll('.reveal-slide-right').forEach(el => {
    observer.observe(el);
  });

  // Stagger cascade (moment-cards) — délai calculé par index
  document.querySelectorAll('.reveal-stagger').forEach((el, i) => {
    el.style.setProperty('--stagger-i', i);
    observer.observe(el);
  });

  // Labels subtils
  document.querySelectorAll('.reveal-label').forEach(el => {
    observer.observe(el);
  });
}

// ── Init page ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});
