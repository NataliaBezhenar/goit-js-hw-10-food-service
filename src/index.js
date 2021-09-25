import templateFunction from './template.hbs';
import menu from './menu.json';

// Elements from html
const dishesList = document.querySelector('.js-menu');
const bodyEl = document.querySelector('body');
const toggleEl = document.getElementById('theme-switch-toggle');

// markup part
const markup = templateFunction(menu);
dishesList.insertAdjacentHTML('beforeend', markup);

// theme change
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggleEl.addEventListener('change', onToggleTheme);
function onToggleTheme(e) {
  if (e.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }
}

if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === Theme.LIGHT) {
  bodyEl.classList.add(Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.DARK) {
  toggleEl.setAttribute('checked', 'checked');
  bodyEl.classList.add(Theme.DARK);
} else {
  bodyEl.classList.remove(Theme.DARK);
  toggleEl.removeAttribute('checked');
}


