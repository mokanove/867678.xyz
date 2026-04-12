export const initTheme = () => {
  const slider = document.getElementById("theme-slider");
  const buttons = document.querySelectorAll("[data-theme-val]");
  const html = document.documentElement;

  const updateUI = (val: string) => {
    if (!slider) return;
    const positions: Record<string, string> = {
      'system': '0%',
      'light': '100%',
      'dark': '200%'
    };
    slider.style.transform = `translateX(${positions[val] || '0%'})`;
  };

  const applyTheme = (val: string) => {
    if (val === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.classList.toggle('dark', isDark);
      localStorage.removeItem('theme'); 
    } else {
      const isDark = val === 'dark';
      html.classList.toggle('dark', isDark);
      localStorage.setItem('theme', val);
    }
    updateUI(val);
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-theme-val');
      if (val) applyTheme(val);
    });
  });

  const savedTheme = localStorage.getItem('theme') || 'system';
  applyTheme(savedTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      html.classList.toggle('dark', e.matches);
      updateUI('system');
    }
  });
};