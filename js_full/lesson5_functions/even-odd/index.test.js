import { getEvenOdd } from "./index.js";

it('should return "even" for even number', () => {
  expect(getEvenOdd(4)).toEqual('even');
});

it('should return "odd" for odd number', () => {
  expect(getEvenOdd(5)).toEqual('odd');
});

it('should return "even" for 0', () => {
  expect(getEvenOdd(0)).toEqual('even');
});

it('should work with negative even numbers', () => {
  expect(getEvenOdd(-2)).toEqual('even');
});

it('should work with negative odd numbers', () => {
  expect(getEvenOdd(-3)).toEqual('odd');
});

it('should work with big even number', () => {
  expect(getEvenOdd(1000000)).toEqual('even');
});

it('should work with big odd number', () => {
  expect(getEvenOdd(999999)).toEqual('odd');
});
