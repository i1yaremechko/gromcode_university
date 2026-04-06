import { onCreateTask } from './createTask.js';
import { onDeleteTask } from './deleteTask.js';
import { onUpdateTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const btnElem = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');

  btnElem.addEventListener('click', onCreateTask);
  listElem.addEventListener('click', e => {
    if (e.target.classList.contains('list-item__checkbox')) {
      onUpdateTask(e);
    } else if (e.target.classList.contains('list-item__delete-btn')) {
      onDeleteTask(e);
    }
  });
};
