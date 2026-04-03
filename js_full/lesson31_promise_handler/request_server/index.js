const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

serverResponsePromise
  .then(response => response.json())
    .then (data => {
      const { name, age } = data;
      return { name, age };
    })
  .then(result => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log(
  '!!! Зверніть увагу, що цей текст вивівся найпершим. Адже це синхронний код, а проміси – асинхронні !!!',
);
