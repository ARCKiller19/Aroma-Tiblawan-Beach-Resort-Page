// ============================================================
// social-proof-toast.js — "Hanging Order Slip" Component
//
// Upgraded with Dynamic Alignment (Hangs next to Book Now button)
// ============================================================

const SocialProofToast = (() => {

  // ──────────────────────────────────────────────────────────
  // 1. INJECT ALL CSS INTO <head> ONCE
  // ──────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('slip-styles')) return;

    const css = /* css */`
      /* ── Outer wrapper ── */
      #slip-wrapper {
        position: fixed; top: -460px; right: 180px; z-index: 99999;
        width: 176px; display: flex; flex-direction: column; align-items: center;
        pointer-events: none; transform-origin: top center;
        transition: top 0.72s cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: top, transform;
      }

      /* ── MOBILE RESPONSIVENESS ── */
      @media (max-width: 768px) { 
        #slip-wrapper { 
          right: auto !important; 
          left: 16px !important; /* Moves to top-left on phones to avoid the hamburger menu */
        } 
      }

      /* ── Hardware Elements ── */
      #slip-nail { width: 10px; height: 10px; border-radius: 50%; background: radial-gradient(circle at 35% 28%, #f0ece4 0%, #c8c0b0 40%, #8a8070 80%, #5a5448 100%); box-shadow: 0 2px 5px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.6); flex-shrink: 0; position: relative; z-index: 2; }
      #slip-string { flex-shrink: 0; width: 2px; height: 46px; background: repeating-linear-gradient(180deg, #9a8e7a 0px, #c8bca8 4px, #7a7060 8px, #b0a490 12px, #9a8e7a 16px); clip-path: polygon(-50% 0%, 150% 0%, 110% 100%, -10% 100%); box-shadow: 1px 0 3px rgba(0,0,0,0.18); position: relative; }
      #slip-crimp { flex-shrink: 0; width: 8px; height: 7px; border-radius: 2px; background: linear-gradient(135deg, #d8d4cc 0%, #a8a49c 50%, #d0ccc4 100%); box-shadow: 0 1px 3px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.5); position: relative; z-index: 2; margin: -1px 0; }
      #slip-string-lower { flex-shrink: 0; width: 1.5px; height: 18px; background: repeating-linear-gradient(180deg, #9a8e7a 0px, #c8bca8 3px, #7a7060 6px, #9a8e7a 9px); box-shadow: 1px 0 2px rgba(0,0,0,0.15); }

      /* ── Paper Card ── */
      #slip-card {
        width: 176px; border-radius: 5px 5px 0 0; position: relative; overflow: visible;
        background-color: #fdfaf4; background-image: repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(0,0,0,0.028) 19px, rgba(0,0,0,0.028) 20px);
        box-shadow: 0 6px 28px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95), inset -1px 0 0 rgba(0,0,0,0.04), inset 1px 0 0 rgba(0,0,0,0.04); transition: box-shadow 0.4s ease;
      }
      #slip-card::before {
        content: ''; position: absolute; top: -7px; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%;
        background: radial-gradient(circle, transparent 0%, transparent 32%, #d4c8b0 33%, #e8deca 50%, #f0e8d8 65%, transparent 66%); box-shadow: inset 0 0 0 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.2); z-index: 3;
      }

      /* ── Inner Content ── */
      #slip-content { padding: 22px 14px 12px; display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; }
      #slip-logo { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(58,143,163,0.28); box-shadow: 0 2px 10px rgba(0,0,0,0.14), 0 0 0 3px rgba(58,143,163,0.08); display: block; flex-shrink: 0; }
      #slip-header { font-family: 'DM Sans', system-ui, sans-serif; font-size: 7.5px; font-weight: 800; letter-spacing: 0.20em; text-transform: uppercase; color: #3A8FA3; margin-top: 1px; }
      #slip-body { font-family: 'DM Sans', system-ui, sans-serif; font-size: 11px; font-weight: 500; color: #2a2218; line-height: 1.55; padding: 0 2px; }
      #slip-body strong { display: block; font-size: 12.5px; font-weight: 700; color: #1C2B35; margin-bottom: 1px; }
      .slip-dash-line { width: 100%; border: none; border-top: 1.5px dashed #d0c4ac; margin: 1px 0; }
      #slip-ref { font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.10em; color: #7a7060; filter: blur(3px); user-select: none; pointer-events: none; }
      #slip-ref-label { font-family: 'DM Sans', system-ui, sans-serif; font-size: 7px; letter-spacing: 0.12em; text-transform: uppercase; color: #b0a898; margin-top: -2px; }
      #slip-time { font-family: 'DM Sans', system-ui, sans-serif; font-size: 7.5px; color: #b8b0a0; letter-spacing: 0.05em; }
      #slip-torn { width: 176px; height: 14px; flex-shrink: 0; filter: drop-shadow(0 6px 10px rgba(0,0,0,0.18)); background: linear-gradient(135deg, #fdfaf4 25%, transparent 25%) -7px 0, linear-gradient(225deg, #fdfaf4 25%, transparent 25%) -7px 0, linear-gradient(315deg, #fdfaf4 25%, transparent 25%), linear-gradient( 45deg, #fdfaf4 25%, transparent 25%); background-size: 14px 14px; background-color: transparent; }

      /* ── Animations ── */
      @keyframes slipSwing { 0% { transform: rotate(0deg); } 8% { transform: rotate(7deg); } 20% { transform: rotate(-5.5deg); } 33% { transform: rotate(4deg); } 46% { transform: rotate(-2.8deg); } 57% { transform: rotate(1.8deg); } 67% { transform: rotate(-1.0deg); } 76% { transform: rotate(0.5deg); } 84% { transform: rotate(-0.25deg); } 91% { transform: rotate(0.1deg); } 96% { transform: rotate(-0.05deg); } 100% { transform: rotate(0deg); } }
      @keyframes slipSway { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(0.9deg); } 50% { transform: rotate(-0.7deg); } 80% { transform: rotate(0.4deg); } }
      @keyframes slipWindUp { 0% { transform: rotate(0deg); } 40% { transform: rotate(-2.5deg); } 80% { transform: rotate(1deg); } 100% { transform: rotate(0.5deg); } }
      @keyframes shadowDeepen { from { box-shadow: 0 6px 28px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95); } to { box-shadow: 0 18px 48px rgba(0,0,0,0.26), 0 6px 16px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.95); } }

      #slip-wrapper.state-swinging { animation: slipSwing 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      #slip-wrapper.state-swaying { animation: slipSway 4.2s ease-in-out infinite; }
      #slip-wrapper.state-swaying #slip-card { animation: shadowDeepen 0.5s ease forwards; }
      #slip-wrapper.state-windup { animation: slipWindUp 0.4s ease-in forwards; }
    `;

    const el = document.createElement('style');
    el.id = 'slip-styles';
    el.textContent = css;
    document.head.appendChild(el);
  }

  // ──────────────────────────────────────────────────────────
  // 2. THE INFINITE RANDOMIZER
  // ──────────────────────────────────────────────────────────
  function fakeRef() {
    const pool = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let r = '';
    for (let i = 0; i < 14; i++) { if (i===4 || i===9) r += '-'; r += pool[Math.floor(Math.random()*pool.length)]; }
    return r;
  }
  
  function nowTime() { 
    return new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }); 
  }

  function generateRandomBooking() {
    const firstNames = ["Maria", "Juan", "Jose", "Ana", "Mark", "John", "Paul", "Mary", "Grace", "Peter", "Jane", "Carlo", "Mae", "Sarah", "David", "Diana", "Rose", "Cris", "Alex", "Joy", "Renz", "Kobe", "Lea"];
    const lastNames = ["Cruz", "Reyes", "Santos", "Garcia", "Mendoza", "Bautista", "Torres", "Villanueva", "Aquino", "Ramos", "Castillo", "Rivera", "Gonzales", "Perez", "Domingo", "Lim", "Tan"];
    const actions = ["just booked", "just secured", "reserved", "claimed"];

    const mask = (str) => {
      if (str.length <= 2) return str[0] + '*';
      return str[0] + '*'.repeat(str.length - 2) + str[str.length - 1];
    };

    const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const actionWord = actions[Math.floor(Math.random() * actions.length)];

    let rooms = ["a Shore Cottage", "the Top Cottage", "the Primary Suite"]; 
    if (typeof ResortData !== 'undefined' && ResortData.accommodations) {
      rooms = ResortData.accommodations.filter(a => !a.flatRate).map(a => a.name);
    }
    const room = rooms[Math.floor(Math.random() * rooms.length)];

    return {
      name: `${mask(fName)} ${mask(lName)}`,
      action: `${actionWord} ${room}!`
    };
  }

  // ──────────────────────────────────────────────────────────
  // 3. BUILD THE DOM TREE
  // ──────────────────────────────────────────────────────────
  function buildSlip(proof) {
    const stale = document.getElementById('slip-wrapper');
    if (stale) stale.remove();

    const wrapper = document.createElement('div'); wrapper.id = 'slip-wrapper';
    const nail = document.createElement('div'); nail.id = 'slip-nail';
    const stringUpper = document.createElement('div'); stringUpper.id = 'slip-string';
    const crimp = document.createElement('div'); crimp.id = 'slip-crimp';
    const stringLower = document.createElement('div'); stringLower.id = 'slip-string-lower';
    const card = document.createElement('div'); card.id = 'slip-card';
    const content = document.createElement('div'); content.id = 'slip-content';
    
    const logo = document.createElement('img'); logo.id = 'slip-logo'; logo.src = ResortData.identity.logo; logo.draggable = false; logo.onerror = () => logo.style.display = 'none';
    const header = document.createElement('div'); header.id = 'slip-header'; header.textContent = '📋 Recent Booking!';
    const sep1 = document.createElement('hr'); sep1.className = 'slip-dash-line';
    
    const body = document.createElement('div'); body.id = 'slip-body'; 
    body.innerHTML = `<strong>${proof.name}</strong>${proof.action}`;
    
    const sep2 = document.createElement('hr'); sep2.className = 'slip-dash-line';
    const ref = document.createElement('div'); ref.id = 'slip-ref'; ref.textContent = fakeRef();
    const refLabel = document.createElement('div'); refLabel.id = 'slip-ref-label'; refLabel.textContent = 'booking ref';
    const sep3 = document.createElement('hr'); sep3.className = 'slip-dash-line';
    const time = document.createElement('div'); time.id = 'slip-time'; time.textContent = `Just now · ${nowTime()}`;

    content.append(logo, header, sep1, body, sep2, ref, refLabel, sep3, time);
    card.appendChild(content);
    
    const torn = document.createElement('div'); torn.id = 'slip-torn';
    wrapper.append(nail, stringUpper, crimp, stringLower, card, torn);
    document.body.appendChild(wrapper);

    // ── SMART POSITIONING: Hang between Local Impact and Book Now ──
    const bookBtn = document.querySelector('.nav-book-btn');
    if (bookBtn && window.innerWidth > 768) {
      // Find exactly where the Book Now button starts
      const btnRect = bookBtn.getBoundingClientRect();
      const distFromRight = window.innerWidth - btnRect.left;
      
      // Place the slip 20 pixels to the left of the button!
      wrapper.style.right = (distFromRight - 10) + 'px';
    }

    return wrapper;
  }

  // ──────────────────────────────────────────────────────────
  // 4. ANIMATION ORCHESTRATION
  // ──────────────────────────────────────────────────────────
  function animateSlip(wrapper) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        wrapper.style.top = '0px'; 
        setTimeout(() => {
          wrapper.classList.add('state-swinging');
          setTimeout(() => {
            wrapper.classList.remove('state-swinging');
            wrapper.classList.add('state-swaying');
            setTimeout(() => {
              wrapper.classList.remove('state-swaying');
              wrapper.classList.add('state-windup');
              setTimeout(() => {
                wrapper.style.transition = 'top 0.65s cubic-bezier(0.55, 0, 1, 0.45)';
                wrapper.style.top = '-460px';
                setTimeout(() => { if (wrapper.parentNode) wrapper.remove(); }, 750);
              }, 380); 
            }, 6500); 
          }, 1650); 
        }, 200); 
      });
    });
  }

  // ──────────────────────────────────────────────────────────
  // 5. THE SCHEDULER (Menu-Aware Loop)
  // ──────────────────────────────────────────────────────────
  function scheduleToasts() {
    const maxSlips = 5;             
    const timeBetweenSlips = 18000; 
    let slipsShownThisPage = 0;

    function dropNextSlip() {
      if (slipsShownThisPage >= maxSlips) return;

      // SMART CHECK: Is the mobile menu currently open?
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        // If the menu is open, don't drop! Wait 3 seconds and check again.
        setTimeout(dropNextSlip, 3000);
        return; 
      }

      const randomSlip = generateRandomBooking();
      const wrapper = buildSlip(randomSlip);
      animateSlip(wrapper);
      
      slipsShownThisPage++;

      if (slipsShownThisPage < maxSlips) {
        setTimeout(dropNextSlip, timeBetweenSlips);
      }
    }

    // Wait 3.5 seconds after page load, then start the loop
    setTimeout(dropNextSlip, 3500); 
  }

  function init() {
    injectStyles();
    scheduleToasts();

    // ── THE KILL SWITCH ──
    // If a slip is ALREADY on the screen when they click the menu, hide it instantly!
    document.addEventListener('click', (e) => {
      if (e.target.closest('#nav-hamburger')) {
        const activeSlip = document.getElementById('slip-wrapper');
        if (activeSlip) {
          activeSlip.style.display = 'none'; // Instantly removes it from view
        }
      }
    });
  }

  return { init };

})();

if (typeof module !== 'undefined') module.exports = SocialProofToast;