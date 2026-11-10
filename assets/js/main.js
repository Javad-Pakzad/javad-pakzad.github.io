(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('jp-academic-theme'); } catch (_) { /* Storage may be unavailable. */ }
  const initialTheme = savedTheme || 'light';
  root.dataset.theme = initialTheme;

  const updateThemeButton = () => {
    if (!themeButton) return;
    const isDark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.textContent = isDark ? '☼' : '☾';
  };
  updateThemeButton();

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('jp-academic-theme', root.dataset.theme); } catch (_) { /* Keep theme for this page view. */ }
    updateThemeButton();
  });

  menuButton?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('is-open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) {
        menuButton.setAttribute('aria-label', 'Open navigation menu');
        menuButton.textContent = '☰';
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation menu');
      if (menuButton) menuButton.textContent = '☰';
    }
  });

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelector('[data-print-cv]')?.addEventListener('click', () => window.print());
})();
