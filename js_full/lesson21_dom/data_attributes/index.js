export const squaredNumbers = () => {
  const numElem = document.querySelectorAll('.number');
  const squareArr = Array.from(numElem).map((elem) => {
    const number = Number(elem.dataset.number);
    const square = number * number;

    elem.dataset.sqareNumber = square;
    return String(square);
  });
  return squareArr;
};

console.log(squaredNumbers());
