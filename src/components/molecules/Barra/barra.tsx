// components/Barra.tsx
'use client';import React from 'react';

const SKILLS = [
  'AWS',
  '.NET (C#)',
  'Java',
  'Python',
  'Angular',
  'Git',
  'Github',
];

export const Barra = () => {
  return (
    // 1. Container Principal: Classes agora em uma única linha e sem quebras de linha/espaços excessivos
    <div 
      className="flex flex-row flex-wrap justify-around items-center w-full py-4 px-4 sm:px-8 lg:px-12 shadow-2xl bg-gray-900 dark:bg-gray-900/95 border-t border-gray-800 dark:border-gray-700"
      aria-label="Technical Skills Bar"
    >
      {SKILLS.map((skill, index) => (
        // 2. Item Individual (Skill Tag): Classes também em uma única linha
        <span
          key={index}
          className="font-semibold text-gray-400 dark:text-gray-400 text-sm sm:text-base lg:text-lg my-1 sm:my-0 transition-colors duration-200 hover:text-gray-200 dark:hover:text-gray-100 antialiased"
        >
          {skill.toUpperCase()}
        </span>
      ))}
    </div>
  );
};