(() => {
  const header = document.querySelector('.tpc-header');
  if (!header) return;
  const navigation = header.querySelector('.tpc-navigation');
  const mobileToggle = header.querySelector('.tpc-mobile-toggle');
  const triggers = [...header.querySelectorAll('.tpc-disclosure, .tpc-search-toggle')];
  const panels = new Map(triggers.map((trigger) => [trigger.getAttribute('aria-controls'), document.getElementById(trigger.getAttribute('aria-controls'))]));
  const mobile = window.matchMedia('(max-width: 1180px)');
  const mouseHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  let activeId = null;
  let activeSource = null;
  let mobileOpen = false;
  let openTimer;
  let closeTimer;
  let keyboardIntent = false;

  const clearTimers = () => { clearTimeout(openTimer); clearTimeout(closeTimer); };
  const getTrigger = (id) => triggers.find((trigger) => trigger.getAttribute('aria-controls') === id);
  const closePanel = ({ returnFocus = false } = {}) => {
    clearTimers();
    const previous = activeId && getTrigger(activeId);
    triggers.forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
    panels.forEach((panel) => { panel.hidden = true; });
    activeId = null;
    activeSource = null;
    header.classList.remove('tpc-has-open-panel');
    if (returnFocus && previous) previous.focus();
  };
  const openPanel = (id, { focusSearch = false, source = 'activation' } = {}) => {
    clearTimers();
    if (!panels.has(id)) return;
    triggers.forEach((trigger) => trigger.setAttribute('aria-expanded', String(trigger.getAttribute('aria-controls') === id)));
    panels.forEach((panel, panelId) => { panel.hidden = panelId !== id; });
    activeId = id;
    activeSource = source;
    header.classList.add('tpc-has-open-panel');
    if (focusSearch) requestAnimationFrame(() => header.querySelector('#tpc-search-input').focus());
  };
  const setMobileOpen = (open, { returnFocus = false } = {}) => {
    mobileOpen = open;
    closePanel();
    navigation.hidden = mobile.matches && !open;
    mobileToggle.setAttribute('aria-expanded', String(mobile.matches && open));
    document.body.classList.toggle('tpc-navigation-open', mobile.matches && open);
    if (returnFocus) mobileToggle.focus();
  };
  const syncViewport = () => {
    const hadFocus = header.contains(document.activeElement);
    setMobileOpen(false);
    if (mobile.matches && hadFocus && navigation.contains(document.activeElement)) mobileToggle.focus();
    else if (!mobile.matches && document.activeElement === mobileToggle) header.querySelector('.tpc-brand').focus();
  };
  header.classList.add('tpc-ready');
  syncViewport();
  mobile.addEventListener('change', syncViewport);

  mobileToggle.addEventListener('click', () => setMobileOpen(!mobileOpen));
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      keyboardIntent = event.detail === 0;
      const id = trigger.getAttribute('aria-controls');
      if (activeId === id && activeSource === 'hover') {
        clearTimers();
        activeSource = 'activation';
      } else if (activeId === id) closePanel();
      else openPanel(id, { focusSearch: id === 'tpc-panel-search' });
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        keyboardIntent = true;
        const id = trigger.getAttribute('aria-controls');
        openPanel(id);
        panels.get(id).querySelector('a, input, button:not([data-tpc-close])')?.focus();
      }
    });
  });
  header.querySelectorAll('[data-tpc-close]').forEach((button) => button.addEventListener('click', () => closePanel({ returnFocus: true })));
  const queueHover = (item) => {
    clearTimers();
    const id = item.querySelector('.tpc-disclosure').getAttribute('aria-controls');
    openTimer = setTimeout(() => openPanel(id, { source: 'hover' }), 150);
  };
  let lastMousePosition = null;
  document.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    const moved = !lastMousePosition || event.movementX !== 0 || event.movementY !== 0 ||
      event.clientX !== lastMousePosition.x || event.clientY !== lastMousePosition.y;
    lastMousePosition = { x: event.clientX, y: event.clientY };
    if (!moved || !keyboardIntent) return;
    keyboardIntent = false;
    // Entry can precede the movement event, so recover its skipped hover here.
    const item = event.target.closest('.tpc-nav-item');
    if (item && header.contains(item) && !mobile.matches && mouseHover.matches) queueHover(item);
  }, { passive: true });
  header.querySelectorAll('.tpc-nav-item').forEach((item) => {
    item.addEventListener('pointerenter', (event) => {
      if (mobile.matches || !mouseHover.matches || event.pointerType !== 'mouse' || keyboardIntent) return;
      queueHover(item);
    });
    item.addEventListener('pointerleave', () => {
      clearTimeout(openTimer);
      if (mobile.matches || keyboardIntent || activeSource === 'activation') return;
      closeTimer = setTimeout(() => closePanel(), 200);
    });
  });
  header.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  header.addEventListener('pointerleave', () => {
    if (mobile.matches || keyboardIntent || activeSource === 'activation') return;
    clearTimeout(openTimer);
    closeTimer = setTimeout(() => closePanel(), 200);
  });
  header.addEventListener('pointerdown', () => { keyboardIntent = false; });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') keyboardIntent = true;
    if (event.key !== 'Escape') return;
    if (activeId) {
      event.preventDefault();
      closePanel({ returnFocus: true });
    } else if (mobile.matches && mobileOpen) {
      event.preventDefault();
      setMobileOpen(false, { returnFocus: true });
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (header.contains(event.target)) return;
    if (mobile.matches && mobileOpen) setMobileOpen(false);
    else closePanel();
  });
  header.addEventListener('focusout', () => {
    setTimeout(() => {
      if (header.contains(document.activeElement)) return;
      if (mobile.matches && mobileOpen) setMobileOpen(false);
      else closePanel();
    }, 0);
  });
  header.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    if (mobile.matches && mobileOpen) setMobileOpen(false);
    else closePanel();
  });
})();
