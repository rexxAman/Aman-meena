import React from 'react';

interface Writing {
  date: string;
  title: string;
  description: string;
  link?: string;
}

const WRITINGS: Writing[] = [
  {
    date: 'AUG 26',
    title: 'Building Production-Grade RAG: From Chunks to Multi-Agent Graphs',
    description: 'A deep dive into chunking heuristics, retrieval@3 optimization, rerankers, and LangGraph multi-node state cycles.',
  },
  {
    date: 'MAY 26',
    title: 'Multimodal Lie Detection: Fusing Speech Acoustic Features & DistilBERT',
    description: 'Lessons from designing late-fusion Random Forest ensembles for deception detection at DRDO.',
  },
  {
    date: 'APR 26',
    title: 'Tokens Are Cheap. Thinking Isn\'t',
    description: 'Why latency, prompt distillation, and architectural guardrails matter more than raw LLM context size.',
  },
  {
    date: 'MAR 26',
    title: 'Designing Reactive Microservices with FastAPI & WebSockets',
    description: 'Patterns for real-time streaming LLM outputs, background Celery workers, and low-latency client sockets.',
  },
  {
    date: 'JAN 26',
    title: 'Notes from Enterprise ITSM Incident Triage',
    description: 'How analyzing 200+ ServiceNow tickets helped identify failure patterns driving 55% of recurring downtime.',
  },
  {
    date: 'DEC 25',
    title: 'The Model Context Protocol (MCP) in Practice',
    description: 'Structuring tool-calling schemas, rate limiting, and session safety when connecting LLMs to external systems.',
  },
];

export const WritingsSection: React.FC = () => {
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
        {WRITINGS.map((item) => (
          <div key={item.title} className="space-y-1">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {item.date}
            </div>
            <div>
              <span className="text-base font-normal text-blue-600 hover:underline cursor-pointer">
                {item.title}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
