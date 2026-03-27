import getMinSquaredNumber from "./getMinSquaredNumber.js";

it('should array is not empty', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should array is not string', () => {
  const result = getMinSquaredNumber('some_text');

  expect(result).toEqual(null);
});

it('should get min squared abs numbers', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
