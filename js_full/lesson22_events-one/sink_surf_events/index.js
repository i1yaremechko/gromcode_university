const eventsListElem = document.querySelector('.events-list');

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const addEvent = (text, color) => {
  const span = document.createElement('span');
  span.textContent = text;
  span.style.color = color;
  span.style.marginLeft = '8px';

  eventsListElem.append(span);
};

const handleDivCapture = () => addEvent('div', 'grey');
const handlePCapture = () => addEvent('p', 'grey');
const handleSpanCapture = () => addEvent('span', 'grey');

const handleDivBubble = () => addEvent('div', 'green');
const handlePBubble = () => addEvent('p', 'green');
const handleSpanBubble = () => addEvent('span', 'green');

const attachHandlers = () => {
  divElem.addEventListener('click', handleDivCapture, true);
  pElem.addEventListener('click', handlePCapture, true);
  spanElem.addEventListener('click', handleSpanCapture, true);

  divElem.addEventListener('click', handleDivBubble);
  pElem.addEventListener('click', handlePBubble);
  spanElem.addEventListener('click', handleSpanBubble);
};

const removeHandlers = () => {
  divElem.removeEventListener('click', handleDivCapture, true);
  pElem.removeEventListener('click', handlePCapture, true);
  spanElem.removeEventListener('click', handleSpanCapture, true);

  divElem.removeEventListener('click', handleDivBubble);
  pElem.removeEventListener('click', handlePBubble);
  spanElem.removeEventListener('click', handleSpanBubble);
};

clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

attachBtn.addEventListener('click', attachHandlers);
removeBtn.addEventListener('click', removeHandlers);

attachHandlers();