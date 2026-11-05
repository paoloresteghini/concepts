(() => {
  // The requested shared motion is one-shot fade-and-rise, with each photograph
  // and its caption moving together. Sticky layouts and image crossfades stay intact.
  // Only an entering target receives an animation; pending content is ordinary,
  // fully visible HTML. No stylesheet, hidden-ready state, or scroll loop is used.
  const selectors = [
    '.bc-title', '.bc-intro-tools', '.bc-feature',
    '.sb-statement', '.sb-feature',
    '.horizon-intro', '.horizon-panorama',
    '.bd-opening > h1', '.bd-forum > .bd-feature', '.bd-bottom',
    '.approach-intro > *', '.chapter > *', '.stage-word',
    '.policy-heading > *', '.policy-workspace > *',
    '.leadership-image', '.leadership-copy',
    '.story-portrait', '.story-content',
    '.tpc-events-inner > h2', '.tpc-events-upcoming',
    '.tpc-events-recent > h3', '.tpc-events-posters > article', '.tpc-events-all',
    '.invitation > div', '.invitation > .signup',
    '.footer-main', '.footer-links'
  ];
  const candidates = [...document.querySelectorAll(selectors.join(','))];
  const targets = candidates.filter((element) => !candidates.some((other) => other !== element && other.contains(element)));
  if (!targets.length) return;
  if (typeof window.IntersectionObserver !== 'function' || typeof Element.prototype.animate !== 'function' ||
      !window.CSS || !CSS.supports('translate', '0px 1px')) {
    targets.forEach((element) => { element.dataset.scrollReveal = 'unsupported'; });
    return;
  }

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phone = window.matchMedia('(max-width: 780px)');
  const pending = new Set(targets);
  const playing = new Map();
  let printing = false;
  let observer;
  const motionDisabled = () => printing || reducedMotion.matches || root.classList.contains('motion-paused');
  targets.forEach((element) => { element.dataset.scrollReveal = 'pending'; });

  const settle = (element) => {
    const animation = playing.get(element);
    if (animation) {
      animation.onfinish = null;
      animation.oncancel = null;
      try { animation.finish(); } catch { /* Cancellation still restores the visible default. */ }
      animation.cancel();
      playing.delete(element);
    }
    pending.delete(element);
    observer?.unobserve(element);
    element.dataset.scrollReveal = 'revealed';
  };
  const finishPlaying = () => { [...playing.keys()].forEach(settle); };
  const isRendered = (element) => element.getClientRects().length > 0;
  const settleVisibleAndPassed = () => {
    finishPlaying();
    pending.forEach((element) => {
      if (!isRendered(element)) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth) settle(element);
    });
  };
  const start = (element, delay) => {
    if (!pending.has(element) || !isRendered(element)) return;
    if (motionDisabled() || document.hidden || element.contains(document.activeElement)) {
      settle(element);
      return;
    }
    const style = getComputedStyle(element);
    const restingOpacity = style.opacity;
    const restingTranslate = style.translate === 'none' ? '0px 0px' : style.translate;
    // Individual translate leaves the element's authored transform untouched.
    // A pre-existing individual translate keeps its own position and only fades.
    const enteringTranslate = style.translate === 'none' ? `0px ${phone.matches ? 18 : 24}px` : restingTranslate;
    try {
      const animation = element.animate([
        { opacity: 0, translate: enteringTranslate },
        { opacity: restingOpacity, translate: restingTranslate }
      ], {
        duration: 650,
        delay,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'both'
      });
      pending.delete(element);
      observer.unobserve(element);
      playing.set(element, animation);
      element.dataset.scrollReveal = 'playing';
      animation.onfinish = () => settle(element);
      animation.oncancel = () => settle(element);
      // A cancelled animation rejects finished, so consume that promise explicitly.
      animation.finished.catch(() => {});
    } catch {
      settle(element);
    }
  };

  observer = new IntersectionObserver((entries) => {
    const entering = [];
    entries.forEach((entry) => {
      if (!pending.has(entry.target)) return;
      if (entry.isIntersecting && isRendered(entry.target)) entering.push(entry.target);
      // A quick scroll can pass a target between observation deliveries.
      // Retire that target at rest instead of hiding it when the visitor returns.
      else if (entry.boundingClientRect.bottom <= 0 && isRendered(entry.target)) settle(entry.target);
    });
    const siblings = new Map();
    entering.forEach((element) => {
      const parent = element.parentElement;
      if (!siblings.has(parent)) siblings.set(parent, []);
      siblings.get(parent).push(element);
    });
    siblings.forEach((group) => {
      group.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
      group.forEach((element, index) => start(element, group.length > 1 ? Math.round(index * 120 / (group.length - 1)) : 0));
    });
  }, { threshold: 0, rootMargin: '0px' });

  const navigationEntry = performance.getEntriesByType?.('navigation')[0];
  if (navigationEntry?.type === 'back_forward') settleVisibleAndPassed();
  pending.forEach((element) => observer.observe(element));

  // Hidden chapter-tab leaves remain observed. Native intersection updates when
  // a tab becomes visible, without changing the tab's hidden state or imagery.
  document.addEventListener('focusin', (event) => {
    targets.forEach((element) => {
      if (element.contains(event.target) && (pending.has(element) || playing.has(element))) settle(element);
    });
  });
  const pauseObserver = new MutationObserver(() => { if (motionDisabled()) finishPlaying(); });
  pauseObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finishPlaying(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finishPlaying(); });
  window.addEventListener('pagehide', finishPlaying);
  window.addEventListener('pageshow', (event) => {
    if (event.persisted || navigationEntry?.type === 'back_forward') requestAnimationFrame(settleVisibleAndPassed);
  });
  window.addEventListener('beforeprint', () => {
    printing = true;
    finishPlaying();
    [...pending].forEach(settle);
    observer.disconnect();
  });
  window.addEventListener('afterprint', () => { printing = false; });
})();
