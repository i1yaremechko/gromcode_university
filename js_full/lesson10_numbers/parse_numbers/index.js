const getParsedIntegers = (arr) =>
  arr.map((number) => Number.parseInt(number, 10));

const getParsedIntegersV2 = (arr) => arr.map((number) => parseInt(number, 10));

const getParsedFloats = (arr) => arr.map((number) => Number.parseFloat(number));

const getParsedFloatsV2 = (arr) => arr.map((number) => parseFloat(number));

const array = ['03', '7.1', '6.text', '12.3.1'];

console.log(getParsedIntegers(array));
console.log(getParsedIntegersV2(array));
console.log(getParsedFloats(array));
console.log(getParsedFloatsV2(array));
