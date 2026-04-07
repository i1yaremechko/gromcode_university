import { sum } from "./index.js";

it('should get a number', () => {
  const result = sum('11', 11);

  expect(result).toEqual('1111');
});

it('should get sum of numbers', () => {
  const result = sum(11, 11);

  expect(result).toEqual(22);
});
