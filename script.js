(function () {
  'use strict';
  var toggle = document.getElementById('menu-toggle');
  var navigation = document.getElementById('site-nav');
  var header = document.querySelector('.site-header');
  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  if (!toggle || !navigation) return;
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka menu');
    navigation.classList.remove('open');
  }
  toggle.addEventListener('click', function () {
    var opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Tutup menu' : 'Buka menu');
    navigation.classList.toggle('open', opening);
  });
  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', function (event) {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 650) closeMenu();
  });
}());
