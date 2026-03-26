const getTotalPrice = (arr) => {
  const sum = arr.reduce((acc, number) => Math.floor((acc + number) * 100) / 100);
  return `$${sum}`;
};

console.log(getTotalPrice([3, 13.2, 0.003, 13.005]));
