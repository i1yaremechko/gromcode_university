/**
 * @param {number[]} arr
 * @return {number}
 */
const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc, num) => acc + num);
};
// examples
console.log(sum([1, 10, -10, 4]));
console.log(sum([1]));
console.log(sum([-8, 8]));
console.log(sum([2, 5, 6, 3, 0, 3, -1]));
console.log(sum(10, 12, 14));
