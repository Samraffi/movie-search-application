import { useEffect } from 'react';
import { AlertProps } from '../types/dialogs';

const Alert = ({ message, type = 'error', isOpen, onClose }: AlertProps) => {
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(onClose, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  let alertColor = 'bg-red-500';
  if (type === 'success') {
    alertColor = 'bg-green-500';
  } else if (type === 'warning') {
    alertColor = 'bg-yellow-500';
  }

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${alertColor}`}>
      {message}
    </div>
  );
};

export default Alert;
