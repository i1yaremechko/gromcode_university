import { makeCounter } from "./index.js";

it('should make independent counters', () => {
  const counter1 = makeCounter();
  const counter2 = makeCounter();

  counter1();
  counter1();

  expect(counter1()).toEqual(2);
  expect(counter2()).toEqual(0);
});

it('should increment counter on each call', () => {
  const counter = makeCounter();

  expect(counter()).toEqual(0);
  expect(counter()).toEqual(1);
  expect(counter()).toEqual(2);
});
