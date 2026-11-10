(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  root.dataset.theme = storedTheme || preferredTheme;

  const updateButton = () => {
    if (!toggle) return;
    const isDark = root.dataset.theme === 'dark';
    toggle.textContent = isDark ? '☀' : '☾';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  updateButton();

  if (toggle) {
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      updateButton();
    });
  }
})();
