(function () {
  'use strict';
  var button = document.getElementById('menu-toggle');
  var navigation = document.getElementById('site-nav');
  if (!button || !navigation) return;
  function closeMenu() {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Buka menu');
    navigation.classList.remove('open');
  }
  button.addEventListener('click', function () {
    var opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Tutup menu' : 'Buka menu');
    navigation.classList.toggle('open', opening);
  });
  navigation.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', function (event) {
    if (!navigation.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 650) closeMenu();
  });
}());
