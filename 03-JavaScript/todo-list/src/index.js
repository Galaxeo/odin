import './style.css';
import card from './form.js';

const formEle = card();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

//credit to hyperplexed
document.querySelector("h1").onclick = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
document.body.appendChild(formEle);
