const baseUrl = 'https://5e5af5eb37d2eh00167913f52.mockapi.io/api/v1/users';

export function getUsersList() {
  return fetch(baseUrl)
    .then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => response.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}