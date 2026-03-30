export const squaredNumbers = () => {
  const numElem = document.querySelectorAll('.number');
  const squareArr = Array.from(numElem).map((elem) => {
    const number = Number(elem.dataset.number);
    const square = number * number;

    elem.dataset.squaredNumber = square;
    return String(square);
  });
  return squareArr;
};
