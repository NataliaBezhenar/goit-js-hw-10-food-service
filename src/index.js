import templateFunction from './template.hbs';
import menu from "./menu.json"

const dishesList = document.querySelector(".js-menu");
const markup = templateFunction(menu);
dishesList.insertAdjacentHTML("beforeend", markup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};