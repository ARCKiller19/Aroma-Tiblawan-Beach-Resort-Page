// ============================================================
// navbar.js — Global Navigation Module
// ============================================================

const Navbar = (() => {
  let menuOpen = false;

  function init() {
    renderNavbar();
    bindScroll();
    bindMobileToggle();
    setActiveLink();
  }

  function renderNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navbar = document.createElement('nav');
    navbar.id = 'navbar';
    navbar.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="${ResortData.identity.logo}" alt="Aroma Tiblawan Logo" />
          <span>Aroma Tiblawan<br><small style="font-size:0.7em;opacity:0.7;font-weight:300">Beach Resort</small></span>
        </a>

        <ul class="nav-links" id="nav-links">
          ${ResortData.nav.map(item => `
            <li>
              <a href="${item.href}"
                 class="${item.href === currentPage || (item.href === 'index.html' && currentPage === '') ? 'active' : ''}">
                ${item.label}
              </a>
            </li>
          `).join('')}
        </ul>

        <div class="nav-right">
          <a href="booking.html" class="btn btn-primary nav-book-btn">Book Now</a>
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;

    // Mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.innerHTML = `
      <ul>
        ${ResortData.nav.map(item => `
          <li><a href="${item.href}">${item.label}</a></li>
        `).join('')}
      </ul>
      <a href="booking.html" class="btn btn-primary mobile-book-btn">Book Now</a>
    `;

    document.body.prepend(mobileMenu);
    document.body.prepend(navbar);
  }

  function bindScroll() {
    const navbar = document.getElementById('navbar');
    const handler = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // initial check
  }

  function bindMobileToggle() {
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('#nav-hamburger');
      const menu = document.getElementById('mobile-menu');
      if (toggle) {
        menuOpen = !menuOpen;
        menu.classList.toggle('open', menuOpen);
        return;
      }
      // Close on outside click
      if (menuOpen && !e.target.closest('#mobile-menu')) {
        menuOpen = false;
        menu.classList.remove('open');
      }
    });
  }

  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (href === 'index.html' && currentPage === '')) {
        link.classList.add('active');
      }
    });
  }

  return { init };
})();
