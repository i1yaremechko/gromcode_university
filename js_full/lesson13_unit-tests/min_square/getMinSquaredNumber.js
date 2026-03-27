export default (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const minAbs = array.reduce((min, num) => {
    return Math.abs(num) < Math.abs(min) ? num : min;
  }, array[0]);

  return minAbs ** 2;
};
