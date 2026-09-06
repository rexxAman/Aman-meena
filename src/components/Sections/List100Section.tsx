import React from 'react';
import { GOALS_LIST } from '../../data/list100';
import { GoalItem } from '../../data/types';

export const List100Section: React.FC = () => {
  const completedCount = GOALS_LIST.filter((g) => g.done).length;
  const totalCount = GOALS_LIST.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">List 100</h1>
        <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
          <p>Created on 31 Aug, 2026 .</p>
          <p>
            Note: I have intentionally decided to never add/remove any items from this list. It is here to capture a moment in time I am 22 years old and thought I wanted all of the following things to happen before I turn 100.
          </p>
        </div>
      </div>

      {/* Progress Metric & Bar */}
      <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm text-gray-800 font-medium">
        <span>
          {completedCount} of {totalCount} done ({percentage}%)
        </span>
        <div className="w-28 sm:w-36 h-1.5 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* List Items */}
      <ul className="space-y-3.5 pt-2 text-sm sm:text-base">
        {GOALS_LIST.map((item) => (
          <li key={item.id} className="flex items-baseline gap-2.5">
            {item.done ? (
              <>
                <span className="text-gray-500 select-none text-sm font-semibold">✓</span>
                <span className="text-gray-400 line-through">
                  {item.text}
                </span>
              </>
            ) : (
              <>
                <span className="text-gray-400 select-none text-sm">—</span>
                <span className="text-gray-800">
                  {item.text}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
