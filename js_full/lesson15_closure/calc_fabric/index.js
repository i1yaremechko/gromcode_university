export const createCalculator = () => {
  let memoryNum = 0;

  const add = (num) => {
    memoryNum += num;
  };

  const decrease = (num) => {
    memoryNum -= num;
  };

  const reset = () => {
    memoryNum = 0;
  };

  const getMemo = () => memoryNum;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
