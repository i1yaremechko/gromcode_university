import { renderTasks } from './renderer.js';
import { getTasks, setTasks } from './storage.js';
import { getTasksList, updateTask } from './tasksEndpoints.js';

export const onUpdateTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;

  const tasks = getTasks();
  const taskId = e.target.dataset.id;
  const done = e.target.checked;

  const { text, createDate } = tasks.find(task => task.id === taskId);

  const updatedTask = {
    text,
    done,
    createDate,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
      .then(newTasksList => {
        setTasks(newTasksList);
        renderTasks(newTasksList);
      });
};
