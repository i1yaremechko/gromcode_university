const baseUrl = 'https://69d36635336103955f8eed65.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const onInputChange = () => {
  const isValid = formElem.reportValidity();

  if (isValid) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));

      formElem.reset();

      submitBtnElem.setAttribute('disabled', true);
    })
    .catch(() => {
      console.error('Failed to create user');
    });
};

formElem.addEventListener('input', onInputChange);
formElem.addEventListener('submit', onFormSubmit);