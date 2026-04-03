export const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
  .then(value => new Promise((resolve) => {
      setTimeout(() => {
        const square = value * value;
        console.log(`Squared value: ${square}`);
        resolve(square);
      }, 500);
    })
  )
  .then(value => {
    const doubleSquare = value * 2;
    console.log(`Doubled value: ${doubleSquare}`);
    return doubleSquare;
  });
