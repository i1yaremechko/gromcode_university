import { renderTasks } from './renderer.js';
import { getTasks } from './storage.js';
import { createNewTask, handleTaskToggle } from './tasks.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const taskId = Number(e.target.dataset.id);
  handleTaskToggle(taskId);
  renderTasks(getTasks());
};

export const onCreateTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value.trim();

  if (!text) return;

  createNewTask(text);
  inputElem.value = '';
  renderTasks(getTasks());
};