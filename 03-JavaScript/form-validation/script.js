let form = document.getElementById('theForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordConf');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    document.getElementById('emailError').classList.add('active');
  } else {
    document.getElementById('emailError').classList.remove('active');
  }
});
zipCode.addEventListener('input', () => {
  var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(Number(zipCode.value));
  if (isValidZip) {
    document.getElementById('zipError').classList.add('active');
  } else {
    document.getElementById('zipError').classList.remove('active');
  }
})
passwordConf.addEventListener('input', () => {
  if (password.value !== passwordConf.value) {
    document.getElementById('passwordError').classList.add('active');
  } else {
    document.getElementById('passwordError').classList.remove('active');
  }
})
