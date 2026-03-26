const splitText = (str, len) => {
  if (typeof str !== 'string') {
    return null;
  }
  let lengthSplit = len;
  if (len === undefined) {
    lengthSplit = 10;
  }
  const resultStr = [];
  let startPosition = 0;
  while (true) {
    const chunk = str.slice(startPosition, startPosition + lengthSplit);
    if (chunk.length === 0) {
      break;
    }
    resultStr.push(`${chunk[0].toUpperCase()}${chunk.slice(1)}`);
    startPosition += lengthSplit;
  }
  return resultStr.join('\n');
};

console.log(splitText('texy', 3));
