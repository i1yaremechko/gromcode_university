/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const swapArr = numbers.slice(1);
  swapArr.push(numbers[0]);
  return swapArr;
}

// examples
console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));
