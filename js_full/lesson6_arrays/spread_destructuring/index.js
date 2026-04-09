/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export function swap(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.length === 0) return [];

  const [firstNum, ...rest] = numbers;
  return [...rest, firstNum];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export function swapManual(numbers) {
  if (!Array.isArray(numbers)) return null;
  if (numbers.length === 0) return [];
  const swapArr = numbers.slice(1);
  swapArr.push(numbers[0]);
  return swapArr;
}
