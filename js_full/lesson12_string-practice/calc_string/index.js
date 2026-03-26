const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  const num1 = Number(a);
  const num2 = Number(b);

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return null;
  }

  return `${expression} = ${result}`;
};

console.log(calc('2 + 4'));