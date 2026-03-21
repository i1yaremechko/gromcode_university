for (let factorOne = 1; factorOne <= 5; factorOne += 1) {
  console.log(`Table for ${factorOne}`);
  for (let factorTwo = 1; factorTwo <= 10; factorTwo += 1) {
    let product = factorOne * factorTwo;
    console.log(`${factorOne} x ${factorTwo} = ${product}`);
  }
}