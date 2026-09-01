import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import { Github, ArrowLeft, ExternalLink } from 'lucide-react';

export const ProjectDetailSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="space-y-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to projects</span>
        </Link>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Project Not Found</h1>
          <p className="text-gray-600 text-sm">
            The project you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="space-y-8 text-gray-900">
      {/* Back Link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-normal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to projects</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-3 pb-2 border-b border-gray-200/80">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* GitHub Link Only */}
        <div className="pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200/80 px-3 py-1.5 rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>view source on github</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </div>
      </div>

      {/* Overview / Deep Dive */}
      {project.longDescription && (
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            OVERVIEW
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      )}

      {/* Why I Built This */}
      {project.why && (
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            WHY I BUILT THIS
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {project.why}
          </p>
        </div>
      )}

      {/* Architecture & Engineering Highlights */}
      {project.architecture && project.architecture.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            ARCHITECTURE &amp; ENGINEERING
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc list-inside">
            {project.architecture.map((arch, idx) => (
              <li key={idx} className="leading-relaxed pl-1">
                <span>{arch}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            KEY FEATURES
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc list-inside">
            {project.features.map((feat, idx) => (
              <li key={idx} className="leading-relaxed pl-1">
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            TECH STACK
          </h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-gray-200/80 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-normal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>all projects</span>
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          <span>github repository</span>
          <span>→</span>
        </a>
      </div>
    </article>
  );
};
