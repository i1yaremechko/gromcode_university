/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumArray = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumArray += arr[i];
  }
  return sumArray;
}

// examples
console.log(getSum([1, 10, -10, 4]));
console.log(getSum([1]));
console.log(getSum([-8, 8]));
console.log(getSum(10, 12, 14));
