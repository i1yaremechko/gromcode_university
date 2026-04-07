import { getSum } from "./index.js";

it(`get correct data`, () => {
  expect(getSum([1, 2, 10, -2])).toEqual(11);
});

it(`should be an array`, () => {
  expect(getSum(1, 2, 3)).toEqual(null);
});

it(`sould be a numbers`, () => {
  expect(getSum(1, 2, '3')).toEqual(null);
});
