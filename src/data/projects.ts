import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    slug: "kojima",
    title: "I build a website for the open source contributors. ",
    description: "A custom workshop pegboard catalog of tiny, free, and open-source games and tools. Runs entirely on GitHub Actions, Issue templates, and Pages with zero database infrastructure.",
    longDescription: `Kojima is a serverless, community-curated workshop pegboard and repository for discovering tiny, single-purpose web tools, creative coding experiments, and indie mini-games. Built with a GitOps philosophy, it requires zero external databases or third-party CMS services, operating exclusively on GitHub's native infrastructure.

### Issue-Driven Ingestion Workflow
Users and creators submit their tools and games directly via structured GitHub Issue templates. Once approved, GitHub Actions serializes the submissions directly into static data files and triggers a static build:

![GitHub Issue Submission Template](/images/kojima_issue_creation_.png)
`,
    why: "Built to create an automated, community-driven platform for hosting and showcasing lightweight web tools and games without maintaining dedicated database servers or recurring backend infrastructure costs.",
    architecture: [
      "Issue-Driven Content Ingestion: Users submit tools via structured GitHub Issue templates with automated JSON schema validation.",
      "Git as a Database: Maintainer approvals trigger GitHub Actions workflows that serialize submissions directly into static data files.",
      "Static Site Generation & Deployment: Incremental static builds using Next.js and Tailwind CSS pushed directly to GitHub Pages.",
      "Automated Health Checks: Scheduled cron actions that ping hosted tools to verify availability and flag defunct links."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "Web Development"],
    github: "https://github.com/rexxAman/kojima",
    image: "/images/Kojiima.png"
  },
  {
    slug: "sukauto",
    title: "Build a deep research agent for the market analysis",
    description: "An AI-driven platform that analyzes real-time market data to provide actionable insights and predictions for entrepreneurs and investors.",
    longDescription: `Sukauto is an autonomous intelligence platform engineered to parse high-frequency financial news, industry disclosures, and sector signals to deliver distilled market trends and risk valuations for founders, angel investors, and analysts.

### System Architecture & Agent Graph
The platform coordinates autonomous Llama 3.1 agents using an iterative agentic pipeline. A Planner Model evaluates intent and orchestrates tool routing via ReAct and MCP servers, executing real-time web, YouTube, and Google scrapers. The system iteratively reflects on draft outputs, identifies research gaps, and merges insights into comprehensive market reports:

![Sukauto End-to-End System Architecture & Agent Graph](/images/sukauto-whole-system.png)
`,
    architecture: [
      "Agentic Orchestration: LangChain / LangGraph agents coordinate multi-hop research, MCP tool servers, and data synthesis pipelines.",
      "High-Performance API: Built on FastAPI with asynchronous worker routines and Redis caching for sub-second query latency.",
      "Llama 3.1 & Transformer Inference: Specialized models fine-tuned for financial sentiment scoring, gap detection, and strategic summarization.",
      "Interactive Dashboard: Next.js frontend with real-time streaming LLM response rendering and structured report generation."
    ],
    features: [
      "Real-time market sentiment scoring across thousands of news feeds and analyst reports",
      "Automated competitor landscape generation and SWOT analysis powered by LLMs",
      "Custom trend alerting and sector-specific risk breakdown charts"
    ],
    tags: ["Python", "LangChain", "FastAPI", "Next.js", "LLM", "Hugging Face"],
    github: "https://github.com/rexxAman/Sukauto",
    image: "/images/sukauto.png"
  },
  {
    slug: "talklytics",
    title: "Talklytics | Real-time Conversational Engagement Detection",
    description: "Talklytics is a real-time conversational engagement detection system that analyzes sales calls to output a convincingness score (1–5) based on acoustic features, speech recognition, and NLP sentiment analysis.",
    longDescription: "Talklytics is an AI-powered conversational analytics system designed to evaluate speaker efficacy, objection handling, and listener engagement during sales calls and presentations. By combining acoustic prosody extraction with NLP rhetorical models, it outputs real-time feedback and actionable coaching metrics.",
    sections: [
      {
        title: "Signal Processing & Scoring Pipeline",
        items: [
          "Acoustic Feature Extraction: Librosa and PyTorch extract pitch variability, speech cadence, jitter, and silence duration distributions.",
          "Speech-to-Text & NLP: Automatic speech recognition feeding transcribed text into fine-tuned NLP models for rhetorical structure and sentiment analysis.",
          "Late-Fusion Scoring Engine: Blends acoustic and semantic embeddings into a calibrated convincingness score (1–5).",
          "Interactive Visualizer: Real-time speaker timeline with pause heatmaps and conversational pacing graphs."
        ]
      }
    ],
    features: [
      "Multimodal analysis fusing audio prosody and transcript semantic cues",
      "Real-time speaking pace and filler-word detection with visual prompts",
      "Exportable conversation summaries and sentiment progression charts"
    ],
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "Data Visualization", "Feature Engineering"],
    github: "https://github.com/rexxAman/Talklytics-update",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Talklytics-update"
  },
  {
    slug: "botanical-merge",
    title: "Botanical Merge | AI Image Blending & Synthesis",
    description: "An AI-powered image blending tool that allows users to merge two images into a unique creation using advanced neural style transfer and feature synthesis algorithms.",
    longDescription: "Botanical Merge is an experimental creative vision tool that explores algorithmic image fusion, allowing creators to synthesize biological, botanical, and abstract aesthetics with high fidelity.",
    features: [
      "Fine-grained control over content vs. style weighting and color palette transfer",
      "Real-time canvas transforms and comparative side-by-side inspection",
      "High-resolution export options with perceptual quality enhancements",
      "Preset library showcasing botanical and organic texture blends"
    ],
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    github: "https://github.com/rexxAman/Botanical_Merge",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Botanical_Merge"
  },
  {
    slug: "bodo",
    title: "Bodo | Resume Builder & Interview Guidance",
    description: "A sleek and intuitive resume builder application that helps you create professional resumes with beautiful templates, real-time editing capabilities, and interview coaching.",
    longDescription: "Bodo is an end-to-end career toolkit designed to streamline the resume creation process and provide targeted interview preparation based on desired job roles and industry expectations.",
    why: "Created to help job seekers produce clean, ATS-compliant resumes with verified formatting, coupled with interactive technical and behavioral interview preparation.",
    features: [
      "Real-time live resume preview with multiple ATS-optimized typography and layout options",
      "One-click PDF generation with consistent margins, page break protection, and styling",
      "Role-specific interview preparation question prompts and answer guidance",
      "Cloud sync and local draft storage with zero data loss"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    github: "https://github.com/rexxAman/Bodo",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Bodo"
  },
  {
    slug: "safesphere",
    title: "SafeSphere | Crime Awareness & Emergency Platform",
    description: "Engineered a full-stack platform using React.js and Flask for real-time crime monitoring, SOS alerts, and FIR registration. Implemented data visualization using structured datasets to generate actionable insights.",
    longDescription: "SafeSphere is a community safety and emergency dispatch web application that unifies incident reporting, geo-spatial crime mapping, and rapid SOS emergency alerting into a single unified platform.",
    architecture: [
      "Geo-Spatial Frontend: React.js application with interactive Leaflet maps for cluster rendering of incident hotspots.",
      "Backend Services: Flask REST API providing endpoints for FIR report submission, verification, and reverse geocoding.",
      "Spatial Database: SQLite with spatial indexing for fast proximity and bounding-box queries."
    ],
    features: [
      "Interactive incident map with filterable crime categories, dates, and severity tags",
      "Instant SOS button triggering location-tagged alert broadcasts",
      "Digital FIR submission workflow with automated reference tracking",
      "Data visualization dashboards showing crime trend patterns over time"
    ],
    tags: ["Python", "React.js", "Data Visualization", "GIS", "Flask", "SQLite"],
    github: "https://github.com/rexxAman/SafeSphere-client",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/SafeSphere-client"
  },
  {
    slug: "revumind",
    title: "RevuMind | Multimodal AI Review Intelligence",
    description: "A multimodal AI system that analyzes product reviews from both text and customer-uploaded images to generate actionable sentiment and defect insights.",
    longDescription: "RevuMind bridges the gap between text sentiment and visual product reality. It parses user-generated reviews alongside product photos to detect discrepancies between written claims and actual visual defects, providing a comprehensive quality scorecard.",
    features: [
      "Joint text-image sentiment and anomaly verification",
      "Automated defect detection and visual evidence tagging",
      "Product sentiment scorecards with feature-by-feature breakdowns",
      "REST API for automated batch processing of e-commerce feeds"
    ],
    tags: ["Python", "Multimodal AI", "Computer Vision", "NLP", "FastAPI", "PyTorch"],
    github: "https://github.com/rexxAman/RevuMind"
  },
  {
    slug: "riot",
    title: "Riot | Multi-Agent Resume Analysis Platform",
    description: "An AI-powered resume analysis and optimization platform powered by the Server-Riot backend, using specialized LLM agents to evaluate resumes against job descriptions.",
    longDescription: "Riot is a multi-agent resume intelligence platform with a dedicated backend (Server-Riot). It deploys specialized autonomous LLM agents (ATS Scorer, Syntax & Impact Analyzer, Skills Gap Evaluator, and Formatting Critic) that debate and synthesize comprehensive candidate feedback.",
    sections: [
      {
        title: "Multi-Agent Personas",
        items: [
          "ATS Compatibility Scorer: Checks layout hierarchies, standard headers, and parser parsing fidelity.",
          "Syntax & Impact Analyzer: Highlights passive voice and measures action-verb and quantitative impact density.",
          "Skills Gap Evaluator: Cross-references resume keywords against target job descriptions.",
          "Formatting Critic: Flags spacing inconsistencies, margin issues, and typography errors."
        ]
      }
    ],
    features: [
      "Multi-agent critique analyzing formatting, ATS compatibility, impact metrics, and skills gaps",
      "Job description match scoring with prioritized missing skill suggestions",
      "Line-by-line bullet point rewrite recommendations"
    ],
    tags: ["Python", "Multi-Agent Systems", "FastAPI", "LangChain", "LLM", "NLP"],
    github: "https://github.com/rexxAman/Server-Riot"
  },
  {
    slug: "skky",
    title: "Skky | AI Autonomous Travel Planning Platform",
    description: "A comprehensive travel planning application leveraging intelligent AI agents to generate personalized multi-day itineraries, flight discovery, accommodations, and curated activities.",
    longDescription: "Skky automates vacation planning by using coordinated AI agents that understand travel budgets, pacing preferences, dietary constraints, and geographical logistics to formulate realistic day-by-day travel schedules.",
    features: [
      "Day-by-day optimized travel schedules with localized suggestions",
      "Budget-aware flight, hotel, and attraction planning",
      "Interactive map routing ensuring minimal transit overhead between stops",
      "Collaborative trip sharing and exportable PDF itineraries"
    ],
    tags: ["TypeScript", "Next.js", "AI Agents", "Tailwind CSS", "API Integration"],
    github: "https://github.com/rexxAman/Skky"
  },
  {
    slug: "deep-research-agent",
    title: "Deep Research Agent | Autonomous Multi-Hop Researcher",
    description: "An autonomous Python research agent that plans research strategies, performs iterative web queries, synthesizes findings across sources, and produces comprehensive analytical reports.",
    longDescription: "Deep Research Agent tackles open-ended information retrieval by recursively formulating sub-queries, scraping search engine results, evaluating source credibility, and cross-referencing citations to build deep investigative synthesis documents.",
    architecture: [
      "Iterative Planning & Reflection: Generates dynamic query trees and revises search plans as new information is discovered.",
      "Multi-Source Scraping: Headless scraping and markdown content distillation from live web pages.",
      "Recursive Synthesis: Iterative chunk aggregation and cross-citation verification.",
      "Report Generation: Compiles findings into structured markdown reports with bibliographies."
    ],
    features: [
      "Autonomous query formulation with reflection and gap detection",
      "Recursive web crawling and noise-reduction content extraction",
      "Fact verification with inline citations and references"
    ],
    tags: ["Python", "AI Agents", "Web Scraping", "LangChain", "LLM", "Information Retrieval"],
    github: "https://github.com/rexxAman/Deep_reseach_agent"
  },
  {
    slug: "team-agent",
    title: "Team Agent | Collaborative Multi-Agent Task Orchestration",
    description: "A multi-agent orchestration framework where specialized autonomous agents collaborate in teams to solve complex multi-stage tasks.",
    longDescription: "Team Agent implements structured multi-agent communication patterns, allowing leader, specialist, and reviewer agents to divide and conquer large software engineering and research problems.",
    architecture: [
      "Role-Based Architecture: Configurable roles (Planner, Executor, Critic, Verifier) with defined state transitions.",
      "Shared Context Memory: Centralized blackboard pattern with message queues for inter-agent communication.",
      "Task Decomposition Engine: Breaks high-level objectives into directed acyclic dependency graphs.",
      "Self-Healing Execution: Critic agents identify failures and dynamically spawn corrective tasks."
    ],
    tags: ["Python", "Multi-Agent Systems", "LangGraph", "Distributed Systems", "AI"],
    github: "https://github.com/rexxAman/Team-Agent"
  },
  {
    slug: "bodo-ats-scorer",
    title: "Bodo ATS Scorer | Algorithmic Resume Parser & Benchmark Engine",
    description: "A Python-based backend engine for parsing resume text, extracting key entities, and calculating rigorous ATS compatibility scores against industry rubrics.",
    longDescription: "Bodo ATS Scorer provides the scoring intelligence behind resume evaluation. It utilizes rule-based NLP, regular expression heuristics, and semantic matching to evaluate formatting hygiene, keyword density, and structural integrity.",
    sections: [
      {
        title: "Scoring Methodology",
        content: "Evaluates formatting cleanliness (single column, parseable unicode characters, valid section headers) and semantic match against job description vocabularies using TF-IDF and dense embeddings."
      }
    ],
    features: [
      "Comprehensive ATS compliance grading across formatting, keywords, and length",
      "Extraction of skills, job titles, education, and dates",
      "Lightweight and embeddable Python microservice with FastAPI"
    ],
    tags: ["Python", "NLP", "Text Processing", "FastAPI", "Data Analysis"],
    github: "https://github.com/rexxAman/Bodo-ats-scorer"
  },
  {
    slug: "news-tracking-system",
    title: "News Tracking System | Automated Feed Ingestion & Monitoring",
    description: "An automated Python pipeline that continuously monitors RSS feeds and news outlets, aggregates articles, and deduplicates coverage in real time.",
    longDescription: "Designed for continuous data intelligence, this pipeline polls news sources, extracts article bodies, performs topic clustering, and stores timestamped events for downstream analysis.",
    features: [
      "Multi-source RSS and article scraping with rate limiting and exponential backoff",
      "Automated deduplication using MinHash and cosine similarity",
      "Clean JSON schema output ready for LLM consumption"
    ],
    tags: ["Python", "Web Scraping", "Data Engineering", "Automation", "NLP"],
    github: "https://github.com/rexxAman/news-tracking-system-"
  },
  {
    slug: "daily-scraper",
    title: "Daily Scraper | Scheduled Web Extraction Framework",
    description: "A lightweight and modular Python scraping framework engineered for reliable daily data harvesting with proxy rotation and rate limit handling.",
    longDescription: "Daily Scraper automates the recurring extraction of structured data from dynamic websites, handling pagination, dynamic DOM loading, and export to CSV/JSON format.",
    features: [
      "Pluggable site scraping adapters with CSS/XPath selector definitions",
      "Automatic retries, user-agent rotation, and anti-blocking strategies",
      "Clean CSV and JSON export pipelines"
    ],
    tags: ["Python", "Web Scraping", "BeautifulSoup", "Automation"],
    github: "https://github.com/rexxAman/Daily-scrapper"
  },
  {
    slug: "labour-market-analysis",
    title: "Labour Market Analysis | Quantitative Economic Insights",
    description: "An exploratory data analysis and econometric modeling project investigating labor market dynamics, wage trends, and sectoral employment shifts.",
    longDescription: "This project applies statistical modeling and data visualization to uncover macro and micro labor market trends, skill demand evolutions, and geographical employment distributions.",
    sections: [
      {
        title: "Methodology & Analysis",
        items: [
          "Data Cleaning & Imputation: Pandas and NumPy pipelines handling missing data and outliers.",
          "Exploratory Visualization: Statistical charts illustrating wage distributions and sector trends.",
          "Econometric Modeling: Regression models analyzing correlation between credentials, location, and compensation."
        ]
      }
    ],
    tags: ["Python", "Data Science", "Pandas", "Data Visualization", "Economics"],
    github: "https://github.com/rexxAman/labour_market_analysis"
  },
  {
    slug: "master-summarizer",
    title: "Master Summarizer | Rapid Document & Article Distillation",
    description: "A client-side JavaScript utility designed to distill long-form articles and text documents into concise, bulleted key takeaways.",
    longDescription: "Master Summarizer provides quick, distraction-free text distillation using frequency-based extractive algorithms and clean reading layouts entirely in the browser.",
    features: [
      "Instant client-side summarization with zero server dependencies",
      "Adjustable summary compression ratios and bullet point mode",
      "Word count and estimated reading time statistics"
    ],
    tags: ["JavaScript", "NLP", "Web Development", "UI Design"],
    github: "https://github.com/rexxAman/MasterSummerizer"
  },
  {
    slug: "url-shortener",
    title: "URL Shortener | Lightweight Link Management Service",
    description: "A fast and reliable URL shortening microservice built with TypeScript, featuring custom slug generation, instant redirection, and click analytics.",
    longDescription: "A minimalist, high-performance link management application that generates compact aliases for long URLs with sub-millisecond redirection lookup.",
    features: [
      "Base62 short code generation algorithm from auto-incrementing IDs",
      "Low-latency link redirection with in-memory caching",
      "Click count and referral analytics logging"
    ],
    tags: ["TypeScript", "Node.js", "Web Development", "REST API"],
    github: "https://github.com/rexxAman/url-shortner"
  },
  {
    slug: "json-beautifier",
    title: "JSON Beautifier | Interactive JSON Formatter & Tree Visualizer",
    description: "A fast, in-browser developer tool for formatting, validating, minifying, and visually inspecting JSON data structures.",
    longDescription: "JSON Beautifier helps developers debug complex API payloads by providing syntax highlighting, error pinpointing with line numbers, and collapsible interactive tree nodes without sending any data to a remote server.",
    features: [
      "Real-time syntax validation with line/column error highlighting",
      "Collapsible tree view for nested arrays and objects",
      "One-click beautify, minify, and clipboard copy",
      "100% private client-side processing"
    ],
    tags: ["TypeScript", "React.js", "Web Development", "Developer Tools"],
    github: "https://github.com/rexxAman/Json-beutifier"
  },
  {
    slug: "rps-game",
    title: "RPS | Interactive Game & State Machine",
    description: "A sleek, animated Rock Paper Scissors game featuring score tracking, randomized computer choices, and interactive game state animations.",
    longDescription: "A front-end interactive game exploring clean state management, keyboard shortcuts, score persistence, and smooth UI transitions in JavaScript.",
    features: [
      "Interactive animations and immediate game outcome feedback",
      "Streak counters and session scoreboard persistence",
      "Keyboard accessibility and smooth transitions"
    ],
    tags: ["JavaScript", "Web Development", "Games"],
    github: "https://github.com/rexxAman/RPS"
  }
];
