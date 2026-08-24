import React from 'react';

export const ResumeSection: React.FC = () => {
  return (
    <div className="space-y-10 text-gray-900">
      {/* Header / Intro */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Aman Meena
        </h1>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl">
          Full-Stack Developer &amp; AI Systems Engineer. Delhi Technological University (DTU) CSE '26. Building production RAG architectures, agentic workflows, and scalable backends.
        </p>

        {/* Links Row */}
        <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
          <a
            href="mailto:meenaaman581@gmail.com"
            className="text-blue-600 hover:underline"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/aman-meena-11326a395/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin
          </a>
          <a
            href="https://github.com/Amanmeena0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github
          </a>
          <a
            href="/AmanMeenaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            resume.pdf ↗
          </a>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="space-y-4 pt-2">
        <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          EDUCATION
        </h2>

        <div className="space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-bold text-gray-900 text-base">
              B.Tech Computer Science &amp; Engineering · Delhi Technological University (DTU)
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
              2022 — 2026
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Relevant Courses: Artificial Intelligence, Machine Learning, DBMS, Operating Systems, Software Engineering.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200/80" />

      {/* EXPERIENCE */}
      <div className="space-y-6">
        <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          EXPERIENCE
        </h2>

        {/* Accenture */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-bold text-gray-900 text-base">
              Accenture · Software Intern
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
              Dec 2025 — May 2026
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed pl-1">
            <li>
              Analyzed 200+ ServiceNow ITSM tickets on an international client account, identifying 4 recurring failure patterns driving ~55% of ticket volume; documented findings in a triage report for the account team.
            </li>
            <li>
              Completed Accenture technical training in Agentic AI, RAG, LangChain, AWS, and Azure; earned P3 Accenture’s best intern-level MyCompetency rating.
            </li>
          </ul>
        </div>

        {/* DGFT */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-bold text-gray-900 text-base">
              DGFT, Ministry of Commerce and Industry · AI Intern
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
              Jun 2025 — Jul 2025
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed pl-1">
            <li>
              Built and deployed a RAG chatbot indexing 100+ DGFT policy documents (2K text chunks) across 10+ policy categories; replaced a legacy keyword bot, achieving 75–85% retrieval@3 on an internal query benchmark.
            </li>
            <li>
              Reduced user effort to discover relevant policies and knowledge by 75-80% via self-service conversational support, and cut hallucinated responses by nearly 90% through AI guardrails and secure session handling.
            </li>
            <li>
              Iterated across 12+ prompt-tuning cycles and 16+ retrieval configurations; tracked accuracy on a 100-question internal eval set, improving policy-aligned answer rate from ~54% → 81%.
            </li>
          </ul>
        </div>

        {/* DRDO */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-bold text-gray-900 text-base">
              DIPR, DRDO · Research Intern
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
              Jul 2024 — Aug 2024
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed pl-1">
            <li>
              Designed a multimodal deception-detection pipeline on ~1K labeled samples: linguistic model (DistilBERT on Faster-Whisper transcripts) and acoustic model (librosa MFCC, pitch, energy), with probability outputs fused via a Random Forest ensemble.
            </li>
            <li>
              Linguistic model achieved 74% accuracy and acoustic model 68% individually; Random Forest late-fusion ensemble reached 81% accuracy (~7 percentage-points lift).
            </li>
            <li>
              Built reusable preprocessing modules for transcript normalization, audio segmentation (5s windows), and feature extraction; cut per-experiment setup time from ~60 min → ~10 min.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200/80" />

      {/* SELECTED AI PROJECTS */}
      <div className="space-y-6">
        <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          SELECTED AI PROJECTS
        </h2>

        <div className="space-y-1">
          <a
            href="https://safe-sphere-ui.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-blue-600 hover:underline block"
          >
            SafeSphere | Crime Awareness &amp; Incident Platform
          </a>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            FastAPI backend with PostgreSQL, Celery/Redis background task queues, and a LangChain + ChromaDB legal assistant with persistent RAG-chain caching and AWS S3 storage.
          </p>
        </div>

        <div className="space-y-1">
          <a
            href="https://market-scout-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-blue-600 hover:underline block"
          >
            MarketScout (Sukauto) | AI Market Intelligence Platform
          </a>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Engineered market intelligence platform with a 4-node LangGraph reflection workflow across 6 specialized analysis agents and 4 MCP tool servers spanning 7+ live data sources.
          </p>
        </div>

        <div className="space-y-1">
          <a
            href="https://conviciesense-mic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-blue-600 hover:underline block"
          >
            Talklytics | Real-Time Conversational Engagement Detection
          </a>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Real-time conversational analysis system evaluating sales call convincingness scores (1–5) based on acoustic feature extraction (PyTorch) and NLP sentiment analysis.
          </p>
        </div>

        <div className="space-y-1">
          <a
            href="https://RexxLudwig.github.io/kojima/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-blue-600 hover:underline block"
          >
            Kojima | Open-Source Game &amp; Tool Pegboard Catalog
          </a>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Workshop pegboard catalog for open-source tools and games running serverlessly via GitHub Actions, issue comments, and Pages.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200/80" />

      {/* TOOLBOX */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          TOOLBOX
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-700">
          <span>Python</span>
          <span>TypeScript</span>
          <span>FastAPI</span>
          <span>React / Next.js</span>
          <span>LangChain</span>
          <span>LangGraph</span>
          <span>RAG Architectures</span>
          <span>ChromaDB</span>
          <span>PyTorch</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Docker</span>
          <span>AWS (S3, EC2)</span>
          <span>Linux</span>
          <span>Git</span>
        </div>
      </div>
    </div>
  );
};
