import './style.css';
import mainImg from './dog.png';
import background from './notarestaurant.jpg';

const contentCont = document.body.querySelector('.content');
function content() {
  const container = document.createElement('div');
  container.classList.add('container');
  const header = document.createElement('h1');
  header.innerHTML = "Not a restaurant!"
  const info = document.createElement('p');
  info.classList.add('restInfo');
  info.innerHTML = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

  const img = new Image();
  img.src = background;
  img.id = 'restImg';

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(info);

  return container;
}
contentCont.appendChild(content());
