import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children } = props;

  return (
    <button className='bg-indigo-500 px-4 py-2 inline-flex items-center justify-center rounded-lg font-semibold text-neutral-50 hover:bg-indigo-600' onClick={onClick}>{children}</button>
  )
}