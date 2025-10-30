document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form');
  const modal = document.getElementById('modal-sucesso');
  const closeBtn = document.getElementById('closeBtn'); // <- corrigido

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

