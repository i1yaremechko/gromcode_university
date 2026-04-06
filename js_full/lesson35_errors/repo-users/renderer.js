const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const repoListElem = document.querySelector('.repo-list');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name || '';
  userLocationElem.textContent = location ? `from ${location}` : '';
};

export const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    const listElem = document.createElement('li');
    listElem.classList.add('repo-list__item');
    listElem.textContent = name;
    return listElem;
  });

  repoListElem.innerHTML = '';
  repoListElem.append(...reposListElems);
};

export const clearData = (defaultAvatar) => {
  repoListElem.innerHTML = '';
  userAvatarElem.src = defaultAvatar;
  userNameElem.textContent = '';
  userLocationElem.textContent = '';
};