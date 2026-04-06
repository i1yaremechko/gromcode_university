import { renderTasks } from './renderer.js';
import { setTasks } from './storage.js';
import { getTasksList } from './tasksEndpoints.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(newTaskList => {
      setTasks(newTaskList);
      renderTasks(newTaskList);
    })

  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks(JSON.parse(e.newValue));
  }
};

window.addEventListener('storage', onStorageChange);