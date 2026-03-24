/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(number => number % 2 === 0 ? number += delta : number);
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));
