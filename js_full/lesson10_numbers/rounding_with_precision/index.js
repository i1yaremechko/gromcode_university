/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const round = 10 ** prec;
  return [
    Math.floor(num * round) / round,
    Math.trunc(num * round) / round,
    Math.ceil(num * round) / round,
    Math.round(num * round) / round,
    Number(num.toFixed(prec)),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
