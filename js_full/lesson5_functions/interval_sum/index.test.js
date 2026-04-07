import { getIntervalSum } from "./index.js";

it('should sum even numbers from 0 to 20', () => {
  expect(getIntervalSum(0, 20)).toEqual(110);
});

it('should return 0 if from > to', () => {
  expect(getIntervalSum(10, 5)).toEqual(0);
});

it('should return the number itself if from == to and it is even', () => {
  expect(getIntervalSum(4, 4)).toEqual(4);
});

it('should return 0 if from == to and it is odd', () => {
  expect(getIntervalSum(5, 5)).toEqual(0);
});
