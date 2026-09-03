import React, { useEffect } from 'react';
import { TopNav } from '@/src/components/Navigation/TopNav';
import { HeroSection } from '@/src/components/Sections/HeroSection';
import { ProjectsSection } from '@/src/components/Sections/ProjectsSection';
import { ProjectDetailSection } from '@/src/components/Sections/ProjectDetailSection';
import { WritingsSection } from '@/src/components/Sections/WritingsSection';
import { WritingDetailSection } from '@/src/components/Sections/WritingDetailSection';
import { TimelineSection } from '@/src/components/Sections/TimelineSection';
import { LibrarySection } from '@/src/components/Sections/LibrarySection';
import { List100Section } from '@/src/components/Sections/List100Section';
import { ResumeSection } from '@/src/components/Sections/ResumeSection';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isHome) {
    return (
      <div className="h-screen max-h-screen overflow-hidden flex flex-col justify-between max-w-xl sm:max-w-2xl mx-auto px-5 sm:px-6 py-6 sm:py-8">
        <main className="h-full flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-1">
        <TopNav />
        <main className="max-w-xl sm:max-w-2xl mx-auto px-5 sm:px-6 py-6 sm:py-10 pb-16">
          <Routes>
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/:slug" element={<ProjectDetailSection />} />
            <Route path="/writings" element={<WritingsSection />} />
            <Route path="/writings/:slug" element={<WritingDetailSection />} />
            <Route path="/timeline" element={<TimelineSection />} />
            <Route path="/library" element={<LibrarySection />} />
            <Route path="/list100" element={<List100Section />} />
            <Route path="/resume" element={<ResumeSection />} />
          </Routes>
        </main>
      </div>
      <Analytics />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
