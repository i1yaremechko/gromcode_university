export const getTitle = () => {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
};

export const getDescription = () => {
  const descElem = document.querySelector('.about');
  return descElem.innerText;
};

export const getPlans = () => {
  const plansElem = document.querySelector('.plans');
  return plansElem.innerHTML;
};

export const getGoal = () => {
  const goalElem = document.querySelector('goal');
  return goalElem.outerHTML;
}