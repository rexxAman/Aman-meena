import React from 'react';

interface GoalItem {
  id: number;
  text: string;
  done: boolean;
}

const GOALS_LIST: GoalItem[] = [
  { id: 1, text: 'Get a trip to Japan', done: false },
  { id: 2, text: 'Own a house', done: false },
  { id: 3, text: 'Own a car', done: false },
  { id: 4, text: 'Learn how to drive a car', done: false },
  { id: 5, text: 'Visit the Amazon rainforest', done: false },
  { id: 6, text: 'Go on a road trip', done: false },
  { id: 7, text: 'Camp outside in a forest', done: false },
  { id: 8, text: 'Run the NYC Marathon', done: false },
  { id: 9, text: 'Run 100 km in one go', done: false },
  { id: 10, text: 'Complete a marathon in under 3 hours', done: false },
  { id: 11, text: 'Publish research on multimodal AI deception detection', done: false },
  { id: 12, text: 'Build an enterprise RAG system serving live users', done: false },
  { id: 13, text: 'Earn top-tier P3 rating at Accenture Software Internship', done: false },
  { id: 14, text: 'Ship 5+ full-stack open source products and developer tools', done: false },
  { id: 15, text: 'Build and deploy a custom Model Context Protocol (MCP) server', done: false },
  { id: 16, text: 'Master strict TypeScript and modern Next.js ecosystem', done: false },
  { id: 17, text: 'Build an autonomous agent system used by 10,000+ developers', done: false },
  { id: 18, text: 'Contribute to LangChain, LangGraph, or PyTorch core', done: false },
  { id: 19, text: 'Speak at a major AI / developer conference', done: false },
  { id: 20, text: 'Design and assemble a high-performance local AI homelab cluster', done: false },
  { id: 21, text: 'Read 50 foundational computer science papers in depth', done: false },
  { id: 22, text: 'Write a compiler or bytecode virtual machine from scratch', done: false },
  { id: 23, text: 'Run a full marathon (42.195 km)', done: false },
  { id: 24, text: 'Mentor 25+ junior developers and students in software engineering', done: false },
  { id: 25, text: 'Publish a technical book on agentic system design', done: false },
  { id: 26, text: 'Build a profitable micro-SaaS with $5k+ MRR', done: false },
  { id: 27, text: 'Travel to 10+ countries exploring tech communities and nature', done: false },
  { id: 28, text: 'Achieve sub-20 minute 5K run', done: false },
  { id: 29, text: 'Open-source a lightweight vector search library in C++/Rust', done: false },
  { id: 30, text: 'Maintain a digital space of learnings and notes for 5+ years', done: false },
  { id: 31, text: 'Visit Japan and explore Tokyo tech districts', done: false },
  { id: 32, text: 'Build a robot or drone with custom hardware and computer vision', done: false },
  { id: 33, text: 'Learn to play a musical instrument', done: false },
  { id: 34, text: 'Summit a 5,000m+ mountain peak', done: false },
  { id: 35, text: 'Host a technical workshop on LLM agent architecture', done: false },
];

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
          <p>Created on April 30, 2024.</p>
          <p>
            Note: I have intentionally decided to never add/remove any items from this list. It is here to capture a moment in time when I was 22 years old and thought I wanted all of the following things to happen before I turn 100.
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
