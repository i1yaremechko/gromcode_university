function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    copyArr.push(arr[index]);
  }
  return copyArr;
}
