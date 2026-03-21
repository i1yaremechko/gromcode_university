const start = 1;
const end = 10;
let result = 0;
for (let num = start; num <= end; num += 1) {
  if (num % 5 === 0) {
    console.log(num);
  } else if (num % 2 === 0 && num % 4 !== 0) {
    result += num;
  } else if (num % 3 === 0) {
    result -= num;
  } else if (num % 4 === 0) {
    result *= num;
  }
}
console.log(`result: ${result}`);