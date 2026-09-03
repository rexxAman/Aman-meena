import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WRITINGS } from '../../data/writings';
import { ArrowLeft } from 'lucide-react';

export const WritingDetailSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = WRITINGS.find((w) => w.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!writing) {
    return (
      <div className="space-y-6">
        <Link
          to="/writings"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to writings</span>
        </Link>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Article Not Found</h1>
          <p className="text-gray-600 text-sm">
            The writing you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="space-y-8 text-gray-900 max-w-xl sm:max-w-2xl">
      {/* Back Link */}
      <div>
        <Link
          to="/writings"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-normal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>back to writings</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-3 pb-4 border-b border-gray-200/80">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
          <span>{writing.date}</span>
          <span>·</span>
          <span>{writing.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          {writing.title}
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {writing.description}
        </p>

        {writing.tags && writing.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {writing.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Article Body Content */}
      <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
        {writing.sections.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            {sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}

            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2 text-gray-700 list-disc list-inside pl-1">
                {sec.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed pl-1">
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {writing.takeaways && writing.takeaways.length > 0 && (
          <div className="pt-2 space-y-2">
            <ul className="space-y-2 text-gray-700 list-disc list-inside pl-1">
              {writing.takeaways.map((item, idx) => (
                <li key={idx} className="leading-relaxed pl-1">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-gray-200/80 flex items-center justify-between">
        <Link
          to="/writings"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-normal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>all writings</span>
        </Link>
        <Link
          to="/projects"
          className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          <span>explore projects</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
};
