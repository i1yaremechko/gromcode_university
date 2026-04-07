let oddsSum = 0;
for (let n = 0; n <= 1000; n += 1) {
  if (n % 2 !== 0) {
    console.log('Found');
    oddsSum += n;
  }
}
if (oddsSum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
