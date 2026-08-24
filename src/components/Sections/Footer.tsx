import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
      <div>
        <span>Aman Meena © {new Date().getFullYear()}</span>
      </div>
      <div>
        <span>Digital Garden</span>
      </div>
    </footer>
  );
};
