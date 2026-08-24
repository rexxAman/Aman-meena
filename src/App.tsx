import React, { useEffect } from 'react';
import { TopNav } from '@/src/components/Navigation/TopNav';
import { HeroSection } from '@/src/components/Sections/HeroSection';
import { ProjectsSection } from '@/src/components/Sections/ProjectsSection';
import { WritingsSection } from '@/src/components/Sections/WritingsSection';
import { TimelineSection } from '@/src/components/Sections/TimelineSection';
import { LibrarySection } from '@/src/components/Sections/LibrarySection';
import { List100Section } from '@/src/components/Sections/List100Section';
import { ResumeSection } from '@/src/components/Sections/ResumeSection';
import { Footer } from '@/src/components/Sections/Footer';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <TopNav />
        <main className={`max-w-2xl mx-auto px-5 sm:px-6 ${isHome ? 'pt-12 sm:pt-16' : 'pt-2'}`}>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/writings" element={<WritingsSection />} />
            <Route path="/timeline" element={<TimelineSection />} />
            <Route path="/library" element={<LibrarySection />} />
            <Route path="/list100" element={<List100Section />} />
            <Route path="/resume" element={<ResumeSection />} />
          </Routes>
        </main>
      </div>
      <div className="max-w-2xl mx-auto px-5 sm:px-6 w-full pb-10 sm:pb-12">
        <Footer />
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
