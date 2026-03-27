import { createCalculator } from "./index.js";

it('should get independent sum', () => {
  const calc1 = createCalculator();
  const calc2 = createCalculator();

  calc1.add(3);
  calc2.add(5);

  expect(calc1.getMemo()).toEqual(3);
  expect(calc2.getMemo()).toEqual(5);
});

it('should get independent decrease', () => {
  const calc1 = createCalculator();
  const calc2 = createCalculator();

  calc1.add(3);
  calc1.decrease(1);
  calc2.add(5);
  calc2.decrease(2);

  expect(calc1.getMemo()).toEqual(2);
  expect(calc2.getMemo()).toEqual(3);
});

it('should get independent reset', () => {
  const calc1 = createCalculator();
  const calc2 = createCalculator();

  calc1.add(3);
  calc2.add(5);
  calc1.reset();

  expect(calc1.getMemo()).toEqual(0);
  expect(calc2.getMemo()).toEqual(5);
});
