import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const TopNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't render top nav on home page because the home page starts directly with the title
  if (currentPath === '/') {
    return null;
  }

  const navItems = [
    { name: 'projects', href: '/projects' },
    { name: 'writings', href: '/writings' },
    { name: 'timeline', href: '/timeline' },
    { name: 'library',  href: '/library' },
    { name: 'list 100', href: '/list100' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-sm border-b border-gray-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.03)] -mx-5 sm:-mx-6 px-5 sm:px-6 py-3.5 sm:py-4 mb-8 sm:mb-10">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold text-gray-900 hover:text-black no-underline hover:no-underline flex items-center gap-2 tracking-tight"
        >
          <span>Aman's Garden</span>
          <span className="text-xl">🌱</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`no-underline transition-colors ${
                  isActive
                    ? 'text-gray-900 underline underline-offset-4 decoration-gray-900 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
