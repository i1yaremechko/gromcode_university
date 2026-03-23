const getSubArray = (arr, numberOfElements) => {
  const resultArr = [];
  for (let index = 0; index < numberOfElements; index += 1) {
    resultArr.push(arr[index]);
  }
  return resultArr;
};

console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));
