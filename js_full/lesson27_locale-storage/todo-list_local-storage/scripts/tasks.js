import { getTasks, setTasks } from './storage.js';

export const generateId = () => {
  const tasks = getTasks();
  return Math.max(0, ...tasks.map(t => t.id)) + 1;
};

export const handleTaskToggle = (taskId) => {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, done: !task.done };
    }
    return task;
  });
  setTasks(updatedTasks);
};

export const createNewTask = (text) => {
  const tasks = getTasks();
  const newTask = {
    id: generateId(),
    text,
    done: false,
  };
  setTasks([...tasks, newTask]);
};