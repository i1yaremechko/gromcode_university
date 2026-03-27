export const createArrayOfFunctions = (num) => {
  if (num === undefined) return [];
  if (typeof num !== 'number') return null;
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

console.log(createArrayOfFunctions(9)[6]()); // 5
