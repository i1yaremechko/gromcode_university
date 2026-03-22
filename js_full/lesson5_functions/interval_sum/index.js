/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */

function getIntervalSum(from, to) {
  let result = 0;
  for (let num = from; num <= to; num += 1) {
    if (num % 2 === 0) {
      result += num;
    }
  }
  return result;
}

// examples
getIntervalSum(0, 20); // ===> 110
getIntervalSum(20, 25); // ===> 66
getIntervalSum(120, 160); // ===> 2940

console.log(getIntervalSum(0, 20));
console.log(getIntervalSum(20, 25));
console.log(getIntervalSum(120, 160));
