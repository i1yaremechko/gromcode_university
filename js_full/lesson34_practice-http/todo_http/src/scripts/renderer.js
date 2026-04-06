export const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const sortedTasks = [...tasksList].sort((a, b) => a.done - b.done);

  const tasksElems = sortedTasks.map(({ id, text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list-item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.dataset.id = id;
    checkbox.classList.add('list-item__checkbox');

    if (done) {
      listItemElem.classList.add('list-item__done');
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list-item__text');
    textElem.textContent = text;

    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list-item__delete-btn')
    deleteBtnElem.textContent = '+';
    deleteBtnElem.dataset.id = id;

    listItemElem.append(checkbox, textElem, deleteBtnElem);
    return listItemElem;
  });

  listElem.append(...tasksElems);
};
