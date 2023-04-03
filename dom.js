const redp = document.createElement('p');
const h3 = document.createElement('h3');
redp.style.cssText = 'color: red;';
redp.textContent = "Hey I'm red!";
h3.style.cssText = 'color: blue;';
h3.textContent = "I'm a blue h3!";
const div = document.createElement('div');
const meToo = document.createElement('p');
const h1 = document.createElement('h1');
div.style.cssText = 'background-color: pink; border-style: solid; border-color: black';
div.appendChild(h1);
div.appendChild(meToo);
h1.textContent = "I'm in a div";
meToo.textContent = "ME TOO!";

