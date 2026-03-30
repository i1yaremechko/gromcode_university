export const finishForm = () => {
  const formElem = document.querySelector('.login-form');

  const loginElem = document.createElement('input');
  loginElem.type = 'text';
  loginElem.name = 'login';
  formElem.prepend(loginElem);

  const typeElem = formElem.querySelector('input[name="password"]');
  typeElem.type = 'password';
};

finishForm();
