const btnElem = document.querySelector('.single-use-btn');
btnElem.addEventListener('click', () => {
  if (!btnElem.classList.contains('clicked')) {
    console.log('clicked');
    btnElem.classList.add('clicked');
  }
});
