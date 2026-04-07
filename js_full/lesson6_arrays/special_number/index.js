/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
export function getSpecialNumbers(from, to) {
  if (typeof(from) === 'string' || typeof(to) === 'string') return null;
  const resultArr = [];
  for (let num = from; num <= to; num += 1) {
    if (num % 3 === 0) resultArr.push(num);
  }
  return resultArr;
}
