export const renderCalendar = (events, settings) => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const eventsElems = events.map(({ id, text }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    
    listItemElem.style.backgroundColor = settings.eventColor;
    listItemElem.style.color = '#fff';

    listItemElem.textContent = text;
    return listItemElem;
  });

  listElem.append(...eventsElems);
};