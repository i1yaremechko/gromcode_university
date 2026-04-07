/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function getKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

const obj = { name: 'John Doe', age: 17, interest: 'football' };
getKeys(obj);