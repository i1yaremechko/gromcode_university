/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
export function sum(from, to) {
  if (from > to) return 0;

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
export function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}
