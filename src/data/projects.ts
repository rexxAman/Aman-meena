import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    slug: "kojima",
    title: "Kojima | Open-Source Game & Tool Catalog",
    description: "A custom workshop pegboard catalog of tiny, free, and open-source games and tools. This project runs entirely on GitHub: issue templates serve as the submission form, approved issue comments act as the database, and GitHub Actions triggers static builds deployed directly to GitHub Pages.",
    longDescription: "Kojima is a serverless, community-curated workshop pegboard and repository for discovering tiny, single-purpose web tools, creative coding experiments, and indie mini-games. Built with a GitOps philosophy, it requires zero external databases or third-party CMS services, operating exclusively on GitHub's native infrastructure.",
    why: "I built this to create an automated, community-driven platform for hosting and showcasing lightweight web tools and games without maintaining dedicated database servers or recurring backend infrastructure costs.",
    architecture: [
      "Issue-Driven Content Ingestion: Users submit games and web tools via structured GitHub Issue templates with automated JSON schema validation.",
      "Git as a Database: Maintainer approvals trigger automated GitHub Actions workflows that serialize submissions directly into static data files.",
      "Static Site Generation & Deployment: Incremental static builds using Next.js and Tailwind CSS pushed directly to GitHub Pages.",
      "Automated Health Checks: Scheduled cron actions that ping hosted tools to verify availability and flag defunct links."
    ],
    features: [
      "Zero-maintenance, database-free architecture powered entirely by GitHub Actions and Pages",
      "Dynamic tagging and tag-based filtering for instant search across mini-tools and games",
      "Responsive pegboard grid layout with dark/light visual themes and interactive tool cards",
      "Automated schema verification ensuring valid metadata on all user submissions"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "GitHub Actions", "Web Development"],
    github: "https://github.com/rexxAman/kojima",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Kojima"
  },
  {
    slug: "sukauto",
    title: "Sukauto | AI Market Analysis Platform",
    description: "An AI-driven platform that analyzes real-time market data to provide actionable insights and predictions for entrepreneurs and investors.",
    longDescription: "Sukauto is an autonomous intelligence platform engineered to parse high-frequency financial news, industry disclosures, and sector signals to deliver distilled market trends and risk valuations for founders, angel investors, and analysts.",
    why: "I built this to empower entrepreneurs and investors with data-driven insights, helping them parse complex market signals and make informed investment decisions in rapidly evolving markets.",
    architecture: [
      "Agentic Orchestration: LangChain agents coordinate multi-hop research, web scrapers, and data synthesis pipelines.",
      "High-Performance API: Built on FastAPI with asynchronous worker routines and Redis caching for sub-second query latency.",
      "Hugging Face & LLM Inference: Specialized transformer models fine-tuned for financial sentiment scoring and strategic summarization.",
      "Interactive Dashboard: Next.js frontend with real-time streaming LLM response rendering and data visualization."
    ],
    features: [
      "Real-time market sentiment scoring across thousands of news feeds and analyst reports",
      "Automated competitor landscape generation and SWOT analysis powered by LLMs",
      "Custom trend alerting and sector-specific risk breakdown charts",
      "Low-latency streaming responses with asynchronous agent reasoning traces"
    ],
    tags: ["Python", "LangChain", "FastAPI", "Next.js", "LLM", "Hugging Face"],
    github: "https://github.com/rexxAman/Sukauto",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Sukauto"
  },
  {
    slug: "talklytics",
    title: "Talklytics | Real-time Conversational Engagement Detection",
    description: "Talklytics is a real-time conversational engagement detection system that analyzes sales calls to output a convincingness score (1–5) based on acoustic features, speech recognition, and NLP sentiment analysis.",
    longDescription: "Talklytics is an AI-powered conversational analytics system designed to evaluate speaker efficacy, objection handling, and listener engagement during sales calls and presentations. By combining acoustic prosody extraction with NLP rhetorical models, it outputs real-time feedback and actionable coaching metrics.",
    why: "I built this to help sales professionals and presenters evaluate communication patterns objectively and sharpen their pitch delivery using empirical speech and language metrics.",
    architecture: [
      "Acoustic Feature Extraction: Librosa and PyTorch extract pitch variability, speech cadence, jitter, and silence duration distributions.",
      "Speech-to-Text & NLP: Automatic speech recognition feeding transcribed text into fine-tuned NLP models for rhetorical structure and sentiment analysis.",
      "Late-Fusion Scoring Engine: Blends acoustic and semantic embeddings into a calibrated convincingness score (1–5).",
      "Interactive Visualizer: Real-time speaker timeline with pause heatmaps and conversational pacing graphs."
    ],
    features: [
      "Multimodal analysis fusing audio prosody and transcript semantic cues",
      "Real-time speaking pace and filler-word detection with visual prompts",
      "Comprehensive call scorecard with specific recommendations for improving engagement",
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
    why: "I built this to provide a creative playground for exploring neural style transfer and image harmonization techniques without complex local environment setup.",
    architecture: [
      "Deep Feature Extraction: Pretrained PyTorch convolutional backbones extract content representations and Gram-matrix style representations.",
      "Optimization-Based Synthesis: Custom loss formulations balancing structural preservation, color harmony, and texture blending.",
      "Fast Client-Side Previews: Canvas-accelerated image preprocessing and interactive parameter sliders before running neural blending.",
      "Cloud Pipeline: Asynchronous GPU task dispatch for high-resolution output rendering."
    ],
    features: [
      "Fine-grained control over content vs. style weighting and color palette transfer",
      "Real-time canvas transforms and comparative side-by-side inspection",
      "High-resolution export options with perceptual quality enhancements",
      "Preset library showcasing botanical and organic texture blends"
    ],
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "Data Visualization", "Feature Engineering"],
    github: "https://github.com/rexxAman/Botanical_Merge",
    image: "https://opengraph.githubassets.com/68f21bcaeab8159d46621d0e04c9904029248642391cd3754304752536c295b2/rexxAman/Botanical_Merge"
  },
  {
    slug: "bodo",
    title: "Bodo | Resume Builder & Interview Guidance",
    description: "A sleek and intuitive resume builder application that helps you create professional resumes with beautiful templates, real-time editing capabilities, and interview coaching.",
    longDescription: "Bodo is an end-to-end career toolkit designed to streamline the resume creation process and provide targeted interview preparation based on desired job roles and industry expectations.",
    why: "I built this for peers who were struggling to build clean, ATS-compliant resumes and wanted structured, interactive practice for technical and behavioral interviews.",
    architecture: [
      "Frontend: Next.js App Router with TypeScript and Tailwind CSS for instant layout updates.",
      "Database & Auth: Supabase backend handling user profile persistence, custom templates, and interview prep history.",
      "Dynamic PDF Engine: High-precision client-side PDF document generation formatted to pass Applicant Tracking Systems (ATS).",
      "Interview Engine: Structured question banks with interactive feedback loops and keyword suggestions."
    ],
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
    why: "I built this to enhance community safety by giving citizens and responders real-time visibility into localized crime hotspots and providing accessible SOS mechanisms.",
    architecture: [
      "Geo-Spatial Frontend: React.js application with interactive Leaflet/Mapbox maps for cluster rendering of incident hotspots.",
      "Backend Services: Flask REST API providing endpoints for FIR report submission, verification, and reverse geocoding.",
      "Spatial Database: SQLite with spatial indexing for fast proximity and bounding-box queries.",
      "Alert Dispatcher: Real-time emergency notification and SOS message broadcast simulation."
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
    why: "I built this to combat misleading product reviews and help buyers and brands uncover genuine product defects from customer-submitted imagery and text.",
    architecture: [
      "Multimodal Ingestion: Dual pipeline processing unstructured text reviews and uploaded user images simultaneously.",
      "Vision-Language Modeling: Pretrained vision backbones combined with NLP sentiment extractors to cross-verify visual condition with text claims.",
      "Insight Synthesis: Aggregation engine that clusters recurring defect tags and generates actionable product scorecards.",
      "FastAPI Backend: High-speed asynchronous endpoints for real-time review parsing and batch analysis."
    ],
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
    longDescription: "Riot is a multi-agent resume intelligence platform with a dedicated backend (Server-Riot). It deploys specialized autonomous LLM agents (ATS Scorer, Syntax & Impact Analyzer, Skills Gap Evaluator, and Formatting Critic) that debate and synthesize comprehensive, actionable candidate feedback.",
    why: "I built this to provide job seekers with transparent, recruiter-grade critique and clear steps to tailor their resumes for competitive roles.",
    architecture: [
      "Server-Riot Multi-Agent Backend: Built in Python with multi-agent orchestration evaluating distinct dimensions of candidate profiles.",
      "Document Parsing: PDF and DOCX text extraction with structural section parsing (Experience, Education, Skills, Projects).",
      "LLM Evaluation Pipeline: Multi-persona prompt chains that evaluate quantitative impact, action verbs, and keyword alignment.",
      "Structured Scoring & Feedback: Aggregates sub-scores into weighted category breakdowns with inline line-by-line rewrite suggestions."
    ],
    features: [
      "Multi-agent critique analyzing formatting, ATS compatibility, impact metrics, and skills gaps",
      "Job description match scoring with prioritized missing skill suggestions",
      "Line-by-line bullet point rewrite recommendations",
      "Comprehensive downloadable audit report"
    ],
    tags: ["Python", "Multi-Agent Systems", "FastAPI", "LangChain", "LLM", "NLP"],
    github: "https://github.com/rexxAman/Server-Riot"
  },
  {
    slug: "skky",
    title: "Skky | AI Autonomous Travel Planning Platform",
    description: "A comprehensive travel planning application leveraging intelligent AI agents to generate personalized multi-day itineraries, flight discovery, accommodations, and curated activities.",
    longDescription: "Skky automates the tedious aspects of vacation planning by using coordinated AI agents that understand travel budgets, pacing preferences, dietary constraints, and geographical logistics to formulate realistic day-by-day travel schedules.",
    why: "I built this to eliminate the hours spent juggling travel blogs, booking platforms, and map routes by offering an all-in-one conversational itinerary planner.",
    architecture: [
      "Agentic Workflow: Coordinated agent graph separating itinerary generation, route optimization, and activity recommendation.",
      "TypeScript & Next.js UI: Interactive trip calendar with map overlays and draggable schedule blocks.",
      "Real-Time Constraint Handling: Dynamic rescheduling engine adjusting itineraries on the fly based on budget or weather inputs.",
      "Location Services: Geo-coordinate lookup and distance estimation for sensible travel pacing."
    ],
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
    why: "I built this to automate exhaustive exploratory research tasks that normally require hours of manual browsing and synthesis.",
    architecture: [
      "Iterative Planning & Reflection: Generates dynamic query trees and revises search plans as new information is discovered.",
      "Multi-Source Scraping: Headless scraping and markdown content distillation from live web pages.",
      "Recursive Synthesis: Iterative chunk aggregation and cross-citation verification.",
      "Report Generation: Compiles findings into structured markdown reports with bibliographies."
    ],
    features: [
      "Autonomous query formulation with reflection and gap detection",
      "Recursive web crawling and noise-reduction content extraction",
      "Fact verification with inline citations and references",
      "Automated executive summaries and deep-dive technical reports"
    ],
    tags: ["Python", "AI Agents", "Web Scraping", "LangChain", "LLM", "Information Retrieval"],
    github: "https://github.com/rexxAman/Deep_reseach_agent"
  },
  {
    slug: "team-agent",
    title: "Team Agent | Collaborative Multi-Agent Task Orchestration",
    description: "A multi-agent orchestration framework where specialized autonomous agents collaborate in teams to solve complex multi-stage tasks.",
    longDescription: "Team Agent implements structured multi-agent communication patterns, allowing leader, specialist, and reviewer agents to divide and conquer large software engineering and research problems.",
    why: "I built this to explore emerging patterns in collaborative multi-agent problem solving and consensus mechanisms.",
    architecture: [
      "Role-Based Architecture: Configurable roles (Planner, Executor, Critic, Verifier) with defined state transitions.",
      "Shared Context Memory: Centralized blackboard pattern with message queues for agent-to-agent inter-process communication.",
      "Task Decomposition Engine: Breaks high-level objectives into directed acyclic dependency graphs.",
      "Self-Healing Execution: Critic agents identify failures and dynamically spawn corrective tasks."
    ],
    features: [
      "Modular agent team configurations with custom skill definitions",
      "Asynchronous task dispatch and execution tracking",
      "Built-in peer review and validation loops",
      "Detailed execution trace logging"
    ],
    tags: ["Python", "Multi-Agent Systems", "LangGraph", "Distributed Systems", "AI"],
    github: "https://github.com/rexxAman/Team-Agent"
  },
  {
    slug: "bodo-ats-scorer",
    title: "Bodo ATS Scorer | Algorithmic Resume Parser & Benchmark Engine",
    description: "A Python-based backend engine for parsing resume text, extracting key entities, and calculating rigorous ATS compatibility scores against industry rubrics.",
    longDescription: "Bodo ATS Scorer provides the scoring intelligence behind resume evaluation. It utilizes rule-based NLP, regular expression heuristics, and semantic matching to evaluate formatting hygiene, keyword density, and structural integrity.",
    why: "I built this as a standalone scoring microservice to power automated resume validation and benchmark testing.",
    architecture: [
      "Text & Layout Extraction: High-fidelity tokenization preserving column hierarchy and section boundaries.",
      "Heuristic Rule Engine: Tests for ATS compliance (single column, recognized headers, standard bullet characters).",
      "Keyword Extraction: TF-IDF and semantic similarity algorithms matching skills against industry taxonomy.",
      "Scoring API: RESTful endpoints returning JSON-formatted diagnostic breakdown."
    ],
    features: [
      "Comprehensive ATS compliance grading across formatting, keywords, and length",
      "Extraction of skills, job titles, education, and dates",
      "Action verb and measurable metric quantification",
      "Lightweight and embeddable Python library / microservice"
    ],
    tags: ["Python", "NLP", "Text Processing", "FastAPI", "Data Analysis"],
    github: "https://github.com/rexxAman/Bodo-ats-scorer"
  },
  {
    slug: "news-tracking-system",
    title: "News Tracking System | Automated Feed Ingestion & Monitoring",
    description: "An automated Python pipeline that continuously monitors RSS feeds and news outlets, aggregates articles, and deduplicates coverage in real time.",
    longDescription: "Designed for continuous data intelligence, this pipeline polls news sources, extracts article bodies, performs topic clustering, and stores timestamped events for downstream analysis.",
    why: "I built this to provide a reliable data feed pipeline for market intelligence and automated news tracking.",
    architecture: [
      "Cron-Based Ingestion: Asynchronous feed fetchers with adaptive backoff and rate limiting.",
      "Content Normalization: HTML boilerpipe removal and structured metadata extraction.",
      "Deduplication Engine: MinHash and cosine similarity to group duplicate wire reports.",
      "Storage: Structured relational logging for chronological querying."
    ],
    features: [
      "Multi-source RSS and article scraping",
      "Automated deduplication and cluster tagging",
      "Clean JSON schema output ready for LLM consumption",
      "Robust error handling and retry mechanisms"
    ],
    tags: ["Python", "Web Scraping", "Data Engineering", "Automation", "NLP"],
    github: "https://github.com/rexxAman/news-tracking-system-"
  },
  {
    slug: "daily-scraper",
    title: "Daily Scraper | Scheduled Web Extraction Framework",
    description: "A lightweight and modular Python scraping framework engineered for reliable daily data harvesting with proxy rotation and rate limit handling.",
    longDescription: "Daily Scraper automates the recurring extraction of structured data from dynamic websites, handling pagination, dynamic DOM loading, and export to CSV/JSON format.",
    why: "I built this to streamline everyday web scraping tasks with minimal boilerplate and robust error recovery.",
    architecture: [
      "Modular Extractors: Pluggable site adapters with CSS/XPath selector definitions.",
      "Resilient Fetcher: Built-in exponential backoff, user-agent rotation, and session management.",
      "Data Pipeline: Clean transformation and schema validation prior to export.",
      "Scheduler Integration: Configured for automated daily execution via cron or workflow dispatch."
    ],
    features: [
      "Customizable site scraping templates",
      "Automatic retries and anti-blocking strategies",
      "Clean CSV and JSON export pipelines",
      "Lightweight standalone architecture"
    ],
    tags: ["Python", "Web Scraping", "BeautifulSoup", "Automation", "Data Pipelines"],
    github: "https://github.com/rexxAman/Daily-scrapper"
  },
  {
    slug: "labour-market-analysis",
    title: "Labour Market Analysis | Quantitative Economic Insights",
    description: "An exploratory data analysis and econometric modeling project investigating labor market dynamics, wage trends, and sectoral employment shifts.",
    longDescription: "This project applies statistical modeling and data visualization to uncover macro and micro labor market trends, skill demand evolutions, and geographical employment distributions.",
    why: "I built this to bridge economic theory with data science techniques, analyzing real-world workforce and compensation datasets.",
    architecture: [
      "Data Cleaning & Imputation: Pandas and NumPy pipelines handling missing data and outliers.",
      "Exploratory Visualization: Seaborn and Matplotlib statistical charts illustrating wage distributions and employment trends.",
      "Econometric Modeling: Regression models analyzing correlation between education, location, and compensation.",
      "Insight Synthesis: Quantitative summaries detailing high-demand skill clusters."
    ],
    features: [
      "In-depth exploratory data analysis on labor market datasets",
      "Statistical regression and trend decomposition models",
      "High-resolution demographic and industry wage visualizations",
      "Actionable summary of hiring and skill demand trends"
    ],
    tags: ["Python", "Data Science", "Pandas", "Data Visualization", "Economics"],
    github: "https://github.com/rexxAman/labour_market_analysis"
  },
  {
    slug: "master-summarizer",
    title: "Master Summarizer | Rapid Document & Article Distillation",
    description: "A client-side JavaScript utility designed to distill long-form articles and text documents into concise, bulleted key takeaways.",
    longDescription: "Master Summarizer provides quick, distraction-free text distillation using frequency-based extractive algorithms and clean reading layouts.",
    why: "I built this to provide a fast, offline-capable tool for condensing long readings and articles without complex setups.",
    architecture: [
      "Client-Side Text Tokenizer: Tokenizes text into sentences and words directly in the browser.",
      "Extractive Scoring: TF-IDF sentence weight calculation identifying core thematic points.",
      "Responsive Reader Interface: Clean, reader-friendly UI with adjustable summary compression ratios."
    ],
    features: [
      "Instant client-side summarization with zero server dependencies",
      "Adjustable summary length and bullet point mode",
      "Word count and estimated reading time statistics",
      "Clean, responsive reading interface"
    ],
    tags: ["JavaScript", "NLP", "Web Development", "UI Design"],
    github: "https://github.com/rexxAman/MasterSummerizer"
  },
  {
    slug: "url-shortener",
    title: "URL Shortener | Lightweight Link Management Service",
    description: "A fast and reliable URL shortening microservice built with TypeScript, featuring custom slug generation, instant redirection, and click analytics.",
    longDescription: "A minimalist, high-performance link management application that generates compact aliases for long URLs with sub-millisecond redirection lookup.",
    why: "I built this to explore low-latency URL hash encoding algorithms and clean TypeScript REST API design.",
    architecture: [
      "Base62 Encoding: Efficient short code generation algorithm from auto-incrementing or hashed IDs.",
      "Fast Lookup Store: Key-value caching for instant 301/302 redirection.",
      "Validation & Security: URL sanitization and protection against malicious loop redirects.",
      "Analytics Logging: Tracks click timestamps, user agents, and referral sources."
    ],
    features: [
      "Custom alias creation and instant base62 short URLs",
      "Low-latency link redirection",
      "Click count and referral analytics",
      "Input URL validation and sanitization"
    ],
    tags: ["TypeScript", "Node.js", "Web Development", "REST API", "Database"],
    github: "https://github.com/rexxAman/url-shortner"
  },
  {
    slug: "json-beautifier",
    title: "JSON Beautifier | Interactive JSON Formatter & Tree Visualizer",
    description: "A fast, in-browser developer tool for formatting, validating, minifying, and visually inspecting JSON data structures.",
    longDescription: "JSON Beautifier helps developers debug complex API payloads by providing syntax highlighting, error pinpointing with line numbers, and collapsible interactive tree nodes.",
    why: "I built this to provide a clean, ad-free developer utility for inspecting nested API responses quickly.",
    architecture: [
      "Custom Parser & Error Locator: Pinpoints syntax mistakes down to the exact row and column.",
      "Interactive Tree View: Collapsible nested object and array nodes with type-colored keys and values.",
      "Clipboard & File I/O: One-click copy, JSON minify, formatting, and file export.",
      "TypeScript & React: Fast client-side execution with zero external data transmission."
    ],
    features: [
      "Real-time syntax validation with inline error highlighting",
      "Collapsible tree view for nested arrays and objects",
      "One-click beautify, minify, and copy actions",
      "100% private client-side processing"
    ],
    tags: ["TypeScript", "React.js", "Web Development", "Developer Tools", "UI"],
    github: "https://github.com/rexxAman/Json-beutifier"
  },
  {
    slug: "rps-game",
    title: "RPS | Interactive Game & State Machine",
    description: "A sleek, animated Rock Paper Scissors game featuring score tracking, randomized computer choices, and interactive game state animations.",
    longDescription: "A front-end interactive game exploring clean state management, keyboard shortcuts, score persistence, and smooth UI transitions in JavaScript.",
    why: "I built this as a clean exploration of JavaScript state transitions, sound/visual feedback loops, and interactive UI design.",
    architecture: [
      "Game State Machine: Handles rounds, win/loss/draw evaluation, and streak calculation.",
      "Interactive UI: Responsive layout with smooth CSS animations and celebratory visual cues.",
      "Session Storage: Persists game win/loss streaks across browser refreshes."
    ],
    features: [
      "Interactive animations and immediate game outcome feedback",
      "Streak counters and scoreboard persistence",
      "Clean, responsive modern design",
      "Keyboard accessibility and smooth transitions"
    ],
    tags: ["JavaScript", "Web Development", "State Machine", "UI/UX", "Games"],
    github: "https://github.com/rexxAman/RPS"
  },
  {
    slug: "skybox",
    title: "SkyBox | 3D Interactive Canvas Environment",
    description: "An interactive 3D WebGL skybox environment featuring customizable cube textures, camera navigation, and dynamic lighting.",
    longDescription: "SkyBox explores 3D space rendering in the browser using WebGL and Canvas technologies, providing an immersive panoramic environment with 360-degree orbit controls.",
    why: "I built this to explore 3D rendering mathematics, projection geometry, and WebGL scene lighting in modern web interfaces.",
    architecture: [
      "WebGL Scene Pipeline: Cube-map texture mapping applied to a surrounding skybox geometry.",
      "Orbit Camera Controls: Smooth mouse drag and touch rotation with damping effects.",
      "Lighting & Shader Pipeline: Ambient and directional lighting calculations for depth rendering."
    ],
    features: [
      "360-degree immersive camera rotation and zoom controls",
      "Seamless cubemap texture projection",
      "High-performance WebGL rendering with smooth frame rates",
      "Responsive canvas adapting to all display resolutions"
    ],
    tags: ["TypeScript", "WebGL", "Three.js", "3D Graphics", "Creative Coding"],
    github: "https://github.com/rexxAman/Sky-box"
  }
];

