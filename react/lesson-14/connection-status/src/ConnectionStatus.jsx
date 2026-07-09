import React, { useEffect, useState } from 'react';
React.version;

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const statusClass = isOnline ? 'status' : 'status status_offline';
  const statusText = isOnline ? 'online' : 'offline';

  return (
    <div className={statusClass}>{statusText}</div>
  );
}

export default ConnectionStatus;