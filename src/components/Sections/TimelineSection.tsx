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

        {/* Legend showing visual differentiation */}
        <div className="flex items-center gap-4 pt-1 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span>has writeup / project link</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-gray-400 bg-transparent inline-block" />
            <span>milestone note</span>
          </span>
        </div>
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
      <div className="relative pl-6 space-y-6 pt-2 border-l border-gray-200">
        {items.map((item) => {
          const hasLink = Boolean(item.link);
          const isInternal = item.link?.startsWith('/');

          return (
            <div key={item.id} className="relative flex items-baseline gap-2 text-sm sm:text-base">
              {/* Timeline Dot: solid blue for linked, hollow gray for unlinked */}
              {hasLink ? (
                <span
                  className="absolute -left-[30px] top-[7px] w-2 h-2 rounded-full bg-blue-600 ring-4 ring-[#faf9f6]"
                  title="Has link"
                />
              ) : (
                <span
                  className="absolute -left-[30px] top-[7px] w-2 h-2 rounded-full border border-gray-300 bg-[#faf9f6]"
                  title="Milestone note"
                />
              )}

              <div className="flex flex-wrap items-baseline gap-x-2">
                {hasLink ? (
                  isInternal ? (
                    <Link
                      to={item.link!}
                      className="text-blue-600 hover:underline font-normal inline-flex items-center gap-1 group"
                    >
                      <span>{item.title}</span>
                      <span className="text-xs text-blue-400 group-hover:text-blue-600 transition-colors">
                        ↗
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-normal inline-flex items-center gap-1 group"
                    >
                      <span>{item.title}</span>
                      <span className="text-xs text-blue-400 group-hover:text-blue-600 transition-colors">
                        ↗
                      </span>
                    </a>
                  )
                ) : (
                  <span className="text-gray-900 font-normal cursor-default select-text">
                    {item.title}
                  </span>
                )}

                <span className="text-gray-400">—</span>
                <span className="text-gray-500 text-sm">{item.detail}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
