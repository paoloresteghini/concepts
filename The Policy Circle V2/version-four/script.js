const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
matchMedia('(min-width: 1001px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
const methodImage = document.querySelector('#method-image');
const methodCaption = document.querySelector('#method-caption');
const methodItems = [...document.querySelectorAll('.method-item')];
function showMethod(item) {
  if (item.classList.contains('is-active')) return;
  methodItems.forEach(method => method.classList.toggle('is-active', method === item));
  methodImage.src = item.dataset.image;
  methodImage.alt = item.dataset.alt;
  methodCaption.textContent = item.dataset.caption;
  if (!reducedMotion.matches) {
    methodImage.animate([{ clipPath: 'inset(0 0 5% 0)', transform: 'scale(1.025)' }, { clipPath: 'inset(0)', transform: 'scale(1)' }], { duration: 800, easing: 'cubic-bezier(.16,1,.3,1)' });
  }
}
methodItems.forEach(item => {
  item.addEventListener('pointerenter', () => showMethod(item));
  item.addEventListener('focusin', () => showMethod(item));
});
const tabs = [...document.querySelectorAll('.policy-picker [role="tab"]')];
const preview = document.querySelector('#policy-preview');
const previewImage = document.querySelector('#preview-image');
function selectPolicy(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  preview.setAttribute('aria-labelledby', tab.id);
  previewImage.src = tab.dataset.image;
  previewImage.alt = tab.dataset.title;
  document.querySelector('#preview-title').textContent = tab.dataset.title;
  document.querySelector('#preview-copy').textContent = tab.dataset.copy;
  document.querySelector('#preview-link').href = `https://policycirclstg.wpenginepowered.com/briefs/${tab.dataset.path}/`;
  if (!reducedMotion.matches) {
    previewImage.animate([{ clipPath: 'inset(0 4% 0 0)' }, { clipPath: 'inset(0)' }], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
  }
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectPolicy(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectPolicy(tabs[next], true);
    }
  });
});
// Native scroll gently joins the three image windows; reading planes stay fixed.
const opening = document.querySelector('.opening');
let frame = 0;
function updateOpening() {
  frame = 0;
  const distance = Math.max(0, Math.min(scrollY, 550));
  opening.style.setProperty('--opening-scroll', `${distance}px`);
}
function requestOpeningFrame() {
  if (!frame) frame = requestAnimationFrame(updateOpening);
}
function configureMotion() {
  removeEventListener('scroll', requestOpeningFrame);
  if (reducedMotion.matches) {
    cancelAnimationFrame(frame);
    frame = 0;
    opening.style.setProperty('--opening-scroll', '0px');
  } else {
    addEventListener('scroll', requestOpeningFrame, { passive: true });
    updateOpening();
  }
}
reducedMotion.addEventListener('change', configureMotion);
configureMotion();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !reducedMotion.matches) {
        entry.target.animate([{ clipPath: 'inset(4% 0 0 0)', transform: 'scale(1.025)' }, { clipPath: 'inset(0)', transform: 'scale(1)' }], { duration: 1000, easing: 'cubic-bezier(.16,1,.3,1)' });
      }
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.leadership-window img,.story-window img').forEach(image => observer.observe(image));
}
