export const getDiff = (startDate, endDate) => {
  const diffMs = Math.abs(endDate - startDate);

  const diffDate = new Date(diffMs);

  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  const hours = diffDate.getUTCHours();
  const minutes = diffDate.getUTCMinutes();
  const seconds = diffDate.getUTCSeconds();

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const d1 = new Date(2026, 3, 1, 10, 0, 0);
const d2 = new Date(2026, 3, 3, 12, 30, 20);

console.log(getDiff(d1, d2));
