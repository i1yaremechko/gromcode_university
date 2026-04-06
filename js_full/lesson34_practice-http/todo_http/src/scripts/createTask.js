import { renderTasks } from './renderer.js';
import { setTasks } from './storage.js';
import { createTask, getTasksList } from './tasksEndpoints.js';

export const onCreateTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value.trim();

  if (!text) return;

  inputElem.value = '';

  const newTask = {
    text,
    createDate: new Date().toISOString(),
    done: false,
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setTasks(newTasksList);
      renderTasks(newTasksList);
    });
};
