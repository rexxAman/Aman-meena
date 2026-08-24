import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-6 pb-10 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
      <div className="flex items-center gap-2 font-medium text-gray-700">
        <Link to="/" className="hover:text-gray-900 no-underline hover:no-underline">
          Aman's Garden 🌱
        </Link>
        <span className="text-gray-400">© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
        <a href="mailto:meenaaman581@gmail.com" className="hover:text-gray-900 transition-colors">
          email
        </a>
        <a
          href="https://github.com/Amanmeena0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/aman-meena-11326a395/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors"
        >
          linkedin
        </a>
        <Link to="/resume" className="hover:text-gray-900 transition-colors">
          resume
        </Link>
      </div>
    </footer>
  );
};
