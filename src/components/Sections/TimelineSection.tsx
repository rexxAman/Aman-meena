import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE_DATA } from '../../data/timeline';

export const TimelineSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2026');
  const years = ['2026', '2025', '2024', '2023', '2022'];

  const items = TIMELINE_DATA[selectedYear] || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Timeline</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          A running log of moments, milestones, and little proofs of progress.
        </p>
      </div>

      {/* Year Tabs */}
      <div className="flex items-center gap-5 text-sm">
        {years.map((year) => {
          const isActive = selectedYear === year;
          return (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`cursor-pointer transition-colors bg-transparent border-0 p-0 text-sm ${
                isActive
                  ? 'text-gray-900 underline underline-offset-4 decoration-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {year}
            </button>
          );
        })}
      </div>

      {/* Timeline List with Vertical Connected Line */}
      <div className="relative space-y-6 pt-2">
        {/* Continuous vertical line centered precisely with the bullet circles */}
        <div className="absolute left-[3.5px] top-2 bottom-2 w-[1px] bg-gray-200 pointer-events-none" />

        {items.map((item) => {
          const hasLink = Boolean(item.link);
          const isInternal = item.link?.startsWith('/');

          return (
            <div key={item.id} className="relative flex items-start gap-4">
              {/* Hollow Circle Bullet: 8x8px at left-0, center is exactly 4.0px */}
              <span className="w-2 h-2 rounded-full border border-gray-400 bg-[#faf9f6] shrink-0 mt-[7px] relative z-10" />

              <div className="flex flex-wrap items-baseline gap-x-2 text-sm sm:text-base leading-relaxed">
                {hasLink ? (
                  isInternal ? (
                    <Link
                      to={item.link!}
                      className="text-blue-600 hover:underline font-normal inline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-normal inline"
                    >
                      {item.title}
                    </a>
                  )
                ) : (
                  <span className="text-gray-900 font-normal inline">
                    {item.title}
                  </span>
                )}

                <span className="text-gray-400">—</span>
                <span className="text-gray-600 text-sm">{item.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
