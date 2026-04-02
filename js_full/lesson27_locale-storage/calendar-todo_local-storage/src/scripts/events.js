import { getEvents, setEvents } from './storage.js';

export const createEvent = (text) => {
  const events = getEvents();
  const newEvent = {
    id: Date.now(),
    text,
  };
  setEvents([...events, newEvent]);
};