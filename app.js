// app.js
document.addEventListener('DOMContentLoaded', function() {
  // Atualiza o ano no footer
  const year = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = year;

  // Formulário de doação (simulação)
  const donateForm = document.querySelector('form#donate-form');
  if (donateForm) {
    donateForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = donateForm.querySelector('[name="nome"]').value || 'Doador';
      alert(`Obrigado, ${name}! Sua doação foi registrada (simulação).`);
      donateForm.reset();
    });
  }

  // Carregar projetos do arquivo JSON (opcional)
  fetch('data/projects.json')
    .then(resp => resp.ok ? resp.json() : Promise.reject())
    .then(data => {
      const list = document.querySelector('.project-list');
      if (!list) return;
      list.innerHTML = '';
      data.projects.forEach(p => {
        const li = document.createElement('li');
        li.className = 'project-card';
        li.innerHTML = `<h3>${p.title}</h3><p>${p.summary}</p><a href="#" class="btn">${p.title}</a>`;
        list.appendChild(li);
      });
    })
    .catch(() => {
      // mantém os cards padrões do HTML
    });

  // Adiciona alert "Página em construção" para todos os links internos que não funcionam
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Esta página está em construção!');
    });
  });
});
