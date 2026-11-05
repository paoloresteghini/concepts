(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); } });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function createTabs(buttonSelector, dataKey, panelPrefix, onSelect) {
    const buttons = [...document.querySelectorAll(buttonSelector)];
    function select(value, focus = false) {
      buttons.forEach(button => {
        const active = button.dataset[dataKey] === value;
        const panel = document.getElementById(`${panelPrefix}${button.dataset[dataKey]}`);
        button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1; panel.hidden = !active;
        panel.classList.remove('is-entering');
        if (active) { if (!reducedMotion.matches) { void panel.offsetWidth; panel.classList.add('is-entering'); } if (focus) button.focus(); }
      });
      if (onSelect) onSelect(value);
    }
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => select(button.dataset[dataKey]));
      button.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % buttons.length;
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = buttons.length - 1;
        else return;
        event.preventDefault(); select(buttons[next].dataset[dataKey], true);
      });
    });
    return select;
  }
  const heroStates = {
    inform: { image: '../assets/discussion.jpg', alt: 'A woman speaking during a Policy Circle discussion', caption: 'Accessible, balanced resources. Informed civic engagement.', copy: 'We make complex policy issues easier to understand through accessible, balanced resources that encourage thoughtful discussion and informed civic engagement.', action: 'Explore policy briefs', href: 'https://policycirclstg.wpenginepowered.com/policy-hub/' },
    equip: { image: '../assets/coaching.webp', alt: 'Women taking part in a Policy Circle civic coaching session', caption: 'Your next step into leadership.', copy: 'Through civic leadership programs and practical learning opportunities, we equip women with the knowledge, skills, and connections to lead in their communities.', action: 'Explore CLER', href: 'https://policycirclstg.wpenginepowered.com/cler/' },
    connect: { image: '../assets/circles.webp', alt: 'Women taking part in an outdoor Policy Circle discussion', caption: 'Meaningful conversations. Stronger communities.', copy: 'We bring women together through Policy Circles and events to exchange ideas, build relationships, and turn meaningful conversations into civic action.', action: 'Learn about Policy Circles', href: 'https://policycirclstg.wpenginepowered.com/policy-circles/' }
  };
  const heroPhoto = document.querySelector('.hero-photo');
  function renderHero(value) {
    const state = heroStates[value];
    const image = heroPhoto.querySelector('img');
    image.src = state.image; image.alt = state.alt;
    heroPhoto.querySelector('figcaption').textContent = state.caption;
    document.querySelector('.hero-intro p').textContent = state.copy;
    const action = document.querySelector('.hero-intro .button');
    action.href = state.href; action.querySelector('span').textContent = state.action;
    document.querySelectorAll('[data-hero-path]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.heroPath === value)));
    heroPhoto.classList.remove('is-changing');
    if (!reducedMotion.matches) { void heroPhoto.offsetWidth; heroPhoto.classList.add('is-changing'); }
  }
  const selectPath = createTabs('[data-path]', 'path', 'panel-', renderHero);
  document.querySelectorAll('[data-hero-path]').forEach(button => button.addEventListener('click', () => selectPath(button.dataset.heroPath)));
  selectPath('connect');
  createTabs('[data-issue]', 'issue', 'brief-');
  let ticking = false;
  function scrollFrame() {
    if (!reducedMotion.matches && window.innerWidth > 600 && window.scrollY < 1000) document.documentElement.style.setProperty('--hero-drift', `${Math.min(window.scrollY, 850)}px`);
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; window.requestAnimationFrame(scrollFrame); } }, { passive: true });
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) document.documentElement.style.setProperty('--hero-drift', '0px'); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); }, { passive: true });
})();
