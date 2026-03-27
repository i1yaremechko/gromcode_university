import { reverseArray } from "./reverseArray";

it('should array is not empty', () => {
  const result = reverseArray([]);

  expect(result).toEqual(null);
});

it('should array is not string', () => {
  const result = reverseArray('some_text');

  expect(result).toEqual(null);
});

it('should reverse array', () => {
  const result = reverseArray([3, 5, 11, 14, 63]);

  expect(result).toEqual([63, 14, 11, 5, 3]);
});
