function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const countArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (!countArray.includes(array[i])) {
      countArray.push(array[i]);
    }
  }
  return countArray.length;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
