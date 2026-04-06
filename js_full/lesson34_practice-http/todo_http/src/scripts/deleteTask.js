import { renderTasks } from './renderer.js';
import { setTasks } from './storage.js';
import { deleteTask, getTasksList } from './tasksEndpoints.js';

export const onDeleteTask = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;

  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setTasks(newTasksList);
      renderTasks(newTasksList);
    });
};
