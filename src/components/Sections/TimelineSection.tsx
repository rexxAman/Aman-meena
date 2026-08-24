import React, { useState } from 'react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  detail: string;
  link?: string;
}

const TIMELINE_DATA: Record<string, TimelineItem[]> = {
  '2026': [
    {
      id: 1,
      year: '2026',
      title: 'Completed Accenture Software Internship',
      detail: 'May 2026 · P3 MyCompetency top rating across Agentic AI & Cloud',
    },
    {
      id: 2,
      year: '2026',
      title: 'Launched Sukauto AI Market Analysis Platform',
      detail: 'Feb 2026 · FastAPI + LangChain + Next.js client',
      link: 'https://market-scout-client.vercel.app/',
    },
    {
      id: 3,
      year: '2026',
      title: 'Architected Multi-Agent RAG Orchestration Framework',
      detail: 'Jan 2026 · LangGraph + ChromaDB multi-node routing',
    },
    {
      id: 4,
      year: '2026',
      title: 'Shipped Model Context Protocol (MCP) Server',
      detail: 'Jan 2026 · Tool integration & schema validation',
    },
  ],
  '2025': [
    {
      id: 5,
      year: '2025',
      title: 'Deployed Enterprise Policy RAG Chatbot at DGFT',
      detail: 'Jul 2025 · Ministry of Commerce, indexed 2K chunks, 81% accuracy',
    },
    {
      id: 6,
      year: '2025',
      title: 'Shipped Talklytics Conversational Engagement Detection',
      detail: 'May 2025 · Speech recognition & acoustic NLP features',
      link: 'https://conviciesense-mic.vercel.app/',
    },
    {
      id: 7,
      year: '2025',
      title: 'Built Bodo Interview Guidance & Resume Builder',
      detail: 'Feb 2025 · Next.js, Supabase, Tailwind CSS',
      link: 'https://github.com/RexxLudwig/Bodo',
    },
  ],
  '2024': [
    {
      id: 8,
      year: '2024',
      title: 'Published Multimodal Deception Research at DIPR (DRDO)',
      detail: 'Aug 2024 · DistilBERT + Librosa + Random Forest ensemble',
    },
    {
      id: 9,
      year: '2024',
      title: 'Built Botanical Merge AI Image Blending Tool',
      detail: 'Jul 2024 · PyTorch, Computer Vision & Style Transfer',
      link: 'https://botanical-merge.vercel.app/',
    },
    {
      id: 10,
      year: '2024',
      title: 'Launched Kojima Open-Source Tool Catalog',
      detail: 'Jun 2024 · Automated via GitHub Actions & Pages',
      link: 'https://RexxLudwig.github.io/kojima/',
    },
  ],
  '2023': [
    {
      id: 11,
      year: '2023',
      title: 'Engineered SafeSphere Crime Awareness Platform',
      detail: 'Dec 2023 · Flask, React.js, GIS data visualization',
      link: 'https://safe-sphere-ui.vercel.app',
    },
    {
      id: 12,
      year: '2023',
      title: 'Won Campus Hackathon for Full-Stack Architecture',
      detail: 'Oct 2023 · Real-time web systems & distributed state',
    },
    {
      id: 13,
      year: '2023',
      title: 'Built Multi-Tier Full Stack Applications',
      detail: 'Apr 2023 · React, Node.js, PostgreSQL',
    },
  ],
  '2022': [
    {
      id: 14,
      year: '2022',
      title: 'Commenced B.Tech in Computer Science & Engineering',
      detail: 'Aug 2022 · New Delhi, India',
    },
    {
      id: 15,
      year: '2022',
      title: 'Wrote First Python & C++ Algorithmic Programs',
      detail: 'Nov 2022 · Data structures & OOP foundations',
    },
  ],
};

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
      <div className="relative pl-6 space-y-6 pt-2 border-l border-gray-200">
        {items.map((item) => (
          <div key={item.id} className="relative flex items-baseline gap-2 text-sm sm:text-base">
            {/* Hollow Circle Bullet directly on the vertical line */}
            <span className="absolute -left-[30px] top-[7px] w-2 h-2 rounded-full border border-gray-400 bg-[#faf9f6]" />

            <div className="flex flex-wrap items-baseline gap-x-2">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-normal inline"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-blue-600 hover:underline cursor-pointer font-normal inline">
                  {item.title}
                </span>
              )}
              <span className="text-gray-400">—</span>
              <span className="text-gray-600 text-sm">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
