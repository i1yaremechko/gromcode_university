function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (!resultArray.includes(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(removeDuplicates([3, 5, 7, 5, 6, 2, 3, 4]));
