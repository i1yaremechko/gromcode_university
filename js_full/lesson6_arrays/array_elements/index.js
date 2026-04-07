/**
 * @param {number[]} arr
 * @return {number[]}
 */
export function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return [];
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
