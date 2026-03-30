export const getSection = (num) => {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  const section = spanElem.closest('.box');

  return String(section.dataset.section);
};

document.addEventListener('DOMContentLoaded', getSection);
