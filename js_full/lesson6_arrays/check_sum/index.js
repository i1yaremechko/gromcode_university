/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum > 100;
};

// examples
console.log(checkSum([10, 10, 10]));
console.log(checkSum([10, 99, 1]));
console.log(checkSum([-6, -3, 200]));
