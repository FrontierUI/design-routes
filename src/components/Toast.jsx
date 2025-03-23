import { useState, useEffect } from 'react';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${typeStyles[type]} transition-opacity duration-300`}
      style={{ zIndex: 99999 }}
    >
      {message}
      <button
        onClick={() => setIsVisible(false)}
        className="ml-2 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
