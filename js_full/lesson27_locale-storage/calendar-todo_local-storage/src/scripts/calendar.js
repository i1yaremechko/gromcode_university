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

export const onColorChange = (e) => {
  const newColor = e.target.value;
  setSettings({ eventColor: newColor });
  renderCalendar(getEvents(), getSettings());
};