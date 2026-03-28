/* eslint-disable */

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed++;

      if (this.secondsPassed === 60) {
        this.minsPassed++;
        this.secondsPassed = 0;
      }

    }, 1000);
  },
  getTime() {
    const sec = this.secondsPassed.toString().padStart(2, '0');
    return `${this.minsPassed}:${sec}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};