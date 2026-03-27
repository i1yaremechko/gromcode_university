let message = 'Just learn it';

export const sendMessage = (autor) => {
  const sender = 'Gromcode';

  console.log(`${autor}, ${message}! Your ${sender}`);
};

export const setMessage = (newMessage) => {
  message = newMessage;
};

sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');