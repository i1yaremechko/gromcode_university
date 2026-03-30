const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

const btnElems = document.querySelectorAll('.pagination__page');
Array.from(btnElems).forEach((btnElem) => {
  btnElem.addEventListener('click', handleClick);
});
