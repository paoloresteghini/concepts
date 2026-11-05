(() => {
  'use strict';
  const nav = document.querySelector('#navigation');
  const trigger = document.querySelector('.menu-trigger');
  const closeMenu = () => { nav.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); };
  trigger.addEventListener('click', () => { const opening = trigger.getAttribute('aria-expanded') !== 'true'; trigger.setAttribute('aria-expanded', String(opening)); nav.classList.toggle('is-open', opening); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') { closeMenu(); trigger.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 1000) closeMenu(); }, { passive: true });

  const index = document.querySelector('.feature-index');
  const features = [...document.querySelectorAll('[data-feature]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  function emphasize(feature) {
    features.forEach(row => row.classList.toggle('is-active', row === feature));
    if (feature && !reduced.matches) index.dataset.active = feature.dataset.feature;
    else delete index.dataset.active;
  }
  features.forEach(feature => {
    feature.addEventListener('pointerenter', () => { if (pointer.matches) emphasize(feature); });
    feature.addEventListener('focusin', () => emphasize(feature));
  });
  index.addEventListener('pointerleave', () => { const focused = features.find(row => row.contains(document.activeElement)); emphasize(focused || null); });
  index.addEventListener('focusout', () => { requestAnimationFrame(() => { if (!index.contains(document.activeElement)) emphasize(null); }); });
  reduced.addEventListener('change', () => { if (reduced.matches) emphasize(null); });

  const search = document.querySelector('#brief-search');
  const clear = document.querySelector('#clear-search');
  const briefRows = [...document.querySelectorAll('.brief-row')];
  const empty = document.querySelector('.no-results');
  const status = document.querySelector('#search-status');
  function filterBriefs() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    briefRows.forEach(row => { const matches = row.dataset.title.toLocaleLowerCase().includes(query); row.hidden = !matches; if (matches) visible += 1; });
    clear.hidden = !query; empty.hidden = visible !== 0;
    status.textContent = query ? `${visible} featured ${visible === 1 ? 'brief' : 'briefs'} found.` : '';
  }
  search.addEventListener('input', filterBriefs);
  clear.addEventListener('click', () => { search.value = ''; filterBriefs(); search.focus(); });
  search.addEventListener('keydown', event => { if (event.key === 'Escape') { search.value = ''; filterBriefs(); } });

  const leadershipScene = document.querySelector('.leadership');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const sceneObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        leadershipScene.classList.add('is-arriving');
        sceneObserver.disconnect();
      }
    }, { threshold: 0.12 });
    sceneObserver.observe(leadershipScene);
  }

  const library = document.querySelector('.policy-library');
  let scheduled = false;
  function drawPlane() {
    if (!reduced.matches && window.innerWidth > 650) {
      const bounds = library.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      library.style.setProperty('--plane-drift', `${progress * window.innerWidth * 0.3}px`);
    }
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(drawPlane); } }, { passive: true });
})();
