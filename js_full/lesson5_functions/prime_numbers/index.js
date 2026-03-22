/**
 * @param {number} num
 * @return {undefined}
 */

function getPrimes(num) {
  for (let n = 2; n <= num; n += 1) {
    let isPrime = true;

    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(n);
    }
  }
}

getPrimes(25);
