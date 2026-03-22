/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  const resultArr = [];
  for (let num = from; num <= to; num += 1) {
    if (num % 3 === 0) {
      resultArr.push(num);
    }
  }
  return resultArr;
}

// examples
console.log(getSpecialNumbers(1, 10));
console.log(getSpecialNumbers(-10, 10));
console.log(getSpecialNumbers(1, 2));
