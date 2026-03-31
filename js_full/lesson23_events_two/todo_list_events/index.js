const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const btnElem = document.querySelector('.create-task-btn');

const generateId = () => Math.max(0, ...tasks.map(t => t.id)) + 1;

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const sortedTasks = [...tasksList].sort((a, b) => a.done - b.done);

  const tasksElems = sortedTasks.map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const onToggleTask = e => {
  if (!e.target.classList.contains('list__item-checkbox')) return;

  const taskId = Number(e.target.dataset.id);

  const task = tasks.find(t => t.id === taskId);
  task.done = !task.done;

  renderTasks(tasks);
};

const onCreateTask = () => {
  const text = inputElem.value.trim();
  if (!text) return;

  const newTask = {
    id: generateId(),
    text,
    done: false,
  };

  tasks.push(newTask);
  inputElem.value = '';

  renderTasks(tasks);
};

btnElem.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onToggleTask);

renderTasks(tasks);
