const handleClick = (event) => {
  console.log(event.target.textContent);
};

const btnElems = document.querySelectorAll('.btn');
Array.from(btnElems).forEach((btnElem) => {
  btnElem.addEventListener('click', handleClick);
});
