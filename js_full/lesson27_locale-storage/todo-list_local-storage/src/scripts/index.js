import { renderTasks } from './renderer.js';
import { getTasks } from './storage.js';
import { onCreateTask, onToggleTask } from './todoList.js';

const initTodoListHandlers = () => {
  const btnElem = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');

  btnElem.addEventListener('click', onCreateTask);
  listElem.addEventListener('click', onToggleTask);
};

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(getTasks());
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks(getTasks());
  }
};

window.addEventListener('storage', onStorageChange);