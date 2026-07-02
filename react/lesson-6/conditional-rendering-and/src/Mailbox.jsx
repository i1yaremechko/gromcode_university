import React from 'react';
React.version;

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadMessages > 0 && <span className="mailbox__count">{unreadMessages.length}</span>}
      
    </div>
  );
}

export default Mailbox;