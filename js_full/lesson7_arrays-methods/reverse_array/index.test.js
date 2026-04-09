import { reverseArray } from "./index.js";

it(`get correct data`, () => {
  expect(reverseArray([3, 5, 11, 14, 63])).toEqual([63, 14, 11, 5, 3]);
});

it(`should be an array`, () => {
  expect(reverseArray(1, 4, 'text', 32)).toEqual(null);
});

it(`get empty array`, () => {
  expect(reverseArray([])).toEqual([]);
});
