const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.masthead')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
const chapters = [...document.querySelectorAll('.chapter')];
const chapterPhoto = document.querySelector('#chapter-photo');
const chapterWord = document.querySelector('#chapter-word');
chapters.forEach(chapter => {
  const control = chapter.querySelector('button');
  control.addEventListener('click', () => {
    if (chapter.classList.contains('is-open')) return;
    chapters.forEach(item => {
      const open = item === chapter;
      item.classList.toggle('is-open', open);
      item.querySelector('button').setAttribute('aria-expanded', String(open));
      item.querySelector('.chapter-panel').inert = !open;
    });
    chapterPhoto.src = chapter.dataset.image;
    chapterWord.textContent = chapter.dataset.word;
    if (!reducedMotion.matches) {
      chapterPhoto.animate([{ clipPath: 'inset(0 0 8% 0)', transform: 'scale(1.025)' }, { clipPath: 'inset(0)', transform: 'scale(1)' }], { duration: 850, easing: 'cubic-bezier(.16,1,.3,1)' });
      chapterWord.animate([{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }], { duration: 700, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
  });
});
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const photo = document.querySelector('.leadership-photo img');
  const story = document.querySelector('.story-photo img');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate([{ clipPath: 'inset(8% 0 0 0)', transform: 'scale(1.035)' }, { clipPath: 'inset(0)', transform: 'scale(1)' }], { duration: 1150, easing: 'cubic-bezier(.16,1,.3,1)' });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(photo);
  observer.observe(story);
}

// One scroll-linked composition, kept subtle so the reading surface remains calm.
const hero = document.querySelector('.hero');
let heroFrame = 0;
function syncHeroLayers() {
  heroFrame = 0;
  const distance = Math.max(0, Math.min(window.scrollY, hero.offsetHeight));
  hero.style.setProperty('--hero-scroll', `${distance}px`);
}
function scheduleHeroLayers() {
  if (!heroFrame) heroFrame = requestAnimationFrame(syncHeroLayers);
}
function configureHeroMotion() {
  window.removeEventListener('scroll', scheduleHeroLayers);
  if (reducedMotion.matches) {
    cancelAnimationFrame(heroFrame);
    heroFrame = 0;
    hero.style.setProperty('--hero-scroll', '0px');
  } else {
    window.addEventListener('scroll', scheduleHeroLayers, { passive: true });
    syncHeroLayers();
  }
}
reducedMotion.addEventListener('change', configureHeroMotion);
configureHeroMotion();
