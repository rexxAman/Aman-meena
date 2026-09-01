import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Extract all normalized tags
  const allTags = [
    'all',
    'ai',
    'python',
    'multi-agent',
    'typescript',
    'next.js',
    'fastapi',
    'react.js',
    'scraping',
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

  // Reset to page 1 whenever the filter tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {paginatedProjects.map((project) => {
          return (
            <div key={project.slug} className="space-y-1 group">
              <div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-base font-normal text-blue-600 hover:underline inline-block"
                >
                  {project.title}
                </Link>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          );
        })}

        {paginatedProjects.length === 0 && (
          <p className="text-gray-500 text-sm py-4">No projects found matching this tag.</p>
        )}
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


