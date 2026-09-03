import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WRITINGS } from '../../data/writings';
import { ArrowLeft, Heart } from 'lucide-react';

export const WritingDetailSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = WRITINGS.find((w) => w.slug === slug);

  const initialLikes = writing?.likes ?? 0;
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(initialLikes);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (writing) {
      const stored = localStorage.getItem(`writing_liked_${writing.slug}`) === 'true';
      setLiked(stored);
      setLikeCount((writing.likes ?? 0) + (stored ? 1 : 0));
    }
  }, [slug, writing]);

  const handleLike = () => {
    if (!writing) return;
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikeCount((prev) => (nextLiked ? prev + 1 : prev - 1));
    localStorage.setItem(`writing_liked_${writing.slug}`, String(nextLiked));
  };

  if (!writing) {
    return (
      <div className="space-y-6">
        <Link
          to="/writings"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-normal"
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

      {/* Main Head, Subtitle & Like Button */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {writing.title}
        </h1>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {writing.description}
        </p>

        {/* Like Button */}
        <div>
          <button
            onClick={handleLike}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs sm:text-sm transition-colors cursor-pointer ${
              liked
                ? 'border-red-300 bg-red-50 text-red-600'
                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
            }`}
            title="Like this writing"
          >
            <Heart
              className={`w-3.5 h-3.5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>

      {/* Optional Article Cover Image */}
      {writing.image && (
        <div className="overflow-hidden rounded-lg border border-gray-200/80 bg-gray-50">
          <img
            src={writing.image}
            alt={writing.title}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[420px] object-cover object-center"
          />
        </div>
      )}

      {/* Pure Content Paragraphs (No extra headings) */}
      <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed pt-2">
        {writing.paragraphs.map((para, idx) => (
          <p key={idx} className="leading-relaxed">
            {para}
          </p>
        ))}
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
      </div>
    </article>
  );
};
