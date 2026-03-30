export const finishForm = () => {
  const typeElem = document.querySelector('input[name="password"]');

  const loginElem = document.createElement('input');
  loginElem.type = 'text';
  loginElem.name = 'login';

  typeElem.type = 'password';
  typeElem.before(loginElem);
};

document.addEventListener('DOMContentLoaded', finishForm);
