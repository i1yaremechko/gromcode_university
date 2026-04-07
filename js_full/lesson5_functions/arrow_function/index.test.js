import { square } from "./index.js";

it('should get square of numbers', () => {
  const result = square(4);

  expect(result).toEqual(16);
});
