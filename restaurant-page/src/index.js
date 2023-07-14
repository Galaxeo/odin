import './style.css';
import homePage from './homePage.js';
import menuPage from './menuPage.js';
import openPage from './openPage.js';
import contactPage from './contactpage.js';

const contentCont = document.body.querySelector('.content');

function headNav() {
  const container = document.createElement('div');
  container.classList.add('header');

  const home = document.createElement('button');
  home.id = "homeBtn";
  home.innerHTML = "Home";
  home.addEventListener("click", () => {
    openPage("homePage");
  });

  const menu = document.createElement('button');
  menu.id = "menuBtn";
  menu.innerHTML = "Menu";
  menu.addEventListener("click", () => {
    openPage("menuPage");
  });

  const contact = document.createElement('button');
  contact.id = "contactBtn";
  contact.innerHTML = "Contact";
  contact.addEventListener("click", () => {
    openPage("contactPage");
  });


  container.appendChild(home);
  container.appendChild(menu);
  container.appendChild(contact);

  return container;
}
const homePageEle = homePage();
const headerEle = headNav();
const menuPageEle = menuPage();
const contactEle = contactPage();

contentCont.appendChild(headerEle);
contentCont.appendChild(homePageEle);
contentCont.appendChild(menuPageEle);
contentCont.appendChild(contactEle);

document.getElementById("homeBtn").click();
