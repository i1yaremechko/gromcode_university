import { compareSums, sum } from "./index.js";

it(`should return 0 if from > to`, () => {
  const result = sum(5, 2);

  expect(result).toEqual(0);
});

it(`should sum numbers correctly`, () => {
  const result = sum(1, 4);

  expect(result).toEqual(10);
});

it(`should work with equal from and to`, () => {
  const result = sum(5, 5);

  expect(result).toEqual(5);
});

it(`return 'true' if first numbers > second numbers`, () => {
  const result = compareSums(5, 10, 6, 10);

  expect(result).toEqual(true);
});

it(`should return false if first sum is smaller`, () => {
  const result = compareSums(1, 3, 1, 5);

  expect(result).toEqual(false);
});

it(`should return false if sums are equal`, () => {
  const result = compareSums(1, 3, 1, 3);

  expect(result).toEqual(false);
});
