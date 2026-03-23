/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5));
