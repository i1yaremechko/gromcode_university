export const finishForm = () => {
  const formElem = document.querySelector('.login-form');

  const loginElem = document.createElement('input');
  loginElem.type = 'text';
  loginElem.name = 'login';

  const typeElem = formElem.querySelector('input[name="password"]');
  typeElem.type = 'password';
  typeElem.before(loginElem);
};

finishForm();
