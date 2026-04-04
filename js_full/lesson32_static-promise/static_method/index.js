export const getSum = numbers => numbers.reduce((acc, num) => acc + num, 0);

const asyncSum = (...asyncNumber) => Promise.all(asyncNumber)
  .then(numbers => getSum(numbers))
  .catch(error => console.log(`Can't calculate`));