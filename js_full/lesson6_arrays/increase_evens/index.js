/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    let elem = arr[i];
    if (elem % 2 === 0) {
      elem += delta;
    }
    resultArr.push(elem);
  }
  return resultArr;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));
