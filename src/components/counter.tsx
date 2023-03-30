import React, { useState } from 'react';
import { Button } from './button';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);


  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className='flex flex-col items-center gap-2 justify-center'>
      <span className='text-lg font-medium'>Counter: {count}</span>
      <div className='flex gap-2'>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}