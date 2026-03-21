const divider = 7;
const n = 10;

let divSum = 0;
let modSum = 0;

for (let num = 1; num <= n; num += 1) {
  const div = Math.floor(num / divider);
  const mod = num % divider;

  divSum += div;
  modSum += mod;
}

console.log(divSum);
console.log(modSum);
