/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function sum(from, to) {
  let result = 0;
  for (let num = from; num <= to; num += 1) {
    result += num;
  }
  return result;
}

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

// examples
console.log(sum(5, 10));
console.log(sum(11, 11));

console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(-2, 5, 5, 9));
