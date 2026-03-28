export const wallet = {
  transactions: [11, 45, 67, 32, 111],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
