const countOccurrences = (text, str) => {
  const t = text || '';
  if (!str) return null;
  let count = 0;
  let position = 0;
  while (true) {
    position = t.indexOf(str, position);
    if (position === -1) break;
    count += 1;
    position += str.length;
  }
  return count;
};

console.log(countOccurrences('hello world, hello!', 'hello'));
