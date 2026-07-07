const baseUrl = 'https://69d36635336103955f8eed65.mockapi.io/api/v1/tasks';

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
       return res.json();
    }
  });
};

export const createTask = newTask => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newTask),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });
};

export const updateTask = (id, updatedTask) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTask),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task status');
    }
  });
};

export const deleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};