'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#f0f3f8] to-[#e8ecf1]">
      <div className="flex flex-col items-center gap-12 px-8">
        {/* Title */}
        <h1 className="text-5xl font-bold tracking-wider text-[#5a7c8c]">COUNTER</h1>

        {/* Display Area with Neumorphism */}
        <div className="relative">
          <div className="w-64 h-64 rounded-[3rem] bg-gradient-to-br from-[#ffffff] to-[#e8ecf1] shadow-[-10px_-10px_20px_#ffffff,_10px_10px_20px_#d1d9e6] flex items-center justify-center">
            <span className="text-7xl font-bold text-[#5a7c8c] font-mono">
              {count.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Buttons Container */}
        <div className="flex items-center gap-6">
          {/* Decrement Button */}
          <button
            onClick={decrement}
            className="group relative w-20 h-20 rounded-full font-bold text-3xl text-[#5a7c8c] transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #e8ecf1 100%)',
              boxShadow:
                '0px 8px 16px rgba(162, 177, 206, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(162, 177, 206, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow =
                'inset 2px 2px 8px rgba(162, 177, 206, 0.5), inset -2px -2px 8px rgba(255, 255, 255, 0.6)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow =
                '0px 8px 16px rgba(162, 177, 206, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(162, 177, 206, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)';
            }}
          >
            −
          </button>

          {/* Increment Button */}
          <button
            onClick={increment}
            className="group relative w-20 h-20 rounded-full font-bold text-3xl text-[#5a7c8c] transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #e8ecf1 100%)',
              boxShadow:
                '0px 8px 16px rgba(162, 177, 206, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(162, 177, 206, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow =
                'inset 2px 2px 8px rgba(162, 177, 206, 0.5), inset -2px -2px 8px rgba(255, 255, 255, 0.6)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow =
                '0px 8px 16px rgba(162, 177, 206, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(162, 177, 206, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)';
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
