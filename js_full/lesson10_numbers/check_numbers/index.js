const getFiniteNumbers = (arr) => arr.filter((value) => Number.isFinite(value));

const getFiniteNumbersV2 = (arr) => arr.filter((value) => isFinite(value));

const getNan = (arr) => arr.filter((value) => Number.isNaN(value));

const getNanV2 = (arr) => arr.filter((value) => isNaN(value));

const getIntegers = (arr) => arr.filter((value) => Number.isInteger(value));

const array = [3, 7.1, 6, 'text', '12', 4, 9.23, NaN];

console.log(getFiniteNumbers(array));
console.log(getFiniteNumbersV2(array));
console.log(getNan(array));
console.log(getNanV2(array));
console.log(getIntegers(array));
