import { renderCalendar } from './renderer.js';
import { getEvents, getSettings, setSettings } from './storage.js';
import { onCreateEvent, onToggleEvent } from './todoList.js';

const initHandlers = () => {
  const btnElem = document.querySelector('.create-task-btn');
  const listElem = document.querySelector('.list');
  const colorPicker = document.querySelector('.color-picker');

  btnElem.addEventListener('click', onCreateEvent);
  listElem.addEventListener('click', onToggleEvent);
  
  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      setSettings({ eventColor: e.target.value });
      renderCalendar(getEvents(), getSettings());
    });
  }
};

const onStorageChange = (e) => {
  if (e.key === 'calendarEvents' || e.key === 'calendarSettings') {
    renderCalendar(getEvents(), getSettings());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar(getEvents(), getSettings());
  initHandlers();
});

window.addEventListener('storage', onStorageChange);
