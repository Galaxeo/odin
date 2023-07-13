import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import myImg from './image.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check console!';
  btn.onclick = printMe();

  img = new Image();
  img.src = myImg;

  element.appendChild(btn);
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
