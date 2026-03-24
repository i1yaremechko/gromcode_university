function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr].reverse();
}

console.log(reverseArray([3, 5, 11, 14, 63]));