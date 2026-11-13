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

  // Interactive product exploration. Content updates use textContent, never HTML injection.
  var scenes = {
    stream: {
      eyebrow: 'XIRAEN / STREAM',
      edition: 'INTERACTIVE PREVIEW — 01/03',
      symbol: '◎',
      tagline: 'CONNECT / CREATE',
      title: 'Temukan suara baru.',
      description: 'Publikasikan ide, ikuti orang yang relevan, dan bangun percakapan melalui Stream.'
    },
    ai: {
      eyebrow: 'XIRAEN / AI ASSISTANT',
      edition: 'INTERACTIVE PREVIEW — 02/03',
      symbol: '✳',
      tagline: 'ASK / EXPLORE',
      title: 'Eksplorasi tanpa hambatan.',
      description: 'Gunakan asisten AI untuk menggali ide. Saat ini satu model, dengan persetujuan dan kuota pengguna.'
    },
    energy: {
      eyebrow: 'XIRAEN / XIRA ENERGY',
      edition: 'INTERACTIVE PREVIEW — 03/03',
      symbol: 'ϟ',
      tagline: 'CREDIT / UTILITY',
      title: 'Energi untuk layanan.',
      description: 'XE adalah kredit internal nontransferable untuk layanan XIRAEN, bukan aset kripto atau investasi.'
    }
  };
  var stage = document.getElementById('scene-panel');
  var sceneButtons = Array.prototype.slice.call(document.querySelectorAll('.experience-option[data-scene]'));
  function setScene(key) {
    if (!stage || !Object.prototype.hasOwnProperty.call(scenes, key)) return;
    var scene = scenes[key];
    stage.setAttribute('data-active-scene', key);
    var fields = {
      'scene-eyebrow': scene.eyebrow,
      'scene-symbol': scene.symbol,
      'scene-tagline': scene.tagline,
      'scene-title': scene.title,
      'scene-description': scene.description
    };
    Object.keys(fields).forEach(function (id) {
      var element = document.getElementById(id);
      if (element) element.textContent = fields[id];
    });
    var edition = stage.querySelector('.stage-edition');
    if (edition) edition.textContent = scene.edition;
    sceneButtons.forEach(function (button) {
      var active = button.getAttribute('data-scene') === key;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stage.classList.remove('scene-transition');
      void stage.offsetWidth;
      stage.classList.add('scene-transition');
    }
  }
  sceneButtons.forEach(function (button) {
    button.addEventListener('click', function () { setScene(button.getAttribute('data-scene')); });
  });

  // Motion is progressive enhancement: page remains fully readable without JS.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll(
      '.experience-header,.experience-layout,.section-head,.card,.vision,.principle,.roadmap-card,.cta .container'
    );
    document.body.classList.add('motion-ready');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px 70px 0px' });
    revealElements.forEach(function (element) {
      element.classList.add('motion-item');
      observer.observe(element);
    });
  }

  // Subtle pointer depth. Only transform is animated; no heavy WebGL or canvas.
  var board = document.querySelector('.hero-art .board');
  if (board && !reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var frame = 0;
    board.addEventListener('pointermove', function (event) {
      var bounds = board.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      var y = (event.clientY - bounds.top) / bounds.height - 0.5;
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(function () {
        board.style.transform = 'rotateX(' + (-y * 3.5).toFixed(2) + 'deg) rotateY(' + (x * 3.5).toFixed(2) + 'deg)';
      });
    }, { passive: true });
    board.addEventListener('pointerleave', function () {
      if (frame) window.cancelAnimationFrame(frame);
      board.style.transform = '';
    });
  }
}());
