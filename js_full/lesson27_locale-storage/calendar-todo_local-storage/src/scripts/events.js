import { getEvents, setEvents } from './storage.js';

export const generateId = () => {
  const events = getEvents();
  return events.reduce((max, event) => (event.id > max ? event.id : max), 0) + 1;
};

export const handleEventToggle = (eventId) => {
  const events = getEvents();
  const updatedEvents = events.map(event => {
    if (event.id === eventId) {
      return { ...event, done: !event.done };
    }
    return event;
  });
  setEvents(updatedEvents);
};

export const createNewEvent = (text) => {
  const events = getEvents();
  const newEvent = {
    id: generateId(),
    text,
    done: false,
  };
  const updatedEvents = [...events, newEvent];
  setEvents(updatedEvents);
};
