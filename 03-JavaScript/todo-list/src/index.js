import './style.css';
import header from './header.js';
import card from './card.js';
import Card from './card.js';

const comp = header();
const cardEle = card();

document.body.appendChild(comp);
document.body.appendChild(cardEle);
