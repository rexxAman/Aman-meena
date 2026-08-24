import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-10 sm:py-10">
      {/* Top / Main Body */}
      <div className="space-y-10 sm:space-y-8">
        {/* Title & Bio */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <span>Aman's Garden</span>
            <span className="text-2xl">🌱</span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Notes, projects, and loose thoughts from my work as a Full Stack Developer &amp; AI Systems Engineer, past research at DRDO, trade policy RAG systems at DGFT, and enterprise software at Accenture.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Mostly AI, design, and full-stack systems. Occasionally fitness, system architecture, and books.
          </p>
        </div>

        {/* AROUND HERE */}
        <div className="space-y-5">
          <h2 className="text-l font-bold text-gray-700 uppercase tracking-wider">
            AROUND HERE
          </h2>
          <ul className="space-y-10 sm:space-y-10 text-sm sm:text-base">
            <li className="leading-snug">
              <Link to="/projects" className="text-blue-600 hover:underline font-normal">
                /projects
              </Link>
              <span className="text-gray-600"> — experiments and builds</span>
            </li>
            <li className="leading-snug">
              <Link to="/writings" className="text-blue-600 hover:underline font-normal">
                /writings
              </Link>
              <span className="text-gray-600"> — blogs, shower thoughts, rants</span>
            </li>
            <li className="leading-snug">
              <Link to="/timeline" className="text-blue-600 hover:underline font-normal">
                /timeline
              </Link>
              <span className="text-gray-600"> — progress and milestones</span>
            </li>
            <li className="leading-snug">
              <Link to="/library" className="text-blue-600 hover:underline font-normal">
                /library
              </Link>
              <span className="text-gray-600"> — books and reads</span>
            </li>
            <li className="leading-snug">
              <Link to="/list100" className="text-blue-600 hover:underline font-normal">
                /list100
              </Link>
              <span className="text-gray-600"> — goals and wishes</span>
            </li>
          </ul>
        </div>

        {/* ELSEWHERE */}
        <div className="space-y-2.5">
          <h2 className="text-l font-bold text-gray-700 uppercase tracking-wider">
            ELSEWHERE
          </h2>
          <div className="flex items-center gap-4 text-gray-700">
            <a
              href="https://github.com/Amanmeena0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-meena-11326a395/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:meenaaman581@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footnote (Always anchored within viewport) */}
      <div className="pt-4 border-t border-gray-200/80 text-xs sm:text-sm text-gray-500">
        <span>got an ai agent? give it </span>
        <a
          href="/llms.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          this
        </a>
        <span> and ask about me or read my resume </span>
        <Link
          to="/resume"
          className="text-blue-600 hover:underline"
        >
          here
        </Link>
        <span>.</span>
      </div>
    </div>
  );
};