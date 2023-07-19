function formHelper(name) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('gridRow');

  const label = document.createElement('label');
  const input = document.createElement('input');
  label.for = name;
  label.innerHTML = name;
  input.id = name;
  input.name = name;

  gridRow.appendChild(label);
  gridRow.appendChild(input);

  return gridRow;
}
export default formHelper;
