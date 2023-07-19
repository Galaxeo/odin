import formHelper from './formHelper.js';
function createForm() {
  const formCont = document.createElement('div');
  formCont.classList.add('formCont');

  const form = document.createElement('form');
  form.classList.add('cardForm');

  const taskRow = formHelper('Task');

  form.appendChild(taskRow);

  formCont.appendChild(form);
  return formCont;
}
export default createForm;
