const splitString = (str, len) => {
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
    const dot = '.'.repeat(lengthSplit - chunk.length);
    resultStr.push(`${chunk}${dot}`);
    startPosition += lengthSplit;
  }
  return resultStr;
};

console.log(splitString('texy', 3));
