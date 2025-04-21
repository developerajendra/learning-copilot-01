import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform">
          <img
            src={reactLogo}
            className="h-24 animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Vite + React + Tailwind CSS
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
          count is {count}
        </button>
        <p className="text-gray-700 dark:text-gray-300">
          Edit{' '}
          <code className="bg-gray-200 dark:bg-gray-700 rounded px-1">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
