import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    slug: "labour-market-analysis",
    title: "Tracking labour market policy developments across peer countries using local LLMs.",
    description: "An automated intelligence system that monitors and fetches news on labour market policy developments across peer countries, leveraging a local LLM to turn raw, unstructured extractions into meaningful analytical reports.",
    longDescription: "This system automates the tracking and synthesis of labour market policy developments across peer countries. It continuously fetches international news updates, handles noisy or garbled web extractions, and uses a locally hosted LLM to parse and transform the raw content into structured, high-signal intelligence reports. Built with a focus on portability and ease of use, the pipeline is fully reusable at any time on any local machine without external API dependencies.",
    features: [
      "Automated news fetching focused on labour market policy developments across peer countries",
      "Local LLM integration converting noisy and garbled web extractions into coherent, meaningful reports",
      "Self-contained, highly portable architecture designed for effortless execution on any machine",
      "Standardized data structuring for longitudinal policy comparisons and research insights"
    ],
    tags: ["Python", "Local LLM", "AI", "NLP", "Scraping", "Data Engineering"],
    github: "https://github.com/rexxAman/labour_market_analysis"
  },
  {
    slug: "news-tracking-system",
    title: "Central Bank & Financial News Tracking System with Local LLM",
    description: "An automated intelligence pipeline that ingests official XML/RSS feeds from global central banks and economic institutions, processes article text using a local Phi-3 LLM, and exports weekly structured Excel reports.",
    longDescription: `An automated news tracking and intelligence system engineered to extract, normalize, and summarize weekly policy developments from premier central banks and international economic organizations.

### Multi-Source Data Ingestion
The system monitors official XML, RSS, and Atom feeds across premier monetary institutions—including the Federal Reserve, ECB, Bank of England, RBI, BIS, IMF, World Bank, and Financial Times. For portals with complex or non-standard architectures (e.g., OECD or IMF topics), an intelligent hybrid scraping fallback ensures unbroken coverage.

### Local LLM Synthesis (Phi-3 Mini)
Raw, noisy article extracts and policy speeches are distilled using an offline **Phi-3 Mini** model (\`temperature: 0.1\`, \`num_ctx: 4096\`). The local LLM strips out formatting noise, extracts key policy changes, interest rate commentary, and risk indicators, and generates concise, structured briefs without relying on cloud APIs.

### SQLite Storage & Excel Reporting
Ingested stories are timestamped, deduplicated, and stored in a local SQLite database (\`data/articles.db\`). The pipeline compiles weekly digests into an organized Excel report (\`AI_news_tracker.xlsx\`) formatted for clear visual inspection, executive tracking, and longitudinal analysis.

\`\`\`yaml
# Pipeline & Storage Configuration
pipeline:
  llm_model: "phi3:mini"
  temperature: 0.1
  num_predict: 512
  num_ctx: 4096
  snippet_chars: 500
  max_article_words: 1000
  batch_size: 10
  max_article_age_days: 7

storage:
  db_path: "data/articles.db"
  export_path: "AI_news_tracker.xlsx"
\`\`\`
`,
    features: [
      "Multi-source ingestion tracking official XML, RSS, and Atom feeds from Fed, ECB, BoE, RBI, BIS, IMF, World Bank, and FT",
      "Hybrid scraping and HTML fallback for dynamic, non-standard institutional portals (OECD, IMF)",
      "Local LLM distillation using Phi-3 Mini to extract concise policy intelligence from lengthy transcripts and articles",
      "SQLite storage (data/articles.db) for automated deduplication and historical article tracking",
      "Automated weekly extraction with styled Excel export (AI_news_tracker.xlsx) for visual clarity and analysis"
    ],
    tags: ["Python", "Local LLM", "RSS", "SQLite", "Data Engineering", "Automation", "NLP"],
    github: "https://github.com/rexxAman/news-tracking-system-",
    image: "/images/news-tracking-system.jpeg"
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
    slug: "deep-research-agent",
    title: "Autonomous multi-hop web research agent with recursive search and synthesis.",
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
    slug: "bodo",
    title: "Bodo Resume Builder and Interview Guidance",
    description: "A sleek and intuitive resume builder application that helps you create professional resumes with beautiful templates, real-time editing capabilities, and interview coaching.",
    longDescription: `Bodo is an end-to-end career toolkit designed to streamline the resume creation process and provide targeted interview preparation based on desired job roles and industry expectations. Featuring high-contrast, brutalist design aesthetics, Bodo breaks away from mundane corporate templates to help job seekers stand out while preserving 100% Applicant Tracking System (ATS) compatibility.

### Unignorable Visual Design & Hero
Bodo pairs bold typography, punchy neo-brutalist palettes, and high signal density to command attention from hiring managers:

### Pick Your Weapon: Battle-Tested Templates
Users can choose from diverse, ATS-tested resume and portfolio layouts—from the expressive "Mark Cafe" and editorial "Vintage Chic" to clean minimalist options:

![Bodo Resume Templates Catalog](/images/bodo-templates.png)

### Career Battle Guides & Tactical Playbooks
Integrated with interactive handbooks covering unwritten recruitment rules, ATS bypass mechanics, high-demand technical skills, and cover letter blueprints:

![Bodo Battle Guides Handbook](/images/bodo-guides.png)

### High Signal-Density Guidance
Every guide provides quantifiable bullet-point templates, real-world examples, and direct links to industry-recognized certifications:

![Bodo Tactical Guide Breakdown](/images/bodo-guide-detail.png)

### ATS Arsenal & AI Scorer Engine
Bodo features an open-source, AI-powered ATS scoring system engineered to evaluate candidates directly against job descriptions and validate real-world GitHub contributions:

![Bodo ATS Arsenal Tools](/images/bodo-ats-arsenal.png)

![Bodo ATS Scorer Open Source Repository](/images/bodo-ats-scorer-repo.png)
`,
    why: "Created to help job seekers produce clean, ATS-compliant resumes with verified formatting, coupled with interactive technical and behavioral interview preparation.",
    features: [
      "Real-time live resume preview with multiple ATS-optimized typography and layout options",
      "One-click PDF generation with consistent margins, page break protection, and styling",
      "Comprehensive Battle Guides with quantifiable bullet strategies and recruiter insights",
      "Open-source AI-powered ATS scoring engine checking resumes against GitHub contributions and job descriptions",
      "Cloud sync and local draft storage with zero data loss"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python", "Vercel"],
    github: "https://github.com/rexxAman/Bodo",
    image: "/images/bodo-hero.png"
  },
  {
    slug: "botanical-merge",
    title: "Merging two images using deep learning model.",
    description: "An image blending tool that allows users to merge two images into a unique creation using advanced neural style transfer and feature synthesis algorithms.",
    longDescription: `Botanical Merge is an experimental creative vision tool that explores algorithmic image fusion, allowing creators to synthesize biological, botanical, and abstract aesthetics with high fidelity.

### Neural Style Transfer Studio
The interactive studio allows users to select style references (such as iconic art or botanical textures) and combine them with content images, leveraging deep convolutional feature representations to generate harmonized visual syntheses in real time:

![Botanical Merge Studio Interface](/images/botanical_model.png)
`,
    features: [
      "Fine-grained control over content vs. style weighting and color palette transfer",
      "Real-time canvas transforms and comparative side-by-side inspection",
      "High-resolution export options with perceptual quality enhancements",
      "Preset library showcasing botanical and organic texture blends"
    ],
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    github: "https://github.com/rexxAman/Botanical_Merge",
    image: "/images/botanical_model.png"
  },
  {
    slug: "skky",
    title: "Autonomous AI agents for personalized travel planning and itineraries.",
    description: "A comprehensive travel planning application leveraging intelligent AI agents to generate personalized multi-day itineraries, flight discovery, accommodations, and curated activities.",
    longDescription: "Skky automates vacation planning by using coordinated AI agents that understand travel budgets, pacing preferences, dietary constraints, and geographical logistics to formulate realistic day-by-day travel schedules.",
    features: [
      "Day-by-day optimized travel schedules with localized suggestions",
      "Budget-aware flight, hotel, and attraction planning",
      "Interactive map routing ensuring minimal transit overhead between stops",
      "Collaborative trip sharing and exportable PDF itineraries"
    ],
    tags: ["TypeScript", "Next.js", "AI Agents", "Tailwind CSS", "API Integration"],
    github: "https://github.com/rexxAman/Skky",
    image: "/images/skky.png"
  },
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
    slug: "talklytics",
    title: "Conversation engagement detection system using acoustic and linguistic model.",
    description: "A real-time conversational engagement detection system that analyzes sales calls to output a convincingness score (1–5) based on acoustic features, speech recognition, and NLP sentiment analysis.",
    longDescription: `Talklytics is an AI-powered conversational analytics and real-time sales coaching system designed to evaluate speaker efficacy, objection handling, and listener engagement during live sales calls. By fusing acoustic prosody extraction with NLP rhetorical models, it generates instant coaching suggestions, objection alerts, and comprehensive post-call scorecards.

### Executive Intelligence Dashboard
The platform provides a unified pipeline dashboard tracking total calls, engagement benchmarks, win probability forecasts, and automated BANT qualification scores:

![Talklytics Executive Intelligence Dashboard](/images/talklytics-dashboard.png)

### Live Stream & Call Monitor
During active calls, the system captures live audio streams, generates real-time speaker timelines, and delivers dynamic prompts to help sales reps navigate customer objections on the fly:

![Real-Time Live Call Monitor](/images/talklytics-live-monitor-page.png)

### Prospect Contact Intelligence
Tracks longitudinal deal health across prospect organizations, recording past interaction summaries, sentiment trajectories, and win-probability shifts:

![Prospect Contacts & Dynamic Deal Qualification](/images/talklytics-previous-contacts.png)
`,
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
    image: "/images/talklytics.png"
  },
  {
    slug: "master-summarizer",
    title: "Master Summarizer",
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
    slug: "revumind",
    title: "Multimodal AI system for defect detection and review sentiment analysis.",
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
    slug: "safesphere",
    title: "Crime Awareness and Emergency Platform",
    description: "Engineered a full-stack platform using React.js and Flask for real-time crime monitoring, SOS alerts, and FIR registration. Implemented data visualization using structured datasets to generate actionable insights.",
    longDescription: `SafeSphere is an intelligent public safety, crime awareness, and emergency dispatch platform engineered to empower citizens and local communities with transparent crime statistics, digital incident reporting, and rapid emergency intervention.

### Public Safety Portal
SafeSphere provides an intuitive, citizen-first command hub featuring verified access controls, system status monitoring, and immediate navigation to core protection workflows:

### Digital Services & E-FIR Reporting Portal
A unified reporting gateway streamlining citizen submissions across vital law enforcement categories—including electronic FIR for motor vehicle theft, general theft, missing person alerts, tenant verifications, and cyber crime complaints:

![SafeSphere Digital Services Portal](/images/safesphere-services.png)

### Regional Crime Intelligence & Search
Citizens and analysts can query regional crime statistics, filter by multi-year cycles and offense vectors, and inspect aggregate crime volumes, primary vectors, and peak intensity periods:

![SafeSphere Crime Intelligence Overview](/images/safesphere-statistics.png)

### Dynamic Categorical & Temporal Visualizations
Visual intelligence powered by interactive donut breakdowns of crime composition vectors, regional density rankings, and longitudinal temporal progression curves:

![SafeSphere Vector Breakdown and Temporal Trends](/images/safesphere-charts.png)

### Critical SOS & Emergency Command Center
An urgent dispatch center enabling one-tap emergency broadcasts, visual mapping of crime clusters and incident hotspots, routing to the nearest police precinct, and direct access to emergency response hotlines:

![SafeSphere Emergency Command Center & SOS Portal](/images/safesphere-sos.png)
`,
    architecture: [
      "Geo-Spatial Frontend: React.js and Tailwind CSS application with interactive cluster rendering of incident hotspots and charts.",
      "Backend Services: Flask REST API providing endpoints for FIR report submission, verification, and reverse geocoding.",
      "Spatial Database: SQLite with spatial indexing for fast proximity and bounding-box queries.",
      "Analytics Engine: Optimized aggregation pipeline calculating multi-vector crime densities, historical trends, and risk rankings."
    ],
    features: [
      "Digital FIR submission workflow with automated reference tracking for theft, cyber crime, and missing persons",
      "Critical SOS portal triggering location-tagged alert broadcasts and nearest precinct routing",
      "Interactive crime intelligence dashboards with aggregate volume filtering and vector breakdowns",
      "Data visualization suite featuring vector composition donuts, regional density rankings, and temporal trend curves"
    ],
    tags: ["Python", "React.js", "Data Visualization", "GIS", "Flask", "SQLite", "Tailwind CSS"],
    github: "https://github.com/rexxAman/SafeSphere",
    image: "/images/safesphere-hero.png"
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
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
    title: "JSON Beautifier",
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
    title: "Rock Paper Scissors Game",
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
