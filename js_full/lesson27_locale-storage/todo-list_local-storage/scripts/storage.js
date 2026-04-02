const storageKey = 'tasksList';

export const setTasks = (value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const getTasks = () => {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : [];
};
