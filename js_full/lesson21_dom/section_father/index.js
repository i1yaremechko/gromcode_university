const getSection = (num) => {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  return spanElem.closest('div[data-section]');
};
