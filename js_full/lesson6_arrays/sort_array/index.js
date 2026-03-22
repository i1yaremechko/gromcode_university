function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.slice().sort(function(a, b) {
    return a - b;
  });
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.slice().sort(function(a, b) {
    return b - a; 
  });
}

const numbers = [5, 2, 9, 1];

console.log(sortAsc(numbers));
console.log(sortDesc(numbers));
