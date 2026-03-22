function findDivCount(a, b, n) {
  let count = 0;
  for (let num = a; num <= b; num += 1) {
    if (num % n === 0) {
      count += 1;
    }
  }
  return count;
}

console.log(findDivCount(2, 12, 4));
