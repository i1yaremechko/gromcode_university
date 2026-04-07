const start = Math.floor(Math.random() * 1000) + 1;
const end = Math.floor(Math.random() * (1000 - start)) + start;
let result = 0;
console.log(`start: ${start}`);
console.log(`end: ${end}`);

for (let num = start; num <= end; num += 1) {
  if (num % 5 === 0) {
    console.log(`num: ${num} | num % 5 === 0`);
    console.log(num);
  } else if (num % 2 === 0 && num % 4 !== 0) {
    console.log(`num: ${num} | num % 2 === 0 && num % 4 !== 0 | result += num`);
    result += num;
  } else if (num % 3 === 0) {
    console.log(`num: ${num} | num % 3 === 0 | result -= num`);
    result -= num;
  } else if (num % 4 === 0) {
    console.log(`num: ${num} | num % 4 === 0 | result *= num`);
    result *= num;
  }
}

console.log(`result: ${result}`);
