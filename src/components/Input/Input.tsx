import React, { useState } from 'react';
import css from './Input.module.css';

interface InputProps {
    type?: string; 
    clearable?: boolean; 
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function Input ({ type = 'text', clearable = false, value = '', onChange, placeholder = '', disabled = false} : InputProps)  {
    const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    onChange('');
    };
    
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  let inputType = type;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  }

  return (
    <div className={css.inputContainer}>
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={css.inputField}
      />
      
        {type === 'password' && value && (
          <button 
            type="button" 
            onClick={togglePassword}
            className={css.inputButton}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        
        {clearable && value && (
          <button 
            type="button" 
            onClick={handleClear}
            className={css.inputButton}
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
    </div>
  );
};
