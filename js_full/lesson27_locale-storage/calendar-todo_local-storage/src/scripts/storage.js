const EVENTS_KEY = 'calendarEvents';
const SETTINGS_KEY = 'calendarSettings';

export const getEvents = () => {
  const data = localStorage.getItem(EVENTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const setEvents = (events) => {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const getSettings = () => {
  const data = localStorage.getItem(SETTINGS_KEY);
  // за замовчуванням синій колір
  return data ? JSON.parse(data) : { eventColor: '#0000ff' };
};

export const setSettings = (settings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};