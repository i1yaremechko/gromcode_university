import { createNewEvent, handleEventToggle } from './events.js';
import { renderCalendar } from './renderer.js';
import { getEvents, getSettings } from './storage.js';

export const onToggleEvent = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const eventId = Number(e.target.dataset.id);
  handleEventToggle(eventId);
  
  renderCalendar(getEvents(), getSettings());
};

export const onCreateEvent = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value.trim();

  if (!text) return;

  createNewEvent(text);
  inputElem.value = '';
  
  renderCalendar(getEvents(), getSettings());
};
