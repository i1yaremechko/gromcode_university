const flatArray = (arr) => arr.flat(Infinity).sort((a, b) => a - b);

console.log(flatArray([4, 6, [5, 7], 8, 2]));
