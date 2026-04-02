export const renderCalendar = (eventsList, settings) => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const sortedEvents = [...eventsList].sort((a, b) => a.done - b.done);

  const eventsElems = sortedEvents.map(({ id, text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');

    listItemElem.style.backgroundColor = settings.eventColor;

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.dataset.id = id;
    checkbox.classList.add('list__item-checkbox');

    if (done) {
      listItemElem.classList.add('list__item_done');
    }

    listItemElem.append(checkbox, text);
    return listItemElem;
  });

  listElem.append(...eventsElems);
};
