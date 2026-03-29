export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  const listItemElems = tasksList.map(task => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    if (task.done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(task.text);

    return listItemElem;
  });

  listElem.append(...listItemElems);
};

renderTasks(tasks);
