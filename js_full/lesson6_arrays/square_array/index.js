/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    resultArr.push(arr[i] * arr[i]);
  }
  return resultArr;
}

// examples
console.log(squareArray([1, 10, 9, 11]));
console.log(squareArray([10, 0, -4]));
console.log(squareArray([1]));
