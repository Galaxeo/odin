import dog from './dog.png';
function contactPage() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = "contactPage";

  const dogImg = new Image();
  dogImg.src = dog;
  dogImg.id = 'dog';
  const dogDesc = document.createElement('p');
  dogDesc.innerHTML = "What the dog doin?";

  container.appendChild(dogImg);
  container.appendChild(dogDesc);

  return container;
}
export default contactPage;
