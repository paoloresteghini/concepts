(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!document.querySelector('.tpc-header')) {
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#navigation');
    const setMenu = (open) => {
      menuButton.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    };
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false); menuButton.focus();
      }
    });
    window.addEventListener('resize', () => { if (innerWidth > 1050) setMenu(false); });
  }

  const motionButton = document.querySelector('.motion-control');
  let paused = reducedMotion.matches;
  const renderMotionState = () => {
    document.documentElement.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.querySelector('span').textContent = paused ? 'Resume motion' : 'Pause motion';
    motionButton.querySelector('svg').innerHTML = paused ? '<path d="m8 5 11 7-11 7Z"/>' : '<path d="M8 5v14M16 5v14"/>';
  };
  renderMotionState();
  motionButton.addEventListener('click', () => { paused = !paused; renderMotionState(); });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) { paused = true; renderMotionState(); }
  });

  const chapters = [...document.querySelectorAll('.chapter')];
  const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
  const chapterImages = [...document.querySelectorAll('.chapter-image')];
  const chapterNav = document.querySelector('.chapter-nav');
  const stageWord = document.querySelector('.stage-word');
  const mobileChapters = window.matchMedia('(max-width: 780px)');
  let active = 'inform';
  document.documentElement.classList.add('js-chapters');
  const setChapter = (id) => {
    active = id;
    chapterLinks.forEach((link) => {
      const selected = link.dataset.chapter === id;
      link.classList.toggle('is-active', selected);
      link.id = `chapter-link-${link.dataset.chapter}`;
      if (mobileChapters.matches) {
        link.setAttribute('role', 'tab');
        link.setAttribute('aria-controls', link.dataset.chapter);
        link.setAttribute('aria-selected', String(selected));
        link.tabIndex = selected ? 0 : -1;
        link.removeAttribute('aria-current');
      } else {
        link.removeAttribute('role'); link.removeAttribute('aria-controls');
        link.removeAttribute('aria-selected'); link.removeAttribute('tabindex');
        if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      }
    });
    chapters.forEach((chapter) => {
      chapter.hidden = mobileChapters.matches && chapter.dataset.chapter !== id;
      if (mobileChapters.matches) {
        chapter.setAttribute('role', 'tabpanel');
        chapter.setAttribute('aria-labelledby', `chapter-link-${chapter.dataset.chapter}`);
      } else {
        chapter.removeAttribute('role'); chapter.removeAttribute('aria-labelledby');
      }
    });
    if (mobileChapters.matches) chapterNav.setAttribute('role', 'tablist');
    else chapterNav.removeAttribute('role');
    chapterImages.forEach((image) => image.classList.toggle('is-active', image.dataset.scene === id));
    stageWord.textContent = id.charAt(0).toUpperCase() + id.slice(1);
  };
  setChapter(active);
  mobileChapters.addEventListener('change', () => setChapter(active));
  chapterLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      if (mobileChapters.matches) event.preventDefault();
      setChapter(link.dataset.chapter);
    });
    link.addEventListener('keydown', (event) => {
      if (!mobileChapters.matches) return;
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % chapterLinks.length;
      if (event.key === 'ArrowLeft') next = (index + chapterLinks.length - 1) % chapterLinks.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = chapterLinks.length - 1;
      if (next !== undefined) {
        event.preventDefault(); setChapter(chapterLinks[next].dataset.chapter); chapterLinks[next].focus();
      }
    });
  });
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (!paused && !reducedMotion.matches && innerWidth > 780) {
        document.documentElement.style.setProperty('--hero-y', `${Math.min(scrollY * .04, 22)}px`);
      }
      const chapter = !mobileChapters.matches && chapters.find((item) => {
        const box = item.getBoundingClientRect();
        return box.top < innerHeight * .55 && box.bottom > innerHeight * .35;
      });
      if (chapter && chapter.dataset.chapter !== active) setChapter(chapter.dataset.chapter);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const issueData = {
    data: { title: 'Data Centers', description: 'Every day, nearly every American uses data centers without even realizing it.', image: '../assets/data-centers.jpg', alt: 'Aerial view of the Kansas City Data Center' },
    energy: { title: 'Energy and the Environment', description: '', image: '../assets/energy.jpg', alt: 'Energy and the Environment policy brief' },
    children: { title: 'Protecting Children Online', description: '', image: '../assets/children.jpg', alt: 'Protecting Children Online policy brief' },
    foreign: { title: 'Foreign Policy: The Middle East', description: '', image: '../assets/middle-east.jpg', alt: 'Foreign Policy: The Middle East policy brief' }
  };
  const issueLinks = [...document.querySelectorAll('[data-issue]')];
  const feature = document.querySelector('.policy-feature');
  const image = document.querySelector('#issue-image');
  const description = document.querySelector('#issue-description');
  function previewIssue(link) {
    const item = issueData[link.dataset.issue];
    document.querySelector('#issue-title').textContent = item.title;
    image.src = item.image; image.alt = item.alt;
    description.textContent = item.description;
    description.hidden = !item.description;
    feature.href = link.href;
    issueLinks.forEach((itemLink) => itemLink.classList.toggle('is-active', itemLink === link));
  }
  issueLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => previewIssue(link));
    link.addEventListener('focus', () => previewIssue(link));
  });
})();
