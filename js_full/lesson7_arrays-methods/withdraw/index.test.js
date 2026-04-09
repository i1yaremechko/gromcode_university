import { withdraw } from "./index.js";

it(`get correct data entry, enough balance`, () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(37);
});

it(`get correct data entry, don't enough balance`, () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
});

it(`should get all arguments passed`, () => {
  expect(withdraw([1400, 87, -6], 'John', 50)).toEqual(null);
});

it(`should get arrays of clients`, () => {
  expect(withdraw('Ann, John, User', [1400, 87, -6], 'John', 50)).toEqual(null)
});

it(`should get arrays of balances`, () => {
  expect(withdraw(['Ann', 'John', 'User'], (1400, 87, -6), 'John', 50)).toEqual(null);
});

it(`should get type of string for clients array`, () => {
  expect(withdraw(['Ann', 34, 'User'], [1400, 87, -6], 'John', 50)).toEqual(null);
});

it(`should get type of number for balances array`, () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, '87', -6], 'John', 50)).toEqual(null);
});

it(`should get type of number for amount`, () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', '50')).toEqual(null);
});
