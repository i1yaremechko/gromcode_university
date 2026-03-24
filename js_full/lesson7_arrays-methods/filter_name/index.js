const filterNames = (arr, text) =>
  arr.filter((person) => person.includes(text) && person.length > 5);

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));