import { onColorChange, onCreateEvent } from './calendar.js';
import { renderCalendar } from './renderer.js';
import { getEvents, getSettings } from './storage.js';

const initHandlers = () => {
  const btnElem = document.querySelector('.create-task-btn');
  const colorInput = document.querySelector('.color-picker');

  if (btnElem) btnElem.addEventListener('click', onCreateEvent);
  
  // Додай <input type="color" class="color-picker"> у свій HTML для тестів
  if (colorInput) colorInput.addEventListener('input', onColorChange);
};

// Функція синхронізації між вкладками
const onStorageChange = (e) => {
  if (e.key === 'calendarEvents' || e.key === 'calendarSettings') {
    renderCalendar(getEvents(), getSettings());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Вимога №1: завантаження при старті
  renderCalendar(getEvents(), getSettings());
  initHandlers();
});

window.addEventListener('storage', onStorageChange);