/* ============================================
   JAVASCRIPT PARTAGÉ — OP360
   Navigation, scroll, animations
   ============================================ */

// ── Logo SVG ──────────────────────────────────
const LOGO_SVG = `<svg class="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="5" r="4" fill="#00d4aa"/>
  <circle cx="33" cy="12" r="3.5" fill="#4ecdc4"/>
  <circle cx="37" cy="26" r="3" fill="#7b68ee"/>
  <circle cx="28" cy="36" r="3" fill="#9b59b6"/>
  <circle cx="12" cy="36" r="3" fill="#e74c3c"/>
  <circle cx="3" cy="26" r="3" fill="#f39c12"/>
  <circle cx="7" cy="12" r="3.5" fill="#27ae60"/>
</svg>`;

const LOGO_SVG_SM = `<svg class="logo-svg-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="5" r="4" fill="#00d4aa"/>
  <circle cx="33" cy="12" r="3.5" fill="#4ecdc4"/>
  <circle cx="37" cy="26" r="3" fill="#7b68ee"/>
  <circle cx="28" cy="36" r="3" fill="#9b59b6"/>
  <circle cx="12" cy="36" r="3" fill="#e74c3c"/>
  <circle cx="3" cy="26" r="3" fill="#f39c12"/>
  <circle cx="7" cy="12" r="3.5" fill="#27ae60"/>
</svg>`;

// ── Navigation ────────────────────────────────
function buildNav(activePage) {
  const pages = [
    { href: "index.html", label: "Accueil" },
    { href: "equipe.html", label: "Qui sommes-nous" },
    { href: "offres.html", label: "Notre approche" },
    { href: "offres.html", label: "Nos offres" },
    { href: "contact.html", label: "Nous contacter" },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav id="navbar">
      <a href="index.html" class="nav-logo">
        ${LOGO_SVG}
        <span class="nav-logo-text">Operating Partners <em>360</em></span>
      </a>
      <div class="nav-links" id="nav-links">${links}</div>
      <a href="${OP360.entreprise.rdv}" class="nav-cta" target="_blank">Diagnostic Flash</a>
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
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">
              ${LOGO_SVG_SM}
              <span>Operating Partners <em>360</em></span>
            </a>
            <p class="footer-brand-tagline">
              Vous portez la Vision, la Stratégie et le Risque.<br>
              Nous accélérons et sécurisons l'Exécution.<br><br>
              ${OP360.entreprise.adresse}
            </p>
          </div>
          <div class="footer-col">
            <h4>Nos Offres</h4>
            <ul>
              <li><a href="diagnostic.html">Diagnostic Flash</a></li>
              <li><a href="offres.html">Shadow Codir</a></li>
              <li><a href="offres.html">Accompagnement Terrain</a></li>
              <li><a href="offres.html">Due Diligence Opérationnelle</a></li>
              <li><a href="offres.html">Formations & Workshops</a></li>
              <li><a href="offres.html">Plateforme SaaS</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Pour qui</h4>
            <ul>
              <li><a href="pourqui.html#pme">Dirigeants de PME</a></li>
              <li><a href="pourqui.html#eti">Dirigeants d'ETI</a></li>
              <li><a href="pourqui.html#invest">Investisseurs & Fonds</a></li>
            </ul>
            <h4 style="margin-top:24px">OP360</h4>
            <ul>
              <li><a href="equipe.html">Qui sommes-nous</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="${OP360.entreprise.linkedin}" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:${OP360.entreprise.email}">${OP360.entreprise.email}</a></li>
              <li><a href="tel:+33651721524">${OP360.entreprise.tel}</a></li>
              <li><a href="https://operating360.com">operating360.com</a></li>
              <li><a href="${OP360.entreprise.rdv}" target="_blank">Prendre RDV</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Operating Partners 360 — Tous droits réservés</span>
          <span>Valeurs <strong style="color:var(--cyan)">FIT</strong> — Fiabilité · Impact · Transmission</span>
          <span><a href="mentions.html">Mentions légales</a></span>
        </div>
      </div>
    </footer>`;
}

// ── Scroll Reveal ─────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    const siblings = el.parentElement.querySelectorAll('.reveal');
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 0.08}s`;
    observer.observe(el);
  });
}

// ── Init page ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});
