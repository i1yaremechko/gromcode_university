export const finishForm = () => {
  const loginElem = document.createElement('input');
  loginElem.type = 'text';
  loginElem.name = 'login';

  const typeElem = document.querySelector('input[name="password"]');
  typeElem.type = 'password';
  typeElem.before(loginElem);
};

finishForm();
