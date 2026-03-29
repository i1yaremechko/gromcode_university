export const setButton = (butttonText) => {
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = `<button>${butttonText}</button>`;
};