function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return min + max > 1000;
}

console.log(checker([4, 20, 300, 699]));
