import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PROJECTS } from '../../data/projects';
import { Github, ArrowLeft, ExternalLink } from 'lucide-react';

const RESERVED_KEYS = new Set([
  'slug',
  'title',
  'description',
  'longDescription',
  'image',
  'github',
  'link',
  'tags',
]);

function formatKeyToTitle(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .trim()
    .toUpperCase();
}

export const MarkdownContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        img: ({ src, alt }) => {
          const srcStr = typeof src === 'string' ? src : '';
          const isVideo = srcStr.match(/\.(mp4|webm|mov|ogg)(\?.*)?$/i);
          if (isVideo) {
            return (
              <div className="my-5 overflow-hidden rounded-lg border border-gray-200/80 bg-black">
                <video
                  src={srcStr}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[500px] mx-auto block"
                >
                  Your browser does not support the video tag.
                </video>
                {alt && (
                  <p className="text-xs text-center text-gray-400 bg-gray-900/90 py-1.5 px-3">
                    {alt}
                  </p>
                )}
              </div>
            );
          }
          return (
            <figure className="my-5">
              <div className="overflow-hidden rounded-lg border border-gray-200/80 bg-gray-50">
                <img
                  src={srcStr}
                  alt={alt || ''}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              {alt && (
                <figcaption className="text-xs text-center text-gray-500 mt-2">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        },
        p: ({ children }) => (
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed my-2.5">
            {children}
          </p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="space-y-1.5 text-sm sm:text-base text-gray-700 list-disc list-inside my-3">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="space-y-1.5 text-sm sm:text-base text-gray-700 list-decimal list-inside my-3">
            {children}
          </ol>
        ),
        h2: ({ children }) => (
          <h2 className="text-base font-bold text-gray-900 mt-6 mb-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">
            {children}
          </h3>
        ),
        code: ({ children }) => (
          <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-mono">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

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

  // Collect all project-specific additional fields
  const otherFields = Object.entries(project).filter(
    ([k, v]) => !RESERVED_KEYS.has(k) && v !== undefined && v !== null && v !== ''
  );

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

        {/* GitHub Button Only */}
        {project.github && (
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
        )}
      </div>

      {/* Project Cover Image */}
      {project.image && (
        <div className="overflow-hidden rounded-lg border border-gray-200/80 bg-gray-50">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[420px] object-cover object-center"
          />
        </div>
      )}

      {/* Long Description / Overview */}
      {project.longDescription && (
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            OVERVIEW
          </h2>
          <MarkdownContent content={project.longDescription} />
        </div>
      )}

      {/* Arbitrary Project-Specific Fields */}
      {otherFields.map(([key, value]) => {
        const title = formatKeyToTitle(key);

        if (typeof value === 'string') {
          return (
            <div key={key} className="space-y-2">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {title}
              </h2>
              <MarkdownContent content={value} />
            </div>
          );
        }

        if (Array.isArray(value)) {
          if (value.length === 0) return null;

          return (
            <div key={key} className="space-y-3">
              <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                {title}
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc list-inside">
                {value.map((item, idx) => {
                  if (typeof item === 'string') {
                    return (
                      <li key={idx} className="leading-relaxed pl-1">
                        <span>{item}</span>
                      </li>
                    );
                  }
                  if (typeof item === 'object' && item !== null) {
                    return (
                      <li key={idx} className="leading-relaxed pl-1 list-none space-y-1 my-2">
                        {item.title && (
                          <h3 className="font-semibold text-sm text-gray-900">{item.title}</h3>
                        )}
                        {item.content && (
                          <p className="text-sm text-gray-700">{item.content}</p>
                        )}
                        {Array.isArray(item.items) && (
                          <ul className="pl-4 list-disc space-y-1">
                            {item.items.map((subItem: any, subIdx: number) => (
                              <li key={subIdx} className="text-sm text-gray-600">
                                {String(subItem)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="leading-relaxed pl-1">
                      <span>{String(item)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        return null;
      })}

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
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>github repository</span>
            <span>→</span>
          </a>
        )}
      </div>
    </article>
  );
};
