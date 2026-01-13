
import React from 'react';
import { Hero } from '../Hero';
import { BentoGrid } from '../BentoGrid';

export const HomeView: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Hero />
      <BentoGrid />
    </div>
  );
};
