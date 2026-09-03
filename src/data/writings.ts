import { Writing } from './types';

export const WRITINGS: Writing[] = [
  {
    slug: 'tokens-are-cheap-thinking-isnt',
    date: 'APR 26',
    readTime: '4 min read',
    title: "Tokens Are Cheap. Thinking Isn't",
    description: 'Why I am limiting my daily AI prompts to protect clarity and attention.',
    likes: 0,
    paragraphs: [
      "I've decided to put a limit on the number of messages I send to AI every day, and here's why.",
      "AI has made us extremely productive. Or at least, it feels that way. We're able to make so much stuff and do so many things that it feels like we should have more free time. But that's not really what's happening. In reality, it feels like the opposite.",
      "AI makes you feel like everyone is constantly doing more. And because of that, you feel this constant pressure to generate more, build more, and produce more output every single hour.",
      "When prompting AI becomes as frictionless as breathing, we stop pausing to actually think through problem architecture. We outsource our initial cognitive wrestling—the very phase where insight and genuine intuition are forged.",
      "Tokens are practically free. A million tokens cost pennies. But your attention, mental bandwidth, and clarity are finite and irrecoverable. By setting a hard ceiling on daily prompt interactions, I'm forcing myself to think longer, plan cleaner, and build with real intention instead of reacting to endless auto-completions."
    ]
  },
  {
    slug: 'building-production-grade-rag',
    date: 'AUG 26',
    readTime: '6 min read',
    title: 'Building Production-Grade RAG: From Chunks to Multi-Agent Graphs',
    description: 'A deep dive into chunking heuristics, retrieval@3 optimization, rerankers, and LangGraph multi-node state cycles.',
    likes: 0,
    paragraphs: [
      'Most retrieval-augmented generation (RAG) tutorials stop at splitting documents into arbitrary 500-token chunks with a fixed 50-token overlap, dumping them into a vector database, and pulling top-k cosine neighbors. In production, this naive setup breaks almost immediately when confronted with nested tables, policy amendments, or multi-hop domain questions.',
      'When indexing real-world trade and regulatory policies at DGFT, naive chunking resulted in an internal retrieval accuracy of barely 54%. Context was clipped across crucial qualification clauses, and queries with negative constraints retrieved documents containing positive rules without contextual negation.',
      'The first major lift came from switching from arbitrary token cuts to layout-aware semantic slicing. By preserving legal hierarchy—chapters, sub-clauses, and tables as cohesive markdown blocks—chunks maintained structural integrity.',
      'Retrieving top-20 candidates using dense vectors and scoring them with a lightweight cross-encoder before feeding the top-3 into the LLM context yielded an immediate lift from 54% to 81% accuracy. Bi-encoders are fast because vectors are computed offline, but they lose fine-grained token-level cross-attention.',
      'By modeling retrieval as a cyclic state graph in LangGraph—with Document Grader, Query Rewriter, and Hallucination Checker nodes—the pipeline dynamically repairs poor queries before generation occurs, avoiding hallucination cascades.'
    ]
  },
  {
    slug: 'multimodal-lie-detection',
    date: 'MAY 26',
    readTime: '5 min read',
    title: 'Multimodal Lie Detection: Fusing Speech Acoustic Features & DistilBERT',
    description: 'Lessons from designing late-fusion Random Forest ensembles for deception detection at DRDO.',
    likes: 0,
    paragraphs: [
      'Deception is rarely isolated to what someone says or how they sound alone. Linguistic cues (such as cognitive complexity, distancing pronouns, and hedge words) tell one half of the story, while acoustic prosody (pitch jitter, speech rhythm, formant shifts, and micro-pauses) tells the other.',
      'During research at DIPR (DRDO), we worked with a corpus of ~1,000 interview recordings to investigate how multimodal fusion could outperform single-modality baselines.',
      'We decomposed raw audio recordings into two parallel streams: an acoustic stream extracting MFCCs, fundamental frequency contours, spectral centroid, jitter, and silence duration distributions across 5-second sliding windows using Librosa; and a linguistic stream transcribing speech using Faster-Whisper and extracting contextual sentence embeddings with a fine-tuned DistilBERT checkpoint.',
      'Early fusion—concatenating dense audio vectors with BERT embeddings into a monolithic classifier—proved prone to overfitting and was dominated by linguistic features due to the dimensionality disparity.',
      'Instead, we built a late-fusion ensemble where sub-models generated independent probability distributions, calibrated and weighted by a Random Forest meta-classifier. The linguistic model achieved 74% accuracy and acoustic 68%, while the late-fusion ensemble reached 81% accuracy.'
    ]
  },
  {
    slug: 'designing-reactive-microservices-fastapi-websockets',
    date: 'MAR 26',
    readTime: '5 min read',
    title: 'Designing Reactive Microservices with FastAPI & WebSockets',
    description: 'Patterns for real-time streaming LLM outputs, background Celery workers, and low-latency client sockets.',
    likes: 0,
    paragraphs: [
      'Modern generative applications cannot rely on standard HTTP request-response patterns. When an agent is coordinating multiple API calls, fetching data, and streaming text tokens, keeping users on a spinning loading indicator ruins the perception of speed.',
      'Building reactive services requires persistent duplex channels where status updates, tool execution traces, and token streams can arrive as independent, non-blocking events.',
      'In high-throughput services, tying a long-running WebSocket directly to a blocking background worker thread exhausts server resources quickly. We decouple the socket layer using Redis Pub/Sub channels.',
      'A lightweight FastAPI WebSocket Gateway handles client authentication and frame serialization, while asynchronous Celery or asyncio workers publish progress tokens and state transitions to channel rooms.',
      'Designing client reconnection protocols with exponential jitter and server-side state checkpoints ensures users never lose generated context during intermittent mobile dropouts.'
    ]
  },
  {
    slug: 'notes-from-enterprise-itsm-incident-triage',
    date: 'JAN 26',
    readTime: '4 min read',
    title: 'Notes from Enterprise ITSM Incident Triage',
    description: 'How analyzing 200+ ServiceNow tickets helped identify failure patterns driving 55% of recurring downtime.',
    likes: 0,
    paragraphs: [
      'During my software internship at Accenture working on an international enterprise account, I conducted a root-cause retrospective across 200+ ServiceNow ITSM tickets. On the surface, tickets presented as isolated errors: database timeout, credential rejection, memory spike.',
      'When clustered systematically, however, over 55% of total ticket volume was driven by just four recurring systemic failure modes: configuration drift between production and staging, missing graceful degradation on upstream timeouts, unrotated secrets, and unmonitored queue backlog.',
      'Documenting these patterns into a standardized triage playbook and introducing automated pre-flight health assertions drastically reduced manual ticket triage cycles, proving that systemic visibility is always more impactful than firefighting.'
    ]
  },
  {
    slug: 'model-context-protocol-in-practice',
    date: 'DEC 25',
    readTime: '5 min read',
    title: 'The Model Context Protocol (MCP) in Practice',
    description: 'Structuring tool-calling schemas, rate limiting, and session safety when connecting LLMs to external systems.',
    likes: 0,
    paragraphs: [
      'Before the Model Context Protocol (MCP), connecting LLMs to internal tools required writing bespoke JSON schemas, custom serialization logic, and ad-hoc error parsers for every provider.',
      'MCP establishes a unified standard for how LLM clients discover, inspect, and invoke tools, resources, and prompt templates across disparate systems.',
      'Building reliable MCP servers requires strict adherence to validation boundaries: enforcing strict JSON Schema typing with Pydantic or Zod, guaranteeing deterministic idempotency for state-mutating actions, and isolating execution inside scoped sandbox containers.',
      'By standardizing tool interfaces, MCP transforms specialized software tools into universal capabilities that any compliant agent can invoke instantly, unlocking a truly modular agentic ecosystem.'
    ]
  }
];
