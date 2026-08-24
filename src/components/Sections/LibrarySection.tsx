import React, { useState } from 'react';

interface BookItem {
  id: number;
  title: string;
  author: string;
  status: string;
  cover: string;
  coverBg?: string;
}

const BOOKS: BookItem[] = [
  {
    id: 1,
    title: 'Sell like crazy',
    author: 'Sabri Suby',
    status: 'reading',
    cover: 'https://covers.openlibrary.org/b/id/10368149-M.jpg',
    coverBg: '#E53E3E',
  },
  {
    id: 2,
    title: 'The $100 Startup',
    author: 'Chris Guillebeau',
    status: 'reading',
    cover: 'https://covers.openlibrary.org/b/id/7288673-M.jpg',
    coverBg: '#FAF5FF',
  },
  {
    id: 3,
    title: 'The stationery shop',
    author: 'Marjan Kamali',
    status: 'read · 4/5',
    cover: 'https://covers.openlibrary.org/b/id/9324672-M.jpg',
    coverBg: '#1A202C',
  },
  {
    id: 4,
    title: 'Read people like a book',
    author: 'Patrick King',
    status: 'read · 4/5',
    cover: 'https://covers.openlibrary.org/b/id/12695521-M.jpg',
    coverBg: '#2B6CB0',
  },
  {
    id: 5,
    title: 'A little life',
    author: 'Hanya Yanagihara',
    status: 'gave up',
    cover: 'https://covers.openlibrary.org/b/id/8315570-M.jpg',
    coverBg: '#2D3748',
  },
  {
    id: 6,
    title: "Can't Hurt Me",
    author: 'David Goggins',
    status: 'read · 5/5',
    cover: 'https://covers.openlibrary.org/b/id/10543666-M.jpg',
    coverBg: '#D69E2E',
  },
  {
    id: 7,
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    status: 'read · 4/5',
    cover: 'https://covers.openlibrary.org/b/id/8231990-M.jpg',
    coverBg: '#C05621',
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: 'read · 5/5',
    cover: 'https://covers.openlibrary.org/b/id/12836262-M.jpg',
    coverBg: '#DD6B20',
  },
  {
    id: 9,
    title: "Don't sweat the small stuff",
    author: 'Richard Carlson',
    status: 'read · 3/5',
    cover: 'https://covers.openlibrary.org/b/id/8230588-M.jpg',
    coverBg: '#F6E05E',
  },
  {
    id: 10,
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    status: 'read · 4/5',
    cover: 'https://covers.openlibrary.org/b/id/8235122-M.jpg',
    coverBg: '#319795',
  },
  {
    id: 11,
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'read · 5/5',
    cover: 'https://covers.openlibrary.org/b/id/8431057-M.jpg',
    coverBg: '#805AD5',
  },
  {
    id: 12,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    status: 'read · 5/5',
    cover: 'https://covers.openlibrary.org/b/id/10495811-M.jpg',
    coverBg: '#4A5568',
  },
];

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
