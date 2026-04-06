import { fetchRepositories, fetchUserData } from './gateways.js';
import { clearData, renderRepos, renderUserData } from './renderer.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const spinnerElem = document.querySelector('.spinner');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const toggleSpinner = () => {
  spinnerElem.classList.toggle('spinner_hidden');
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  if (!userName) return;

  toggleSpinner();
  clearData(defaultAvatar);

  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return fetchRepositories(userData.repos_url);
    })
    .then(reposList => {
      renderRepos(reposList);
    })
    .catch(err => {
      alert(err.message);
    })
    .finally(() => {
      toggleSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);