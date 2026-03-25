/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  const obj = keysList.reduce((acc, key, value) => {
    acc[key] = valuesList[value];
    return acc;
  }, {});
  return obj;
}

// examples
const keys1 = ['name', 'address', 'age'];
const values1 = ['Vasyl', 'Ukraine', 34];
const keys2 = ['name', 'address', 'age'];
const values2 = ['John', 'England', 32];
const keys3 = ['name', 'address', 'age'];
const values3 = ['Ronn', 'USA', 35];
console.log(buildObject(keys1, values1)); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
console.log(buildObject(keys2, values2));
console.log(buildObject(keys3, values3));
