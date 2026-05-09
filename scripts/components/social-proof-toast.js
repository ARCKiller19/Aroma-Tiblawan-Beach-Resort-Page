// ============================================================
// social-proof-toast.js — "Hanging Order Slip" Component
// ============================================================

const SocialProofToast = (() => {
  let toastEl = null;
  let queue = [];
  let currentIndex = 0;

  function init() {
    createToastElement();
    scheduleToasts();
  }

  function createToastElement() {
    toastEl = document.createElement('div');
    toastEl.id = 'social-proof-toast';
    toastEl.innerHTML = `
      <div class="toast-icon">🏖️</div>
      <div class="toast-body">
        <span class="toast-name"></span>
        <span class="toast-action"></span>
        <span class="toast-time">Just now · Aroma Tiblawan</span>
      </div>
    `;
    document.body.appendChild(toastEl);
  }

  function scheduleToasts() {
    const proofs = ResortData.socialProof;
    proofs.forEach((proof, i) => {
      setTimeout(() => showToast(proof), proof.delay);
    });
  }

  function showToast(proof) {
    const nameEl   = toastEl.querySelector('.toast-name');
    const actionEl = toastEl.querySelector('.toast-action');

    nameEl.textContent   = proof.name;
    actionEl.textContent = proof.action;

    toastEl.classList.add('show');

    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 5000);
  }

  return { init };
})();
