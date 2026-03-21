const from = 2;
const to = 7;
let result = 1;
for (let num = from; num <= to; num += 1) {
  if (num % 2 !== 0) {
    result *= num;
  }
}
console.log(result);