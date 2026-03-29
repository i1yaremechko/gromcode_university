export const finishList = () => {
  const listElem = document.querySelector('.list');
  const specialElem = document.querySelector('.special');

  const itemElem1 = document.createElement('li');
  itemElem1.textContent = 1;
  listElem.prepend(itemElem1);

  const itemElem4 = document.createElement('li');
  itemElem4.textContent = 4;
  specialElem.before(itemElem4);

  const itemElem6 = document.createElement('li');
  itemElem6.textContent = 6;
  specialElem.after(itemElem6);

  const itemElem8 = document.createElement('li');
  itemElem8.textContent = 8;
  listElem.append(itemElem8);
};
