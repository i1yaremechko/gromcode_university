export const squaredNumbers = () => {
  const numElem = document.querySelectorAll('.number');
  Array.from(numElem).forEach((elem) => {
    const number = Number(elem.dataset.number);
    elem.dataset.squareNumber = number * number;
  });
};
