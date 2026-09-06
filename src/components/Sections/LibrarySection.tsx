import React, { useState } from 'react';
import { BOOKS } from '../../data/library';
import { BookItem } from '../../data/types';

const BookCard: React.FC<{ book: BookItem }> = ({ book }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex items-start gap-4">
      {/* Book Cover */}
      <div className="w-14 sm:w-16 h-20 sm:h-24 rounded shadow-sm overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200/80">
        {error ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-1 text-center text-white text-[10px] font-bold leading-tight"
            style={{ backgroundColor: book.coverBg || '#4A5568' }}
          >
            <span className="line-clamp-3">{book.title}</span>
          </div>
        ) : (
          <img
            src={book.cover}
            alt={book.title}
            onError={() => setError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Book Info */}
      <div className="space-y-1 min-w-0 pt-0.5">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {book.author}
        </p>
        <p className="text-xs text-gray-400">
          {book.status}
        </p>
      </div>
    </div>
  );
};

export const LibrarySection: React.FC = () => {
  const totalReadCount = BOOKS.filter((b) => b.status.startsWith('read')).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Library</h1>
        <p className="text-gray-600 text-sm sm:text-base pt-1">
          Books I'm reading and have read lately.
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Total read: {totalReadCount}
        </p>
      </div>

      {/* Books 2-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
        {BOOKS.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
