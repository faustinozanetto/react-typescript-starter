import React from 'react';

const App: React.FC = () => {
  return <div className='grid place-content-center min-h-screen bg-white'>
    <div className='flex flex-col gap-4 items-center justify-center bg-neutral-100 rounded-lg shadow-xl p-12 border-neutral-200 border-2'>
      <img src='/images/vitejs-logo.svg' alt='Vite JS Logo' className='h-40 hover:scale-105 transition-transform' />
      <h1 className='text-4xl font-extrabold text-neutral-900 mb-2'>React Typescript Starter</h1>
      <p className='text-neutral-900 text-lg'>Start editing <code className='border-2 border-indigo-600 rounded-md p-1 bg-indigo-100 text-indigo-800 font-medium'>index.tsx</code> and save to see updates!</p>
    </div>
  </div>;
};

export default App;
