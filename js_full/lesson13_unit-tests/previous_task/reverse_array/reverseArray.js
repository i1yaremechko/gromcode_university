export const reverseArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return [...arr].reverse();
};
