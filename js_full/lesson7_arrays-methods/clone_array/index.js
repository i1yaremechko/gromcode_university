function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr];
}

console.log(cloneArr([4, 7, 11, 5, 2]));
