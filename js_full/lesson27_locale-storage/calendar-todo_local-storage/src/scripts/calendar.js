import { createEvent } from './events.js';
import { renderCalendar } from './renderer.js';
import { getEvents, getSettings, setSettings } from './storage.js';

export const onCreateEvent = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value.trim();

  if (!text) return;

  createEvent(text);
  inputElem.value = '';
  renderCalendar(getEvents(), getSettings());
};

// Функція для ініціалізації вибору кольору (якщо такий input є на сторінці)
export const onColorChange = (e) => {
  const newColor = e.target.value;
  setSettings({ eventColor: newColor });
  // Важливо: перемальовуємо локально
  renderCalendar(getEvents(), getSettings());
};