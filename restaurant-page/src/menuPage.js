import cheesecake from './cheesecake.jpg';
import shrimp from './shrimp.jpg';
function menuPage() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = "menuPage";

  const item1 = document.createElement('div');
  item1.classList.add('menuItem');

  const item2 = document.createElement('div');
  item2.classList.add('menuItem');

  const cheesecakeImg = new Image();
  cheesecakeImg.src = cheesecake;
  cheesecakeImg.id = 'cheesecake';

  const cheesecakeDesc = document.createElement('p');
  cheesecakeDesc.innerHTML = "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake";

  const shrimpImg = new Image();
  shrimpImg.src = shrimp;
  shrimpImg.id = 'shrimp';

  const shrimpDesc = document.createElement('p');
  shrimpDesc.innerHTML = "It’s healthier, not greasy, and you’re going to love it. There’s garlic, ginger, green onions, sesame oil, and soy sauce for layers of flavor while peas, carrots, corn, and bits of egg add texture. It’s a perfect weeknight meal when you’re in a rush want a break from the usual chicken dinner.";

  item1.appendChild(cheesecakeImg);
  item1.appendChild(cheesecakeDesc);

  item2.appendChild(shrimpDesc);
  item2.appendChild(shrimpImg);

  container.appendChild(item1);
  container.appendChild(item2);

  return container;
}
export default menuPage;
