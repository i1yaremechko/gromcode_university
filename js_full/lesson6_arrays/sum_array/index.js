/**
 * @param {number[]} arr
 * @return {number}
 */
export function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumArray = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') return null;
    sumArray += arr[i];
  }
  return sumArray;
}
