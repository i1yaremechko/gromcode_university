import { swap, swapManual } from "./index.js";

it(`correct data input for swap`, () => {
  expect(swap([4, 10, 5, 3])).toEqual([10, 5, 3, 4]);
});

it(`correct data input for swapManual`, () => {
  expect(swapManual([4, 10, 5, 3])).toEqual([10, 5, 3, 4]);
});

it(`should be an array input for swap`, () => {
  expect(swap(4, 10, 5, 3)).toEqual(null);
});

it(`should be an array input for swapManual`, () => {
  expect(swapManual(4, 10, 5, 3)).toEqual(null);
});

it(`get empty array input for swap`, () => {
  expect(swap([])).toEqual([]);
});

it(`get empty array input for swapManual`, () => {
  expect(swapManual([])).toEqual([]);
});
