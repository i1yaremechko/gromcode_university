import { getArrayBounds } from "./index.js";

it(`should return correct array`, () => {
  expect(getArrayBounds([1, 2, 3, 4, 5, 6])).toEqual([6, 1, 6]);
});

it(`should be an array`, () => {
  expect(getArrayBounds(1, 3, 5, 6)).toEqual(null);
});

it('get empty array', () => {
  expect(getArrayBounds([])).toEqual([]);
});
