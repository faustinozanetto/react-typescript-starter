import { Counter } from './components/counter';
import React from 'react';
import { TechLogo } from './components/tech-logo';

const App: React.FC = () => {
  return (
    <div className='grid place-content-center min-h-screen bg-white relative'>
      {/* Version */}
      <div className='absolute left-0 bottom-0 m-2 p-2 bg-neutral-100 rounded-lg shadow-xl border-neutral-200 border-2'>
        <span className='font-medium'>
          Version <span className='text-indigo-800 font-bold'>0.0.1</span>
        </span>
      </div>
      <div className='flex flex-col gap-4 items-center justify-center bg-neutral-100 rounded-lg shadow-xl p-8 border-neutral-200 border-2'>
        {/* Tech Logos */}
        <div className='flex gap-4 bg-indigo-100 p-4 rounded-lg border-2 border-indigo-400'>
          <TechLogo logo='/images/vitejs-logo.svg' label='ViteJS Logo' />
          <TechLogo logo='/images/reactjs-logo.svg' label='ReactJS Logo' />
          <TechLogo logo='/images/tailwindcss-logo.svg' label='TailwindCSS Logo' />
        </div>
        {/* Titles */}
        <h1 className='text-4xl font-extrabold text-neutral-900 mb-2'>React Typescript Starter</h1>
        <p className='text-neutral-900 text-lg'>Start editing <code className='border-2 border-indigo-400 rounded-md p-1 bg-indigo-100 text-indigo-800 font-medium'>index.tsx</code> and save to see updates!</p>
        {/* Counter */}
        <Counter />
      </div>
    </div>
  );
};

export default App;
