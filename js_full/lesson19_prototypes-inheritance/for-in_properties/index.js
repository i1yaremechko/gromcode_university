const getOwnProps = (obj) => {
  const result = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (typeof obj[prop] !== 'function') {
        result.push(prop);
      }
    }
  }
  return result;
};
