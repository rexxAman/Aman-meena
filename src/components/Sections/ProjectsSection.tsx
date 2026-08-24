import React, { useState } from 'react';
import { PROJECTS } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Extract all normalized tags
  const allTags = [
    'all',
    'ai',
    'python',
    'langchain',
    'rag',
    'pytorch',
    'next.js',
    'fastapi',
    'typescript',
    'react.js',
  ];

  const filteredProjects = selectedTag === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) =>
        p.tags.some((t) =>
          t.toLowerCase().replace(/[^a-z0-9]/g, '') === selectedTag.toLowerCase().replace(/[^a-z0-9]/g, '')
        ) ||
        p.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
        p.description.toLowerCase().includes(selectedTag.toLowerCase())
      );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Notes and build logs from ongoing/finished projects.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-sm">
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`cursor-pointer transition-colors bg-transparent border-0 p-0 text-sm ${
                isActive
                  ? 'text-gray-900 underline underline-offset-4 decoration-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-6 pt-2">
        {filteredProjects.map((project) => {
          const primaryLink = project.link || project.github;
          const formattedLink = primaryLink
            ? (primaryLink.startsWith('http') ? primaryLink : `https://${primaryLink}`)
            : undefined;

          return (
            <div key={project.title} className="space-y-1">
              <div>
                {formattedLink ? (
                  <a
                    href={formattedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal text-blue-600 hover:underline inline-block"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-base font-normal text-gray-900 inline-block">
                    {project.title}
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
