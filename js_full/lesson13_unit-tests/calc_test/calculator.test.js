import { calc } from "./calculator.js";

it('should get sum of numbers', () => {
  const result = calc('2 + 3');

  expect(result).toEqual('2 + 3 = 5');
});

it('should get difference of numbers', () => {
  const result = calc('5 - 2');

  expect(result).toEqual('5 - 2 = 3');
});

it('should get product of numbers', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it('should get quotient of numbers', () => {
  const result = calc('10 / 2');

  expect(result).toEqual('10 / 2 = 5');
});

it('should get string', () => {
  const result = calc(123);

  expect(result).toEqual(null);
});
