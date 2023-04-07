const redp = document.createElement('p');
const h3 = document.createElement('h3');
redp.style.cssText = 'color: red;';
redp.textContent = "Hey I'm red!";
h3.style.cssText = 'color: blue;';
h3.textContent = "I'm a blue h3!";

document.body.appendChild(redp);
document.body.appendChild(h3);

const div = document.createElement('div');
const meToo = document.createElement('p');
const h1 = document.createElement('h1');
div.style.cssText = 'background-color: pink; border-style: solid; border-color: black';
div.appendChild(h1);
div.appendChild(meToo);
h1.textContent = "I'm in a div";
meToo.textContent = "ME TOO!";
document.body.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
  console.log(e.target);
  e.target.style.background = 'blue';
});

const btns = document.querySelectorAll('button');
//Iterating through each button using .forEach
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
