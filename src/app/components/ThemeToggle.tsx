'use client';

import { useDarkMode } from '@/hooks/useDarkMode';

export function ThemeToggle() {
  const { isDark, setTheme } = useDarkMode();

  return (
    <button
      onClick={() => setTheme(!isDark)}
      className={`px-4 py-2 rounded-md transition-colors duration-150 ${
        isDark 
          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {isDark ? (
        <div className="flex items-center">
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            />
          </svg>
          Light Mode
        </div>
      ) : (
        <div className="flex items-center">
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          Dark Mode
        </div>
      )}
    </button>
  );
} 