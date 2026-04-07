import { getSpecialNumbers } from "./index.js";

it(`correct data input`, () => {
  expect(getSpecialNumbers(-10, 10)).toEqual([-9, -6, -3, 0, 3, 6, 9]);
});

it(`should be a numbers`, () => {
  expect(getSpecialNumbers(2, '5')).toEqual(null);
});
