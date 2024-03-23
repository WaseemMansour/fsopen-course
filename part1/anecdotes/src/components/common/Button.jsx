import React from 'react'

export const Button = ({ onClick, children, ...props }) => (
  <button
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
