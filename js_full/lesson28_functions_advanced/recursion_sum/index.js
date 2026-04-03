let a = 1;
let res = 0;

export const sum = (num) => {
  if (a > num) {
    return res;
  }
  res += a;
  a += 1;
  console.log(res);
  sum(num);
  return res;
};
