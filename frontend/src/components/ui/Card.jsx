import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100 transition-all duration-200 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;