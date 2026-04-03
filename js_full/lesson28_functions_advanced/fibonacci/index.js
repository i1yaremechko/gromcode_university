const maxFibNumber = (num) => {
  if (num === 0) {
    return 0;
  }
  const sum = (a) => (b) =>
    a + b > num ? b : sum(b)(a + b);
  return sum(0)(1);
};
