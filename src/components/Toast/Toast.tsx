import React, { useEffect, useState } from 'react';
import css from './Toast.module.css';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
  closable?: boolean;
}

export default function Toast({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose, 
  closable = true 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose(), 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };


  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${css.toast} ${css[type]}`}>
      <div className={css.content}>
        <span className={css.message}>{message}</span>
      </div>
      {closable && (
        <button onClick={handleClose} className={css.closeButton}>
          ✕
        </button>
      )}
    </div>
  );
}