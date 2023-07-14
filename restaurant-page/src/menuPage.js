import cheesecake from './cheesecake.jpg';
import shrimp from './shrimp.jpg';
function menuPage() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = "menuPage";

  const cheesecakeImg = new Image();
  cheesecakeImg.src = cheesecake;
  cheesecakeImg.id = 'cheesecake';

  const shrimpImg = new Image();
  shrimpImg.src = shrimp;
  shrimpImg.id = 'shrimp';

  container.appendChild(cheesecakeImg);
  container.appendChild(shrimpImg);

  return container;
}
export default menuPage;
