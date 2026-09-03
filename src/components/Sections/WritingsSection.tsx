import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WRITINGS } from '../../data/writings';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

export const WritingsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(WRITINGS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWritings = WRITINGS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Writings</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Collected essays, notes, and experiments.
        </p>
      </div>

      {/* Writings List */}
      <div className="space-y-8 pt-2">
        {paginatedWritings.map((item) => (
          <div key={item.slug} className="space-y-1 group">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {item.date} · {item.readTime}
            </div>
            <div>
              <Link
                to={`/writings/${item.slug}`}
                className="text-base font-normal text-blue-600 hover:underline inline-block"
              >
                {item.title}
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`inline-flex items-center gap-1 transition-colors bg-transparent border-0 p-0 ${
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 cursor-pointer hover:underline'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>prev</span>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-7 h-7 rounded text-xs transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-gray-900 text-white border-gray-900 font-medium'
                      : 'bg-transparent text-gray-600 border-transparent hover:border-gray-200 hover:text-gray-900'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center gap-1 transition-colors bg-transparent border-0 p-0 ${
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 cursor-pointer hover:underline'
            }`}
          >
            <span>next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

