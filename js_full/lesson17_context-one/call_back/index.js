export const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  }
};

callbackPrompt.showDefferedPrompt(1000);
