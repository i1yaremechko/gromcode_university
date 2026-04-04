const getSum = numbers => numbers.reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumber) => Promise.all(asyncNumber)
  .then(numbers => getSum(numbers))
  .catch(error => console.log(`Can't calculate`));