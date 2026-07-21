import React from 'react';

const Input = ({
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  name,
  disabled = false,
  required = false,
  error,
  className = '',
  id,
  ...props
}) => {
  // Use provided id or fall back to name for proper label association
  const inputId = id || name;

  return (
    <div className="flex flex-col w-full gap-1.5">
      {/* Label section */}
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input element */}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-3.5 py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 
          border rounded-lg shadow-sm transition-all duration-200 outline-none
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed dark:disabled:bg-gray-800
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/40'
              : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40'
          }
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 font-medium mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;