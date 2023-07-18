function header() {
  const container = document.createElement('div');
  container.classList.add('header');
  const element = document.createElement('h1');
  element.innerHTML = "to-do list"

  container.appendChild(element);
  return container;
}
export default header;
