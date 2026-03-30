const finishForm = () => {
  const formElem = document.querySelector('.login-form');

  const typeElem = formElem.querySelector('input[type="text"]');
  typeElem.type = 'password';

  const loginElem = document.createElement('input');
  loginElem.type = 'text';
  loginElem.name = 'login';
  formElem.prepend(loginElem);
};

finishForm();

