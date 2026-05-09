// ============================================================
// main.js — Page Bootstrap & Shared Utilities
// ============================================================
// Inside scripts/main.js

function injectMessengerChat() {
  // 1. Create the required FB Root div
  const fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);

  // 2. Create the Customer Chat div
  const chatPlugin = document.createElement('div');
  chatPlugin.className = 'fb-customerchat';
  chatPlugin.setAttribute('attribution', 'biz_inbox');
  chatPlugin.setAttribute('page_id', '101653795811386'); // Replace with your Page ID
  document.body.appendChild(chatPlugin);

  // 3. Inject the Facebook SDK Script
  const script = document.createElement('script');
  script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

// Make sure to call this function when the page initializes!
document.addEventListener('DOMContentLoaded', () => {
  injectMessengerChat();
});
// ── Format currency (PHP) ────────────────────────────────
function formatPHP(amount) {
  return `PHP ${Number(amount).toLocaleString('en-PH')}`;
}

// ── Scroll Reveal (Intersection Observer) ────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Messenger FAB ─────────────────────────────────────────
function renderMessengerFab() {
  const fab = document.createElement('a');
  fab.id = 'messenger-fab';
  fab.href = ResortData.identity.messengerLink;
  fab.target = '_blank';
  fab.rel = 'noopener noreferrer';
  fab.setAttribute('aria-label', 'Chat on Facebook Messenger');
  fab.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.919 1.442 5.527 3.705 7.246v3.511l3.39-1.866C10.014 20.369 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm1.21 12.47L10.8 11.79l-4.9 2.84 5.39-5.72 2.46 2.68 4.87-2.84-5.41 5.72z"/>
    </svg>
  `;
  document.body.appendChild(fab);
}

// ── Render Footer ─────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${ResortData.images.logo}" alt="Aroma Tiblawan Logo" />
          <p>${ResortData.identity.tagline}<br>${ResortData.identity.subtagline}</p>
          <p style="margin-top:0.75rem;font-size:0.8rem;">📍 ${ResortData.identity.location}</p>
        </div>

        <div class="footer-col">
          <div class="footer-col-title">Navigation</div>
          <ul>
            ${ResortData.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
          </ul>
        </div>

        <div class="footer-col">
          <div class="footer-col-title">Contact Us</div>
          <ul>
            ${ResortData.identity.contacts.map(c => `
              <li><a href="tel:${c}">📞 ${c}</a></li>
            `).join('')}
            <li><a href="${ResortData.identity.facebookPage}" target="_blank" rel="noopener">💬 Message on Facebook</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-bottom-logo">&copy; ${new Date().getFullYear()} Aroma Tiblawan Beach Resort. All rights reserved.</span>
        <span>Governor Generoso, Davao Oriental 🌊</span>
      </div>
    </div>
  `;
}

// ── Page Init ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();
  SocialProofToast.init();
  renderMessengerFab();
  renderFooter();
  initReveal();

  // Page-specific inits (each page defines its own PageInit)
  if (typeof PageInit === 'function') {
    PageInit();
  }
});
