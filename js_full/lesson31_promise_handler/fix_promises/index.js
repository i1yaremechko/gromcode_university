const successPromise = new Promise(resolve => {
  resolve(32);
});

successPromise
  .then(number => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then(number => {
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then(result => {
    console.log(result); // 256
  });

successPromise
  .then(number => {
    const result = number * 10;
    return result;
  })
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Зверніть увагу, що цей текст вивівся найпершим. Адже це синхронний код, а проміси – асинхронні !!!',
);
