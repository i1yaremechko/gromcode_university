const cleanTransactionsList = (arr) =>
  arr
.map(el => String(el).trim())
.filter(el => el !== '' && Number.isFinite(Number(el)))
.map(el => `$${Number(el).toFixed(2)}`);

console.log(cleanTransactionsList(['  1.9 ', '16.4', 'abc', '  17.00  ']));