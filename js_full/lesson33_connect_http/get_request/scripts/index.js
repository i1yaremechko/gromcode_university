const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const userNameInputElem = document.querySelector('.name-form__input');
const getNameFormBtnElem = document.querySelector('.name-form__btn');

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load user');
      }
      return response.json();
    });

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? `from ${location}`
    : '';
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => renderUserData(userData))
    .catch(() => {
      userNameElem.textContent = 'User not found';
      userLocationElem.textContent = '';
      userAvatarElem.src = '';
    });
};

getNameFormBtnElem.addEventListener('click', onSearchUser);