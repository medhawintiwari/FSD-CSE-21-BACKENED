import React from 'react';
import { CheckCircle, WarningCircle, Info } from '@phosphor-icons/react';

function Toast({ title, message, type }) {
  const getIcon = () => {
    if (type === 'success') return <CheckCircle weight="fill" />;
    if (type === 'error') return <WarningCircle weight="fill" />;
    return <Info weight="fill" />;
  };

  return (
    <div className={`toast ${type}`}>
      <div className="toast-icon">
        {getIcon()}
      </div>
      <div className="toast-content">
        <div className="toast-title">{title}</div>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
}

export default Toast;
