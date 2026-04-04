export const makePromise = (number) => Promise.resolve(number);

makePromise(17).then(number => {
  console.log(number);
});
