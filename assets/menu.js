// Mobil menü düğmesi ve alt bilgi yılı. CSP gereği satır içi betik yerine dış dosyadadır.
(function () {
  const t = document.querySelector('.menu-toggle'), m = document.getElementById('menu');
  t.addEventListener('click', () => {
    const open = m.classList.toggle('open');
    t.setAttribute('aria-expanded', open);
  });
  m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    m.classList.remove('open'); t.setAttribute('aria-expanded', false);
  }));
  document.getElementById('yil').textContent = new Date().getFullYear();
})();
