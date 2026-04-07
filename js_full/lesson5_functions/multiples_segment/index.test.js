import { findDivCount } from './index.js';

it('should count numbers divisible by 4 from 2 to 12', () => {
  expect(findDivCount(2, 12, 4)).toEqual(3);
});

it('should return 0 if no numbers divisible', () => {
  expect(findDivCount(1, 3, 5)).toEqual(0);
});

it('should count numbers divisible by 1 (all numbers)', () => {
  expect(findDivCount(5, 10, 1)).toEqual(6); // 5,6,7,8,9,10
});

it('should work if a == b and divisible', () => {
  expect(findDivCount(8, 8, 2)).toEqual(1);
});

it('should work if a == b and not divisible', () => {
  expect(findDivCount(7, 7, 3)).toEqual(0);
});

it('should work for negative numbers', () => {
  expect(findDivCount(-8, -2, 2)).toEqual(4); // -8,-6,-4,-2
});
