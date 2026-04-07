let divSum = 0;
let modSum = 0;

const n = Math.floor(Math.random() * 1000) + 1;
const divider = 7;

for (let num = 1; num <= n; num += 1) {
  divSum += Math.floor(num / divider);
  modSum += num % divider;
}

console.log(divSum);
console.log(modSum);
